"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4474],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:30},l="Start Policy",s={unversionedId:"execution/job/start-policy",id:"execution/job/start-policy",title:"Start Policy",description:"A Job may have an optional Start Policy, which defines certain preconditions that must be met before the Job can be started.",source:"@site/docs/execution/job/start-policy.md",sourceDirName:"execution/job",slug:"/execution/job/start-policy",permalink:"/docs/next/execution/job/start-policy",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/execution/job/start-policy.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Adhoc Execution",permalink:"/docs/next/execution/job/adhoc-execution"},next:{title:"Parallelism",permalink:"/docs/next/execution/job/parallelism"}},p={},u=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"<code>concurrencyPolicy</code>",id:"concurrencypolicy",level:3},{value:"<code>startAfter</code>",id:"startafter",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"start-policy"},"Start Policy"),(0,i.kt)("p",null,"A Job may have an optional ",(0,i.kt)("strong",{parentName:"p"},"Start Policy"),", which defines certain preconditions that must be met before the Job can be started."),(0,i.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: execution.furiko.io/v1alpha1\nkind: Job\nspec:\n  startPolicy:\n    concurrencyPolicy: Enqueue\n    startAfter: 2022-03-06T00:27:00+08:00\n")),(0,i.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("h3",{id:"concurrencypolicy"},(0,i.kt)("inlineCode",{parentName:"h3"},"concurrencyPolicy")),(0,i.kt)("p",null,"Specifies the behavior when there are other concurrent Jobs for the same JobConfig."),(0,i.kt)("p",null,"The set of allowed values are identical to those specified in a JobConfig's ",(0,i.kt)("inlineCode",{parentName:"p"},"concurrency.policy")," (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/execution/jobconfig/concurrency#policy"},"here"),")."),(0,i.kt)("p",null,"If not specified, it will be inherited from the JobConfig's ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/execution/jobconfig/concurrency#policy"},(0,i.kt)("inlineCode",{parentName:"a"},"concurrency.policy"))," value."),(0,i.kt)("h3",{id:"startafter"},(0,i.kt)("inlineCode",{parentName:"h3"},"startAfter")),(0,i.kt)("p",null,"Specifies an optional timestamp that the Job can only be started after. This allows you to schedule a Job to be only run at a later point in time."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The behavior when the Job starts will still be subject to the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy"),", which is inherited from the JobConfig's ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/execution/jobconfig/concurrency"},(0,i.kt)("inlineCode",{parentName:"a"},"concurrency"))," value if not specified. This means that if ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbid")," is specified, the Job may be queued but eventually fail with ",(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionError"),"."),(0,i.kt)("p",{parentName:"div"},"In many cases, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Enqueue")," policy is usually desired when using ",(0,i.kt)("inlineCode",{parentName:"p"},"startAfter"),"."))))}f.isMDXComponent=!0}}]);