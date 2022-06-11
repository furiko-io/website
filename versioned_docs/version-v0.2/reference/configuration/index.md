# Configuration

Configuration of Furiko is split into two main categories: **bootstrap configuration** and **dynamic configuration**.

## Bootstrap Configuration

**Bootstrap configuration** refers to configuration fields that are specified when starting a component, such as a controller or a webhook server. This configuration typically contains information about port numbers to listen on, whether leader election is enabled, and so on. Modifying these configuration values require a restart of the component to take effect.

The bootstrap configuration is almost identical for almost all components. More details can be found in [Bootstrap Config](./bootstrap.md).

## Dynamic Configuration

**Dynamic configuration**, on the other hand, refers to configuration that is stored in some remote source, typically a ConfigMap, which will take effect immediately upon updating it.

More details can be found in [Dynamic Config](./dynamic.md).
