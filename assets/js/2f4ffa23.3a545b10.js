"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2061],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={sidebar_position:4},s="Advanced Installation",u={unversionedId:"getting-started/advanced-installation",id:"version-v0.2/getting-started/advanced-installation",title:"Advanced Installation",description:"This guide explains how to perform a full manual installation of Furiko, and also serves as a full explainer for the recommended YAML method of installation.",source:"@site/versioned_docs/version-v0.2/getting-started/advanced-installation.md",sourceDirName:"getting-started",slug:"/getting-started/advanced-installation",permalink:"/docs/getting-started/advanced-installation",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2/getting-started/advanced-installation.md",tags:[],version:"v0.2",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuring Furiko",permalink:"/docs/getting-started/configuration"},next:{title:"Execution",permalink:"/docs/category/execution"}},c={},p=[{value:"Manually Installing Furiko",id:"manually-installing-furiko",level:2},{value:"Create Namespace",id:"create-namespace",level:3},{value:"Install CRDs",id:"install-crds",level:3},{value:"Setup RBAC",id:"setup-rbac",level:3},{value:"Build Custom Container Images (optional)",id:"build-custom-container-images-optional",level:3},{value:"Setup Deployments",id:"setup-deployments",level:3},{value:"Bootstrap Configuration",id:"bootstrap-configuration",level:4},{value:"Container Configuration",id:"container-configuration",level:4},{value:"Setup Services",id:"setup-services",level:3},{value:"Provisioning Webhook Certificates",id:"provisioning-webhook-certificates",level:3},{value:"Setup Webhook Configuration",id:"setup-webhook-configuration",level:3},{value:"Additional Setup",id:"additional-setup",level:2},{value:"Prometheus Metrics",id:"prometheus-metrics",level:3},{value:"Customize Dynamic Configuration",id:"customize-dynamic-configuration",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-installation"},"Advanced Installation"),(0,a.kt)("p",null,"This guide explains how to perform a full manual installation of Furiko, and also serves as a full explainer for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/install#from-yaml"},"recommended YAML method of installation"),"."),(0,a.kt)("p",null,"The following walkthrough assumes a sufficient understanding of various Kubernetes concepts and knowledge to administer a Kubernetes cluster. In addition, it also assumes that you have understood the ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/architecture/"},"architecture")," of Furiko and its various components."),(0,a.kt)("h2",{id:"manually-installing-furiko"},"Manually Installing Furiko"),(0,a.kt)("p",null,"To start, first download ",(0,a.kt)("inlineCode",{parentName:"p"},"furiko-execution.yaml")," from the relevant version on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/furiko/releases"},"GitHub Releases")," page."),(0,a.kt)("p",null,"There are two services that will need to be installed as part of Furiko Execution:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/architecture/execution-controller"},(0,a.kt)("inlineCode",{parentName:"a"},"execution-controller")),": Responsible for managing and interacting with Execution CRDs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/architecture/execution-webhook"},(0,a.kt)("inlineCode",{parentName:"a"},"execution-webhooks")),": Responsible for enforcing data mutation and validation of Execution CRDs")),(0,a.kt)("h3",{id:"create-namespace"},"Create Namespace"),(0,a.kt)("p",null,"Create a namespace for Furiko's control plane components. In the YAML, this is ",(0,a.kt)("inlineCode",{parentName:"p"},"furiko-system"),", which is meant to be shared across all Furiko components."),(0,a.kt)("h3",{id:"install-crds"},"Install CRDs"),(0,a.kt)("p",null,"Copy and install the ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomResourceDefinition")," resources specified in the YAML."),(0,a.kt)("p",null,"The following CRDs will be needed by Furiko Execution:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jobconfigs.execution.furiko.io")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jobs.execution.furiko.io"))),(0,a.kt)("h3",{id:"setup-rbac"},"Setup RBAC"),(0,a.kt)("p",null,"We need to set up RBAC for the ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-controller")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook")," services."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the correct ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterRole")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Role")," resources. The RBAC manifests in the YAML can serve as a guide for the minimum permissions needed."),(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"ServiceAccount"),"(s) for the two components, and bind the RBAC with ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterRoleBinding")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"RoleBinding")," respectively.")),(0,a.kt)("p",null,"Refer to the YAML for the full list of minimum required permissions."),(0,a.kt)("h3",{id:"build-custom-container-images-optional"},"Build Custom Container Images (optional)"),(0,a.kt)("p",null,"This step can be skipped if you are alright with using the images released on Docker Hub."),(0,a.kt)("p",null,"If you wish to customize the container image, you can download the binaries directly from the GitHub Releases page to be bundled in your own Docker image."),(0,a.kt)("h3",{id:"setup-deployments"},"Setup Deployments"),(0,a.kt)("p",null,"We can set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-controller")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook")," now. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," manifests in the YAML can serve as a guide for reference."),(0,a.kt)("h4",{id:"bootstrap-configuration"},"Bootstrap Configuration"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-controller")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook")," requires ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/bootstrap"},"Bootstrap Configuration")," loaded from a YAML or JSON file at startup, using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/execution/controller-flags#execution-controller-flags"},(0,a.kt)("inlineCode",{parentName:"a"},"--config"))," command-line flag. For example, this can be loaded via a ",(0,a.kt)("inlineCode",{parentName:"p"},"configMap")," volume mount. Refer to the following configuration pages for each of the above binaries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/execution/controller-config"},(0,a.kt)("inlineCode",{parentName:"a"},"execution-controller")," Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/execution/webhook-config"},(0,a.kt)("inlineCode",{parentName:"a"},"execution-webhook")," Configuration"))),(0,a.kt)("h4",{id:"container-configuration"},"Container Configuration"),(0,a.kt)("p",null,"Use the custom container images from the previous step if you built your own images. You can customize other configuration for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment"),", including the ",(0,a.kt)("inlineCode",{parentName:"p"},"command"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"securityContext"),". By default, images on Docker Hub are ",(0,a.kt)("a",{parentName:"p",href:"https://rootlesscontaine.rs/"},"rootless")," and thus ",(0,a.kt)("inlineCode",{parentName:"p"},"runAsNonRoot")," is enabled. If using a custom Docker image you may need to disable it."),(0,a.kt)("p",null,"The liveness and readiness probes default to the HTTP server at port 8080 for both ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-controller")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook"),". To customize the port and paths, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/bootstrap#http"},"Bootstrap Configuration"),"."),(0,a.kt)("p",null,"You can also increase or update the resource limits for the containers if needed."),(0,a.kt)("h3",{id:"setup-services"},"Setup Services"),(0,a.kt)("p",null,"Once created, you can create the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," resources as well. Only ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook")," requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),", since it will be used as an ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"admission webhook server")," that extends the Kubernetes API server."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The YAML method uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterIP")," service type, which requires a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Container Network Interface (CNI)")," network add-on to be installed in your cluster."),(0,a.kt)("p",{parentName:"div"},"It may be possible to run ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),", which could potentially route traffic from ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-controller")," over WAN, incurring high latency and greater network instability in general. Another method may be to use ",(0,a.kt)("inlineCode",{parentName:"p"},"hostNetwork")," and run ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-controller")," on the same machines as ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," itself."),(0,a.kt)("p",{parentName:"div"},"Both of the alternative methods mentioned are not officially supported by Furiko."))),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook")," listens on port 8443 (can be changed via bootstrap configuration). The server listens on HTTPS, which is required in order to be used by the Kubernetes API server for webhooks. Refer to the following section on further HTTPS setup."),(0,a.kt)("h3",{id:"provisioning-webhook-certificates"},"Provisioning Webhook Certificates"),(0,a.kt)("p",null,"Traffic between the Kubernetes API server and admission webhook servers must be using HTTPS, so we will need to provision TLS certificates that will be served by ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook"),"."),(0,a.kt)("p",null,"In the YAML installation method, a Job is used to automatically provision a self-signed certificate (valid for 100 years), store it in a Secret, and patch the webhook configurations with the certificate's public key. This functionality is provided by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"jet/kube-webhook-certgen"),", and is the recommended approach taken by Furiko since no external add-ons are required."),(0,a.kt)("p",null,"Alternative methods include using a static TLS certificate, or utilizing cluster add-ons such as ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/"},(0,a.kt)("inlineCode",{parentName:"a"},"cert-manager")),"."),(0,a.kt)("h3",{id:"setup-webhook-configuration"},"Setup Webhook Configuration"),(0,a.kt)("p",null,"We can now create webhook configuration resources for ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook"),". Both ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration")," resources will need to be installed. Refer to the YAML for an example."),(0,a.kt)("p",null,"The webhook server expects to receive webhook requests at well-defined paths, that include the canonical name of the CustomResourceDefinition. For example, to validate a ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/job/"},"Job"),", the following path is used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/validating/jobs.execution.furiko.io\n")),(0,a.kt)("p",null,"On the other hand, to mutate a ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/"},"JobConfig"),", the following path is used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/mutating/jobconfigs.execution.furiko.io\n")),(0,a.kt)("p",null,"Refer to the official Kubernetes documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#contacting-the-webhook"},"admission webhooks")," to manually configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"caBundle")," of the webhook configuration if needed."),(0,a.kt)("h2",{id:"additional-setup"},"Additional Setup"),(0,a.kt)("h3",{id:"prometheus-metrics"},"Prometheus Metrics"),(0,a.kt)("p",null,"All components, including ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-controller")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"execution-webhook"),", expose Prometheus metrics that provide insight into the status of the service."),(0,a.kt)("p",null,"In the YAML installation method, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/brancz/kube-rbac-proxy"},(0,a.kt)("inlineCode",{parentName:"a"},"kube-rbac-proxy"))," is used as a sidecar to restrict access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint for enhanced security. An additional ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," is also created to expose the metrics using ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterIP"),"."),(0,a.kt)("p",null,"More information on the setup can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/bootstrap#http"},"bootstrap configuration"),"."),(0,a.kt)("h3",{id:"customize-dynamic-configuration"},"Customize Dynamic Configuration"),(0,a.kt)("p",null,"Furiko also offers a ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/dynamic"},"dynamic configuration")," mechanism to configure components without requiring a restart. This is typically loaded from a ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMap"),", such that any changes to the configuration can take effect immediately."),(0,a.kt)("p",null,"More information can be found on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/dynamic"},"dynamic configuration")," section of the documentation."))}m.isMDXComponent=!0}}]);