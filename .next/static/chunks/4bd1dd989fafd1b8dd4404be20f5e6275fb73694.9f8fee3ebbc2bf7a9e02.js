(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"2ZRA":function(e,t,r){"use strict";r.d(t,"b",(function(){return l}));var n=r("ODXe"),s=r("nKUr"),o=r("q1tI"),a="@lojinhaShoppingCart",i={getCart:function(){var e=localStorage.getItem(a);return e?this.jsonParseProducts(e):{products:[],total:0}},addToCart:function(e){var t=this.stringfyProducts(e);localStorage.setItem(a,t)},stringfyProducts:function(e){return JSON.stringify(e)},jsonParseProducts:function(e){return JSON.parse(e)}},c=r("r5vi"),d=Object(o.createContext)(null),l=(t.a=function(e){var t=e.children,r=Object(o.useState)(""),a=r[0],l=r[1],b=Object(o.useState)({products:[],total:0}),u=b[0],p=b[1],j=Object(o.useState)(null),f=j[0],h=j[1],g=Object(o.useState)(null),O=g[0],x=g[1],m=Object(o.useState)(!0),w=m[0],y=m[1],v=Object(c.a)(["user"]),A=Object(n.a)(v,2),k=A[0],P=A[1];return Object(o.useEffect)((function(){w||(i.addToCart(u),P("cart",u,{path:"/",maxAge:604800,sameSite:!0}))}),[u]),Object(o.useEffect)((function(){y(!1),p(i.getCart()),x(k.user),P("cart",i.getCart(),{path:"/",maxAge:604800,sameSite:!0}),l("https://adm.jgemporiodamalha.com")}),[]),Object(s.jsx)(d.Provider,{value:{server:a,token:f,setToken:h,user:O,setUser:x,cart:u,setCart:p},children:t})},function(){var e=Object(o.useContext)(d);if(!e)throw new Error("Use count precisa estar dentro de um provider");return{server:e.server,token:e.token,setToken:e.setToken,user:e.user,setUser:e.setUser,cart:e.cart,setCart:e.setCart}})},HvvW:function(e,t,r){"use strict";var n=r("rePB"),s=r("nKUr"),o=r("vOnD"),a=o.d.p.withConfig({displayName:"styles__Wrapper",componentId:"sc-19fj83-0"})(["",""],(function(e){var t=e.theme,r=e.color,n=void 0===r?"gray300":r,s=e.fontSize,a=void 0===s?"medium":s,i=e.font,c=void 0===i?"roboto":i,d=e.justify,l=void 0===d?"flex-start":d,b=e.textAlign,u=void 0===b?"left":b,p=e.fontWeight,j=void 0===p?"normal":p,f=e.margin;return Object(o.c)(["color:",";font-size:",";font-family:",";font-weight:",";justify-content:",";text-align:",";",""],t.colors[n],t.font.sizes[a],t.font.family[c],t.font[j],l,u,f&&Object(o.c)(["margin:",";"],f))}));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){return Object(s.jsx)(a,c(c({},e),{},{children:e.children}))}},w1nQ:function(e,t,r){"use strict";var n=r("rePB"),s=r("nKUr"),o=r("ODXe"),a=r("vOnD"),i=a.d.nav.withConfig({displayName:"styles__Wrapper",componentId:"sc-1a64oo2-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["width:100%;position:fixed;bottom:0;background-color:",";border-radius:"," "," 0 0;.sub-wrapper{height:60px;background:rgb(34,40,47);background:linear-gradient( 180deg,rgba(34,40,47,1) 7%,rgba(34,40,47,0.6867121848739496) 48%,rgba(34,40,47,1) 91% );border-radius:"," "," 0 0;display:flex;padding:"," 10%;align-items:center;justify-content:space-between;}a{color:",";}a,button{text-decoration:none;font-size:",";}button{border:0;outline:0;background-color:",";color:",";border-radius:50%;height:80px;width:80px;margin-bottom:-20px;}"],t.colors.silver,t.border.radius.rounded,t.border.radius.rounded,t.border.radius.rounded,t.border.radius.rounded,t.spacings.xxsmall,t.colors.white100,t.font.sizes.extra,t.colors.white100,t.colors.red100)})),c=r("YFqc"),d=r.n(c),l=r("Tgqd"),b=r("NIcq"),u=r("qtta"),p=r("PRV2"),j=r("2ZRA"),f=r("20a2"),h=r("r5vi"),g=function(){var e=Object(f.useRouter)(),t=Object(j.b)().setToken,r=Object(h.a)(["user"]),n=Object(o.a)(r,3),a=(n[0],n[1],n[2]);return Object(s.jsx)(i,{children:Object(s.jsxs)("div",{className:"sub-wrapper",children:[Object(s.jsx)(d.a,{href:"/dashboard/dados-pessoais/",passHref:!0,children:Object(s.jsx)("a",{children:Object(s.jsx)(b.a,{})})}),Object(s.jsx)(d.a,{href:"/",passHref:!0,children:Object(s.jsx)("a",{children:Object(s.jsx)(u.b,{})})}),Object(s.jsx)("button",{children:Object(s.jsx)(l.p,{onClick:function(){t(null),a("token",{path:"/",sameSite:!0}),e.push("/login")}})}),Object(s.jsx)(d.a,{href:"/dashboard/contato/",passHref:!0,children:Object(s.jsx)("a",{children:Object(s.jsx)(p.b,{})})}),Object(s.jsx)(d.a,{href:"/dashboard/pedidos/",passHref:!0,children:Object(s.jsx)("a",{children:Object(s.jsx)(u.a,{})})})]})})},O=a.d.div.withConfig({displayName:"styles__Profile",componentId:"sc-158z43f-0"})(["margin:0 auto;width:130px;height:130px;border-radius:50%;background-image:url(",");background-position:center;background-size:cover;"],(function(e){return e.url})),x=a.d.aside.withConfig({displayName:"styles__Wrapper",componentId:"sc-158z43f-1"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;width:230px;min-height:100%;padding:"," ",";.profile-wrapper{color:",";width:100%;}.logout-wrapper{width:100%;color:",";font-size:",";display:flex;align-items:center;justify-content:center;flex-direction:column;svg{cursor:pointer;}}.links-wrapper{display:flex;flex-direction:column;justify-content:space-between;height:300px;a{color:",";font-size:",";text-decoration:none;display:flex;align-items:center;svg{font-size:",";}}}"],t.spacings.xxsmall,t.spacings.small,t.colors.white100,t.colors.white100,t.font.sizes.max,t.colors.white100,t.font.sizes.xlarge,t.font.sizes.extra)})),m=r("HvvW"),w=function(){var e,t=Object(f.useRouter)(),r=Object(j.b)(),n=r.setToken,a=r.server,i=Object(h.a)(["user"]),c=Object(o.a)(i,3),g=c[0],w=(c[1],c[2]);return Object(s.jsxs)(x,{children:[Object(s.jsxs)("div",{className:"profile-wrapper",children:[Object(s.jsx)(O,{className:"profile",url:g.user&&g.user.foto?a+g.user.foto:"data:image/png;base64,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"}),Object(s.jsx)("br",{}),Object(s.jsxs)(m.a,{justify:"center",textAlign:"center",color:"white100",fontSize:"xxlarge",children:["Ol\xe1, ",g.user?String(null===(e=g.user)||void 0===e?void 0:e.username).split(" ")[0]:" "]})]}),Object(s.jsxs)("div",{className:"links-wrapper",children:[Object(s.jsx)(d.a,{href:"/dashboard/dados-pessoais",passHref:!0,children:Object(s.jsxs)("a",{children:[" ",Object(s.jsx)(b.a,{})," \xa0 Dados"]})}),Object(s.jsx)(d.a,{href:"/dashboard/pedidos",passHref:!0,children:Object(s.jsxs)("a",{children:[Object(s.jsx)(u.a,{})," \xa0 Pedidos"]})}),Object(s.jsx)(d.a,{href:"/dashboard/contato",passHref:!0,children:Object(s.jsxs)("a",{children:[Object(s.jsx)(p.b,{})," \xa0 Fale conosco"]})}),Object(s.jsx)(d.a,{href:"/",passHref:!0,children:Object(s.jsxs)("a",{children:[Object(s.jsx)(u.b,{})," \xa0 Ir para loja"]})})]}),Object(s.jsxs)("div",{className:"logout-wrapper",children:[Object(s.jsx)(l.p,{onClick:function(){n(null),w("token",{path:"/",sameSite:!0}),t.push("/login")}}),Object(s.jsx)(m.a,{color:"white100",fontSize:"xlarge",margin:"10px 0",children:"Deslogar"})]})]})},y=(r("q1tI"),a.d.div.withConfig({displayName:"dashboard__Container",componentId:"sc-191qtif-0"})(["",""],(function(e){var t=e.theme,r=e.paddingSmall;return Object(a.c)(["display:flex;width:100%;min-height:100vh;margin:auto;align-self:center;justify-self:center;justify-content:space-between;background:rgb(34,40,47);background:linear-gradient( 180deg,rgba(34,40,47,1) 7%,rgba(34,40,47,0.6867121848739496) 48%,rgba(34,40,47,1) 91% );padding:",";.content{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;min-height:100%;height:auto;flex:1;background-color:",";border-radius:",";padding:"," 15%;","}.mobile{display:none;height:60px;}@media (max-width:","){flex-direction:column;padding:"," 0 0 0;.desktop{display:none;}.mobile{display:unset;}}@media (max-width:","){.content{padding:"," 5%;}}@media (max-width:","){.content{padding:"," ",";}}"],t.spacings.xxsmall,t.colors.silver,t.border.radius.rounded,t.spacings.large,r&&Object(a.c)(["padding:"," 5%;@media (min-width:1445px){padding:"," 15%;}"],t.spacings.large,t.spacings.large),t.breakPoints.tablet,t.spacings.small,t.breakPoints.mobileL,t.spacings.large,t.breakPoints.mobileS,t.spacings.large,t.spacings.xxsmall)}))),v=(r("o0o1"),r("HaE+"),function(e){var t=e.children,r=(Object(f.useRouter)(),Object(j.b)());r.setToken,r.token;return Object(s.jsx)(s.Fragment,{children:t})});function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){return Object(s.jsx)(v,{children:Object(s.jsxs)(y,k(k({},e),{},{children:[Object(s.jsx)("div",{className:"desktop",children:Object(s.jsx)(w,{})}),Object(s.jsx)("div",{className:"content",children:e.children}),Object(s.jsx)("div",{className:"mobile",children:Object(s.jsx)(g,{})})]}))})}}}]);