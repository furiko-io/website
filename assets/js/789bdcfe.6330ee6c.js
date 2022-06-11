"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9364],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(b,i(i({ref:t},l),{},{components:n})):o.createElement(b,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1,title:"Concepts"},s="Execution Concepts",u={unversionedId:"execution/concepts",id:"version-v0.2/execution/concepts",title:"Concepts",description:"Furiko Execution is the heart of the Furiko platform, and consists of components to configure scheduled jobs and trigger ad-hoc executions.",source:"@site/versioned_docs/version-v0.2/execution/concepts.md",sourceDirName:"execution",slug:"/execution/concepts",permalink:"/docs/execution/concepts",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/execution/concepts.md",tags:[],version:"v0.2",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Concepts"},sidebar:"tutorialSidebar",previous:{title:"Execution",permalink:"/docs/category/execution"},next:{title:"JobConfig",permalink:"/docs/execution/jobconfig/"}},l={},p=[{value:"JobConfig",id:"jobconfig",level:2},{value:"Job",id:"job",level:2},{value:"Task",id:"task",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"execution-concepts"},"Execution Concepts"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Furiko Execution")," is the heart of the Furiko platform, and consists of components to configure scheduled jobs and trigger ad-hoc executions."),(0,a.kt)("h2",{id:"jobconfig"},"JobConfig"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/execution/jobconfig/"},"JobConfig"))," describes an automation job to be run. It creates and controls ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," children objects."),(0,a.kt)("p",null,"A JobConfig can be automatically scheduled to be create Jobs based on a cron schedule, or executed on an ad-hoc basis. You can also parameterize a JobConfig to take in different variables which will be substituted into the job template at runtime."),(0,a.kt)("h2",{id:"job"},"Job"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/execution/job/"},"Job"))," represents a single job execution, analogous to a ",(0,a.kt)("inlineCode",{parentName:"p"},"batch/v1")," ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/job/"},"Job"),". As the name suggests, a Job's parent is a JobConfig."),(0,a.kt)("p",null,"A Job's spec is local to the particular job execution. Modifying the JobConfig after the Job has been created will not affect previously created Jobs."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"A Job can also be created independently of a JobConfig controller, although this is not recommended. Doing so will disable certain features and guarantees that are provided by a parent JobConfig controller."))),(0,a.kt)("h2",{id:"task"},"Task"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Task")," represents a Job's actual manifestation of task execution. A Job may create one or more Tasks, which can represent both parallel tasks being executed (see Parallel Execution) or individual retries (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/job/timeout-retries"},"Timeouts and Retries"),")."),(0,a.kt)("p",null,"A Task is an abstract representation of a workload, such as a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/"},"Pod"),". Currently, the only supported ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/job/task-executor"},"task executor")," is a Pod, but more task executors are planned in the future."))}f.isMDXComponent=!0}}]);