"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5206],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return b}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(o),b=r,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3702:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],c={},s="ExecutionWebhook",l={unversionedId:"development/architecture/execution-webhook",id:"version-v0.2/development/architecture/execution-webhook",title:"ExecutionWebhook",description:"ExecutionWebhook consists of several dynamic admission webhooks for validating and mutating Jobs and JobConfigs.",source:"@site/versioned_docs/version-v0.2/development/architecture/execution-webhook.md",sourceDirName:"development/architecture",slug:"/development/architecture/execution-webhook",permalink:"/docs/development/architecture/execution-webhook",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/development/architecture/execution-webhook.md",tags:[],version:"v0.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ExecutionController",permalink:"/docs/development/architecture/execution-controller"},next:{title:"Reference",permalink:"/docs/reference/"}},u={},p=[{value:"JobConfig",id:"jobconfig",level:2},{value:"Bumping <code>scheduleNotBefore</code>",id:"bumping-schedulenotbefore",level:3},{value:"Job",id:"job",level:2},{value:"Rejecting <code>Forbid</code> concurrency policy",id:"rejecting-forbid-concurrency-policy",level:3},{value:"Preparing <code>optionValues</code>",id:"preparing-optionvalues",level:3}],d={toc:p};function b(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"executionwebhook"},"ExecutionWebhook"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ExecutionWebhook")," consists of several ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"dynamic admission webhooks")," for validating and mutating ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/"},"Jobs")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/"},"JobConfigs"),"."),(0,i.kt)("p",null,"The purpose of the webhook server is to provide sanity checks to ensure that malformed resources will not be admitted to the cluster, as well as to provide certain convenience functions via mutating admission webhooks."),(0,i.kt)("h2",{id:"jobconfig"},"JobConfig"),(0,i.kt)("h3",{id:"bumping-schedulenotbefore"},"Bumping ",(0,i.kt)("inlineCode",{parentName:"h3"},"scheduleNotBefore")),(0,i.kt)("p",null,"Upon updating the JobConfig's ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleNotBefore")," timestamp will also be bumped to the current time via a mutating admission webhook. This prevents ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/scheduling#back-scheduling"},"back-scheduling")," when a job's interval was shortened or re-enabled after being disabled for a period of time."),(0,i.kt)("h2",{id:"job"},"Job"),(0,i.kt)("h3",{id:"rejecting-forbid-concurrency-policy"},"Rejecting ",(0,i.kt)("inlineCode",{parentName:"h3"},"Forbid")," concurrency policy"),(0,i.kt)("p",null,"When creating a new Job, the validating admission webhook will attempt to forbid incoming Jobs on a best-effort basis, by checking the parent JobConfig's status."),(0,i.kt)("p",null,"If two Jobs are started simultaneously, it may be possible that the JobConfig's status is not up-to-date yet, and the webhook may incorrectly admit the request. Only the leading controller is able to 100% determine if the Job will not violate the ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/concurrency"},"concurrency policy")," of the JobConfig by using an atomic in-memory store."),(0,i.kt)("p",null,"As such, the webhook purely performs a best-effort rejection of the Job, but defers the actual admission of the Job to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/architecture/execution-controller#jobqueuecontroller"},"JobQueueController"),". This means that the Job could be terminated with an abnormal ",(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionError")," after determining that it is not safe to admit it for execution."),(0,i.kt)("h3",{id:"preparing-optionvalues"},"Preparing ",(0,i.kt)("inlineCode",{parentName:"h3"},"optionValues")),(0,i.kt)("p",null,"When a Job is created, the mutating admission webhook evaluates all fields specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"optionValues")," before populating the final set of substitutions into ",(0,i.kt)("inlineCode",{parentName:"p"},"substitutions"),". This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"optionValues")," are evaluated only at creation time, and if the JobConfig is modified while the Job is active, the changes will not take effect until we start a subsequent Job."))}b.isMDXComponent=!0}}]);