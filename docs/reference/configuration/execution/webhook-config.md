---
sidebar_position: 21
sidebar_label: Webhook Config
---

# Execution Webhook Config

This page contains the full [bootstrap configuration](../../../operator-manual/configuration/bootstrap.md) for ExecutionWebhook.

```yaml
# Here we define the bootstrap config for execution-webhook.
# These values are used for bootstrapping of the webhook server at startup,
# so changing any values here require a restart of execution-webhook in order
# to take effect.
apiVersion: config.furiko.io/v1
kind: ExecutionWebhookConfig

# defaultResync controls the default resync duration.
defaultResync: 10m

# Webhook server configuration.
webhooks:
  # bindAddress is the TCP address that the controller manager should bind to for
  # serving webhook requests over HTTPS.
  bindAddress: ":9443"

  # tlsCertFile is the path to the X.509 certificate to use for serving webhook
  # requests over HTTPS.
  tlsCertFile: "/etc/webhook/certs/cert"

  # tlsPrivateKeyFile is the path to the private key which corresponds to
  # TLSCertFile, to use for serving webhook requests over HTTPS.
  tlsPrivateKeyFile: "/etc/webhook/certs/key"

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
```
