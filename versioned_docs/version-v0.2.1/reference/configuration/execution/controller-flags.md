---
sidebar_position: 10
sidebar_label: Controller Flags
---

# Execution Controller Flags

This page contains the full command-line flags for ExecutionController.

## Command-Line Flags

<!-- prettier-ignore -->
`--config=<path>`
:   Defines the path to the [bootstrap configuration file](./controller-config.md), either in JSON or YAML.

<!-- prettier-ignore -->
`--teardown-timeout=2m`
:   Defines the timeout to wait for downstream workers and controllers to gracefully shut down, before forcibly quitting, when a termination signal (`SIGINT`, `SIGTERM`) is received.
