"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5358],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),h=u(t),d=r,p=h["".concat(s,".").concat(d)]||h[d]||l[d]||i;return t?o.createElement(p,a(a({ref:n},f),{},{components:t})):o.createElement(p,a({ref:n},f))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9391:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:21,sidebar_label:"Webhook Config"},s="Execution Webhook Config",u={unversionedId:"reference/configuration/execution/webhook-config",id:"version-v0.2/reference/configuration/execution/webhook-config",title:"Execution Webhook Config",description:"This page contains the full bootstrap configuration for ExecutionWebhook.",source:"@site/versioned_docs/version-v0.2/reference/configuration/execution/webhook-config.md",sourceDirName:"reference/configuration/execution",slug:"/reference/configuration/execution/webhook-config",permalink:"/docs/reference/configuration/execution/webhook-config",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/reference/configuration/execution/webhook-config.md",tags:[],version:"v0.2",sidebarPosition:21,frontMatter:{sidebar_position:21,sidebar_label:"Webhook Config"},sidebar:"tutorialSidebar",previous:{title:"Webhook Flags",permalink:"/docs/reference/configuration/execution/webhook-flags"},next:{title:"Dynamic Config",permalink:"/docs/reference/configuration/execution/dynamic-config"}},f={},l=[],h={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"execution-webhook-config"},"Execution Webhook Config"),(0,i.kt)("p",null,"This page contains the full ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/bootstrap"},"bootstrap configuration")," for ExecutionWebhook."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Here we define the bootstrap config for execution-webhook.\n# These values are used for bootstrapping of the webhook server at startup,\n# so changing any values here require a restart of execution-webhook in order\n# to take effect.\napiVersion: config.furiko.io/v1\nkind: ExecutionWebhookConfig\n\n# defaultResync controls the default resync duration.\ndefaultResync: 10m\n\n# Webhook server configuration.\nwebhooks:\n  # bindAddress is the TCP address that the controller manager should bind to for\n  # serving webhook requests over HTTPS.\n  bindAddress: ":9443"\n\n  # tlsCertFile is the path to the X.509 certificate to use for serving webhook\n  # requests over HTTPS.\n  tlsCertFile: "/etc/webhook/certs/cert"\n\n  # tlsPrivateKeyFile is the path to the private key which corresponds to\n  # TLSCertFile, to use for serving webhook requests over HTTPS.\n  tlsPrivateKeyFile: "/etc/webhook/certs/key"\n\n# dynamicConfigs defines how to load dynamic configs.\ndynamicConfigs:\n  # configMap defines how the dynamic ConfigMap is loaded.\n  configMap:\n    namespace: furiko-system\n    name: execution-dynamic-config\n\n  # secret defines how the dynamic Secret is loaded.\n  secret:\n    namespace: furiko-system\n    name: execution-dynamic-config\n\n# HTTP handler configuration.\nhttp:\n  # bindAddress is the TCP address that the controller should bind to for serving\n  # HTTP requests.\n  bindAddress: ":8080"\n\n  # metrics controls metrics serving.\n  metrics:\n    # enabled is whether the controller manager enables serving Prometheus metrics.\n    enabled: true\n\n  # health controls health status serving.\n  health:\n    # enabled is whether the controller manager enables serving health probes.\n    enabled: true\n\n    # readinessProbePath is the path to the readiness probe.\n    readinessProbePath: "/readyz"\n\n    # livenessProbePath is the path to the liveness probe.\n    livenessProbePath: "/healthz"\n')))}d.isMDXComponent=!0}}]);