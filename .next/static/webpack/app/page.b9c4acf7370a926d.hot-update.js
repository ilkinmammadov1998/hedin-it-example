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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _car_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car_card */ \"(app-pages-browser)/./src/app/components/car_card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction CarsComponent(param, carTypes) {\n    let { allCars } = param;\n    _s();\n    console.log(carTypes);\n    const [selectedType, setSelectedType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"All\");\n    // Function to filter cars based on selected type\n    const filteredCars = selectedType === \"All\" ? allCars : allCars.filter((car)=>car.vehicleType === selectedType);\n    // Function to handle select change\n    const handleSelectChange = (event)=>{\n        setSelectedType(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 mx-auto lg:max-w-7xl sm:max-w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-10 bg-gray-100 text-[#333] px-8 py-8 w-full rounded-lg \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-extrabold\",\n                            children: \"Check Out McQueen's Cool Cars!\"\n                        }, void 0, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-sm text-gray-500\",\n                            children: \"Discover an awesome selection of cars from McQueen's collection. Each one has its own style and story. Whether you like classics or modern rides, there's something for everyone here. Take a look and enjoy the ride!\"\n                        }, void 0, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mr-2\",\n                            children: \"Filter:\"\n                        }, void 0, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            id: \"carSelect\",\n                            className: \"p-3\",\n                            onChange: handleSelectChange,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"All\",\n                                children: \"All\"\n                            }, void 0, false, {\n                                fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                    children: filteredCars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_car_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            car: car\n                        }, car.id, false, {\n                            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ilkin/hedin_task/src/app/components/cars.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(CarsComponent, \"rgLHGu0QjOT1F6sigUdRYVTFHQo=\");\n_c = CarsComponent;\nvar _c;\n$RefreshReg$(_c, \"CarsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR2lDO0FBQ0E7QUFHbEIsU0FBU0UsY0FBYyxLQUFnQixFQUFFQyxRQUFZO1FBQTlCLEVBQUVDLE9BQU8sRUFBTyxHQUFoQjs7SUFDbENDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixNQUFNLENBQUNJLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUVqRCxpREFBaUQ7SUFDakQsTUFBTVEsZUFBZUYsaUJBQWlCLFFBQVFILFVBQVVBLFFBQVFNLE1BQU0sQ0FBQyxDQUFDQyxNQUFhQSxJQUFJQyxXQUFXLEtBQUtMO0lBRXpHLG1DQUFtQztJQUNuQyxNQUFNTSxxQkFBcUIsQ0FBQ0M7UUFDeEJOLGdCQUFnQk0sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3RDO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUF5Qjs7Ozs7O3NDQUN2Qyw4REFBQ0U7NEJBQUVGLFdBQVU7c0NBQTZCOzs7Ozs7Ozs7Ozs7OEJBSTlDLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFLSCxXQUFVO3NDQUFPOzs7Ozs7c0NBQ3ZCLDhEQUFDSTs0QkFBT0MsSUFBRzs0QkFBWUwsV0FBVTs0QkFBTU0sVUFBVVg7c0NBQzdDLDRFQUFDWTtnQ0FBT1QsT0FBTTswQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTTVCLDhEQUFDQztvQkFBSUMsV0FBVTs4QkFDVlQsYUFBYWlCLEdBQUcsQ0FBQyxDQUFDZixvQkFDZiw4REFBQ1gsaURBQU9BOzRCQUFjVyxLQUFLQTsyQkFBYkEsSUFBSVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVDO0dBeEN3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJzLnRzeD84ZjdjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBDYXJDYXJkIGZyb20gXCIuL2Nhcl9jYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnNDb21wb25lbnQoeyBhbGxDYXJzIH06IGFueSwgY2FyVHlwZXM6IFtdKSB7XG4gICAgY29uc29sZS5sb2coY2FyVHlwZXMpO1xuICAgIFxuICAgIGNvbnN0IFtzZWxlY3RlZFR5cGUsIHNldFNlbGVjdGVkVHlwZV0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGZpbHRlciBjYXJzIGJhc2VkIG9uIHNlbGVjdGVkIHR5cGVcbiAgICBjb25zdCBmaWx0ZXJlZENhcnMgPSBzZWxlY3RlZFR5cGUgPT09IFwiQWxsXCIgPyBhbGxDYXJzIDogYWxsQ2Fycy5maWx0ZXIoKGNhcjogQ2FyKSA9PiBjYXIudmVoaWNsZVR5cGUgPT09IHNlbGVjdGVkVHlwZSk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgc2VsZWN0IGNoYW5nZVxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkVHlwZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbXgtYXV0byBsZzptYXgtdy03eGwgc206bWF4LXctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTAgYmctZ3JheS0xMDAgdGV4dC1bIzMzM10gcHgtOCBweS04IHctZnVsbCByb3VuZGVkLWxnIFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWV4dHJhYm9sZFwiPkNoZWNrIE91dCBNY1F1ZWVuJ3MgQ29vbCBDYXJzITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+RGlzY292ZXIgYW4gYXdlc29tZSBzZWxlY3Rpb24gb2YgY2FycyBmcm9tIE1jUXVlZW4ncyBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCBvbmUgaGFzIGl0cyBvd24gc3R5bGUgYW5kIHN0b3J5LiBXaGV0aGVyIHlvdSBsaWtlIGNsYXNzaWNzIG9yIG1vZGVybiByaWRlcywgdGhlcmUncyBzb21ldGhpbmcgZm9yIGV2ZXJ5b25lIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICBUYWtlIGEgbG9vayBhbmQgZW5qb3kgdGhlIHJpZGUhPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPkZpbHRlcjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXJTZWxlY3RcIiBjbGFzc05hbWU9XCJwLTNcIiBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Y2FyVHlwZXM/Lm1hcCgodHlwOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dHlwfSB2YWx1ZT17dHlwfT57dHlwfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkQ2Fycy5tYXAoKGNhcjogQ2FyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyQ2FyZCBrZXk9e2Nhci5pZH0gY2FyPXtjYXJ9PjwvQ2FyQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG4iXSwibmFtZXMiOlsiQ2FyQ2FyZCIsInVzZVN0YXRlIiwiQ2Fyc0NvbXBvbmVudCIsImNhclR5cGVzIiwiYWxsQ2FycyIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZFR5cGUiLCJzZXRTZWxlY3RlZFR5cGUiLCJmaWx0ZXJlZENhcnMiLCJmaWx0ZXIiLCJjYXIiLCJ2ZWhpY2xlVHlwZSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzcGFuIiwic2VsZWN0IiwiaWQiLCJvbkNoYW5nZSIsIm9wdGlvbiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/cars.tsx\n"));

/***/ })

});