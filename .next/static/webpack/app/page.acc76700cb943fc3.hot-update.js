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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _images_logotorsiev_stroked_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/images/logotorsiev-stroked.png */ \"(app-pages-browser)/./src/images/logotorsiev-stroked.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n// \"use client\"\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { ClassNames } from \"@emotion/react\";\nfunction Navbar() {\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"fixed top-0 left-0 right-0 z-50 transition-colors duration-300 \".concat(isScrolled ? \"bg-white text-black shadow-lg\" : \"bg-transparent text-white\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto flex items-center justify-items-stretch px-4 py-4 md:px-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"#\",\n                            className: \"flex items-center gap-2 text-lg font-semibold\",\n                            prefetch: false,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"w-32\",\n                                    src: _images_logotorsiev_stroked_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"logo\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Torsi EV\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex flex-col gap-6 text-lg font-medium md:hidden \".concat(isMenuOpen ? \"block\" : \"hidden\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"font-bold\",\n                                    prefetch: false,\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-4 md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                size: \"small\",\n                                className: \"rounded-full text-black\",\n                                onClick: ()=>setIsMenuOpen(!isMenuOpen),\n                                onScroll: ()=>setIsScrolled,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuIcon, {\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Toggle navigation\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"font-bold\",\n                                    prefetch: false,\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"#\",\n                                    className: \"text-muted-foreground\",\n                                    prefetch: false,\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary bg-primary text-white\",\n                                    children: \"Get Started\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Navbar, \"PYTXP+Ba4zUSToikH9IFTduq6jI=\");\n_c = Navbar;\nfunction MenuIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ...props,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"24\",\n        height: \"24\",\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"12\",\n                y2: \"12\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"6\",\n                y2: \"6\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                x1: \"4\",\n                x2: \"20\",\n                y1: \"18\",\n                y2: \"18\"\n            }, void 0, false, {\n                fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, this);\n}\n_c1 = MenuIcon;\nfunction MountainIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ...props,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"24\",\n        height: \"24\",\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"m8 3 4 8 5-5 5 15H2L8 3z\"\n        }, void 0, false, {\n            fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\projects\\\\ev-landing-page\\\\src\\\\Pages\\\\navbar.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_c2 = MountainIcon;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"MenuIcon\");\n$RefreshReg$(_c2, \"MountainIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9QYWdlcy9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTs7O0FBQ1c7QUFDSztBQUN5QjtBQUNmO0FBQ1o7QUFDVTtBQUN2QywrQ0FBK0M7QUFFaEMsU0FBU087O0lBQ3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDN0NDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsZUFBZTtZQUNqQixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsR0FBRTtnQkFDbkJMLGNBQWM7WUFDbEIsT0FBTztnQkFDSEEsY0FBYztZQUNsQjtRQUNKO1FBQ0FJLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDdEQsR0FBRyxFQUFFO0lBQ0wscUJBQ0ksOERBQUNLOzswQkFDRyw4REFBQ0M7Z0JBQ0xDLFdBQVcsa0VBRVYsT0FEQ1gsYUFBYSxrQ0FBa0M7MEJBR2pELDRFQUFDUztvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNkLGlEQUFJQTs0QkFBQ2UsTUFBSzs0QkFBSUQsV0FBVTs0QkFBZ0RFLFVBQVU7OzhDQUNqRiw4REFBQ3BCLGtEQUFLQTtvQ0FBQ2tCLFdBQVU7b0NBQU9HLEtBQUtwQix1RUFBU0E7b0NBQUVxQixLQUFJOzs7Ozs7OENBQzVDLDhEQUFDQztvQ0FBS0wsV0FBVTs4Q0FBVTs7Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ007NEJBQUlOLFdBQVcscURBQXFGLE9BQWhDVCxhQUFhLFVBQVU7OzhDQUMxRiw4REFBQ0wsaURBQUlBO29DQUFDZSxNQUFLO29DQUFJRCxXQUFVO29DQUFZRSxVQUFVOzhDQUFPOzs7Ozs7OENBR3RELDhEQUFDaEIsaURBQUlBO29DQUFDZSxNQUFLO29DQUFJRCxXQUFVO29DQUF3QkUsVUFBVTs4Q0FBTzs7Ozs7OzhDQUdsRSw4REFBQ2hCLGlEQUFJQTtvQ0FBQ2UsTUFBSztvQ0FBSUQsV0FBVTtvQ0FBd0JFLFVBQVU7OENBQU87Ozs7Ozs4Q0FHbEUsOERBQUNoQixpREFBSUE7b0NBQUNlLE1BQUs7b0NBQUlELFdBQVU7b0NBQXdCRSxVQUFVOzhDQUFPOzs7Ozs7Ozs7Ozs7c0NBSXBFLDhEQUFDSjs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ2Isa0ZBQU1BO2dDQUFDb0IsTUFBSztnQ0FBUVAsV0FBVTtnQ0FBMEJRLFNBQVMsSUFBTWhCLGNBQWMsQ0FBQ0Q7Z0NBQWFrQixVQUFVLElBQU1uQjs7a0RBQ2xILDhEQUFDb0I7d0NBQVNWLFdBQVU7Ozs7OztrREFDcEIsOERBQUNLO3dDQUFLTCxXQUFVO2tEQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHOUIsOERBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ2QsaURBQUlBO29DQUFDZSxNQUFLO29DQUFJRCxXQUFVO29DQUFZRSxVQUFVOzhDQUFPOzs7Ozs7OENBR3RELDhEQUFDaEIsaURBQUlBO29DQUFDZSxNQUFLO29DQUFJRCxXQUFVO29DQUF3QkUsVUFBVTs4Q0FBTzs7Ozs7OzhDQUdsRSw4REFBQ2hCLGlEQUFJQTtvQ0FBQ2UsTUFBSztvQ0FBSUQsV0FBVTtvQ0FBd0JFLFVBQVU7OENBQU87Ozs7Ozs4Q0FHbEUsOERBQUNoQixpREFBSUE7b0NBQUNlLE1BQUs7b0NBQUlELFdBQVU7b0NBQXdCRSxVQUFVOzhDQUFPOzs7Ozs7OENBR2xFLDhEQUFDUztvQ0FBT1gsV0FBVTs4Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1oRSw4REFBQ1k7Ozs7Ozs7Ozs7O0FBS1A7R0F0RXdCeEI7S0FBQUE7QUF3RXhCLFNBQVNzQixTQUFTRyxLQUFVO0lBQ3hCLHFCQUNJLDhEQUFDQztRQUNJLEdBQUdELEtBQUs7UUFDVEUsT0FBTTtRQUNOQyxPQUFNO1FBQ05DLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxNQUFLO1FBQ0xDLFFBQU87UUFDUEMsYUFBWTtRQUNaQyxlQUFjO1FBQ2RDLGdCQUFlOzswQkFFZiw4REFBQ0M7Z0JBQUtDLElBQUc7Z0JBQUlDLElBQUc7Z0JBQUtDLElBQUc7Z0JBQUtDLElBQUc7Ozs7OzswQkFDaEMsOERBQUNKO2dCQUFLQyxJQUFHO2dCQUFJQyxJQUFHO2dCQUFLQyxJQUFHO2dCQUFJQyxJQUFHOzs7Ozs7MEJBQy9CLDhEQUFDSjtnQkFBS0MsSUFBRztnQkFBSUMsSUFBRztnQkFBS0MsSUFBRztnQkFBS0MsSUFBRzs7Ozs7Ozs7Ozs7O0FBRzVDO01BbkJTbEI7QUFxQlQsU0FBU21CLGFBQWFoQixLQUFVO0lBQzlCLHFCQUNFLDhEQUFDQztRQUNFLEdBQUdELEtBQUs7UUFDVEUsT0FBTTtRQUNOQyxPQUFNO1FBQ05DLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxNQUFLO1FBQ0xDLFFBQU87UUFDUEMsYUFBWTtRQUNaQyxlQUFjO1FBQ2RDLGdCQUFlO2tCQUVmLDRFQUFDTztZQUFLQyxHQUFFOzs7Ozs7Ozs7OztBQUdkO01BakJTRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvUGFnZXMvbmF2YmFyLnRzeD81NjcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBsb2dvVG9yc2kgZnJvbSAnQC9pbWFnZXMvbG9nb3RvcnNpZXYtc3Ryb2tlZC5wbmcnXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG4vLyBpbXBvcnQgeyBDbGFzc05hbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKXtcclxuICAgIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCl7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbGVkKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbGVkKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCAke1xyXG4gICAgICAgICAgaXNTY3JvbGxlZCA/IFwiYmctd2hpdGUgdGV4dC1ibGFjayBzaGFkb3ctbGdcIiA6IFwiYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktaXRlbXMtc3RyZXRjaCBweC00IHB5LTQgbWQ6cHgtNlwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwidy0zMlwiIHNyYz17bG9nb1RvcnNpfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvcnNpIEVWPC9zcGFuPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGdhcC02IHRleHQtbGcgZm9udC1tZWRpdW0gbWQ6aGlkZGVuICR7aXNNZW51T3BlbiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJ9YH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCB0ZXh0LWJsYWNrXCIgb25DbGljaz17KCkgPT4gc2V0SXNNZW51T3BlbighaXNNZW51T3Blbil9IG9uU2Nyb2xsPXsoKSA9PiBzZXRJc1Njcm9sbGVkfT5cclxuICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gZ2FwLTYgdGV4dC1sZyBmb250LW1lZGl1bSBtZDpmbGV4IG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpnYXAtNSBtZDp0ZXh0LXNtIGxnOmdhcC02XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBiZy1wcmltYXJ5IHRleHQtd2hpdGVcIj5HZXQgU3RhcnRlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lbnVJY29uKHByb3BzOiBhbnkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaW5lIHgxPVwiNFwiIHgyPVwiMjBcIiB5MT1cIjEyXCIgeTI9XCIxMlwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5lIHgxPVwiNFwiIHgyPVwiMjBcIiB5MT1cIjZcIiB5Mj1cIjZcIiAvPlxyXG4gICAgICAgICAgICA8bGluZSB4MT1cIjRcIiB4Mj1cIjIwXCIgeTE9XCIxOFwiIHkyPVwiMThcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNb3VudGFpbkljb24ocHJvcHM6IGFueSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJtOCAzIDQgOCA1LTUgNSAxNUgyTDggM3pcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJsb2dvVG9yc2kiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJCdXR0b24iLCJOYXZiYXIiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaHJlZiIsInByZWZldGNoIiwic3JjIiwiYWx0Iiwic3BhbiIsIm5hdiIsInNpemUiLCJvbkNsaWNrIiwib25TY3JvbGwiLCJNZW51SWNvbiIsImJ1dHRvbiIsInNlY3Rpb24iLCJwcm9wcyIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwibGluZSIsIngxIiwieDIiLCJ5MSIsInkyIiwiTW91bnRhaW5JY29uIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Pages/navbar.tsx\n"));

/***/ })

});