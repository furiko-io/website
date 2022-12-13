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
```

## Configuration Options

### `policy`

The ConcurrencyPolicy defines the behavior when a single JobConfig has multiple concurrent Jobs.

When specified in a JobConfig, this controls the behavior of automatically scheduled Jobs and when Jobs are created on an ad-hoc basis (e.g. via `kubectl create`). It is also specified as part of a Job's [`startPolicy`](../job/start-policy.md), which inherits the policy from the JobConfig, but could be overridden if so desired.

| Policy    | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| `Allow`   | Places no restriction on the number of Jobs that can be started concurrently whatsoever.    |
| `Forbid`  | Forbids multiple Jobs to be started concurrently, and will be dropped/rejected immediately. |
| `Enqueue` | Places the incoming Job into a queue to be started once all other Jobs have finished.       |

#### Policy Notes

1. Using `Allow` could potentially quickly result in resource exhaustion of the cluster for a misconfigured `cron.expression` that runs too frequently.
2. When using `Enqueue`, Jobs are started in order of their `creationTimestamp`.
   - Can also be used in conjunction with [`startAfter`](../job/start-policy.md#startafter).
3. Furiko currently does not support a maximum queue length for `Enqueue`, which could result in a huge backlog of Jobs to be started.

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
$ kubectl describe kjob jobconfig-sample-btzqx
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
