"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"PDF YAML Manifest",metaTitle:"FSML PDF Protocol with a YAML generated manifest",metaDescription:"FSML PDF Protocol with a YAML generated manifest"},i="PDF Protocol with YAML Manifest",l={unversionedId:"examples/pdf-yaml-example",id:"examples/pdf-yaml-example",title:"PDF YAML Manifest",description:"Below is a contrived example of what it will look like if a user has an existing protocol in a PDF file and wants to generate a protocol manifest in the YAML format.",source:"@site/docs/examples/pdf-yaml-example.md",sourceDirName:"examples",slug:"/examples/pdf-yaml-example",permalink:"/pr-preview/pr-106/examples/pdf-yaml-example",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/examples/pdf-yaml-example.md",tags:[],version:"current",frontMatter:{title:"PDF YAML Manifest",metaTitle:"FSML PDF Protocol with a YAML generated manifest",metaDescription:"FSML PDF Protocol with a YAML generated manifest"},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/pr-preview/pr-106/examples/"},next:{title:"Model",permalink:"/pr-preview/pr-106/model/"}},p={},s=[],c={toc:s};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pdf-protocol-with-yaml-manifest"},"PDF Protocol with YAML Manifest"),(0,a.kt)("p",null,"Below is a contrived example of what it will look like if a user has an existing protocol in a PDF file and wants to generate a protocol manifest in the YAML format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# ID is the hash of the file\nId: pdf-100d924bd6d9b0472fde5c3a2e6ad12c9e19c3b916022d11a728d40abf6af59d\n\n# Who issued the ID\nIdentityAuthority: FileHashSHA256\n# If this file was part of a system like TeselaGen's then it would point to that instead\n\n# Defaults to the filename without extension\nName: myprotocol\n\n# Where can I find this protocol's source content\nContentReferences:\n  - ContentFormat: pdf\n    ContentURI: http://someonlinedrive.com/myprotocol.pdf\n")))}f.isMDXComponent=!0}}]);