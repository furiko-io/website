---
sidebar_position: 2
---

# Dynamic Configuration

This page introduces how to use **Dynamic Configuration** in Furiko.

## Overview

As compared to [_bootstrap configuration_](./bootstrap.md), dynamic configuration can be updated and will take effect immediately upon saving. This type of configuration typically contains knobs to tune the behavior of Furiko, so that any configuration does not require a full restart of any of Furiko services running in the cluster.

### Data Source

Dynamic configuration is typically stored in a ConfigMap, such as `execution-dynamic-config` in `furiko-system` namespace. It can also be stored in a Secret instead if sensitive values need to be stored in a more secure fashion.

The controller and webhook services need to know how to load the dynamic configuration, and thus the references to the dynamic configuration is stored in the bootstrap configuration. If the dynamic configuration is not found, it will fallback to default values.

```{.yaml title="Example Bootstrap Config"}
# The following bootstrap config describes to ExecutionController
# how to load the dynamic config.
apiVersion: config.furiko.io/v1
kind: ExecutionControllerConfig
dynamicConfigs:
  configMap:
    namespace: furiko-system
    name: execution-dynamic-config
```

See [Bootstrap Config](./bootstrap.md) for more details.

### Config Data

Dynamic configuration is split into several configuration files, which correspond to the keys in the ConfigMap itself. More information can be found in the _Dynamic Config_ pages under each component.

The following is an example of how a dynamic configuration ConfigMap may look like:

```{.yaml title="Example Dynamic ConfigMap"}
apiVersion: v1
kind: ConfigMap
metadata:
  name: execution-dynamic-config
  namespace: furiko-system

# Each key in the ConfigMap corresponds to a single dynamic config name.
data:
  # Data in the config must be a YAML or JSON-encoded string.
  jobs: |
    defaultTTLSecondsAfterFinished: 3600
    defaultPendingTimeoutSeconds: 900
  cron: |
    cronFormat: "standard"
    cronHashNames: true
```

## Configuration Options

Documentation on Furiko dynamic configuration is split on a per-component basis.

The following lists the configuration documentation for each component.

- [Execution Dynamic Config](../../reference/configuration/execution/dynamic-config.md)
