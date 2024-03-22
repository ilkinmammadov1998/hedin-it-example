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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _car_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car_card */ \"(app-pages-browser)/./src/app/components/car_card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SELECT_TYPE = \"Select type\";\nfunction CarsComponent(param) {\n    let { allCars, carTypes } = param;\n    _s();\n    const [selectedType, setSelectedType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(SELECT_TYPE);\n    const filteredCars = selectedType === SELECT_TYPE ? allCars : allCars.filter((car)=>car.vehicleType === selectedType);\n    const handleSelectChange = (event)=>{\n        setSelectedType(event.target.value);\n    };\n    const renderJumbotron = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-10 bg-gray-100 text-[#333] px-8 py-8 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl\",\n                    children: \"Check Out McQueen's Cool Cars!\"\n                }, void 0, false, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-sm\",\n                    children: \"Discover an awesome selection of cars from McQueen's collection. Each one has its own style and story. Whether you like classics or modern rides, there's something for everyone here. Take a look and enjoy the ride!\"\n                }, void 0, false, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 mx-auto lg:max-w-7xl sm:max-w-full min-h-screen\",\n        children: [\n            renderJumbotron(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-2\",\n                        children: \"Filter:\"\n                    }, void 0, false, {\n                        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"carSelect\",\n                        className: \"p-3\",\n                        onChange: handleSelectChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: SELECT_TYPE,\n                                children: SELECT_TYPE\n                            }, void 0, false, {\n                                fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, this),\n                            carTypes === null || carTypes === void 0 ? void 0 : carTypes.map((typ)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: typ,\n                                    children: typ\n                                }, typ, false, {\n                                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8\",\n                children: filteredCars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_car_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        car: car\n                    }, car.id, false, {\n                        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(CarsComponent, \"3+4cNncoT2l7U0oT0BPN4wGk6xg=\");\n_c = CarsComponent;\nvar _c;\n$RefreshReg$(_c, \"CarsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR2lDO0FBQ0E7QUFFakMsTUFBTUUsY0FBYztBQUVMLFNBQVNDLGNBQWMsS0FBMEI7UUFBMUIsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQU8sR0FBMUI7O0lBQ2xDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDQztJQUVqRCxNQUFNTSxlQUFlRixpQkFBaUJKLGNBQWNFLFVBQVVBLFFBQVFLLE1BQU0sQ0FBQyxDQUFDQyxNQUFhQSxJQUFJQyxXQUFXLEtBQUtMO0lBRS9HLE1BQU1NLHFCQUFxQixDQUFDQztRQUN4Qk4sZ0JBQWdCTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDdEM7SUFFQSxNQUFNQyxrQkFBa0I7UUFDcEIscUJBQ0ksOERBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBVTs7Ozs7OzhCQUN4Qiw4REFBQ0U7b0JBQUVGLFdBQVU7OEJBQWU7Ozs7Ozs7Ozs7OztJQU14QztJQUVBLHFCQUNJLDhEQUFDRDtRQUFJQyxXQUFVOztZQUNWRjswQkFDRCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRzt3QkFBS0gsV0FBVTtrQ0FBTzs7Ozs7O2tDQUN2Qiw4REFBQ0k7d0JBQU9DLElBQUc7d0JBQVlMLFdBQVU7d0JBQU1NLFVBQVVaOzswQ0FDN0MsOERBQUNhO2dDQUFPVixPQUFPYjswQ0FBY0E7Ozs7Ozs0QkFDNUJHLHFCQUFBQSwrQkFBQUEsU0FBVXFCLEdBQUcsQ0FBQyxDQUFDQyxvQkFDWiw4REFBQ0Y7b0NBQWlCVixPQUFPWTs4Q0FBTUE7bUNBQWxCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpCLDhEQUFDVjtnQkFBSUMsV0FBVTswQkFDVlYsYUFBYWtCLEdBQUcsQ0FBQyxDQUFDaEIsb0JBQ2YsOERBQUNWLGlEQUFPQTt3QkFBY1UsS0FBS0E7dUJBQWJBLElBQUlhLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0F6Q3dCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2NhcnMudHN4PzhmN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IENhciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IENhckNhcmQgZnJvbSBcIi4vY2FyX2NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNFTEVDVF9UWVBFID0gXCJTZWxlY3QgdHlwZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnNDb21wb25lbnQoeyBhbGxDYXJzLCBjYXJUeXBlcyB9OiBhbnkpIHtcbiAgICBjb25zdCBbc2VsZWN0ZWRUeXBlLCBzZXRTZWxlY3RlZFR5cGVdID0gdXNlU3RhdGUoU0VMRUNUX1RZUEUpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRDYXJzID0gc2VsZWN0ZWRUeXBlID09PSBTRUxFQ1RfVFlQRSA/IGFsbENhcnMgOiBhbGxDYXJzLmZpbHRlcigoY2FyOiBDYXIpID0+IGNhci52ZWhpY2xlVHlwZSA9PT0gc2VsZWN0ZWRUeXBlKTtcblxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkVHlwZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJKdW1ib3Ryb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwIGJnLWdyYXktMTAwIHRleHQtWyMzMzNdIHB4LTggcHktOCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bFwiPkNoZWNrIE91dCBNY1F1ZWVuJ3MgQ29vbCBDYXJzITwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXNtXCI+RGlzY292ZXIgYW4gYXdlc29tZSBzZWxlY3Rpb24gb2YgY2FycyBmcm9tIE1jUXVlZW4ncyBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBFYWNoIG9uZSBoYXMgaXRzIG93biBzdHlsZSBhbmQgc3RvcnkuXG4gICAgICAgICAgICAgICAgICAgIFdoZXRoZXIgeW91IGxpa2UgY2xhc3NpY3Mgb3IgbW9kZXJuIHJpZGVzLCB0aGVyZSdzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgVGFrZSBhIGxvb2sgYW5kIGVuam95IHRoZSByaWRlITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbXgtYXV0byBsZzptYXgtdy03eGwgc206bWF4LXctZnVsbCBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgICAgIHtyZW5kZXJKdW1ib3Ryb24oKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXhcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+RmlsdGVyOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2FyU2VsZWN0XCIgY2xhc3NOYW1lPVwicC0zXCIgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1NFTEVDVF9UWVBFfT57U0VMRUNUX1RZUEV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJUeXBlcz8ubWFwKCh0eXA6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3R5cH0gdmFsdWU9e3R5cH0+e3R5cH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZENhcnMubWFwKChjYXI6IENhcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyQ2FyZCBrZXk9e2Nhci5pZH0gY2FyPXtjYXJ9PjwvQ2FyQ2FyZD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cbiJdLCJuYW1lcyI6WyJDYXJDYXJkIiwidXNlU3RhdGUiLCJTRUxFQ1RfVFlQRSIsIkNhcnNDb21wb25lbnQiLCJhbGxDYXJzIiwiY2FyVHlwZXMiLCJzZWxlY3RlZFR5cGUiLCJzZXRTZWxlY3RlZFR5cGUiLCJmaWx0ZXJlZENhcnMiLCJmaWx0ZXIiLCJjYXIiLCJ2ZWhpY2xlVHlwZSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXJKdW1ib3Ryb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzcGFuIiwic2VsZWN0IiwiaWQiLCJvbkNoYW5nZSIsIm9wdGlvbiIsIm1hcCIsInR5cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/cars.tsx\n"));

/***/ })

});