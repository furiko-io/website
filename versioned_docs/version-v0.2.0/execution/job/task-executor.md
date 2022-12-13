---
sidebar_position: 10
---

# Task Executors

Furiko supports an extensible task executor interface, which allows tasks to be created, managed and reconciled in the same way regardless of the actual backing object.

## Task Index

A Job creates one or more tasks during its lifecycle. Each task corresponds to a single **parallel** and **retry index** for the Job:

- **Parallel Index**: If the Job has N [parallel tasks](./parallelism.mdx), then there are N parallel indexes. Otherwise, there is 1 parallel index (i.e. it is not parallel).
- **Retry Index**: If the Job specifies `maxAttempts` of M, then there are _up to_ M retry indexes.

Therefore, each Task corresponds to a single `(N, M)` combination of the above indexes. As an example, for a Job with a parallelism factor of 3 and `maxAttempts` of `2`, up to 6 tasks will be created for the Job (assuming that each attempt had failed).

## Task Executor List

Currently the only task executor available in Furiko is `pod`, but more task executors are planned in the [Roadmap](../../contributing/roadmap.md).

### `pod`

Each task will be created as a [Pod](https://kubernetes.io/docs/concepts/workloads/pods/). On a typical Kubernetes cluster, this translates to one or more containers that run to completion.

<details>
<summary>Example Pod TaskTemplate</summary>

```yaml
taskTemplate:
  pod:
    metadata:
      annotations:
        app.kubernetes.io/name: jobconfig-sample-pod
    spec:
      containers:
        - args:
            - echo
            - Hello world!
          image: alpine
          name: job-container
          resources:
            limits:
              cpu: 100m
              memory: 64Mi
```

</details>

#### Virtual Pods

Using tools such as [Virtual Kubelet](https://github.com/virtual-kubelet/virtual-kubelet), it may be possible for the Pods to manifest as objects other than a CRI container in Kubernetes.

If Virtual Kubelet is provisioned in the cluster, some possible use cases include:

1. Running Pods on serverless compute platforms like [AWS Fargate](https://github.com/virtual-kubelet/virtual-kubelet#aws-fargate-provider)
2. Extending to multi-cluster with [Admiralty](https://github.com/virtual-kubelet/virtual-kubelet#admiralty-multi-cluster-scheduler)

The usage and support of Virtual Kubelet is outside the scope of the Furiko project.

### `argoWorkflow`

:::note

Currently planned in the [Roadmap](../../contributing/roadmap.md).

:::

Each task will be created as an [Argo `Workflow` object](https://argoproj.github.io/argo-workflows/fields/#workflow). Requires [Argo Workflows](https://argoproj.github.io/argo-workflows/) to be installed in the cluster (not included with Furiko).
