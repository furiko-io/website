---
sidebar_position: 20
sidebar_label: Webhook Flags
---

# Execution Webhook Flags

This page contains the full command-line flags for ExecutionWebhook.

## Command-Line Flags

<!-- prettier-ignore -->
`--config=<path>`
:   Defines the path to the [bootstrap configuration file](./webhook-config.md), either in JSON or YAML.

<!-- prettier-ignore -->
`--teardown-timeout=2m`
:   Defines the timeout to wait for downstream workers and webhooks to gracefully shut down, before forcibly quitting, when a termination signal (`SIGINT`, `SIGTERM`) is received.
