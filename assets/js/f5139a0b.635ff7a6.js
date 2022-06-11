"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5296],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return b}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),b=r,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||i;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7335:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],s={},l="Job",c={unversionedId:"execution/job/index",id:"version-v0.2/execution/job/index",title:"Job",description:"This page describes how to configure a Job. You can find a full sample configuration here.",source:"@site/versioned_docs/version-v0.2/execution/job/index.md",sourceDirName:"execution/job",slug:"/execution/job/",permalink:"/docs/execution/job/",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/execution/job/index.md",tags:[],version:"v0.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sample Configuration",permalink:"/docs/execution/jobconfig/sample-configuration"},next:{title:"Task Executors",permalink:"/docs/execution/job/task-executor"}},u={},p=[{value:"Task Executor",id:"task-executor",level:2},{value:"Running Adhoc Jobs",id:"running-adhoc-jobs",level:2},{value:"Start Policy",id:"start-policy",level:2},{value:"Timeouts and Retries",id:"timeouts-and-retries",level:2},{value:"Substitutions",id:"substitutions",level:2},{value:"Garbage Collection",id:"garbage-collection",level:2}],d={toc:p};function b(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"job"},"Job"),(0,i.kt)("p",null,"This page describes how to configure a Job. You can find a full sample configuration ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/sample-configuration"},"here"),"."),(0,i.kt)("h2",{id:"task-executor"},"Task Executor"),(0,i.kt)("p",null,"A Job creates one or more tasks during its lifecycle. Each task corresponds to a single parallel and retry index for the Job."),(0,i.kt)("p",null,"The Job needs a template which describes how to create tasks. You can specify the task template under ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.taskTemplate"),", which supports the following fields (exactly one must be specified):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pod"),": Create the task as a Pod. This template is a ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#podtemplate-v1-core"},(0,i.kt)("inlineCode",{parentName:"a"},"PodTemplateSpec")),".")),(0,i.kt)("p",null,"Currently, only the ",(0,i.kt)("inlineCode",{parentName:"p"},"pod")," task executor is supported."),(0,i.kt)("p",null,"For more details on the task executor interface, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/task-executor"},"Task Executors"),"."),(0,i.kt)("h2",{id:"running-adhoc-jobs"},"Running Adhoc Jobs"),(0,i.kt)("p",null,"A Job can be created and started automatically by the JobConfig controller, but it can also be started on an adhoc basis."),(0,i.kt)("p",null,"Jobs created from a JobConfig will inherit its template, are subject to the JobConfig's concurrency policies, and can utilize the Job Options defined in the JobConfig's spec."),(0,i.kt)("p",null,"For more details, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/adhoc-execution"},"Adhoc Execution"),"."),(0,i.kt)("h2",{id:"start-policy"},"Start Policy"),(0,i.kt)("p",null,"When a Job is created, it may not necessarily start executing right away. This is defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.startPolicy"),"."),(0,i.kt)("p",null,"For more details, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/start-policy"},"Start Policy"),"."),(0,i.kt)("h2",{id:"timeouts-and-retries"},"Timeouts and Retries"),(0,i.kt)("p",null,"Furiko provides several mechanisms to impose timeouts and retrying of failed Jobs."),(0,i.kt)("p",null,"For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/timeout-retries"},"Timeouts and Retries"),"."),(0,i.kt)("h2",{id:"substitutions"},"Substitutions"),(0,i.kt)("p",null,"Furiko exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"substitutions")," field, so that the JobController knows how to substitute context variables into the task template at runtime. This field is also used when creating a Job from a JobConfig, for example via ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/job-options"},"Job Options"),"."),(0,i.kt)("p",null,"All substitutions should be a key-value map of strings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-{.yaml",metastring:'title="Example JobSpec"}',title:'"Example','JobSpec"}':!0},'spec:\n  substitutions:\n    option.user-name: "John Smith"\n    option.job-types: "adhoc,scheduled"\n')),(0,i.kt)("p",null,"For more details, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/context-variables"},"Context Variables"),"."),(0,i.kt)("h2",{id:"garbage-collection"},"Garbage Collection"),(0,i.kt)("p",null,"Jobs should not live for too long after they are finished. Furiko imposes a time-to-live (TTL) on all Jobs after they are finished, so that the Kubernetes will not be too overloaded and controllers will be more responsive in general."),(0,i.kt)("p",null,"For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/garbage-collection"},"Garbage Collection"),"."))}b.isMDXComponent=!0}}]);