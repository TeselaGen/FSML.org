"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={title:"Data Types"},o="Data Types",i={unversionedId:"model/manifest/supplemental-sections/data/data-types/index",id:"model/manifest/supplemental-sections/data/data-types/index",title:"Data Types",description:"Data types in the FSML data schema correspond to a set of well-defined properties to explain and describe",source:"@site/docs/model/manifest/supplemental-sections/data/data-types/index.md",sourceDirName:"model/manifest/supplemental-sections/data/data-types",slug:"/model/manifest/supplemental-sections/data/data-types/",permalink:"/pr-preview/pr-120/model/manifest/supplemental-sections/data/data-types/",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/model/manifest/supplemental-sections/data/data-types/index.md",tags:[],version:"current",frontMatter:{title:"Data Types"},sidebar:"tutorialSidebar",previous:{title:"Data schema",permalink:"/pr-preview/pr-120/model/manifest/supplemental-sections/data/"},next:{title:"File Data Schema",permalink:"/pr-preview/pr-120/model/manifest/supplemental-sections/data/file-data"}},l={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"Data types in the FSML data schema correspond to a set of well-defined properties to explain and describe\nthe columns of tabular data."),(0,r.kt)("h1",{id:"column-kind"},"Column Kind"),(0,r.kt)("p",null,'Column kinds increases the degree of completeness of the FSML Manifest by describing a column\'s "Kind". There are 4 different kinds defined\nin the FSML data schema standard:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IDENTIFIER"),": identifier columns are the experimental units or subjects under evaluation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"REFERENCE"),": reference columns relates to the reference axis values. These correspond to the reference on which observations are taken course.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FACTOR"),": factors are the inputs or controlled variables used to manipulate the experiment with the aim of triggering responses to be studied and analyzed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OBSERVATION"),": observations are the experiment's responses to the manipulated factors, these explain how the subjects behave under the experimental conditions applied. Also known as the dependent variables."))),(0,r.kt)("h1",{id:"column-class"},"Column Class"),(0,r.kt)("p",null,"Column Classes are a more deeply detailed structure than Column Kinds. These include additional properties that further explain the nature of each column\nsuch as the units, phyisical dimension and the type of the values that each column holds."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SUBJECT"),": corresponds to the the subjects under evaluation or the experimental units subjected to experimental conditions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"REFERENCE_DIMENSION"),": the reference dimension of the experiment's observations or measurements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MEASURMENT"),": the measurements performed during the experiment. These are restricted to be numeric values and associated with some dimensional units.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CALL"),": observations restricted to be of type categoric.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"COMPUTED_VALUE"),": computed values are a computation of other values, (e.g., the division of two other observation columns).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DESCRIPTOR"),": descriptors are columns that hold generic type descriptors/features value for each row. These can be independent variables that are controlled throughout the experiment or defined as initial conditions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UNIT"),": Usually units are equal across an entire column. But, passing in unit columns allows to be specific about the units of each value in another column."))))}c.isMDXComponent=!0}}]);