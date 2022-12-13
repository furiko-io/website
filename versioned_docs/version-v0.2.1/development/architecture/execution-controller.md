# ExecutionController

**ExecutionController** consists of several controllers responsible for managing [Jobs](../../execution/job/index.md) and [JobConfigs](../../execution/jobconfig/index.md).

This page will attempt to discuss some of the inner workings of the individual controllers and webhooks, explaining how some guarantees are provided.

A large part of the design was inspired from a chapter of Google's SRE Book ([Distributed Periodic Scheduling with Cron](https://sre.google/sre-book/distributed-periodic-scheduling/)) and other platforms including [Rundeck](https://www.rundeck.com/).

## CronController

The **CronController** is responsible for scheduling Jobs based on their JobConfig's schedule.

Every second, the CronController iterates through all JobConfigs, checking if any of them are due for scheduling. It uses an in-memory cache to store the next expected schedule time for all JobConfigs to avoid expensive CPU computation every second. If a JobConfig is due to be scheduled, additional checks like concurrency policy will be performed before actually creating the Job object.

The CronController uses deterministic Job name format: `<JOBCONFIG_NAME>.<UNIX_TIMESTAMP>` (e.g. `jobconfig-sample.1646586360`). This helps prevent duplicate Jobs from being started in the event of a retryable error, or if the controller was restarted in the middle of scheduling a JobConfig.

The CronController is also able to detect if any schedules were missed and [back-schedule them accordingly](../../execution/jobconfig/scheduling.mdx#back-scheduling).

## JobQueueController

The **JobQueueController** is responsible for starting Jobs that were created by setting the `status.StartTime` field. This process of "starting" a Job is so that we can:

1. Ensure that Jobs do not violate their [concurrency policy](../../execution/jobconfig/concurrency.md) in any way, by maintaining and performing atomic operations to an in-memory [ActiveJobStore](#activejobstore).
2. Start any Jobs that were deferred to run in the future.
3. Ensure to start multiple Queued jobs in the order that they were created.

The JobQueueController is able to parallelize to multiple workers (goroutines) and each goroutine works on a separate subset of Jobs partitioned by their JobConfig. Thanks to `workqueue`, we can ensure that no two goroutines will be working on the same set of Jobs concurrently, and so we can process all Jobs in a linearizable fashion without violating any concurrency or ordering guarantees.

### ActiveJobStore

The JobQueueController interacts with an in-memory store called the **ActiveJobStore**, which is responsible for maintaining the source of truth of active job counts per JobConfig.

The ActiveJobStore acts as a global synchronizer for the entire cluster, and works in the following manner:

1. Only the leading ExecutionController has an in-memory ActiveJobStore, otherwise non-leaders should not attempt to populate the store; any past leader which lost its lease **MUST** give up control immediately.
2. Upon getting elected as leader, the contents of the ActiveJobStore is rehydrated from the current state of the cluster, by listing all current Jobs in kube-apiserver and counting by JobConfig.
3. The ActiveJobStore also has an internal informer to get notified when a Job transitions between active and inactive states, and update its counts internally.
   - The strong assumption here is that a Job **does not** transition from inactive back to active, which provides the concurrency guarantees explained below.
4. Once store rehydration is completed, the other controllers are allowed to start.
5. Before starting a Job, the ActiveJobStore's counter must be incremented in a check-and-set fashion to avoid race conditions.

Since informer events are received after the actual state update in kube-apiserver, there is a possibility of a delayed update from `active -> inactive`, which prevents a new Job from being started despite previous Jobs already having been completed. On the other hand, there is no way for two Jobs to be started concurrently, because the ActiveJobStore **expects** that any transitions from `inactive -> active` MUST be explicitly written to the store, rather than read via a reconcile. This is the guarantee that the ActiveJobStore provides.

:::info
Before the introduction of the JobQueueController to sequentially process all Jobs for starting on a per-JobConfig basis, multiple threads could update the ActiveJobStore at the same time, resulting in [TOCTTOU race conditions](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use). However, after JobQueueController was introduced, the likelihood of race conditions via non-atomic CAS operations falls to 0 and using check-and-set is actually no longer required, but remains as an additional safety guarantee.
:::

## JobController

The **JobController** is responsible for reconciling Jobs after they have been started by the JobQueueController. It performs roughly the following actions in order:

1. Create any tasks that have yet to be created, or wait for a retry delay if set.
   - Perform [context variable](../../execution/jobconfig/context-variables.md) and [job option](../../execution/jobconfig/job-options.md) substitution as tasks are created.
2. Check if any tasks have exceeded its pending timeout, and if so, kill those tasks.
3. Propagate the Job's kill timestamp, if any, to all its unfinished tasks.
4. Check if tasks are still alive beyond a timeout, and use API deletion to kill any unterminated tasks being killed.
5. Reconcile status from all tasks.
6. Delete the Job if it is already finished and has lived beyond its TTL.
7. Ensure all tasks are deleted, reconcile the final status, and remove the finalizer for deletion to proceed.

Some key notes for this controller:

1. Jobs will only create tasks when they are started, otherwise they will perform no write actions. It is the responsibility of the JobQueueController to start only allowed Jobs in the order that they should be started in.
2. Tasks created by Jobs will follow a deterministic name format: `<JOB_NAME>.<RETRY_INDEX>` (e.g. `jobconfig-sample-c6k89.1`). If a task already exists with the given name, the controller assumes that its status is out-of-date and will "adopt" the task. This prevents duplicate tasks from being created.

## JobConfigController

The **JobConfigController** is responsible for reconciling the status of JobConfigs from its downstream Jobs. It is a somewhat straightforward controller, performing only the following actions:

1. Reconcile the list of queued and active Jobs.
2. Update the JobConfig's `LastScheduleTime` which would be used for back-scheduling.
