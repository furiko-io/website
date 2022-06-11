---
sidebar_position: 3
---

# Configuring Furiko

Furiko allows extensive configuration of its behavior, while also defaulting to recommended, sane defaults out of the box.

## Editing the `ConfigMap`

The main method of configuring Furiko is via _dynamic configuration_. As the name suggests, configuration can be dynamically updated and will take effect immediately without requiring a restart of Furiko services.

If you used the [YAML installation method](./install.md#from-yaml), a sample `ConfigMap` has been created for you. Use `kubectl` to open and edit the configuration as follows:

```sh
kubectl -n furiko-system edit cm execution-dynamic-config
```

The full description of all dynamic configuration fields can be found in the [Reference](../reference/configuration/dynamic.md).
