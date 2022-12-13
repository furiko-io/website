# Configuration Guide

Furiko allows extensive configuration of its behavior, while also defaulting to recommended, sane defaults out of the box.

Configuration of Furiko is split into two main categories: **dynamic configuration** and **bootstrap configuration**.

## Dynamic Configuration

The main method of configuring Furiko is via **dynamic configuration**. As the name suggests, configuration can be dynamically updated and will take effect immediately without requiring a restart of Furiko services.

If you used the [YAML installation method](../../getting-started/install.md#from-yaml), a sample `ConfigMap` has been created for you. Use `kubectl` to open and edit the configuration as follows:

```sh
kubectl -n furiko-system edit cm execution-dynamic-config
```

More details can be found in [Dynamic Config](./dynamic.md).

## Bootstrap Configuration

**Bootstrap configuration** refers to configuration fields that are specified when starting a component, such as a controller or a webhook server. This configuration typically contains information about port numbers to listen on, whether leader election is enabled, and so on. Modifying these configuration values require a restart of the component to take effect.

If you used the [YAML installation method](../../getting-started/install.md#from-yaml), you should be able to configure the bootstrap configuration for `execution-controller` as follows:

```yaml
kubectl -n furiko-system edit cm execution-controller-config
```

Note that the container has to be restarted whenever the bootstrap configuration is updated:

```sh
kubectl -n furiko-system rollout restart deployment execution-controller
```

The bootstrap configuration is almost identical for almost all components. More details can be found in [Bootstrap Config](./bootstrap.md).
