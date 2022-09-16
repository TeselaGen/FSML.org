"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"FSML","href":"/pr-preview/pr-106/","docId":"intro"},{"type":"category","label":"Background","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Design Principles","href":"/pr-preview/pr-106/background/design-principles","docId":"background/design-principles"},{"type":"link","label":"Inspiration","href":"/pr-preview/pr-106/background/inspiration","docId":"background/inspiration"},{"type":"link","label":"Architecture","href":"/pr-preview/pr-106/background/technical-architecture","docId":"background/technical-architecture"}],"href":"/pr-preview/pr-106/background/"},{"type":"category","label":"Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"PDF YAML Manifest","href":"/pr-preview/pr-106/examples/pdf-yaml-example","docId":"examples/pdf-yaml-example"}],"href":"/pr-preview/pr-106/examples/"},{"type":"category","label":"Model","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Manifest","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Core Sections","href":"/pr-preview/pr-106/model/manifest/core-sections","docId":"model/manifest/core-sections"},{"type":"category","label":"Supplemental Sections","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Data schema","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Data Types","href":"/pr-preview/pr-106/model/manifest/supplemental-sections/data/data-types/","docId":"model/manifest/supplemental-sections/data/data-types/index"},{"type":"link","label":"File Data Schema","href":"/pr-preview/pr-106/model/manifest/supplemental-sections/data/file-data","docId":"model/manifest/supplemental-sections/data/file-data"},{"type":"link","label":"Tabular Data Schema","href":"/pr-preview/pr-106/model/manifest/supplemental-sections/data/tabular-data","docId":"model/manifest/supplemental-sections/data/tabular-data"}],"href":"/pr-preview/pr-106/model/manifest/supplemental-sections/data/"}],"href":"/pr-preview/pr-106/model/manifest/supplemental-sections/"}],"href":"/pr-preview/pr-106/model/manifest/"},{"type":"category","label":"Visualization","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Markdown Support","href":"/pr-preview/pr-106/model/presentation/markdown-support","docId":"model/presentation/markdown-support"},{"type":"link","label":"Rendering Frameworks","href":"/pr-preview/pr-106/model/presentation/rendering-frameworks","docId":"model/presentation/rendering-frameworks"}],"href":"/pr-preview/pr-106/model/presentation/"}],"href":"/pr-preview/pr-106/model/"}]},"docs":{"background/design-principles":{"id":"background/design-principles","title":"Design Principles","description":"Establishing design principles can help govern the development process and to ensure it produces a cohesive solution. After surveying the various existing protocol formats and use cases we\u2019ve developed the following principles that we think will be useful.","sidebar":"tutorialSidebar"},"background/index":{"id":"background/index","title":"Background","description":"Fermentation is as much of an art as it is science. In nearly all fermentation processes the challenge is to create the right environment with the right food for the right microbial strain to yield the desired product.","sidebar":"tutorialSidebar"},"background/inspiration":{"id":"background/inspiration","title":"Inspiration","description":"We want to make sure that we build upon previous successes. To this end, much of our design has taken inspiration from a variety of well used technologies. The two main sources of inspiration are HTML and NCBI.","sidebar":"tutorialSidebar"},"background/technical-architecture":{"id":"background/technical-architecture","title":"Architecture","description":"Our initial approach is to embody the Fermentation Systems Modeling Language in existing frameworks and languages.","sidebar":"tutorialSidebar"},"examples/index":{"id":"examples/index","title":"Examples","description":"Below is a list of examples using FSML.","sidebar":"tutorialSidebar"},"examples/pdf-yaml-example":{"id":"examples/pdf-yaml-example","title":"PDF YAML Manifest","description":"Below is a contrived example of what it will look like if a user has an existing protocol in a PDF file and wants to generate a protocol manifest in the YAML format.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"FSML","description":"TeselaGen (https//www.biomade.org/) has launched FSML.org (Fermentation Systems Modeling Language) to help further our ability to create the best fermentation processes through protocol modeling.","sidebar":"tutorialSidebar"},"model/index":{"id":"model/index","title":"Model","description":"The model consists of two main pieces:","sidebar":"tutorialSidebar"},"model/manifest/core-sections":{"id":"model/manifest/core-sections","title":"Core Sections","description":"Core Sections","sidebar":"tutorialSidebar"},"model/manifest/index":{"id":"model/manifest/index","title":"Manifest","description":"The manifest data model describes the protocol source content in a way that can be easily parsed by current technologies. The schema of this data model has a core section (mandatory) and some supplemantal sections: the protocol schema and the data schema.","sidebar":"tutorialSidebar"},"model/manifest/supplemental-sections/data/data-types/index":{"id":"model/manifest/supplemental-sections/data/data-types/index","title":"Data Types","description":"Data types in the FSML data schema correspond to a set of well-defined properties to explain and describe","sidebar":"tutorialSidebar"},"model/manifest/supplemental-sections/data/file-data":{"id":"model/manifest/supplemental-sections/data/file-data","title":"File Data Schema","description":"The file schema stores the reference to a file. It could either be a local or a remote file described by its","sidebar":"tutorialSidebar"},"model/manifest/supplemental-sections/data/index":{"id":"model/manifest/supplemental-sections/data/index","title":"Data schema","description":"The FSML data schema allows for protocol experiment data to be structured in a well-defined and machine readable format.","sidebar":"tutorialSidebar"},"model/manifest/supplemental-sections/data/tabular-data":{"id":"model/manifest/supplemental-sections/data/tabular-data","title":"Tabular Data Schema","description":"The tabular schema stores data as an array of rows referencing the source data file(s). Additionally,","sidebar":"tutorialSidebar"},"model/manifest/supplemental-sections/index":{"id":"model/manifest/supplemental-sections/index","title":"Supplemental Sections","description":"Supplemental sections may or may not be able to be generated in an automated fashion. However the format of the sections will be standardized in a manner that can be machine readable because the presence and completeness of a supplemental section will be used in the calculation of the Utility Score.","sidebar":"tutorialSidebar"},"model/presentation/index":{"id":"model/presentation/index","title":"Visualization","description":"Here we will document a set of tools and formats that render the manifest data in a human friendly way.","sidebar":"tutorialSidebar"},"model/presentation/markdown-support":{"id":"model/presentation/markdown-support","title":"Markdown Support","description":"TBD","sidebar":"tutorialSidebar"},"model/presentation/rendering-frameworks":{"id":"model/presentation/rendering-frameworks","title":"Rendering Frameworks","description":"TBD","sidebar":"tutorialSidebar"}}}')}}]);