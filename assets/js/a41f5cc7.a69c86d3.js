"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9408],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=r,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return t?o.createElement(d,a(a({ref:n},l),{},{components:t})):o.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3857:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:999},s="Sample Configuration",u={unversionedId:"execution/jobconfig/sample-configuration",id:"version-v0.2.0/execution/jobconfig/sample-configuration",title:"Sample Configuration",description:"The following is a full sample configuration.",source:"@site/versioned_docs/version-v0.2.0/execution/jobconfig/sample-configuration.md",sourceDirName:"execution/jobconfig",slug:"/execution/jobconfig/sample-configuration",permalink:"/docs/execution/jobconfig/sample-configuration",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2.0/execution/jobconfig/sample-configuration.md",tags:[],version:"v0.2.0",sidebarPosition:999,frontMatter:{sidebar_position:999},sidebar:"tutorialSidebar",previous:{title:"Job Options",permalink:"/docs/execution/jobconfig/job-options"},next:{title:"Job",permalink:"/docs/execution/job/"}},l={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sample-configuration"},"Sample Configuration"),(0,i.kt)("p",null,"The following is a full sample configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: execution.furiko.io/v1alpha1\nkind: JobConfig\nmetadata:\n  name: jobconfig-sample\nspec:\n  # Concurrency configuration.\n  concurrency:\n    policy: Forbid\n\n  # Schedule configuration.\n  schedule:\n    cron:\n      expression: '0 */15 * * * * *'\n      timezone: 'Asia/Singapore'\n    disabled: false\n\n  # Job options.\n  option:\n    options:\n      - type: String\n        name: username\n        label: Username\n        string:\n          default: Example User\n          trimSpaces: true\n\n  # Template for the Job to be created. For more info, see the Job sample configuration.\n  template:\n    # Any labels and annotations will be automatically added to downstream Jobs.\n    metadata:\n      annotations:\n        annotations.furiko.io/job-group: 'cool-jobs'\n    spec:\n      # Specifies maximum number of attempts for each task, defaults to 1.\n      maxAttempts: 3\n\n      # Optional delay between each task retry.\n      retryDelaySeconds: 10\n\n      # Optional duration in seconds for how long each task should be pending for\n      # until it gets killed.\n      taskPendingTimeoutSeconds: 1800\n\n      # The template for each task to be created by the Job.\n      taskTemplate:\n        # Specify how to create the task as a Pod. This is just a PodTemplateSpec.\n        pod:\n          spec:\n            containers:\n              # Notice how we can use context variables and job options inside\n              # the PodSpec freely to be substituted at runtime.\n              - name: job-container\n                args:\n                  - echo\n                  - 'Hello world, ${option.username}!'\n                env:\n                  - name: JOBCONFIG_NAME\n                    value: '${jobconfig.name}'\n                  - name: JOB_NAME\n                    value: '${job.name}'\n                image: 'alpine'\n                resources:\n                  limits:\n                    cpu: 100m\n                    memory: 64Mi\n")))}m.isMDXComponent=!0}}]);