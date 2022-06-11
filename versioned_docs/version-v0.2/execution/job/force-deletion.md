---
sidebar_position: 61
---

# Force Deletion

This page describes when and how **force deletion** is used in the JobController.

## Motivation

When [killing a Job](./killing-jobs.md), the controller first attempts to use normal deletion to gracefully terminate the task.

However, if the node is not responsive (e.g. kubelet is not running, unreachable via network, etc.), such deletion may not be effective, since Kubernetes ensures that the Pod will not be deleted until it has confirmed that the container is fully removed and cleaned up on the node itself.

If the JobConfig uses a concurrency policy like `Forbid`, this may **indefinitely block future progress** of the JobConfig from creating and starting new Jobs. As such, Furiko supports "force deletion" as a last resort, which forcefully deletes the Pod, allowing the Job to be terminated in order for the JobConfig to schedule new Jobs.

## Deletion Process

The "force deletion" process is analogous to simply running:

```
kubectl delete pod <pod name> --grace-period=0 --force
```

For more information, see [Forced Pod termination](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination-forced) on the Kubernetes documentation.

:::note

The [official Kubernetes official documentation](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#delete) mentions the following warning about force deletion (emphasis added):

> IMPORTANT: Force deleting pods does not wait for confirmation that the pod's processes have been terminated, which **can leave those processes running until the node detects the deletion and completes graceful deletion**. If your processes use shared storage or talk to a remote API and depend on the name of the pod to identify themselves, force deleting those pods **may result in multiple processes running on different machines using the same identification which may lead to data corruption or inconsistency**. Only force delete pods when you are sure the pod is terminated, or if your application can tolerate multiple copies of the same pod running at once. Also, if you force delete pods the scheduler may place new pods on those nodes before the node has released those resources and causing those pods to be evicted immediately.

:::

Typically when running cron jobs, force deletion is safe most of the time, and in most cases would prefer availability of scheduling over strict guarantees. However, for jobs that are more crucial, they may choose to disable this functionality and instead trigger notifications to investigate node-level issues.

## Configuration

### Task: `forbidTaskForceDeletion`

You can prevent force deletion by specifying `forbidTaskForceDeletion: true` in the JobTaskSpec, as follows:

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: Job
spec:
  template:
    # The normal task template
    taskTemplate: ...

    # Forbids force deletion of the task.
    forbidTaskForceDeletion: true
```

In such a scenario, the controller will simply just wait until the Pod transitions into a terminated state before marking the Job as terminated as well.

### Global: `forceDeleteTaskTimeoutSeconds`

Specifies the default duration that the controller should wait after the `deletionTimestamp` of a task before forcefully deleting the task. Set to 0 to disable force deletion globally.

For more information, see the [Execution Dynamic Config](../../reference/configuration/execution/dynamic-config.md#forcedeletetasktimeoutseconds) documentation.
