"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3637],{3905:function(e,n,r){r.d(n,{Zo:function(){return f},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},f=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return r?t.createElement(m,a(a({ref:n},f),{},{components:r})):t.createElement(m,a({ref:n},f))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9870:function(e,n,r){r.r(n),r.d(n,{assets:function(){return f},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:10,sidebar_label:"Controller Flags"},l="Execution Controller Flags",u={unversionedId:"reference/configuration/execution/controller-flags",id:"version-v0.2/reference/configuration/execution/controller-flags",title:"Execution Controller Flags",description:"This page contains the full command-line flags for ExecutionController.",source:"@site/versioned_docs/version-v0.2/reference/configuration/execution/controller-flags.md",sourceDirName:"reference/configuration/execution",slug:"/reference/configuration/execution/controller-flags",permalink:"/docs/reference/configuration/execution/controller-flags",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/reference/configuration/execution/controller-flags.md",tags:[],version:"v0.2",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Controller Flags"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/reference/configuration/execution/overview"},next:{title:"Controller Config",permalink:"/docs/reference/configuration/execution/controller-config"}},f={},s=[{value:"Command-Line Flags",id:"command-line-flags",level:2}],p={toc:s};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"execution-controller-flags"},"Execution Controller Flags"),(0,i.kt)("p",null,"This page contains the full command-line flags for ExecutionController."),(0,i.kt)("h2",{id:"command-line-flags"},"Command-Line Flags"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--config=<path>"),"\n:   Defines the path to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/execution/controller-config"},"bootstrap configuration file"),", either in JSON or YAML."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--teardown-timeout=2m"),"\n:   Defines the timeout to wait for downstream workers and controllers to gracefully shut down, before forcibly quitting, when a termination signal (",(0,i.kt)("inlineCode",{parentName:"p"},"SIGINT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGTERM"),") is received."))}d.isMDXComponent=!0}}]);