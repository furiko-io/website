---
sidebar_position: 12
---

# Concurrency

The `concurrency` of a JobConfig defines the behavior when a single JobConfig has multiple concurrent Jobs.

For example, the `cron.expression` may schedule another Job while the previous Job is active, or an ad-hoc Job may be created while another Job is also active. The `concurrency.policy` defines what to do in such a scenario.

## Sample Configuration

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: JobConfig
spec:
  concurrency:
    policy: Forbid
    maxConcurrency: 3
```

## Configuration Options

### `policy`

The `policy` defines the behavior when a single JobConfig has multiple concurrent Jobs.

When specified in a JobConfig, this controls the behavior of automatically scheduled Jobs and when Jobs are created on an ad-hoc basis (e.g. via `kubectl create`). It is also specified as part of a Job's [`startPolicy`](../job/start-policy.md), which inherits the policy from the JobConfig, but could be overridden if so desired.

| Policy    | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| `Allow`   | Places no restriction on the number of Jobs that can be started concurrently whatsoever.    |
| `Forbid`  | Forbids multiple Jobs to be started concurrently, and will be dropped/rejected immediately. |
| `Enqueue` | Places the incoming Job into a queue to be started once all other Jobs have finished.       |

#### `Allow` Policy

The `Allow` policy means that no restriction is imposed on the number of Jobs that can be started concurrently whatsoever.

:::caution
If a single JobConfig has a misconfigured `cron.expression` that runs too frequently, this could potentially quickly exhaust all resources in the cluster.
:::

#### `Forbid` Policy

The `Forbid` policy means that any incoming Jobs that exceed the [maximum concurrency](#maxconcurrency) will be dropped/rejected immediately.

When scheduled automatically using a [schedule](./scheduling.mdx), if there is another ongoing Job, the newly scheduled Job will be ignored and not be created.

Attempting to run an [ad-hoc Job](../job/adhoc-execution.md) with another ongoing Job will also result in an error:

```
cannot create job: admission webhook "validation.webhook.jobs.execution.furiko.io" denied the request: Job.execution.furiko.io "forbid-example-rglxf" is invalid: spec.startPolicy.concurrencyPolicy: Forbidden: forbid-example currently has 1 active job(s), but concurrency policy forbids exceeding maximum concurrency of 1
```

#### `Enqueue` Policy

The `Enqueue` policy means that any incoming Jobs that exceed the [maximum concurrency](#maxconcurrency) will be placed into a queue to be started once all other Jobs have finished.

Any jobs that are queued would be treated as `Queued`, and requires the [JobQueueController](../../development/architecture/execution-controller.md#jobqueuecontroller) to process the Job queue. Jobs will be processed in order of their `creationTimestamp` in FIFO order.

When used to run an [ad-hoc Job](../job/adhoc-execution.md) in conjunction with [`startAfter`](../job/start-policy.md#startafter), this allows you to start a Job after a given time. If instead `Forbid` was used and there happens to be another ongoing Job at the time it was meant to be started, the Job would instead be rejected.

Note that Furiko does not currently support a maximum Job queue length, which could result in a huge backlog of Jobs to be started.

### `maxConcurrency`

Specifying `maxConcurrency` allows you to configure the maximum number of Jobs that can be running concurrently. Defaults to `1`.

The exact behavior of `maxConcurrency` depends on the `policy` used:

| Policy    | Description                                                                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Forbid`  | If there are currently `maxConcurrency` jobs ongoing, incoming Jobs will be rejected.                                                                                                     |
| `Enqueue` | If there are currently `maxConcurrency` jobs ongoing, incoming Jobs will be placed into a queue until the number of ongoing Jobs, and will only be started once other Jobs have finished. |
| `Allow`   | Not allowed to specify `maxConcurrency`.                                                                                                                                                  |

## Recommendations

In practice, we recommend using `Forbid` as a sane default for most jobs for the following reasons:

1. Many automation jobs are not concurrent-safe, and risk performing duplicate operations or running into [TOCTTOU](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use) bugs when run concurrently.
2. In an offline processing scenario, even if the previously running Job runs longer than normal, it would still be able to process all work to be done that would have been picked up by the later scheduled Job anyway.

One pattern that is commonly adopted is to:

1. Use `Forbid` for `policy`.
2. Specify a `cron.expression` which defines the maximum duration between any two Jobs being executed.
   - This roughly equates to the maximum duration for an offline processing queue latency.

## Preventing Concurrent Jobs

The following scenarios explain what happens when there is another concurrent Job when using the `Forbid` policy:

1. Another Job is about to be scheduled by the CronController: Will be silently dropped and from scheduling.
2. An ad-hoc Job is created (e.g. using `kubectl`): Will be rejected by the validating admission webhook in most cases.

If the Job was created almost at the same time that the concurrent Job started, it may be possible for it to bypass the validation webhook. In this case, the [JobQueueController](../../development/architecture/execution-controller.md#jobqueuecontroller) will reject the Job with `AdmissionError` like as follows:

```
$ kubectl describe furikojob jobconfig-sample-btzqx
...
Events:
  Type     Reason            Age   From                Message
  ----     ------            ----  ----                -------
  Warning  AdmissionRefused  12s   JobQueueController  Cannot start new Job, jobconfig-sample has 1 active Jobs but concurrency policy is Forbid
  Warning  Failed            12s   JobController       Job failed with result: AdmissionError
```

:::caution
While Furiko tries its best to prevent concurrent Jobs, it is **not a replacement** for a distributed lock in the application. For highly critical operations, it is still recommended for Job developers to use traditional distributed locks or database systems (e.g. jobs processing money or transactions).
:::
