"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5955],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),l=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=l(e.components);return o.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,g=p["".concat(u,".").concat(d)]||p[d]||s[d]||i;return t?o.createElement(g,a(a({ref:n},f),{},{components:t})):o.createElement(g,a({ref:n},f))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8633:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:20,sidebar_label:"Webhook Flags"},u="Execution Webhook Flags",l={unversionedId:"reference/configuration/execution/webhook-flags",id:"version-v0.2/reference/configuration/execution/webhook-flags",title:"Execution Webhook Flags",description:"This page contains the full command-line flags for ExecutionWebhook.",source:"@site/versioned_docs/version-v0.2/reference/configuration/execution/webhook-flags.md",sourceDirName:"reference/configuration/execution",slug:"/reference/configuration/execution/webhook-flags",permalink:"/docs/reference/configuration/execution/webhook-flags",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/reference/configuration/execution/webhook-flags.md",tags:[],version:"v0.2",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Webhook Flags"},sidebar:"tutorialSidebar",previous:{title:"Controller Config",permalink:"/docs/reference/configuration/execution/controller-config"},next:{title:"Webhook Config",permalink:"/docs/reference/configuration/execution/webhook-config"}},f={},s=[{value:"Command-Line Flags",id:"command-line-flags",level:2}],p={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"execution-webhook-flags"},"Execution Webhook Flags"),(0,i.kt)("p",null,"This page contains the full command-line flags for ExecutionWebhook."),(0,i.kt)("h2",{id:"command-line-flags"},"Command-Line Flags"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--config=<path>"),"\n:   Defines the path to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/execution/webhook-config"},"bootstrap configuration file"),", either in JSON or YAML."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--teardown-timeout=2m"),"\n:   Defines the timeout to wait for downstream workers and webhooks to gracefully shut down, before forcibly quitting, when a termination signal (",(0,i.kt)("inlineCode",{parentName:"p"},"SIGINT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGTERM"),") is received."))}d.isMDXComponent=!0}}]);