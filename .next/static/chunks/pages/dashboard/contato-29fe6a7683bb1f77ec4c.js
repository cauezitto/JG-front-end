_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"6vbv":function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/contato",function(){return o("zl6j")}])},xEs0:function(e,t,o){"use strict";var n=o("rePB"),r=o("nKUr"),i=o("vOnD"),a=i.d.label.withConfig({displayName:"styles__Wrapper",componentId:"rph56-0"})(["",""],(function(e){var t=e.theme,o=e.color,n=void 0===o?"black":o,r=e.fontSize,a=void 0===r?"large":r,c=e.font,s=void 0===c?"roboto":c,d=e.fontWeight,l=void 0===d?"normal":d,u=e.margin;return Object(i.c)(["display:flex;flex-direction:column;font-size:",";color:",";font-family:",";font-weight:",";",""],t.font.sizes[a],t.colors[n],t.font.family[s],t.font[l],u&&Object(i.c)(["margin:",";"],u))}));function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t.a=function(e){return Object(r.jsx)(a,s(s({},e),{},{children:e.children}))}},zl6j:function(e,t,o){"use strict";o.r(t),o.d(t,"__N_SSP",(function(){return y}));var n=o("o0o1"),r=o.n(n),i=o("HaE+"),a=o("nKUr"),c=o("mIKr"),s=o("jsCw"),d=o("xEs0"),l=o("HvvW"),u=o("w1nQ"),p=o("vOnD"),m=p.d.div.withConfig({displayName:"contato__Container",componentId:"vk015t-0"})(["width:100%;height:auto;min-width:100%;display:inline-flex;flex-direction:column;justify-content:flex-start;align-items:center;h2{text-align:center;}label{width:100%;max-width:1000px;justify-self:center;}button{width:300px;border-radius:50px;}"]),b=o("IdFE"),f=p.d.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1txd68x-0"})(["",""],(function(e){var t=e.theme;return Object(p.c)(["background-color:",";border-radius:50px;width:100%;max-width:1000px;text-align:center;display:flex;align-items:center;justify-content:center;height:55px;border:0;box-shadow:",";margin-bottom:",";font-size:",";font-family:",";cursor:pointer;position:relative;svg{color:",";margin-left:10px;}.hidden{display:none;}.visible{position:absolute;display:inline-block;margin-bottom:-220px;width:100%;background-color:",";box-shadow:",";border-radius:0 0 26px 26px;padding:",";.item{margin-bottom:10px;}}"],t.colors.white100,t.boxShadow,t.spacings.small,t.font.sizes.xxlarge,t.font.family.ubuntu,t.colors.brown,t.colors.white100,t.boxShadow,t.spacings.small)})),h=o("q1tI"),x=function(e){var t=Object(h.useState)("hidden"),o=t[0],n=t[1];return Object(a.jsxs)(f,{id:"selector-wrapper",onClick:function(){n("hidden"!==o?"hidden":"visible")},style:{borderRadius:"hidden"===o?"50px":"25px 26px 0 0"},children:[e.text&&Object(a.jsx)(a.Fragment,{children:""===e.text?"Motivo do chamado":e.text})," ",Object(a.jsx)(b.b,{}),Object(a.jsx)("div",{className:o,children:e.children})]})},j=o("B3q3"),g=o("Dp36"),v=o("FLf1"),O=o.n(v),w=o("2ZRA"),y=!0;t.default=function(){var e=Object(w.b)().token,t=Object(h.useState)("Motivo do chamado"),o=t[0],n=t[1],p=Object(h.useState)(" "),b=p[0],f=p[1],v=function(){var t=Object(i.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.decode(e);case 2:return i=t.sent,t.next=5,g.a.post("/chamados",{motivo:"Motivo do chamado"===o?"Motivo n\xe3o selecionado":o,mensagem:b,user:i.id},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(){alert("Recebemos o seu chamado, agora \xe9 s\xf3 esperar que entramos em contato"),f(""),n("Motivo do chamado")})).catch((function(e){alert("Um erro inesperado ocorreu! Tente logar novamente. Caso o problema persista, tente novamente mais tarde ou entre em contato com nossa equipe via email ou whatsapp"),console.log(e)}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsx)(u.a,{children:Object(a.jsxs)(m,{children:[Object(a.jsx)(c.a,{color:"brown",justify:"center",fontSize:"xxmax",fontWeight:"semiBold",lineBottom:!1,children:"Fale com nossa equipe"}),Object(a.jsx)(l.a,{fontSize:"xlarge",margin:"10px 0 50px 0",textAlign:"center",children:"Mande sua mensagem para n\xf3s, e teremos prazer em te responder"}),Object(a.jsxs)(x,{text:o,children:[Object(a.jsx)("div",{className:"item",onClick:function(){n("Me arrependi da compra")},children:"Me arrependi da compra"}),Object(a.jsx)("div",{className:"item",onClick:function(){n("Meu Produto n\xe3o chegou")},children:"Meu Produto n\xe3o chegou"}),Object(a.jsx)("div",{className:"item",onClick:function(){n("Meu produto veio com defeito")},children:"Meu produto veio com defeito"}),Object(a.jsx)("div",{className:"item",onClick:function(){n("Outro Motivo")},children:"Outro motivo"})]}),Object(a.jsxs)(d.a,{fontSize:"xlarge",fontWeight:"semiBold",children:["Mensagem",Object(a.jsx)(s.a,{textArea:!0,radius:20,height:250,value:b,onChange:function(e){return f(e.target.value)},borderColor:"gray50"})]}),Object(a.jsx)("br",{}),Object(a.jsx)(j.a,{fontSize:"xlarge",fill:"red100",onClick:v,children:"ENVIAR"})]})})}}},[["6vbv",0,2,7,11,12,14,1,3,4,5,6,10,13]]]);