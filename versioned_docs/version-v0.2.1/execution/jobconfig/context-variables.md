---
sidebar_position: 20
---

# Context Variables

This page introduces the concept of **Context Variables**, which allows Furiko users to parameterize their jobs based on certain variables.

## Overview

### Introduction

A variable looks like `${job.name}`. This context variable uses the context `job`, with the variable name `name`.

Users who are familiar with Rundeck may find this concept familiar, as it was inspired by the corresponding feature in Rundeck: <https://docs.rundeck.com/docs/manual/job-workflows.html#context-variables>

### Usage

Context variables can be used inside the Job/JobConfig's task template, like so:

```{.yaml title="Example TaskTemplate"}
taskTemplate:
  pod:
    spec:
      containers:
        - name: job-container
          args:
            - echo
            - "Job Name: ${job.name}"
```

For `pod`, only the following fields support context variable substitution:

- `.spec.containers.*.image`
- `.spec.containers.*.command.*`
- `.spec.containers.*.args.*`
- `.spec.containers.*.env.*.value`
- `.spec.initContainers.*.image`
- `.spec.initContainers.*.command.*`
- `.spec.initContainers.*.args.*`
- `.spec.initContainers.*.env.*.value`

Variables will be substituted as a string as-is in the fields that they are defined in. If using in the `command` or `args` fields, you may need to escape them with double quotes (e.g. `"${job.name}"`).

## Contexts

Each context corresponds to a stage in the Job's lifecycle when certain variables are made available. The following is a list of all contexts and available variables.

### `jobconfig`

Variables are evaluated when creating a Job from a JobConfig, such as during cron scheduling or ad-hoc starts of a Job.

| Variable                  | Description                                        | Example                                |
| ------------------------- | -------------------------------------------------- | -------------------------------------- |
| `jobconfig.name`          | Name of the JobConfig that created the Job.        | `my-example-jobconfig`                 |
| `jobconfig.namespace`     | Namespace of the JobConfig that created the Job.   | `furiko`                               |
| `jobconfig.uid`           | UID of the JobConfig that created the Job.         | `4247b21e-713f-46db-b8f5-39917893577e` |
| `jobconfig.cron_schedule` | Cron expression that was used to schedule the Job. | `H/15 * * * *`                         |
| `jobconfig.cron_timezone` | Cron timezone that was used to schedule the Job.   | `Asia/Singapore`                       |

### `job`

Variables are evaluated when creating a task for a Job. This takes place after the Job is started.

| Variable        | Description                                 | Example                           |
| --------------- | ------------------------------------------- | --------------------------------- |
| `job.name`      | Name of the Job that created the task.      | `my-example-jobconfig.1646586480` |
| `job.namespace` | Namespace of the Job that created the task. | `furiko`                          |
| `job.type`      | Type of Job, e.g. `Adhoc`, `Scheduled`.     | `Adhoc`                           |

### `task`

Variables are evaluated when creating a task.

| Variable           | Description                                 | Example                             |
| ------------------ | ------------------------------------------- | ----------------------------------- |
| `task.name`        | Name of the task.                           | `my-example-jobconfig.1646586480.1` |
| `task.namespace`   | Namespace of the task.                      | `furiko`                            |
| `task.retry_index` | The retry index of the task, starts from 1. | `1`                                 |

Additionally, the following variables are included when a [parallel job](../job/parallelism.mdx) is created:

| Variable                  | Description                                                                                    | Example   |
| ------------------------- | ---------------------------------------------------------------------------------------------- | --------- |
| `task.index_num`          | If `withCount` is used, the task index number (from 0...N-1).                                  | `2`       |
| `task.index_key`          | If `withKeys` is used, the task index key (as a string).                                       | `item-3`  |
| `task.index_matrix.<key>` | If `withMatrix` is used, the value of the corresponding key in the matrix for this task index. | `value-1` |

### `option`

The `option` context is a special context that allows for user-defined inputs to parameterize the Job.

For more information, see [Job Options](./job-options.md).

## Substitutions

Variables are evaluated based on their context, but substitution is only performed only when creating the task object (i.e. when creating the `PodSpec`). Because of this, the Job exposes a `substitutions` field which captures all evaluated substitutions so far before finally evaluating it at the end.

Users may also override certain context variables by manually specifying it in the `substitutions` field when creating the Job. They will take precedence over all other variables that are evaluated (context variables and option variables).

For example, given the following configuration below:

```{.yaml title="Example: Custom Substitutions"}
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  generateName: dummy-sample-
spec:
  configName: jobconfig-sample
  substitutions:
    option.username: "mary"
    jobconfig.name: "dummy-sample"
  optionValues: |-
    username: "bob"
    expiry: "168h"
```

1. `option.username` will be evaluated to `mary` (`substitutions` takes precedence)
2. `option.expiry` will be evaluated to `168h` (from `optionValues`)
3. `jobconfig.name` will be evaluated to `dummy-sample` (`substitutions` takes precedence)
4. `jobconfig.namespace` will be evaluated to `default` (from the `jobconfig` context)
