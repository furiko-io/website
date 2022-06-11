---
sidebar_position: 1
---

# Bootstrap Configuration

This page lists the bootstrap configuration that is common to all components in Furiko.

Component-specific configuration can be found in other children pages in the _Configuration_ section.

## Configuration Options

There are no default values for bootstrap configuration options (for the most part), so every field must be specified.

### `defaultResync`

Specifies the default resync duration for all informers. Accepts a Golang duration string (e.g. `10m`).

```yaml
defaultResync: 10m
```

### `dynamicConfigs`

Specifies how to load the [Dynamic Configuration](./overview.md#dynamic-configuration).

```yaml
# Default value differs depending the actual component.
dynamicConfigs:
  configMap:
    namespace: furiko-system
    name: execution-dynamic-config

  secret:
    namespace: furiko-system
    name: execution-dynamic-config
```

### `http`

Specifies how to set up HTTP handlers, including Prometheus metrics, readiness and liveness probes.

All HTTP endpoints are currently served on a single HTTP endpoint, as such there is only one `bindAddress` specified.

```yaml
http:
  bindAddress: ":8080"
  metrics:
    enabled: true
  health:
    enabled: true
    readinessProbePath: "/readyz"
    livenessProbePath: "/healthz"
```

### `leaderElection`

Specifies whether and how to set up leader election. Applies only to Controller components (i.e. does not apply to Webhook components).

```yaml
leaderElection:
  enabled: true
  leaseName: execution-controller
  leaseNamespace: furiko-system
  leaseDuration: 30s
  renewDeadline: 15s
  retryPeriod: 5s
```

### `controllerConcurrency`

Specifies the concurrency values for individual controllers. Applies only to Controller components (i.e. does not apply to Webhook components).

```yaml
controllerConcurrency:
  <controller name>:
    factorOfCPUs: 4
```

:::tip

Concurrency can be specified either as an absolute number of worker goroutines (using `workers`), or as a factor of the number of CPUs allocated to the container (using `factorOfCPUs`).

Using `factorOfCPUs` allows you to scale a controller vertically by changing a single CPU limit knob, rather than having to individually tune each knob when increasing the resources allocated to the container. This is useful because most controllers should be CPU-bound.

:::
