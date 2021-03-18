module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "1gXZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./src/components/Heading/index.tsx + 1 modules
var Heading = __webpack_require__("mIKr");

// EXTERNAL MODULE: ./src/templates/dashboard/index.tsx + 6 modules
var dashboard = __webpack_require__("w1nQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/styles/pages/dashboard/Dados.ts

const Profile = external_styled_components_default.a.div.withConfig({
  displayName: "Dados__Profile",
  componentId: "sc-144l8yo-0"
})(["margin:0 auto;width:100px;height:100px;margin-top:15px;border-radius:50%;background-image:url(", ");background-position:center;background-size:cover;"], props => props.url);
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "Dados__Container",
  componentId: "sc-144l8yo-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;.data-wrapper{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:'name name' 'email phone' 'address number' 'street street' 'neighborhood neighborhood' 'city state' 'password password';gap:15px;width:100%;margin-bottom:20px;input{width:100%;}.name{width:100%;grid-area:name;}.email{width:100%;grid-area:email;}.phone{width:100%;grid-area:phone;}.address{width:100%;grid-area:address;}.street{width:100%;grid-area:street;}.neighborhood{width:100%;grid-area:neighborhood;}.city{width:100%;grid-area:city;}.state{width:100%;grid-area:state;}.number{width:100%;grid-area:number;}.password{width:100%;grid-area:password;}input{margin-top:10px;outline:0;}}form{display:flex;flex-direction:column;align-items:center;justify-content:center;button{border-radius:50px;width:60%;}}@media (max-width:", "){.data-wrapper{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:'name name' 'email email' 'phone phone' 'address number' 'street street' 'password password';}"], theme.breakPoints.mobileL));
/* harmony default export */ var Dados = (Container);
// EXTERNAL MODULE: ./src/components/Label/index.tsx + 1 modules
var Label = __webpack_require__("xEs0");

// EXTERNAL MODULE: ./src/components/Input/index.tsx + 1 modules
var Input = __webpack_require__("jsCw");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/components/Button/index.tsx + 1 modules
var Button = __webpack_require__("B3q3");

// EXTERNAL MODULE: ./src/helpers/index.tsx
var helpers = __webpack_require__("ji3P");

// EXTERNAL MODULE: ./src/context/index.tsx + 1 modules
var context = __webpack_require__("2ZRA");

// EXTERNAL MODULE: ./src/services/api.ts
var api = __webpack_require__("Dp36");

// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__("tMJi");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// EXTERNAL MODULE: external "cep-promise"
var external_cep_promise_ = __webpack_require__("zoaw");
var external_cep_promise_default = /*#__PURE__*/__webpack_require__.n(external_cep_promise_);

// EXTERNAL MODULE: ./src/utils/masks.ts
var masks = __webpack_require__("LG9w");

// CONCATENATED MODULE: ./src/pages/dashboard/dados-pessoais.tsx
















const getServerSideProps = async ({
  req
}) => {
  const cookies = Object(helpers["a" /* parseCookies */])(req);
  let user = {};
  let error = false; // console.log(cookies)

  if (!cookies.token) {
    // console.log('redirecionado')
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  await api["a" /* default */].get('/user', {
    headers: {
      Authorization: `Bearer ${cookies.token}`
    }
  }).then(response => {
    // console.log('sucesso na requisição')
    const {
      data
    } = response; // console.log(data)

    user = {
      username: data.username,
      email: data.email,
      phone: data.fone,
      endereco: data.endereco.cep,
      rua: data.endereco.rua,
      bairro: data.endereco.bairro,
      cidade: data.endereco.cidade,
      estado: data.endereco.UF,
      numero: data.endereco.numero,
      photo: data.foto ? "https://adm.jgemporiodamalha.com" + data.foto.url : `data:image/png;base64,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`
    };
  }).catch(err => {
    // console.log(err)
    error = true;
  });

  if (error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  } // console.log(user)


  return {
    props: user // will be passed to the page component as props

  };
};

const DadosPessoais = props => {
  const {
    user,
    setUser,
    token,
    server
  } = Object(context["b" /* useStateContext */])();
  const [cookie, setCookie] = Object(external_react_cookie_["useCookies"])(['user']);
  const {
    0: username,
    1: setUsername
  } = Object(external_react_["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  const {
    0: phone,
    1: setPhone
  } = Object(external_react_["useState"])('');
  const {
    0: endereco,
    1: setEndereco
  } = Object(external_react_["useState"])('');
  const {
    0: street,
    1: setStreet
  } = Object(external_react_["useState"])('');
  const {
    0: neighborhood,
    1: setNeighborhood
  } = Object(external_react_["useState"])('');
  const {
    0: city,
    1: setCity
  } = Object(external_react_["useState"])('');
  const {
    0: number,
    1: setNumber
  } = Object(external_react_["useState"])('');
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])('');
  const {
    0: image,
    1: setImage
  } = Object(external_react_["useState"])();
  const {
    0: previewImage,
    1: setPreviewImage
  } = Object(external_react_["useState"])();
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setUsername(props.username);
    setEmail(props.email);
    setPhone(props.phone);
    setEndereco(props.endereco);
    setStreet(props.rua);
    setNeighborhood(props.bairro);
    setCity(props.cidade);
    setState(props.estado);
    setNumber(props.numero);
    setUser({
      username: props.username,
      email: props.email,
      phone: props.phone,
      endereco: props.endereco,
      photo: props.photo
    });
  }, []);

  const checkAddress = async () => {
    await external_cep_promise_default()(endereco).then(response => {
      const {
        state,
        city,
        street,
        neighborhood
      } = response;
      setState(state);
      setCity(city);
      setStreet(street);
      setNeighborhood(neighborhood);
      setError(false);
    }).catch(() => {
      //console.log(err)
      alert('cep invalido');
      setError(true);
    });
  };

  Object(external_react_["useEffect"])(() => {
    if (endereco.length === 8) {
      checkAddress();
    }
  }, [endereco]);

  const handleSelectImage = event => {
    console.log(event.target.files);

    if (!event.target.files) {
      return;
    }

    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setPreviewImage(URL.createObjectURL(selectedImage));
  };

  const send = async e => {
    e.preventDefault();

    if (endereco.length < 8) {
      alert('cep incompleto, por favor confira seus dados');
      return;
    } else if (error) {
      alert('cep invalido, por favor confirme seus dados');
      return;
    }

    const data = new FormData();
    const userData = password !== '' ? {
      username,
      email,
      fone: phone,
      endereco: {
        cep: endereco,
        rua: street,
        bairro: neighborhood,
        cidade: city,
        UF: state,
        numero: number
      },
      password
    } : {
      username,
      email,
      fone: phone,
      endereco: {
        cep: endereco,
        rua: street,
        bairro: neighborhood,
        cidade: city,
        UF: state,
        numero: number
      }
    };
    data.append('data', JSON.stringify(userData));

    if (image) {
      data.append('files.foto', image);
    }

    console.log(userData);
    const decoded = external_jsonwebtoken_default.a.decode(token);
    await api["a" /* default */].put(`/user/${decoded.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      var _data$image;

      alert('Seus dados foram editados com sucesso!');
      const {
        data
      } = response;
      const userData = {
        username: data.username,
        email: data.email,
        phone: data.phone,
        endereco: data.endereco,
        photo: ((_data$image = data.image) === null || _data$image === void 0 ? void 0 : _data$image.formats.thumbnail.url) || `data:image/png;base64,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`
      };
      setCookie('user', userData, {
        path: '/',
        maxAge: 604800,
        // Expires after 1hr
        sameSite: true
      });
      setUser(userData);
    }).catch(err => {
      alert('Algo deu errado! se o erro persistir, tente mais tarde');
      console.log(err);
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dashboard["a" /* default */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dados, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
        color: "brown",
        justify: "center",
        fontSize: "xxmax",
        fontWeight: "semiBold",
        margin: "0",
        lineBottom: false,
        children: "Meus dados"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        style: {
          cursor: 'pointer'
        },
        htmlFor: "image",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Profile, {
          url: previewImage ? previewImage : props.photo
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        onChange: handleSelectImage,
        type: "file",
        name: "",
        id: "image",
        style: {
          display: 'none'
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: send,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "data-wrapper",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "name",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Label["a" /* default */], {
              color: "black",
              fontSize: "xlarge",
              font: "ubuntu",
              fontWeight: "semiBold",
              children: ["\xA0 NOME", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                value: username,
                onChange: e => {
                  setUsername(e.target.value);
                },
                height: 50,
                radius: 50,
                borderColor: "gray50"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "email",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Label["a" /* default */], {
              color: "black",
              fontSize: "xlarge",
              font: "ubuntu",
              fontWeight: "semiBold",
              children: ["\xA0 EMAIL", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                value: email,
                onChange: e => {
                  setEmail(e.target.value);
                },
                height: 50,
                radius: 50,
                borderColor: "gray50"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "phone",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Label["a" /* default */], {
              color: "black",
              fontSize: "xlarge",
              font: "ubuntu",
              fontWeight: "semiBold",
              children: ["\xA0 CELULAR", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                value: phone,
                onChange: e => {
                  setPhone(e.target.value);
                },
                height: 50,
                radius: 50,
                borderColor: "gray50"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "address",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Label["a" /* default */], {
              color: "black",
              fontSize: "xlarge",
              font: "ubuntu",
              fontWeight: "semiBold",
              children: ["\xA0 CEP", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                value: endereco,
                onChange: e => {
                  setEndereco(Object(masks["a" /* cepMask */])(e.target.value));
                },
                height: 50,
                radius: 50,
                borderColor: "gray50",
                maxLength: 8
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "number",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Label["a" /* default */], {
              color: "black",
              fontSize: "xlarge",
              font: "ubuntu",
              fontWeight: "semiBold",
              children: ["\xA0 N\xBA", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                value: number,
                onChange: e => setNumber(e.target.value),
                height: 50,
                radius: 50,
                borderColor: "gray50"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "street",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Label["a" /* default */], {
              color: "black",
              fontSize: "xlarge",
              font: "ubuntu",
              fontWeight: "semiBold",
              children: ["\xA0 ENDERE\xC7O", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                value: `${street},  ${neighborhood},  ${city},  ${state}`,
                readOnly: true,
                height: 50,
                radius: 50,
                borderColor: "gray50"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "password",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Label["a" /* default */], {
              color: "black",
              fontSize: "xlarge",
              font: "ubuntu",
              fontWeight: "semiBold",
              children: ["\xA0MUDAR SENHA", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                value: password,
                onChange: e => {
                  setPassword(e.target.value);
                },
                height: 50,
                radius: 50,
                borderColor: "gray50"
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
          fontWeight: "semiBold",
          fill: "red100",
          fontSize: "xlarge",
          children: "ATUALIZAR DADOS"
        })]
      })]
    })
  });
};

/* harmony default export */ var dados_pessoais = __webpack_exports__["default"] = (DadosPessoais);

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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1gXZ");


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

/***/ "Dp36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://adm.jgemporiodamalha.com" || false
});
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HvvW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Paragraph/styles.ts

const Wrapper = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-19fj83-0"
})(["", ""], ({
  theme,
  color = 'gray300',
  fontSize = 'medium',
  font = 'roboto',
  justify = 'flex-start',
  textAlign = 'left',
  fontWeight = 'normal',
  margin
}) => Object(external_styled_components_["css"])(["color:", ";font-size:", ";font-family:", ";font-weight:", ";justify-content:", ";text-align:", ";", ""], theme.colors[color], theme.font.sizes[fontSize], theme.font.family[font], theme.font[fontWeight], justify, textAlign, margin && Object(external_styled_components_["css"])(["margin:", ";"], margin)));
// CONCATENATED MODULE: ./src/components/Paragraph/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Paragraph = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

/* harmony default export */ var components_Paragraph = __webpack_exports__["a"] = (Paragraph);

/***/ }),

/***/ "LG9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cepMask; });
const cepMask = e => e.replace(/\D/g, '');

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

/***/ "eRny":
/***/ (function(module, exports) {

module.exports = require("react-icons/bi");

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

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "ji3P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseCookies; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rlPI");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req ? req.headers.cookie || '' : document.cookie);
}

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

/***/ "qEf8":
/***/ (function(module, exports) {

module.exports = require("react-icons/hi");

/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

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

/***/ "w1nQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/BottomMenu/styles.ts

const Wrapper = external_styled_components_default.a.nav.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1a64oo2-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:100%;position:fixed;bottom:0;background-color:", ";border-radius:", " ", " 0 0;.sub-wrapper{height:60px;background:rgb(34,40,47);background:linear-gradient( 180deg,rgba(34,40,47,1) 7%,rgba(34,40,47,0.6867121848739496) 48%,rgba(34,40,47,1) 91% );border-radius:", " ", " 0 0;display:flex;padding:", " 10%;align-items:center;justify-content:space-between;}a{color:", ";}a,button{text-decoration:none;font-size:", ";}button{border:0;outline:0;background-color:", ";color:", ";border-radius:50%;height:80px;width:80px;margin-bottom:-20px;}"], theme.colors.silver, theme.border.radius.rounded, theme.border.radius.rounded, theme.border.radius.rounded, theme.border.radius.rounded, theme.spacings.xxsmall, theme.colors.white100, theme.font.sizes.extra, theme.colors.white100, theme.colors.red100));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__("eRny");

// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__("qEf8");

// EXTERNAL MODULE: ./src/context/index.tsx + 1 modules
var context = __webpack_require__("2ZRA");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// CONCATENATED MODULE: ./src/components/BottomMenu/index.tsx













const BottomMenu = () => {
  const router = Object(router_["useRouter"])();
  const {
    setToken
  } = Object(context["b" /* useStateContext */])();
  const [cookie, setCookie, removeCookie] = Object(external_react_cookie_["useCookies"])(['user']);

  const logout = () => {
    setToken(null);
    removeCookie('token', {
      path: '/',
      sameSite: true
    });
    router.push('/login');
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "sub-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/dashboard/dados-pessoais/",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdInsertEmoticon"], {})
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bi_["BiLogOut"], {})
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiPower"], {
          onClick: logout
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/dashboard/contato/",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(hi_["HiOutlineChatAlt2"], {})
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/dashboard/pedidos/",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bi_["BiCube"], {})
        })
      })]
    })
  });
};

/* harmony default export */ var components_BottomMenu = (BottomMenu);
// CONCATENATED MODULE: ./src/components/Menu/styles.ts

const Profile = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Profile",
  componentId: "sc-158z43f-0"
})(["margin:0 auto;width:130px;height:130px;border-radius:50%;background-image:url(", ");background-position:center;background-size:cover;"], props => props.url);
const styles_Wrapper = external_styled_components_default.a.aside.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-158z43f-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;width:230px;min-height:100%;padding:", " ", ";.profile-wrapper{color:", ";width:100%;}.logout-wrapper{width:100%;color:", ";font-size:", ";display:flex;align-items:center;justify-content:center;flex-direction:column;svg{cursor:pointer;}}.links-wrapper{display:flex;flex-direction:column;justify-content:space-between;height:300px;a{color:", ";font-size:", ";text-decoration:none;display:flex;align-items:center;svg{font-size:", ";}}}"], theme.spacings.xxsmall, theme.spacings.small, theme.colors.white100, theme.colors.white100, theme.font.sizes.max, theme.colors.white100, theme.font.sizes.xlarge, theme.font.sizes.extra));
// EXTERNAL MODULE: ./src/components/Paragraph/index.tsx + 1 modules
var Paragraph = __webpack_require__("HvvW");

// CONCATENATED MODULE: ./src/components/Menu/index.tsx













const Menu = () => {
  var _cookie$user;

  const router = Object(router_["useRouter"])();
  const {
    setToken,
    server
  } = Object(context["b" /* useStateContext */])();
  const [cookie, setCookie, removeCookie] = Object(external_react_cookie_["useCookies"])(['user']);

  const logout = () => {
    setToken(null);
    removeCookie('token', {
      path: '/',
      sameSite: true
    });
    router.push('/login');
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Wrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "profile-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Profile, {
        className: "profile",
        url: cookie.user && cookie.user.foto ? server + cookie.user.foto : `data:image/png;base64,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`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Paragraph["a" /* default */], {
        justify: "center",
        textAlign: "center",
        color: "white100",
        fontSize: "xxlarge",
        children: ["Ol\xE1, ", cookie.user ? String((_cookie$user = cookie.user) === null || _cookie$user === void 0 ? void 0 : _cookie$user.username).split(' ')[0] : ' ']
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "links-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/dashboard/dados-pessoais",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: [' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdInsertEmoticon"], {}), " \xA0 Dados"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/dashboard/pedidos",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(bi_["BiCube"], {}), " \xA0 Pedidos"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/dashboard/contato",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(hi_["HiOutlineChatAlt2"], {}), " \xA0 Fale conosco"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(bi_["BiLogOut"], {}), " \xA0 Ir para loja"]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "logout-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiPower"], {
        onClick: logout
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
        color: "white100",
        fontSize: "xlarge",
        margin: "10px 0",
        children: "Deslogar"
      })]
    })]
  });
};

/* harmony default export */ var components_Menu = (Menu);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/styles/pages/dashboard/index.ts

const Container = external_styled_components_default.a.div.withConfig({
  displayName: "dashboard__Container",
  componentId: "sc-191qtif-0"
})(["", ""], ({
  theme,
  paddingSmall
}) => Object(external_styled_components_["css"])(["display:flex;width:100%;min-height:100vh;margin:auto;align-self:center;justify-self:center;justify-content:space-between;background:rgb(34,40,47);background:linear-gradient( 180deg,rgba(34,40,47,1) 7%,rgba(34,40,47,0.6867121848739496) 48%,rgba(34,40,47,1) 91% );padding:", ";.content{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;min-height:100%;height:auto;flex:1;background-color:", ";border-radius:", ";padding:", " 15%;", "}.mobile{display:none;height:60px;}@media (max-width:", "){flex-direction:column;padding:", " 0 0 0;.desktop{display:none;}.mobile{display:unset;}}@media (max-width:", "){.content{padding:", " 5%;}}@media (max-width:", "){.content{padding:", " ", ";}}"], theme.spacings.xxsmall, theme.colors.silver, theme.border.radius.rounded, theme.spacings.large, paddingSmall && Object(external_styled_components_["css"])(["padding:", " 5%;@media (min-width:1445px){padding:", " 15%;}"], theme.spacings.large, theme.spacings.large), theme.breakPoints.tablet, theme.spacings.small, theme.breakPoints.mobileL, theme.spacings.large, theme.breakPoints.mobileS, theme.spacings.large, theme.spacings.xxsmall));
/* harmony default export */ var dashboard = (Container);
// CONCATENATED MODULE: ./src/components/PrivateRoute/index.tsx




const getServerSideProps = async context => {
  const data = null;

  if (!data) {
    console.log('redirecionado');
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {} // will be passed to the page component as props

  };
};

const PrivateRoute = ({
  children
}) => {
  const router = Object(router_["useRouter"])();
  const {
    setToken,
    token
  } = Object(context["b" /* useStateContext */])();

  const logout = () => {
    setToken(null); //tokenStorageHandler.eraseToken()

    router.push('/login');
  }; // useEffect(() => {
  //   logout()
  // }, [])


  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: children
  });
};

/* harmony default export */ var components_PrivateRoute = (PrivateRoute);
// CONCATENATED MODULE: ./src/templates/dashboard/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Dashboard = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PrivateRoute, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(dashboard, _objectSpread(_objectSpread({}, props), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "desktop",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Menu, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "content",
        children: props.children
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "mobile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_BottomMenu, {})
      })]
    }))
  });
};

/* harmony default export */ var templates_dashboard = __webpack_exports__["a"] = (Dashboard);

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xEs0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Label/styles.ts

const Wrapper = external_styled_components_default.a.label.withConfig({
  displayName: "styles__Wrapper",
  componentId: "rph56-0"
})(["", ""], ({
  theme,
  color = 'black',
  fontSize = 'large',
  font = 'roboto',
  fontWeight = 'normal',
  margin
}) => Object(external_styled_components_["css"])(["display:flex;flex-direction:column;font-size:", ";color:", ";font-family:", ";font-weight:", ";", ""], theme.font.sizes[fontSize], theme.colors[color], theme.font.family[font], theme.font[fontWeight], margin && Object(external_styled_components_["css"])(["margin:", ";"], margin)));
// CONCATENATED MODULE: ./src/components/Label/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Label = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

/* harmony default export */ var components_Label = __webpack_exports__["a"] = (Label);

/***/ }),

/***/ "zoaw":
/***/ (function(module, exports) {

module.exports = require("cep-promise");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });