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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nXCz");


/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B3q3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Button/styles.ts

const Wrapper = external_styled_components_default.a.button.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1oc9oxe-0"
})(["", ""], ({
  theme,
  fill = 'brown',
  color = 'white100',
  radius = 0,
  font = 'roboto',
  outline,
  fontSize,
  fontWeight
}) => Object(external_styled_components_["css"])(["outline:0;border:0;cursor:pointer;padding:", " ", ";background-color:", ";color:", ";font-weight:", ";border-radius:", ";font-family:", ";display:flex;justify-content:center;align-items:center;", " ", " ", " ", ""], theme.spacings.xsmall, theme.spacings.medium, theme.colors[fill], theme.colors[color], theme.font.bold, radius, theme.font.family[font], radius && Object(external_styled_components_["css"])(["border-radius:", "px;"], radius), fontWeight && Object(external_styled_components_["css"])(["font-weight:", ";"], theme.font[fontWeight]), fontSize && Object(external_styled_components_["css"])(["font-size:", ";"], theme.font.sizes[fontSize]), outline && Object(external_styled_components_["css"])(["border:2px black solid;background:transparent;"])));
// CONCATENATED MODULE: ./src/components/Button/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Button = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

/* harmony default export */ var components_Button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

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

/***/ "JRgX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategorias; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const getCategorias = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getCategorias {
    categorias {
      nome
    }
    marcas {
      nome
    }
  }
`;

/***/ }),

/***/ "LJuI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/components/PaddingWrapper/index.tsx + 1 modules
var PaddingWrapper = __webpack_require__("hniv");

// EXTERNAL MODULE: ./src/components/Button/index.tsx + 1 modules
var Button = __webpack_require__("B3q3");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Header/styles.ts

const Wrapper = external_styled_components_default.a.header.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1iql305-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["background:rgb(0,0,0);background:linear-gradient( 180deg,rgba(0,0,0,1) 7%,rgba(23,27,32,1) 18%,rgba(34,40,47,0.865983893557423) 85% );height:190px;width:100%;z-index:10;position:relative;display:inline-block;.menu-mobile{position:absolute;width:100%;transition:0.3s;}.hide{transition:0.3s;height:0px;overflow:hidden;margin-bottom:-20px;}.mobile{display:none;}@media (max-width:", "){.mobile{display:unset;}.desktop{display:none;}}"], theme.breakPoints.tablet));
const Logo = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-1iql305-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:180px;height:100px;grid-area:logo;@media (max-width:", "){width:120px;height:70px;margin-bottom:-10px;}"], theme.breakPoints.mobileL));
const GradientWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__GradientWrapper",
  componentId: "sc-1iql305-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;"]));
const ContactWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ContactWrapper",
  componentId: "sc-1iql305-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;display:flex;padding:", " 0 0 0;justify-content:space-between;.social-media{width:60px;display:flex;justify-content:space-between;}.contact{display:flex;justify-content:space-between;}.divisor{width:50px;width:2px;background-color:", ";margin:0 ", ";}"], theme.spacings.small, theme.colors.yellow300, theme.spacings.xxsmall));
const SearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SearchWrapper",
  componentId: "sc-1iql305-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;display:flex;justify-content:space-between;align-items:center;.left,.right{display:none;}.left{grid-area:left;}.right{grid-area:right;}.left,.right{justify-content:space-between;width:50%;height:100%;align-items:flex-end;margin:auto;min-width:80px;.menu,.cart,.favorite,.login{font-size:", ";cursor:pointer;display:flex;height:100%;align-items:flex-end;}.favorite{display:flex;color:", ";font-size:", ";align-items:flex-end;height:100%;}.login{display:flex;height:100%;align-items:flex-end;color:", ";font-size:", ";svg{color:", ";font-size:", ";}}.cart{color:", ";display:flex;a{color:", ";margin:0;padding:0;margin-bottom:-6px;}}.menu{color:", ";}}.logo{grid-area:logo;}@media (max-width:", "){display:grid;grid-template-columns:repeat(3,1fr);grid-template-areas:'left logo right';align-items:center;justify-content:space-between;.right,.left{display:flex;}}"], theme.font.sizes.xxxlarge, theme.colors.yellow300, theme.font.sizes.large, theme.colors.white100, theme.font.sizes.small, theme.colors.yellow300, theme.font.sizes.medium, theme.colors.yellow300, theme.colors.yellow300, theme.colors.white100, theme.breakPoints.tablet));
const ExteralLink = external_styled_components_default.a.a.withConfig({
  displayName: "styles__ExteralLink",
  componentId: "sc-1iql305-5"
})(["", ""], ({
  theme,
  iconColor = 'white100'
}) => Object(external_styled_components_["css"])(["color:", ";text-decoration:none;display:flex;align-items:center;cursor:pointer;svg{font-size:", ";color:", ";}"], theme.colors.white100, theme.font.sizes.xlarge, theme.colors[iconColor]));
const NavWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__NavWrapper",
  componentId: "sc-1iql305-6"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;background-color:", ";position:absolute;bottom:0;height:50px;"], theme.colors.yellow300));
const SearchInputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SearchInputWrapper",
  componentId: "sc-1iql305-7"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["background-color:", ";border-radius:10px;width:50%;display:flex;justify-content:space-between;input{border:0;border-radius:10px;width:calc(90% - 100px);}button{padding:1.2rem 2rem;}"], theme.colors.white100));
const NavSubWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__NavSubWrapper",
  componentId: "sc-1iql305-8"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;height:50px;display:flex;justify-content:space-between;align-items:center;@media (max-width:", "){justify-content:center;.input-wrapper{width:100%;display:flex;justify-content:space-between;background-color:", ";border-radius:5px;input{border:0;width:calc(100% - 50px);height:20px;background-color:", ";border-radius:5px;}button{padding:0.4rem 1.1rem;}}}"], theme.breakPoints.tablet, theme.colors.white100, theme.colors.white100));
const CategoriesWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CategoriesWrapper",
  componentId: "sc-1iql305-9"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["height:50px;background-color:", ";display:flex;align-items:center;justify-content:center;font-size:", ";padding:0 ", ";color:", ";white-space:nowrap;"], theme.colors.brown, theme.font.sizes.xsmall, theme.spacings.xxsmall, theme.colors.white100));
const Nav = external_styled_components_default.a.nav.withConfig({
  displayName: "styles__Nav",
  componentId: "sc-1iql305-10"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["ul{display:flex;list-style:none;align-items:center;}ul li{padding:0 ", ";display:flex;}ul li:last-child{padding:0 0 0 ", ";}ul li a{color:", ";font-weight:", ";white-space:nowrap;}"], theme.spacings.xsmall, theme.spacings.xsmall, theme.colors.black, theme.font.semiBold));
const Dropdown = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Dropdown",
  componentId: "sc-1iql305-11"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["position:relative;display:inline-block;.menu{display:none;}:hover{.menu{display:flex;}}"]));
const DropMenu = external_styled_components_default.a.div.withConfig({
  displayName: "styles__DropMenu",
  componentId: "sc-1iql305-12"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["position:absolute;width:100%;background-color:#fff;padding:", " ", ";display:flex;flex-direction:column;ul{list-style:none;}ul li{display:flex;flex-direction:column;}ul li a{text-decoration:none;color:", ";margin-bottom:", ";text-align:center;cursor:pointer;:hover{transition:100ms;color:", ";}}"], theme.spacings.xsmall, theme.spacings.small, theme.colors.gray300, theme.spacings.xxsmall, theme.colors.brown));
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: ./src/components/Input/index.tsx + 1 modules
var Input = __webpack_require__("jsCw");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/MenuMobile/styles.ts

const styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "g6hyhs-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["transition:1s;background-color:", ";width:100%;z-index:10;a{text-decoration:none;}"], theme.colors.white100));
const AccountWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__AccountWrapper",
  componentId: "g6hyhs-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;justify-content:space-between;align-items:flex-start;padding:", ";border-bottom:2px solid ", ";height:100px;button{width:150px;}"], theme.spacings.small, theme.colors.gray50));
const NavigationLink = external_styled_components_default.a.a.withConfig({
  displayName: "styles__NavigationLink",
  componentId: "g6hyhs-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;justify-content:space-between;align-items:center;font-size:", ";font-weight:", ";padding:", ";border-bottom:2px solid ", ";height:70px;svg{color:", ";font-size:", ";}"], theme.font.sizes.xxlarge, theme.font.semiBold, theme.spacings.small, theme.colors.gray50, theme.colors.brown, theme.font.sizes.max));
const DefaultPagesNavigationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__DefaultPagesNavigationWrapper",
  componentId: "g6hyhs-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;padding:", ";background:rgb(0,0,0);background:linear-gradient( 180deg,rgba(0,0,0,1) 7%,rgba(23,27,32,1) 18%,rgba(34,40,47,0.865983893557423) 85% );display:flex;flex-direction:column;"], theme.spacings.small));
const DefaultLink = external_styled_components_default.a.a.withConfig({
  displayName: "styles__DefaultLink",
  componentId: "g6hyhs-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["color:", ";font-size:", ";margin:", " 0;"], theme.colors.white100, theme.font.sizes.xxlarge, theme.spacings.xsmall));
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// CONCATENATED MODULE: ./src/components/MenuMobile/index.tsx








const MenuMobile = ({
  categorias = []
}) => {
  const [cookie, setCookie] = Object(external_react_cookie_["useCookies"])(['user']);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Wrapper, {
    children: [!cookie.user && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AccountWrapper, {
      className: "mobile-account-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            fill: "gray100",
            children: "Login"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/cadastro",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            children: "Cadastro"
          })
        })
      })]
    }), categorias.map((categoria, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: `/loja?categorias=${categoria.nome}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavigationLink, {
        children: [categoria.nome, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoIosArrowForward"], {})]
      })
    }, index)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DefaultPagesNavigationWrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DefaultLink, {
          children: "Home"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/dashboard/pedidos",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DefaultLink, {
          children: "Meus Pedidos"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/favoritos",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DefaultLink, {
          children: "Meus Favoritos"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/sobre",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DefaultLink, {
          children: "Sobre N\xF3s"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/contato",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DefaultLink, {
          children: "Nos Contate"
        })
      })]
    })]
  });
};

/* harmony default export */ var components_MenuMobile = (MenuMobile);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__("tMJi");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/components/Header/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const Header = ({
  categorias = []
}) => {
  var _jwt$decode, _jwt$decode2;

  const [cookie, setCookie] = Object(external_react_cookie_["useCookies"])(['user']);
  const {
    push,
    query,
    reload
  } = Object(router_["useRouter"])();
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const {
    nome_contains
  } = query;
  const {
    0: search,
    1: setSearch
  } = Object(external_react_["useState"])(nome_contains);

  const handleFilter = async () => {
    const searchQuery = query;
    delete searchQuery.slug;
    await push({
      pathname: '/loja',
      query: _objectSpread(_objectSpread({}, searchQuery), {}, {
        nome_contains: search
      })
    }); // reload()
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(PaddingWrapper["a" /* default */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContactWrapper, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "social-media",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
            href: "https://www.facebook.com/jgemporiodamalha",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaFacebookF"], {})
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
            href: "https://www.instagram.com/jeffersonegisele/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaInstagram"], {})
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "contact",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(ExteralLink, {
            href: "tel: 98127-6336",
            className: "desktop",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiPhone"], {}), " \xA0 (11) 98127-6336"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
            href: "tel: 98127-6336",
            className: "mobile",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiPhone"], {})
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "divisor"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ExteralLink, {
            href: "mailto: contato@jgemporiodamalha.com",
            className: "desktop",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiMail"], {}), " \xA0 contato@jgemporiodamalha.com"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
            href: "mailto: contato@jgemporiodamalha.com",
            className: "mobile",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiMail"], {})
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SearchWrapper, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {
              src: "/img/logo3.png",
              alt: "JG"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SearchInputWrapper, {
          className: "desktop",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
            value: search,
            onChange: e => setSearch(e.target.value)
          }), "\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            onClick: handleFilter,
            radius: 10,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiSearch"], {})
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "right mobile",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "login",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/dashboard/pedidos",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ExteralLink, {
                children: [cookie.token ? 'Perfil' : 'Login', " \xA0 ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoIosArrowDown"], {})]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "favorite",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
              iconColor: "yellow300",
              href: cookie.token ? `/favoritos/${(_jwt$decode = external_jsonwebtoken_default.a.decode(cookie.token)) === null || _jwt$decode === void 0 ? void 0 : _jwt$decode.id}` : '/login',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiHeart"], {})
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "left mobile",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "menu",
            onClick: () => {
              setShow(!show); // alert('foi')
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiMenu"], {})
          }), "\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "cart",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/carrinho",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiShoppingCart"], {})
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "my-acount",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/pedidos",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ExteralLink, {
              iconColor: "yellow300",
              className: "desktop",
              children: ["Minha conta \xA0 ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoIosArrowDown"], {}), ' ']
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "shopping-cart",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/carrinho",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
              iconColor: "yellow300",
              className: "desktop",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiShoppingCart"], {})
            })
          })
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavWrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PaddingWrapper["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavSubWrapper, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dropdown, {
            className: "desktop",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(CategoriesWrapper, {
              children: [' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiMenu"], {}), " \xA0 TODAS AS CATEGORIAS"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropMenu, {
              className: "menu",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
                children: categorias.map((categoria, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: `/loja?categorias=${categoria.nome.replace(' ', '+')}`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: categoria.nome
                    })
                  })
                }, index))
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav, {
            className: "desktop",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
                    children: "Home"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/loja",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
                    children: "Explorar"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/sobre",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
                    children: "Sobre N\xF3s"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "contato",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
                    children: "Nos Contate"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: cookie.token ? `/favoritos/${(_jwt$decode2 = external_jsonwebtoken_default.a.decode(cookie.token)) === null || _jwt$decode2 === void 0 ? void 0 : _jwt$decode2.id}` : '/login',
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExteralLink, {
                    children: "Meus Favoritos"
                  })
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "input-wrapper mobile",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
              value: search,
              onChange: e => setSearch(e.target.value)
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              radius: 5,
              onClick: handleFilter,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiSearch"], {})
            })]
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `menu-mobile ${show ? '' : 'hide'} mobile`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MenuMobile, {
          categorias: categorias
        })
      })]
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./src/components/Heading/index.tsx + 1 modules
var Heading = __webpack_require__("mIKr");

// CONCATENATED MODULE: ./src/components/Footer/styles.ts

const Footer_styles_Wrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "styles__Wrapper",
  componentId: "tjtmh5-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["background:rgb(0,0,0);background:linear-gradient( 180deg,rgba(0,0,0,1) 7%,rgba(23,27,32,1) 18%,rgba(34,40,47,0.865983893557423) 85% );padding:", " 0;"], theme.spacings.small));
const MailForm = external_styled_components_default.a.form.withConfig({
  displayName: "styles__MailForm",
  componentId: "tjtmh5-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;display:grid;gap:", ";grid-template-columns:0.8fr 1.3fr 0.4fr;grid-template-rows:40px;margin-top:", ";.center{align-items:center;justify-content:center;justify-items:stretch;}input{width:100%;}button{width:100%;}"], theme.spacings.xsmall, theme.spacings.small));
const NavsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__NavsContainer",
  componentId: "tjtmh5-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;display:flex;justify-content:space-between;@media (max-width:", "){align-items:center;flex-direction:column;}"], theme.breakPoints.tablet));
const styles_Nav = external_styled_components_default.a.nav.withConfig({
  displayName: "styles__Nav",
  componentId: "tjtmh5-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;flex-direction:column;justify-content:flex-start;text-align:center;margin-bottom:", ";"], theme.spacings.medium));
const styles_NavigationLink = external_styled_components_default.a.a.withConfig({
  displayName: "styles__NavigationLink",
  componentId: "tjtmh5-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["color:", ";font-size:", ";padding:", " 0;text-decoration:none;display:flex;align-items:center;text-align:center;justify-content:center;cursor:pointer;svg{font-size:", ";}"], theme.colors.white100, theme.font.sizes.small, theme.spacings.xxsmall, theme.font.sizes.medium));
const SocialMediaContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SocialMediaContainer",
  componentId: "tjtmh5-5"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;justify-content:space-around;padding-bottom:", ";position:relative;margin-bottom:", ";&::after{width:100%;position:absolute;border:1px solid ", ";content:' ';bottom:0;}.social-media{border:2px ", " solid;height:50px;width:50px;display:flex;justify-content:center;align-items:center;}"], theme.spacings.small, theme.spacings.xsmall, theme.colors.brown, theme.colors.white100));
// EXTERNAL MODULE: ./src/styles/pages/home.ts
var home = __webpack_require__("X/Qf");

// CONCATENATED MODULE: ./src/components/Footer/index.tsx









 // import CopyAndPayment from 'components/CopyAndPayment'



const Footer = ({
  categorias = []
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_styles_Wrapper, {
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(PaddingWrapper["a" /* default */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
      color: "white100",
      lineBottom: false,
      textAlign: "center",
      role: "h2",
      fontWeight: "semiBold",
      margin: "0 0 50px 0",
      children: "RECEBA NOSSAS OFERTAS POR EMAIL"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MailForm, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
        fontSize: "large",
        fontWeight: "semiBold",
        children: "Enviar"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(home["a" /* HorizontalPaddingWrapper */], {
      padding: "large",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavsContainer, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Nav, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            role: "h3",
            margin: "0 0 30px 0",
            lineBottom: false,
            color: "white100",
            children: "CATEGORIAS"
          }), categorias.map((categoria, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/loja?categorias=${categoria.nome}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
              children: categoria.nome
            })
          }, index))]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Nav, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            role: "h3",
            lineBottom: false,
            color: "white100",
            fontWeight: "semiBold",
            margin: "0 0 30px 0",
            children: "MINHA CONTA"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/cadastro",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
              children: "Criar conta"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/dados-pessoais",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
              children: "Minha conta"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/pedidos",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
              children: "Meus Pedidos"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Nav, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            role: "h3",
            lineBottom: false,
            color: "white100",
            fontWeight: "semiBold",
            margin: "0 0 30px 0",
            children: "INSTITUCIONAL"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/sobre",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
              children: "Sobre N\xF3s"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/contato",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
              children: "Contato"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/regulamentos",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
              children: "Troca e Devolu\xE7\xE3o"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Nav, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            role: "h3",
            lineBottom: false,
            color: "white100",
            fontWeight: "semiBold",
            margin: "0 0 30px 0",
            children: "FALE CONOSCO"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SocialMediaContainer, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "social-media",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
                href: "https://www.facebook.com/jgemporiodamalha",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiFacebook"], {
                  size: 20
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "social-media",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NavigationLink, {
                href: "https://www.instagram.com/jeffersonegisele/",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaInstagram"], {
                  size: 20
                })
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_NavigationLink, {
            href: "tel:982522620",
            children: [' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiPhone"], {}), " \xA0 98252-2620"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_NavigationLink, {
            href: "mailto:contato@jgemporiodamalha.com",
            children: [' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiMail"], {}), " \xA0 contato@jgemporiodamalha.com"]
          })]
        })]
      })
    })]
  })
});

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./src/components/CopyAndPayment/styles.ts

const CopyAndPayment_styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-169vlhh-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["padding:", " 0;"], theme.spacings.small));
const StampsAndPayment = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StampsAndPayment",
  componentId: "sc-169vlhh-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;display:flex;justify-content:space-between;@media (max-width:", "){flex-direction:column;h4{font-size:", ";}img{height:auto;width:80%;}}"], theme.breakPoints.mobileL, theme.font.sizes.large));
const CopyWriteWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CopyWriteWrapper",
  componentId: "sc-169vlhh-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;padding:", " 0;display:flex;align-items:center;justify-content:center;"], theme.spacings.small));
// CONCATENATED MODULE: ./src/components/CopyAndPayment/index.tsx






const CopyAndPayment = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CopyAndPayment_styles_Wrapper, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PaddingWrapper["a" /* default */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(StampsAndPayment, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "payments",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          role: "h4",
          fontSize: "xlarge",
          margin: "0 0 10px 0",
          textAlign: "left",
          lineBottom: false,
          children: "PAGUE COM"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/img/payments.png",
          width: 200,
          height: 40,
          alt: "meios de cart\xE3o de cr\xE9dito aceitos: Dinners, mastercard visa Elo"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "stamps",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          role: "h4",
          fontSize: "xlarge",
          margin: "0 0 10px 0",
          textAlign: "left",
          lineBottom: false,
          children: "SELOS"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/img/selos.png",
          width: 250,
          height: 70,
          alt: "site seguro e verificado por google safe browsing e compra garantida"
        })]
      })]
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CopyWriteWrapper, {
    children: "JG \xA9 2021 | Todos os direitos reservados."
  })]
});

/* harmony default export */ var components_CopyAndPayment = (CopyAndPayment);
// CONCATENATED MODULE: ./src/templates/Default/index.tsx








const Default = ({
  children,
  categorias
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {
      categorias: categorias
    }), children, /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Footer, {
      categorias: categorias
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CopyAndPayment, {})]
  });
};

/* harmony default export */ var templates_Default = __webpack_exports__["a"] = (Default);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X/Qf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalPaddingWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HorizontalPaddingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "home__HorizontalPaddingWrapper",
  componentId: "sc-1hwyuk9-0"
})(["", ""], ({
  theme,
  padding = 'medium'
}) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding:", " 0;"], theme.spacings[padding]));

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

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

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hniv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/PaddingWrapper/styles.ts

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "o8a6ji-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["padding:0 13%;@media (max-width:", "){padding:0 5%;}"], theme.breakPoints.tablet));
// CONCATENATED MODULE: ./src/components/PaddingWrapper/index.tsx




const PaddingWrapper = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, {
  children: children
});

/* harmony default export */ var components_PaddingWrapper = __webpack_exports__["a"] = (PaddingWrapper);

/***/ }),

/***/ "jsCw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Input/styles.ts


const style = ({
  theme,
  borderColor = 'gray100',
  width,
  height,
  fontSize = 'medium',
  font = 'roboto',
  fill = 'white100',
  borderWidth,
  radius,
  margin
}) => Object(external_styled_components_["css"])(["padding:", ";border-color:", ";outline:none;border-style:solid;font-size:", ";font-family:", ";", " ", " ", " ", " ", " ", ""], theme.spacings.xxsmall, theme.colors[borderColor], theme.font.sizes[fontSize], theme.font.family[font], margin && Object(external_styled_components_["css"])(["margin:", ";"], margin), radius && Object(external_styled_components_["css"])(["border-radius:", "px;"], radius), borderWidth && Object(external_styled_components_["css"])(["border-width:", "px;"], borderWidth), fill && Object(external_styled_components_["css"])(["background-color:", ";"], theme.colors[fill]), height && Object(external_styled_components_["css"])(["height:", "px;"], height), width && Object(external_styled_components_["css"])(["width:", "px;"], width));

const Input = external_styled_components_default.a.input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-1argoy3-0"
})(["", ""], props => style(props));
const TextArea = external_styled_components_default.a.textarea.withConfig({
  displayName: "styles__TextArea",
  componentId: "sc-1argoy3-1"
})(["", ""], props => style(props));
// CONCATENATED MODULE: ./src/components/Input/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Input_Input = props => {
  if (props.textArea) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextArea, _objectSpread({
      onChange: props.onChange,
      value: props.value
    }, props));
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, _objectSpread({
    onChange: props.onChange,
    value: props.value
  }, props));
};

/* harmony default export */ var components_Input = __webpack_exports__["a"] = (Input_Input);

/***/ }),

/***/ "mIKr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Heading/styles.ts


const style = ({
  theme,
  font = 'roboto',
  fontSize,
  color = 'black',
  lineBottom = true,
  lineBottomWidth = 300,
  textAlign = 'center',
  justify = 'center',
  lineColor = 'brown',
  margin,
  strongColor,
  fontWeight = 'semiBold'
}) => Object(external_styled_components_["css"])(["color:", ";font-family:", ";position:relative;justify-content:", ";text-align:", ";font-weight:", ";", " strong,b{", "}", " ", ""], theme.colors[color], theme.font.family[font], justify, textAlign, theme.font[fontWeight], margin && Object(external_styled_components_["css"])(["margin:", ";"], margin), strongColor && Object(external_styled_components_["css"])(["color:", ";"], theme.colors[strongColor]), fontSize && Object(external_styled_components_["css"])(["font-size:", ";"], theme.font.sizes[fontSize]), lineBottom && Object(external_styled_components_["css"])(["display:flex;flex-direction:column;&::after{content:' ';width:100%;max-width:", "px;border-bottom:2px solid;border-color:", ";bottom:-1rem;position:absolute;align-self:center;}"], lineBottomWidth, theme.colors[lineColor]));

const Heading1 = external_styled_components_default.a.h1.withConfig({
  displayName: "styles__Heading1",
  componentId: "sc-1seh743-0"
})(["", ""], props => style(props));
const Heading2 = external_styled_components_default.a.h2.withConfig({
  displayName: "styles__Heading2",
  componentId: "sc-1seh743-1"
})(["", ""], props => style(props));
const Heading3 = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__Heading3",
  componentId: "sc-1seh743-2"
})(["", ""], props => style(props));
const Heading4 = external_styled_components_default.a.h4.withConfig({
  displayName: "styles__Heading4",
  componentId: "sc-1seh743-3"
})(["", ""], props => style(props));
// CONCATENATED MODULE: ./src/components/Heading/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Heading = props => {
  if (props.role === 'h1') return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading1, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }));else if (props.role === 'h2') return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading2, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }));else if (props.role === 'h3') return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading3, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }));else if (props.role === 'h4') return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading4, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading1, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }));
};

/* harmony default export */ var components_Heading = __webpack_exports__["a"] = (Heading);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nXCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/templates/Default/index.tsx + 8 modules
var Default = __webpack_require__("LJuI");

// EXTERNAL MODULE: ./src/components/Banner/index.tsx + 1 modules
var Banner = __webpack_require__("wYIV");

// EXTERNAL MODULE: ./src/components/Heading/index.tsx + 1 modules
var Heading = __webpack_require__("mIKr");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/History/styles.ts

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1wjk523-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;height:250px;margin-top:15rem;"]));
const Line = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Line",
  componentId: "sc-1wjk523-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;height:1px;background-color:", ";display:flex;justify-content:space-around;align-items:center;"], theme.colors.black));
const Point = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Point",
  componentId: "sc-1wjk523-2"
})(["", ""], ({
  theme,
  selected
}) => Object(external_styled_components_["css"])(["width:10px;height:10px;background-color:", ";border-radius:50%;position:relative;display:inline-flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer;img{margin-top:-10rem;}&::after{content:'';white-space:nowrap;position:absolute;margin-bottom:-3rem;display:flex;font-size:", ";}", " @media (max-width:", "){&::after{font-size:", ";}}"], theme.colors.black, theme.font.sizes.small, !selected && Object(external_styled_components_["css"])(["img{visibility:hidden;}&::after{content:'(clique para interagir)';}"]), theme.breakPoints.mobileL, theme.font.sizes.xsmall));
const Paragraph = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Paragraph",
  componentId: "sc-1wjk523-3"
})(["", ""], ({
  theme,
  selected
}) => Object(external_styled_components_["css"])(["margin:", " 0;text-align:center;b,a{color:", ";}", ""], theme.spacings.xxxgiant, theme.colors.brown, !selected && Object(external_styled_components_["css"])(["display:none;"])));
// CONCATENATED MODULE: ./src/components/History/index.tsx





const History = () => {
  const {
    0: points,
    1: setPoints
  } = Object(external_react_["useState"])([true, false, false]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Line, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Point, {
        selected: points[0],
        onClick: () => setPoints([true, false, false]),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/img/sobre/ball.png",
          alt: "bola"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Point, {
        selected: points[1],
        onClick: () => setPoints([false, true, false]),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/img/sobre/ball.png",
          alt: "bola"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Point, {
        selected: points[2],
        onClick: () => setPoints([false, false, true]),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/img/sobre/ball.png",
          alt: "bola"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Paragraph, {
      selected: points[0],
      children: ["Iniciamos em 2019 a ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        children: "importa\xE7\xE3o de camisas"
      }), " para nosso pr\xF3pio uso. Logo nossos familiares e amigos come\xE7aram a nos pedir para encomendar \xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        children: "camisetas personalizadas"
      }), " que n\xE3o conseguiam encontrar facilmente no Brasil..."]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Paragraph, {
      selected: points[1],
      children: ["Ap\xF3s diversas recomenda\xE7\xF5es, j\xE1 estavamos conseguindo fazer uma boa renda extra vendendo pelo nosso", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://www.facebook.com/jgemporiodamalha",
          children: "facebook"
        })
      }), ' ', "e", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://www.instagram.com/jeffersonegisele/",
          children: "instagram"
        })
      }), ' ', ", e com o passar do tempo come\xE7amos a alcan\xE7ar diversas partes do Brasil"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Paragraph, {
      selected: points[2],
      children: ["Hoje somo a ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        children: "J|G Emp\xF3rio Da Malha."
      }), " onde voc\xEA encontra desde o manto do seu time do cora\xE7\xE3o, at\xE9 as mais variadas marcas e estilos"]
    })]
  });
};

/* harmony default export */ var components_History = (History);
// EXTERNAL MODULE: ./src/components/PaddingWrapper/index.tsx + 1 modules
var PaddingWrapper = __webpack_require__("hniv");

// CONCATENATED MODULE: ./src/components/SkillCard/styles.ts

const styles_Wrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sytceu-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:300px;height:350px;border-bottom:5px ", " solid;padding:", " ", ";display:flex;flex-direction:column;p{text-align:center;}.icon{position:absolute;width:100px;margin:auto;align-self:center;margin-top:7rem;}"], theme.colors.brown, theme.spacings.small, theme.spacings.xsmall));
// CONCATENATED MODULE: ./src/components/SkillCard/index.tsx





const SkillCard = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Wrapper, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: props.image,
    height: 130
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: props.icon,
    className: "icon"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
    lineBottom: false,
    role: "h2",
    margin: "50px 0 10px 0",
    children: props.title
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: props.text
  })]
});

/* harmony default export */ var components_SkillCard = (SkillCard);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/styles/pages/sobre.ts

const SkillCardsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sobre__SkillCardsWrapper",
  componentId: "sc-1hfelam-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;display:flex;justify-content:space-between;@media (max-width:", "){flex-direction:column;justify-content:space-around;align-items:center;}"], theme.breakPoints.tablet));
const VirtuesWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sobre__VirtuesWrapper",
  componentId: "sc-1hfelam-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;justify-content:space-between;width:100%;@media (max-width:", "){flex-direction:column;justify-content:space-around;align-items:center;}"], theme.breakPoints.tablet));
const Go2Contact = external_styled_components_default.a.section.withConfig({
  displayName: "sobre__Go2Contact",
  componentId: "sc-1hfelam-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["background-image:url('/img/sobre/go2contact.png');height:400px;background-size:cover;flex-direction:column;display:flex;justify-content:center;align-items:center;padding:", ";margin-bottom:", ";a{text-decoration:none;}@media (max-width:", "){background-position-x:center;}"], theme.spacings.medium, theme.spacings.giant, theme.breakPoints.mobileL));
// EXTERNAL MODULE: ./src/styles/pages/home.ts
var home = __webpack_require__("X/Qf");

// CONCATENATED MODULE: ./src/components/VirtueCard/styles.ts

const VirtueCard_styles_Wrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1uv2fam-0"
})(["", ""], ({
  theme,
  fill = 'red100',
  color = 'white100'
}) => Object(external_styled_components_["css"])(["background-color:", ";width:220px;height:350px;border-radius:", ";color:", ";margin-bottom:", ";hr{border:0;border-bottom:1px ", " solid;}p{text-align:center;}"], theme.colors[fill], theme.border.radius.medium, theme.colors[color], theme.spacings.small, theme.colors.black));
// CONCATENATED MODULE: ./src/components/VirtueCard/index.tsx







const VirtueCard = ({
  color = 'white100',
  fill,
  text,
  title
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(VirtueCard_styles_Wrapper, {
  color: color,
  fill: fill,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(home["a" /* HorizontalPaddingWrapper */], {
    padding: "small",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
      lineBottom: false,
      role: "h3",
      color: color,
      children: title
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PaddingWrapper["a" /* default */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(home["a" /* HorizontalPaddingWrapper */], {
      padding: "small",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: text
      })
    })
  })]
});

/* harmony default export */ var components_VirtueCard = (VirtueCard);
// EXTERNAL MODULE: ./src/components/Button/index.tsx + 1 modules
var Button = __webpack_require__("B3q3");

// EXTERNAL MODULE: ./src/graphql/queryes/categorias.ts
var queryes_categorias = __webpack_require__("JRgX");

// EXTERNAL MODULE: ./src/utils/apollo.ts
var apollo = __webpack_require__("fA44");

// CONCATENATED MODULE: ./src/pages/sobre.tsx

















const Sobre = ({
  categorias = []
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Default["a" /* default */], {
    categorias: categorias,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Banner["a" /* default */], {
      img: "/img/sobre/banner.png",
      title: "SOBRE N\xD3S",
      description: "Conhe\xE7a nossa trajet\xF3ria"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
      role: "h2",
      margin: "50px 0",
      children: "DO CAMPO PARA A LOJA"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(PaddingWrapper["a" /* default */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_History, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(home["a" /* HorizontalPaddingWrapper */], {
        padding: "xlarge",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SkillCardsWrapper, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SkillCard, {
            title: "MISS\xC3O",
            text: "Sempre jogando limpo com a torcida, levamos a magia do futebol a todos os amantes do esporte! Sejam eles de todas as classes e de todos os lugares!",
            icon: "/img/sobre/target.png",
            image: "/img/sobre/strategy.png"
          }), "\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SkillCard, {
            title: "VIS\xC3O",
            text: "Queremos que todos possam vibrar vestindo a camisa do time do cora\xE7\xE3o. Juntos, vamos balan\xE7ar o mercado e ser refer\xEAncia em qualidade e inclus\xE3o.",
            icon: "/img/sobre/binoculars.png",
            image: "/img/sobre/goal.png"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(home["a" /* HorizontalPaddingWrapper */], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          lineBottom: false,
          role: "h2",
          margin: "0 0 30px 0",
          children: "NOSSOS VALORES"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(VirtuesWrapper, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_VirtueCard, {
            fill: "red100",
            title: "COMPROMETIMENTO",
            text: "Aqui o juiz da partida \xE9 sempre voc\xEA! Queremos que sua experi\xEAncia seja a melhor poss\xEDvel em nossa loja.",
            color: "white100"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_VirtueCard, {
            fill: "green100",
            title: "AGILIDADE",
            text: "Entrega r\xE1pida! Entregamos sua compra no prazo de at\xE9 15 dias \xFAteis, para voc\xEA n\xE3o ficar de escanteio",
            color: "white100"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_VirtueCard, {
            fill: "yellow200",
            title: "RESPEITO",
            text: "Sempre prezamos pelo respeito e bom atendimento. Aqui, caiu na \xE1rea \xE9 penalti!",
            color: "black"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Go2Contact, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
        role: "h2",
        margin: "0 0 20px 0",
        color: "white100",
        lineBottom: false,
        fontSize: "max",
        children: "Fale com nossa equipe"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/contato",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            fill: "red100",
            radius: 10,
            fontSize: "large",
            fontWeight: "bold",
            children: "Falar conosco"
          })
        })
      })]
    })]
  });
};

const getStaticProps = async () => {
  const client = Object(apollo["a" /* initializeApollo */])();
  const response = await client.query({
    query: queryes_categorias["a" /* getCategorias */]
  });
  const {
    categorias
  } = response.data;
  return {
    props: {
      categorias
    },
    revalidate: 60
  };
};
/* harmony default export */ var sobre = __webpack_exports__["default"] = (Sobre);

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "wYIV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Banner/styles.ts

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sfduid-0"
})(["", ""], ({
  theme,
  bg
}) => Object(external_styled_components_["css"])(["background-image:url('", "');background-size:cover;background-position:center;width:100%;height:450px;display:flex;flex-direction:column;justify-content:center;align-items:center;"], bg));
const Heading = external_styled_components_default.a.h1.withConfig({
  displayName: "styles__Heading",
  componentId: "sfduid-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;height:100px;background-color:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;color:", ";font-size:", ";text-align:center;"], theme.colors.yellow200, theme.font.sizes.max));
const Paragraph = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Paragraph",
  componentId: "sfduid-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:60%;min-width:250px;height:40px;background-color:", ";display:flex;justify-content:center;align-items:center;font-weight:", ";font-size:", ";text-align:center;"], theme.colors.yellow200, theme.font.semiBold, theme.font.sizes.large));
// CONCATENATED MODULE: ./src/components/Banner/index.tsx




const Banner = ({
  title,
  description,
  img
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrapper, {
  bg: img,
  children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading, {
    children: title
  }), description && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph, {
    children: description
  })]
});

/* harmony default export */ var components_Banner = __webpack_exports__["a"] = (Banner);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });