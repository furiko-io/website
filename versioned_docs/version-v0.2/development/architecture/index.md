# Architecture

This section will discuss the architecture of Furiko.

## Component Types

Furiko's architecture consists of several types of components:

- **Controller Managers**: Controller manager that combines multiple controllers together.
- **Webhook Services**: Kubernetes [services](https://kubernetes.io/docs/concepts/services-networking/) that serve as [Admission Webhook](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) servers.

### ExecutionController

The [ExecutionController](./execution-controller.md) is responsible for managing and interacting with [Furiko Execution](../../execution/concepts.md) CRDs.

### ExecutionWebhook

The [ExecutionWebhook](./execution-webhook.md) is responsible for enforcing semantics and populating of several convenience fields for [Furiko Execution](../../execution/concepts.md) CRDs.
