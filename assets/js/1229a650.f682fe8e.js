"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8764],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(f,r(r({ref:n},u),{},{components:t})):o.createElement(f,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5077:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(7294),i="caption_y_hk",a=function(e){var n=e.src,t=e.imgStyle,a=e.children;return o.createElement("div",{className:"text--center"},o.createElement("img",{style:t,src:n}),o.createElement("p",{className:i},a))}},9991:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),r=t(5077),c=["components"],l={sidebar_position:20},s="Adhoc Execution",u={unversionedId:"execution/job/adhoc-execution",id:"version-v0.2/execution/job/adhoc-execution",title:"Adhoc Execution",description:"This page will discuss how to run once-off, or adhoc Job executions. An adhoc Job is one that is not scheduled automatically (e.g. from a cron schedule), but rather started explicitly (such as via user creation or external triggers).",source:"@site/versioned_docs/version-v0.2/execution/job/adhoc-execution.mdx",sourceDirName:"execution/job",slug:"/execution/job/adhoc-execution",permalink:"/docs/execution/job/adhoc-execution",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/execution/job/adhoc-execution.mdx",tags:[],version:"v0.2",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Task Executors",permalink:"/docs/execution/job/task-executor"},next:{title:"Start Policy",permalink:"/docs/execution/job/start-policy"}},p={},d=[{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Creating a Job from a JobConfig",id:"creating-a-job-from-a-jobconfig",level:2},{value:"<code>configName</code>",id:"configname",level:3},{value:"<code>optionValues</code>",id:"optionvalues",level:3},{value:"Concurrency",id:"concurrency",level:3},{value:"Scheduling Adhoc Future Executions",id:"scheduling-adhoc-future-executions",level:2},{value:"Independent Jobs",id:"independent-jobs",level:2}],m={toc:d};function f(e){var n=e.components,l=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adhoc-execution"},"Adhoc Execution"),(0,a.kt)("p",null,"This page will discuss how to run once-off, or ",(0,a.kt)("strong",{parentName:"p"},"adhoc")," Job executions. An adhoc Job is one that is not scheduled automatically (e.g. from a cron schedule), but rather started explicitly (such as via user creation or external triggers)."),(0,a.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is recommended to use the CLI to run adhoc jobs."))),(0,a.kt)("p",null,"The easiest way to run an adhoc Job execution is to use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/cli"},(0,a.kt)("inlineCode",{parentName:"a"},"furiko")," CLI tool"),":"),(0,a.kt)(r.Z,{src:t(2836).Z,mdxType:"CaptionedImage"},"Example of ",(0,a.kt)("code",null,"furiko run")," in action"),(0,a.kt)("p",null,"It is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"furiko run"),", which supports the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interactive prompt for ",(0,a.kt)("a",{parentName:"li",href:"/docs/execution/jobconfig/job-options"},"option values")," (suppress with ",(0,a.kt)("inlineCode",{parentName:"li"},"--use-default-options"),")"),(0,a.kt)("li",{parentName:"ul"},"Specify future timestamp to ",(0,a.kt)("a",{parentName:"li",href:"/docs/execution/job/start-policy#startafter"},"start after")," (with ",(0,a.kt)("inlineCode",{parentName:"li"},"--at"),")")),(0,a.kt)("h2",{id:"creating-a-job-from-a-jobconfig"},"Creating a Job from a JobConfig"),(0,a.kt)("p",null,"A Job is typically created from a JobConfig, since the JobConfig controller groups together multiple Job objects and controls their lifecycle and behavior."),(0,a.kt)("h3",{id:"configname"},(0,a.kt)("inlineCode",{parentName:"h3"},"configName")),(0,a.kt)("p",null,"To create a Job from a JobConfig, the simplest way is to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"configName")," of a JobConfig in the same namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: Creating Jobs with configName"',title:'"Example:',Creating:!0,Jobs:!0,with:!0,'configName"':!0},"apiVersion: execution.furiko.io/v1alpha1\nkind: Job\nmetadata:\n  generateName: jobconfig-sample-\nspec:\n  configName: jobconfig-sample\n  optionValues: |-\n    username: bob\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/architecture/execution-webhook"},"webhook")," is responsible for transforming the Job creation request, so that all fields will be populated from the JobConfig. The end result would be the following, extremely comprehensive Job configuration. Some fields are explained below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example: Final Result after transforming Jobs with configName"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: execution.furiko.io/v1alpha1\nkind: Job\nmetadata:\n  annotations:\n    # Internal annotation used to "snapshot" the JobOptionsSpec of the JobConfig.\n    execution.furiko.io/options-spec-hash: 91305051fc67f709\n  creationTimestamp: "2022-03-15T07:35:21Z"\n  finalizers:\n    # This finalizer is needed by the JobController.\n    - execution.furiko.io/delete-dependents-finalizer\n  generateName: jobconfig-sample-\n  generation: 1\n  labels:\n    # Internal label used to identify owner JobConfig.\n    execution.furiko.io/job-config-uid: cd346c6f-4493-42b5-a813-8787a68ec74c\n  name: jobconfig-sample-p8fzq\n  namespace: default\n  # Owner reference of JobConfig controller.\n  ownerReferences:\n    - apiVersion: execution.furiko.io/v1alpha1\n      blockOwnerDeletion: true\n      controller: true\n      kind: JobConfig\n      name: jobconfig-sample\n      uid: cd346c6f-4493-42b5-a813-8787a68ec74c\n  resourceVersion: "585289534"\n  uid: f02bf84c-ab06-4121-9c7f-be50ff61de72\nspec:\n  type: Adhoc\n  optionValues: \'{"username":"bob"}\'\n  startPolicy:\n    # Inherited from the JobConfig\'s concurrency.policy.\n    concurrencyPolicy: Forbid\n  substitutions:\n    # Addition of jobconfig context variables.\n    jobconfig.cron_schedule: H/15 * * * *\n    jobconfig.name: jobconfig-sample\n    jobconfig.namespace: default\n    jobconfig.timezone: Asia/Singapore\n    # Evaluted option variables.\n    option.image-tag: latest\n    option.username: Example User\n  # Inherited from the JobConfig\'s spec.template.\n  template:\n    maxAttempts: 1\n    taskTemplate:\n      pod:\n        metadata: {}\n        spec:\n          containers:\n            - args:\n                - echo\n                - Hello world, ${option.username}!\n              env:\n                - name: JOBCONFIG_NAME\n                  value: ${jobconfig.name}\n                - name: JOB_NAME\n                  value: ${job.name}\n                - name: TASK_NAME\n                  value: ${task.name}\n              image: alpine:${option.image-tag}\n              name: job-container\n              resources:\n                limits:\n                  cpu: 100m\n                  memory: 64Mi\n          restartPolicy: Never\n  ttlSecondsAfterFinished: 3600\n'))),(0,a.kt)("h3",{id:"optionvalues"},(0,a.kt)("inlineCode",{parentName:"h3"},"optionValues")),(0,a.kt)("p",null,"When creating a Job from a JobConfig, you can also specify ",(0,a.kt)("inlineCode",{parentName:"p"},"optionValues")," which declares the value for each option defined in the JobConfig's ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/job-options"},"Job Options"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"optionValues")," must be a YAML or JSON encoded string of a map from the option's ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," to the corresponding value. The value may be of any admissible type, depending on the option's `type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: Job with optionValues"',title:'"Example:',Job:!0,with:!0,'optionValues"':!0},'apiVersion: execution.furiko.io/v1alpha1\nkind: Job\nmetadata:\n  generateName: jobconfig-sample-\nspec:\n  configName: jobconfig-sample\n  optionValues: |-\n    # String and Select options accept only strings.\n    # Numbers or booleans must be quoted in YAML.\n    configName: default-config\n    userCount: "3"\n\n    # Multi options accept a list of strings.\n    userList:\n    - mary\n    - bob\n    - alice\n\n    # Bool options accept a boolean value.\n    verbose: true\n')),(0,a.kt)("p",null,"If not specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"optionValues"),", the default value (if any) from the JobConfig will be used. Otherwise, if it is also ",(0,a.kt)("inlineCode",{parentName:"p"},"required"),", a validation error will be thrown if there is no default and not explicitly defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"optionValues"),"."),(0,a.kt)("p",null,"After evaluation, the final rendered values will be stored inside ",(0,a.kt)("inlineCode",{parentName:"p"},"substitutions"),". See the previous section for a full example."),(0,a.kt)("h3",{id:"concurrency"},"Concurrency"),(0,a.kt)("p",null,"When creating a Job from a JobConfig, it is still subject to the JobConfig's ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/concurrency"},"concurrency policy"),". The ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/job/start-policy"},(0,a.kt)("inlineCode",{parentName:"a"},"startPolicy"))," automatically inherits the JobConfig's ",(0,a.kt)("inlineCode",{parentName:"p"},"concurrency.policy")," if not defined."),(0,a.kt)("p",null,"However, you can also explicitly specify ",(0,a.kt)("inlineCode",{parentName:"p"},"startPolicy.concurrencyPolicy")," in the Job's spec, so that it ",(0,a.kt)("em",{parentName:"p"},"does not")," follow the JobConfig's actual policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: execution.furiko.io/v1alpha1\nkind: Job\nmetadata:\n  generateName: jobconfig-sample-\nspec:\n  configName: jobconfig-sample\n  startPolicy:\n    concurrencyPolicy: Enqueue\n")),(0,a.kt)("p",null,"Assuming the JobConfig uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Forbid"),", this effectively allows us to schedule an adhoc execution after all currently running Jobs are completed."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Explicitly specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"startPolicy.concurrencyPolicy")," in a Job may be a violation of the JobConfig's intended behavior, especially if the Job sets it to ",(0,a.kt)("inlineCode",{parentName:"p"},"Allow")," even though the JobConfig uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Forbid"),". Use this with caution."))),(0,a.kt)("h2",{id:"scheduling-adhoc-future-executions"},"Scheduling Adhoc Future Executions"),(0,a.kt)("p",null,"Jobs can also be started in the future, rather than starting immediately upon creation. You can create a Job with ",(0,a.kt)("inlineCode",{parentName:"p"},"startAfter")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: Creating Job with startAfter"',title:'"Example:',Creating:!0,Job:!0,with:!0,'startAfter"':!0},"apiVersion: execution.furiko.io/v1alpha1\nkind: Job\nmetadata:\n  generateName: jobconfig-sample-\nspec:\n  configName: jobconfig-sample\n  startPolicy:\n    concurrencyPolicy: Enqueue\n    startAfter: 2022-03-06T00:27:00+08:00\n")),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/job/start-policy"},"Start Policy"),"."),(0,a.kt)("h2",{id:"independent-jobs"},"Independent Jobs"),(0,a.kt)("p",null,"It is also possible to run Jobs without a JobConfig. However, this is not recommended as it would disable the features mentioned above, including the ability to use ",(0,a.kt)("inlineCode",{parentName:"p"},"optionValues")," and enforcing concurrency policies."),(0,a.kt)("p",null,"In such a case, you have to explicitly specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," of the Job yourself. For an example, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/job/sample-configuration#standalone-job"},"Sample Configuration"),"."))}f.isMDXComponent=!0},2836:function(e,n,t){n.Z=t.p+"assets/images/furiko-run-af97f41db3a03a24a74550ee0715dbb9.png"}}]);