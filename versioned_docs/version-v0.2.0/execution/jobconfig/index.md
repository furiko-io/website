# JobConfig

This page describes how to configure a JobConfig. You can find a full sample configuration [here](./sample-configuration.md).

## Template

Every JobConfig needs a template which describes the Job to be created, known as the `JobTemplate`.

For more information, refer to the [Job](../job/index.md) section of the docs.

## Scheduling

You can configure a JobConfig to be periodically scheduled, using an [extended Cron syntax](./cron-syntax.md) to specify the schedule, an optional timezone, as well as a [concurrency policy](./concurrency.md) to define the behavior when there are multiple concurrent jobs.

For more information, see [Scheduling](./scheduling.mdx).

## Concurrency

You can define the expected behavior for executing multiple Jobs that belong the same JobConfig.

For more information, see [Concurrency](./concurrency.md).

## Job Options

You also can parameterize the JobConfig which describes what arguments it can accept (according to various types), and how they should be substituted into the Task's template.

For example, if we wanted to parameterize an input flag to a script, say `--config-name`, we could define a job option which substitutes the task's `args` field as follows:

```{.yaml title="Example TaskTemplate"}
taskTemplate:
  pod:
    spec:
      containers:
        - name: job-container
          args:
            - python
            - my_script.py
            - "--config-name=${option.config_name}"
```

Subsequently, the job option `config_name` can be configured to support either free text or selected from a list of options. This structured job option configuration allows various tools to understand how to display option inputs to the user.

For more information, see [Job Options](./job-options.md).
