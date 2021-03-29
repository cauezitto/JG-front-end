webpackHotUpdate_N_E("pages/produto/[slug]",{

/***/ "./src/components/ProductCard/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ProductCard/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/ProductCard/styles.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_handlePrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/handlePrice */ "./src/utils/handlePrice.ts");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\cauezitto\\Documents\\projetos\\JG\\front-end\\src\\components\\ProductCard\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var ProductCard = function ProductCard(_ref) {
  _s();

  var id = _ref.id,
      name = _ref.name,
      image = _ref.image,
      price = _ref.price,
      slug = _ref.slug;

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_7__["useCookies"])(['user']),
      _useCookies2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useCookies, 1),
      cookie = _useCookies2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      isFavorite = _useState[0],
      setIsFavorite = _useState[1];

  var checkIsFavorite = function checkIsFavorite() {
    if (!cookie.token) {
      return;
    }

    if (!cookie.user) {
      return;
    }

    var favorites = cookie.user.favorites;

    if (!favorites) {
      return;
    }

    favorites.map(function (productId) {
      if (productId == id) {
        setIsFavorite(true);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    checkIsFavorite();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/produto/".concat(slug),
    passHref: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["favoriteWrapper"], {
        children: isFavorite ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaHeart"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiHeart"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 39
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          src: image,
          alt: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["InfoWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["ProductTitle"], {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["ProductPrice"], {
          children: utils_handlePrice__WEBPACK_IMPORTED_MODULE_4__["default"].priceNumberToReadblePrice(price ? price : 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Installments"], {
          children: "Ou ent\xE3o 12x de ".concat(utils_handlePrice__WEBPACK_IMPORTED_MODULE_4__["default"].priceNumberToReadblePrice((price ? price : 0) / 12))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "cart-button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["CartButton"], {
            role: "button",
            children: "ADD CARRINHO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_s(ProductCard, "pSrOiPyZAQZZkK8oliBUTEGS9no=", false, function () {
  return [react_cookie__WEBPACK_IMPORTED_MODULE_7__["useCookies"]];
});

_c = ProductCard;
/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

var _c;

$RefreshReg$(_c, "ProductCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENhcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJwcmljZSIsInNsdWciLCJ1c2VDb29raWVzIiwiY29va2llIiwidXNlU3RhdGUiLCJpc0Zhdm9yaXRlIiwic2V0SXNGYXZvcml0ZSIsImNoZWNrSXNGYXZvcml0ZSIsInRva2VuIiwidXNlciIsImZhdm9yaXRlcyIsIm1hcCIsInByb2R1Y3RJZCIsInVzZUVmZmVjdCIsInByaWNlSGFuZGxlciIsInByaWNlTnVtYmVyVG9SZWFkYmxlUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW9EO0FBQUE7O0FBQUEsTUFBakRDLEVBQWlELFFBQWpEQSxFQUFpRDtBQUFBLE1BQTdDQyxJQUE2QyxRQUE3Q0EsSUFBNkM7QUFBQSxNQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLEtBQWdDLFFBQWhDQSxLQUFnQztBQUFBLE1BQXpCQyxJQUF5QixRQUF6QkEsSUFBeUI7O0FBQUEsb0JBQ3JEQywrREFBVSxDQUFDLENBQUMsTUFBRCxDQUFELENBRDJDO0FBQUE7QUFBQSxNQUMvREMsTUFEK0Q7O0FBQUEsa0JBRWxDQyxzREFBUSxDQUFDLEtBQUQsQ0FGMEI7QUFBQSxNQUUvREMsVUFGK0Q7QUFBQSxNQUVuREMsYUFGbUQ7O0FBSXRFLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJLENBQUNKLE1BQU0sQ0FBQ0ssS0FBWixFQUFtQjtBQUNqQjtBQUNEOztBQUVELFFBQUksQ0FBQ0wsTUFBTSxDQUFDTSxJQUFaLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBUDJCLFFBU3BCQyxTQVRvQixHQVNOUCxNQUFNLENBQUNNLElBVEQsQ0FTcEJDLFNBVG9COztBQVc1QixRQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZDtBQUNEOztBQUVEQSxhQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxTQUFELEVBQXVCO0FBQ25DLFVBQUlBLFNBQVMsSUFBSWYsRUFBakIsRUFBcUI7QUFDbkJTLHFCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FwQkQ7O0FBc0JBTyx5REFBUyxDQUFDLFlBQU07QUFDZE4sbUJBQWU7QUFDaEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxxQkFBY04sSUFBZCxDQUFWO0FBQWdDLFlBQVEsTUFBeEM7QUFBQSwyQkFDRSxxRUFBQywrQ0FBRDtBQUFBLDhCQUNFLHFFQUFDLHVEQUFEO0FBQUEsa0JBQ0dJLFVBQVUsZ0JBQUcscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxnQkFBaUIscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyxvREFBRDtBQUFBLCtCQUNFLHFFQUFDLDZDQUFEO0FBQVMsYUFBRyxFQUFFTixLQUFkO0FBQXFCLGFBQUcsRUFBRUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQU9FLHFFQUFDLG1EQUFEO0FBQUEsZ0NBQ0UscUVBQUMsb0RBQUQ7QUFBQSxvQkFBaUJBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxvREFBRDtBQUFBLG9CQUNHZ0IseURBQVksQ0FBQ0MseUJBQWIsQ0FBdUNmLEtBQUssR0FBR0EsS0FBSCxHQUFXLENBQXZEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFLHFFQUFDLG9EQUFEO0FBQUEsaURBQW9DYyx5REFBWSxDQUFDQyx5QkFBYixDQUNsQyxDQUFDZixLQUFLLEdBQUdBLEtBQUgsR0FBVyxDQUFqQixJQUFzQixFQURZLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVFFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQ0UscUVBQUMsa0RBQUQ7QUFBYyxnQkFBSSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0F0REQ7O0dBQU1KLFc7VUFDYU0sdUQ7OztLQURiTixXO0FBd0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdXRvL1tzbHVnXS4wOWJhYWVkYjgzM2JiY2ZlYjMxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBwcmljZUhhbmRsZXIgZnJvbSAndXRpbHMvaGFuZGxlUHJpY2UnXG5pbXBvcnQgeyBGaUhlYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5pbXBvcnQgeyBGYUhlYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0UHJvcHMgPSB7XG4gIGlkOiBudW1iZXJcbiAgaW1hZ2U6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgcHJpY2U6IG51bWJlclxuICBzbHVnOiBzdHJpbmdcbiAgaXNGYXZvcml0ZT86IGJvb2xlYW5cbn1cblxuY29uc3QgUHJvZHVjdENhcmQgPSAoeyBpZCwgbmFtZSwgaW1hZ2UsIHByaWNlLCBzbHVnIH06IFByb2R1Y3RQcm9wcykgPT4ge1xuICBjb25zdCBbY29va2llXSA9IHVzZUNvb2tpZXMoWyd1c2VyJ10pXG4gIGNvbnN0IFtpc0Zhdm9yaXRlLCBzZXRJc0Zhdm9yaXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNoZWNrSXNGYXZvcml0ZSA9ICgpID0+IHtcbiAgICBpZiAoIWNvb2tpZS50b2tlbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFjb29raWUudXNlcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBmYXZvcml0ZXMgfSA9IGNvb2tpZS51c2VyXG5cbiAgICBpZiAoIWZhdm9yaXRlcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZmF2b3JpdGVzLm1hcCgocHJvZHVjdElkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChwcm9kdWN0SWQgPT0gaWQpIHtcbiAgICAgICAgc2V0SXNGYXZvcml0ZSh0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrSXNGYXZvcml0ZSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17YC9wcm9kdXRvLyR7c2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgIDxTLldyYXBwZXI+XG4gICAgICAgIDxTLmZhdm9yaXRlV3JhcHBlcj5cbiAgICAgICAgICB7aXNGYXZvcml0ZSA/IDxGYUhlYXJ0IC8+IDogPEZpSGVhcnQgLz59XG4gICAgICAgIDwvUy5mYXZvcml0ZVdyYXBwZXI+XG4gICAgICAgIDxTLkltYWdlV3JhcHBlcj5cbiAgICAgICAgICA8Uy5JbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e25hbWV9IC8+XG4gICAgICAgIDwvUy5JbWFnZVdyYXBwZXI+XG4gICAgICAgIDxTLkluZm9XcmFwcGVyPlxuICAgICAgICAgIDxTLlByb2R1Y3RUaXRsZT57bmFtZX08L1MuUHJvZHVjdFRpdGxlPlxuICAgICAgICAgIDxTLlByb2R1Y3RQcmljZT5cbiAgICAgICAgICAgIHtwcmljZUhhbmRsZXIucHJpY2VOdW1iZXJUb1JlYWRibGVQcmljZShwcmljZSA/IHByaWNlIDogMCl9XG4gICAgICAgICAgPC9TLlByb2R1Y3RQcmljZT5cbiAgICAgICAgICA8Uy5JbnN0YWxsbWVudHM+e2BPdSBlbnTDo28gMTJ4IGRlICR7cHJpY2VIYW5kbGVyLnByaWNlTnVtYmVyVG9SZWFkYmxlUHJpY2UoXG4gICAgICAgICAgICAocHJpY2UgPyBwcmljZSA6IDApIC8gMTJcbiAgICAgICAgICApfWB9PC9TLkluc3RhbGxtZW50cz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYnV0dG9uXCI+XG4gICAgICAgICAgICA8Uy5DYXJ0QnV0dG9uIHJvbGU9XCJidXR0b25cIj5BREQgQ0FSUklOSE88L1MuQ2FydEJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TLkluZm9XcmFwcGVyPlxuICAgICAgPC9TLldyYXBwZXI+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9