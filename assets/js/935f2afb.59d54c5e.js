"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/","docId":"introduction"},{"type":"link","label":"Features","href":"/docs/features","docId":"features"},{"type":"link","label":"Components","href":"/docs/components","docId":"components"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Installing Furiko","href":"/docs/getting-started/install","docId":"getting-started/install"},{"type":"link","label":"Installing the CLI","href":"/docs/getting-started/cli","docId":"getting-started/cli"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Executing Your First Job","href":"/docs/getting-started/tutorials/executing-jobs/","docId":"getting-started/tutorials/executing-jobs/index"},{"type":"link","label":"Parameterization Using Job Options","href":"/docs/getting-started/tutorials/job-options/","docId":"getting-started/tutorials/job-options/index"},{"type":"link","label":"Using the CLI","href":"/docs/getting-started/tutorials/using-the-cli/","docId":"getting-started/tutorials/using-the-cli/index"}]}],"href":"/docs/category/getting-started"},{"type":"category","label":"Executing Jobs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Concepts","href":"/docs/execution/concepts","docId":"execution/concepts"},{"type":"category","label":"JobConfig","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Scheduling","href":"/docs/execution/jobconfig/scheduling","docId":"execution/jobconfig/scheduling"},{"type":"link","label":"Cron Syntax","href":"/docs/execution/jobconfig/cron-syntax","docId":"execution/jobconfig/cron-syntax"},{"type":"link","label":"Concurrency","href":"/docs/execution/jobconfig/concurrency","docId":"execution/jobconfig/concurrency"},{"type":"link","label":"Context Variables","href":"/docs/execution/jobconfig/context-variables","docId":"execution/jobconfig/context-variables"},{"type":"link","label":"Job Options","href":"/docs/execution/jobconfig/job-options","docId":"execution/jobconfig/job-options"},{"type":"link","label":"Sample Configuration","href":"/docs/execution/jobconfig/sample-configuration","docId":"execution/jobconfig/sample-configuration"}],"href":"/docs/execution/jobconfig/"},{"type":"category","label":"Job","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Task Executors","href":"/docs/execution/job/task-executor","docId":"execution/job/task-executor"},{"type":"link","label":"Adhoc Execution","href":"/docs/execution/job/adhoc-execution","docId":"execution/job/adhoc-execution"},{"type":"link","label":"Start Policy","href":"/docs/execution/job/start-policy","docId":"execution/job/start-policy"},{"type":"link","label":"Parallelism","href":"/docs/execution/job/parallelism","docId":"execution/job/parallelism"},{"type":"link","label":"Timeouts and Retries","href":"/docs/execution/job/timeout-retries","docId":"execution/job/timeout-retries"},{"type":"link","label":"Killing Jobs","href":"/docs/execution/job/killing-jobs","docId":"execution/job/killing-jobs"},{"type":"link","label":"Force Deletion","href":"/docs/execution/job/force-deletion","docId":"execution/job/force-deletion"},{"type":"link","label":"Garbage Collection","href":"/docs/execution/job/garbage-collection","docId":"execution/job/garbage-collection"},{"type":"link","label":"Sample Configuration","href":"/docs/execution/job/sample-configuration","docId":"execution/job/sample-configuration"}],"href":"/docs/execution/job/"}],"href":"/docs/category/executing-jobs"},{"type":"category","label":"Operator Manual","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Configuration Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Bootstrap Configuration","href":"/docs/operator-manual/configuration/bootstrap","docId":"operator-manual/configuration/bootstrap"},{"type":"link","label":"Dynamic Configuration","href":"/docs/operator-manual/configuration/dynamic","docId":"operator-manual/configuration/dynamic"}],"href":"/docs/operator-manual/configuration/"},{"type":"link","label":"Advanced Installation","href":"/docs/operator-manual/advanced-installation","docId":"operator-manual/advanced-installation"}],"href":"/docs/category/operator-manual"},{"type":"category","label":"Developer Guide","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ExecutionController","href":"/docs/development/architecture/execution-controller","docId":"development/architecture/execution-controller"},{"type":"link","label":"ExecutionWebhook","href":"/docs/development/architecture/execution-webhook","docId":"development/architecture/execution-webhook"}],"href":"/docs/development/architecture/"}],"href":"/docs/development/"},{"type":"category","label":"Contributing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Contribution Guide","href":"/docs/contributing/overview","docId":"contributing/overview"},{"type":"link","label":"Roadmap","href":"/docs/contributing/roadmap","docId":"contributing/roadmap"}],"href":"/docs/category/contributing"},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Configuration Reference","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Furiko Execution","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/reference/configuration/execution/overview","docId":"reference/configuration/execution/overview"},{"type":"link","label":"Controller Flags","href":"/docs/reference/configuration/execution/controller-flags","docId":"reference/configuration/execution/controller-flags"},{"type":"link","label":"Controller Config","href":"/docs/reference/configuration/execution/controller-config","docId":"reference/configuration/execution/controller-config"},{"type":"link","label":"Webhook Flags","href":"/docs/reference/configuration/execution/webhook-flags","docId":"reference/configuration/execution/webhook-flags"},{"type":"link","label":"Webhook Config","href":"/docs/reference/configuration/execution/webhook-config","docId":"reference/configuration/execution/webhook-config"},{"type":"link","label":"Dynamic Config","href":"/docs/reference/configuration/execution/dynamic-config","docId":"reference/configuration/execution/dynamic-config"}]}]}],"href":"/docs/reference/"}]},"docs":{"components":{"id":"components","title":"Components","description":"Furiko is organized into the following components, which groups together related functionality and also serves as individual deployment units.","sidebar":"tutorialSidebar"},"contributing/overview":{"id":"contributing/overview","title":"Contribution Guide","description":"We\'re so excited that you want to contribute to Furiko! We will briefly outline the different ways you can contribute to the project.","sidebar":"tutorialSidebar"},"contributing/roadmap":{"id":"contributing/roadmap","title":"Roadmap","description":"The roadmap is primarily maintained on Google Docs:","sidebar":"tutorialSidebar"},"development/architecture/execution-controller":{"id":"development/architecture/execution-controller","title":"ExecutionController","description":"ExecutionController consists of several controllers responsible for managing Jobs and JobConfigs.","sidebar":"tutorialSidebar"},"development/architecture/execution-webhook":{"id":"development/architecture/execution-webhook","title":"ExecutionWebhook","description":"ExecutionWebhook consists of several dynamic admission webhooks for validating and mutating Jobs and JobConfigs.","sidebar":"tutorialSidebar"},"development/architecture/index":{"id":"development/architecture/index","title":"Architecture","description":"This section will discuss the architecture of Furiko.","sidebar":"tutorialSidebar"},"development/index":{"id":"development/index","title":"Developer Guide","description":"This section contains developer guides. Read on if you are interested in the inner workings of Furiko as well.","sidebar":"tutorialSidebar"},"execution/concepts":{"id":"execution/concepts","title":"Concepts","description":"Furiko Execution is the heart of the Furiko platform, and consists of components to configure scheduled jobs and trigger ad-hoc executions.","sidebar":"tutorialSidebar"},"execution/job/adhoc-execution":{"id":"execution/job/adhoc-execution","title":"Adhoc Execution","description":"This page will discuss how to run once-off, or adhoc Job executions. An adhoc Job is one that is not scheduled automatically (e.g. from a cron schedule), but rather started explicitly (such as via user creation or external triggers).","sidebar":"tutorialSidebar"},"execution/job/force-deletion":{"id":"execution/job/force-deletion","title":"Force Deletion","description":"This page describes when and how force deletion is used in the JobController.","sidebar":"tutorialSidebar"},"execution/job/garbage-collection":{"id":"execution/job/garbage-collection","title":"Garbage Collection","description":"As Furiko runs more and more Jobs in the cluster, they may tend to build up over time, even after they are finished.","sidebar":"tutorialSidebar"},"execution/job/index":{"id":"execution/job/index","title":"Job","description":"This page describes how to configure a Job. You can find a full sample configuration here.","sidebar":"tutorialSidebar"},"execution/job/killing-jobs":{"id":"execution/job/killing-jobs","title":"Killing Jobs","description":"A Job can be killed after it is started, either manually, through a timeout, or other means (such as parallel completion).","sidebar":"tutorialSidebar"},"execution/job/parallelism":{"id":"execution/job/parallelism","title":"Parallelism","description":"This page will discuss how to run multiple tasks in parallel for a single Job.","sidebar":"tutorialSidebar"},"execution/job/sample-configuration":{"id":"execution/job/sample-configuration","title":"Sample Configuration","description":"This page contains sample configurations for creating a Job.","sidebar":"tutorialSidebar"},"execution/job/start-policy":{"id":"execution/job/start-policy","title":"Start Policy","description":"A Job may have an optional Start Policy, which defines certain preconditions that must be met before the Job can be started.","sidebar":"tutorialSidebar"},"execution/job/task-executor":{"id":"execution/job/task-executor","title":"Task Executors","description":"Furiko supports an extensible task executor interface, which allows tasks to be created, managed and reconciled in the same way regardless of the actual backing object.","sidebar":"tutorialSidebar"},"execution/job/timeout-retries":{"id":"execution/job/timeout-retries","title":"Timeouts and Retries","description":"Furiko provides several mechanisms to impose timeouts and retrying of failed Jobs.","sidebar":"tutorialSidebar"},"execution/jobconfig/concurrency":{"id":"execution/jobconfig/concurrency","title":"Concurrency","description":"The concurrency of a JobConfig defines the behavior when a single JobConfig has multiple concurrent Jobs.","sidebar":"tutorialSidebar"},"execution/jobconfig/context-variables":{"id":"execution/jobconfig/context-variables","title":"Context Variables","description":"This page introduces the concept of Context Variables, which allows Furiko users to parameterize their jobs based on certain variables.","sidebar":"tutorialSidebar"},"execution/jobconfig/cron-syntax":{"id":"execution/jobconfig/cron-syntax","title":"Cron Syntax","description":"Furiko supports a cron syntax that extends the standard cron rules, borrowing ideas from various cron implementations found in the wild. This page acts as the reference document for Furiko\'s cron syntax.","sidebar":"tutorialSidebar"},"execution/jobconfig/index":{"id":"execution/jobconfig/index","title":"JobConfig","description":"This page describes how to configure a JobConfig. You can find a full sample configuration here.","sidebar":"tutorialSidebar"},"execution/jobconfig/job-options":{"id":"execution/jobconfig/job-options","title":"Job Options","description":"This page introduces the concept of Job Options, which allows Furiko users to parameterize their jobs with structured user-defined input. Note that a Job Option is a special type of Context Variable; refer to the linked page to see how they work.","sidebar":"tutorialSidebar"},"execution/jobconfig/sample-configuration":{"id":"execution/jobconfig/sample-configuration","title":"Sample Configuration","description":"The following is a full sample configuration.","sidebar":"tutorialSidebar"},"execution/jobconfig/scheduling":{"id":"execution/jobconfig/scheduling","title":"Scheduling","description":"A JobConfig can be set to automatically create Jobs based on a cron schedule.","sidebar":"tutorialSidebar"},"features":{"id":"features","title":"Features","description":"Furiko specializes in time-based scheduling of scheduled and adhoc jobs. The following is a non-exhaustive list of features and enhancements offered by Furiko.","sidebar":"tutorialSidebar"},"getting-started/cli":{"id":"getting-started/cli","title":"Installing the CLI","description":"This guide provides details on how to install and use the Furiko CLI tool, furiko.","sidebar":"tutorialSidebar"},"getting-started/install":{"id":"getting-started/install","title":"Installing Furiko","description":"This page explains various methods of installation for Furiko.","sidebar":"tutorialSidebar"},"getting-started/tutorials/executing-jobs/index":{"id":"getting-started/tutorials/executing-jobs/index","title":"Executing Your First Job","description":"The following tutorial walks you through how to create and execute an example JobConfig, as well as scheduling future Jobs.","sidebar":"tutorialSidebar"},"getting-started/tutorials/job-options/index":{"id":"getting-started/tutorials/job-options/index","title":"Parameterization Using Job Options","description":"The following tutorial walks you through how to parameterize a JobConfig using Job Options.","sidebar":"tutorialSidebar"},"getting-started/tutorials/using-the-cli/index":{"id":"getting-started/tutorials/using-the-cli/index","title":"Using the CLI","description":"This guide provides some example usage for the CLI tool, furiko.","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Furiko is a cloud-native, enterprise-level cron and adhoc job platform for Kubernetes.","sidebar":"tutorialSidebar"},"operator-manual/advanced-installation":{"id":"operator-manual/advanced-installation","title":"Advanced Installation","description":"This guide explains how to perform a full manual installation of Furiko, and also serves as a full explainer for the recommended YAML method of installation.","sidebar":"tutorialSidebar"},"operator-manual/configuration/bootstrap":{"id":"operator-manual/configuration/bootstrap","title":"Bootstrap Configuration","description":"This page lists the bootstrap configuration that is common to all components in Furiko.","sidebar":"tutorialSidebar"},"operator-manual/configuration/dynamic":{"id":"operator-manual/configuration/dynamic","title":"Dynamic Configuration","description":"This page introduces how to use Dynamic Configuration in Furiko.","sidebar":"tutorialSidebar"},"operator-manual/configuration/index":{"id":"operator-manual/configuration/index","title":"Configuration Guide","description":"Furiko allows extensive configuration of its behavior, while also defaulting to recommended, sane defaults out of the box.","sidebar":"tutorialSidebar"},"reference/configuration/execution/controller-config":{"id":"reference/configuration/execution/controller-config","title":"Execution Controller Config","description":"This page contains the full bootstrap configuration for ExecutionController.","sidebar":"tutorialSidebar"},"reference/configuration/execution/controller-flags":{"id":"reference/configuration/execution/controller-flags","title":"Execution Controller Flags","description":"This page contains the full command-line flags for ExecutionController.","sidebar":"tutorialSidebar"},"reference/configuration/execution/dynamic-config":{"id":"reference/configuration/execution/dynamic-config","title":"Execution Dynamic Config","description":"This page documents the dynamic configuration for all execution components.","sidebar":"tutorialSidebar"},"reference/configuration/execution/overview":{"id":"reference/configuration/execution/overview","title":"Execution Configuration","description":"This section contains the full configuration for all Execution components.","sidebar":"tutorialSidebar"},"reference/configuration/execution/webhook-config":{"id":"reference/configuration/execution/webhook-config","title":"Execution Webhook Config","description":"This page contains the full bootstrap configuration for ExecutionWebhook.","sidebar":"tutorialSidebar"},"reference/configuration/execution/webhook-flags":{"id":"reference/configuration/execution/webhook-flags","title":"Execution Webhook Flags","description":"This page contains the full command-line flags for ExecutionWebhook.","sidebar":"tutorialSidebar"},"reference/index":{"id":"reference/index","title":"Reference","description":"This section contains API and configuration references.","sidebar":"tutorialSidebar"}}}')}}]);