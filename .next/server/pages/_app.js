module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "2ZRA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useStateContext; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/utils/handleCart.ts
const CART_KEY = '@lojinhaShoppingCart';
/* harmony default export */ var handleCart = ({
  getCart() {
    const productsString = localStorage.getItem(CART_KEY);

    if (!productsString) {
      return {
        products: [],
        total: 0
      };
    }

    const productsJson = this.jsonParseProducts(productsString);
    return productsJson;
  },

  addToCart(cart) {
    const productString = this.stringfyProducts(cart);
    localStorage.setItem(CART_KEY, productString);
  },

  stringfyProducts(products) {
    return JSON.stringify(products);
  },

  jsonParseProducts(productsString) {
    return JSON.parse(productsString);
  }

});
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// CONCATENATED MODULE: ./src/context/index.tsx




const Context = /*#__PURE__*/Object(external_react_["createContext"])(null);

const StatesProvider = ({
  children
}) => {
  const {
    0: server,
    1: setServer
  } = Object(external_react_["useState"])('');
  const {
    0: cart,
    1: setCart
  } = Object(external_react_["useState"])({
    products: [],
    total: 0
  });
  const {
    0: token,
    1: setToken
  } = Object(external_react_["useState"])(null);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(true);
  const [cookie, setCookie] = Object(external_react_cookie_["useCookies"])(['user']);
  Object(external_react_["useEffect"])(() => {
    if (!isLoading) {
      handleCart.addToCart(cart);
      setCookie('cart', cart, {
        path: '/',
        maxAge: 604800,
        // Expires after 1hr
        sameSite: true
      });
    }
  }, [cart]);
  Object(external_react_["useEffect"])(() => {
    setIsLoading(false);
    setCart(handleCart.getCart());
    setUser(cookie.user);
    setCookie('cart', handleCart.getCart(), {
      path: '/',
      maxAge: 604800,
      // Expires after 1hr
      sameSite: true
    });
    setServer( true ? "https://adm.jgemporiodamalha.com" : undefined);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Context.Provider, {
    value: {
      server,
      token,
      setToken,
      user,
      setUser,
      cart,
      setCart
    },
    children: children
  });
};

/* harmony default export */ var src_context = __webpack_exports__["a"] = (StatesProvider);
const useStateContext = () => {
  const context = Object(external_react_["useContext"])(Context);

  if (!context) {
    throw new Error('Use count precisa estar dentro de um provider');
  }

  const {
    server,
    token,
    setToken,
    user,
    setUser,
    cart,
    setCart
  } = context;
  return {
    server,
    token,
    setToken,
    user,
    setUser,
    cart,
    setCart
  };
};

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Dxod":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fA44":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useApollo; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dxod");
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);


 // import apolloCache from './apolloCache'

let apolloClient;

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    ssrMode: true,
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
      uri: `${"https://adm.jgemporiodamalha.com"}/graphql`
    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            produtos: Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__["concatPagination"])(['where', 'sort'])
          }
        }
      }
    })
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient, _apolloClient2;

  // serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobal = (_apolloClient = apolloClient) !== null && _apolloClient !== void 0 ? _apolloClient : createApolloClient(); // se a página usar o apolloClient no lado client
  // hidratamos o estado inicial aqui

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  } // sempre inicializando no SSR com cache limpo


  if (true) return apolloClientGlobal; // cria o apolloClient se estiver no client side

  apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : apolloClientGlobal;
  return apolloClient;
}
function useApollo(initialState = null) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./src/styles/global.ts

const GlobalStyles = external_styled_components_["createGlobalStyle"]`

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v20-latin-300.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v20-latin-300.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/roboto-v20-latin-300.woff')
        format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v20-latin-300.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('/fonts/roboto-v20-latin-300.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v20-latin-regular.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/roboto-v20-latin-regular.woff')
        format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v20-latin-regular.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v20-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-500 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v20-latin-500.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v20-latin-500.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/roboto-v20-latin-500.woff')
        format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v20-latin-500.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('/fonts/roboto-v20-latin-500.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v20-latin-700.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v20-latin-700.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/roboto-v20-latin-700.woff')
        format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v20-latin-700.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('/fonts/roboto-v20-latin-700.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* ubuntu-300 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''), url('/fonts/ubuntu-v15-latin-300.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/ubuntu-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* ubuntu-regular - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''), url('/fonts/ubuntu-v15-latin-regular.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/ubuntu-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* ubuntu-500 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''), url('/fonts/ubuntu-v15-latin-500.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/ubuntu-v15-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* ubuntu-700 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('/fonts/ubuntu-v15-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/ubuntu-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* roboto-condensed-300 - latin */
  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
      url('/fonts/roboto-condensed-v19-latin-300.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/roboto-condensed-v19-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-condensed-regular - latin */
  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/fonts/roboto-condensed-v19-latin-regular.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/roboto-condensed-v19-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-condensed-700 - latin */
  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
      url('/fonts/roboto-condensed-v19-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/roboto-condensed-v19-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({
  theme
}) => Object(external_styled_components_["css"])(["html{font-size:62.5%;}html,body,#__next{height:100%;}body{font-family:", ";font-size:", ";background-color:", ";}@media (max-width:1024px){html{font-size:60%;}}@media (max-width:768px){html{font-size:58%;}}@media (max-width:330px){html{font-size:52%;}}"], theme.font.family.roboto, theme.font.sizes.medium, theme.colors.white300)}
`;
/* harmony default export */ var global = (GlobalStyles);
// EXTERNAL MODULE: ./src/context/index.tsx + 1 modules
var context = __webpack_require__("2ZRA");

// CONCATENATED MODULE: ./src/styles/theme.ts
/* harmony default export */ var styles_theme = ({
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: {
      small: '5px',
      medium: '10px',
      large: '15px',
      rounded: '20px'
    }
  },
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
  font: {
    family: {
      ubuntu: "Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      roboto: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      robotoCondensed: "'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    light: '300',
    normal: '400',
    semiBold: '500',
    bold: '600',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.2rem',
      xxlarge: '2.4rem',
      xxxlarge: '2.8rem',
      extra: '3.2rem',
      max: '4.2rem',
      xmax: '4.4rem',
      xxmax: '4.8rem',
      xxxmax: '5.2rem'
    }
  },
  colors: {
    silver: '#f1f1f1',
    white100: '#FCFCFC',
    white200: '#FBFBFB',
    white300: '#F6F6F6',
    black: '#000000',
    orange: '#FF5A00',
    cyan: '#03989E',
    green: '#23B229',
    gray50: '#CDCDCD',
    gray100: '#4B4E51',
    gray200: '#2F2A20',
    gray300: '#22282F',
    brown: '#B18332',
    yellow100: '#F6F979',
    yellow200: '#F8E535',
    yellow300: '#FDE610',
    red100: '#E8002B',
    red200: '#8A0824',
    red300: '#5F1420',
    blue100: '#232452',
    blue200: '#1A0F4C',
    blue300: '#0D0B1A',
    green100: '#03989E',
    defaultGradient: 'linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0) 100%), #22282F;'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '6.4rem',
    giant: '7.2rem',
    xgiant: '8.0rem',
    xxgiant: '8.8rem',
    xxxgiant: '9.6rem',
    wrapper: '15rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  breakPoints: {
    laptopS: '1204px',
    tablet: '900px',
    mobileL: '460px',
    mobileM: '375px',
    mobileS: '320px'
  }
});
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: ./src/utils/apollo.ts
var apollo = __webpack_require__("fA44");

// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function App({
  Component,
  pageProps
}) {
  const client = Object(apollo["b" /* useApollo */])(pageProps.initialApolloState);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_cookie_["CookiesProvider"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(client_["ApolloProvider"], {
      client: client,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_styled_components_["ThemeProvider"], {
        theme: styles_theme,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(context["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
              children: "JG Emp\xF3rio da malha"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              property: "og:site_name",
              content: "JG Emp\xF3rio da malha"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              property: "og:title",
              content: "JG Emp\xF3rio da malha"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              name: "description",
              content: "Comprar camisetas de time importadas \xE9 na JG emp\xF3rio da malha. Compre agora o manto do seu time do cora\xE7\xE3o. "
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              property: "og:description",
              content: "Comprar camisetas de time importadas \xE9 na JG emp\xF3rio da malha. Compre agora o manto do seu time do cora\xE7\xE3o."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              property: "og:image",
              content: "/img/bannerHome1.jpeg"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              property: "og:image:type",
              content: "image/jpeg"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              property: "og:type",
              content: "website"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              property: "og:locale",
              content: "pt_BR"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/img/apple-touch-icon.png"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/img/favicon-32x32.png"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/img/favicon-16x16.png"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
              rel: "mask-icon",
              href: "/img/safari-pinned-tab.svg",
              color: "#5bbad5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              name: "msapplication-TileColor",
              content: "#da532c"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              name: "theme-color",
              content: "#ffffff"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
              rel: "manifest",
              href: "/manifest.json"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(global, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
        })
      })
    })
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });