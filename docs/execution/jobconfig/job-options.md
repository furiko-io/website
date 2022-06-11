---
sidebar_position: 21
---

# Job Options

This page introduces the concept of Job Options, which allows Furiko users to parameterize their jobs with structured user-defined input. Note that a _Job Option_ is a special type of [Context Variable](./context-variables.md); refer to the linked page to see how they work.

## Overview

### Introduction

A job option looks like `${option.my_option_name}`, where the option name `my_option_name` is a custom variable defined in the JobConfig.

Users who are familiar with Rundeck may find this concept familiar, as it was inspired by the corresponding feature in Rundeck: <https://docs.rundeck.com/docs/manual/job-options.html>

### Usage

Job options have to be first defined in the JobConfig, like so:

```yaml title="Example JobConfigSpec"
apiVersion: execution.furiko.io/v1alpha1
kind: JobConfig
metadata:
  generateName: jobconfig-sample
spec:
  option:
    options:
      - type: String
        name: username
        label: Username
        string:
          default: Guest User
          trimSpaces: true
```

This declares an option `option.username` that can be used in the task template, with a default value of `Guest User`. You can then utilize the option value like so:

```yaml title="Example PodTemplateSpec (in TaskTemplate)"
spec:
  containers:
    - name: job-container
      args:
        - echo
        - "Hello world, ${option.username}!"
```

To pass option value inputs into the JobConfig, you can do so with [`optionValues`](../job/adhoc-execution.mdx#optionvalues):

```yaml title="Example JobSpec"
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  generateName: jobconfig-sample-
spec:
  configName: jobconfig-sample
  optionValues: |-
    username: John
```

### Default Values

Some option types specify a `default` field in the config which defines a default value when not specified. This will be used when a Job is started automatically, e.g. on a cron schedule.

## Option Configuration

### `type`

The type of option must be one of the allowed values below.

| Name                             | Input Type | Description                                   |
| -------------------------------- | ---------- | --------------------------------------------- |
| [`String`](#string-options)      | `string`   | Arbitary string input                         |
| [`Bool`](#boolean-options)       | `bool`     | Boolean input                                 |
| [`Select`](#select-options)      | `string`   | String input from a list of choices           |
| [`Multi`](#multi-select-options) | `[]string` | List of strings, input from a list of choices |
| [`Date`](#date-options)          | `string`   | RFC3339-formatted date/time string            |

Additional option configuration may apply for specific option types. Each option type above links to addition configuration documentation, as well as example configuration, input specification and output values.

### `name`

The canonical name of the option, like `my_option_name`, which will be used during substitution of the task template. Should not contain spaces or special characters other than underscore, hyphen and dot.

### `label`

An optional human-readable label of the option, like `My Option`. This will be displayed only in human-readable interfaces.

If not specified, it will default to `name`.

### `required`

Defines whether this option is required. Does not apply to `bool` options.

When used in conjunction with `default` (available in some option types), if there is no default value AND there is not input value specified via `optionValues`, the Job will fail validation and will not be created.

:::caution

Jobs which are started on a scheduled basis will fail if `required` is true but there is no `default` value.

:::

## Option Types

### String Options

The `String` option type allows you to specify an option that accepts arbitrary string input.

| Config       | Type     | Description                                                                                   |
| ------------ | -------- | --------------------------------------------------------------------------------------------- |
| `default`    | `string` | Default value if not specified. If empty and `required`, will throw a validation error.       |
| `trimSpaces` | `bool`   | If true, the spaces will be trimmed from the input value (start and end) before substitution. |

<details>
<summary>Example Usage</summary>

```yaml title="Example Option Configuration"
- type: String
  name: username
  label: Username
  string:
    default: Example User
    trimSpaces: true
```

```yaml title="Example optionValues"
spec:
  optionValues: |-
    username: johnw203
```

```text title="Example Output"
johnw203
```

</details>

### Boolean Options

The `Bool` option type allows you to specify an option that has only two possible values.

| Config     | Type               | Description                                                                                                |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| `default`  | `bool`             | Default value (`true` or `false`) if not specified.                                                        |
| `format`   | `BoolOptionFormat` | Format type to render the bool option value as a string. Use `custom` to specify custom true/false format. |
| `trueVal`  | `string`           | Custom string to format if value is `true`. Only applicable to `custom` format.                            |
| `falseVal` | `string`           | Custom string to format if value is `false`. Only applicable to `custom` format.                           |

#### `BoolOptionFormat`

The following is a list of pre-defined `BoolOptionFormat`:

| Format                | True     | False    |
| --------------------- | -------- | -------- |
| `TrueFalse` (default) | `true`   | `false`  |
| `YesNo`               | `yes`    | `no`     |
| `OneZero`             | `1`      | `0`      |
| `Custom`              | (custom) | (custom) |

If none of the above suit your needs, you can use `Custom` to specify a custom `trueVal` and `falseVal`.

:::tip

Using a `bool` option type is most useful for specifying command-line flags (e.g. `--verbose`), see the example below.

:::

<details>
<summary>Example Usage</summary>

```yaml title="Example Option Configuration"
- type: Bool
  name: verbose
  label: "Verbose?"
  bool:
    format: Custom
    trueVal: "--verbose"
    falseVal: ""
```

```yaml title="Example optionValues"
spec:
  optionValues: |-
    verbose: true
```

```text title="Example Output"
--verbose
```

</details>

### Select Options

The `select` option type allows you to specify an option whose values belong to a fixed set of values.

| Config        | Type       | Description                                                                                                                    |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `default`     | `string`   | Default value if not specified. If empty and `required`, will throw a validation error. Must be one of the values in `values`. |
| `values`      | `[]string` | List of allowed values to choose from.                                                                                         |
| `allowCustom` | `bool`     | If false, then input values not found in `values` will be rejected.                                                            |

<details>
<summary>Example Usage</summary>

```yaml title="Example Option Configuration"
- type: Select
  name: person
  label: Person Name
  select:
    default: Bob
    values:
      - Mary
      - Bob
      - Alice
    allowCustom: true
```

```yaml title="Example optionValues"
spec:
  optionValues: |-
    person: Mary
```

```text title="Example Output"
Mary
```

</details>

### Multi-select Options

The `multi` option type allows you to specify an option whose values belong to a fixed set of values, where users can specify zero or more values.

| Config        | Type       | Description                                                                                                                            |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `default`     | `[]string` | Default set of values if not specified. If empty and `required`, will throw a validation error. Must be one of the values in `values`. |
| `values`      | `[]string` | List of allowed values to choose from.                                                                                                 |
| `delimiter`   | `string`   | String to delimit values by.                                                                                                           |
| `allowCustom` | `bool`     | If false, then input values not found in `values` will be rejected.                                                                    |

<details>
<summary>Example Usage</summary>

```yaml title="Example Option Configuration"
- type: Multi
  name: targets
  label: Targets
  multi:
    default:
      - mysql
      - redis
    values:
      - mysql
      - redis
      - s3
      - kafka
    delimiter: ","
    allowCustom: true
```

```yaml title="Example optionValues"
spec:
  optionValues: |-
    targets:
      - kafka
      - s3
```

```text title="Example Output"
kafka,s3
```

</details>

### Date Options

The `date` option type allows you to specify an option which accepts a date/time with timezone.

If not set, the default value is an empty string.

:::note Note on Timezones

The timezone of the formatted date string follows that of the input option. A full example with timezone is described below.

```yaml title="Example Option Configuration"
- type: Date
  name: startTime
  label: Start Time
  date:
    format: HH:mm:ss
```

```yaml title="Example optionValues"
spec:
  # We specify 02:30 AM in Indian Standard Time.
  optionValues: |-
    startTime: "2022-03-14T02:30:00+05:30"
```

```text title="Example Output"
# It is formatted in the same timezone as the input, thus producing 02:30 AM.
02:30:00
```

As such, if the output value is required to be timezone-aware, we strongly recommend using the full RFC3339-formatted date string and parsing it in your application. If an exact point in time is desired (i.e. not timezone-aware), we recommend using `X` for the date format (which produces the Unix timestamp).

:::

| Config   | Type     | Description                                                                                                                                                                |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `format` | `string` | [Moment.js](https://momentjs.com/docs/#/displaying/format/) format string to format the input date. If not specified, defaults to RFC3339 format (`YYYY-MM-DDTHH:mm:ssZ`). |

<details>
<summary>Example Usage</summary>
```yaml title="Example Option Configuration"
- type: Date
  name: fromDate
  label: From Date
  date:
    format: YYYY-MM-DD
```

```yaml title="Example optionValues"
spec:
  optionValues: |-
    fromDate: "2022-01-01T00:02:30Z"
```

```text title="Example Output"
2022-01-01
```

</details>
