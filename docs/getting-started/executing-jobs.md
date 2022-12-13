---
sidebar_position: 3
---

# Executing Jobs

The following tutorial walks you through how to create and execute an example JobConfig, as well as scheduling future Jobs.

## Create a JobConfig

First, create an example [JobConfig](../execution/jobconfig/index.md). Copy the following and save it into a local file, editing it as necessary:

```yaml title=example-jobconfig.yaml
apiVersion: execution.furiko.io/v1alpha1
kind: JobConfig
metadata:
  name: example-jobconfig
spec:
  # Defines how the JobConfig shall be executed automatically on schedule.
  schedule:
    cron:
      expression: "*/5 * * * *"
    disabled: true

  # Prevents multiple executions of the same JobConfig.
  concurrency:
    policy: Forbid

  # Defines how to create the Job.
  template:
    spec:
      taskTemplate:
        pod:
          spec:
            containers:
              - name: container
                image: alpine
                command:
                  - echo
                  - "Hello World"
```

Next, apply the YAML to the cluster:

```sh
kubectl apply -f example-jobconfig.yaml
```

## Executing the Job

Using the [`furiko` command-line tool](./cli.mdx), execute the Job immediately as an [ad-hoc execution](../execution/job/adhoc-execution.mdx):

```sh
$ furiko run example-jobconfig
Job default/example-jobconfig-klptm created
```

You can view more details about the Job that was executed:

```sh
$ furiko get job example-jobconfig-klptm
JOB INFO
Name:                example-jobconfig-klptm
Namespace:           default
Type:                Adhoc
Created:             Wed, 14 Dec 2022 01:15:58 +08:00 (22 seconds ago)
Job Config:          forbid-example
Concurrency Policy:  Forbid

JOB STATUS
Phase:         Succeeded
Started:       Wed, 14 Dec 2022 01:15:58 +08:00 (22 seconds ago)
Tasks:         0 Running / 1 Succeeded
Run Duration:  About a second
Result:        Success

LATEST TASK
Name:      example-jobconfig-klptm-gezdqo-0
Created:   Wed, 14 Dec 2022 01:15:58 +08:00 (22 seconds ago)
State:     Terminated
Started:   Wed, 14 Dec 2022 01:16:00 +08:00 (20 seconds ago)
Finished:  Wed, 14 Dec 2022 01:16:00 +08:00 (20 seconds ago)
```

## Enable automatic scheduling

The above example JobConfig is in `ReadyDisabled` state initially. Enable the JobConfig's schedule:

```sh
$ furiko enable example-jobconfig
Successfully enabled automatic scheduling for job config default/example-jobconfig
```

The above [cron expression](../execution/jobconfig/cron-syntax.md) is `*/5 * * * *`, which means to run every 5 minutes. Wait for a while, and you should be able to see that the Job was automatically scheduled:

```sh
$ furiko list job --for=example-jobconfig
NAME                           PHASE       START TIME   RUN TIME   FINISH TIME
example-jobconfig-1670952000   Succeeded   16s                     16s
```

## Scheduling future executions

We can also [schedule a future execution](../execution/job/start-policy.md) for the JobConfig:

```sh
$ furiko run example-jobconfig --at 2022-12-14T01:30:00+08:00
Job default/example-jobconfig-5wpnv created
```

This queues the Job to be executed at a later time:

```sh
$ furiko list job --for=example-jobconfig
NAME                           PHASE       START TIME   RUN TIME   FINISH TIME
example-jobconfig-5wpnv        Queued
```

We can view the status of the Job before it has started running:

```sh
$ furiko get job example-jobconfig-5wpnv
JOB INFO
Name:                example-jobconfig-5wpnv
Namespace:           default
Type:                Adhoc
Created:             Wed, 14 Dec 2022 01:26:23 +08:00 (9 seconds ago)
Job Config:          example-jobconfig
Start After:         Wed, 14 Dec 2022 01:30:00 +08:00 (in 3 minutes)
Concurrency Policy:  Enqueue

JOB STATUS
Phase:    Queued
Reason:   NotYetDue
Message:  Job is queued to start no earlier than 2022-12-13 17:30:00 +0000 UTC
```

Note that the job is scheduled to be started exactly at `01:30:00`. By right, the cron schedule should have also scheduled another Job at `01:30:00`. However, since we are using the `Forbid` [concurrency policy](../execution/jobconfig/concurrency.md), this prevents multiple concurrent Jobs from being executed at the same time. We can verify that there was indeed no other execution that started at the same time:

```sh
$ furiko list job --for=example-jobconfig
NAME                           PHASE       START TIME   RUN TIME   FINISH TIME
example-jobconfig-1670952000   Succeeded   11m                     11m
example-jobconfig-1670952300   Succeeded   6m                      6m
example-jobconfig-5wpnv        Succeeded   46s                     44s
```
