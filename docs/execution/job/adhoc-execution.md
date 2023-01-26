---
sidebar_position: 20
---

# Adhoc Execution

This page will discuss how to run once-off, or **adhoc** Job executions. An adhoc Job is one that is not scheduled automatically (e.g. from a cron schedule), but rather started explicitly (such as via user creation or external triggers).

## Using the CLI

:::tip
It is recommended to use the CLI to run adhoc jobs.
:::

The easiest way to run an adhoc Job execution is to use the [`furiko` CLI tool](../../getting-started/cli.mdx):

![Using the CLI](../../getting-started/tutorials/using-the-cli/img/job-options.gif)

Using `furiko run` provides the following features:

- Interactive prompt for [option values](../jobconfig/job-options.md) (suppress with `--use-default-options`)
- Specify future timestamp to [start after](./start-policy.md#startafter) (with `--at`)

## Using `kubectl create`

Alternatively, you can use `kubectl create` to create a new Job. For example:

1. First, install the example "adhoc-refund-customer-payments" JobConfig.

   ```shell
   kubectl apply -f https://raw.githubusercontent.com/furiko-io/furiko/main/examples/jobconfigs/31-job-options--adhoc-refund-customer-payments.yaml
   ```

2. Now, you can run a new Job simply by specifying the `configName` and `optionValues` in the spec.

   ```shell
   kubectl create -f - <<EOF
   apiVersion: execution.furiko.io/v1alpha1
   kind: Job
   metadata:
     generateName: adhoc-refund-customer-payments-
   spec:
     configName: adhoc-refund-customer-payments
     optionValues: |
       customer_id: "125"
   EOF
   ```

## Using the Kubernetes REST API

You can also use the [Kubernetes REST API](https://kubernetes.io/docs/concepts/overview/kubernetes-api/) to create a new Job. The following example assumes that you are running `curl` from a Pod inside of the K8s cluster:

```shell
curl https://${KUBERNETES_SERVICE_HOST}:${KUBERNETES_SERVICE_PORT}/apis/execution.furiko.io/v1alpha1/namespaces/default/jobs \
  --cacert /var/run/secrets/kubernetes.io/serviceaccount/ca.crt \
  --header "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"apiVersion":"execution.furiko.io/v1alpha1","kind":"Job","metadata":{"generateName":"buy-fruit-","namespace":"default"},"spec":{"configName":"buy-fruit","optionValues":"{\"fruitName\": \"apple\"}"}}'
```

For more information on the YAML or API request parameters, read more on the [Job API](#job-api) below.

## Job API

A Job is typically created from a [JobConfig](../jobconfig/index.md), grouping multiple Job objects together and controlling their lifecycles.

### `configName`

To create a Job from a JobConfig, the simplest way is to specify the `configName` of a JobConfig in the same namespace:

```yaml title="Example: Creating Jobs with configName"
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  generateName: jobconfig-sample-
spec:
  configName: jobconfig-sample
  optionValues: |-
    username: bob
```

<details>
<summary>Example: Final result when using configName</summary>

The [webhook](../../development/architecture/execution-webhook.md) is responsible for transforming the Job creation request, so that all fields will be populated from the JobConfig. The end result would be the following, extremely comprehensive Job configuration. Some fields are explained below.

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  annotations:
    # Internal annotation used to "snapshot" the JobOptionsSpec of the JobConfig.
    execution.furiko.io/options-spec-hash: 91305051fc67f709
  creationTimestamp: "2022-03-15T07:35:21Z"
  finalizers:
    # This finalizer is needed by the JobController.
    - execution.furiko.io/delete-dependents-finalizer
  generateName: jobconfig-sample-
  generation: 1
  labels:
    # Internal label used to identify owner JobConfig.
    execution.furiko.io/job-config-uid: cd346c6f-4493-42b5-a813-8787a68ec74c
  name: jobconfig-sample-p8fzq
  namespace: default
  # Owner reference of JobConfig controller.
  ownerReferences:
    - apiVersion: execution.furiko.io/v1alpha1
      blockOwnerDeletion: true
      controller: true
      kind: JobConfig
      name: jobconfig-sample
      uid: cd346c6f-4493-42b5-a813-8787a68ec74c
  resourceVersion: "585289534"
  uid: f02bf84c-ab06-4121-9c7f-be50ff61de72
spec:
  type: Adhoc
  optionValues: '{"username":"bob"}'
  startPolicy:
    # Inherited from the JobConfig's concurrency.policy.
    concurrencyPolicy: Forbid
  substitutions:
    # Addition of jobconfig context variables.
    jobconfig.cron_schedule: H/15 * * * *
    jobconfig.name: jobconfig-sample
    jobconfig.namespace: default
    jobconfig.timezone: Asia/Singapore
    # Evaluted option variables.
    option.image-tag: latest
    option.username: Example User
  # Inherited from the JobConfig's spec.template.
  template:
    maxAttempts: 1
    taskTemplate:
      pod:
        metadata: {}
        spec:
          containers:
            - args:
                - echo
                - Hello world, ${option.username}!
              env:
                - name: JOBCONFIG_NAME
                  value: ${jobconfig.name}
                - name: JOB_NAME
                  value: ${job.name}
                - name: TASK_NAME
                  value: ${task.name}
              image: alpine:${option.image-tag}
              name: job-container
              resources:
                limits:
                  cpu: 100m
                  memory: 64Mi
          restartPolicy: Never
  ttlSecondsAfterFinished: 3600
```

</details>

### `optionValues`

When creating a Job from a JobConfig, you can also specify `optionValues` which declares the value for each option defined in the JobConfig's [Job Options](../jobconfig/job-options.md).

The `optionValues` must be a YAML or JSON encoded string of a map from the option's `name` to the corresponding value. The value may be of any admissible type, depending on the option's `type.

```yaml title="Example: Job with optionValues"
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  generateName: jobconfig-sample-
spec:
  configName: jobconfig-sample
  optionValues: |-
    # String and Select options accept only strings.
    # Numbers or booleans must be quoted in YAML.
    configName: default-config
    userCount: "3"

    # Multi options accept a list of strings.
    userList:
    - mary
    - bob
    - alice

    # Bool options accept a boolean value.
    verbose: true
```

If not specified in `optionValues`, the default value (if any) from the JobConfig will be used. Otherwise, if it is also `required`, a validation error will be thrown if there is no default and not explicitly defined in `optionValues`.

After evaluation, the final rendered values will be stored inside `substitutions`. See the previous section for a full example.

### Concurrency

When creating a Job from a JobConfig, it is still subject to the JobConfig's [concurrency policy](../jobconfig/concurrency.md). The [`startPolicy`](./start-policy.md) automatically inherits the JobConfig's `concurrency.policy` if not defined.

However, you can also explicitly specify `startPolicy.concurrencyPolicy` in the Job's spec, so that it _does not_ follow the JobConfig's actual policy:

```yaml
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  generateName: jobconfig-sample-
spec:
  configName: jobconfig-sample
  startPolicy:
    concurrencyPolicy: Enqueue
```

Assuming the JobConfig uses `Forbid`, this effectively allows us to schedule an adhoc execution after all currently running Jobs are completed.

:::caution
Explicitly specifying `startPolicy.concurrencyPolicy` in a Job may be a violation of the JobConfig's intended behavior, especially if the Job sets it to `Allow` even though the JobConfig uses `Forbid`. Use this with caution.
:::

## Running future Jobs

Jobs can also be started in the future, rather than starting immediately upon creation. You can create a Job with `startAfter` as follows:

```yaml title="Example: Creating Job with startAfter"
apiVersion: execution.furiko.io/v1alpha1
kind: Job
metadata:
  generateName: jobconfig-sample-
spec:
  configName: jobconfig-sample
  startPolicy:
    concurrencyPolicy: Enqueue
    startAfter: 2022-03-06T00:27:00+08:00
```

For more details, see [Start Policy](./start-policy.md).

## Running independent Jobs

It is also possible to run Jobs without a JobConfig. However, this is not recommended as it would disable the features mentioned above, including the ability to use `optionValues` and enforcing concurrency policies.

In such a case, you have to explicitly specify the `template` of the Job yourself. For an example, see [Sample Configuration](./sample-configuration.md#standalone-job).
