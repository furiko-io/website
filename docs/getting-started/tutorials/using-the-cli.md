# Using the CLI

This guide provides some example usage for the [CLI tool, `furiko`](../cli.mdx).

## Namespaces

Like `kubectl`, the `furiko` tool also operates based on a Namespace, which can be specified with `-n` or `--namespace`.

If the `--namespace` flag is not correctly configured, Jobs and/or JobConfigs may not be found correctly.

## Example Usage

### List JobConfigs

List all JobConfigs using the `furiko list jobconfig` command:

![List JobConfigs](./img/list-job-configs.gif)

### Get a single JobConfig

View extended details about a single JobConfig using the `furiko get jobconfig` command:

![Get JobConfig](./img/get-job-config.gif)

### Running a JobConfig

The following example shows how a JobConfig may be executed using the `furiko run` command, prompting for job options as necessary:

![Run JobConfig](./img/job-options.gif)

To learn more about how Job Options works, refer to the main guide [here](../../execution/jobconfig/job-options.md).
