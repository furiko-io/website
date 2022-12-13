---
sidebar_position: 30
---

# Start Policy

A Job may have an optional **Start Policy**, which defines certain preconditions that must be met before the Job can be started.

## Sample Configuration

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: Job
spec:
  startPolicy:
    concurrencyPolicy: Enqueue
    startAfter: 2022-03-06T00:27:00+08:00
```

## Configuration Options

### `concurrencyPolicy`

Specifies the behavior when there are other concurrent Jobs for the same JobConfig.

The set of allowed values are identical to those specified in a JobConfig's `concurrency.policy` (see [here](../jobconfig/concurrency.md#policy)).

If not specified, it will be inherited from the JobConfig's [`concurrency.policy`](../jobconfig/concurrency.md#policy) value.

### `startAfter`

Specifies an optional timestamp that the Job can only be started after. This allows you to schedule a Job to be only run at a later point in time.

:::info

The behavior when the Job starts will still be subject to the value of `concurrencyPolicy`, which is inherited from the JobConfig's [`concurrency`](../jobconfig/concurrency.md) value if not specified. This means that if `Forbid` is specified, the Job may be queued but eventually fail with `AdmissionError`.

In many cases, the `Enqueue` policy is usually desired when using `startAfter`.

:::
