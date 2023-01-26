---
sidebar_position: 999
---

# Sample Configuration

This page contains sample configurations for creating a Job.

## From JobConfig

Most of the time, you should be creating Jobs from a JobConfig as follows, as described in [Adhoc Execution](./adhoc-execution.md).

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  generateName: jobconfig-sample-
spec:
  # Define the JobConfig (in the same namespace) to use as the template for the Job.
  configName: jobconfig-sample

  # YAML or JSON encoded string of option values to pass to the JobConfig.
  # Will be evaluated and added to substitutions.
  optionValues: |-
    username: Example User
    image-tag: 3.15

  # Optionally specify conditions for when the Job can start.
  startPolicy:
    # Defines the behavior for multiple concurrent Jobs.
    # If not specified, will default to the JobConfig's concurrency.policy.
    concurrencyPolicy: Enqueue

    # Start only after this time.
    startAfter: 2022-03-06T00:27:00+08:00
```

## Standalone Job

You can also create a Job independent of a JobConfig, as described [here](./adhoc-execution.md#independent-jobs). You must specify the `template` yourself.

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  generateName: jobconfig-sample-
spec:
  # Specify the type of Job.
  type: Adhoc

  # Map of key-value pairs to substitute into the task template.
  substitutions:
    option.username: Example User

  # Describes how to create the Job.
  template:
    # Specifies how to run the job in parallel.
    parallelism:
      # Run 3 tasks in parallel.
      withCount: 3

      # Wait for all 3 tasks to succeed before deemed as successful.
      completionStrategy: AllSuccessful

    # Specifies maximum number of attempts for each task, defaults to 1.
    maxAttempts: 3

    # Optional delay between each task retry.
    retryDelaySeconds: 10

    # Optional duration in seconds for how long each task should be pending for
    # until it gets killed.
    taskPendingTimeoutSeconds: 1800

    # Forbids force deletion of tasks.
    forbidTaskForceDeletion: true

    # The template for each task to be created by the Job.
    taskTemplate:
      # Specify how to create the task as a Pod. This is just a PodTemplateSpec.
      pod:
        spec:
          containers:
            - args:
                - echo
                - "Hello world, ${option.username}!"
              env:
                - name: JOBCONFIG_NAME
                  value: jobconfig-sample
                - name: JOB_NAME
                  value: ${job.name}
                - name: TASK_NAME
                  value: ${task.name}
                - name: TASK_INDEX
                  value: ${task.index_num}
              image: alpine
              name: job-container
              resources:
                limits:
                  cpu: 100m
                  memory: 64Mi

  # Optional duration that the Job should live after it is finished.
  ttlSecondsAfterFinished: 3600
```
