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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _car_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car_card */ \"(app-pages-browser)/./src/app/components/car_card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SELECT_TYPE = \"Select type\";\nfunction CarsComponent(param) {\n    let { allCars, carTypes } = param;\n    _s();\n    console.log(carTypes);\n    const [selectedType, setSelectedType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(SELECT_TYPE);\n    const filteredCars = selectedType === SELECT_TYPE ? allCars : allCars.filter((car)=>car.vehicleType === selectedType);\n    const handleSelectChange = (event)=>{\n        setSelectedType(event.target.value);\n    };\n    const renderJumbotron = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-10 bg-gray-100 text-[#333] px-8 py-8 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-extrabold\",\n                    children: \"Check Out McQueen's Cool Cars!\"\n                }, void 0, false, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-sm text-gray-500\",\n                    children: \"Discover an awesome selection of cars from McQueen's collection. Each one has its own style and story. Whether you like classics or modern rides, there's something for everyone here. Take a look and enjoy the ride!\"\n                }, void 0, false, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 mx-auto lg:max-w-7xl sm:max-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-2\",\n                        children: \"Filter:\"\n                    }, void 0, false, {\n                        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"carSelect\",\n                        className: \"p-3\",\n                        onChange: handleSelectChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: SELECT_TYPE,\n                                children: SELECT_TYPE\n                            }, void 0, false, {\n                                fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this),\n                            carTypes === null || carTypes === void 0 ? void 0 : carTypes.map((typ)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: typ,\n                                    children: typ\n                                }, typ, false, {\n                                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                children: filteredCars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_car_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        car: car\n                    }, car.id, false, {\n                        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(CarsComponent, \"3+4cNncoT2l7U0oT0BPN4wGk6xg=\");\n_c = CarsComponent;\nvar _c;\n$RefreshReg$(_c, \"CarsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR2lDO0FBQ0E7QUFFakMsTUFBTUUsY0FBYztBQUVMLFNBQVNDLGNBQWMsS0FBMEI7UUFBMUIsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQU8sR0FBMUI7O0lBQ2xDQyxRQUFRQyxHQUFHLENBQUNGO0lBRVosTUFBTSxDQUFDRyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUNDO0lBRWpELE1BQU1RLGVBQWVGLGlCQUFpQk4sY0FBY0UsVUFBVUEsUUFBUU8sTUFBTSxDQUFDLENBQUNDLE1BQWFBLElBQUlDLFdBQVcsS0FBS0w7SUFFL0csTUFBTU0scUJBQXFCLENBQUNDO1FBQ3hCTixnQkFBZ0JNLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN0QztJQUVBLE1BQU1DLGtCQUFrQjtRQUNwQixxQkFDSSw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF5Qjs7Ozs7OzhCQUN2Qyw4REFBQ0U7b0JBQUVGLFdBQVU7OEJBQTZCOzs7Ozs7Ozs7Ozs7SUFLdEQ7SUFFQSxxQkFDSSw4REFBQ0Q7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0c7d0JBQUtILFdBQVU7a0NBQU87Ozs7OztrQ0FDdkIsOERBQUNJO3dCQUFPQyxJQUFHO3dCQUFZTCxXQUFVO3dCQUFNTSxVQUFVWjs7MENBQzdDLDhEQUFDYTtnQ0FBT1YsT0FBT2Y7MENBQWNBOzs7Ozs7NEJBQzVCRyxxQkFBQUEsK0JBQUFBLFNBQVV1QixHQUFHLENBQUMsQ0FBQ0Msb0JBQ1osOERBQUNGO29DQUFpQlYsT0FBT1k7OENBQU1BO21DQUFsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl6Qiw4REFBQ1Y7Z0JBQUlDLFdBQVU7MEJBQ1ZWLGFBQWFrQixHQUFHLENBQUMsQ0FBQ2hCLG9CQUNmLDhEQUFDWixpREFBT0E7d0JBQWNZLEtBQUtBO3VCQUFiQSxJQUFJYSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBMUN3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJzLnRzeD84ZjdjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBDYXJDYXJkIGZyb20gXCIuL2Nhcl9jYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTRUxFQ1RfVFlQRSA9IFwiU2VsZWN0IHR5cGVcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJzQ29tcG9uZW50KHsgYWxsQ2FycywgY2FyVHlwZXMgfTogYW55KSB7XG4gICAgY29uc29sZS5sb2coY2FyVHlwZXMpO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlKFNFTEVDVF9UWVBFKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ2FycyA9IHNlbGVjdGVkVHlwZSA9PT0gU0VMRUNUX1RZUEUgPyBhbGxDYXJzIDogYWxsQ2Fycy5maWx0ZXIoKGNhcjogQ2FyKSA9PiBjYXIudmVoaWNsZVR5cGUgPT09IHNlbGVjdGVkVHlwZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVySnVtYm90cm9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMCBiZy1ncmF5LTEwMCB0ZXh0LVsjMzMzXSBweC04IHB5LTggdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1leHRyYWJvbGRcIj5DaGVjayBPdXQgTWNRdWVlbidzIENvb2wgQ2FycyE8L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+RGlzY292ZXIgYW4gYXdlc29tZSBzZWxlY3Rpb24gb2YgY2FycyBmcm9tIE1jUXVlZW4ncyBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBFYWNoIG9uZSBoYXMgaXRzIG93biBzdHlsZSBhbmQgc3RvcnkuIFdoZXRoZXIgeW91IGxpa2UgY2xhc3NpY3Mgb3IgbW9kZXJuIHJpZGVzLCB0aGVyZSdzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgVGFrZSBhIGxvb2sgYW5kIGVuam95IHRoZSByaWRlITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbXgtYXV0byBsZzptYXgtdy03eGwgc206bWF4LXctZnVsbFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPkZpbHRlcjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhclNlbGVjdFwiIGNsYXNzTmFtZT1cInAtM1wiIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtTRUxFQ1RfVFlQRX0+e1NFTEVDVF9UWVBFfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7Y2FyVHlwZXM/Lm1hcCgodHlwOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0eXB9IHZhbHVlPXt0eXB9Pnt0eXB9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRDYXJzLm1hcCgoY2FyOiBDYXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhckNhcmQga2V5PXtjYXIuaWR9IGNhcj17Y2FyfT48L0NhckNhcmQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG4iXSwibmFtZXMiOlsiQ2FyQ2FyZCIsInVzZVN0YXRlIiwiU0VMRUNUX1RZUEUiLCJDYXJzQ29tcG9uZW50IiwiYWxsQ2FycyIsImNhclR5cGVzIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsImZpbHRlcmVkQ2FycyIsImZpbHRlciIsImNhciIsInZlaGljbGVUeXBlIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlckp1bWJvdHJvbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsInNwYW4iLCJzZWxlY3QiLCJpZCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwibWFwIiwidHlwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/cars.tsx\n"));

/***/ })

});