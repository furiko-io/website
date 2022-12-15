"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[257],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(7462),o=n(3366),r=n(7294),i=n(3905),c=function(e){var t=e.offset,n=e.truncate,a=(new Date).getTime();void 0!==t&&(a+=1e3*t),void 0!==n&&(a=Math.floor(a/(1e3*n))*n*1e3);var o,i=(o=new Date(a),String(o.getUTCFullYear()).padStart(4,"0")+"-"+String(o.getUTCMonth()+1).padStart(2,"0")+"-"+String(o.getUTCDate()).padStart(2,"0")+"T"+String(o.getUTCHours()).padStart(2,"0")+":"+String(o.getUTCMinutes()).padStart(2,"0")+":"+String(o.getUTCSeconds()).padStart(2,"0")+"Z");return r.createElement(r.Fragment,null,i)},l=["components"],u={},s="Executing Your First Job",d={unversionedId:"getting-started/tutorials/executing-jobs",id:"getting-started/tutorials/executing-jobs",title:"Executing Your First Job",description:"The following tutorial walks you through how to create and execute an example JobConfig, as well as scheduling future Jobs.",source:"@site/docs/getting-started/tutorials/executing-jobs.mdx",sourceDirName:"getting-started/tutorials",slug:"/getting-started/tutorials/executing-jobs",permalink:"/docs/getting-started/tutorials/executing-jobs",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/getting-started/tutorials/executing-jobs.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing the CLI",permalink:"/docs/getting-started/cli"},next:{title:"Using the CLI",permalink:"/docs/getting-started/tutorials/using-the-cli"}},p={},m=[{value:"Create a JobConfig",id:"create-a-jobconfig",level:2},{value:"Executing the Job",id:"executing-the-job",level:2},{value:"Enable automatic scheduling",id:"enable-automatic-scheduling",level:2},{value:"Scheduling future executions",id:"scheduling-future-executions",level:2}],g={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"executing-your-first-job"},"Executing Your First Job"),(0,i.kt)("p",null,"The following tutorial walks you through how to create and execute an example JobConfig, as well as scheduling future Jobs."),(0,i.kt)("h2",{id:"create-a-jobconfig"},"Create a JobConfig"),(0,i.kt)("p",null,"First, create an example ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/"},"JobConfig"),". Copy the following and save it into a local file, editing it as necessary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=example-jobconfig.yaml",title:"example-jobconfig.yaml"},'apiVersion: execution.furiko.io/v1alpha1\nkind: JobConfig\nmetadata:\n  name: example-jobconfig\nspec:\n  # Defines how the JobConfig shall be executed automatically on schedule.\n  schedule:\n    cron:\n      expression: "*/5 * * * *"\n    disabled: true\n\n  # Prevents multiple executions of the same JobConfig.\n  concurrency:\n    policy: Forbid\n\n  # Defines how to create the Job.\n  template:\n    spec:\n      taskTemplate:\n        pod:\n          spec:\n            containers:\n              - name: container\n                image: alpine\n                command:\n                  - echo\n                  - "Hello World"\n')),(0,i.kt)("p",null,"Next, apply the YAML to the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f example-jobconfig.yaml\n")),(0,i.kt)("h2",{id:"executing-the-job"},"Executing the Job"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/cli"},(0,i.kt)("inlineCode",{parentName:"a"},"furiko")," command-line tool"),", execute the Job immediately as an ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/adhoc-execution"},"ad-hoc execution"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ furiko run example-jobconfig\nJob default/example-jobconfig-klptm created\n")),(0,i.kt)("p",null,"You can view more details about the Job that was executed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ furiko get job example-jobconfig-klptm\nJOB INFO\nName:                example-jobconfig-klptm\nNamespace:           default\nType:                Adhoc\nCreated:             Wed, 14 Dec 2022 01:15:58 +08:00 (22 seconds ago)\nJob Config:          forbid-example\nConcurrency Policy:  Forbid\n\nJOB STATUS\nPhase:         Succeeded\nStarted:       Wed, 14 Dec 2022 01:15:58 +08:00 (22 seconds ago)\nTasks:         0 Running / 1 Succeeded\nRun Duration:  About a second\nResult:        Success\n\nLATEST TASK\nName:      example-jobconfig-klptm-gezdqo-0\nCreated:   Wed, 14 Dec 2022 01:15:58 +08:00 (22 seconds ago)\nState:     Terminated\nStarted:   Wed, 14 Dec 2022 01:16:00 +08:00 (20 seconds ago)\nFinished:  Wed, 14 Dec 2022 01:16:00 +08:00 (20 seconds ago)\n")),(0,i.kt)("h2",{id:"enable-automatic-scheduling"},"Enable automatic scheduling"),(0,i.kt)("p",null,"The above example JobConfig is in ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadyDisabled")," state initially. Enable the JobConfig's schedule:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ furiko enable example-jobconfig\nSuccessfully enabled automatic scheduling for job config default/example-jobconfig\n")),(0,i.kt)("p",null,"The above ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/cron-syntax"},"cron expression")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"*/5 * * * *"),", which means to run every 5 minutes. Wait for a while, and you should be able to see that the Job was automatically scheduled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ furiko list job --for=example-jobconfig\nNAME                           PHASE       START TIME   RUN TIME   FINISH TIME\nexample-jobconfig-1670952000   Succeeded   16s                     16s\n")),(0,i.kt)("h2",{id:"scheduling-future-executions"},"Scheduling future executions"),(0,i.kt)("p",null,"We can also ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/job/start-policy"},"schedule a future execution")," for the JobConfig:"),(0,i.kt)("code",null,"$ furiko run example-jobconfig --at ",(0,i.kt)(c,{offset:300,truncate:300,mdxType:"Time"}),(0,i.kt)("br",null),"Job default/example-jobconfig-5wpnv created"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The timestamp above is dynamically generated to be at most 5 minutes in the future - copy the code block and try it out!"))),(0,i.kt)("p",null,"This queues the Job to be executed at a later time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ furiko list job --for=example-jobconfig\nNAME                           PHASE       START TIME   RUN TIME   FINISH TIME\nexample-jobconfig-5wpnv        Queued\n")),(0,i.kt)("p",null,"We can view the status of the Job before it has started running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ furiko get job example-jobconfig-5wpnv\nJOB INFO\nName:                example-jobconfig-5wpnv\nNamespace:           default\nType:                Adhoc\nCreated:             Wed, 14 Dec 2022 01:26:23 +08:00 (9 seconds ago)\nJob Config:          example-jobconfig\nStart After:         Wed, 14 Dec 2022 01:30:00 +08:00 (in 3 minutes)\nConcurrency Policy:  Enqueue\n\nJOB STATUS\nPhase:    Queued\nReason:   NotYetDue\nMessage:  Job is queued to start no earlier than 2022-12-13 17:30:00 +0000 UTC\n")),(0,i.kt)("p",null,"In the above example, notice that the job is scheduled to be started exactly at ",(0,i.kt)("inlineCode",{parentName:"p"},"01:30:00"),". By right, the cron schedule should have also scheduled another Job at ",(0,i.kt)("inlineCode",{parentName:"p"},"01:30:00"),". However, since we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbid")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/concurrency"},"concurrency policy"),", this prevents multiple concurrent Jobs from being executed at the same time. We can verify that there was indeed no other execution that started at the same time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ furiko list job --for=example-jobconfig\nNAME                           PHASE       START TIME   RUN TIME   FINISH TIME\nexample-jobconfig-1670952000   Succeeded   11m                     11m\nexample-jobconfig-1670952300   Succeeded   6m                      6m\nexample-jobconfig-5wpnv        Succeeded   46s                     44s\n")))}f.isMDXComponent=!0}}]);