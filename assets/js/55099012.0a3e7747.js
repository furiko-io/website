"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4534],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],u={},l="Configuration Guide",c={unversionedId:"operator-manual/configuration/index",id:"version-v0.2.0/operator-manual/configuration/index",title:"Configuration Guide",description:"Furiko allows extensive configuration of its behavior, while also defaulting to recommended, sane defaults out of the box.",source:"@site/versioned_docs/version-v0.2.0/operator-manual/configuration/index.md",sourceDirName:"operator-manual/configuration",slug:"/operator-manual/configuration/",permalink:"/docs/v0.2.0/operator-manual/configuration/",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2.0/operator-manual/configuration/index.md",tags:[],version:"v0.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operator Manual",permalink:"/docs/v0.2.0/category/operator-manual"},next:{title:"Bootstrap Configuration",permalink:"/docs/v0.2.0/operator-manual/configuration/bootstrap"}},s={},f=[{value:"Dynamic Configuration",id:"dynamic-configuration",level:2},{value:"Bootstrap Configuration",id:"bootstrap-configuration",level:2}],p={toc:f};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-guide"},"Configuration Guide"),(0,a.kt)("p",null,"Furiko allows extensive configuration of its behavior, while also defaulting to recommended, sane defaults out of the box."),(0,a.kt)("p",null,"Configuration of Furiko is split into two main categories: ",(0,a.kt)("strong",{parentName:"p"},"dynamic configuration")," and ",(0,a.kt)("strong",{parentName:"p"},"bootstrap configuration"),"."),(0,a.kt)("h2",{id:"dynamic-configuration"},"Dynamic Configuration"),(0,a.kt)("p",null,"The main method of configuring Furiko is via ",(0,a.kt)("strong",{parentName:"p"},"dynamic configuration"),". As the name suggests, configuration can be dynamically updated and will take effect immediately without requiring a restart of Furiko services."),(0,a.kt)("p",null,"If you used the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.2.0/getting-started/install#from-yaml"},"YAML installation method"),", a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMap")," has been created for you. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to open and edit the configuration as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n furiko-system edit cm execution-dynamic-config\n")),(0,a.kt)("p",null,"More details can be found in ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.2.0/operator-manual/configuration/dynamic"},"Dynamic Config"),"."),(0,a.kt)("h2",{id:"bootstrap-configuration"},"Bootstrap Configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bootstrap configuration")," refers to configuration fields that are specified when starting a component, such as a controller or a webhook server. This configuration typically contains information about port numbers to listen on, whether leader election is enabled, and so on. Modifying these configuration values require a restart of the component to take effect."),(0,a.kt)("p",null,"If you used the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.2.0/getting-started/install#from-yaml"},"YAML installation method"),", you should be able to configure the bootstrap configuration for ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-controller")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl -n furiko-system edit cm execution-controller-config\n")),(0,a.kt)("p",null,"Note that the container has to be restarted whenever the bootstrap configuration is updated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n furiko-system rollout restart deployment execution-controller\n")),(0,a.kt)("p",null,"The bootstrap configuration is almost identical for almost all components. More details can be found in ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.2.0/operator-manual/configuration/bootstrap"},"Bootstrap Config"),"."))}d.isMDXComponent=!0}}]);