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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _images_logotorsiev_stroked_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/images/logotorsiev-stroked.png */ \"(app-pages-browser)/./src/images/logotorsiev-stroked.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n// \"use client\"\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { ClassNames } from \"@emotion/react\";\nfunction Navbar() {\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"fixed top-0 left-0 right-0 z-50 transition-colors duration-300 \".concat(isScrolled ? \"bg-ored text-primary-foreground shadow-lg\" : \"bg-transparent text-white\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex items-center justify-between px-4 py-4 md:px-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"#\",\n                            className: \"flex justify-center items-center gap-2 text-lg font-semibold\",\n                            prefetch: false,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"w-32\",\n                                    src: _images_logotorsiev_stroked_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"logo\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Torsi EV\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex flex-col gap-6 text-lg font-medium md:hidden \".concat(isMenuOpen ? \"block\" : \"hidden\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"font-bold\",\n                                    prefetch: false,\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-4 md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                size: \"small\",\n                                className: \"rounded-full text-black\",\n                                onClick: ()=>setIsMenuOpen(!isMenuOpen),\n                                onScroll: ()=>setIsScrolled,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuIcon, {\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Toggle navigation\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"font-bold\",\n                                    prefetch: false,\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Navbar, \"PYTXP+Ba4zUSToikH9IFTduq6jI=\");\n_c = Navbar;\nfunction MenuIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ...props,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"24\",\n        height: \"24\",\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"12\",\n                y2: \"12\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"6\",\n                y2: \"6\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"18\",\n                y2: \"18\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, this);\n}\n_c1 = MenuIcon;\nfunction MountainIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ...props,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"24\",\n        height: \"24\",\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"m8 3 4 8 5-5 5 15H2L8 3z\"\n        }, void 0, false, {\n            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this);\n}\n_c2 = MountainIcon;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"MenuIcon\");\n$RefreshReg$(_c2, \"MountainIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9QYWdlcy9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTs7O0FBQ1c7QUFDSztBQUN5QjtBQUNmO0FBQ1o7QUFDVTtBQUN2QywrQ0FBK0M7QUFFaEMsU0FBU087O0lBQ3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDN0NDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsZUFBZTtZQUNqQixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsR0FBRTtnQkFDbkJMLGNBQWM7WUFDbEIsT0FBTztnQkFDSEEsY0FBYztZQUNsQjtRQUNKO1FBQ0FJLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDdEQsR0FBRyxFQUFFO0lBQ0wscUJBQ0ksOERBQUNLOzswQkFDRyw4REFBQ0M7Z0JBQ0xDLFdBQVcsa0VBRVYsT0FEQ1gsYUFBYSw4Q0FBOEM7MEJBRzdELDRFQUFDUztvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNkLGlEQUFJQTs0QkFBQ2UsTUFBSzs0QkFBSUQsV0FBVTs0QkFBK0RFLFVBQVU7OzhDQUNoRyw4REFBQ3BCLGtEQUFLQTtvQ0FBQ2tCLFdBQVU7b0NBQU9HLEtBQUtwQix1RUFBU0E7b0NBQUVxQixLQUFJOzs7Ozs7OENBQzVDLDhEQUFDQztvQ0FBS0wsV0FBVTs4Q0FBVTs7Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ007NEJBQUlOLFdBQVcscURBQXFGLE9BQWhDVCxhQUFhLFVBQVU7OzhDQUMxRiw4REFBQ0wsaURBQUlBO29DQUFDZSxNQUFLO29DQUFJRCxXQUFVO29DQUFZRSxVQUFVOzhDQUFPOzs7Ozs7OENBR3RELDhEQUFDaEIsaURBQUlBO29DQUFDZSxNQUFLO29DQUFJRCxXQUFVO29DQUF3QkUsVUFBVTs4Q0FBTzs7Ozs7OzhDQUdsRSw4REFBQ2hCLGlEQUFJQTtvQ0FBQ2UsTUFBSztvQ0FBSUQsV0FBVTtvQ0FBd0JFLFVBQVU7OENBQU87Ozs7Ozs4Q0FHbEUsOERBQUNoQixpREFBSUE7b0NBQUNlLE1BQUs7b0NBQUlELFdBQVU7b0NBQXdCRSxVQUFVOzhDQUFPOzs7Ozs7Ozs7Ozs7c0NBSXBFLDhEQUFDSjs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ2Isa0ZBQU1BO2dDQUFDb0IsTUFBSztnQ0FBUVAsV0FBVTtnQ0FBMEJRLFNBQVMsSUFBTWhCLGNBQWMsQ0FBQ0Q7Z0NBQWFrQixVQUFVLElBQU1uQjs7a0RBQ2xILDhEQUFDb0I7d0NBQVNWLFdBQVU7Ozs7OztrREFDcEIsOERBQUNLO3dDQUFLTCxXQUFVO2tEQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHOUIsOERBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ2QsaURBQUlBO29DQUFDZSxNQUFLO29DQUFJRCxXQUFVO29DQUFZRSxVQUFVOzhDQUFPOzs7Ozs7OENBR3RELDhEQUFDaEIsaURBQUlBO29DQUFDZSxNQUFLO29DQUFJRCxXQUFVO29DQUF3QkUsVUFBVTs4Q0FBTzs7Ozs7OzhDQUdsRSw4REFBQ2hCLGlEQUFJQTtvQ0FBQ2UsTUFBSztvQ0FBSUQsV0FBVTtvQ0FBd0JFLFVBQVU7OENBQU87Ozs7Ozs4Q0FHbEUsOERBQUNoQixpREFBSUE7b0NBQUNlLE1BQUs7b0NBQUlELFdBQVU7b0NBQXdCRSxVQUFVOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFReEUsOERBQUNTOzs7Ozs7Ozs7OztBQUtQO0dBckV3QnZCO0tBQUFBO0FBdUV4QixTQUFTc0IsU0FBU0UsS0FBVTtJQUN4QixxQkFDSSw4REFBQ0M7UUFDSSxHQUFHRCxLQUFLO1FBQ1RFLE9BQU07UUFDTkMsT0FBTTtRQUNOQyxRQUFPO1FBQ1BDLFNBQVE7UUFDUkMsTUFBSztRQUNMQyxRQUFPO1FBQ1BDLGFBQVk7UUFDWkMsZUFBYztRQUNkQyxnQkFBZTs7MEJBRWYsOERBQUNDO2dCQUFLQyxJQUFHO2dCQUFJQyxJQUFHO2dCQUFLQyxJQUFHO2dCQUFLQyxJQUFHOzs7Ozs7MEJBQ2hDLDhEQUFDSjtnQkFBS0MsSUFBRztnQkFBSUMsSUFBRztnQkFBS0MsSUFBRztnQkFBSUMsSUFBRzs7Ozs7OzBCQUMvQiw4REFBQ0o7Z0JBQUtDLElBQUc7Z0JBQUlDLElBQUc7Z0JBQUtDLElBQUc7Z0JBQUtDLElBQUc7Ozs7Ozs7Ozs7OztBQUc1QztNQW5CU2pCO0FBcUJULFNBQVNrQixhQUFhaEIsS0FBVTtJQUM5QixxQkFDRSw4REFBQ0M7UUFDRSxHQUFHRCxLQUFLO1FBQ1RFLE9BQU07UUFDTkMsT0FBTTtRQUNOQyxRQUFPO1FBQ1BDLFNBQVE7UUFDUkMsTUFBSztRQUNMQyxRQUFPO1FBQ1BDLGFBQVk7UUFDWkMsZUFBYztRQUNkQyxnQkFBZTtrQkFFZiw0RUFBQ087WUFBS0MsR0FBRTs7Ozs7Ozs7Ozs7QUFHZDtNQWpCU0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1BhZ2VzL25hdmJhci50c3g/NTY3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgbG9nb1RvcnNpIGZyb20gJ0AvaW1hZ2VzL2xvZ290b3JzaWV2LXN0cm9rZWQucG5nJ1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuLy8gaW1wb3J0IHsgQ2xhc3NOYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCl7XHJcbiAgICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApe1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxlZCh0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxlZChmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgJHtcclxuICAgICAgICAgIGlzU2Nyb2xsZWQgPyBcImJnLW9yZWQgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93LWxnXCIgOiBcImJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGVcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHktNCBtZDpweC02XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtbGcgZm9udC1zZW1pYm9sZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJ3LTMyXCIgc3JjPXtsb2dvVG9yc2l9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9yc2kgRVY8L3NwYW4+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgZ2FwLTYgdGV4dC1sZyBmb250LW1lZGl1bSBtZDpoaWRkZW4gJHtpc01lbnVPcGVuID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIn1gfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHRleHQtYmxhY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKX0gb25TY3JvbGw9eygpID0+IHNldElzU2Nyb2xsZWR9PlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBnYXAtNiB0ZXh0LWxnIGZvbnQtbWVkaXVtIG1kOmZsZXggbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmdhcC01IG1kOnRleHQtc20gbGc6Z2FwLTZcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51SWNvbihwcm9wczogYW55KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGluZSB4MT1cIjRcIiB4Mj1cIjIwXCIgeTE9XCIxMlwiIHkyPVwiMTJcIiAvPlxyXG4gICAgICAgICAgICA8bGluZSB4MT1cIjRcIiB4Mj1cIjIwXCIgeTE9XCI2XCIgeTI9XCI2XCIgLz5cclxuICAgICAgICAgICAgPGxpbmUgeDE9XCI0XCIgeDI9XCIyMFwiIHkxPVwiMThcIiB5Mj1cIjE4XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTW91bnRhaW5JY29uKHByb3BzOiBhbnkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwibTggMyA0IDggNS01IDUgMTVIMkw4IDN6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwibG9nb1RvcnNpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiQnV0dG9uIiwiTmF2YmFyIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImhlYWRlciIsImNsYXNzTmFtZSIsImhyZWYiLCJwcmVmZXRjaCIsInNyYyIsImFsdCIsInNwYW4iLCJuYXYiLCJzaXplIiwib25DbGljayIsIm9uU2Nyb2xsIiwiTWVudUljb24iLCJzZWN0aW9uIiwicHJvcHMiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImxpbmUiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIk1vdW50YWluSWNvbiIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Pages/navbar.tsx\n"));

/***/ })

});