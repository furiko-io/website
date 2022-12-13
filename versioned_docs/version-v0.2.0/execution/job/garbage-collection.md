---
sidebar_position: 70
---

# Garbage Collection

As Furiko runs more and more Jobs in the cluster, they may tend to build up over time, even after they are finished.

As such, Furiko imposes a time-to-live (TTL) on all Jobs after they are finished, so that the Kubernetes will not be too overloaded and controllers will be more responsive in general.

## Configuration

### Job: `ttlSecondsAfterFinished`

Each Job can specify `ttlSecondsAfterFinished` which specifies the maximum TTL for a Job after it is finished, beyond which it will be deleted.

If not specified, it will default to the global controller `defaultTTLSecondsAfterFinished` value.

### Global: `defaultTTLSecondsAfterFinished`

The controller has a configuration value `defaultTTLSecondsAfterFinished` which specifies the default TTL for all Jobs created.

To avoid issues with huge amounts of finished Jobs building up, a non-zero TTL is enforced.

Defaults to 3600 (1 hour).

:::tip

When running massive amounts of cron Jobs in the cluster, the API calls to Kubernetes tend to be extremely spiky and predictable every hour.

In practice, we find that skewing the `defaultTTLSecondsAfterFinished` value by 3 minutes (i.e. setting it to `3780`) would avoid making too many overlapping API calls to Kubernetes at the same time.

:::
