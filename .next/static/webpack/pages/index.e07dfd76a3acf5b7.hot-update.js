"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar HomePage = function(props) {\n    var isEmpty = JSON.stringify(props.meetups) === \"{}\";\n    console.log(isEmpty);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Meetups\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\AJ\\\\myProjects\\\\japs-jabee\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Browse a huge list of react meetups\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\AJ\\\\myProjects\\\\japs-jabee\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\AJ\\\\myProjects\\\\japs-jabee\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\AJ\\\\myProjects\\\\japs-jabee\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            isEmpty ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"No meetups found!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\AJ\\\\myProjects\\\\japs-jabee\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"C:\\\\AJ\\\\myProjects\\\\japs-jabee\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMEQ7QUFDN0I7QUFFN0IsSUFBTUUsUUFBUSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUMxQixJQUFNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxLQUFLLENBQUNJLE9BQU8sQ0FBQyxLQUFLLElBQUk7SUFDdERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUMsQ0FBQztJQUNyQixxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJOztrQ0FDSCw4REFBQ1MsT0FBSztrQ0FBQyxTQUFPOzs7Ozs2QkFBUTtrQ0FDdEIsOERBQUNDLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxhQUFhO3dCQUNsQkMsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7NkJBQ3ZDOzs7Ozs7cUJBQ0g7MEJBQ1AsOERBQUNDLElBQUU7MEJBQUMsV0FBUzs7Ozs7cUJBQUs7WUFDakJWLE9BQU8saUJBQ04sOERBQUNXLElBQUU7MEJBQUMsbUJBQWlCOzs7OztxQkFBSyxpQkFFMUIsOERBQUNmLHNFQUFVO2dCQUFDTyxPQUFPLEVBQUVKLEtBQUssQ0FBQ0ksT0FBTzs7Ozs7cUJBQUk7O29CQUd2QyxDQUNIO0FBQ0osQ0FBQztBQXJCS0wsS0FBQUEsUUFBUTs7QUF1Q2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgaXNFbXB0eSA9IEpTT04uc3RyaW5naWZ5KHByb3BzLm1lZXR1cHMpID09PSAne30nO1xyXG4gIGNvbnNvbGUubG9nKGlzRW1wdHkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgY29udGVudD0nQnJvd3NlIGEgaHVnZSBsaXN0IG9mIHJlYWN0IG1lZXR1cHMnXHJcbiAgICAgICAgPjwvbWV0YT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cclxuICAgICAge2lzRW1wdHkgPyAoXHJcbiAgICAgICAgPGgyPk5vIG1lZXR1cHMgZm91bmQhPC9oMj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgICApfVxyXG4gICAgICAgey8qIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS1qb2xsaWJlZS1tZW51LnZlcmNlbC5hcHAvbWVudScpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBkYXRhLmRhdGEubWFwKChtZW51KSA9PiAoe1xyXG4gICAgICAgIGlkOiBtZW51LmlkLFxyXG4gICAgICAgIGNhdGVnb3J5OiBtZW51LmNhdGVnb3J5LFxyXG4gICAgICAgIGltYWdlOiBtZW51LmltYWdlLFxyXG4gICAgICAgIHBhcmFtOiBtZW51LnBhcmFtLFxyXG4gICAgICB9KSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkhlYWQiLCJIb21lUGFnZSIsInByb3BzIiwiaXNFbXB0eSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZWV0dXBzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaDEiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});