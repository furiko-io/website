# Job

This page describes how to configure a Job. You can find a full sample configuration [here](./sample-configuration.md).

## Task Executor

A Job creates one or more tasks during its lifecycle. Each task corresponds to a single parallel and retry index for the Job.

The Job needs a template which describes how to create tasks. You can specify the task template under `.spec.taskTemplate`, which supports the following fields (exactly one must be specified):

- `pod`: Create the task as a Pod. This template is a [`PodTemplateSpec`](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#podtemplate-v1-core).

Currently, only the `pod` task executor is supported.

For more details on the task executor interface, see [Task Executors](./task-executor.md).

## Running Adhoc Jobs

A Job can be created and started automatically by the JobConfig controller, but it can also be started on an adhoc basis.

Jobs created from a JobConfig will inherit its template, are subject to the JobConfig's concurrency policies, and can utilize the Job Options defined in the JobConfig's spec.

For more details, see [Adhoc Execution](./adhoc-execution.md).

## Start Policy

When a Job is created, it may not necessarily start executing right away. This is defined by the `.spec.startPolicy`.

For more details, see [Start Policy](./start-policy.md).

## Timeouts and Retries

Furiko provides several mechanisms to impose timeouts and retrying of failed Jobs.

For more details see [Timeouts and Retries](./timeout-retries.md).

## Substitutions

Furiko exposes a `substitutions` field, so that the JobController knows how to substitute context variables into the task template at runtime. This field is also used when creating a Job from a JobConfig, for example via [Job Options](../jobconfig/job-options.md).

All substitutions should be a key-value map of strings:

```{.yaml title="Example JobSpec"}
spec:
  substitutions:
    option.user-name: "John Smith"
    option.job-types: "adhoc,scheduled"
```

For more details, see [Context Variables](../jobconfig/context-variables.md).

## Garbage Collection

Jobs should not live for too long after they are finished. Furiko imposes a time-to-live (TTL) on all Jobs after they are finished, so that the Kubernetes will not be too overloaded and controllers will be more responsive in general.

For more details see [Garbage Collection](./garbage-collection.md).
