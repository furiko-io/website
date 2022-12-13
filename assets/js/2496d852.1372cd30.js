"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8909],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1367:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:10},s="Task Executors",c={unversionedId:"execution/job/task-executor",id:"version-v0.2/execution/job/task-executor",title:"Task Executors",description:"Furiko supports an extensible task executor interface, which allows tasks to be created, managed and reconciled in the same way regardless of the actual backing object.",source:"@site/versioned_docs/version-v0.2/execution/job/task-executor.md",sourceDirName:"execution/job",slug:"/execution/job/task-executor",permalink:"/docs/execution/job/task-executor",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/execution/job/task-executor.md",tags:[],version:"v0.2",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Job",permalink:"/docs/execution/job/"},next:{title:"Adhoc Execution",permalink:"/docs/execution/job/adhoc-execution"}},u={},p=[{value:"Task Index",id:"task-index",level:2},{value:"Task Executor List",id:"task-executor-list",level:2},{value:"<code>pod</code>",id:"pod",level:3},{value:"Virtual Pods",id:"virtual-pods",level:4},{value:"<code>argoWorkflow</code>",id:"argoworkflow",level:3}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"task-executors"},"Task Executors"),(0,o.kt)("p",null,"Furiko supports an extensible task executor interface, which allows tasks to be created, managed and reconciled in the same way regardless of the actual backing object."),(0,o.kt)("h2",{id:"task-index"},"Task Index"),(0,o.kt)("p",null,"A Job creates one or more tasks during its lifecycle. Each task corresponds to a single ",(0,o.kt)("strong",{parentName:"p"},"parallel")," and ",(0,o.kt)("strong",{parentName:"p"},"retry index")," for the Job:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parallel Index"),": If the Job has N ",(0,o.kt)("a",{parentName:"li",href:"/docs/execution/job/parallelism"},"parallel tasks"),", then there are N parallel indexes. Otherwise, there is 1 parallel index (i.e. it is not parallel)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Retry Index"),": If the Job specifies ",(0,o.kt)("inlineCode",{parentName:"li"},"maxAttempts")," of M, then there are ",(0,o.kt)("em",{parentName:"li"},"up to")," M retry indexes.")),(0,o.kt)("p",null,"Therefore, each Task corresponds to a single ",(0,o.kt)("inlineCode",{parentName:"p"},"(N, M)")," combination of the above indexes. As an example, for a Job with a parallelism factor of 3 and ",(0,o.kt)("inlineCode",{parentName:"p"},"maxAttempts")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", up to 6 tasks will be created for the Job (assuming that each attempt had failed)."),(0,o.kt)("h2",{id:"task-executor-list"},"Task Executor List"),(0,o.kt)("p",null,"Currently the only task executor available in Furiko is ",(0,o.kt)("inlineCode",{parentName:"p"},"pod"),", but more task executors are planned in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/roadmap"},"Roadmap"),"."),(0,o.kt)("h3",{id:"pod"},(0,o.kt)("inlineCode",{parentName:"h3"},"pod")),(0,o.kt)("p",null,"Each task will be created as a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/"},"Pod"),". On a typical Kubernetes cluster, this translates to one or more containers that run to completion."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example Pod TaskTemplate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"taskTemplate:\n  pod:\n    metadata:\n      annotations:\n        app.kubernetes.io/name: jobconfig-sample-pod\n    spec:\n      containers:\n        - args:\n            - echo\n            - Hello world!\n          image: alpine\n          name: job-container\n          resources:\n            limits:\n              cpu: 100m\n              memory: 64Mi\n"))),(0,o.kt)("h4",{id:"virtual-pods"},"Virtual Pods"),(0,o.kt)("p",null,"Using tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/virtual-kubelet/virtual-kubelet"},"Virtual Kubelet"),", it may be possible for the Pods to manifest as objects other than a CRI container in Kubernetes."),(0,o.kt)("p",null,"If Virtual Kubelet is provisioned in the cluster, some possible use cases include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Running Pods on serverless compute platforms like ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/virtual-kubelet/virtual-kubelet#aws-fargate-provider"},"AWS Fargate")),(0,o.kt)("li",{parentName:"ol"},"Extending to multi-cluster with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/virtual-kubelet/virtual-kubelet#admiralty-multi-cluster-scheduler"},"Admiralty"))),(0,o.kt)("p",null,"The usage and support of Virtual Kubelet is outside the scope of the Furiko project."),(0,o.kt)("h3",{id:"argoworkflow"},(0,o.kt)("inlineCode",{parentName:"h3"},"argoWorkflow")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently planned in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/roadmap"},"Roadmap"),"."))),(0,o.kt)("p",null,"Each task will be created as an ",(0,o.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/fields/#workflow"},"Argo ",(0,o.kt)("inlineCode",{parentName:"a"},"Workflow")," object"),". Requires ",(0,o.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/"},"Argo Workflows")," to be installed in the cluster (not included with Furiko)."))}m.isMDXComponent=!0}}]);