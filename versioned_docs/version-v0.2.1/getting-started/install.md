---
sidebar_position: 1
---

# Installing Furiko

This page explains various methods of installation for Furiko.

:::tip
The primary distribution channel for Furiko's releases is on the [GitHub Releases page](https://github.com/furiko-io/furiko/releases). Do keep an eye on that page for latest updates for Furiko.
:::

## Prerequisites

This guide assumes the following prerequisites:

1. You have a working Kubernetes cluster.
2. Your Kubernetes cluster has a CNI plugin installed, such as Calico.
3. You can connect to the cluster with credentials with sufficiently high privileges to install resources. See [Advanced Installation](../operator-manual/advanced-installation.md) for a detailed description of the resources that need to be installed.

## From YAML

The recommended approach to use the distributed YAML manifests on the [GitHub Releases page](https://github.com/furiko-io/furiko/releases), and using `kubectl` to install the manifests provided.

The following command installs the [**Furiko Execution**](../execution/concepts.md) component in a single line:

```sh
kubectl apply -f https://github.com/furiko-io/furiko/releases/latest/download/furiko-execution.yaml
```

Refer to the GitHub Releases page for a full list of available releases.

The Furiko core components will be installed in the `furiko-system` namespace. To see all resources that were installed, use `kubectl -n furiko-system get all`:

```{.optional-language-as-class .no-copy}
$ kubectl -n furiko-system get all
NAME                                        READY   STATUS      RESTARTS   AGE
pod/execution-controller-6d78b46c6c-67j5s   2/2     Running     0          101m
pod/execution-webhook-6f66d5f75c-5bjwz      2/2     Running     0          101m
pod/execution-webhook-certgen-4pnz5         0/2     Completed   0          9s

NAME                                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
service/execution-webhook-metrics-service   ClusterIP   10.96.240.36   <none>        8443/TCP   101m
service/execution-webhook-service           ClusterIP   10.96.83.234   <none>        443/TCP    101m

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/execution-controller   1/1     1            1           101m
deployment.apps/execution-webhook      1/1     1            1           101m

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/execution-controller-6d78b46c6c   1         1         1       101m
replicaset.apps/execution-webhook-6f66d5f75c      1         1         1       101m

NAME                                  COMPLETIONS   DURATION   AGE
job.batch/execution-webhook-certgen   1/1           2s         9s
```

We have just installed the `execution-controller` and `execution-webhook` Deployments. Once running the cluster can accept and reconcile Execution CRDs. More information can be found in the [Architecture](../development/architecture/index.md) section of the documentation.

## Manual Installation

For advanced use cases, Furiko also offers manual installation methods. However, it is recommended to use the YAML method of installation and fixing any issues there, instead of performing a full manual installation below.

See the guide on [Advanced Installation](../operator-manual/advanced-installation.md) for more details.
