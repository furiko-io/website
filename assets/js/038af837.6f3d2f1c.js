"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6511],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5666:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={},l="Architecture",u={unversionedId:"development/architecture/index",id:"development/architecture/index",title:"Architecture",description:"This section will discuss the architecture of Furiko.",source:"@site/docs/development/architecture/index.md",sourceDirName:"development/architecture",slug:"/development/architecture/",permalink:"/docs/development/architecture/",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/development/architecture/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developer Guide",permalink:"/docs/development/"},next:{title:"ExecutionController",permalink:"/docs/development/architecture/execution-controller"}},s={},p=[{value:"Component Types",id:"component-types",level:2},{value:"ExecutionController",id:"executioncontroller",level:3},{value:"ExecutionWebhook",id:"executionwebhook",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"This section will discuss the architecture of Furiko."),(0,i.kt)("h2",{id:"component-types"},"Component Types"),(0,i.kt)("p",null,"Furiko's architecture consists of several types of components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Controller Managers"),": Controller manager that combines multiple controllers together."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Webhook Services"),": Kubernetes ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/"},"services")," that serve as ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"Admission Webhook")," servers.")),(0,i.kt)("h3",{id:"executioncontroller"},"ExecutionController"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/architecture/execution-controller"},"ExecutionController")," is responsible for managing and interacting with ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/concepts"},"Furiko Execution")," CRDs."),(0,i.kt)("h3",{id:"executionwebhook"},"ExecutionWebhook"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/architecture/execution-webhook"},"ExecutionWebhook")," is responsible for enforcing semantics and populating of several convenience fields for ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/concepts"},"Furiko Execution")," CRDs."))}m.isMDXComponent=!0}}]);