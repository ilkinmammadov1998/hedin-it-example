"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cars/[...id]/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzPzUyNDIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/cars/[...id]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/cars/[...id]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst CarDetails = (param)=>{\n    let { params } = param;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const search = searchParams.get(\"search\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-[sans-serif]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-6 lg:max-w-6xl max-w-2xl mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid items-start grid-cols-1 lg:grid-cols-2 gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full lg:sticky top-0 sm:flex gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/carimage.jpg\",\n                            alt: \"Product\",\n                            className: \"w-4/5 rounded object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-extrabold text-gray-800\",\n                                children: params.name\n                            }, void 0, false, {\n                                fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-lg font-bold text-gray-800\",\n                                        children: \"About the item\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"A gray t-shirt is a wardrobe essential because it is so versatile.\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                                                lineNumber: 25,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"This is easy to care for. They can usually be machine-washed and dried on low heat.\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                                                lineNumber: 26,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"You can add your own designs, paintings, or embroidery to make it your own.\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ilkin/hedin_task/src/app/cars/[...id]/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CarDetails, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = CarDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarDetails);\nvar _c;\n$RefreshReg$(_c, \"CarDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2Fycy9bLi4uaWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRWlEO0FBRWpELE1BQU1DLGFBQWE7UUFBQyxFQUFFQyxNQUFNLEVBQU87O0lBRS9CLE1BQU1DLGVBQWVILGdFQUFlQTtJQUVwQyxNQUFNSSxTQUFTRCxhQUFhRSxHQUFHLENBQUM7SUFFaEMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJQyxLQUFJOzRCQUF1QkMsS0FBSTs0QkFBVUgsV0FBVTs7Ozs7Ozs7Ozs7a0NBRTVELDhEQUFDRDs7MENBQ0csOERBQUNLO2dDQUFHSixXQUFVOzBDQUF5Q0wsT0FBT1UsSUFBSTs7Ozs7OzBDQUVsRSw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFBa0M7Ozs7OztrREFDaEQsOERBQUNPO3dDQUFHUCxXQUFVOzswREFDViw4REFBQ1E7MERBQUc7Ozs7OzswREFDSiw4REFBQ0E7MERBQUc7Ozs7OzswREFDSiw4REFBQ0E7MERBQUc7Ozs7OzswREFDSiw4REFBQ0E7MERBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTcEM7R0EvQk1kOztRQUVtQkQsNERBQWVBOzs7S0FGbENDO0FBaUNOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY2Fycy9bLi4uaWRdL3BhZ2UudHN4P2ViNjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcblxuY29uc3QgQ2FyRGV0YWlscyA9ICh7IHBhcmFtcyB9OiBhbnkpID0+IHtcblxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG5cbiAgICBjb25zdCBzZWFyY2ggPSBzZWFyY2hQYXJhbXMuZ2V0KCdzZWFyY2gnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LVtzYW5zLXNlcmlmXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgbGc6bWF4LXctNnhsIG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGl0ZW1zLXN0YXJ0IGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnN0aWNreSB0b3AtMCBzbTpmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2FyaW1hZ2UuanBnXCIgYWx0PVwiUHJvZHVjdFwiIGNsYXNzTmFtZT1cInctNC81IHJvdW5kZWQgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTgwMFwiPntwYXJhbXMubmFtZX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPkFib3V0IHRoZSBpdGVtPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0zIGxpc3QtZGlzYyBtdC00IHBsLTQgdGV4dC1zbSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BIGdyYXkgdC1zaGlydCBpcyBhIHdhcmRyb2JlIGVzc2VudGlhbCBiZWNhdXNlIGl0IGlzIHNvIHZlcnNhdGlsZS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXZhaWxhYmxlIGluIGEgd2lkZSByYW5nZSBvZiBzaXplcywgZnJvbSBleHRyYSBzbWFsbCB0byBleHRyYSBsYXJnZSwgYW5kIGV2ZW4gaW4gdGFsbCBhbmQgcGV0aXRlIHNpemVzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaGlzIGlzIGVhc3kgdG8gY2FyZSBmb3IuIFRoZXkgY2FuIHVzdWFsbHkgYmUgbWFjaGluZS13YXNoZWQgYW5kIGRyaWVkIG9uIGxvdyBoZWF0LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Zb3UgY2FuIGFkZCB5b3VyIG93biBkZXNpZ25zLCBwYWludGluZ3MsIG9yIGVtYnJvaWRlcnkgdG8gbWFrZSBpdCB5b3VyIG93bi48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhckRldGFpbHMiXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwiQ2FyRGV0YWlscyIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwibmFtZSIsImgzIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/cars/[...id]/page.tsx\n"));

/***/ })

});