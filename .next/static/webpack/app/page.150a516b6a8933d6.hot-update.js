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

/***/ "(app-pages-browser)/./src/Pages/navbar.tsx":
/*!******************************!*\
  !*** ./src/Pages/navbar.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _images_logotorsiev_stroked_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/images/logotorsiev-stroked.png */ \"(app-pages-browser)/./src/images/logotorsiev-stroked.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-transparent fixed\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"fixed top-0 left-0 right-0 z-50 transition-colors duration-300 \".concat(isScrolled ? \"bg-primary text-primary-foreground shadow-lg\" : \"bg-transparent text-white\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex items-center justify-between px-4 py-4 md:px-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"#\",\n                        className: \"flex items-center gap-2 text-lg font-semibold\",\n                        prefetch: false,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"w-32\",\n                                src: _images_logotorsiev_stroked_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Acme Inc\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex flex-col gap-6 text-lg font-medium md:hidden \".concat(isMenuOpen ? \"block\" : \"hidden\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"#\",\n                                className: \"font-bold\",\n                                prefetch: false,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"#\",\n                                className: \"text-muted-foreground\",\n                                prefetch: false,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"#\",\n                                className: \"text-muted-foreground\",\n                                prefetch: false,\n                                children: \"Services\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"#\",\n                                className: \"text-muted-foreground\",\n                                prefetch: false,\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-4 md:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"contained\",\n                            size: \"small\",\n                            className: \"rounded-full\",\n                            onClick: ()=>setIsMenuOpen(!isMenuOpen),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuIcon, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Toggle navigation\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"#\",\n                                className: \"font-bold\",\n                                prefetch: false,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"#\",\n                                className: \"text-muted-foreground\",\n                                prefetch: false,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"#\",\n                                className: \"text-muted-foreground\",\n                                prefetch: false,\n                                children: \"Services\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"#\",\n                                className: \"text-muted-foreground\",\n                                prefetch: false,\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Navbar, \"PYTXP+Ba4zUSToikH9IFTduq6jI=\");\n_c = Navbar;\nfunction MenuIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ...props,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"24\",\n        height: \"24\",\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"12\",\n                y2: \"12\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"6\",\n                y2: \"6\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"18\",\n                y2: \"18\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n}\n_c1 = MenuIcon;\nvar _c, _c1;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"MenuIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9QYWdlcy9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUN5QjtBQUNmO0FBQ1o7QUFDVTtBQUV4QixTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ08sWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3Q0MsZ0RBQVNBLENBQUM7UUFDTixNQUFNUSxlQUFlO1lBQ2pCLElBQUlDLE9BQU9DLE9BQU8sR0FBRyxHQUFFO2dCQUNuQkwsY0FBYztZQUNsQixPQUFPO2dCQUNIQSxjQUFjO1lBQ2xCO1FBQ0o7UUFDQUksT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUN0RCxHQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0M7WUFDTEQsV0FBVyxrRUFFVixPQURDVixhQUFhLGlEQUFpRDtzQkFHaEUsNEVBQUNTO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2IsaURBQUlBO3dCQUFDZSxNQUFLO3dCQUFJRixXQUFVO3dCQUFnREcsVUFBVTs7MENBQ2pGLDhEQUFDcEIsa0RBQUtBO2dDQUFDaUIsV0FBVTtnQ0FBT0ksS0FBS3BCLHVFQUFTQTtnQ0FBRXFCLEtBQUk7Ozs7OzswQ0FDNUMsOERBQUNDO2dDQUFLTixXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBRTVCLDhEQUFDTzt3QkFBSVAsV0FBVyxxREFBcUYsT0FBaENSLGFBQWEsVUFBVTs7MENBQzFGLDhEQUFDTCxpREFBSUE7Z0NBQUNlLE1BQUs7Z0NBQUlGLFdBQVU7Z0NBQVlHLFVBQVU7MENBQU87Ozs7OzswQ0FHdEQsOERBQUNoQixpREFBSUE7Z0NBQUNlLE1BQUs7Z0NBQUlGLFdBQVU7Z0NBQXdCRyxVQUFVOzBDQUFPOzs7Ozs7MENBR2xFLDhEQUFDaEIsaURBQUlBO2dDQUFDZSxNQUFLO2dDQUFJRixXQUFVO2dDQUF3QkcsVUFBVTswQ0FBTzs7Ozs7OzBDQUdsRSw4REFBQ2hCLGlEQUFJQTtnQ0FBQ2UsTUFBSztnQ0FBSUYsV0FBVTtnQ0FBd0JHLFVBQVU7MENBQU87Ozs7Ozs7Ozs7OztrQ0FJcEUsOERBQUNKO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDWixrRkFBTUE7NEJBQUNvQixTQUFROzRCQUFZQyxNQUFLOzRCQUFRVCxXQUFVOzRCQUFlVSxTQUFTLElBQU1qQixjQUFjLENBQUNEOzs4Q0FDOUYsOERBQUNtQjtvQ0FBU1gsV0FBVTs7Ozs7OzhDQUNwQiw4REFBQ007b0NBQUtOLFdBQVU7OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUc5Qiw4REFBQ087d0JBQUlQLFdBQVU7OzBDQUNiLDhEQUFDYixpREFBSUE7Z0NBQUNlLE1BQUs7Z0NBQUlGLFdBQVU7Z0NBQVlHLFVBQVU7MENBQU87Ozs7OzswQ0FHdEQsOERBQUNoQixpREFBSUE7Z0NBQUNlLE1BQUs7Z0NBQUlGLFdBQVU7Z0NBQXdCRyxVQUFVOzBDQUFPOzs7Ozs7MENBR2xFLDhEQUFDaEIsaURBQUlBO2dDQUFDZSxNQUFLO2dDQUFJRixXQUFVO2dDQUF3QkcsVUFBVTswQ0FBTzs7Ozs7OzBDQUdsRSw4REFBQ2hCLGlEQUFJQTtnQ0FBQ2UsTUFBSztnQ0FBSUYsV0FBVTtnQ0FBd0JHLFVBQVU7MENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUU7R0FoRXdCZDtLQUFBQTtBQWtFeEIsU0FBU3NCLFNBQVNDLEtBQVU7SUFDeEIscUJBQ0ksOERBQUNDO1FBQ0ksR0FBR0QsS0FBSztRQUNURSxPQUFNO1FBQ05DLE9BQU07UUFDTkMsUUFBTztRQUNQQyxTQUFRO1FBQ1JDLE1BQUs7UUFDTEMsUUFBTztRQUNQQyxhQUFZO1FBQ1pDLGVBQWM7UUFDZEMsZ0JBQWU7OzBCQUVmLDhEQUFDQztnQkFBS0MsSUFBRztnQkFBSUMsSUFBRztnQkFBS0MsSUFBRztnQkFBS0MsSUFBRzs7Ozs7OzBCQUNoQyw4REFBQ0o7Z0JBQUtDLElBQUc7Z0JBQUlDLElBQUc7Z0JBQUtDLElBQUc7Z0JBQUlDLElBQUc7Ozs7OzswQkFDL0IsOERBQUNKO2dCQUFLQyxJQUFHO2dCQUFJQyxJQUFHO2dCQUFLQyxJQUFHO2dCQUFLQyxJQUFHOzs7Ozs7Ozs7Ozs7QUFHNUM7TUFuQlNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvUGFnZXMvbmF2YmFyLnRzeD81NjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBsb2dvVG9yc2kgZnJvbSAnQC9pbWFnZXMvbG9nb3RvcnNpZXYtc3Ryb2tlZC5wbmcnXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCl7XHJcbiAgICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApe1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxlZCh0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxlZChmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBiZy10cmFuc3BhcmVudCBmaXhlZFwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgJHtcclxuICAgICAgICAgIGlzU2Nyb2xsZWQgPyBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93LWxnXCIgOiBcImJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGVcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHktNCBtZDpweC02XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtbGcgZm9udC1zZW1pYm9sZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJ3LTMyXCIgc3JjPXtsb2dvVG9yc2l9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+QWNtZSBJbmM8L3NwYW4+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgZ2FwLTYgdGV4dC1sZyBmb250LW1lZGl1bSBtZDpoaWRkZW4gJHtpc01lbnVPcGVuID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIn1gfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfT5cclxuICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gZ2FwLTYgdGV4dC1sZyBmb250LW1lZGl1bSBtZDpmbGV4IG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpnYXAtNSBtZDp0ZXh0LXNtIGxnOmdhcC02XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51SWNvbihwcm9wczogYW55KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGluZSB4MT1cIjRcIiB4Mj1cIjIwXCIgeTE9XCIxMlwiIHkyPVwiMTJcIiAvPlxyXG4gICAgICAgICAgICA8bGluZSB4MT1cIjRcIiB4Mj1cIjIwXCIgeTE9XCI2XCIgeTI9XCI2XCIgLz5cclxuICAgICAgICAgICAgPGxpbmUgeDE9XCI0XCIgeDI9XCIyMFwiIHkxPVwiMThcIiB5Mj1cIjE4XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwibG9nb1RvcnNpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiQnV0dG9uIiwiTmF2YmFyIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImhyZWYiLCJwcmVmZXRjaCIsInNyYyIsImFsdCIsInNwYW4iLCJuYXYiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJNZW51SWNvbiIsInByb3BzIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJsaW5lIiwieDEiLCJ4MiIsInkxIiwieTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Pages/navbar.tsx\n"));

/***/ })

});