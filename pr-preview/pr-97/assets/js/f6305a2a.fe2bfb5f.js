"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[6392],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Model"},o="Overview",l={unversionedId:"model/index",id:"model/index",title:"Model",description:"The model consists of two main pieces:",source:"@site/docs/model/index.md",sourceDirName:"model",slug:"/model/",permalink:"/pr-preview/pr-97/model/",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/model/index.md",tags:[],version:"current",frontMatter:{title:"Model"},sidebar:"tutorialSidebar",previous:{title:"PDF YAML Manifest",permalink:"/pr-preview/pr-97/examples/pdf-yaml-example"},next:{title:"Manifest",permalink:"/pr-preview/pr-97/model/manifest/"}},s={},p=[{value:"Links",id:"links",level:3},{value:"Links",id:"links-1",level:3}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The model consists of two main pieces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data Model"),": a machine friendly data model that\u2019s straightforward to parse"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Presentation Layer"),": a human readable rendering of the data")),(0,a.kt)("h1",{id:"data-model"},"Data Model"),(0,a.kt)("p",null,"The initial implementation of the model language","*"," aims to embody the language within an existing real world language, TypeScript, that can generate a cross platform schema via JSON Schema. You can read more about the architecture here (link to architecture)"),(0,a.kt)("p",null,"As mentioned in our Design Principles we\u2019re taking a file first approach that enables us to talk ",(0,a.kt)("em",{parentName:"p"},"about")," a protocol using a manifest file. There are three core mandatory sections to the manifest file all of which can be generated in an automated way. The remaining supplemental sections are optional but increase the utility score."),(0,a.kt)("h3",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/model/manifest/core-sections"},"Core Sections")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/model/manifest/supplemental-sections"},"Supplemental Sections")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/examples/pdf-yaml-example"},"An Example"))),(0,a.kt)("h1",{id:"presentation-layer"},"Presentation Layer"),(0,a.kt)("p",null,"Being able to exchange data in an automated way is important but it\u2019s equally important for users to be able to consume the data in a human friendly medium. To support this the modeling specification provides a way for the manifest file to specify how to render the data in HTML (specifically XHTML). Markdown is also provided as a render format since it is relatively straightforward to convert Markdown into HTML and Markdown, while less rich, can be an easier format to generate."),(0,a.kt)("h3",{id:"links-1"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/model/presentation/rendering-frameworks"},"Rendering Frameworks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/model/presentation/markdown-support"},"Markdown Conversion Support"))),(0,a.kt)("p",null,"*","Note: this schema is still under heavy development and subject to change!"))}m.isMDXComponent=!0}}]);