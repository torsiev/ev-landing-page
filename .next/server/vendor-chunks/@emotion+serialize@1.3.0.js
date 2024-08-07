"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@emotion+serialize@1.3.0";
exports.ids = ["vendor-chunks/@emotion+serialize@1.3.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serializeStyles: () => (/* binding */ serializeStyles)\n/* harmony export */ });\n/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ \"(ssr)/./node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js\");\n/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ \"(ssr)/./node_modules/.pnpm/@emotion+unitless@0.9.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js\");\n/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ \"(ssr)/./node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js\");\n\n\n\n\nvar isDevelopment = true;\n\nvar ILLEGAL_ESCAPE_SEQUENCE_ERROR = \"You have illegal escape sequence in your template literal, most likely inside content's property value.\\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \\\"content: '\\\\00d7';\\\" should become \\\"content: '\\\\\\\\00d7';\\\".\\nYou can read more about this here:\\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences\";\nvar UNDEFINED_AS_OBJECT_KEY_ERROR = \"You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).\";\nvar hyphenateRegex = /[A-Z]|^ms/g;\nvar animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;\n\nvar isCustomProperty = function isCustomProperty(property) {\n  return property.charCodeAt(1) === 45;\n};\n\nvar isProcessableValue = function isProcessableValue(value) {\n  return value != null && typeof value !== 'boolean';\n};\n\nvar processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function (styleName) {\n  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();\n});\n\nvar processStyleValue = function processStyleValue(key, value) {\n  switch (key) {\n    case 'animation':\n    case 'animationName':\n      {\n        if (typeof value === 'string') {\n          return value.replace(animationRegex, function (match, p1, p2) {\n            cursor = {\n              name: p1,\n              styles: p2,\n              next: cursor\n            };\n            return p1;\n          });\n        }\n      }\n  }\n\n  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__[\"default\"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {\n    return value + 'px';\n  }\n\n  return value;\n};\n\n{\n  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\\(|(no-)?(open|close)-quote/;\n  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];\n  var oldProcessStyleValue = processStyleValue;\n  var msPattern = /^-ms-/;\n  var hyphenPattern = /-(.)/g;\n  var hyphenatedCache = {};\n\n  processStyleValue = function processStyleValue(key, value) {\n    if (key === 'content') {\n      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '\"' && value.charAt(0) !== \"'\")) {\n        throw new Error(\"You seem to be using a value for 'content' without quotes, try replacing it with `content: '\\\"\" + value + \"\\\"'`\");\n      }\n    }\n\n    var processed = oldProcessStyleValue(key, value);\n\n    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {\n      hyphenatedCache[key] = true;\n      console.error(\"Using kebab-case for css properties in objects is not supported. Did you mean \" + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {\n        return _char.toUpperCase();\n      }) + \"?\");\n    }\n\n    return processed;\n  };\n}\n\nvar noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';\n\nfunction handleInterpolation(mergedProps, registered, interpolation) {\n  if (interpolation == null) {\n    return '';\n  }\n\n  var componentSelector = interpolation;\n\n  if (componentSelector.__emotion_styles !== undefined) {\n    if (String(componentSelector) === 'NO_COMPONENT_SELECTOR') {\n      throw new Error(noComponentSelectorMessage);\n    }\n\n    return componentSelector;\n  }\n\n  switch (typeof interpolation) {\n    case 'boolean':\n      {\n        return '';\n      }\n\n    case 'object':\n      {\n        var keyframes = interpolation;\n\n        if (keyframes.anim === 1) {\n          cursor = {\n            name: keyframes.name,\n            styles: keyframes.styles,\n            next: cursor\n          };\n          return keyframes.name;\n        }\n\n        var serializedStyles = interpolation;\n\n        if (serializedStyles.styles !== undefined) {\n          var next = serializedStyles.next;\n\n          if (next !== undefined) {\n            // not the most efficient thing ever but this is a pretty rare case\n            // and there will be very few iterations of this generally\n            while (next !== undefined) {\n              cursor = {\n                name: next.name,\n                styles: next.styles,\n                next: cursor\n              };\n              next = next.next;\n            }\n          }\n\n          var styles = serializedStyles.styles + \";\";\n\n          if (serializedStyles.map !== undefined) {\n            styles += serializedStyles.map;\n          }\n\n          return styles;\n        }\n\n        return createStringFromObject(mergedProps, registered, interpolation);\n      }\n\n    case 'function':\n      {\n        if (mergedProps !== undefined) {\n          var previousCursor = cursor;\n          var result = interpolation(mergedProps);\n          cursor = previousCursor;\n          return handleInterpolation(mergedProps, registered, result);\n        } else {\n          console.error('Functions that are interpolated in css calls will be stringified.\\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\\n' + 'It can be called directly with props or interpolated in a styled call like this\\n' + \"let SomeComponent = styled('div')`${dynamicStyle}`\");\n        }\n\n        break;\n      }\n\n    case 'string':\n      {\n        var matched = [];\n        var replaced = interpolation.replace(animationRegex, function (_match, _p1, p2) {\n          var fakeVarName = \"animation\" + matched.length;\n          matched.push(\"const \" + fakeVarName + \" = keyframes`\" + p2.replace(/^@keyframes animation-\\w+/, '') + \"`\");\n          return \"${\" + fakeVarName + \"}\";\n        });\n\n        if (matched.length) {\n          console.error(\"`keyframes` output got interpolated into plain string, please wrap it with `css`.\\n\\nInstead of doing this:\\n\\n\" + [].concat(matched, [\"`\" + replaced + \"`\"]).join('\\n') + \"\\n\\nYou should wrap it with `css` like this:\\n\\ncss`\" + replaced + \"`\");\n        }\n      }\n\n      break;\n  } // finalize string values (regular strings and functions interpolated into css calls)\n\n\n  var asString = interpolation;\n\n  if (registered == null) {\n    return asString;\n  }\n\n  var cached = registered[asString];\n  return cached !== undefined ? cached : asString;\n}\n\nfunction createStringFromObject(mergedProps, registered, obj) {\n  var string = '';\n\n  if (Array.isArray(obj)) {\n    for (var i = 0; i < obj.length; i++) {\n      string += handleInterpolation(mergedProps, registered, obj[i]) + \";\";\n    }\n  } else {\n    for (var key in obj) {\n      var value = obj[key];\n\n      if (typeof value !== 'object') {\n        var asString = value;\n\n        if (registered != null && registered[asString] !== undefined) {\n          string += key + \"{\" + registered[asString] + \"}\";\n        } else if (isProcessableValue(asString)) {\n          string += processStyleName(key) + \":\" + processStyleValue(key, asString) + \";\";\n        }\n      } else {\n        if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {\n          throw new Error(noComponentSelectorMessage);\n        }\n\n        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {\n          for (var _i = 0; _i < value.length; _i++) {\n            if (isProcessableValue(value[_i])) {\n              string += processStyleName(key) + \":\" + processStyleValue(key, value[_i]) + \";\";\n            }\n          }\n        } else {\n          var interpolated = handleInterpolation(mergedProps, registered, value);\n\n          switch (key) {\n            case 'animation':\n            case 'animationName':\n              {\n                string += processStyleName(key) + \":\" + interpolated + \";\";\n                break;\n              }\n\n            default:\n              {\n                if (key === 'undefined') {\n                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);\n                }\n\n                string += key + \"{\" + interpolated + \"}\";\n              }\n          }\n        }\n      }\n    }\n  }\n\n  return string;\n}\n\nvar labelPattern = /label:\\s*([^\\s;\\n{]+)\\s*(;|$)/g;\nvar sourceMapPattern;\n\n{\n  sourceMapPattern = /\\/\\*#\\ssourceMappingURL=data:application\\/json;\\S+\\s+\\*\\//g;\n} // this is the cursor for keyframes\n// keyframes are stored on the SerializedStyles object as a linked list\n\n\nvar cursor;\nfunction serializeStyles(args, registered, mergedProps) {\n  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {\n    return args[0];\n  }\n\n  var stringMode = true;\n  var styles = '';\n  cursor = undefined;\n  var strings = args[0];\n\n  if (strings == null || strings.raw === undefined) {\n    stringMode = false;\n    styles += handleInterpolation(mergedProps, registered, strings);\n  } else {\n    var asTemplateStringsArr = strings;\n\n    if (asTemplateStringsArr[0] === undefined) {\n      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);\n    }\n\n    styles += asTemplateStringsArr[0];\n  } // we start at 1 since we've already handled the first arg\n\n\n  for (var i = 1; i < args.length; i++) {\n    styles += handleInterpolation(mergedProps, registered, args[i]);\n\n    if (stringMode) {\n      var templateStringsArr = strings;\n\n      if (templateStringsArr[i] === undefined) {\n        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);\n      }\n\n      styles += templateStringsArr[i];\n    }\n  }\n\n  var sourceMap;\n\n  {\n    styles = styles.replace(sourceMapPattern, function (match) {\n      sourceMap = match;\n      return '';\n    });\n  } // using a global regex with .exec is stateful so lastIndex has to be reset each time\n\n\n  labelPattern.lastIndex = 0;\n  var identifierName = '';\n  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5\n\n  while ((match = labelPattern.exec(styles)) !== null) {\n    identifierName += '-' + match[1];\n  }\n\n  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(styles) + identifierName;\n\n  {\n    var devStyles = {\n      name: name,\n      styles: styles,\n      map: sourceMap,\n      next: cursor,\n      toString: function toString() {\n        return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";\n      }\n    };\n    return devStyles;\n  }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGVtb3Rpb24rc2VyaWFsaXplQDEuMy4wL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zZXJpYWxpemUvZGlzdC9lbW90aW9uLXNlcmlhbGl6ZS5kZXZlbG9wbWVudC5lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNFO0FBQ0Y7O0FBRXZDOztBQUVBLGdSQUFnUix1Q0FBdUM7QUFDdlQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLDREQUFPO0FBQzdDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsTUFBTSx5REFBUTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YscVBBQXFQLFlBQVksa0lBQWtJLGFBQWE7QUFDaFo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLHlFQUF5RTtBQUN6RTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELFVBQVU7QUFDVix1RkFBdUY7QUFDdkY7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MscUJBQXFCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHLFFBQVE7QUFDOUM7O0FBRUE7QUFDQSxxRUFBcUU7QUFDckUsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSixrQkFBa0IsaUJBQWlCO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx5REFBVTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXYtbGFuZGluZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9AZW1vdGlvbitzZXJpYWxpemVAMS4zLjAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L2Vtb3Rpb24tc2VyaWFsaXplLmRldmVsb3BtZW50LmVzbS5qcz9hMzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgaXNEZXZlbG9wbWVudCA9IHRydWU7XG5cbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XG52YXIgVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IgPSBcIllvdSBoYXZlIHBhc3NlZCBpbiBmYWxzeSB2YWx1ZSBhcyBzdHlsZSBvYmplY3QncyBrZXkgKGNhbiBoYXBwZW4gd2hlbiBpbiBleGFtcGxlIHlvdSBwYXNzIHVuZXhwb3J0ZWQgY29tcG9uZW50IGFzIGNvbXB1dGVkIGtleSkuXCI7XG52YXIgaHlwaGVuYXRlUmVnZXggPSAvW0EtWl18Xm1zL2c7XG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcblxudmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcbn07XG5cbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbic7XG59O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICByZXR1cm4gaXNDdXN0b21Qcm9wZXJ0eShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogc3R5bGVOYW1lLnJlcGxhY2UoaHlwaGVuYXRlUmVnZXgsICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhbmltYXRpb24nOlxuICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICBuYW1lOiBwMSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBwMixcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxue1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8odmFyfGF0dHJ8Y291bnRlcnM/fHVybHxlbGVtZW50fCgoKHJlcGVhdGluZy0pPyhsaW5lYXJ8cmFkaWFsKSl8Y29uaWMpLWdyYWRpZW50KVxcKHwobm8tKT8ob3BlbnxjbG9zZSktcXVvdGUvO1xuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XG4gIHZhciBvbGRQcm9jZXNzU3R5bGVWYWx1ZSA9IHByb2Nlc3NTdHlsZVZhbHVlO1xuICB2YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuICB2YXIgaHlwaGVuYXRlZENhY2hlID0ge307XG5cbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjb250ZW50VmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJiAhY29udGVudFZhbHVlUGF0dGVybi50ZXN0KHZhbHVlKSAmJiAodmFsdWUuY2hhckF0KDApICE9PSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgfHwgdmFsdWUuY2hhckF0KDApICE9PSAnXCInICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gXCInXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG52YXIgbm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UgPSAnQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggJyArICdAZW1vdGlvbi9iYWJlbC1wbHVnaW4sIHRoZSBzd2MgRW1vdGlvbiBwbHVnaW4sIG9yIGFub3RoZXIgRW1vdGlvbi1hd2FyZSAnICsgJ2NvbXBpbGVyIHRyYW5zZm9ybS4nO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgY29tcG9uZW50U2VsZWN0b3IgPSBpbnRlcnBvbGF0aW9uO1xuXG4gIGlmIChjb21wb25lbnRTZWxlY3Rvci5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoU3RyaW5nKGNvbXBvbmVudFNlbGVjdG9yKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFNlbGVjdG9yO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICB2YXIga2V5ZnJhbWVzID0gaW50ZXJwb2xhdGlvbjtcblxuICAgICAgICBpZiAoa2V5ZnJhbWVzLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBrZXlmcmFtZXMubmFtZSxcbiAgICAgICAgICAgIHN0eWxlczoga2V5ZnJhbWVzLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGtleWZyYW1lcy5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRTdHlsZXMgPSBpbnRlcnBvbGF0aW9uO1xuXG4gICAgICAgIGlmIChzZXJpYWxpemVkU3R5bGVzLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBzZXJpYWxpemVkU3R5bGVzLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gc2VyaWFsaXplZFN0eWxlcy5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChzZXJpYWxpemVkU3R5bGVzLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZXMgKz0gc2VyaWFsaXplZFN0eWxlcy5tYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKG1lcmdlZFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xuICAgICAgICAgIGN1cnNvciA9IHByZXZpb3VzQ3Vyc29yO1xuICAgICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAoX21hdGNoLCBfcDEsIHAyKSB7XG4gICAgICAgICAgdmFyIGZha2VWYXJOYW1lID0gXCJhbmltYXRpb25cIiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICAgIG1hdGNoZWQucHVzaChcImNvbnN0IFwiICsgZmFrZVZhck5hbWUgKyBcIiA9IGtleWZyYW1lc2BcIiArIHAyLnJlcGxhY2UoL15Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1cXHcrLywgJycpICsgXCJgXCIpO1xuICAgICAgICAgIHJldHVybiBcIiR7XCIgKyBmYWtlVmFyTmFtZSArIFwifVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlZC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcblwiICsgW10uY29uY2F0KG1hdGNoZWQsIFtcImBcIiArIHJlcGxhY2VkICsgXCJgXCJdKS5qb2luKCdcXG4nKSArIFwiXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbmNzc2BcIiArIHJlcGxhY2VkICsgXCJgXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIHZhciBhc1N0cmluZyA9IGludGVycG9sYXRpb247XG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBhc1N0cmluZztcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2FzU3RyaW5nXTtcbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkID8gY2FjaGVkIDogYXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldKSArIFwiO1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGFzU3RyaW5nID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW2FzU3RyaW5nXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IGtleSArIFwie1wiICsgcmVnaXN0ZXJlZFthc1N0cmluZ10gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUoYXNTdHJpbmcpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCBhc1N0cmluZykgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgaXNEZXZlbG9wbWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKGtleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUpO1xuXG4gICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKGtleSkgKyBcIjpcIiArIGludGVycG9sYXRlZCArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGtleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyooO3wkKS9nO1xudmFyIHNvdXJjZU1hcFBhdHRlcm47XG5cbntcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy9nO1xufSAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xuZnVuY3Rpb24gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIHJlZ2lzdGVyZWQsIG1lcmdlZFByb3BzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICB2YXIgc3RyaW5nTW9kZSA9IHRydWU7XG4gIHZhciBzdHlsZXMgPSAnJztcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xuICB2YXIgc3RyaW5ncyA9IGFyZ3NbMF07XG5cbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaW5nTW9kZSA9IGZhbHNlO1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBzdHJpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYXNUZW1wbGF0ZVN0cmluZ3NBcnIgPSBzdHJpbmdzO1xuXG4gICAgaWYgKGFzVGVtcGxhdGVTdHJpbmdzQXJyWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBhc1RlbXBsYXRlU3RyaW5nc0FyclswXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSk7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgdmFyIHRlbXBsYXRlU3RyaW5nc0FyciA9IHN0cmluZ3M7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVN0cmluZ3NBcnJbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzICs9IHRlbXBsYXRlU3RyaW5nc0FycltpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICB7XG4gICAgdmFyIGRldlN0eWxlcyA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gZGV2U3R5bGVzO1xuICB9XG59XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js\n");

/***/ })

};
;