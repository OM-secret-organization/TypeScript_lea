"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_InputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InputGroup */ \"./src/components/InputGroup.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../../../../../../node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst register = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"./auth/register\", {\n            email: email,\n            password,\n            username\n        });\n        console.log(\"res\", res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center h-screen p-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-10/12 mx-auto md:w-96\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-2 text-lg font-medium\",\n                        children: \"회원가입\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                placeholder: \"Email\",\n                                value: email,\n                                setValue: setEmail,\n                                error: errors.email\n                            }, void 0, false, {\n                                fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                placeholder: \"User Name\",\n                                value: username,\n                                setValue: setUsername,\n                                error: errors.username\n                            }, void 0, false, {\n                                fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                placeholder: \"PW\",\n                                value: password,\n                                setValue: setPassword,\n                                error: errors.password\n                            }, void 0, false, {\n                                fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded\",\n                                children: \"회원 가입\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: [\n                            \"이미 가입하셨나요?\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-1 text-blue-500 uppercase\",\n                                    children: \"로그인\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lea/Desktop/Creed/OM_creed/TypeScriptStudy/nextJS_project/client/src/pages/register.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(register, \"gwZQJ/jS4TBQDLMDRGoaVK51Ko0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (register);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ3FCO0FBQ3hCO0FBRTFCLE1BQU1LLFdBQVcsSUFBTTs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFNLENBQUM7SUFFM0MsTUFBTWEsZUFBZSxPQUFPQyxRQUFxQjtRQUMvQ0EsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxNQUFNLE1BQU1iLGtEQUFVLENBQUMsbUJBQW1CO1lBQzlDRSxPQUFPQTtZQUNQSTtZQUNBRjtRQUNGO1FBQ0FXLFFBQVFDLEdBQUcsQ0FBQyxPQUFPSDtJQUNyQjtJQUVBLHFCQUNFLDhEQUFDSTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBMkI7Ozs7OztrQ0FDekMsOERBQUNFO3dCQUFLQyxVQUFVWDs7MENBQ2QsOERBQUNYLDhEQUFVQTtnQ0FDVHVCLGFBQVk7Z0NBQ1pDLE9BQU9yQjtnQ0FDUHNCLFVBQVVyQjtnQ0FDVnNCLE9BQU9qQixPQUFPTixLQUFLOzs7Ozs7MENBRXJCLDhEQUFDSCw4REFBVUE7Z0NBQ1R1QixhQUFZO2dDQUNaQyxPQUFPbkI7Z0NBQ1BvQixVQUFVbkI7Z0NBQ1ZvQixPQUFPakIsT0FBT0osUUFBUTs7Ozs7OzBDQUV4Qiw4REFBQ0wsOERBQVVBO2dDQUNUdUIsYUFBWTtnQ0FDWkMsT0FBT2pCO2dDQUNQa0IsVUFBVWpCO2dDQUNWa0IsT0FBT2pCLE9BQU9GLFFBQVE7Ozs7OzswQ0FFeEIsOERBQUNvQjtnQ0FBT1IsV0FBVTswQ0FBcUc7Ozs7Ozs7Ozs7OztrQ0FJekgsOERBQUNTOzs0QkFBTTswQ0FFTCw4REFBQzdCLGtEQUFJQTtnQ0FBQzhCLE1BQUs7MENBQ1QsNEVBQUNDO29DQUFLWCxXQUFVOzhDQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdEO0dBdkRNakI7QUF5RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD83MDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRHcm91cCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCByZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlPGFueT4oe30pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy4vYXV0aC9yZWdpc3RlcicsIHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ3JlcycsIHJlcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbiBwLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIG14LWF1dG8gbWQ6dy05NlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbGcgZm9udC1tZWRpdW1cIj7tmozsm5DqsIDsnoU8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPElucHV0R3JvdXBcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgc2V0VmFsdWU9e3NldEVtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dEdyb3VwXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICBzZXRWYWx1ZT17c2V0VXNlcm5hbWV9XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudXNlcm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0R3JvdXBcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQV1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgc2V0VmFsdWU9e3NldFBhc3N3b3JkfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgbWItMSB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBiZy1ncmF5LTQwMCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAg7ZqM7JuQIOqwgOyehVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgIOydtOuvuCDqsIDsnoXtlZjshajrgpjsmpQ/XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2VcIj7roZzqt7jsnbg8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSW5wdXRHcm91cCIsImF4aW9zIiwicmVnaXN0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJzZXRWYWx1ZSIsImVycm9yIiwiYnV0dG9uIiwic21hbGwiLCJocmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n"));

/***/ })

});