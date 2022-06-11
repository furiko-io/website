"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4206],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:11},p="Cron Syntax",d={unversionedId:"execution/jobconfig/cron-syntax",id:"execution/jobconfig/cron-syntax",title:"Cron Syntax",description:"Furiko supports a cron syntax that extends the standard cron rules, borrowing ideas from various cron implementations found in the wild. This page acts as the reference document for Furiko's cron syntax.",source:"@site/docs/execution/jobconfig/cron-syntax.md",sourceDirName:"execution/jobconfig",slug:"/execution/jobconfig/cron-syntax",permalink:"/docs/next/execution/jobconfig/cron-syntax",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/execution/jobconfig/cron-syntax.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Scheduling",permalink:"/docs/next/execution/jobconfig/scheduling"},next:{title:"Concurrency",permalink:"/docs/next/execution/jobconfig/concurrency"}},s={},m=[{value:"Syntax Reference",id:"syntax-reference",level:2},{value:"Fields",id:"fields",level:3},{value:"Multiple Values",id:"multiple-values",level:3},{value:"Intervals",id:"intervals",level:3},{value:"Day of Week",id:"day-of-week",level:3},{value:"Hash-based Load Balancing",id:"hash-based-load-balancing",level:3},{value:"Configuration",id:"configuration",level:2}],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cron-syntax"},"Cron Syntax"),(0,i.kt)("p",null,"Furiko supports a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"cron")," syntax that extends the standard cron rules, borrowing ideas from various cron implementations found in the wild. This page acts as the reference document for Furiko's cron syntax."),(0,i.kt)("p",null,"Internally, Furiko uses a fork of the ",(0,i.kt)("inlineCode",{parentName:"p"},"cronexpr")," library, found here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko/cronexpr"},"https://github.com/furiko/cronexpr")),(0,i.kt)("h2",{id:"syntax-reference"},"Syntax Reference"),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("p",null,"Each cron expression consists of several tokens delimited by spaces. The following diagram explains the fields for each token."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 second (0 - 59); optional\n# \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n# \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n# \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the month (1 - 31)\n# \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n# \u2502 \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the week (0 - 6 / SAT - SUN)\n# \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 year (1970 - 2099); optional\n# \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502\n# * * * * * * *\n")),(0,i.kt)("p",null,"Furiko supports ",(0,i.kt)("em",{parentName:"p"},"variable-length")," cron expressions, so that it accepts expressions between 5-7 tokens long. The following table explains what each tokens corresponds to, depending on the number of tokens in the expression."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Length"),(0,i.kt)("th",{parentName:"tr",align:null},"Seconds"),(0,i.kt)("th",{parentName:"tr",align:null},"Minutes"),(0,i.kt)("th",{parentName:"tr",align:null},"Hours"),(0,i.kt)("th",{parentName:"tr",align:null},"Day of Month"),(0,i.kt)("th",{parentName:"tr",align:null},"Month"),(0,i.kt)("th",{parentName:"tr",align:null},"Day of Week"),(0,i.kt)("th",{parentName:"tr",align:null},"Year"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5 tokens"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1st"),(0,i.kt)("td",{parentName:"tr",align:null},"2nd"),(0,i.kt)("td",{parentName:"tr",align:null},"3rd"),(0,i.kt)("td",{parentName:"tr",align:null},"4th"),(0,i.kt)("td",{parentName:"tr",align:null},"5th"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6 tokens"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1st"),(0,i.kt)("td",{parentName:"tr",align:null},"2nd"),(0,i.kt)("td",{parentName:"tr",align:null},"3rd"),(0,i.kt)("td",{parentName:"tr",align:null},"4th"),(0,i.kt)("td",{parentName:"tr",align:null},"5th"),(0,i.kt)("td",{parentName:"tr",align:null},"6th")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7 tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"1st"),(0,i.kt)("td",{parentName:"tr",align:null},"2nd"),(0,i.kt)("td",{parentName:"tr",align:null},"3rd"),(0,i.kt)("td",{parentName:"tr",align:null},"4th"),(0,i.kt)("td",{parentName:"tr",align:null},"5th"),(0,i.kt)("td",{parentName:"tr",align:null},"6th"),(0,i.kt)("td",{parentName:"tr",align:null},"7th")))),(0,i.kt)("h3",{id:"multiple-values"},"Multiple Values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},","),": Specify multiple values, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"MON,WED,FRI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-"),": Specify range of values, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"5-8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*"),": Wildcard value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?"),": Wildcard value")),(0,i.kt)("p",null,"For simplicity, both ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," are treated as equivalent. In most cases, you can just use ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,i.kt)("h3",{id:"intervals"},"Intervals"),(0,i.kt)("p",null,"In EBNF notation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ebnf"},'interval_field = [offset] , "/" , interval ;\noffset = start , ["-" , end] ;\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offset"),": Start counting from this value. If not specified, defaults to 0.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Can also optionally specify end of range (inclusive)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interval"),": The size of the interval between values.")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/15"),": Every 15 units starting from 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0/15"),": Every 15 units starting from 0, i.e. 0, 15, 30, 45 (for minutes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3/15"),": Every 15 units starting from 3, i.e. 3, 18, 33, 48 (for minutes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0-15/3"),": Every 3 units starting from 0 ending at 15 (inclusive), i.e. 0, 3, 6, 9, 12, 15."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*/15"),": Equivalent to ",(0,i.kt)("inlineCode",{parentName:"li"},"0/15"),".")),(0,i.kt)("h3",{id:"day-of-week"},"Day of Week"),(0,i.kt)("p",null,"Furiko supports both standard and ",(0,i.kt)("a",{parentName:"p",href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html"},"Quartz")," cron formats. Notably, the digit values for day of week for the Quartz format differs from most other cron parsers."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Digit"),(0,i.kt)("th",{parentName:"tr",align:null},"Standard"),(0,i.kt)("th",{parentName:"tr",align:null},"Quartz"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MON")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUN"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TUE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MON"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TUE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"THU")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WED"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FRI")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"THU"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SAT")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FRI"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUN")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SAT"))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to potential confusion, it is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"MON"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"SAT")," instead of digits when specifying the day of week."))),(0,i.kt)("h3",{id:"hash-based-load-balancing"},"Hash-based Load Balancing"),(0,i.kt)("p",null,"Furiko's cron parser implements ",(0,i.kt)("inlineCode",{parentName:"p"},"H"),", which will be substituted with a number according to the hash of the JobConfig's name, so that ",(0,i.kt)("inlineCode",{parentName:"p"},"H")," will produce an even load balancing of all jobs in the cluster on average.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"The following example shows how you can use H in your cron schedule:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 0/3 * * *"),": Run every 3 hours, at 00:00, 03:00, 06:00, ..."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"H H/3 * * *"),": Run every 3 hours, possible schedule is 01:34, 04:34, 07:34, ...")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"H")," tokens whenever possible. In practice, most jobs do not have a strict dependency on when they need to be run, but use a cron expression to describe an interval that it is expected to be run."))),(0,i.kt)("p",null,"There are 4 possible ",(0,i.kt)("inlineCode",{parentName:"p"},"H")," formats that are introduced:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents a single point in time within the time unit."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H * * * *"),": Run once every 1 hour, at the H minute of the hour.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H/2")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents an interval that starts at the H offset."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0 H/6 * * *"),": Run once every 6 hours, starting between 0-5 AM and every 6 hours thereafter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H(5-19)")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents a single point in time with a range."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H(5-19) * * * *"),": Run once every 1 hour, anytime between the 5th to 19th minute of the hour.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H(5-19)/3")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents an interval with a range offset."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H(5-19)/5 * * * *"),": Run every 5 minutes in the 5th to 19th minute of the hour, up to a total of 3 times. Example: ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"For ",(0,i.kt)("inlineCode",{parentName:"td"},"H=0"),": 00:05, 00:10, 00:15, 01:05, 01:10, 01:15, ..."),(0,i.kt)("li",null,"For ",(0,i.kt)("inlineCode",{parentName:"td"},"H=2"),": 00:07, 00:12, 00:17, 01:07, 01:12, 01:17, ...")))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"Note of Caution for Intervallic ',(0,i.kt)("inlineCode",{parentName:"h5"},"H"),' Types"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using intervallic ",(0,i.kt)("inlineCode",{parentName:"p"},"H")," types may produce different behaviours depending on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"H")," used if the denominator does not evenly divide the size of the time unit/range."),(0,i.kt)("p",{parentName:"div"},"Taking ",(0,i.kt)("inlineCode",{parentName:"p"},"0 H/7 * * * * *")," as an example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"H=0")," it will run 9 times per hour, but if ",(0,i.kt)("inlineCode",{parentName:"p"},"H=6")," it will run only 8 times per hour."),(0,i.kt)("p",{parentName:"div"},"As such, it is recommended to choose intervals that are divisors of the size of the range that the ",(0,i.kt)("inlineCode",{parentName:"p"},"H")," token is in."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),'"Warning for ',(0,i.kt)("inlineCode",{parentName:"h5"},"H"),' in Day of Month"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The day of month field chooses a hash between the 1-28 range, so ",(0,i.kt)("inlineCode",{parentName:"p"},"H/3")," may produce a job that runs more or less frequently near the end of the month as compared to the others. This behavior comes from Jenkins, and Furiko replicates this same behavior to avoid ambiguity."),(0,i.kt)("p",{parentName:"div"},"The following explanation is taken from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/pipeline/syntax/#cron-syntax"},"Jenkins documentation"),":"),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"Beware that for the day of month field, short cycles such as ",(0,i.kt)("inlineCode",{parentName:"p"},"*/3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"H/3")," will not work consistently near the end of most months, due to variable month lengths. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"*/3")," will run on the 1st, 4th, \u2026 31st days of a long month, then again the next day of the next month. Hashes are always chosen in the 1-28 range, so ",(0,i.kt)("inlineCode",{parentName:"p"},"H/3")," will produce a gap between runs of between 3 and 6 days at the end of a month. (Longer cycles will also have inconsistent lengths but the effect may be relatively less noticeable.)")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The CronController supports some configuring additional parser options that would apply to all JobConfigs in the cluster."),(0,i.kt)("p",null,"For detailed configuration documentation, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/reference/configuration/execution/dynamic-config#cron-controller"},"Execution Dynamic Config"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cronFormat")),(0,i.kt)("td",{parentName:"tr",align:null},"Format used to parse cron expressions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"standard"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cronHashNames")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to enable hash-based cron expressions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cronHashSecondsByDefault")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to treat empty seconds as ",(0,i.kt)("inlineCode",{parentName:"td"},"H")," (true) or ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," (false)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cronHashFields")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to include field type in hash"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"This format is first introduced in Jenkins, which has been adopted in a few other cron schedulers as well: ",(0,i.kt)("a",{parentName:"li",href:"https://www.jenkins.io/doc/book/pipeline/syntax/#cron-syntax"},"https://www.jenkins.io/doc/book/pipeline/syntax/#cron-syntax"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);