---
sidebar_position: 60
---

# Killing Jobs

A Job can be killed after it is started, either manually, through a [timeout](./timeout-retries.md), or other means (such as [parallel completion](./parallelism.mdx#completionstrategy)).

## Using the CLI

The easiest way to kill a Job execution is to use the [`furiko` CLI tool](../../getting-started/cli.mdx):

```sh
furiko kill <job-name>
```

## Kill Timestamp

Each Job has a `killTimestamp` in its spec, which specifies the timestamp before the JobController tries to kill all of its active tasks.

To kill a Job explicitly, set `killTimestamp` to the current time or earlier:

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: Job
spec:
  killTimestamp: "2021-01-01T00:00:00Z"
```

You can also set a time in the future to kill the Job by setting a future time. The JobController will only start killing active tasks once killTimestamp is passed.

Setting a kill timestamp does not imply that the Job will be terminated by time that the kill timestamp has been reached. It simply means that

## Automatic Termination

A Job's task may be automatically terminated from several sources, including but not limited to:

- [Task pending timeout](./timeout-retries.md#pendingtimeoutseconds)
- [Completion of other parallel tasks](./parallelism.mdx#completionstrategy)

## Termination Process

The JobController uses **deletion** to kill tasks, and optionally reaches for **force deletion** as a last resort if the task is still not deleted after a timeout.

### Task Deletion

The JobController uses [normal resource deletion](https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-deletion) to kill a task.

If the `pod` task executor is used, normal graceful termination will apply and container termination lifecycle hooks will be triggered. To adjust the grace period, use `terminationGracePeriodSeconds`. For more information, see [Termination of Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination) on the Kubernetes documentation.

### Force Deletion

When a Pod is running on a Node that is no longer available, above methods to kill the Job will have no effect until the Node comes back up. As a last resort, the controller may opt to use **force deletion** to kill the task instead, which does not block any forward progress of the JobConfig.

For more details and implications of using such a termination method, see the [Force Deletion](./force-deletion.md) documentation.
