---
sidebar_position: 11
sidebar_label: Controller Config
---

# Execution Controller Config

This page contains the full [bootstrap configuration](../../../operator-manual/configuration/bootstrap.md) for ExecutionController.

```yaml
# Here we define the bootstrap config for execution-controller.
# These values are used for bootstrapping of the controller manager at startup,
# so changing any values here require a restart of execution-controller in order
# to take effect.
apiVersion: config.furiko.io/v1
kind: ExecutionControllerConfig

# defaultResync controls the default resync duration.
defaultResync: 10m

# leaderElection controls leader election configuration.
leaderElection:
  # enabled controls whether leader election is enabled.
  enabled: true

  # leaseName controls the name used for the lease.
  # If left empty, then a default name will be used.
  leaseName: execution-controller

  # leaseNamespace controls the namespace used for the lease.
  leaseNamespace: furiko-system

  # leaseDuration is the duration that non-leader candidates will wait after
  # observing a leadership renewal until attempting to acquire leadership of a
  # led but unrenewed leader slot. This is effectively the maximum duration that
  # a leader can be stopped before it is replaced by another candidate. This is
  # only applicable if leader election is enabled.
  leaseDuration: 30s

  # renewDeadline is the interval between attempts by the acting master to renew
  # a leadership slot before it stops leading. This must be less than or equal to
  # the lease duration. This is only applicable if leader election is enabled.
  renewDeadline: 15s

  # retryPeriod is the duration the clients should wait between attempting
  # acquisition and renewal of a leadership. This is only applicable if leader
  # election is enabled.
  retryPeriod: 5s

# dynamicConfigs defines how to load dynamic configs.
dynamicConfigs:
  # configMap defines how the dynamic ConfigMap is loaded.
  configMap:
    namespace: furiko-system
    name: execution-dynamic-config

  # secret defines how the dynamic Secret is loaded.
  secret:
    namespace: furiko-system
    name: execution-dynamic-config

# HTTP handler configuration.
http:
  # bindAddress is the TCP address that the controller should bind to for serving
  # HTTP requests.
  bindAddress: ":8080"

  # metrics controls metrics serving.
  metrics:
    # enabled is whether the controller manager enables serving Prometheus metrics.
    enabled: true

  # health controls health status serving.
  health:
    # enabled is whether the controller manager enables serving health probes.
    enabled: true

    # readinessProbePath is the path to the readiness probe.
    readinessProbePath: "/readyz"

    # livenessProbePath is the path to the liveness probe.
    livenessProbePath: "/healthz"

# controllerConcurrency defines the concurrency factor for individual controllers.
controllerConcurrency:
  # cron controls the concurrency for the Cron controller.
  cron:
    factorOfCPUs: 4

  # job controls the concurrency for the Job controller.
  job:
    factorOfCPUs: 4

  # jobConfig controls the concurrency for the JobConfig controller.
  jobConfig:
    factorOfCPUs: 4

  # jobQueue controls the concurrency for the JobQueue controller.
  jobQueue:
    factorOfCPUs: 4
```
