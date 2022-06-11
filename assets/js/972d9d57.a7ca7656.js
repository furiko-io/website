"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1,title:"Introduction",slug:"/"},u="Furiko",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Furiko is a cloud-native, enterprise-level cron and adhoc job platform for Kubernetes.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/docs/features"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Why Choose Furiko",id:"why-choose-furiko",level:2},{value:"License",id:"license",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"furiko"},"Furiko"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Furiko")," is a cloud-native, enterprise-level cron and adhoc job platform for Kubernetes."),(0,i.kt)("div",{className:"text--center"},(0,i.kt)("img",{style:{background:"white",width:500,margin:"0 auto",padding:30},src:"/img/color_horizontal.png"}),(0,i.kt)("p",{style:{fontStyle:"italic"}},'The word "furiko" (\u632f\u308a\u5b50) means "pendulum" in Japanese.')),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Furiko is a Kubernetes-native operator for managing, scheduling and executing scheduled and adhoc jobs and workflows. It aims to be a general-purpose job platform that supports a diverse range of use cases, including cron jobs, parallel batch processing, workflow automation, etc."),(0,i.kt)("p",null,"Furiko is built from the beginning to support enterprise-level use cases and running self-hosted in a private Kubernetes cluster, supporting users across a large organization."),(0,i.kt)("p",null,"Some use cases that are perfect for Furiko include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cron-based scheduling massive amounts of periodic jobs per day in a large organization"),(0,i.kt)("li",{parentName:"ul"},"Scheduling some jobs to run once at a later time with some parameters"),(0,i.kt)("li",{parentName:"ul"},"Starting multiple jobs to execute one after another, once the previous job has finished"),(0,i.kt)("li",{parentName:"ul"},"Running multiple parallel, indexed tasks within a single job execution"),(0,i.kt)("li",{parentName:"ul"},"Event-driven, offline/asynchronous job processing"),(0,i.kt)("li",{parentName:"ul"},"Building a platform to automate business operations via form-based inputs (with Furiko as the job engine)")),(0,i.kt)("h2",{id:"why-choose-furiko"},"Why Choose Furiko"),(0,i.kt)("p",null,"There are several other workflow platforms available for Kubernetes today. Furiko specializes in ",(0,i.kt)("strong",{parentName:"p"},"time-based scheduling"),", taking an emphasis on ",(0,i.kt)("strong",{parentName:"p"},"correctness and scale"),", providing an out-of-the-box solution to run massive amounts of job executions every day without missing a beat."),(0,i.kt)("p",null,"Initially developed as an internal project in Shopee, Furiko prides itself on being optimized to support ",(0,i.kt)("strong",{parentName:"p"},"millions of job executions per day")," across multiple clusters internally, while being expressive enough to support a multitude of business use cases. At the same time, Furiko offers ",(0,i.kt)("strong",{parentName:"p"},"high consistency and reliability")," in the face of failure or restarts to prevent double runs and missed runs."),(0,i.kt)("p",null,"Furiko is designed to be used both as a standalone platform, or as a framework for more complex platforms that build on top of Furiko, such as IT automation or customer service portals."),(0,i.kt)("p",null,"More details can be found on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/features"},"Features")," page."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Furiko is currently in ",(0,i.kt)("strong",{parentName:"p"},"ALPHA")," and APIs may change at any time."))),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"Furiko is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.txt"},"Apache License, Version 2.0"),"."),(0,i.kt)("p",null,"Logo is designed by Duan Weiwei, and is distributed under ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/"},"CC-BY 4.0"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": Although started within the company, Furiko is ",(0,i.kt)("strong",{parentName:"p"},"not an official Shopee project or product"),"."))}m.isMDXComponent=!0}}]);