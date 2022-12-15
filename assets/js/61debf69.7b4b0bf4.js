"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2135],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,p=m["".concat(u,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(p,o(o({ref:t},c),{},{components:n})):r.createElement(p,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),i=n(6010),o=n(2389),l=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,f=e.defaultValue,p=e.values,b=e.groupId,g=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),x=w.tabGroupChoices,O=w.setTabGroupChoices,N=(0,a.useState)(y),T=N[0],C=N[1],I=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=x[b];null!=E&&E!==T&&v.some((function(e){return e.value===E}))&&C(E)}var j=function(e){var t=e.currentTarget,n=I.indexOf(t),r=v[n].value;r!==T&&(_(t),C(r),null!=b&&O(b,String(r)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=I.indexOf(e.currentTarget)+1;n=null!=(r=I[a])?r:I[0];break;case"ArrowLeft":var i,o=I.indexOf(e.currentTarget)-1;n=null!=(i=I[o])?i:I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},5077:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a="caption_y_hk",i=function(e){var t=e.src,n=e.imgStyle,i=e.children;return r.createElement("div",{className:"text--center"},r.createElement("img",{style:n,src:t}),r.createElement("p",{className:a},i))}},6739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=(n(5077),n(5488)),l=n(5162),u=["components"],s={sidebar_position:2},c="Installing the CLI",d={unversionedId:"getting-started/cli",id:"getting-started/cli",title:"Installing the CLI",description:"This guide provides details on how to install and use the Furiko CLI tool, furiko.",source:"@site/docs/getting-started/cli.mdx",sourceDirName:"getting-started",slug:"/getting-started/cli",permalink:"/docs/next/getting-started/cli",draft:!1,editUrl:"https://github.com/furiko-io/website/tree/main/docs/getting-started/cli.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing Furiko",permalink:"/docs/next/getting-started/install"},next:{title:"Executing Your First Job",permalink:"/docs/next/getting-started/tutorials/executing-jobs"}},m={},f=[{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"Usage Instructions",id:"usage-instructions",level:2}],p={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-the-cli"},"Installing the CLI"),(0,i.kt)("p",null,"This guide provides details on how to install and use the Furiko CLI tool, ",(0,i.kt)("inlineCode",{parentName:"p"},"furiko"),"."),(0,i.kt)("h2",{id:"installation-instructions"},"Installation Instructions"),(0,i.kt)("p",null,"Currently, ",(0,i.kt)("inlineCode",{parentName:"p"},"furiko")," is only released via Furiko's GitHub releases. You can install ",(0,i.kt)("inlineCode",{parentName:"p"},"furiko")," by downloading the executable binary from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furiko-io/furiko/releases"},"Furiko's GitHub releases page")," directly."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"darwin_amd64",label:"macOS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://github.com/furiko-io/furiko/releases/latest/download/furiko_darwin_amd64 -sL -O\nmv furiko_darwin_amd64 /usr/local/bin/furiko\nchmod +x /usr/local/bin/furiko\n"))),(0,i.kt)(l.Z,{value:"darwin_arm64",label:"macOS (Apple Silicon)",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Note that M1 Macs no longer have ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," by default. You may wish to substitute ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," for another directory in your ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://github.com/furiko-io/furiko/releases/latest/download/furiko_darwin_arm64 -sL -O\nmv furiko_darwin_arm64 /usr/local/bin/furiko\nchmod +x /usr/local/bin/furiko\n"))),(0,i.kt)(l.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://github.com/furiko-io/furiko/releases/latest/download/furiko_linux_amd64 -sL -O\nmv furiko_linux_amd64 /usr/local/bin/furiko\nchmod +x /usr/local/bin/furiko\n"))),(0,i.kt)(l.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl https://github.com/furiko-io/furiko/releases/latest/download/furiko_windows_amd64.exe -sL -O\nmv furiko_windows_amd64 /usr/local/bin/furiko\nchmod +x /usr/local/bin/furiko\n")))),(0,i.kt)("h2",{id:"usage-instructions"},"Usage Instructions"),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"furiko --help")," will list all available commands for the CLI tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ furiko --help\nCommand-line utility to manage Furiko.\n\nUsage:\n  furiko [command]\n\nAvailable Commands:\n  completion  generate the autocompletion script for the specified shell\n  disable     Disable automatic scheduling for a JobConfig.\n  enable      Enable automatic scheduling for a JobConfig.\n  get         Get one or more resources by name.\n  help        Help about any command\n  kill        Kill an ongoing Job.\n  list        List all resources by kind.\n  run         Run a new Job.\n\nFlags:\n      --dynamic-config-name string        Overrides the name of the dynamic cluster config. (default "execution-dynamic-config")\n      --dynamic-config-namespace string   Overrides the namespace of the dynamic cluster config. (default "furiko-system")\n  -h, --help                              help for furiko\n      --kubeconfig string                 Path to the kubeconfig file to use for CLI requests.\n  -n, --namespace string                  If present, the namespace scope for this CLI request.\n  -v, --v int                             Sets the log level verbosity.\n\nUse "furiko [command] --help" for more information about a command.\n')))}b.isMDXComponent=!0}}]);