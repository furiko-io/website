---
sidebar_position: 1
title: Concepts
---

# Execution Concepts

**Furiko Execution** is the heart of the Furiko platform, and consists of components to configure scheduled jobs and trigger ad-hoc executions.

## JobConfig

A **[JobConfig](./jobconfig/index.md)** describes an automation job to be run. It creates and controls `Job` children objects.

A JobConfig can be automatically scheduled to be create Jobs based on a cron schedule, or executed on an ad-hoc basis. You can also parameterize a JobConfig to take in different variables which will be substituted into the job template at runtime.

## Job

A **[Job](./job/index.md)** represents a single job execution, analogous to a `batch/v1` [Job](https://kubernetes.io/docs/concepts/workloads/controllers/job/). As the name suggests, a Job's parent is a JobConfig.

A Job's spec is local to the particular job execution. Modifying the JobConfig after the Job has been created will not affect previously created Jobs.

:::note

A Job can also be created independently of a JobConfig controller, although this is not recommended. Doing so will disable certain features and guarantees that are provided by a parent JobConfig controller.

:::

## Task

A **Task** represents a Job's actual manifestation of task execution. A Job may create one or more Tasks, which can represent both parallel tasks being executed (see Parallel Execution) or individual retries (see [Timeouts and Retries](./job/timeout-retries.md)).

A Task is an abstract representation of a workload, such as a [Pod](https://kubernetes.io/docs/concepts/workloads/pods/). Currently, the only supported [task executor](./job/task-executor.md) is a Pod, but more task executors are planned in the future.
