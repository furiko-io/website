"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5594],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3794:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],u={},l="Contribution Guide",s={unversionedId:"contributing/overview",id:"contributing/overview",title:"Contribution Guide",description:"We're so excited that you want to contribute to Furiko! We will briefly outline the different ways you can contribute to the project.",source:"@site/docs/contributing/overview.md",sourceDirName:"contributing",slug:"/contributing/overview",permalink:"/docs/contributing/overview",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/contributing/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/category/contributing"},next:{title:"Roadmap",permalink:"/docs/contributing/roadmap"}},c={},p=[{value:"Roadmap",id:"roadmap",level:2},{value:"Core Kubernetes Operators",id:"core-kubernetes-operators",level:2},{value:"Command-Line Tools",id:"command-line-tools",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Testing",id:"testing",level:2},{value:"Other Ways to Contribute",id:"other-ways-to-contribute",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribution-guide"},"Contribution Guide"),(0,i.kt)("p",null,"We're so excited that you want to contribute to Furiko! We will briefly outline the different ways you can contribute to the project."),(0,i.kt)("h2",{id:"roadmap"},"Roadmap"),(0,i.kt)("p",null,"Before contributing, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/roadmap"},"Roadmap")," which covers planned features and developments for Furiko."),(0,i.kt)("h2",{id:"core-kubernetes-operators"},"Core Kubernetes Operators"),(0,i.kt)("p",null,"We welcome all code contributions to the core Furiko Kubernetes operators. This includes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/execution/concepts"},(0,i.kt)("strong",{parentName:"a"},"Execution")),": Configuration and execution of scheduled and adhoc jobs."),(0,i.kt)("li",{parentName:"ul"},"Federation (WIP): Add-on for managing jobs across multiple Kubernetes clusters."),(0,i.kt)("li",{parentName:"ul"},"Telemetry (WIP): Add-on for notifications, monitoring and telemetry of jobs and executions.")),(0,i.kt)("p",null,"The code for the Kubernetes operators lives in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/furiko"},"https://github.com/furiko-io/furiko"),". For more information, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/furiko/blob/main/CONTRIBUTING.md"},"Contribution Guide"),"."),(0,i.kt)("p",null,"We also welcome design proposals, feature requests and ideas for the scope of Furiko. Please head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/furiko/issues"},"issue tracker on GitHub")," and open an issue to discuss your idea there."),(0,i.kt)("h2",{id:"command-line-tools"},"Command-Line Tools"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/cli"},(0,i.kt)("inlineCode",{parentName:"a"},"furiko")," CLI tool")," is also located in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/furiko"},"main Furiko repository"),". For more information, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/furiko/blob/main/CONTRIBUTING.md"},"Contribution Guide"),"."),(0,i.kt)("h2",{id:"user-interface"},"User Interface"),(0,i.kt)("p",null,"We currently don't have a user interface for Furiko. If you have experience in building performant and complex web applications, we would love to hear from you."),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"You can also contribute to this very site! If you find that any documentation is lacking or unclear, or if you simply found a typo, we are more than happe to accept contributions big or small."),(0,i.kt)("p",null,"The code for this website lives in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/website"},"https://github.com/furiko-io/website"),". For more information, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/website/blob/main/CONTRIBUTING.md"},"Contribution Guide"),"."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"No project can succeed without the confidence of tests, including both automated tests and the hard work of QA testers."),(0,i.kt)("p",null,"Some areas that we would love contributions in include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setting up test infrastructure"),(0,i.kt)("li",{parentName:"ul"},"Designing end-to-end tests for controllers and webhooks"),(0,i.kt)("li",{parentName:"ul"},"Increasing code coverage of unit tests"),(0,i.kt)("li",{parentName:"ul"},"Stress/scalability testing"),(0,i.kt)("li",{parentName:"ul"},"Security testing and fuzzing")),(0,i.kt)("h2",{id:"other-ways-to-contribute"},"Other Ways to Contribute"),(0,i.kt)("p",null,"There are tons of other ways to contribute to the project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Report a bug"),": You can report a bug via the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/furiko-io/furiko/issues"},"issue tracker on GitHub"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Request a feature"),": You can also request features via the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/furiko-io/furiko/issues"},"issue tracker on GitHub"),".")))}d.isMDXComponent=!0}}]);