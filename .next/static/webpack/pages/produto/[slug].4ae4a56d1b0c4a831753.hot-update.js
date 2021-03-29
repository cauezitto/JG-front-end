webpackHotUpdate_N_E("pages/produto/[slug]",{

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "./node_modules/next/dist/next-server/lib/to-base-64.js");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "./node_modules/next/dist/next-server/server/image-config.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (false) {}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

var _ref2 = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref2.deviceSizes,
    configImageSizes = _ref2.imageSizes,
    configLoader = _ref2.loader,
    configPath = _ref2.path,
    configDomains = _ref2.domains; // sort smallest to largest


var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set([width, width * 2, width * 3].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  var load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2["default"])({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
}

function generateImgAttrs(_ref3) {
  var src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes;

  if (unoptimized) {
    return {
      src: src
    };
  }

  var _getWidths = getWidths(width, layout),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  var srcSet = widths.map(function (w, i) {
    return "".concat(callLoader({
      src: src,
      quality: quality,
      width: w
    }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
  }).join(', ');

  if (!sizes && kind === 'w') {
    sizes = '100vw';
  }

  src = callLoader({
    src: src,
    quality: quality,
    width: widths[last]
  });
  return {
    src: src,
    sizes: sizes,
    srcSet: srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      objectFit = _ref.objectFit,
      objectPosition = _ref.objectPosition,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';
  var unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (unsized) {
      throw new Error("Image with src \"".concat(src, "\" has deprecated \"unsized\" property, which was removed in favor of the \"layout='fill'\" property"));
    }
  }

  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  var _ref4 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  }),
      _ref5 = _slicedToArray(_ref4, 2),
      setRef = _ref5[0],
      isIntersected = _ref5[1];

  var isVisible = !isLazy || isIntersected;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop: paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: "data:image/svg+xml;base64,".concat((0, _toBase.toBase64)(sizerSvg))
  }) : null) : null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


_c = Image;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref8) {
  var root = _ref8.root,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref9) {
  var root = _ref9.root,
      src = _ref9.src,
      width = _ref9.width,
      quality = _ref9.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://err.sh/next.js/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/to-base-64.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.toBase64 = toBase64;
/**
* Isomorphic base64 that works on the server and client
*/

function toBase64(str) {
  if (false) {} else {
    return window.btoa(str);
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/image-config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.imageConfigDefault=exports.VALID_LOADERS=void 0;const VALID_LOADERS=['default','imgix','cloudinary','akamai'];exports.VALID_LOADERS=VALID_LOADERS;const imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:'/_next/image',loader:'default',domains:[]};exports.imageConfigDefault=imageConfigDefault;
//# sourceMappingURL=image-config.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./src/components/SizesPopUp/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/SizesPopUp/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var components_Paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Paragraph */ "./src/components/Paragraph/index.tsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/components/SizesPopUp/styles.ts");



var _jsxFileName = "C:\\Users\\cauezitto\\Documents\\projetos\\JG\\front-end\\src\\components\\SizesPopUp\\index.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var SizesPopUp = function SizesPopUp(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Wrapper"], _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["SubWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaHeart"], {
        size: 45,
        color: "#E4271B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
        layout: "responsive",
        width: 500,
        height: 250,
        src: "/img/ProductPage/sizes.jpeg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        fontSize: "large",
        font: "ubuntu",
        textAlign: "center",
        margin: "30px 0",
        children: "Parab\xE9ns! voc\xEA adicionou o produto a sua lista de desejos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: props.onClose,
        fontSize: "large",
        children: "Beleza"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, _this);
};

_c = SizesPopUp;
/* harmony default export */ __webpack_exports__["default"] = (SizesPopUp);

var _c;

$RefreshReg$(_c, "SizesPopUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SizesPopUp/styles.ts":
/*!*********************************************!*\
  !*** ./src/components/SizesPopUp/styles.ts ***!
  \*********************************************/
/*! exports provided: Wrapper, SubWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubWrapper", function() { return SubWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-9aqeze-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme,
      show = _ref.show;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:600px;position:fixed;margin:auto;width:100vw;height:100vh;z-index:10;", " align-items:center;justify-content:center;"], !show ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:none;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;"]));
});
var SubWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__SubWrapper",
  componentId: "sc-9aqeze-1"
})(["", ""], function (_ref2) {
  var theme = _ref2.theme;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["box-shadow:0px 4px 4px rgba(0,0,0,0.25),0px 4px 4px rgba(0,0,0,0.25);background-color:", ";height:300px;width:100%;max-width:600px;display:flex;align-items:center;justify-content:flex-end;padding:", ";border-radius:", ";flex-direction:column;@media (max-width:", "){width:90%;}"], theme.colors.white100, theme.spacings.small, theme.border.radius.small, theme.breakPoints.mobileL);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/produto/[slug].tsx":
/*!**************************************!*\
  !*** ./src/pages/produto/[slug].tsx ***!
  \**************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var templates_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! templates/Default */ "./src/templates/Default/index.tsx");
/* harmony import */ var components_PaymentsBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/PaymentsBanner */ "./src/components/PaymentsBanner/index.tsx");
/* harmony import */ var components_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Heading */ "./src/components/Heading/index.tsx");
/* harmony import */ var components_PaddingWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/PaddingWrapper */ "./src/components/PaddingWrapper/index.tsx");
/* harmony import */ var components_GridWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/GridWrapper */ "./src/components/GridWrapper/index.tsx");
/* harmony import */ var components_ProductCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/ProductCard */ "./src/components/ProductCard/index.tsx");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Input */ "./src/components/Input/index.tsx");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styles/pages/produto */ "./src/styles/pages/produto.ts");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! context */ "./src/context/index.tsx");
/* harmony import */ var components_ProductGalery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/ProductGalery */ "./src/components/ProductGalery/index.tsx");
/* harmony import */ var styles_pages_home__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! styles/pages/home */ "./src/styles/pages/home.ts");
/* harmony import */ var utils_handlePrice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! utils/handlePrice */ "./src/utils/handlePrice.ts");
/* harmony import */ var components_QuantController__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/QuantController */ "./src/components/QuantController/index.tsx");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var utils_masks__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! utils/masks */ "./src/utils/masks.ts");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var services_api__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! services/api */ "./src/services/api.ts");
/* harmony import */ var components_SuccessAddPopUp__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! components/SuccessAddPopUp */ "./src/components/SuccessAddPopUp/index.tsx");
/* harmony import */ var components_MiniCart__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! components/MiniCart */ "./src/components/MiniCart/index.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var components_SizesPopUp__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! components/SizesPopUp */ "./src/components/SizesPopUp/index.tsx");








var _jsxFileName = "C:\\Users\\cauezitto\\Documents\\projetos\\JG\\front-end\\src\\pages\\produto\\[slug].tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



























var ProductPage = function ProductPage(props) {
  if (!props.product) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Produto, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 10
  }, _this);
};

_c = ProductPage;

var Produto = function Produto(_ref) {
  _s();

  var _tamanho$kid, _tamanho$kid2, _tamanho$kid3, _tamanho$kid4, _tamanho$kid5, _tamanho$kid6, _tamanho$kid7, _tamanho$kid8, _tamanho$adulto, _tamanho$adulto2, _tamanho$adulto3, _tamanho$adulto4, _tamanho$adulto5, _tamanho$adulto6;

  var product = _ref.product,
      categorias = _ref.categorias,
      tierList = _ref.tierList;
  var id = product.id,
      resumo = product.resumo,
      nome = product.nome,
      preco = product.preco,
      descricao = product.descricao,
      cover = product.cover,
      marca = product.marca,
      galeria = product.galeria,
      slug = product.slug,
      kid = product.kid,
      tamanho = product.tamanho; //console.log(resumo)
  //console.log(product.resumo)
  //console.log(product)

  var _useStateContext = Object(context__WEBPACK_IMPORTED_MODULE_18__["useStateContext"])(),
      server = _useStateContext.server;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(1),
      quant = _useState[0],
      setQuant = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      cep = _useState2[0],
      setCep = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      size = _useState3[0],
      setSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    isCustom: false,
    name: '',
    number: ''
  }),
      personalization = _useState4[0],
      setPersonalization = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      shippingOptions = _useState5[0],
      setShippingOptions = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      showUnauthorized = _useState6[0],
      setShowUnauthorized = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      showSuccess = _useState7[0],
      setShowSuccess = _useState7[1];

  var _useStateContext2 = Object(context__WEBPACK_IMPORTED_MODULE_18__["useStateContext"])(),
      cart = _useStateContext2.cart,
      setCart = _useStateContext2.setCart; // const [isFavorite, setIsFavorite] = useState(false)


  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_25__["useCookies"])(['user']),
      _useCookies2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useCookies, 2),
      cookie = _useCookies2[0],
      setCookie = _useCookies2[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      showMiniCart = _useState8[0],
      setShowMiniCart = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    // alert('Aloohhh')
    if (cep.length === 8) {
      shippingCalculate();
    }

    setQuant(1);
    setSize('');
  }, [slug]);

  var shippingCalculate = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(cep.length < 8)) {
                _context.next = 3;
                break;
              }

              alert('cep incompleto');
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return services_api__WEBPACK_IMPORTED_MODULE_26__["default"].post('/shipping/calculate', {
                cep: cep,
                products: [{
                  id: product.id,
                  quant: quant
                }]
              }).then(function (response) {
                var data = response.data;
                var sedexShipping = data.find(function (option) {
                  return option.name === 'SEDEX';
                });
                setShippingOptions([sedexShipping]);
              })["catch"](function (err) {
                alert('algo deu errado, por favor tente novamente'); //console.log(err)
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function shippingCalculate() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleAddQuant = function handleAddQuant() {
    setQuant(quant + 1);
  };

  var handleSubQuant = function handleSubQuant() {
    setQuant(quant - 1);
  };

  var addToCart = function addToCart() {
    if (size === '') {
      alert('Por favor selecione o tamanho desejado');
      return;
    }

    var product = {
      id: id,
      nome: nome,
      preco: preco,
      descricao: descricao,
      cover: cover,
      slug: slug,
      size: size,
      custom: {
        isCustom: personalization.isCustom,
        name: personalization.name,
        number: personalization.number
      },
      quant: quant
    }; // //console.log(product)

    var products = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cart.products), [product]);
    var total = 0.0;
    products === null || products === void 0 ? void 0 : products.map(function (item) {
      total = total + item.preco * item.quant;
    });
    setCart({
      products: products,
      total: total
    });
    setShowMiniCart(true); // alert('produto adicionado')
  };

  var checkIsFavorite = function checkIsFavorite() {
    var isFavorite = false;

    if (!cookie.token) {
      return;
    }

    var favorites = cookie.user.favorites;

    if (!favorites) {
      return;
    }

    favorites.map(function (productId) {
      //console.log(productId, id)
      if (productId == id) {
        isFavorite = true;
      }
    });
    return isFavorite;
  };

  var favorite = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var data, _data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (cookie.token) {
                _context2.next = 3;
                break;
              }

              setShowUnauthorized(true);
              return _context2.abrupt("return");

            case 3:
              if (checkIsFavorite()) {
                _context2.next = 10;
                break;
              }

              data = {
                produtos: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cookie.user.favorites), [id])
              };
              _context2.next = 7;
              return services_api__WEBPACK_IMPORTED_MODULE_26__["default"].put('/favoritos', data, {
                headers: {
                  Authorization: "Bearer ".concat(cookie.token)
                }
              }).then(function () {
                setShowSuccess(true);
                setCookie('user', _objectSpread(_objectSpread({}, cookie.user), {}, {
                  favorites: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cookie.user.favorites), [id])
                }));
              })["catch"](function (err) {
                return console.log(err);
              });

            case 7:
              return _context2.abrupt("return");

            case 10:
              _data = {
                produtos: cookie.user.favorites.filter(function (productId) {
                  return productId != id;
                })
              }; //console.log(data)

              _context2.next = 13;
              return services_api__WEBPACK_IMPORTED_MODULE_26__["default"].put('/favoritos', _data, {
                headers: {
                  Authorization: "Bearer ".concat(cookie.token)
                }
              }).then(function () {
                alert('produto excluido da sua lista de favoritos');
                setCookie('user', _objectSpread(_objectSpread({}, cookie.user), {}, {
                  favorites: cookie.user.favorites.filter(function (productId) {
                    return productId != id;
                  })
                }));
              })["catch"](function (err) {
                return console.log(err);
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function favorite() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_29___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: product.nome
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        property: "og:title",
        content: product.nome
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        name: "description",
        content: product.resumo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        property: "og:description",
        content: product.resumo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://adm.jgemporiodamalha.com" || false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_SizesPopUp__WEBPACK_IMPORTED_MODULE_30__["default"], {
      show: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_SuccessAddPopUp__WEBPACK_IMPORTED_MODULE_27__["default"], {
      show: showSuccess,
      onClose: function onClose() {
        return setShowSuccess(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["MiniCartWrapper"], {
      show: showMiniCart,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_MiniCart__WEBPACK_IMPORTED_MODULE_28__["default"], {
        onClose: function onClose() {
          setShowMiniCart(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(templates_Default__WEBPACK_IMPORTED_MODULE_7__["default"], {
      categorias: categorias,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_PaymentsBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_PaddingWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_home__WEBPACK_IMPORTED_MODULE_20__["HorizontalPaddingWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["ProductSection"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_ProductGalery__WEBPACK_IMPORTED_MODULE_19__["default"], {
              images: galeria
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["ProductAside"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_Heading__WEBPACK_IMPORTED_MODULE_9__["default"], {
                lineBottom: false,
                fontSize: "xxxlarge",
                fontWeight: "bold",
                textAlign: "left",
                margin: "0 0 10px 0",
                children: nome === null || nome === void 0 ? void 0 : nome.toUpperCase()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["ProductReference"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("b", {
                  children: "Referencia:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 19
                }, _this), " ", slug]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["Add2Favorites"], {
                onClick: favorite,
                children: checkIsFavorite() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_17__["FaHeart"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 23
                  }, _this), " \xA0 Remover dos favoritos"]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_16__["FiHeart"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 23
                  }, _this), " \xA0 Adicionar aos favoritos"]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["ProductPrice"], {
                children: utils_handlePrice__WEBPACK_IMPORTED_MODULE_21__["default"].priceNumberToReadblePrice(preco)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["ProductInstallments"], {
                children: "ou ent\xE3o 3x de ".concat(utils_handlePrice__WEBPACK_IMPORTED_MODULE_21__["default"].priceNumberToReadblePrice(preco / 3))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["QuantTitle"], {
                children: "Quantidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_QuantController__WEBPACK_IMPORTED_MODULE_22__["default"], {
                handleAdd: handleAddQuant,
                handleSub: handleSubQuant,
                quant: quant
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_23__["default"], {
                onClick: addToCart,
                className: "add2cart",
                fill: "red100",
                radius: 50,
                children: "ADD CARRINHO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 388,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["PersonalizationButtonSelector"], {
                onClick: function onClick() {
                  return setPersonalization(function (prevState) {
                    return _objectSpread(_objectSpread({}, prevState), {}, {
                      isCustom: !personalization.isCustom
                    });
                  });
                },
                children: ["PERSONALIZA\xC7\xC3O \xA0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdKeyboardArrowDown"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 389,
                columnNumber: 17
              }, _this), personalization.isCustom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["PersonalizationInputsWrapper"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["PersonalizationInput"], {
                  width: 180,
                  placeholder: "NOME",
                  value: personalization.name,
                  onChange: function onChange(e) {
                    return setPersonalization(function (prevState) {
                      return _objectSpread(_objectSpread({}, prevState), {}, {
                        name: e.target.value
                      });
                    });
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["PersonalizationInput"], {
                  width: 100,
                  maxLength: 2,
                  placeholder: "N\xDAMERO",
                  value: personalization.number,
                  onChange: function onChange(e) {
                    return setPersonalization(function (prevState) {
                      return _objectSpread(_objectSpread({}, prevState), {}, {
                        number: e.target.value
                      });
                    });
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 413,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizesWrapper"], {
                children: kid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
                  children: [(tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$kid = tamanho.kid) === null || _tamanho$kid === void 0 ? void 0 : _tamanho$kid.catorze) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === '14' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('14');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "14"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 433,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$kid2 = tamanho.kid) === null || _tamanho$kid2 === void 0 ? void 0 : _tamanho$kid2.dezesseis) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === '16' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('16');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "16"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 446,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$kid3 = tamanho.kid) === null || _tamanho$kid3 === void 0 ? void 0 : _tamanho$kid3.dezoito) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === '18' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('18');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "18"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 459,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$kid4 = tamanho.kid) === null || _tamanho$kid4 === void 0 ? void 0 : _tamanho$kid4.vinte) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === '20' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('20');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "20"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 472,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$kid5 = tamanho.kid) === null || _tamanho$kid5 === void 0 ? void 0 : _tamanho$kid5.vinte_e_dois) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === '22' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('22');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "22"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 485,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$kid6 = tamanho.kid) === null || _tamanho$kid6 === void 0 ? void 0 : _tamanho$kid6.vinte_e_quatro) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === '24' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('24');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "24"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 498,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$kid7 = tamanho.kid) === null || _tamanho$kid7 === void 0 ? void 0 : _tamanho$kid7.vinte_e_seis) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === '26' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('26');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "26"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 511,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$kid8 = tamanho.kid) === null || _tamanho$kid8 === void 0 ? void 0 : _tamanho$kid8.vinte_e_oito) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === '28' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('28');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "28"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 524,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
                  children: [(tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$adulto = tamanho.adulto) === null || _tamanho$adulto === void 0 ? void 0 : _tamanho$adulto.P) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === 'P' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('P');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "P"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 539,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$adulto2 = tamanho.adulto) === null || _tamanho$adulto2 === void 0 ? void 0 : _tamanho$adulto2.M) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === 'M' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('M');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "M"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 551,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$adulto3 = tamanho.adulto) === null || _tamanho$adulto3 === void 0 ? void 0 : _tamanho$adulto3.G) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === 'G' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('G');
                    },
                    color: size === 'M' ? 'white100' : 'black',
                    children: "G"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 563,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$adulto4 = tamanho.adulto) === null || _tamanho$adulto4 === void 0 ? void 0 : _tamanho$adulto4.GG) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === 'GG' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('GG');
                    },
                    color: size === 'GG' ? 'white100' : 'black',
                    children: "GG"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 575,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$adulto5 = tamanho.adulto) === null || _tamanho$adulto5 === void 0 ? void 0 : _tamanho$adulto5.XG) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === 'XG' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('XG');
                    },
                    color: size === 'XG' ? 'white100' : 'black',
                    children: "XG"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 588,
                    columnNumber: 25
                  }, _this), (tamanho === null || tamanho === void 0 ? void 0 : (_tamanho$adulto6 = tamanho.adulto) === null || _tamanho$adulto6 === void 0 ? void 0 : _tamanho$adulto6.XXG) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["SizeButton"], {
                    selected: size === 'XXG' && true,
                    className: "size-button",
                    onClick: function onClick() {
                      setSize('XXG');
                    },
                    color: size === 'XXG' ? 'white100' : 'black',
                    children: "XXG"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 601,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 429,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "shipping-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
                  children: "Calcular frete e prazo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 617,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "cep-input-wrapper",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    placeholder: "00000-000",
                    type: "text",
                    maxLength: 8,
                    borderColor: "gray100",
                    borderWidth: 1,
                    value: cep,
                    fontSize: "xlarge",
                    onChange: function onChange(e) {
                      return setCep(Object(utils_masks__WEBPACK_IMPORTED_MODULE_24__["cepMask"])(e.target.value));
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 620,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_23__["default"], {
                    onClick: shippingCalculate,
                    children: "OK"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 631,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 619,
                  columnNumber: 19
                }, _this), shippingOptions[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("table", {
                    className: shippingOptions[0] ? '' : 'hidden',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                        children: "Entrega "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 638,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                        children: "Frete"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 639,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                        children: "Prazo"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 640,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 637,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
                      children: shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.map(function (option, index) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                            children: [option === null || option === void 0 ? void 0 : option.name, " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 646,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                            children: utils_handlePrice__WEBPACK_IMPORTED_MODULE_21__["default"].priceNumberToReadblePrice(Number((option === null || option === void 0 ? void 0 : option.price) / 2))
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 647,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                            children: ["15 dias(s)", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 652,
                            columnNumber: 31
                          }, _this)]
                        }, index, true, {
                          fileName: _jsxFileName,
                          lineNumber: 645,
                          columnNumber: 29
                        }, _this);
                      })
                    }, void 0, false)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 636,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                    className: "disclaimer",
                    children: "* Este prazo de entrega est\xE1 considerando a encomenda do produto + prazo de entrega."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 658,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 616,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 665,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["ProductReference"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("u", {
                  children: "Tabela de medidas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 667,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 666,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_Heading__WEBPACK_IMPORTED_MODULE_9__["default"], {
          role: "h2",
          lineBottom: false,
          fontSize: "xxxlarge",
          margin: "50px 0",
          children: "QUEM VIU ESTE PRODUTO, VIU TAMB\xC9M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 673,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_GridWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
          children: tierList.map(function (product, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_ProductCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
              id: product.id,
              name: product.nome,
              image: server + product.cover.url,
              price: product.preco,
              slug: product.slug
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 684,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_Heading__WEBPACK_IMPORTED_MODULE_9__["default"], {
          role: "h2",
          margin: "50px 0 0 0",
          fontSize: "extra",
          children: "DESCRI\xC7\xC3O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 695,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styles_pages_produto__WEBPACK_IMPORTED_MODULE_15__["DescriptionWrapper"], {
          dangerouslySetInnerHTML: {
            __html: descricao
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 699,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Produto, "cf2kaHpiIJZ2rz4FtLNMPqvyuaM=", false, function () {
  return [context__WEBPACK_IMPORTED_MODULE_18__["useStateContext"], context__WEBPACK_IMPORTED_MODULE_18__["useStateContext"], react_cookie__WEBPACK_IMPORTED_MODULE_25__["useCookies"]];
});

_c2 = Produto;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

var _c, _c2;

$RefreshReg$(_c, "ProductPage");
$RefreshReg$(_c2, "Produto");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2l6ZXNQb3BVcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpemVzUG9wVXAvc3R5bGVzLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHV0by9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsImxheW91dCIsIndpZHRocyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwic3JjIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyY1NldCIsImNhbGxMb2FkZXIiLCJxdWFsaXR5IiwiaSIsInNpemVzIiwicGFyc2VJbnQiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImhlaWdodCIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbnNvbGUiLCJjb25maWdEb21haW5zIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwiU2l6ZXNQb3BVcCIsInByb3BzIiwib25DbG9zZSIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsInNob3ciLCJjc3MiLCJTdWJXcmFwcGVyIiwiY29sb3JzIiwid2hpdGUxMDAiLCJzcGFjaW5ncyIsInNtYWxsIiwicmFkaXVzIiwiYnJlYWtQb2ludHMiLCJtb2JpbGVMIiwiUHJvZHVjdFBhZ2UiLCJwcm9kdWN0IiwiUHJvZHV0byIsImNhdGVnb3JpYXMiLCJ0aWVyTGlzdCIsImlkIiwicmVzdW1vIiwibm9tZSIsInByZWNvIiwiZGVzY3JpY2FvIiwiY292ZXIiLCJtYXJjYSIsImdhbGVyaWEiLCJzbHVnIiwia2lkIiwidGFtYW5obyIsInVzZVN0YXRlQ29udGV4dCIsInNlcnZlciIsInVzZVN0YXRlIiwicXVhbnQiLCJzZXRRdWFudCIsImNlcCIsInNldENlcCIsInNpemUiLCJzZXRTaXplIiwiaXNDdXN0b20iLCJuYW1lIiwibnVtYmVyIiwicGVyc29uYWxpemF0aW9uIiwic2V0UGVyc29uYWxpemF0aW9uIiwic2hpcHBpbmdPcHRpb25zIiwic2V0U2hpcHBpbmdPcHRpb25zIiwic2hvd1VuYXV0aG9yaXplZCIsInNldFNob3dVbmF1dGhvcml6ZWQiLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwiY2FydCIsInNldENhcnQiLCJ1c2VDb29raWVzIiwiY29va2llIiwic2V0Q29va2llIiwic2hvd01pbmlDYXJ0Iiwic2V0U2hvd01pbmlDYXJ0IiwidXNlRWZmZWN0IiwibGVuZ3RoIiwic2hpcHBpbmdDYWxjdWxhdGUiLCJhbGVydCIsImFwaSIsInBvc3QiLCJwcm9kdWN0cyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzZWRleFNoaXBwaW5nIiwiZmluZCIsIm9wdGlvbiIsImVyciIsImhhbmRsZUFkZFF1YW50IiwiaGFuZGxlU3ViUXVhbnQiLCJhZGRUb0NhcnQiLCJjdXN0b20iLCJ0b3RhbCIsIm1hcCIsIml0ZW0iLCJjaGVja0lzRmF2b3JpdGUiLCJpc0Zhdm9yaXRlIiwidG9rZW4iLCJmYXZvcml0ZXMiLCJ1c2VyIiwicHJvZHVjdElkIiwiZmF2b3JpdGUiLCJwcm9kdXRvcyIsInB1dCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9nIiwiZmlsdGVyIiwidXJsIiwidG9VcHBlckNhc2UiLCJwcmljZUhhbmRsZXIiLCJwcmljZU51bWJlclRvUmVhZGJsZVByaWNlIiwicHJldlN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2F0b3J6ZSIsImRlemVzc2VpcyIsImRlem9pdG8iLCJ2aW50ZSIsInZpbnRlX2VfZG9pcyIsInZpbnRlX2VfcXVhdHJvIiwidmludGVfZV9zZWlzIiwidmludGVfZV9vaXRvIiwiYWR1bHRvIiwiUCIsIk0iLCJHIiwiR0ciLCJYRyIsIlhYRyIsImNlcE1hc2si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QUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkY7QUFBQSxrQkFERjtBQXNaRCxDQXRsQkQ7O0dBQU1QLE87VUFtQmVjLHdELEVBWU9BLHdELEVBRUVzQix3RDs7O01BakN4QnBDLE87O0FBOG9CU0YsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by9bc2x1Z10uNGFlNGE1NmQxYjBjNGE4MzE3NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8TG9hZGVyVmFsdWUsIChwcm9wczogTG9hZGVyUHJvcHMpID0+IHN0cmluZz4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIsIHdpZHRoICogM10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIENhbGxMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIGNhbGxMb2FkZXIobG9hZGVyUHJvcHM6IENhbGxMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSBQaWNrPFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzaXplcycgfCAnc3JjU2V0J1xuPlxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYyB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIGNvbnN0IHNyY1NldCA9IHdpZHRoc1xuICAgIC5tYXAoXG4gICAgICAodywgaSkgPT5cbiAgICAgICAgYCR7Y2FsbExvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgIH0ke2tpbmR9YFxuICAgIClcbiAgICAuam9pbignLCAnKVxuXG4gIGlmICghc2l6ZXMgJiYga2luZCA9PT0gJ3cnKSB7XG4gICAgc2l6ZXMgPSAnMTAwdncnXG4gIH1cblxuICBzcmMgPSBjYWxsTG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pXG5cbiAgcmV0dXJuIHsgc3JjLCBzaXplcywgc3JjU2V0IH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdibG9jaycgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbnR5cGUgTG9hZGVyUHJvcHMgPSBDYWxsTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZykge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoLCBxdWFsaXR5IH06IExvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoLCBxdWFsaXR5IH06IExvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsIi8qKlxuICogSXNvbW9ycGhpYyBiYXNlNjQgdGhhdCB3b3JrcyBvbiB0aGUgc2VydmVyIGFuZCBjbGllbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQmFzZTY0KHN0cjogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB3aW5kb3cuYnRvYShzdHIpXG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaW1hZ2VDb25maWdEZWZhdWx0PWV4cG9ydHMuVkFMSURfTE9BREVSUz12b2lkIDA7Y29uc3QgVkFMSURfTE9BREVSUz1bJ2RlZmF1bHQnLCdpbWdpeCcsJ2Nsb3VkaW5hcnknLCdha2FtYWknXTtleHBvcnRzLlZBTElEX0xPQURFUlM9VkFMSURfTE9BREVSUztjb25zdCBpbWFnZUNvbmZpZ0RlZmF1bHQ9e2RldmljZVNpemVzOls2NDAsNzUwLDgyOCwxMDgwLDEyMDAsMTkyMCwyMDQ4LDM4NDBdLGltYWdlU2l6ZXM6WzE2LDMyLDQ4LDY0LDk2LDEyOCwyNTYsMzg0XSxwYXRoOicvX25leHQvaW1hZ2UnLGxvYWRlcjonZGVmYXVsdCcsZG9tYWluczpbXX07ZXhwb3J0cy5pbWFnZUNvbmZpZ0RlZmF1bHQ9aW1hZ2VDb25maWdEZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UtY29uZmlnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9IZWFkaW5nJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdjb21wb25lbnRzL1BhcmFncmFwaCdcbmltcG9ydCB7IEZhSGVhcnQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSB7XG4gIHNob3c/OiBib29sZWFuXG4gIG9uQ2xvc2U/OiBWb2lkRnVuY3Rpb25cbn1cblxuY29uc3QgU2l6ZXNQb3BVcCA9IChwcm9wczogUHJvcHMpID0+IChcbiAgPFMuV3JhcHBlciB7Li4ucHJvcHN9PlxuICAgIDxTLlN1YldyYXBwZXI+XG4gICAgICA8RmFIZWFydCBzaXplPXs0NX0gY29sb3I9XCIjRTQyNzFCXCIgLz5cbiAgICAgIDxJbWFnZVxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgaGVpZ2h0PXsyNTB9XG4gICAgICAgIHNyYz1cIi9pbWcvUHJvZHVjdFBhZ2Uvc2l6ZXMuanBlZ1wiXG4gICAgICAvPlxuICAgICAgPFBhcmFncmFwaFxuICAgICAgICBmb250U2l6ZT1cImxhcmdlXCJcbiAgICAgICAgZm9udD1cInVidW50dVwiXG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIG1hcmdpbj1cIjMwcHggMFwiXG4gICAgICA+XG4gICAgICAgIFBhcmFiw6lucyEgdm9jw6ogYWRpY2lvbm91IG8gcHJvZHV0byBhIHN1YSBsaXN0YSBkZSBkZXNlam9zXG4gICAgICA8L1BhcmFncmFwaD5cbiAgICAgIDxCdXR0b24gb25DbGljaz17cHJvcHMub25DbG9zZX0gZm9udFNpemU9XCJsYXJnZVwiPlxuICAgICAgICBCZWxlemFcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvUy5TdWJXcmFwcGVyPlxuICA8L1MuV3JhcHBlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2l6ZXNQb3BVcFxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLidcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgJHsoeyB0aGVtZSwgc2hvdyB9KSA9PiBjc3NgXG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogMTA7XG4gICAgJHshc2hvd1xuICAgICAgPyBjc3NgXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgYFxuICAgICAgOiBjc3NgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYH1cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgU3ViV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGUxMDB9O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmJvcmRlci5yYWRpdXMuc21hbGx9O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtQb2ludHMubW9iaWxlTH0pIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICBgfVxuYFxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERlZmF1bHRUZW1wbGF0ZSBmcm9tICd0ZW1wbGF0ZXMvRGVmYXVsdCdcbmltcG9ydCBQYXltZW50QmFubmVyIGZyb20gJ2NvbXBvbmVudHMvUGF5bWVudHNCYW5uZXInXG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1Byb3BzQ29udGV4dCB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL0hlYWRpbmcnXG5pbXBvcnQgUGFkZGluZ1dyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9QYWRkaW5nV3JhcHBlcidcbmltcG9ydCBHcmlkV3JhcHBlciBmcm9tICdjb21wb25lbnRzL0dyaWRXcmFwcGVyJ1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ2NvbXBvbmVudHMvUHJvZHVjdENhcmQnXG5pbXBvcnQgSW5wdXQgZnJvbSAnY29tcG9uZW50cy9JbnB1dCdcbmltcG9ydCB7IE1kS2V5Ym9hcmRBcnJvd0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9tZCdcbmltcG9ydCB7XG4gIERlc2NyaXB0aW9uV3JhcHBlcixcbiAgUHJvZHVjdFNlY3Rpb24sXG4gIFByb2R1Y3RBc2lkZSxcbiAgUHJvZHVjdFJlZmVyZW5jZSxcbiAgUHJvZHVjdFByaWNlLFxuICBQcm9kdWN0SW5zdGFsbG1lbnRzLFxuICBRdWFudFRpdGxlLFxuICBTaXplc1dyYXBwZXIsXG4gIFBlcnNvbmFsaXphdGlvbkJ1dHRvblNlbGVjdG9yLFxuICBQZXJzb25hbGl6YXRpb25JbnB1dCxcbiAgUGVyc29uYWxpemF0aW9uSW5wdXRzV3JhcHBlcixcbiAgU2l6ZUJ1dHRvbixcbiAgQWRkMkZhdm9yaXRlcyxcbiAgTWluaUNhcnRXcmFwcGVyXG59IGZyb20gJ3N0eWxlcy9wYWdlcy9wcm9kdXRvJ1xuaW1wb3J0IHsgRmlIZWFydCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgRmFIZWFydCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnY29udGV4dCdcbmltcG9ydCBQcm9kdWN0R2FsZXJ5IGZyb20gJ2NvbXBvbmVudHMvUHJvZHVjdEdhbGVyeSdcbmltcG9ydCB7IEhvcml6b250YWxQYWRkaW5nV3JhcHBlciB9IGZyb20gJ3N0eWxlcy9wYWdlcy9ob21lJ1xuaW1wb3J0IHByaWNlSGFuZGxlciBmcm9tICd1dGlscy9oYW5kbGVQcmljZSdcbmltcG9ydCBRdWFudENvbnRyb2xsZXIgZnJvbSAnY29tcG9uZW50cy9RdWFudENvbnRyb2xsZXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IHsgY2VwTWFzayB9IGZyb20gJ3V0aWxzL21hc2tzJ1xuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMsIGdldFByb2R1Y3RCeVNsdWcgfSBmcm9tICdncmFwaHFsL3F1ZXJ5ZXMvcHJvZHV0b3MnXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWFzIH0gZnJvbSAnZ3JhcGhxbC9xdWVyeWVzL2NhdGVnb3JpYXMnXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAndXRpbHMvYXBvbGxvJ1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCBhcGkgZnJvbSAnc2VydmljZXMvYXBpJ1xuaW1wb3J0IFN1Y2Nlc3NBZGRQb3BVcCBmcm9tICdjb21wb25lbnRzL1N1Y2Nlc3NBZGRQb3BVcCdcbmltcG9ydCBNaW5pQ2FydCBmcm9tICdjb21wb25lbnRzL01pbmlDYXJ0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgUHJvZHVjdFByb3BzIH0gZnJvbSAndHlwZXMvUHJvZHVjdFByb3BzJ1xuaW1wb3J0IFNpemVzUG9wVXAgZnJvbSAnY29tcG9uZW50cy9TaXplc1BvcFVwJ1xuXG50eXBlIFByb2R1Y3RQYWdlUHJvcHMgPSB7XG4gIHRpZXJMaXN0OiBQcm9kdWN0UHJvcHNbXVxuICBwcm9kdWN0OiB7XG4gICAgaWQ6IG51bWJlclxuICAgIG5vbWU6IHN0cmluZ1xuICAgIHJlc3Vtbzogc3RyaW5nXG4gICAgcHJlY286IG51bWJlclxuICAgIGRlc2NyaWNhbzogc3RyaW5nXG4gICAga2lkOiBib29sZWFuXG4gICAgc2x1Zzogc3RyaW5nXG4gICAgbWFyY2E6IHtcbiAgICAgIG5vbWU6IHN0cmluZ1xuICAgIH1cbiAgICB0YW1hbmhvOiB7XG4gICAgICBhZHVsdG8/OiB7XG4gICAgICAgIFA6IGJvb2xlYW5cbiAgICAgICAgTTogYm9vbGVhblxuICAgICAgICBHOiBib29sZWFuXG4gICAgICAgIEdHOiBib29sZWFuXG4gICAgICAgIFhHOiBib29sZWFuXG4gICAgICAgIFhYRzogYm9vbGVhblxuICAgICAgfVxuICAgICAga2lkPzoge1xuICAgICAgICBjYXRvcnplOiBib29sZWFuXG4gICAgICAgIGRlemVzc2VpczogYm9vbGVhblxuICAgICAgICBkZXpvaXRvOiBib29sZWFuXG4gICAgICAgIHZpbnRlOiBib29sZWFuXG4gICAgICAgIHZpbnRlX2VfZG9pczogYm9vbGVhblxuICAgICAgICB2aW50ZV9lX3F1YXRybzogYm9vbGVhblxuICAgICAgICB2aW50ZV9lX3NlaXM6IGJvb2xlYW5cbiAgICAgICAgdmludGVfZV9vaXRvOiBib29sZWFuXG4gICAgICB9XG4gICAgfVxuICAgIGNvdmVyOiB7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH1cbiAgICBnYWxlcmlhOiBBcnJheTx7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH0+XG4gIH1cbiAgY2F0ZWdvcmlhczogQXJyYXk8e1xuICAgIG5vbWU6IHN0cmluZ1xuICB9PlxufVxuXG50eXBlIFNoaXBwaW5nT3B0aW9uID0ge1xuICBpZDogbnVtYmVyXG4gIG5hbWU6IHN0cmluZ1xuICBwcmljZTogbnVtYmVyXG4gIGRlbGl2ZXJ5X3RpbWU6IG51bWJlclxufVxuXG5jb25zdCBQcm9kdWN0UGFnZSA9IChwcm9wczogUHJvZHVjdFBhZ2VQcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLnByb2R1Y3QpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiA8UHJvZHV0byB7Li4ucHJvcHN9IC8+XG59XG5cbmNvbnN0IFByb2R1dG8gPSAoeyBwcm9kdWN0LCBjYXRlZ29yaWFzLCB0aWVyTGlzdCB9OiBQcm9kdWN0UGFnZVByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICByZXN1bW8sXG4gICAgbm9tZSxcbiAgICBwcmVjbyxcbiAgICBkZXNjcmljYW8sXG4gICAgY292ZXIsXG4gICAgbWFyY2EsXG4gICAgZ2FsZXJpYSxcbiAgICBzbHVnLFxuICAgIGtpZCxcbiAgICB0YW1hbmhvXG4gIH0gPSBwcm9kdWN0XG5cbiAgLy9jb25zb2xlLmxvZyhyZXN1bW8pXG4gIC8vY29uc29sZS5sb2cocHJvZHVjdC5yZXN1bW8pXG4gIC8vY29uc29sZS5sb2cocHJvZHVjdClcblxuICBjb25zdCB7IHNlcnZlciB9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgY29uc3QgW3F1YW50LCBzZXRRdWFudF0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbY2VwLCBzZXRDZXBdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGVyc29uYWxpemF0aW9uLCBzZXRQZXJzb25hbGl6YXRpb25dID0gdXNlU3RhdGUoe1xuICAgIGlzQ3VzdG9tOiBmYWxzZSxcbiAgICBuYW1lOiAnJyxcbiAgICBudW1iZXI6ICcnXG4gIH0pXG4gIGNvbnN0IFtzaGlwcGluZ09wdGlvbnMsIHNldFNoaXBwaW5nT3B0aW9uc10gPSB1c2VTdGF0ZTxTaGlwcGluZ09wdGlvbltdPihbXSlcbiAgY29uc3QgW3Nob3dVbmF1dGhvcml6ZWQsIHNldFNob3dVbmF1dGhvcml6ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzaG93U3VjY2Vzcywgc2V0U2hvd1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgY2FydCwgc2V0Q2FydCB9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgLy8gY29uc3QgW2lzRmF2b3JpdGUsIHNldElzRmF2b3JpdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFsndXNlciddKVxuICBjb25zdCBbc2hvd01pbmlDYXJ0LCBzZXRTaG93TWluaUNhcnRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBhbGVydCgnQWxvb2hoaCcpXG4gICAgaWYgKGNlcC5sZW5ndGggPT09IDgpIHtcbiAgICAgIHNoaXBwaW5nQ2FsY3VsYXRlKClcbiAgICB9XG4gICAgc2V0UXVhbnQoMSlcbiAgICBzZXRTaXplKCcnKVxuICB9LCBbc2x1Z10pXG5cbiAgY29uc3Qgc2hpcHBpbmdDYWxjdWxhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNlcC5sZW5ndGggPCA4KSB7XG4gICAgICBhbGVydCgnY2VwIGluY29tcGxldG8nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGF3YWl0IGFwaVxuICAgICAgLnBvc3QoJy9zaGlwcGluZy9jYWxjdWxhdGUnLCB7XG4gICAgICAgIGNlcCxcbiAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgIHF1YW50XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2VcblxuICAgICAgICBjb25zdCBzZWRleFNoaXBwaW5nID0gZGF0YS5maW5kKFxuICAgICAgICAgIChvcHRpb246IGFueSkgPT4gb3B0aW9uLm5hbWUgPT09ICdTRURFWCdcbiAgICAgICAgKVxuXG4gICAgICAgIHNldFNoaXBwaW5nT3B0aW9ucyhbc2VkZXhTaGlwcGluZ10pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgYWxlcnQoJ2FsZ28gZGV1IGVycmFkbywgcG9yIGZhdm9yIHRlbnRlIG5vdmFtZW50ZScpXG4gICAgICAgIC8vY29uc29sZS5sb2coZXJyKVxuICAgICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZFF1YW50ID0gKCkgPT4ge1xuICAgIHNldFF1YW50KHF1YW50ICsgMSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1YlF1YW50ID0gKCkgPT4ge1xuICAgIHNldFF1YW50KHF1YW50IC0gMSlcbiAgfVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9ICgpID0+IHtcbiAgICBpZiAoc2l6ZSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3Igc2VsZWNpb25lIG8gdGFtYW5obyBkZXNlamFkbycpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICAgIGlkLFxuICAgICAgbm9tZSxcbiAgICAgIHByZWNvLFxuICAgICAgZGVzY3JpY2FvLFxuICAgICAgY292ZXIsXG4gICAgICBzbHVnLFxuICAgICAgc2l6ZSxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICBpc0N1c3RvbTogcGVyc29uYWxpemF0aW9uLmlzQ3VzdG9tLFxuICAgICAgICBuYW1lOiBwZXJzb25hbGl6YXRpb24ubmFtZSxcbiAgICAgICAgbnVtYmVyOiBwZXJzb25hbGl6YXRpb24ubnVtYmVyXG4gICAgICB9LFxuICAgICAgcXVhbnRcbiAgICB9XG4gICAgLy8gLy9jb25zb2xlLmxvZyhwcm9kdWN0KVxuICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLmNhcnQucHJvZHVjdHMsIHByb2R1Y3RdXG4gICAgbGV0IHRvdGFsID0gMC4wXG5cbiAgICBwcm9kdWN0cz8ubWFwKChpdGVtKSA9PiB7XG4gICAgICB0b3RhbCA9IHRvdGFsICsgaXRlbS5wcmVjbyAqIGl0ZW0ucXVhbnRcbiAgICB9KVxuXG4gICAgc2V0Q2FydCh7XG4gICAgICBwcm9kdWN0cyxcbiAgICAgIHRvdGFsXG4gICAgfSlcblxuICAgIHNldFNob3dNaW5pQ2FydCh0cnVlKVxuICAgIC8vIGFsZXJ0KCdwcm9kdXRvIGFkaWNpb25hZG8nKVxuICB9XG5cbiAgY29uc3QgY2hlY2tJc0Zhdm9yaXRlID0gKCkgPT4ge1xuICAgIGxldCBpc0Zhdm9yaXRlID0gZmFsc2VcbiAgICBpZiAoIWNvb2tpZS50b2tlbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgZmF2b3JpdGVzIH0gPSBjb29raWUudXNlclxuXG4gICAgaWYgKCFmYXZvcml0ZXMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZhdm9yaXRlcy5tYXAoKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3RJZCwgaWQpXG4gICAgICBpZiAocHJvZHVjdElkID09IGlkKSB7XG4gICAgICAgIGlzRmF2b3JpdGUgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBpc0Zhdm9yaXRlXG4gIH1cblxuICBjb25zdCBmYXZvcml0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWNvb2tpZS50b2tlbikge1xuICAgICAgc2V0U2hvd1VuYXV0aG9yaXplZCh0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghY2hlY2tJc0Zhdm9yaXRlKCkpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHByb2R1dG9zOiBbLi4uY29va2llLnVzZXIuZmF2b3JpdGVzLCBpZF1cbiAgICAgIH1cblxuICAgICAgYXdhaXQgYXBpXG4gICAgICAgIC5wdXQoJy9mYXZvcml0b3MnLCBkYXRhLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZS50b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd1N1Y2Nlc3ModHJ1ZSlcbiAgICAgICAgICBzZXRDb29raWUoJ3VzZXInLCB7XG4gICAgICAgICAgICAuLi5jb29raWUudXNlcixcbiAgICAgICAgICAgIGZhdm9yaXRlczogWy4uLmNvb2tpZS51c2VyLmZhdm9yaXRlcywgaWRdXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcHJvZHV0b3M6IGNvb2tpZS51c2VyLmZhdm9yaXRlcy5maWx0ZXIoXG4gICAgICAgICAgKHByb2R1Y3RJZDogbnVtYmVyKSA9PiBwcm9kdWN0SWQgIT0gaWRcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgYXdhaXQgYXBpXG4gICAgICAgIC5wdXQoJy9mYXZvcml0b3MnLCBkYXRhLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZS50b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoJ3Byb2R1dG8gZXhjbHVpZG8gZGEgc3VhIGxpc3RhIGRlIGZhdm9yaXRvcycpXG4gICAgICAgICAgc2V0Q29va2llKCd1c2VyJywge1xuICAgICAgICAgICAgLi4uY29va2llLnVzZXIsXG4gICAgICAgICAgICBmYXZvcml0ZXM6IGNvb2tpZS51c2VyLmZhdm9yaXRlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChwcm9kdWN0SWQ6IG51bWJlcikgPT4gcHJvZHVjdElkICE9IGlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvZHVjdC5ub21lfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwcm9kdWN0Lm5vbWV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb2R1Y3QucmVzdW1vfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvZHVjdC5yZXN1bW99IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfSE9TVCB8fFxuICAgICAgICAgICAgJ2xvY2FsaG9zdDoxMzM3JyArIHByb2R1Y3QuY292ZXIudXJsXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8U2l6ZXNQb3BVcCBzaG93PXt0cnVlfSAvPlxuICAgICAgPFN1Y2Nlc3NBZGRQb3BVcFxuICAgICAgICBzaG93PXtzaG93U3VjY2Vzc31cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1N1Y2Nlc3MoZmFsc2UpfVxuICAgICAgLz5cblxuICAgICAgPE1pbmlDYXJ0V3JhcHBlciBzaG93PXtzaG93TWluaUNhcnR9PlxuICAgICAgICA8TWluaUNhcnRcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93TWluaUNhcnQoZmFsc2UpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvTWluaUNhcnRXcmFwcGVyPlxuICAgICAgPERlZmF1bHRUZW1wbGF0ZSBjYXRlZ29yaWFzPXtjYXRlZ29yaWFzfT5cbiAgICAgICAgPFBheW1lbnRCYW5uZXIgLz5cbiAgICAgICAgPFBhZGRpbmdXcmFwcGVyPlxuICAgICAgICAgIDxIb3Jpem9udGFsUGFkZGluZ1dyYXBwZXI+XG4gICAgICAgICAgICA8UHJvZHVjdFNlY3Rpb24+XG4gICAgICAgICAgICAgIDxQcm9kdWN0R2FsZXJ5IGltYWdlcz17Z2FsZXJpYX0gLz5cbiAgICAgICAgICAgICAgPFByb2R1Y3RBc2lkZT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICAgICAgbGluZUJvdHRvbT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInh4eGxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiMCAwIDEwcHggMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge25vbWU/LnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0UmVmZXJlbmNlPlxuICAgICAgICAgICAgICAgICAgPGI+UmVmZXJlbmNpYTo8L2I+IHtzbHVnfVxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdFJlZmVyZW5jZT5cblxuICAgICAgICAgICAgICAgIDxBZGQyRmF2b3JpdGVzIG9uQ2xpY2s9e2Zhdm9yaXRlfT5cbiAgICAgICAgICAgICAgICAgIHtjaGVja0lzRmF2b3JpdGUoKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8RmFIZWFydCAvPiAmbmJzcDsgUmVtb3ZlciBkb3MgZmF2b3JpdG9zXG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8RmlIZWFydCAvPiAmbmJzcDsgQWRpY2lvbmFyIGFvcyBmYXZvcml0b3NcbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQWRkMkZhdm9yaXRlcz5cbiAgICAgICAgICAgICAgICB7LyogPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPiAqL31cbiAgICAgICAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgICAgICAgIDxQcm9kdWN0UHJpY2U+XG4gICAgICAgICAgICAgICAgICB7cHJpY2VIYW5kbGVyLnByaWNlTnVtYmVyVG9SZWFkYmxlUHJpY2UocHJlY28pfVxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdFByaWNlPlxuXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RJbnN0YWxsbWVudHM+XG4gICAgICAgICAgICAgICAgICB7YG91IGVudMOjbyAzeCBkZSAke3ByaWNlSGFuZGxlci5wcmljZU51bWJlclRvUmVhZGJsZVByaWNlKFxuICAgICAgICAgICAgICAgICAgICBwcmVjbyAvIDNcbiAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICA8L1Byb2R1Y3RJbnN0YWxsbWVudHM+XG5cbiAgICAgICAgICAgICAgICA8UXVhbnRUaXRsZT5RdWFudGlkYWRlPC9RdWFudFRpdGxlPlxuXG4gICAgICAgICAgICAgICAgPFF1YW50Q29udHJvbGxlclxuICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkPXtoYW5kbGVBZGRRdWFudH1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Yj17aGFuZGxlU3ViUXVhbnR9XG4gICAgICAgICAgICAgICAgICBxdWFudD17cXVhbnR9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFRvQ2FydH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZDJjYXJ0XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJyZWQxMDBcIlxuICAgICAgICAgICAgICAgICAgcmFkaXVzPXs1MH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBREQgQ0FSUklOSE9cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8UGVyc29uYWxpemF0aW9uQnV0dG9uU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFBlcnNvbmFsaXphdGlvbigocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0N1c3RvbTogIXBlcnNvbmFsaXphdGlvbi5pc0N1c3RvbVxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQRVJTT05BTElaQcOHw4NPICZuYnNwOyA8TWRLZXlib2FyZEFycm93RG93biAvPlxuICAgICAgICAgICAgICAgIDwvUGVyc29uYWxpemF0aW9uQnV0dG9uU2VsZWN0b3I+XG5cbiAgICAgICAgICAgICAgICB7cGVyc29uYWxpemF0aW9uLmlzQ3VzdG9tICYmIChcbiAgICAgICAgICAgICAgICAgIDxQZXJzb25hbGl6YXRpb25JbnB1dHNXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8UGVyc29uYWxpemF0aW9uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTgwfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTk9NRVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcnNvbmFsaXphdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBlcnNvbmFsaXphdGlvbigocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQZXJzb25hbGl6YXRpb25JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTsOaTUVST1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcnNvbmFsaXphdGlvbi5udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGVyc29uYWxpemF0aW9uKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9QZXJzb25hbGl6YXRpb25JbnB1dHNXcmFwcGVyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7LyogdGFtYW5ob3MgKi99XG4gICAgICAgICAgICAgICAgPFNpemVzV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIHtraWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAge3RhbWFuaG8/LmtpZD8uY2F0b3J6ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2l6ZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2l6ZSA9PT0gJzE0JyAmJiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaXplKCcxNCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtzaXplID09PSAnTScgPyAnd2hpdGUxMDAnIDogJ2JsYWNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2l6ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAge3RhbWFuaG8/LmtpZD8uZGV6ZXNzZWlzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzaXplID09PSAnMTYnICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoJzE2JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3NpemUgPT09ICdNJyA/ICd3aGl0ZTEwMCcgOiAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaXplQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7dGFtYW5obz8ua2lkPy5kZXpvaXRvICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzaXplID09PSAnMTgnICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoJzE4JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3NpemUgPT09ICdNJyA/ICd3aGl0ZTEwMCcgOiAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAxOFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaXplQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7dGFtYW5obz8ua2lkPy52aW50ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2l6ZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2l6ZSA9PT0gJzIwJyAmJiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaXplKCcyMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtzaXplID09PSAnTScgPyAnd2hpdGUxMDAnIDogJ2JsYWNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgMjBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2l6ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAge3RhbWFuaG8/LmtpZD8udmludGVfZV9kb2lzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzaXplID09PSAnMjInICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoJzIyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3NpemUgPT09ICdNJyA/ICd3aGl0ZTEwMCcgOiAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAyMlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaXplQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7dGFtYW5obz8ua2lkPy52aW50ZV9lX3F1YXRybyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2l6ZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2l6ZSA9PT0gJzI0JyAmJiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaXplKCcyNCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtzaXplID09PSAnTScgPyAnd2hpdGUxMDAnIDogJ2JsYWNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgMjRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2l6ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAge3RhbWFuaG8/LmtpZD8udmludGVfZV9zZWlzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzaXplID09PSAnMjYnICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoJzI2JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3NpemUgPT09ICdNJyA/ICd3aGl0ZTEwMCcgOiAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAyNlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaXplQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7dGFtYW5obz8ua2lkPy52aW50ZV9lX29pdG8gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpemVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NpemUgPT09ICcyOCcgJiYgdHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZSgnMjgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17c2l6ZSA9PT0gJ00nID8gJ3doaXRlMTAwJyA6ICdibGFjayd9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDI4XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpemVCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIHt0YW1hbmhvPy5hZHVsdG8/LlAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpemVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NpemUgPT09ICdQJyAmJiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaXplKCdQJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3NpemUgPT09ICdNJyA/ICd3aGl0ZTEwMCcgOiAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpemVCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7dGFtYW5obz8uYWR1bHRvPy5NICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzaXplID09PSAnTScgJiYgdHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZSgnTScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtzaXplID09PSAnTScgPyAnd2hpdGUxMDAnIDogJ2JsYWNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaXplQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAge3RhbWFuaG8/LmFkdWx0bz8uRyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2l6ZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2l6ZSA9PT0gJ0cnICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoJ0cnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17c2l6ZSA9PT0gJ00nID8gJ3doaXRlMTAwJyA6ICdibGFjayd9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2l6ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIHt0YW1hbmhvPy5hZHVsdG8/LkdHICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzaXplID09PSAnR0cnICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoJ0dHJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3NpemUgPT09ICdHRycgPyAnd2hpdGUxMDAnIDogJ2JsYWNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgR0dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2l6ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAge3RhbWFuaG8/LmFkdWx0bz8uWEcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpemVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NpemUgPT09ICdYRycgJiYgdHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZSgnWEcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17c2l6ZSA9PT0gJ1hHJyA/ICd3aGl0ZTEwMCcgOiAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBYR1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaXplQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7dGFtYW5obz8uYWR1bHRvPy5YWEcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpemVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NpemUgPT09ICdYWEcnICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoJ1hYRycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtzaXplID09PSAnWFhHJyA/ICd3aGl0ZTEwMCcgOiAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBYWEdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2l6ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TaXplc1dyYXBwZXI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBwaW5nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5DYWxjdWxhciBmcmV0ZSBlIHByYXpvPC9oMz5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXAtaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAwMDAwLTAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoPXsxfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjZXB9XG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJ4bGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2VwKGNlcE1hc2soZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3NoaXBwaW5nQ2FsY3VsYXRlfT5PSzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtzaGlwcGluZ09wdGlvbnNbMF0gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3NoaXBwaW5nT3B0aW9uc1swXSA/ICcnIDogJ2hpZGRlbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW50cmVnYSA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RnJldGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJhem88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NoaXBwaW5nT3B0aW9ucz8ubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntvcHRpb24/Lm5hbWV9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUhhbmRsZXIucHJpY2VOdW1iZXJUb1JlYWRibGVQcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIob3B0aW9uPy5wcmljZSAvIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntgMTUgZGlhcyhzKWB9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgKiBFc3RlIHByYXpvIGRlIGVudHJlZ2EgZXN0w6EgY29uc2lkZXJhbmRvIGEgZW5jb21lbmRhIGRvXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdXRvICsgcHJhem8gZGUgZW50cmVnYS5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFJlZmVyZW5jZT5cbiAgICAgICAgICAgICAgICAgIDx1PlRhYmVsYSBkZSBtZWRpZGFzPC91PlxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdFJlZmVyZW5jZT5cbiAgICAgICAgICAgICAgPC9Qcm9kdWN0QXNpZGU+XG4gICAgICAgICAgICA8L1Byb2R1Y3RTZWN0aW9uPlxuICAgICAgICAgIDwvSG9yaXpvbnRhbFBhZGRpbmdXcmFwcGVyPlxuXG4gICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgIHJvbGU9XCJoMlwiXG4gICAgICAgICAgICBsaW5lQm90dG9tPXtmYWxzZX1cbiAgICAgICAgICAgIGZvbnRTaXplPVwieHh4bGFyZ2VcIlxuICAgICAgICAgICAgbWFyZ2luPVwiNTBweCAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBRVUVNIFZJVSBFU1RFIFBST0RVVE8sIFZJVSBUQU1Cw4lNXG4gICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgPEdyaWRXcmFwcGVyPlxuICAgICAgICAgICAge3RpZXJMaXN0Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9kdWN0Lm5vbWV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3NlcnZlciArIHByb2R1Y3QuY292ZXIudXJsfVxuICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByZWNvfVxuICAgICAgICAgICAgICAgIHNsdWc9e3Byb2R1Y3Quc2x1Z31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZFdyYXBwZXI+XG5cbiAgICAgICAgICA8SGVhZGluZyByb2xlPVwiaDJcIiBtYXJnaW49XCI1MHB4IDAgMCAwXCIgZm9udFNpemU9XCJleHRyYVwiPlxuICAgICAgICAgICAgREVTQ1JJw4fDg09cbiAgICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgICA8RGVzY3JpcHRpb25XcmFwcGVyIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpY2FvIH19IC8+XG4gICAgICAgIDwvUGFkZGluZ1dyYXBwZXI+XG4gICAgICA8L0RlZmF1bHRUZW1wbGF0ZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKClcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IGdldEFsbFByb2R1Y3RzXG4gIH0pXG5cbiAgY29uc3QgeyBwcm9kdXRvcyB9ID0gcmVzcG9uc2U/LmRhdGFcblxuICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwcm9kdXRvcz8ubWFwKChwcm9kdWN0OiBQcm9kdWN0UHJvcHMpID0+IHtcbiAgICAgIHJldHVybiB7IHBhcmFtczogeyBzbHVnOiBwcm9kdWN0LnNsdWcgfSB9XG4gICAgfSksXG4gICAgZmFsbGJhY2s6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfTogR2V0U3RhdGljUHJvcHNDb250ZXh0KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKVxuXG4gIGNvbnN0IHNsdWcgPSBwYXJhbXM/LnNsdWcgYXMgc3RyaW5nXG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBnZXRQcm9kdWN0QnlTbHVnLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2x1Z1xuICAgIH1cbiAgfSlcblxuICBpZiAoIWRhdGE/LnByb2R1dG9zPy5sZW5ndGgpIHtcbiAgICByZXR1cm4geyBwcm9wczoge30sIG5vdEZvdW5kOiB0cnVlIH1cbiAgfVxuXG4gIGNvbnN0IGNhdGVnb3JpZXNSZXNwb25zZSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IGdldENhdGVnb3JpYXNcbiAgfSlcblxuICBjb25zdCB7IHByb2R1dG9zLCBkZXN0YXF1ZSB9ID0gZGF0YVxuICBjb25zdCB7IGNhdGVnb3JpYXMgfSA9IGNhdGVnb3JpZXNSZXNwb25zZS5kYXRhXG5cbiAgLy8gY29uc29sZS5sb2cocHJvZHV0b3NbMF0udGFtYW5obylcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0OiBwcm9kdXRvc1swXSxcbiAgICAgIGNhdGVnb3JpYXMsXG4gICAgICB0aWVyTGlzdDogZGVzdGFxdWUucHJvZHV0b3MubWFwKChwcm9kdXRvOiBhbnkpID0+IHByb2R1dG8ucHJvZHV0bylcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=