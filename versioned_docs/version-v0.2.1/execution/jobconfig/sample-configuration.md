---
sidebar_position: 999
---

# Sample Configuration

The following is a full sample configuration.

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: JobConfig
metadata:
  name: jobconfig-sample
spec:
  # Concurrency configuration.
  concurrency:
    policy: Forbid
    maxConcurrency: 1

  # Schedule configuration.
  schedule:
    cron:
      expression: "0 */15 * * * * *"
      timezone: "Asia/Singapore"
    disabled: false

  # Job options.
  option:
    options:
      - type: String
        name: username
        label: Username
        string:
          default: Example User
          trimSpaces: true

  # Template for the Job to be created. For more info, see the Job sample configuration.
  template:
    # Any labels and annotations will be automatically added to downstream Jobs.
    metadata:
      annotations:
        annotations.furiko.io/job-group: "cool-jobs"
    spec:
      # Specifies maximum number of attempts for each task, defaults to 1.
      maxAttempts: 3

      # Optional delay between each task retry.
      retryDelaySeconds: 10

      # Optional duration in seconds for how long each task should be pending for
      # until it gets killed.
      taskPendingTimeoutSeconds: 1800

      # The template for each task to be created by the Job.
      taskTemplate:
        # Specify how to create the task as a Pod. This is just a PodTemplateSpec.
        pod:
          spec:
            containers:
              # Notice how we can use context variables and job options inside
              # the PodSpec freely to be substituted at runtime.
              - name: job-container
                args:
                  - echo
                  - "Hello world, ${option.username}!"
                env:
                  - name: JOBCONFIG_NAME
                    value: "${jobconfig.name}"
                  - name: JOB_NAME
                    value: "${job.name}"
                image: "alpine"
                resources:
                  limits:
                    cpu: 100m
                    memory: 64Mi
```
