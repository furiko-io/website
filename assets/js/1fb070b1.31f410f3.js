"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2426],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(k,a(a({ref:t},u),{},{components:n})):o.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],l={sidebar_position:60},s="Killing Jobs",c={unversionedId:"execution/job/killing-jobs",id:"version-v0.2/execution/job/killing-jobs",title:"Killing Jobs",description:"A Job can be killed after it is started, either manually, through a timeout, or other means (such as parallel completion).",source:"@site/versioned_docs/version-v0.2/execution/job/killing-jobs.md",sourceDirName:"execution/job",slug:"/execution/job/killing-jobs",permalink:"/docs/execution/job/killing-jobs",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/execution/job/killing-jobs.md",tags:[],version:"v0.2",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Timeouts and Retries",permalink:"/docs/execution/job/timeout-retries"},next:{title:"Force Deletion",permalink:"/docs/execution/job/force-deletion"}},u={},p=[{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Kill Timestamp",id:"kill-timestamp",level:2},{value:"Automatic Termination",id:"automatic-termination",level:2},{value:"Termination Process",id:"termination-process",level:2},{value:"Task Deletion",id:"task-deletion",level:3},{value:"Force Deletion",id:"force-deletion",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"killing-jobs"},"Killing Jobs"),(0,r.kt)("p",null,"A Job can be killed after it is started, either manually, through a ",(0,r.kt)("a",{parentName:"p",href:"/docs/execution/job/timeout-retries"},"timeout"),", or other means (such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/execution/job/parallelism#completionstrategy"},"parallel completion"),")."),(0,r.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,r.kt)("p",null,"The easiest way to kill a Job execution is to use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/cli"},(0,r.kt)("inlineCode",{parentName:"a"},"furiko")," CLI tool"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"furiko kill <job-name>\n")),(0,r.kt)("h2",{id:"kill-timestamp"},"Kill Timestamp"),(0,r.kt)("p",null,"Each Job has a ",(0,r.kt)("inlineCode",{parentName:"p"},"killTimestamp")," in its spec, which specifies the timestamp before the JobController tries to kill all of its active tasks."),(0,r.kt)("p",null,"To kill a Job explicitly, set ",(0,r.kt)("inlineCode",{parentName:"p"},"killTimestamp")," to the current time or earlier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: execution.furiko.io/v1alpha1\nkind: Job\nspec:\n  killTimestamp: "2021-01-01T00:00:00Z"\n')),(0,r.kt)("p",null,"You can also set a time in the future to kill the Job by setting a future time. The JobController will only start killing active tasks once killTimestamp is passed."),(0,r.kt)("p",null,"Setting a kill timestamp does not imply that the Job will be terminated by time that the kill timestamp has been reached. It simply means that"),(0,r.kt)("h2",{id:"automatic-termination"},"Automatic Termination"),(0,r.kt)("p",null,"A Job's task may be automatically terminated from several sources, including but not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/execution/job/timeout-retries#pendingtimeoutseconds"},"Task pending timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/execution/job/parallelism#completionstrategy"},"Completion of other parallel tasks"))),(0,r.kt)("h2",{id:"termination-process"},"Termination Process"),(0,r.kt)("p",null,"The JobController uses ",(0,r.kt)("strong",{parentName:"p"},"deletion")," to kill tasks, and optionally reaches for ",(0,r.kt)("strong",{parentName:"p"},"force deletion")," as a last resort if the task is still not deleted after a timeout."),(0,r.kt)("h3",{id:"task-deletion"},"Task Deletion"),(0,r.kt)("p",null,"The JobController uses ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-deletion"},"normal resource deletion")," to kill a task."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"pod")," task executor is used, normal graceful termination will apply and container termination lifecycle hooks will be triggered. To adjust the grace period, use ",(0,r.kt)("inlineCode",{parentName:"p"},"terminationGracePeriodSeconds"),". For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination"},"Termination of Pods")," on the Kubernetes documentation."),(0,r.kt)("h3",{id:"force-deletion"},"Force Deletion"),(0,r.kt)("p",null,"When a Pod is running on a Node that is no longer available, above methods to kill the Job will have no effect until the Node comes back up. As a last resort, the controller may opt to use ",(0,r.kt)("strong",{parentName:"p"},"force deletion")," to kill the task instead, which does not block any forward progress of the JobConfig."),(0,r.kt)("p",null,"For more details and implications of using such a termination method, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/execution/job/force-deletion"},"Force Deletion")," documentation."))}d.isMDXComponent=!0}}]);