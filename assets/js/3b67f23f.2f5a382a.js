"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7544],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9503:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={},s="ExecutionController",c={unversionedId:"development/architecture/execution-controller",id:"version-v0.2.1/development/architecture/execution-controller",title:"ExecutionController",description:"ExecutionController consists of several controllers responsible for managing Jobs and JobConfigs.",source:"@site/versioned_docs/version-v0.2.1/development/architecture/execution-controller.md",sourceDirName:"development/architecture",slug:"/development/architecture/execution-controller",permalink:"/docs/development/architecture/execution-controller",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2.1/development/architecture/execution-controller.md",tags:[],version:"v0.2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/development/architecture/"},next:{title:"ExecutionWebhook",permalink:"/docs/development/architecture/execution-webhook"}},u={},d=[{value:"CronController",id:"croncontroller",level:2},{value:"JobQueueController",id:"jobqueuecontroller",level:2},{value:"ActiveJobStore",id:"activejobstore",level:3},{value:"JobController",id:"jobcontroller",level:2},{value:"JobConfigController",id:"jobconfigcontroller",level:2}],p={toc:d};function h(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"executioncontroller"},"ExecutionController"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ExecutionController")," consists of several controllers responsible for managing ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/"},"Jobs")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/"},"JobConfigs"),"."),(0,i.kt)("p",null,"This page will attempt to discuss some of the inner workings of the individual controllers and webhooks, explaining how some guarantees are provided."),(0,i.kt)("p",null,"A large part of the design was inspired from a chapter of Google's SRE Book (",(0,i.kt)("a",{parentName:"p",href:"https://sre.google/sre-book/distributed-periodic-scheduling/"},"Distributed Periodic Scheduling with Cron"),") and other platforms including ",(0,i.kt)("a",{parentName:"p",href:"https://www.rundeck.com/"},"Rundeck"),"."),(0,i.kt)("h2",{id:"croncontroller"},"CronController"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"CronController")," is responsible for scheduling Jobs based on their JobConfig's schedule."),(0,i.kt)("p",null,"Every second, the CronController iterates through all JobConfigs, checking if any of them are due for scheduling. It uses an in-memory cache to store the next expected schedule time for all JobConfigs to avoid expensive CPU computation every second. If a JobConfig is due to be scheduled, additional checks like concurrency policy will be performed before actually creating the Job object."),(0,i.kt)("p",null,"The CronController uses deterministic Job name format: ",(0,i.kt)("inlineCode",{parentName:"p"},"<JOBCONFIG_NAME>.<UNIX_TIMESTAMP>")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"jobconfig-sample.1646586360"),"). This helps prevent duplicate Jobs from being started in the event of a retryable error, or if the controller was restarted in the middle of scheduling a JobConfig."),(0,i.kt)("p",null,"The CronController is also able to detect if any schedules were missed and ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/scheduling#back-scheduling"},"back-schedule them accordingly"),"."),(0,i.kt)("h2",{id:"jobqueuecontroller"},"JobQueueController"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"JobQueueController")," is responsible for starting Jobs that were created by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"status.StartTime"),' field. This process of "starting" a Job is so that we can:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure that Jobs do not violate their ",(0,i.kt)("a",{parentName:"li",href:"/docs/execution/jobconfig/concurrency"},"concurrency policy")," in any way, by maintaining and performing atomic operations to an in-memory ",(0,i.kt)("a",{parentName:"li",href:"#activejobstore"},"ActiveJobStore"),"."),(0,i.kt)("li",{parentName:"ol"},"Start any Jobs that were deferred to run in the future."),(0,i.kt)("li",{parentName:"ol"},"Ensure to start multiple Queued jobs in the order that they were created.")),(0,i.kt)("p",null,"The JobQueueController is able to parallelize to multiple workers (goroutines) and each goroutine works on a separate subset of Jobs partitioned by their JobConfig. Thanks to ",(0,i.kt)("inlineCode",{parentName:"p"},"workqueue"),", we can ensure that no two goroutines will be working on the same set of Jobs concurrently, and so we can process all Jobs in a linearizable fashion without violating any concurrency or ordering guarantees."),(0,i.kt)("h3",{id:"activejobstore"},"ActiveJobStore"),(0,i.kt)("p",null,"The JobQueueController interacts with an in-memory store called the ",(0,i.kt)("strong",{parentName:"p"},"ActiveJobStore"),", which is responsible for maintaining the source of truth of active job counts per JobConfig."),(0,i.kt)("p",null,"The ActiveJobStore acts as a global synchronizer for the entire cluster, and works in the following manner:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Only the leading ExecutionController has an in-memory ActiveJobStore, otherwise non-leaders should not attempt to populate the store; any past leader which lost its lease ",(0,i.kt)("strong",{parentName:"li"},"MUST")," give up control immediately."),(0,i.kt)("li",{parentName:"ol"},"Upon getting elected as leader, the contents of the ActiveJobStore is rehydrated from the current state of the cluster, by listing all current Jobs in kube-apiserver and counting by JobConfig."),(0,i.kt)("li",{parentName:"ol"},"The ActiveJobStore also has an internal informer to get notified when a Job transitions between active and inactive states, and update its counts internally.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The strong assumption here is that a Job ",(0,i.kt)("strong",{parentName:"li"},"does not")," transition from inactive back to active, which provides the concurrency guarantees explained below."))),(0,i.kt)("li",{parentName:"ol"},"Once store rehydration is completed, the other controllers are allowed to start."),(0,i.kt)("li",{parentName:"ol"},"Before starting a Job, the ActiveJobStore's counter must be incremented in a check-and-set fashion to avoid race conditions.")),(0,i.kt)("p",null,"Since informer events are received after the actual state update in kube-apiserver, there is a possibility of a delayed update from ",(0,i.kt)("inlineCode",{parentName:"p"},"active -> inactive"),", which prevents a new Job from being started despite previous Jobs already having been completed. On the other hand, there is no way for two Jobs to be started concurrently, because the ActiveJobStore ",(0,i.kt)("strong",{parentName:"p"},"expects")," that any transitions from ",(0,i.kt)("inlineCode",{parentName:"p"},"inactive -> active")," MUST be explicitly written to the store, rather than read via a reconcile. This is the guarantee that the ActiveJobStore provides."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before the introduction of the JobQueueController to sequentially process all Jobs for starting on a per-JobConfig basis, multiple threads could update the ActiveJobStore at the same time, resulting in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use"},"TOCTTOU race conditions"),". However, after JobQueueController was introduced, the likelihood of race conditions via non-atomic CAS operations falls to 0 and using check-and-set is actually no longer required, but remains as an additional safety guarantee."))),(0,i.kt)("h2",{id:"jobcontroller"},"JobController"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"JobController")," is responsible for reconciling Jobs after they have been started by the JobQueueController. It performs roughly the following actions in order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create any tasks that have yet to be created, or wait for a retry delay if set.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Perform ",(0,i.kt)("a",{parentName:"li",href:"/docs/execution/jobconfig/context-variables"},"context variable")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/execution/jobconfig/job-options"},"job option")," substitution as tasks are created."))),(0,i.kt)("li",{parentName:"ol"},"Check if any tasks have exceeded its pending timeout, and if so, kill those tasks."),(0,i.kt)("li",{parentName:"ol"},"Propagate the Job's kill timestamp, if any, to all its unfinished tasks."),(0,i.kt)("li",{parentName:"ol"},"Check if tasks are still alive beyond a timeout, and use API deletion to kill any unterminated tasks being killed."),(0,i.kt)("li",{parentName:"ol"},"Reconcile status from all tasks."),(0,i.kt)("li",{parentName:"ol"},"Delete the Job if it is already finished and has lived beyond its TTL."),(0,i.kt)("li",{parentName:"ol"},"Ensure all tasks are deleted, reconcile the final status, and remove the finalizer for deletion to proceed.")),(0,i.kt)("p",null,"Some key notes for this controller:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Jobs will only create tasks when they are started, otherwise they will perform no write actions. It is the responsibility of the JobQueueController to start only allowed Jobs in the order that they should be started in."),(0,i.kt)("li",{parentName:"ol"},"Tasks created by Jobs will follow a deterministic name format: ",(0,i.kt)("inlineCode",{parentName:"li"},"<JOB_NAME>.<RETRY_INDEX>")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"jobconfig-sample-c6k89.1"),'). If a task already exists with the given name, the controller assumes that its status is out-of-date and will "adopt" the task. This prevents duplicate tasks from being created.')),(0,i.kt)("h2",{id:"jobconfigcontroller"},"JobConfigController"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"JobConfigController")," is responsible for reconciling the status of JobConfigs from its downstream Jobs. It is a somewhat straightforward controller, performing only the following actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reconcile the list of queued and active Jobs."),(0,i.kt)("li",{parentName:"ol"},"Update the JobConfig's ",(0,i.kt)("inlineCode",{parentName:"li"},"LastScheduleTime")," which would be used for back-scheduling.")))}h.isMDXComponent=!0}}]);