---
sidebar_position: 3
---

# Components

Furiko is organized into the following components, which groups together related functionality and also serves as individual deployment units.

More information about the architecture can be found [here](./development/architecture/index.md).

## Execution

**Execution** is the heart of Furiko, consists of components to manage, execute and configure jobs and workflows. The following Custom Resource Definitions (CRDs) are introduced:

- [JobConfig](./execution/jobconfig/index.md)
- [Job](./execution/job/index.md)

Read more at [Execution Concepts](./execution/concepts.md).

## Federation

**Federation** is an optional add-on to manage Furiko jobs across multiple Kubernetes clusters, performing cluster-level drain and cordon operations to federate jobs between clusters safely.

:::note
The Federation component is currently only available in our closed-source project, and will be eventually ported to Furiko.
:::

## Telemetry

**Telemetry** is an optional add-on consisting of components for notifications, monitoring and telemetry data, extending the Kubernetes control plane to provide richer insights into executions running on multiple clusters.

:::note
The Telemetry component is currently only available in our closed-source project, and will be eventually ported to Furiko.
:::
