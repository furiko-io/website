"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9314],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(f,r(r({ref:n},d),{},{components:t})):o.createElement(f,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5077:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(7294),i="caption_y_hk",a=function(e){var n=e.src,t=e.imgStyle,a=e.children;return o.createElement("div",{className:"text--center"},o.createElement("img",{style:t,src:n}),o.createElement("p",{className:i},a))}},7595:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),r=t(5077),l=["components"],c={sidebar_position:10},s="Scheduling",d={unversionedId:"execution/jobconfig/scheduling",id:"version-v0.2.1/execution/jobconfig/scheduling",title:"Scheduling",description:"A JobConfig can be set to automatically create Jobs based on a cron schedule.",source:"@site/versioned_docs/version-v0.2.1/execution/jobconfig/scheduling.mdx",sourceDirName:"execution/jobconfig",slug:"/execution/jobconfig/scheduling",permalink:"/docs/execution/jobconfig/scheduling",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/versioned_docs/version-v0.2.1/execution/jobconfig/scheduling.mdx",tags:[],version:"v0.2.1",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"JobConfig",permalink:"/docs/execution/jobconfig/"},next:{title:"Cron Syntax",permalink:"/docs/execution/jobconfig/cron-syntax"}},u={},p=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"<code>cron</code>",id:"cron",level:3},{value:"<code>cron.expression</code>",id:"cronexpression",level:4},{value:"<code>cron.timezone</code>",id:"crontimezone",level:4},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>constraints</code>",id:"constraints",level:3},{value:"<code>notBefore</code>",id:"notbefore",level:4},{value:"<code>notAfter</code>",id:"notafter",level:4},{value:"Handling Concurrent Jobs",id:"handling-concurrent-jobs",level:2},{value:"Once-off Scheduling",id:"once-off-scheduling",level:2},{value:"Back-scheduling",id:"back-scheduling",level:2},{value:"Global Configuration",id:"global-configuration",level:3}],m={toc:p};function f(e){var n=e.components,c=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduling"},"Scheduling"),(0,a.kt)("p",null,"A JobConfig can be set to automatically create Jobs based on a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"cron schedule"),"."),(0,a.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: execution.furiko.io/v1alpha1\nkind: JobConfig\nspec:\n  schedule:\n    cron:\n      expression: 0 10 * * *\n      timezone: America/New_York\n    disabled: false\n    constraints:\n      notBefore: "2022-01-01T00:00:00-03:00"\n      notAfter: "2023-01-01T00:00:00-03:00"\n')),(0,a.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,a.kt)("h3",{id:"cron"},(0,a.kt)("inlineCode",{parentName:"h3"},"cron")),(0,a.kt)("h4",{id:"cronexpression"},(0,a.kt)("inlineCode",{parentName:"h4"},"cron.expression")),(0,a.kt)("p",null,"Defines a cron expression that defines when the JobConfig should be run."),(0,a.kt)("p",null,"Furiko uses an ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/cron-syntax"},"extended cron syntax")," that supports between 5 to 7 tokens, supporting up to second-level granularity of cron expressions. Additionally, Furiko's cron syntax also supports ",(0,a.kt)("inlineCode",{parentName:"p"},"H")," tokens for load balancing."),(0,a.kt)("p",null,"For more details and examples, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/cron-syntax"},"Cron Syntax"),"."),(0,a.kt)("h4",{id:"crontimezone"},(0,a.kt)("inlineCode",{parentName:"h4"},"cron.timezone")),(0,a.kt)("p",null,"Defines an optional value that defines the timezone that ",(0,a.kt)("inlineCode",{parentName:"p"},"cron.expression")," should be interpreted in."),(0,a.kt)("p",null,"For example, a cron schedule of ",(0,a.kt)("inlineCode",{parentName:"p"},"0 10 * * *")," with a timezone of ",(0,a.kt)("inlineCode",{parentName:"p"},"Asia/Singapore")," will be interpreted as running at 02:00:00 UTC every day."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"timezone")," must be one of the following values:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A valid ",(0,a.kt)("inlineCode",{parentName:"li"},"tz")," string (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"Asia/Singapore"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"America/New_York"),") in the ",(0,a.kt)("a",{parentName:"li",href:"https://www.iana.org/time-zones"},"Time Zone Database"),"."),(0,a.kt)("li",{parentName:"ol"},"A UTC offset with minutes (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"UTC-10:00"),")."),(0,a.kt)("li",{parentName:"ol"},"A GMT offset with minutes (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"GMT+05:30"),"). The meaning is the same as its UTC counterpart.")),(0,a.kt)("p",null,"If not specified, defaults to the controller's global default configuration value (via ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultTimezone"),"), which defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"UTC"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This field merely is used for parsing ",(0,a.kt)("inlineCode",{parentName:"p"},"cron.expression"),", and has nothing to do with ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/timezone")," inside the container (i.e. it will not set ",(0,a.kt)("inlineCode",{parentName:"p"},"$TZ")," automatically)."))),(0,a.kt)("h3",{id:"disabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,a.kt)("p",null,"Automatic scheduling can also be disabled or suspended, by specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled: true"),"."),(0,a.kt)("h3",{id:"constraints"},(0,a.kt)("inlineCode",{parentName:"h3"},"constraints")),(0,a.kt)("p",null,"Specify any constraints that should apply to the schedule."),(0,a.kt)("h4",{id:"notbefore"},(0,a.kt)("inlineCode",{parentName:"h4"},"notBefore")),(0,a.kt)("p",null,"If specified, automatic scheduling will not take place before this timestamp. Useful to specify a JobConfig that should only start scheduling only after a certain date in the future."),(0,a.kt)("h4",{id:"notafter"},(0,a.kt)("inlineCode",{parentName:"h4"},"notAfter")),(0,a.kt)("p",null,"If specified, automatic scheduling will not take place after this timestamp. Useful to specify a JobConfig that should stop scheduling after a certain date in the future."),(0,a.kt)("h2",{id:"handling-concurrent-jobs"},"Handling Concurrent Jobs"),(0,a.kt)("p",null,"Jobs may not be scheduled immediately (or forbidden entirely) based on the concurrency policy if there are concurrent executions of Jobs belonging to this JobConfig."),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/jobconfig/concurrency"},"Concurrency"),"."),(0,a.kt)("h2",{id:"once-off-scheduling"},"Once-off Scheduling"),(0,a.kt)("p",null,"A JobConfig can also be scheduled to run once-off in the future by creating a Job with a ",(0,a.kt)("inlineCode",{parentName:"p"},"startPolicy"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/job/adhoc-execution"},"Adhoc Execution")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/execution/job/start-policy"},"Start Policy")," for more details."),(0,a.kt)("h2",{id:"back-scheduling"},"Back-scheduling"),(0,a.kt)("p",null,"The CronController supports ",(0,a.kt)("em",{parentName:"p"},'"back-scheduling"')," Jobs to be created even after its schedule has passed but the controller had detected that it had failed to create one at that point in time."),(0,a.kt)("p",null,"Given a JobConfig with a ",(0,a.kt)("inlineCode",{parentName:"p"},"cron.expression")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"*/5 * * * *"),", the following diagram illustrates an example of what it looks like:"),(0,a.kt)(r.Z,{src:t(6999).Z,mdxType:"CaptionedImage"}),(0,a.kt)("p",null,"This effectively allows the controller to ",(0,a.kt)("strong",{parentName:"p"},"survive short periods of downtime")," with little repercussions. In practice, most jobs are able to tolerate a few minutes of delay, and it would be more costly to skip the job when it should have been scheduled."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This feature allows the administrator to safely upgrade Furiko at any time, without having to find a time to restart the process that would cause minimal disruption."))),(0,a.kt)("h3",{id:"global-configuration"},"Global Configuration"),(0,a.kt)("p",null,"The back-scheduling thresholds can be further tuned according to you or your organization's requirements."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/execution/dynamic-config#maxdowntimethresholdseconds"},(0,a.kt)("inlineCode",{parentName:"a"},"maxDowntimeThresholdSeconds")),": Defines the maximum downtime beyond which back-scheduling will not take place."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/execution/dynamic-config#maxmissedschedules"},(0,a.kt)("inlineCode",{parentName:"a"},"maxMissedSchedules")),": Defines the maximum number of missed schedules per JobConfig that the controller will attempt to back-schedule.")),(0,a.kt)("p",null,"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/execution/dynamic-config"},"Execution Dynamic Configuration")," reference."))}f.isMDXComponent=!0},6999:function(e,n,t){n.Z=t.p+"assets/images/backscheduling-afa09faffcb6117bdc1bea66fb3fa209.png"}}]);