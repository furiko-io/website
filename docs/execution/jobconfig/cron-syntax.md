---
sidebar_position: 11
---

# Cron Syntax

Furiko supports a [cron](https://en.wikipedia.org/wiki/Cron) syntax that extends the standard cron rules, borrowing ideas from various cron implementations found in the wild. This page acts as the reference document for Furiko's cron syntax.

Internally, Furiko uses a fork of the `cronexpr` library, found here: <https://github.com/furiko/cronexpr>

## Syntax Reference

### Fields

Each cron expression consists of several tokens delimited by spaces. The following diagram explains the fields for each token.

```
# ┌───────────── second (0 - 59); optional
# │ ┌───────────── minute (0 - 59)
# │ │ ┌───────────── hour (0 - 23)
# │ │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ │ ┌───────────── day of the week (0 - 6 / SAT - SUN)
# │ │ │ │ │ │ ┌───────────── year (1970 - 2099); optional
# │ │ │ │ │ │ │
# │ │ │ │ │ │ │
# * * * * * * *
```

Furiko supports _variable-length_ cron expressions, so that it accepts expressions between 5-7 tokens long. The following table explains what each tokens corresponds to, depending on the number of tokens in the expression.

| Length   | Seconds | Minutes | Hours | Day of Month | Month | Day of Week | Year |
| -------- | ------- | ------- | ----- | ------------ | ----- | ----------- | ---- |
| 5 tokens |         | 1st     | 2nd   | 3rd          | 4th   | 5th         |      |
| 6 tokens |         | 1st     | 2nd   | 3rd          | 4th   | 5th         | 6th  |
| 7 tokens | 1st     | 2nd     | 3rd   | 4th          | 5th   | 6th         | 7th  |

### Multiple Values

- `,`: Specify multiple values, e.g. `MON,WED,FRI`
- `-`: Specify range of values, e.g. `5-8`
- `*`: Wildcard value
- `?`: Wildcard value

For simplicity, both `*` and `?` are treated as equivalent. In most cases, you can just use `*`.

### Intervals

In EBNF notation:

```ebnf
interval_field = [offset] , "/" , interval ;
offset = start , ["-" , end] ;
```

- `offset`: Start counting from this value. If not specified, defaults to 0.
  - Can also optionally specify end of range (inclusive).
- `interval`: The size of the interval between values.

Examples:

- `/15`: Every 15 units starting from 0.
- `0/15`: Every 15 units starting from 0, i.e. 0, 15, 30, 45 (for minutes).
- `3/15`: Every 15 units starting from 3, i.e. 3, 18, 33, 48 (for minutes).
- `0-15/3`: Every 3 units starting from 0 ending at 15 (inclusive), i.e. 0, 3, 6, 9, 12, 15.
- `*/15`: Equivalent to `0/15`.

### Day of Week

Furiko supports both standard and [Quartz](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) cron formats. Notably, the digit values for day of week for the Quartz format differs from most other cron parsers.

| Digit | Standard | Quartz |
| ----- | -------- | ------ |
| 1     | `MON`    | `SUN`  |
| 2     | `TUE`    | `MON`  |
| 3     | `WED`    | `TUE`  |
| 4     | `THU`    | `WED`  |
| 5     | `FRI`    | `THU`  |
| 6     | `SAT`    | `FRI`  |
| 7     | `SUN`    | `SAT`  |

:::info

Due to potential confusion, it is recommended to use `MON`-`SAT` instead of digits when specifying the day of week.

:::

### Hash-based Load Balancing

Furiko's cron parser implements `H`, which will be substituted with a number according to the hash of the JobConfig's name, so that `H` will produce an even load balancing of all jobs in the cluster on average.[^1]

[^1]: This format is first introduced in Jenkins, which has been adopted in a few other cron schedulers as well: <https://www.jenkins.io/doc/book/pipeline/syntax/#cron-syntax>

The following example shows how you can use H in your cron schedule:

- `0 0/3 * * *`: Run every 3 hours, at 00:00, 03:00, 06:00, ...
- `H H/3 * * *`: Run every 3 hours, possible schedule is 01:34, 04:34, 07:34, ...

:::tip

It is recommended to use `H` tokens whenever possible. In practice, most jobs do not have a strict dependency on when they need to be run, but use a cron expression to describe an interval that it is expected to be run.

:::

There are 4 possible `H` formats that are introduced:

| Type        | Description                                             | Example Usage                                                                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `H`         | Represents a single point in time within the time unit. | `H * * * *`: Run once every 1 hour, at the H minute of the hour.                                                                                                                                                                                               |
| `H/2`       | Represents an interval that starts at the H offset.     | `0 H/6 * * *`: Run once every 6 hours, starting between 0-5 AM and every 6 hours thereafter.                                                                                                                                                                   |
| `H(5-19)`   | Represents a single point in time with a range.         | `H(5-19) * * * *`: Run once every 1 hour, anytime between the 5th to 19th minute of the hour.                                                                                                                                                                  |
| `H(5-19)/3` | Represents an interval with a range offset.             | `H(5-19)/5 * * * *`: Run every 5 minutes in the 5th to 19th minute of the hour, up to a total of 3 times. Example: <ul><li>For `H=0`: 00:05, 00:10, 00:15, 01:05, 01:10, 01:15, ...</li><li>For `H=2`: 00:07, 00:12, 00:17, 01:07, 01:12, 01:17, ...</li></ul> |

:::info "Note of Caution for Intervallic `H` Types"

Using intervallic `H` types may produce different behaviours depending on the value of `H` used if the denominator does not evenly divide the size of the time unit/range.

Taking `0 H/7 * * * * *` as an example, if `H=0` it will run 9 times per hour, but if `H=6` it will run only 8 times per hour.

As such, it is recommended to choose intervals that are divisors of the size of the range that the `H` token is in.

:::

:::caution "Warning for `H` in Day of Month"

The day of month field chooses a hash between the 1-28 range, so `H/3` may produce a job that runs more or less frequently near the end of the month as compared to the others. This behavior comes from Jenkins, and Furiko replicates this same behavior to avoid ambiguity.

The following explanation is taken from the [Jenkins documentation](https://www.jenkins.io/doc/book/pipeline/syntax/#cron-syntax):

> Beware that for the day of month field, short cycles such as `*/3` or `H/3` will not work consistently near the end of most months, due to variable month lengths. For example, `*/3` will run on the 1st, 4th, … 31st days of a long month, then again the next day of the next month. Hashes are always chosen in the 1-28 range, so `H/3` will produce a gap between runs of between 3 and 6 days at the end of a month. (Longer cycles will also have inconsistent lengths but the effect may be relatively less noticeable.)

:::

## Configuration

The CronController supports some configuring additional parser options that would apply to all JobConfigs in the cluster.

For detailed configuration documentation, see [Execution Dynamic Config](../../../reference/configuration/execution/dynamic-config.md#cron-controller).

| Configuration Name         | Description                                                 | Default      |
| -------------------------- | ----------------------------------------------------------- | ------------ |
| `cronFormat`               | Format used to parse cron expressions                       | `"standard"` |
| `cronHashNames`            | Whether to enable hash-based cron expressions               | `true`       |
| `cronHashSecondsByDefault` | Whether to treat empty seconds as `H` (true) or `0` (false) | `false`      |
| `cronHashFields`           | Whether to include field type in hash                       | `true`       |
