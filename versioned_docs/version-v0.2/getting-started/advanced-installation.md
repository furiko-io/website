---
sidebar_position: 4
---

# Advanced Installation

This guide explains how to perform a full manual installation of Furiko, and also serves as a full explainer for the [recommended YAML method of installation](./install.md#from-yaml).

The following walkthrough assumes a sufficient understanding of various Kubernetes concepts and knowledge to administer a Kubernetes cluster. In addition, it also assumes that you have understood the [architecture](../development/architecture/index.md) of Furiko and its various components.

## Manually Installing Furiko

To start, first download `furiko-execution.yaml` from the relevant version on the [GitHub Releases](https://github.com/furiko-io/furiko/releases) page.

There are two services that will need to be installed as part of Furiko Execution:

- [`execution-controller`](../development/architecture/execution-controller.md): Responsible for managing and interacting with Execution CRDs
- [`execution-webhooks`](../development/architecture/execution-webhook.md): Responsible for enforcing data mutation and validation of Execution CRDs

### Create Namespace

Create a namespace for Furiko's control plane components. In the YAML, this is `furiko-system`, which is meant to be shared across all Furiko components.

### Install CRDs

Copy and install the `CustomResourceDefinition` resources specified in the YAML.

The following CRDs will be needed by Furiko Execution:

- `jobconfigs.execution.furiko.io`
- `jobs.execution.furiko.io`

### Setup RBAC

We need to set up RBAC for the `execution-controller` and `execution-webhook` services.

1. Create the correct `ClusterRole` and `Role` resources. The RBAC manifests in the YAML can serve as a guide for the minimum permissions needed.
2. Create `ServiceAccount`(s) for the two components, and bind the RBAC with `ClusterRoleBinding` and `RoleBinding` respectively.

Refer to the YAML for the full list of minimum required permissions.

### Build Custom Container Images (optional)

This step can be skipped if you are alright with using the images released on Docker Hub.

If you wish to customize the container image, you can download the binaries directly from the GitHub Releases page to be bundled in your own Docker image.

### Setup Deployments

We can set up the `Deployment` for `execution-controller` and `execution-webhook` now. The `Deployment` manifests in the YAML can serve as a guide for reference.

#### Bootstrap Configuration

Both `execution-controller` and `execution-webhook` requires [Bootstrap Configuration](../reference/configuration/bootstrap.md) loaded from a YAML or JSON file at startup, using the [`--config`](../reference/configuration/execution/controller-flags.md#execution-controller-flags) command-line flag. For example, this can be loaded via a `configMap` volume mount. Refer to the following configuration pages for each of the above binaries:

- [`execution-controller` Configuration](../reference/configuration/execution/controller-config.md)
- [`execution-webhook` Configuration](../reference/configuration/execution/webhook-config.md)

#### Container Configuration

Use the custom container images from the previous step if you built your own images. You can customize other configuration for the `Deployment`, including the `command`, `args` and `securityContext`. By default, images on Docker Hub are [rootless](https://rootlesscontaine.rs/) and thus `runAsNonRoot` is enabled. If using a custom Docker image you may need to disable it.

The liveness and readiness probes default to the HTTP server at port 8080 for both `execution-controller` and `execution-webhook`. To customize the port and paths, refer to the [Bootstrap Configuration](../reference/configuration/bootstrap.md#http).

You can also increase or update the resource limits for the containers if needed.

### Setup Services

Once created, you can create the corresponding `Service` resources as well. Only `execution-webhook` requires a `Service`, since it will be used as an [admission webhook server](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) that extends the Kubernetes API server.

:::info
The YAML method uses a `ClusterIP` service type, which requires a [Container Network Interface (CNI)](https://kubernetes.io/docs/concepts/cluster-administration/networking/) network add-on to be installed in your cluster.

It may be possible to run `execution-webhook` using `LoadBalancer`, which could potentially route traffic from `kube-apiserver` to `execution-controller` over WAN, incurring high latency and greater network instability in general. Another method may be to use `hostNetwork` and run `execution-controller` on the same machines as `kube-apiserver` itself.

Both of the alternative methods mentioned are not officially supported by Furiko.
:::

By default, `execution-webhook` listens on port 8443 (can be changed via bootstrap configuration). The server listens on HTTPS, which is required in order to be used by the Kubernetes API server for webhooks. Refer to the following section on further HTTPS setup.

### Provisioning Webhook Certificates

Traffic between the Kubernetes API server and admission webhook servers must be using HTTPS, so we will need to provision TLS certificates that will be served by `execution-webhook`.

In the YAML installation method, a Job is used to automatically provision a self-signed certificate (valid for 100 years), store it in a Secret, and patch the webhook configurations with the certificate's public key. This functionality is provided by [jet/kube-webhook-certgen](https://github.com/jet/kube-webhook-certgen), and is the recommended approach taken by Furiko since no external add-ons are required.

Alternative methods include using a static TLS certificate, or utilizing cluster add-ons such as [`cert-manager`](https://cert-manager.io/docs/).

### Setup Webhook Configuration

We can now create webhook configuration resources for `execution-webhook`. Both `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources will need to be installed. Refer to the YAML for an example.

The webhook server expects to receive webhook requests at well-defined paths, that include the canonical name of the CustomResourceDefinition. For example, to validate a [Job](../execution/job/index.md), the following path is used:

```
/validating/jobs.execution.furiko.io
```

On the other hand, to mutate a [JobConfig](../execution/jobconfig/index.md), the following path is used:

```
/mutating/jobconfigs.execution.furiko.io
```

Refer to the official Kubernetes documentation on [admission webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#contacting-the-webhook) to manually configure the `caBundle` of the webhook configuration if needed.

## Additional Setup

### Prometheus Metrics

All components, including `execution-controller` and `execution-webhook`, expose Prometheus metrics that provide insight into the status of the service.

In the YAML installation method, [`kube-rbac-proxy`](https://github.com/brancz/kube-rbac-proxy) is used as a sidecar to restrict access to the `/metrics` endpoint for enhanced security. An additional `Service` is also created to expose the metrics using `ClusterIP`.

More information on the setup can be found in the [bootstrap configuration](../reference/configuration/bootstrap.md#http).

### Customize Dynamic Configuration

Furiko also offers a [dynamic configuration](../reference/configuration/dynamic.md) mechanism to configure components without requiring a restart. This is typically loaded from a `ConfigMap`, such that any changes to the configuration can take effect immediately.

More information can be found on the [dynamic configuration](../reference/configuration/dynamic.md) section of the documentation.
