---
sidebar_position: 2
---

# Features

Furiko specializes in time-based scheduling of scheduled and adhoc jobs. The following is a non-exhaustive list of features and enhancements offered by Furiko.

## Feature List

### Timezone-aware Cron Scheduling

Furiko allows users to specify a [cron schedule](./execution/jobconfig/scheduling.mdx#cronexpression) to automatically schedule jobs, supporting up to a per-second granularity.

Furiko also offers native support for scheduling jobs on a [cron schedule with timezones](./execution/jobconfig/scheduling.mdx#crontimezone). This allows users to specify their cron schedule in a timezone that is familiar to them, or one that is standardized in their application. If not specified, Furiko also supports specifying a cluster-wide default timezone for all cron schedules.

### Cluster-wide Load Balancing

Furiko offers a unique, [extended cron syntax](./execution/jobconfig/cron-syntax.md#hash-based-load-balancing) that may drastically improve the performance of running distributed cron at scale. For example, specifying `H/5 * * * *` means to run every 5 minutes, on a "random" minute/second within the 5 minute range.

This helps to avoid thundering herd effects in clusters when thousands of other jobs also start at the exact same time, evenly spreading out job executions which reduces waiting duration and impact on other downstream dependencies.

### Strong Concurrency Handling

Furiko introduces stronger [handling of multiple concurrent jobs](./execution/jobconfig/concurrency.md). Using the `Forbid` concurrency policy, Furiko takes a very [strict approach](./development/architecture/execution-controller.md#jobqueuecontroller) to ensuring that multiple jobs will never be started at the same time, free of race conditions.

In addition, adhoc jobs executed will be subject to the same concurrency policy as if it were scheduled automatically, which may help prevent untimely incidents.

### Scheduling Future Executions

Furiko allows ad-hoc jobs to be queued for [execution at a later time](./execution/job/adhoc-execution.mdx#scheduling-adhoc-future-executions), or to start a new job execution immediately once the current job execution is finished.

### Preventing Missed and Double Executions

Furiko provides strong guarantees to schedule jobs even in the face of failure, and is able to prevent both double runs and missed runs in many cases.

Furiko prevents double scheduled runs by using [deterministic name formats](./development/architecture/execution-controller.md#jobcontroller). It also prevents missed runs using [back-scheduling](./execution/jobconfig/scheduling.mdx#back-scheduling) to tolerate short downtime, allowing the cluster administrator to safely restart or upgrade Furiko at any time.

### Enhanced Timeout Handling

Furiko offers additional timeouts that can be used during a job execution. For example, [pending timeouts](./execution/job/timeout-retries.md#pendingtimeoutseconds) help to gracefully handle node outages instead of hanging on a single execution, ensuring forward progress for job configs that are automatically scheduled.

### Job Options

Furiko allows you to use JobConfigs as templates for Jobs, by passing parameters into the Job. The JobConfig can be parameterized with [Job Options](./execution/jobconfig/job-options.md), which defines a structured input that will be validated and substituted at runtime.

### Running multiple parallel tasks per Job

Furiko supports parallelism of tasks within a Job, which supports index number-based, index key-based or matrix-based expansion of tasks that will be run in parallel. A completion strategy can also be defined that will automatically terminate all parallel tasks when certain conditions are met.

### Federation Across Multiple Clusters

Furiko also provides add-on support for federating, cordoning and draining of JobConfigs across multiple Kubernetes clusters safely.

:::info
This feature is currently planned in the [Roadmap](./contributing/roadmap.md).
:::

### Monitoring, Notifications and Telemetry

Furiko also provides add-on support for monitoring and notifications of job executions and failures, via a variety of methods including Prometheus metrics, Slack webhooks and email notifications. In addition, Furiko provides alternative API servers to query, store and analyze large amounts of job executions per day, reducing the stress on `kube-apiserver`.

:::info
This feature is currently planned in the [Roadmap](./contributing/roadmap.md).
:::

## Comparison with `batch/v1`

The following is a short comparison between Furiko and `batch/v1` [Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/) and [CronJobs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/):

| Feature                                                                                          | Furiko                         | `batch/v1`                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Scheduling**                                                                                   |                                |                                                                                                                         |
| [Cron expressions](./execution/jobconfig/scheduling.mdx#cronexpression)                          | :white_check_mark:             | :white_check_mark:                                                                                                      |
| [Cron timezone](./execution/jobconfig/scheduling.mdx#crontimezone)                               | :white_check_mark:             | :grey_question:<br />([not officially supported](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)) |
| [Scheduling constraints](./execution/jobconfig/scheduling.mdx#constraints)                       | :white_check_mark:             | :x:                                                                                                                     |
| [Cron load balancing](./execution/jobconfig/cron-syntax.md#hash-based-load-balancing)            | :white_check_mark:             | :x:                                                                                                                     |
| [Forbid concurrent with adhoc execution](./execution/job/adhoc-execution.mdx#concurrency)        | :white_check_mark:             | :x:                                                                                                                     |
| [Back-scheduling](./execution/jobconfig/scheduling.mdx#back-scheduling)                          | :white_check_mark:             | :white_check_mark:<br />(via `startingDeadlineSeconds`)                                                                 |
| [Enqueue jobs for later](./execution/job/adhoc-execution.mdx#scheduling-adhoc-future-executions) | :white_check_mark:             | :x:                                                                                                                     |
| **Task Execution**                                                                               |                                |                                                                                                                         |
| [Retries using separate Pods](./execution/job/timeout-retries.md#retries)                        | :white_check_mark:             | :x:                                                                                                                     |
| [Pending timeouts for dead nodes](./execution/job/timeout-retries.md#pendingtimeoutseconds)      | :white_check_mark:             | :x:                                                                                                                     |
| [Multiple parallel Pods per Job](./execution/job/parallelism.mdx)                                | :white_check_mark:             | :white_check_mark:                                                                                                      |
| [Parallel expansion by list and matrix](./execution/job/parallelism.mdx)                         | :white_check_mark:             | :x:                                                                                                                     |
| [Custom task executors](./execution/job/task-executor.md)                                        | :grey_question:<br />(planned) | :x:                                                                                                                     |
| **General**                                                                                      |                                |                                                                                                                         |
| [Automatic cleanup with TTL](./execution/job/garbage-collection.md)                              | :white_check_mark:             | :white_check_mark:                                                                                                      |
| [Parameterization of job inputs](./execution/jobconfig/job-options.md)                           | :white_check_mark:             | :x:                                                                                                                     |
