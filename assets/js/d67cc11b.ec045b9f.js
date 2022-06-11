"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8163],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5194:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:50},l="Timeouts and Retries",d={unversionedId:"execution/job/timeout-retries",id:"execution/job/timeout-retries",title:"Timeouts and Retries",description:"Furiko provides several mechanisms to impose timeouts and retrying of failed Jobs.",source:"@site/docs/execution/job/timeout-retries.md",sourceDirName:"execution/job",slug:"/execution/job/timeout-retries",permalink:"/docs/next/execution/job/timeout-retries",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/execution/job/timeout-retries.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Parallelism",permalink:"/docs/next/execution/job/parallelism"},next:{title:"Killing Jobs",permalink:"/docs/next/execution/job/killing-jobs"}},c={},m=[{value:"Task-level Timeouts",id:"task-level-timeouts",level:2},{value:"<code>pendingTimeoutSeconds</code>",id:"pendingtimeoutseconds",level:3},{value:"<code>runningTimeoutSeconds</code>",id:"runningtimeoutseconds",level:3},{value:"<code>taskTemplate.pod.spec.activeDeadlineSeconds</code>",id:"tasktemplatepodspecactivedeadlineseconds",level:3},{value:"Job-level Timeouts",id:"job-level-timeouts",level:2},{value:"<code>jobTimeoutSeconds</code>",id:"jobtimeoutseconds",level:3},{value:"Retries",id:"retries",level:2},{value:"<code>maxAttempts</code>",id:"maxattempts",level:3},{value:"<code>retryDelaySeconds</code>",id:"retrydelayseconds",level:3},{value:"<code>restartPolicy</code>",id:"restartpolicy",level:3}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"timeouts-and-retries"},"Timeouts and Retries"),(0,o.kt)("p",null,"Furiko provides several mechanisms to impose timeouts and retrying of failed Jobs."),(0,o.kt)("h2",{id:"task-level-timeouts"},"Task-level Timeouts"),(0,o.kt)("p",null,"The following timeouts apply to ",(0,o.kt)("strong",{parentName:"p"},"individual tasks")," in a Job."),(0,o.kt)("h3",{id:"pendingtimeoutseconds"},(0,o.kt)("inlineCode",{parentName:"h3"},"pendingTimeoutSeconds")),(0,o.kt)("p",null,"Specifies the maximum duration that a single task can be pending for. This includes the time taken for scheduling, image pull and container creation."),(0,o.kt)("p",null,"If not specified, defaults to the global controller ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultTaskPendingTimeoutSeconds")," value."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the Pod cannot pull the container image, it will remain in ",(0,o.kt)("inlineCode",{parentName:"p"},"ImagePullBackOff")," indefinitely. A pending timeout helps to stop these Jobs eventually."))),(0,o.kt)("h3",{id:"runningtimeoutseconds"},(0,o.kt)("inlineCode",{parentName:"h3"},"runningTimeoutSeconds")),(0,o.kt)("p",null,"Specifies the maximum duration that a single task can be running for. The time starts once the task starts running."),(0,o.kt)("p",null,"If not specified, defaults to no timeout."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Alternatively, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/timeout.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"timeout(1)"))," available on Unix systems, which provides several additional mechanisms to control the exit code and signals being sent on timeout."),(0,o.kt)("p",{parentName:"div"},"Another way is to also use timeouts in your application directly, and read the value from a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/execution/jobconfig/job-options"},"Job Option"),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This timeout is not yet implemented."))),(0,o.kt)("h3",{id:"tasktemplatepodspecactivedeadlineseconds"},(0,o.kt)("inlineCode",{parentName:"h3"},"taskTemplate.pod.spec.activeDeadlineSeconds")),(0,o.kt)("p",null,"You can also set the Pod's ",(0,o.kt)("inlineCode",{parentName:"p"},"activeDeadlineSeconds")," directly, which is the duration relative to the Pod's ",(0,o.kt)("inlineCode",{parentName:"p"},"startTime")," before Kubelet will actively try to kill associated containers."),(0,o.kt)("h2",{id:"job-level-timeouts"},"Job-level Timeouts"),(0,o.kt)("p",null,"The following timeouts apply to ",(0,o.kt)("strong",{parentName:"p"},"the entire Job")," across all tasks."),(0,o.kt)("h3",{id:"jobtimeoutseconds"},(0,o.kt)("inlineCode",{parentName:"h3"},"jobTimeoutSeconds")),(0,o.kt)("p",null,"Specifies a global timeout for the entire Job across all tasks. The time starts when the Job is started, and is inclusive of the retry delay and time spent waiting for the tasks to start running."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This timeout is not yet implemented."))),(0,o.kt)("h2",{id:"retries"},"Retries"),(0,o.kt)("p",null,"Furiko retries failed Jobs by creating a new Task."),(0,o.kt)("p",null,"If a Node is misconfigured or has some host-level issue, using ",(0,o.kt)("inlineCode",{parentName:"p"},"restartPolicy: OnFailure")," to recreate the container would not be sufficient to avoid spurious Job failures which may only be resolved by running the Task on a different Node. As such, Furiko recommends using Job-level retries, which recreates an entirely new Pod."),(0,o.kt)("h3",{id:"maxattempts"},(0,o.kt)("inlineCode",{parentName:"h3"},"maxAttempts")),(0,o.kt)("p",null,"Specifies the maximum number of task attempts."),(0,o.kt)("p",null,"If the job is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/execution/job/parallelism"},"parallel job"),", this corresponds to the maximum number of attempts for each parallel index."),(0,o.kt)("p",null,"If not specified, defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," (i.e. no retries). Must be a positive integer."),(0,o.kt)("h3",{id:"retrydelayseconds"},(0,o.kt)("inlineCode",{parentName:"h3"},"retryDelaySeconds")),(0,o.kt)("p",null,"Specifies the duration between the last failed task and creation of the next task."),(0,o.kt)("p",null,"If the job is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/execution/job/parallelism"},"parallel job"),", the retry delay is from the time of the last failed task with the same parallel index. That is, if there are two parallel tasks - index ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and index ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," - which failed at ",(0,o.kt)("inlineCode",{parentName:"p"},"t=0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"t=15"),", with ",(0,o.kt)("inlineCode",{parentName:"p"},"retryDelaySeconds")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"30"),", the controller will only create the next attempts at ",(0,o.kt)("inlineCode",{parentName:"p"},"t=30")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"t=45")," respectively."),(0,o.kt)("p",null,"If not specified, it means there is no delay between creating task attempts."),(0,o.kt)("h3",{id:"restartpolicy"},(0,o.kt)("inlineCode",{parentName:"h3"},"restartPolicy")),(0,o.kt)("p",null,"If the Job uses both ",(0,o.kt)("inlineCode",{parentName:"p"},"restartPolicy: OnFailure")," in conjunction with Furiko Job-level tries, Jobs may take a longer time before finally terminating in failure."),(0,o.kt)("p",null,"If a Job is in a ",(0,o.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff"),', it will be deemed to be still "pending", and if it remains/transitions to this state even after its ',(0,o.kt)("a",{parentName:"p",href:"#pendingtimeoutseconds"},"pending timeout"),", it will be killed. The next Task will be only created after ",(0,o.kt)("inlineCode",{parentName:"p"},"retryDelaySeconds"),", which results in the creation of a brand-new Pod."),(0,o.kt)("p",null,"This means that the total time taken before terminating in failure would be roughly around ",(0,o.kt)("inlineCode",{parentName:"p"},"pendingTimeoutSeconds * maxAttempts + retryDelaySeconds * (maxAttempts - 1)"),", rather than simply the sum of all tasks' running durations."))}u.isMDXComponent=!0}}]);