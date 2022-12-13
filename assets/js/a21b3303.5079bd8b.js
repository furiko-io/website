"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2023],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=o.createContext({}),l=function(n){var e=o.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},s=function(n){var e=l(n.components);return o.createElement(u.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,u=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),p=l(t),m=i,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return t?o.createElement(d,r(r({ref:e},s),{},{components:t})):o.createElement(d,r({ref:e},s))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,r=new Array(a);r[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:i,r[1]=c;for(var l=2;l<a;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9297:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),r=["components"],c={sidebar_position:2},u="Dynamic Configuration",l={unversionedId:"operator-manual/configuration/dynamic",id:"version-v0.2.0/operator-manual/configuration/dynamic",title:"Dynamic Configuration",description:"This page introduces how to use Dynamic Configuration in Furiko.",source:"@site/versioned_docs/version-v0.2.0/operator-manual/configuration/dynamic.md",sourceDirName:"operator-manual/configuration",slug:"/operator-manual/configuration/dynamic",permalink:"/docs/v0.2.0/operator-manual/configuration/dynamic",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2.0/operator-manual/configuration/dynamic.md",tags:[],version:"v0.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Configuration",permalink:"/docs/v0.2.0/operator-manual/configuration/bootstrap"},next:{title:"Advanced Installation",permalink:"/docs/v0.2.0/operator-manual/advanced-installation"}},s={},f=[{value:"Overview",id:"overview",level:2},{value:"Data Source",id:"data-source",level:3},{value:"Config Data",id:"config-data",level:3},{value:"Configuration Options",id:"configuration-options",level:2}],p={toc:f};function m(n){var e=n.components,t=(0,i.Z)(n,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dynamic-configuration"},"Dynamic Configuration"),(0,a.kt)("p",null,"This page introduces how to use ",(0,a.kt)("strong",{parentName:"p"},"Dynamic Configuration")," in Furiko."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"As compared to ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.2.0/operator-manual/configuration/bootstrap"},(0,a.kt)("em",{parentName:"a"},"bootstrap configuration")),", dynamic configuration can be updated and will take effect immediately upon saving. This type of configuration typically contains knobs to tune the behavior of Furiko, so that any configuration does not require a full restart of any of Furiko services running in the cluster."),(0,a.kt)("h3",{id:"data-source"},"Data Source"),(0,a.kt)("p",null,"Dynamic configuration is typically stored in a ConfigMap, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-dynamic-config")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"furiko-system")," namespace. It can also be stored in a Secret instead if sensitive values need to be stored in a more secure fashion."),(0,a.kt)("p",null,"The controller and webhook services need to know how to load the dynamic configuration, and thus the references to the dynamic configuration is stored in the bootstrap configuration. If the dynamic configuration is not found, it will fallback to default values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{.yaml",metastring:'title="Example Bootstrap Config"}',title:'"Example',Bootstrap:!0,'Config"}':!0},"# The following bootstrap config describes to ExecutionController\n# how to load the dynamic config.\napiVersion: config.furiko.io/v1\nkind: ExecutionControllerConfig\ndynamicConfigs:\n  configMap:\n    namespace: furiko-system\n    name: execution-dynamic-config\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.2.0/operator-manual/configuration/bootstrap"},"Bootstrap Config")," for more details."),(0,a.kt)("h3",{id:"config-data"},"Config Data"),(0,a.kt)("p",null,"Dynamic configuration is split into several configuration files, which correspond to the keys in the ConfigMap itself. More information can be found in the ",(0,a.kt)("em",{parentName:"p"},"Dynamic Config")," pages under each component."),(0,a.kt)("p",null,"The following is an example of how a dynamic configuration ConfigMap may look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{.yaml",metastring:'title="Example Dynamic ConfigMap"}',title:'"Example',Dynamic:!0,'ConfigMap"}':!0},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: execution-dynamic-config\n  namespace: furiko-system\n\n# Each key in the ConfigMap corresponds to a single dynamic config name.\ndata:\n  # Data in the config must be a YAML or JSON-encoded string.\n  jobs: |\n    defaultTTLSecondsAfterFinished: 3600\n    defaultPendingTimeoutSeconds: 900\n  cron: |\n    cronFormat: "standard"\n    cronHashNames: true\n')),(0,a.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,a.kt)("p",null,"Documentation on Furiko dynamic configuration is split on a per-component basis."),(0,a.kt)("p",null,"The following lists the configuration documentation for each component."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.2.0/reference/configuration/execution/dynamic-config"},"Execution Dynamic Config"))))}m.isMDXComponent=!0}}]);