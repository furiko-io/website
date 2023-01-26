"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5567],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2492:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="Parameterization Using Job Options",u={unversionedId:"getting-started/tutorials/job-options/index",id:"getting-started/tutorials/job-options/index",title:"Parameterization Using Job Options",description:"The following tutorial walks you through how to parameterize a JobConfig using Job Options.",source:"@site/docs/getting-started/tutorials/job-options/index.mdx",sourceDirName:"getting-started/tutorials/job-options",slug:"/getting-started/tutorials/job-options/",permalink:"/docs/getting-started/tutorials/job-options/",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/getting-started/tutorials/job-options/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Executing Your First Job",permalink:"/docs/getting-started/tutorials/executing-jobs/"},next:{title:"Using the CLI",permalink:"/docs/getting-started/tutorials/using-the-cli/"}},c={},p=[{value:"Example: Refunding customer payments",id:"example-refunding-customer-payments",level:2},{value:"Create the JobConfig",id:"create-the-jobconfig",level:3},{value:"Understanding the <code>option</code> configuration",id:"understanding-the-option-configuration",level:3},{value:"Understanding the <code>taskTemplate</code>",id:"understanding-the-tasktemplate",level:3},{value:"Executing an ad-hoc job",id:"executing-an-ad-hoc-job",level:3}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parameterization-using-job-options"},"Parameterization Using Job Options"),(0,i.kt)("p",null,"The following tutorial walks you through how to parameterize a JobConfig using ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/job-options"},"Job Options"),"."),(0,i.kt)("h2",{id:"example-refunding-customer-payments"},"Example: Refunding customer payments"),(0,i.kt)("p",null,"In this tutorial, we will use a simple example scenario to run a Job to execute some payment refunds to our customers."),(0,i.kt)("p",null,"Since this is a toy example, the JobConfig doesn't actually perform any financial transactions, but it will serve as a good example to illustrate how Job Options can be used."),(0,i.kt)("h3",{id:"create-the-jobconfig"},"Create the JobConfig"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/furiko/blob/main/examples/jobconfigs/31-job-options--adhoc-refund-customer-payments.yaml"},"example JobConfig")," from GitHub in a single one-liner:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://raw.githubusercontent.com/furiko-io/furiko/main/examples/jobconfigs/31-job-options--adhoc-refund-customer-payments.yaml\n")),(0,i.kt)("p",null,"This will install a JobConfig named ",(0,i.kt)("inlineCode",{parentName:"p"},"adhoc-refund-customer-payments")," to the cluster."),(0,i.kt)("h3",{id:"understanding-the-option-configuration"},"Understanding the ",(0,i.kt)("inlineCode",{parentName:"h3"},"option")," configuration"),(0,i.kt)("p",null,"If you installed the above example JobConfig, you can inspect the JobConfig to see that there are 3 options defined:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  option:\n    options:\n      - name: customer_id\n        type: String\n        required: true\n\n      - name: refund_type\n        type: Select\n        required: true\n        select:\n          default: "immediate"\n          values:\n            - immediate\n            - best-effort\n\n      - name: dry_run\n        type: Bool\n        bool:\n          default: false\n          format: Custom\n          trueVal: "y"\n          falseVal: "n"\n')),(0,i.kt)("p",null,"Each of these options have their own unique ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", which corresponds to a unique key for substitution in the task template."),(0,i.kt)("p",null,"In our above example scenario, this corresponds to three different parameters:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Customer ID"),": Specifies the unique ID of the customer that we want to execute a refund for."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Refund Type"),": Specifies whether this is an immediate or best-effort refund. An ",(0,i.kt)("em",{parentName:"li"},"immediate")," refund will be blocking, and may take several seconds or minutes to complete. On the other hand, a ",(0,i.kt)("em",{parentName:"li"},"best-effort")," refund will be asynchronous, and we will simply add the refund request to a queue to be processed separately."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Dry Run"),": Specifies whether this is a dry-run, which allows the user to simulate running the job without actually performing any financial transactions.")),(0,i.kt)("p",null,"As such, we can see that a single Job will process a single customer at a time, and the refund type will determine whether this Job will be blocking and take several minutes, or terminate almost immediately."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the case of sensitive transactions (such as this example), it may be wise to prevent multiple Jobs from executing at the same time for this JobConfig. As such, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbid")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/concurrency"},"concurrency policy")," is used to ensure that payments do not have race conditions resulting in unnecessary financial losses."))),(0,i.kt)("h3",{id:"understanding-the-tasktemplate"},"Understanding the ",(0,i.kt)("inlineCode",{parentName:"h3"},"taskTemplate")),(0,i.kt)("p",null,"When a Job is scheduled or executed on an ad-hoc basis, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/context-variables"},"context variables")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"taskTemplate")," will be substituted with the final rendered option values."),(0,i.kt)("p",null,"If you installed the above example JobConfig, you can inspect the JobConfig's ",(0,i.kt)("inlineCode",{parentName:"p"},"taskTemplate")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'taskTemplate:\n  pod:\n    spec:\n      containers:\n        - name: container\n          image: bash\n          command:\n            - bash\n            - "-c"\n            - |\n              # Display what we are about to do.\n              echo "[*] Will refund for customer \'${option.customer_id}\' using ${option.refund_type} refund method."\n\n              # Exit if only dry run.\n              if [[ "${option.dry_run}" == "y" ]]; then\n                echo "[!] Dry run mode specified, exiting."\n                exit 0\n              fi\n\n              # Simulates some actual work to be done.\n              case "${option.refund_type}" in\n                immediate)\n                  echo "[*] Processing immediate refund for customer \'${option.customer_id}\' now..."\n                  sleep 10\n                  echo "[!] Succesfully processed refund."\n                  ;;\n\n                best-effort)\n                  sleep 1\n                  echo "[!] Successfully enqueued best-effort refund for customer \'${option.customer_id}\', it will be processed within 3 business days."\n                  ;;\n              esac\n\n              echo "[*] Refund process complete."\n')),(0,i.kt)("p",null,"The above ",(0,i.kt)("inlineCode",{parentName:"p"},"taskTemplate")," is just an example to simulate the sequence of events in a real job that processes payment refunds. From this, we can see that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"All job options can be substituted safely, even inside of a shell script."),(0,i.kt)("li",{parentName:"ol"},"Job option substitutions can take place even in other fields, and is not limited to ",(0,i.kt)("inlineCode",{parentName:"li"},"command")," like above.")),(0,i.kt)("h3",{id:"executing-an-ad-hoc-job"},"Executing an ad-hoc job"),(0,i.kt)("p",null,"To execute the ad-hoc job, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"furiko run adhoc-refund-customer-payments\n")),(0,i.kt)("p",null,"The job options will be prompted via an interactive shell, auto-filling any default values as necessary:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1232).Z,width:"1200",height:"600"})))}m.isMDXComponent=!0},1232:function(e,t,n){t.Z=n.p+"assets/images/01-job-options-run-6ad82b24f33b4aa638aa2221d662c777.gif"}}]);