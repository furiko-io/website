---
sidebar_position: 30
sidebar_label: Dynamic Config
---

# Execution Dynamic Config

This page documents the [dynamic configuration](../../../operator-manual/configuration/dynamic.md) for all execution components.

## Configuration Options

Each of the following sections corresponds to a single key in the dynamic configuration ConfigMap.

### `jobs`

Defines configuration for [Jobs](../../../execution/job/index.md).

#### `defaultTTLSecondsAfterFinished`

Defines the default value of `ttlSecondsAfterFinished` for a Job if it is not defined. For more information, see [Garbage Collection](../../../execution/job/garbage-collection.md).

To avoid issues with huge amounts of finished Jobs building up, a non-zero TTL is enforced.

Defaults to 3600 (1 hour).

#### `defaultPendingTimeoutSeconds`

Defines the default value of `pendingTimeoutSeconds` for a Job if it is not defined. For more information, see [Pending Timeouts](../../../execution/job/timeout-retries.md#pendingtimeoutseconds).

Defaults to 900 (15 minutes).

#### `forceDeleteTaskTimeoutSeconds`

The duration before the controller uses force deletion instead of normal deletion. This timeout is computed from the deletionTimestamp of the object, which may also include an additional delay of `deletionGracePeriodSeconds`. For more information, see [Force Deletion](../../../execution/job/force-deletion.md).

Force deletion causes the task to be deleted without confirmation that the task has already terminated. When `pod` is used for taskTemplate, this means that the container may remain running on the node even though the task or Job is already marked as terminated.

Set this value to 0 to disable force deletion globally. Individual jobs can also specify spec.forbidTaskForceDeletion in the JobTemplate to disable force deletion if this behavior is not desired.

Defaults to 900 (15 minutes).

### `jobConfigs`

Defines configuration for [JobConfigs](../../../execution/jobconfig/index.md).

#### `maxEnqueuedJobs`

The global maximum enqueued jobs that can be enqueued for a single JobConfig.

Defaults to `20`.

### `cron`

Defines configuration for [parsing cron expressions](../../../execution/jobconfig/cron-syntax.md) within the cluster.

#### `cronFormat`

Specifies the format used to parse cron expressions. The only difference is in the [Day of Week digit parsing](../../../execution/jobconfig/cron-syntax.md#day-of-week).

Only the following values are supported:

- `standard` (default): Standard cron format.
- `quartz`: [Quartz](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) cron format.

#### `cronHashNames`

Specifies if cron expressions should be hashed using the JobConfig's name. Enabling this option would [allow `H` tokens to be used](../../../execution/jobconfig/cron-syntax.md#hash-based-load-balancing). If disabled, any JobConfigs that use the `H` syntax will throw a parse error.

Defaults to `true`.

#### `cronHashSecondsByDefault`

Specifies if the seconds field of a cron expression should be a `H` or `0` by default if omitted. If enabled, the default seconds field will be `H`, otherwise it will be `0`.

For JobConfigs which use a short cron expression format (i.e. 5 or 6 tokens long), the seconds field is omitted and is typically assumed to be `0` (e.g. `5 10 * * *` means to run at 10:05:00 every day). Enabling this option will allow JobConfigs to be scheduled across the minute, improving load balancing.

Users can still choose to start at 0 seconds by explicitly specifying a long cron expression format with `0` in the seconds field. In the above example, this would be `0 5 10 * * * *`.

Defaults to `false`.

#### `cronHashFields`

Specifies if the "type of field" should be hashed along with the JobConfig's name.

For example, `H H * * * * *` will always hash the seconds and minutes to the same value, for example 00:37:37, 01:37:37, etc. Enabling this option will append additional keys to be hashed to introduce additional non-determinism.

Defaults to `true`.

#### `defaultTimezone`

Defines a default timezone to use for JobConfigs that do not specify a [timezone](../../../execution/jobconfig/scheduling.mdx#crontimezone).

Defaults to `UTC`.

#### `maxMissedSchedules`

Defines a maximum number of jobs that the controller should back-schedule, or attempt to create after coming back up from downtime. Having a sane value here would prevent a thundering herd of jobs being scheduled that would exhaust resources in the cluster. For more information, see [Back-Scheduling](../../../execution/jobconfig/scheduling.mdx#back-scheduling).

In practice, setting this to too high of a value could result in accidental resource exhaustion in the cluster if the controller was intentionally shut down for an extended period of time.

Set this to 0 to disable back-scheduling entirely. Defaults to 5.

#### `maxDowntimeThresholdSeconds`

Defines the maximum downtime that the controller can tolerate. If the controller was intentionally shut down for an extended period of time, we should not attempt to back-schedule jobs once it was started. For more information, see [Back-Scheduling](../../../execution/jobconfig/scheduling.mdx#back-scheduling).

In practice, setting this to too high of a value means that jobs could be ridiculously delayed when they are better off being skipped entirely (say, sending out a end-of-week report on the following Monday instead).

Defaults to `300` (5 minutes). It is recommended to tune this to the maximum realistic outage duration of the controller.

## Sample Configuration

The following sample shows how to configure the full dynamic configuration ConfigMap of the execution component, as well as the default configuration values for each field.

```yaml title="Full Sample Configuration"
apiVersion: v1
kind: ConfigMap
metadata:
  name: execution-dynamic-config
  namespace: furiko-system
data:
  _readme: |
    # This ConfigMap contains the dynamic config for execution-controller.
    # We can tune several knobs in execution-controller without requiring a restart.
    # Each file in this ConfigMap groups together configuration of a single sub-component.
    # As a start, we have populated a set of sane default values for you.
    # More info: https://furiko.io/reference/configuration/dynamic/

  jobs: |
    apiVersion: config.furiko.io/v1alpha1
    kind: JobExecutionConfig

    # The default time-to-live (TTL) for a Job after it has finished. Lower this
    # value to reduce the strain on the cluster/kubelet. Set to 0 to delete immediately
    # after the Job is finished.
    defaultTTLSecondsAfterFinished: 3600

    # The default timeout for a task to remain in a pending state. Defaults to 15 minutes
    # in order to prevent jobs from retrying indefinitely.
    #
    # To prevent setting a default pending timeout globally, set this to 0. Individual jobs
    # can still specify spec.taskPendingTimeoutSeconds in the JobTemplate to override this
    # global default value.
    defaultPendingTimeoutSeconds: 900

    # The duration before the controller uses force deletion instead of normal deletion.
    # This timeout is computed from the deletionTimestamp of the object, which may also include
    # an additional delay of deletionGracePeriodSeconds.
    #
    # Force deletion causes the task to be deleted without confirmation that the task has already
    # terminated. When pod is used for taskTemplate, this means that
    #
    # Set this value to 0 to disable force deletion globally. Individual jobs can also specify
    # spec.forbidTaskForceDeletion in the JobTemplate to disable force deletion if this
    # behavior is not desired.
    forceDeleteTaskTimeoutSeconds: 900

  jobConfigs: |
    apiVersion: config.furiko.io/v1alpha1
    kind: JobConfigExecutionConfig

    # The global maximum enqueued jobs that can be enqueued for a single JobConfig.
    maxEnqueuedJobs: 20

  cron: |
    apiVersion: config.furiko.io/v1alpha1
    kind: CronExecutionConfig

    # Specifies the format used to parse cron expressions. Select between "standard"
    # (default) or "quartz".
    cronFormat: "standard"

    # Specifies if cron expressions should be hashed using the JobConfig's name.
    #
    # This enables "hash cron expressions", which looks like `0 H * * *`. This
    # particular example means to run once a day on the 0th minute of some hour,
    # which will be determined by hashing the JobConfig's name. By enabling this
    # option, JobConfigs that use such cron schedules will be load balanced across
    # the cluster.
    #
    # If disabled, any JobConfigs that use the `H` syntax will throw a parse error.
    cronHashNames: true

    # Specifies if the seconds field of a cron expression should be a `H` or `0`
    # by default. If enabled, it will be `H`, otherwise it will default to `0`.
    #
    # For JobConfigs which use a short cron expression format (i.e. 5 or 6 tokens
    # long), the seconds field is omitted and is typically assumed to be `0` (e.g.
    # `5 10 * * *` means to run at 10:05:00 every day). Enabling this option will
    # allow JobConfigs to be scheduled across the minute, improving load balancing.
    #
    # Users can still choose to start at 0 seconds by explicitly specifying a long
    # cron expression format with `0` in the seconds field. In the above example,
    # this would be `0 5 10 * * * *`.
    cronHashSecondsByDefault: false

    # Specifies if the fields should be hashed along with the JobConfig's name.
    #
    # For example, `H H * * * * *` will always hash the seconds and minutes to the
    # same value, for example 00:37:37, 01:37:37, etc. Enabling this option will
    # append additional keys to be hashed to introduce additional non-determinism.
    cronHashFields: true

    # Defines a default timezone to use for JobConfigs that do not specify a timezone.
    # If left empty, UTC will be used as the default timezone.
    defaultTimezone: "UTC"

    # Defines the maximum number of jobs that the controller should back-schedule,
    # or attempt to create after coming back up from downtime. Having a sane value
    # here would prevent a thundering herd of jobs being scheduled that would exhaust
    # resources in the cluster.
    #
    # Set this to 0 to disable back-scheduling.
    maxMissedSchedules: 5

    # Defines the maximum downtime that the controller can tolerate. If the controller
    # was shut down for an extended period of time, any jobs that should have been created
    # beyond the maximum downtime threshold would not be back-scheduled once it is started again.
    maxDowntimeThresholdSeconds: 300
```
