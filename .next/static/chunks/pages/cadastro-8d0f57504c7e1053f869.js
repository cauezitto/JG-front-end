_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"1ccW":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},"2ZRA":function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));var n=r("ODXe"),o=r("nKUr"),i=r("q1tI"),a="@lojinhaShoppingCart",c={getCart:function(){var e=localStorage.getItem(a);return e?this.jsonParseProducts(e):{products:[],total:0}},addToCart:function(e){var t=this.stringfyProducts(e);localStorage.setItem(a,t)},stringfyProducts:function(e){return JSON.stringify(e)},jsonParseProducts:function(e){return JSON.parse(e)}},s=r("r5vi"),l=Object(i.createContext)(null),u=(t.a=function(e){var t=e.children,r=Object(i.useState)(""),a=r[0],u=r[1],d=Object(i.useState)({products:[],total:0}),f=d[0],p=d[1],h=Object(i.useState)(null),g=h[0],b=h[1],m=Object(i.useState)(null),v=m[0],j=m[1],y=Object(i.useState)(!0),w=y[0],O=y[1],x=Object(s.a)(["user"]),S=Object(n.a)(x,2),P=S[0],E=S[1];return Object(i.useEffect)((function(){w||(c.addToCart(f),E("cart",f,{path:"/",maxAge:604800,sameSite:!0}))}),[f]),Object(i.useEffect)((function(){O(!1),p(c.getCart()),j(P.user),E("cart",c.getCart(),{path:"/",maxAge:604800,sameSite:!0}),u("https://adm.jgemporiodamalha.com")}),[]),Object(o.jsx)(l.Provider,{value:{server:a,token:g,setToken:b,user:v,setUser:j,cart:f,setCart:p},children:t})},function(){var e=Object(i.useContext)(l);if(!e)throw new Error("Use count precisa estar dentro de um provider");return{server:e.server,token:e.token,setToken:e.setToken,user:e.user,setUser:e.setUser,cart:e.cart,setCart:e.setCart}})},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Rtz":function(e,t,r){"use strict";var n=r("rePB"),o=r("nKUr"),i=(r("q1tI"),r("vOnD")),a=i.d.a.withConfig({displayName:"styles__Wrapper",componentId:"sc-114ixeq-0"})(["",""],(function(e){var t=e.theme,r=e.iconColor,n=void 0===r?"brown":r,o=e.color,a=void 0===o?"black":o,c=e.textAlign,s=void 0===c?"left":c,l=e.fontSize,u=void 0===l?"large":l,d=e.fontWeight,f=void 0===d?"normal":d,p=e.font,h=void 0===p?"roboto":p,g=e.textDecoration,b=void 0===g?"underline":g,m=e.iconSize,v=e.justify;return Object(i.c)(["text-decoration:none;display:flex;align-items:center;cursor:pointer;text-decoration:",";font-family:",";font-weight:",";font-size:",";color:",";text-align:",";"," svg{font-size:",";color:",";","}"],b,t.font.family[h],t.font[f],t.font.sizes[u],t.colors[a],s,v&&Object(i.c)(["display:flex;justify-content:",";"],v),t.font.sizes.xlarge,t.colors[n],m&&Object(i.c)(["font-size:",";"],t.font.sizes[m]))}));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){return Object(o.jsx)(a,s(s({},e),{},{children:e.children}))}},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},Aiso:function(e,t,r){e.exports=r("dQHF")},B3q3:function(e,t,r){"use strict";var n=r("rePB"),o=r("nKUr"),i=r("vOnD"),a=i.d.button.withConfig({displayName:"styles__Wrapper",componentId:"sc-1oc9oxe-0"})(["",""],(function(e){var t=e.theme,r=e.fill,n=void 0===r?"brown":r,o=e.color,a=void 0===o?"white100":o,c=e.radius,s=void 0===c?0:c,l=e.font,u=void 0===l?"roboto":l,d=e.outline,f=e.fontSize,p=e.fontWeight;return Object(i.c)(["outline:0;border:0;cursor:pointer;padding:"," ",";background-color:",";color:",";font-weight:",";border-radius:",";font-family:",";display:flex;justify-content:center;align-items:center;"," "," "," ",""],t.spacings.xsmall,t.spacings.medium,t.colors[n],t.colors[a],t.font.bold,s,t.font.family[u],s&&Object(i.c)(["border-radius:","px;"],s),p&&Object(i.c)(["font-weight:",";"],t.font[p]),f&&Object(i.c)(["font-size:",";"],t.font.sizes[f]),d&&Object(i.c)(["border:2px black solid;background:transparent;"]))}));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){return Object(o.jsx)(a,s(s({},e),{},{children:e.children}))}},HvvW:function(e,t,r){"use strict";var n=r("rePB"),o=r("nKUr"),i=r("vOnD"),a=i.d.p.withConfig({displayName:"styles__Wrapper",componentId:"sc-19fj83-0"})(["",""],(function(e){var t=e.theme,r=e.color,n=void 0===r?"gray300":r,o=e.fontSize,a=void 0===o?"medium":o,c=e.font,s=void 0===c?"roboto":c,l=e.justify,u=void 0===l?"flex-start":l,d=e.textAlign,f=void 0===d?"left":d,p=e.fontWeight,h=void 0===p?"normal":p,g=e.margin;return Object(i.c)(["color:",";font-size:",";font-family:",";font-weight:",";justify-content:",";text-align:",";",""],t.colors[n],t.font.sizes[a],t.font.family[s],t.font[h],u,f,g&&Object(i.c)(["margin:",";"],g))}));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){return Object(o.jsx)(a,s(s({},e),{},{children:e.children}))}},LG9w:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return e.replace(/\D/g,"")}},UWYU:function(e,t,r){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},XUPA:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastro",function(){return r("nqMI")}])},baic:function(e,t,r){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}function a(e,t,r){return(a=i()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&o(i,r.prototype),i}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return a(e,arguments,n(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o(i,e)})(e)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){var t=i();return function(){var r,o=n(e);return s(this,t?(r=n(this).constructor,Reflect.construct(o,arguments,r)):o.apply(this,arguments))}}function u(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(){r(n,c(Error));var e=l(n);function n(){var r,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=o.message,a=o.type,c=o.errors;return t(this,n),(r=e.call(this)).name="CepPromiseError",r.message=i,r.type=a,r.errors=c,r}return n}();function h(e,t){return t=t||{},new Promise((function(r,n){var o=new XMLHttpRequest,i=[],a=[],c={};for(var s in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,r){i.push(t=t.toLowerCase()),a.push([t,r]),c[t]=c[t]?c[t]+","+r:r})),r(function e(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:e,headers:{keys:function(){return i},entries:function(){return a},get:function(e){return c[e.toLowerCase()]},has:function(e){return e.toLowerCase()in c}}}}())},o.onerror=n,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(s,t.headers[s]);o.send(t.body||null)}))}var g=function(){r(n,c(Error));var e=l(n);function n(){var r,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=o.message,a=o.service;return t(this,n),(r=e.call(this)).name="ServiceError",r.message=i,r.service=a,r}return n}();function b(e){return h("".concat(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"","https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente"),{method:"POST",body:'<?xml version="1.0"?>\n<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">\n  <soapenv:Header />\n  <soapenv:Body>\n    <cli:consultaCEP>\n      <cep>'.concat(e,"</cep>\n    </cli:consultaCEP>\n  </soapenv:Body>\n</soapenv:Envelope>"),headers:{"Content-Type":"text/xml;charset=UTF-8","cache-control":"no-cache"}}).then(m).catch(O)}function m(e){return e.ok?e.text().then(v).then(w):e.text().then(j).then(y)}function v(e){try{var t;return(null!==(t=e.replace(/\r?\n|\r/g,"").match(/<return>(.*)<\/return>/)[0])&&void 0!==t?t:"").replace("<return>","").replace("</return>","").split(/</).reduce((function(e,t){var r=t.split(">");return 1<r.length&&r[1].length&&(e[r[0]]=r[1]),e}),{})}catch(e){throw new Error("N\xe3o foi poss\xedvel interpretar o XML de resposta.")}}function j(e){try{var t;return(null!==(t=e.match(/<faultstring>(.*)<\/faultstring>/)[0])&&void 0!==t?t:"").replace("<faultstring>","").replace("</faultstring>","")}catch(e){throw new Error("N\xe3o foi poss\xedvel interpretar o XML de resposta.")}}function y(e){throw new Error(e)}function w(e){return{cep:e.cep,state:e.uf,city:e.cidade,neighborhood:e.bairro,street:e.end,service:"correios"}}function O(e){var t=new g({message:e.message,service:"correios"});throw"FetchError"===e.name&&(t.message="Erro ao se conectar com o servi\xe7o dos Correios."),t}function x(e){var t="".concat(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"","https://viacep.com.br/ws/").concat(e,"/json/"),r={method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"}};return"undefined"==typeof window&&(r.headers["user-agent"]="cep-promise"),h(t,r).then(S).then(P).then(E).catch(A)}function S(e){if(e.ok)return e.json();throw Error("Erro ao se conectar com o servi\xe7o ViaCEP.")}function P(e){if(!0===e.erro)throw new Error("CEP n\xe3o encontrado na base do ViaCEP.");return e}function E(e){return{cep:e.cep.replace("-",""),state:e.uf,city:e.localidade,neighborhood:e.bairro,street:e.logradouro,service:"viacep"}}function A(e){var t=new g({message:e.message,service:"viacep"});throw"FetchError"===e.name&&(t.message="Erro ao se conectar com o servi\xe7o ViaCEP."),t}function C(e){return h("".concat(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"","https://cep.widenet.host/busca-cep/api/cep/").concat(e,".json"),{method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"}}).then(z).then(k).then(_).catch(N)}function z(e){if(e.ok)return e.json();throw Error("Erro ao se conectar com o servi\xe7o WideNet.")}function k(e){if(!1===e.ok||200!==e.status)throw new Error("CEP n\xe3o encontrado na base do WideNet.");return e}function _(e){return{cep:e.code.replace("-",""),state:e.state,city:e.city,neighborhood:e.district,street:e.address,service:"widenet"}}function N(e){var t=new g({message:e.message,service:"widenet"});throw"FetchError"===e.name&&(t.message="Erro ao se conectar com o servi\xe7o WideNet."),t}function D(e){return h("https://brasilapi.com.br/api/cep/v1/".concat(e),{method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"}}).then(I).then(W).catch(T)}function I(e){if(!1===e.ok||200!==e.status)throw new Error("CEP n\xe3o encontrado na base do BrasilAPI.");return e.json()}function W(e){return{cep:e.cep,state:e.state,city:e.city,neighborhood:e.neighborhood,street:e.street,service:"brasilapi"}}function T(e){var t=new g({message:e.message,service:"brasilapi"});throw"FetchError"===e.name&&(t.message="Erro ao se conectar com o servi\xe7o BrasilAPI."),t}function q(e){return new Promise((function(t,r){return Promise.resolve(e).then(r,t)}))}Promise.any=function(e){return q(Promise.all(u(e).map(q)))};var B=Promise,R=8;function U(t){var r=e(t);if("number"===r||"string"===r)return t;throw new p({message:"Erro ao inicializar a inst\xe2ncia do CepPromise.",type:"validation_error",errors:[{message:"Voc\xea deve chamar o construtor utilizando uma String ou um Number.",service:"cep_validation"}]})}function L(e){return e.toString().replace(/\D+/g,"")}function H(e){return"0".repeat(R-e.length)+e}function F(e){if(e.length<=R)return e;throw new p({message:"CEP deve conter exatamente ".concat(R," caracteres."),type:"validation_error",errors:[{message:"CEP informado possui mais do que ".concat(R," caracteres."),service:"cep_validation"}]})}function M(e){if(void 0!==e.length)throw new p({message:"Todos os servi\xe7os de CEP retornaram erro.",type:"service_error",errors:e});throw e}function V(e){var t=e.message,r=e.type,n=e.errors;throw new p({message:t,type:r,errors:n})}return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return B.resolve(e).then(U).then((function(e){return t.providers=t.providers?t.providers:[],function(e){var t=["brasilapi","correios","viacep","widenet"];if(!Array.isArray(e))throw new p({message:"Erro ao inicializar a inst\xe2ncia do CepPromise.",type:"validation_error",errors:[{message:"O par\xe2metro providers deve ser uma lista.",service:"providers_validation"}]});var r,n=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=d(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}(e);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(!t.includes(o))throw new p({message:"Erro ao inicializar a inst\xe2ncia do CepPromise.",type:"validation_error",errors:[{message:'O provider "'.concat(o,'" \xe9 inv\xe1lido. Os providers dispon\xedveis s\xe3o: ["').concat(t.join('", "'),'"].'),service:"providers_validation"}]});return}}catch(e){n.e(e)}finally{n.f()}}(t.providers),e})).then(L).then(F).then(H).then((function(e){return r=e,n=t,o="undefined"!=typeof window?{viacep:x,widenet:C,brasilapi:D}:{correios:b,viacep:x,widenet:C,brasilapi:D},0!==n.providers.length?B.any(n.providers.map((function(e){return o[e](r)}))):B.any(Object.values(o).map((function(e){return e(r)})));var r,n,o})).catch(M).catch(V)}}()},dEHY:function(e,t,r){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,r){"use strict";var n=r("zoAU"),o=r("mPvQ"),i=r("AroE");t.__esModule=!0,t.default=function(e){var t=e.src,r=e.sizes,i=e.unoptimized,c=void 0!==i&&i,u=e.priority,f=void 0!==u&&u,p=e.loading,g=e.className,b=e.quality,m=e.width,w=e.height,O=e.objectFit,x=e.objectPosition,S=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),P=r?"responsive":"intrinsic",E=!1;"unsized"in S?(E=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(P=S.layout),delete S.layout);0;var A=!f&&("lazy"===p||"undefined"===typeof p);t&&t.startsWith("data:")&&(c=!0,A=!1);var C,z,k,_=(0,d.useIntersection)({rootMargin:"200px",disabled:!A}),N=n(_,2),D=N[0],I=N[1],W=!A||I,T=y(m),q=y(w),B=y(b),R={visibility:W?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:x};if("undefined"!==typeof T&&"undefined"!==typeof q&&"fill"!==P){var U=q/T,L=isNaN(U)?"100%":"".concat(100*U,"%");"responsive"===P?(C={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},z={display:"block",boxSizing:"border-box",paddingTop:L}):"intrinsic"===P?(C={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},z={boxSizing:"border-box",display:"block",maxWidth:"100%"},k='<svg width="'.concat(T,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===P&&(C={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:T,height:q})}else"undefined"===typeof T&&"undefined"===typeof q&&"fill"===P&&(C={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var H={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};W&&(H=function(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,a=e.quality,c=e.sizes;if(r)return{src:t};var s=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:h,kind:"w"};return{widths:o(new Set([e,2*e,3*e].map((function(e){return v.find((function(t){return t>=e}))||v[v.length-1]})))),kind:"x"}}(i,n),l=s.widths,u=s.kind,d=l.length-1,f=l.map((function(e,r){return"".concat(j({src:t,quality:a,width:e})," ").concat("w"===u?e:r+1).concat(u)})).join(", ");c||"w"!==u||(c="100vw");return{src:t=j({src:t,quality:a,width:l[d]}),sizes:c,srcSet:f}}({src:t,unoptimized:c,layout:P,width:T,quality:B,sizes:r}));E&&(C=void 0,z=void 0,R=void 0);return s.default.createElement("div",{style:C},z?s.default.createElement("div",{style:z},k?s.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(k))}):null):null,s.default.createElement("img",Object.assign({},S,H,{decoding:"async",className:g,ref:D,style:R})))};var a=i(r("98FW")),c=i(r("1ccW")),s=i(r("q1tI")),l=r("dEHY"),u=r("UWYU"),d=r("vNVm");var f=new Map([["imgix",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=["auto=format","fit=max","w="+n],a="";o&&i.push("q="+o);i.length&&(a="?"+i.join("&"));return"".concat(t).concat(w(r)).concat(a)}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(w(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(w(r),"?imwidth=").concat(n)}],["default",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}]]),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,h=p.deviceSizes,g=p.imageSizes,b=p.loader,m=p.path,v=(p.domains,[].concat(o(h),o(g)));function j(e){var t=f.get(b);if(t)return t((0,c.default)({root:m},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(b))}function y(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function w(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,t){return e-t})),v.sort((function(e,t){return e-t}))},jsCw:function(e,t,r){"use strict";var n=r("rePB"),o=r("nKUr"),i=r("vOnD"),a=function(e){var t=e.theme,r=e.borderColor,n=void 0===r?"gray100":r,o=e.width,a=e.height,c=e.fontSize,s=void 0===c?"medium":c,l=e.font,u=void 0===l?"roboto":l,d=e.fill,f=void 0===d?"white100":d,p=e.borderWidth,h=e.radius,g=e.margin;return Object(i.c)(["padding:",";border-color:",";outline:none;border-style:solid;font-size:",";font-family:",";"," "," "," "," "," ",""],t.spacings.xxsmall,t.colors[n],t.font.sizes[s],t.font.family[u],g&&Object(i.c)(["margin:",";"],g),h&&Object(i.c)(["border-radius:","px;"],h),p&&Object(i.c)(["border-width:","px;"],p),f&&Object(i.c)(["background-color:",";"],t.colors[f]),a&&Object(i.c)(["height:","px;"],a),o&&Object(i.c)(["width:","px;"],o))},c=i.d.input.withConfig({displayName:"styles__Input",componentId:"sc-1argoy3-0"})(["",""],(function(e){return a(e)})),s=i.d.textarea.withConfig({displayName:"styles__TextArea",componentId:"sc-1argoy3-1"})(["",""],(function(e){return a(e)}));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){return e.textArea?Object(o.jsx)(s,u({onChange:e.onChange,value:e.value},e)):Object(o.jsx)(c,u({onChange:e.onChange,value:e.value},e))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},mPvQ:function(e,t,r){var n=r("5fIB"),o=r("rlHP"),i=r("KckH"),a=r("kG2m");e.exports=function(e){return n(e)||o(e)||i(e)||a()}},nqMI:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),i=r("HaE+"),a=r("ODXe"),c=r("nKUr"),s=r("mIKr"),l=r("vOnD"),u=l.d.div.withConfig({displayName:"Cadastro__Container",componentId:"sc-1d1024t-0"})(["",""],(function(e){var t=e.theme;return Object(l.c)(["input,button{outline:0;}.sub-container{display:flex;width:100%;max-width:1600px;height:100vh;max-height:850px;margin:auto;align-self:center;justify-self:center;justify-content:space-between;}.go2login{display:flex;min-height:100%;width:40%;padding:"," ",";justify-content:center;.content{display:flex;height:100%;flex-direction:column;align-items:flex-start;justify-content:space-between;button{border-radius:50px;}}.text-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;a{text-decoration:none;}}}.register-wrapper{height:100%;flex:1;background:rgb(177,131,50);background:linear-gradient(180deg,rgba(177,131,50,1) 7%,rgba(177,131,50,0.5746673669467788) 48%,rgba(177,131,50,1) 91%);padding:"," ",";display:grid;grid-template-columns:1fr 1fr;gap:10px;justify-content:flex-start;align-items:flex-start;grid-template-areas:'title title' '. .' '. .' 'name name' 'email phone' 'address number' 'street street' 'password password' '. .' 'send send';input{width:100%;}.title{grid-area:title;}.icons{display:flex;align-items:center;justify-content:center;grid-area:icons;.icon-wrapper{display:none;justify-content:center;align-items:center;color:",";margin:",";font-size:",";border:2px solid ",";height:50px;width:50px;border-radius:50%;cursor:pointer;}}input{margin-top:10px;}.text{display:none;grid-area:text;}.name{grid-area:name;padding:0 ",";}.street{grid-area:street;padding:0 ",";}.state{grid-area:state;padding:0 "," 0 0;}.city{grid-area:city;padding:0 "," 0 0;}.neighborhood{grid-area:neighborhood;padding:0 0 0 ",";}.number{grid-area:number;padding:0 "," 0 0;}.email{grid-area:email;padding:0 0 0 ",";}.phone{grid-area:phone;padding:0 "," 0 0;}.address{grid-area:address;padding:0 0 0 ",";}.password{grid-area:password;padding:0 ",";}.send{display:flex;align-items:center;justify-content:center;grid-area:send;button{width:60%;border-radius:50px:}}}.go2login-mobile{display:none;top:0;width:100%;text-align:center;padding:",";background-color:",";font-size:",";font-family:",";border-radius:0 0 20px 20px;}@media (min-width:1600px){flex:1;min-height:100vh;display:flex;justify-content:center;align-items:center;background-color:",";.register-wrapper{border-radius:0 50px 50px 0;}.go2login{background-color:",";border-radius:50px 0 0 50px;}}@media (max-width:","){.sub-container{flex-direction:column;}.go2login{display:none;}.go2login-mobile-wrapper{display:flex;align-items:center;justify-content:center;background-color:",";width:100%;a{color:",";font-weight:bold;}}.go2login-mobile{display:flex;justify-content:center;align-items:center;}.register-wrapper{height:auto;grid-template-areas:'title title' 'name name' 'email email' 'phone phone' 'address number' 'street street' 'password password' '. .' '. .' 'send send';gap:5px;padding:",";.title h2{font-size:",";}.name{grid-area:name;padding:0;}.email{grid-area:email;padding:0;}.phone{grid-area:phone;padding:0;}.address{grid-area:address;padding:0;}.street,.city,.state,.neighborhood,.number{padding:0;}.password{grid-area:password;padding:0;}.send{display:flex;align-items:center;justify-content:center;grid-area:send;}}}@media (max-width:","){}"],t.spacings.small,t.spacings.xlarge,t.spacings.xxgiant,t.spacings.xxxgiant,t.colors.white100,t.spacings.xsmall,t.font.sizes.xxlarge,t.colors.white100,t.spacings.large,t.spacings.large,t.spacings.large,t.spacings.large,t.spacings.large,t.spacings.large,t.spacings.large,t.spacings.large,t.spacings.large,t.spacings.large,t.spacings.xsmall,t.colors.silver,t.font.sizes.xlarge,t.font.family.ubuntu,t.colors.white100,t.colors.silver,t.breakPoints.tablet,t.colors.brown,t.colors.black,t.spacings.xsmall,t.font.sizes.extra,t.breakPoints.mobileL)})),d=r("HvvW"),f=r("B3q3"),p=r("Aiso"),h=r.n(p),g=r("Tgqd"),b=r("+jxT"),m=r("YFqc"),v=r.n(m),j=r("8Rtz"),y=r("xEs0"),w=r("jsCw"),O=r("q1tI"),x=r("Dp36"),S=r("2ZRA"),P=r("20a2"),E=r("baic"),A=r.n(E),C=r("r5vi"),z=r("LG9w");t.default=function(){var e=Object(O.useState)(""),t=e[0],r=e[1],n=Object(O.useState)(""),l=n[0],p=n[1],m=Object(O.useState)(""),E=m[0],k=m[1],_=Object(O.useState)(""),N=_[0],D=_[1],I=Object(O.useState)(""),W=I[0],T=I[1],q=Object(O.useState)(""),B=q[0],R=q[1],U=Object(O.useState)(""),L=U[0],H=U[1],F=Object(O.useState)(""),M=F[0],V=F[1],G=Object(O.useState)(""),K=G[0],X=G[1],J=Object(O.useState)(""),Y=J[0],Q=J[1],Z=Object(S.b)(),$=(Z.token,Z.setToken),ee=Z.setUser,te=Object(C.a)(["user"]),re=Object(a.a)(te,2),ne=(re[0],re[1]),oe=Object(O.useState)(!1),ie=oe[0],ae=oe[1],ce=Object(P.useRouter)(),se=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(N.length<8)){e.next=3;break}return alert("cep incompleto"),e.abrupt("return");case 3:if(""!==t&&""!==l&&""!==Y&&""!==E&&""!==N&&""!==W&&""!==B&&""!==L&&""!==M){e.next=8;break}return alert("dados incompletos"),e.abrupt("return");case 8:if(!(N.length<8)){e.next=13;break}return alert("cep incompleto"),e.abrupt("return");case 13:if(!ie){e.next=16;break}return alert("cep invalido, por favor confira seus dados"),e.abrupt("return");case 16:return e.next=18,x.a.post("/user",{username:t,email:l,password:Y,fone:E,endereco:{cep:N,rua:W,bairro:B,cidade:L,UF:K,numero:M}}).then((function(e){var t,r=e.data,n=r.user;console.log(e.data);var o={username:n.username,email:n.email,phone:n.phone,endereco:n.endereco,photo:null===(t=n.foto)||void 0===t?void 0:t.url,favorites:n.favoritos.produtos.map((function(e){return e.id}))};$(r.jwt),ee(o),ne("token",r.jwt,{path:"/",maxAge:604800,sameSite:!0}),ne("user",o,{path:"/",maxAge:604800,sameSite:!0}),ce.push("/dashboard/pedidos")})).catch((function(e){console.log(e)}));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(!0),e.next=3,A()(N).then((function(e){var t=e.state,r=e.city,n=e.street,o=e.neighborhood;X(t),H(r),T(n),R(o),ae(!1)})).catch((function(){alert("cep invalido"),ae(!0)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){8===N.length&&le()}),[N]),Object(c.jsx)(u,{children:Object(c.jsxs)("div",{className:"sub-container",children:[Object(c.jsx)("div",{className:"go2login",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"logo-wrapper",onClick:function(){ce.push("/")},children:Object(c.jsx)(h.a,{src:"/img/logo.webp",height:40,width:140})}),Object(c.jsxs)("div",{className:"text-wrapper",children:[Object(c.jsx)(s.a,{font:"ubuntu",fontWeight:"bold",fontSize:"max",justify:"center",lineBottom:!1,role:"h2",children:"Voc\xea por aqui! :)"}),Object(c.jsxs)(d.a,{fontWeight:"semiBold",justify:"center",textAlign:"center",font:"ubuntu",fontSize:"large",margin:"20px 0 30px 0",children:["Para se manter conectado conosco, ",Object(c.jsx)("br",{})," por favor fa\xe7a seu login"]}),Object(c.jsx)(v.a,{href:"/login",passHref:!0,children:Object(c.jsx)("a",{children:Object(c.jsx)(f.a,{radius:50,fontSize:"large",fontWeight:"semiBold",outline:!0,color:"black",children:"LOGIN"})})})]}),"\xa0"]})}),Object(c.jsx)("div",{className:"go2login-mobile-wrapper",children:Object(c.jsxs)("div",{className:"go2login-mobile",children:["Voc\xea por aqui! :) \xa0",Object(c.jsx)(j.a,{href:"/login",color:"white100",fontSize:"xlarge",fontWeight:"semiBold",children:"Login"})]})}),Object(c.jsxs)("div",{className:"register-wrapper",children:[Object(c.jsx)("div",{className:"title",children:Object(c.jsx)(s.a,{justify:"center",color:"white100",fontSize:"max",margin:"0",lineBottom:!1,children:"Fa\xe7a seu cadastro"})}),Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)("div",{className:"icon-wrapper",children:Object(c.jsx)(g.e,{})}),Object(c.jsx)("div",{className:"icon-wrapper",children:Object(c.jsx)(b.a,{})})]}),Object(c.jsx)("div",{className:"text",children:Object(c.jsx)(d.a,{justify:"center",textAlign:"center",font:"ubuntu",fontSize:"xlarge",children:"ou use seu email para se registrar"})}),Object(c.jsx)("div",{className:"name",children:Object(c.jsxs)(y.a,{color:"white100",fontWeight:"bold",fontSize:"large",children:["\xa0 NOME",Object(c.jsx)(w.a,{radius:50,height:45,value:t,borderColor:"white100",onChange:function(e){return r(e.target.value)}})]})}),Object(c.jsx)("div",{className:"email",children:Object(c.jsxs)(y.a,{color:"white100",fontWeight:"bold",fontSize:"large",children:["\xa0 EMAIL",Object(c.jsx)(w.a,{radius:50,height:45,value:l,borderColor:"white100",onChange:function(e){return p(e.target.value)}})]})}),Object(c.jsx)("div",{className:"phone",children:Object(c.jsxs)(y.a,{color:"white100",fontWeight:"bold",fontSize:"large",children:["\xa0 CELULAR",Object(c.jsx)(w.a,{radius:50,height:45,borderColor:"white100",value:E,onChange:function(e){return k(e.target.value)}})]})}),Object(c.jsx)("div",{className:"address",children:Object(c.jsxs)(y.a,{color:"white100",fontWeight:"bold",fontSize:"large",children:["\xa0 CEP",Object(c.jsx)(w.a,{radius:50,height:45,borderColor:"white100",value:N,onChange:function(e){return D(Object(z.a)(e.target.value))},maxLength:8})]})}),Object(c.jsx)("div",{className:"number",children:Object(c.jsxs)(y.a,{color:"white100",fontWeight:"bold",fontSize:"large",children:["\xa0 N\xb0",Object(c.jsx)(w.a,{radius:50,height:45,borderColor:"white100",value:M,onChange:function(e){return V(e.target.value)},maxLength:8})]})}),""!==W&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"street",children:Object(c.jsxs)(y.a,{color:"white100",fontWeight:"bold",fontSize:"large",children:["\xa0 ENDERE\xc7O",Object(c.jsx)(w.a,{radius:50,height:45,borderColor:"white100",value:"".concat(W,",  ").concat(B,",  ").concat(L,",  ").concat(K),readOnly:!0,maxLength:8})]})})}),Object(c.jsx)("div",{className:"password",children:Object(c.jsxs)(y.a,{color:"white100",fontWeight:"bold",fontSize:"large",children:["\xa0 SENHA",Object(c.jsx)(w.a,{radius:50,height:45,borderColor:"white100",value:Y,onChange:function(e){return Q(e.target.value)}})]})}),Object(c.jsx)("div",{className:"send",children:Object(c.jsx)(f.a,{radius:50,fill:"red100",fontSize:"xlarge",onClick:se,children:"ENVIAR"})})]})]})})}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},xEs0:function(e,t,r){"use strict";var n=r("rePB"),o=r("nKUr"),i=r("vOnD"),a=i.d.label.withConfig({displayName:"styles__Wrapper",componentId:"rph56-0"})(["",""],(function(e){var t=e.theme,r=e.color,n=void 0===r?"black":r,o=e.fontSize,a=void 0===o?"large":o,c=e.font,s=void 0===c?"roboto":c,l=e.fontWeight,u=void 0===l?"normal":l,d=e.margin;return Object(i.c)(["display:flex;flex-direction:column;font-size:",";color:",";font-family:",";font-weight:",";",""],t.font.sizes[a],t.colors[n],t.font.family[s],t.font[u],d&&Object(i.c)(["margin:",";"],d))}));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){return Object(o.jsx)(a,s(s({},e),{},{children:e.children}))}}},[["XUPA",0,2,19,1,3,4,5,10]]]);