# ExecutionWebhook

**ExecutionWebhook** consists of several [dynamic admission webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) for validating and mutating [Jobs](../../execution/job/index.md) and [JobConfigs](../../execution/jobconfig/index.md).

The purpose of the webhook server is to provide sanity checks to ensure that malformed resources will not be admitted to the cluster, as well as to provide certain convenience functions via mutating admission webhooks.

## JobConfig

### Bumping `scheduleNotBefore`

Upon updating the JobConfig's `schedule`, the `scheduleNotBefore` timestamp will also be bumped to the current time via a mutating admission webhook. This prevents [back-scheduling](../../execution/jobconfig/scheduling.mdx#back-scheduling) when a job's interval was shortened or re-enabled after being disabled for a period of time.

## Job

### Rejecting `Forbid` concurrency policy

When creating a new Job, the validating admission webhook will attempt to forbid incoming Jobs on a best-effort basis, by checking the parent JobConfig's status.

If two Jobs are started simultaneously, it may be possible that the JobConfig's status is not up-to-date yet, and the webhook may incorrectly admit the request. Only the leading controller is able to 100% determine if the Job will not violate the [concurrency policy](../../execution/jobconfig/concurrency.md) of the JobConfig by using an atomic in-memory store.

As such, the webhook purely performs a best-effort rejection of the Job, but defers the actual admission of the Job to the [JobQueueController](./execution-controller.md#jobqueuecontroller). This means that the Job could be terminated with an abnormal `AdmissionError` after determining that it is not safe to admit it for execution.

### Preparing `optionValues`

When a Job is created, the mutating admission webhook evaluates all fields specified in `optionValues` before populating the final set of substitutions into `substitutions`. This means that `optionValues` are evaluated only at creation time, and if the JobConfig is modified while the Job is active, the changes will not take effect until we start a subsequent Job.
