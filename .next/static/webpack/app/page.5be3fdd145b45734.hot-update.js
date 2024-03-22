"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/cars.tsx":
/*!*************************************!*\
  !*** ./src/app/components/cars.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _car_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car_card */ \"(app-pages-browser)/./src/app/components/car_card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction CarsComponent(param) {\n    let { allCars, carTypes } = param;\n    _s();\n    console.log(carTypes);\n    const [selectedType, setSelectedType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Select\");\n    const filteredCars = selectedType === \"Select\" ? allCars : allCars.filter((car)=>car.vehicleType === selectedType);\n    const handleSelectChange = (event)=>{\n        setSelectedType(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 mx-auto lg:max-w-7xl sm:max-w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-10 bg-gray-100 text-[#333] px-8 py-8 w-full rounded-lg \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-extrabold\",\n                            children: \"Check Out McQueen's Cool Cars!\"\n                        }, void 0, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-sm text-gray-500\",\n                            children: \"Discover an awesome selection of cars from McQueen's collection. Each one has its own style and story. Whether you like classics or modern rides, there's something for everyone here. Take a look and enjoy the ride!\"\n                        }, void 0, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mr-2\",\n                            children: \"Filter:\"\n                        }, void 0, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            id: \"carSelect\",\n                            className: \"p-3\",\n                            onChange: handleSelectChange,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"All\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, this),\n                                carTypes === null || carTypes === void 0 ? void 0 : carTypes.map((typ)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: typ,\n                                        children: typ\n                                    }, typ, false, {\n                                        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 29\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                    children: filteredCars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_car_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            car: car\n                        }, car.id, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(CarsComponent, \"p0s/WpGxBVcyDafL4Nup0JSKjYw=\");\n_c = CarsComponent;\nvar _c;\n$RefreshReg$(_c, \"CarsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR2lDO0FBQ0E7QUFHbEIsU0FBU0UsY0FBYyxLQUEwQjtRQUExQixFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBTyxHQUExQjs7SUFDbENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixNQUFNLENBQUNHLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNUSxlQUFlRixpQkFBaUIsV0FBV0osVUFBVUEsUUFBUU8sTUFBTSxDQUFDLENBQUNDLE1BQWFBLElBQUlDLFdBQVcsS0FBS0w7SUFFNUcsTUFBTU0scUJBQXFCLENBQUNDO1FBQ3hCTixnQkFBZ0JNLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN0QztJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBeUI7Ozs7OztzQ0FDdkMsOERBQUNFOzRCQUFFRixXQUFVO3NDQUE2Qjs7Ozs7Ozs7Ozs7OzhCQUk5Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBS0gsV0FBVTtzQ0FBTzs7Ozs7O3NDQUN2Qiw4REFBQ0k7NEJBQU9DLElBQUc7NEJBQVlMLFdBQVU7NEJBQU1NLFVBQVVYOzs4Q0FDN0MsOERBQUNZO29DQUFPVCxPQUFNOzhDQUFNOzs7Ozs7Z0NBQ25CWixxQkFBQUEsK0JBQUFBLFNBQVVzQixHQUFHLENBQUMsQ0FBQ0Msb0JBQ1osOERBQUNGO3dDQUFpQlQsT0FBT1c7a0RBQU1BO3VDQUFsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUl6Qiw4REFBQ1Y7b0JBQUlDLFdBQVU7OEJBQ1ZULGFBQWFpQixHQUFHLENBQUMsQ0FBQ2Ysb0JBQ2YsOERBQUNYLGlEQUFPQTs0QkFBY1csS0FBS0E7MkJBQWJBLElBQUlZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QztHQXRDd0JyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvY2Fycy50c3g/OGY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgQ2FyQ2FyZCBmcm9tIFwiLi9jYXJfY2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJzQ29tcG9uZW50KHsgYWxsQ2FycywgY2FyVHlwZXMgfTogYW55KSB7XG4gICAgY29uc29sZS5sb2coY2FyVHlwZXMpO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlKFwiU2VsZWN0XCIpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRDYXJzID0gc2VsZWN0ZWRUeXBlID09PSBcIlNlbGVjdFwiID8gYWxsQ2FycyA6IGFsbENhcnMuZmlsdGVyKChjYXI6IENhcikgPT4gY2FyLnZlaGljbGVUeXBlID09PSBzZWxlY3RlZFR5cGUpO1xuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBteC1hdXRvIGxnOm1heC13LTd4bCBzbTptYXgtdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMCBiZy1ncmF5LTEwMCB0ZXh0LVsjMzMzXSBweC04IHB5LTggdy1mdWxsIHJvdW5kZWQtbGcgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtZXh0cmFib2xkXCI+Q2hlY2sgT3V0IE1jUXVlZW4ncyBDb29sIENhcnMhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5EaXNjb3ZlciBhbiBhd2Vzb21lIHNlbGVjdGlvbiBvZiBjYXJzIGZyb20gTWNRdWVlbidzIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICBFYWNoIG9uZSBoYXMgaXRzIG93biBzdHlsZSBhbmQgc3RvcnkuIFdoZXRoZXIgeW91IGxpa2UgY2xhc3NpY3Mgb3IgbW9kZXJuIHJpZGVzLCB0aGVyZSdzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRha2UgYSBsb29rIGFuZCBlbmpveSB0aGUgcmlkZSE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+RmlsdGVyOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhclNlbGVjdFwiIGNsYXNzTmFtZT1cInAtM1wiIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhclR5cGVzPy5tYXAoKHR5cDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3R5cH0gdmFsdWU9e3R5cH0+e3R5cH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkQ2Fycy5tYXAoKGNhcjogQ2FyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyQ2FyZCBrZXk9e2Nhci5pZH0gY2FyPXtjYXJ9PjwvQ2FyQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG4iXSwibmFtZXMiOlsiQ2FyQ2FyZCIsInVzZVN0YXRlIiwiQ2Fyc0NvbXBvbmVudCIsImFsbENhcnMiLCJjYXJUeXBlcyIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZFR5cGUiLCJzZXRTZWxlY3RlZFR5cGUiLCJmaWx0ZXJlZENhcnMiLCJmaWx0ZXIiLCJjYXIiLCJ2ZWhpY2xlVHlwZSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzcGFuIiwic2VsZWN0IiwiaWQiLCJvbkNoYW5nZSIsIm9wdGlvbiIsIm1hcCIsInR5cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/cars.tsx\n"));

/***/ })

});