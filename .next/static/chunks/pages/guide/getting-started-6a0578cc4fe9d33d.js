(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{3054:function(s,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guide/getting-started",function(){return i(42)}])},42:function(s,e,i){"use strict";i.r(e),i.d(e,{__toc:function(){return c}});var n=i(5893),r=i(2673),t=i(7913),l=i(8426);i(9128);var o=i(2643),a=i(9013);let c=[{depth:2,value:"Video Lecture",id:"video-lecture"},{depth:2,value:"Installing OmegaONE",id:"installing-omegaone"},{depth:3,value:"1. Modular CDN",id:"1-modular-cdn"},{depth:3,value:"2. Using Vite",id:"2-using-vite"},{depth:3,value:"3. Using Templates",id:"3-using-templates"},{depth:4,value:"Javascript Template",id:"javascript-template"},{depth:4,value:"Typescript Template",id:"typescript-template"},{depth:2,value:"Next steps",id:"next-steps"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",strong:"strong",pre:"pre",code:"code",span:"span",h4:"h4"},(0,o.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Getting Started with OmegaONE"}),"\n",(0,n.jsx)(e.p,{children:"OmegaONE was designed in a way, that setting it up and developing apps using it would be a piece of cake.\r\nGiven that Omega is a purely javascript framework, there are no need of compilers or any other transformers\r\nfor Omega."}),"\n","\n",(0,n.jsx)(a.UW,{type:"info",children:(0,n.jsx)(e.p,{children:"OmegaONE itself don't need a compiler to transform it to pure javascript, but if you are using libraries\r\nlike SCSS, then you'd need a compiler specific to that."})}),"\n",(0,n.jsx)(e.h2,{id:"video-lecture",children:"Video Lecture"}),"\n",(0,n.jsx)("img",{src:"/omega-guide-getting-started.svg",style:{borderRadius:"8px",marginTop:"20px"}}),"\n",(0,n.jsx)(e.h2,{id:"installing-omegaone",children:"Installing OmegaONE"}),"\n",(0,n.jsx)(e.h3,{id:"1-modular-cdn",children:"1. Modular CDN"}),"\n",(0,n.jsxs)(e.p,{children:["Installing OmegaONE is a piece of cake. You can directly use it in your HTML using our ",(0,n.jsx)(e.strong,{children:"unique"})," modular import\r\ncdn."]}),"\n",(0,n.jsx)(e.pre,{"data-language":"html","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(e.code,{"data-language":"html","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<!"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"DOCTYPE"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"lang"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"en"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"meta"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"charset"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"UTF-8"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"meta"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"name"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"viewport"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"content"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"width=device-width, initial-scale=1.0"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">Hello Omega</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line highlighted",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"type"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"importmap"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line highlighted",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      {"})}),"\n",(0,n.jsx)(e.span,{className:"line highlighted",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'        "imports": {'})}),"\n",(0,n.jsx)(e.span,{className:"line highlighted",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'          "@indivice/omega/": "https://indivice.github.io/omega/dist/"'})}),"\n",(0,n.jsx)(e.span,{className:"line highlighted",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,n.jsx)(e.span,{className:"line highlighted",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,n.jsxs)(e.span,{className:"line highlighted",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"app"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"type"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"module"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { Render } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@indivice/omega/index.js'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { Layout } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@indivice/omega/components.js'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Render"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        selector"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#app'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"app"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Layout"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".Column"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                child"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Hello World"'})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            })"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      })"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.jsx)(e.h3,{id:"2-using-vite",children:"2. Using Vite"}),"\n",(0,n.jsxs)(e.p,{children:["Vite is a popular scaffolding tool to build production applications. You can use OmegaONE with Vite using the vanilla settings.\r\nOmegaONE is compatible with both ",(0,n.jsx)(e.strong,{children:"javascript"})," and ",(0,n.jsx)(e.strong,{children:"typescript"})]}),"\n",(0,n.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"cd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"my-vite-project"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"my-vite-project~$"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"npm"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"i"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"@indivice/omega"})]})]})}),"\n",(0,n.jsx)(e.h3,{id:"3-using-templates",children:"3. Using Templates"}),"\n",(0,n.jsxs)(e.p,{children:["OmegaONE has for now, two basic templates that you can use directly without the hassle of setting things up. We are working on\r\na CLI tool that would help you to customize your templates and tools. All the templates uses ",(0,n.jsx)(e.strong,{children:"Vite"})," under the hood."]}),"\n",(0,n.jsx)(e.h4,{id:"javascript-template",children:"Javascript Template"}),"\n",(0,n.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"npx"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"degit"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/indivice/omega/template/js"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"my-project"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"cd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"my-project"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"my-project~$"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"npm"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"i"})]})]})}),"\n",(0,n.jsx)(e.h4,{id:"typescript-template",children:"Typescript Template"}),"\n",(0,n.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"npx"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"degit"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/indivice/omega/template/ts"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"my-project"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"cd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"my-project"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"my-project~$"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"npm"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"i"})]})]})}),"\n",(0,n.jsx)(e.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsx)(e.p,{children:"This section is more like tutorial; it goes through maximum features in a order where learning is easier; I\r\ntry to keep the articles very simple, and small to help understand small chunks of concepts."}),"\n",(0,n.jsxs)(e.p,{children:["The upcoming articles in this guide section assumes that you have created your project using ",(0,n.jsx)(e.strong,{children:"Vite"}),". Though, after\r\ncompleting this guide, you can implement the core knowledge to anywhere Omega runs."]})]})}let h={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/guide/getting-started.mdx",route:"/guide/getting-started",timestamp:1723188083e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"guide",route:"/guide",children:[{kind:"MdxPage",name:"building-layouts",route:"/guide/building-layouts"},{kind:"MdxPage",name:"getting-started",route:"/guide/getting-started"},{kind:"MdxPage",name:"reactive-layouts",route:"/guide/reactive-layouts"},{kind:"Meta",data:{"getting-started":"Getting Started","building-layouts":"Building Layouts","reactive-layouts":"Reactive Layouts"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"videos",route:"/videos"},{kind:"Meta",data:{index:"Welcome to OmegaONE",guide:"OmegaONE guide",about:{title:"About",type:"page"},videos:{title:"Video Lectures",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://www.linkedin.com/in/cbt-mayukh",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Getting Started with OmegaONE",headings:c},pageNextRoute:"/guide/getting-started",nextraLayout:t.ZP,themeConfig:l.Z};e.default=(0,r.j)(h)},8426:function(s,e,i){"use strict";var n=i(5893);i(7294);let r={logo:(0,n.jsxs)("span",{style:{display:"flex",gap:"20px",alignItems:"center",fontSize:"18px"},children:[" ",(0,n.jsx)("img",{style:{aspectRatio:"1/1",height:"35px"},src:"/omega-logo.svg"})," OmegaONE Docs"]}),project:{link:"https://github.com/indivice/omega"},footer:{text:"OmegaONE Documentation & Knowledge Base | (C) 2024 by Mayukh Chakraborty"},primaryHue:292,primarySaturation:100,feedback:{content:null},editLink:{component:null}};e.Z=r},5789:function(){}},function(s){s.O(0,[543,774,888,179],function(){return s(s.s=3054)}),_N_E=s.O()}]);