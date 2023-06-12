/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/animaterplus.js":
/*!***********************************!*\
  !*** ./source/js/animaterplus.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   delay: () => (/* binding */ delay),\n/* harmony export */   stop: () => (/* binding */ stop)\n/* harmony export */ });\n/*\n * Animate Plus v2.1.1\n * Copyright (c) 2017-2018 Benjamin De Cock\n * http://animateplus.com/license\n */\n\n// logic\n// =====\n\nconst first = _ref => {\n  let [item] = _ref;\n  return item;\n};\nconst computeValue = (value, index) => typeof value == \"function\" ? value(index) : value;\n\n// dom\n// ===\n\nconst getElements = elements => {\n  if (Array.isArray(elements)) return elements;\n  if (!elements || elements.nodeType) return [elements];\n  return Array.from(typeof elements == \"string\" ? document.querySelectorAll(elements) : elements);\n};\nconst accelerate = (_ref2, keyframes) => {\n  let {\n    style\n  } = _ref2;\n  return style.willChange = keyframes ? keyframes.map(_ref3 => {\n    let {\n      property\n    } = _ref3;\n    return property;\n  }).join() : \"auto\";\n};\nconst createSVG = (element, attributes) => Object.entries(attributes).reduce((node, _ref4) => {\n  let [attribute, value] = _ref4;\n  node.setAttribute(attribute, value);\n  return node;\n}, document.createElementNS(\"http://www.w3.org/2000/svg\", element));\n\n// motion blur\n// ===========\n\nconst blurs = {\n  axes: [\"x\", \"y\"],\n  count: 0,\n  add(_ref5) {\n    let {\n      element,\n      blur\n    } = _ref5;\n    const id = `motion-blur-${this.count++}`;\n    const svg = createSVG(\"svg\", {\n      style: \"position: absolute; width: 0; height: 0\"\n    });\n    const filter = createSVG(\"filter\", this.axes.reduce((attributes, axis) => {\n      const offset = blur[axis] * 2;\n      attributes[axis] = `-${offset}%`;\n      attributes[axis == \"x\" ? \"width\" : \"height\"] = `${100 + offset * 2}%`;\n      return attributes;\n    }, {\n      id,\n      \"color-interpolation-filters\": \"sRGB\"\n    }));\n    const gaussian = createSVG(\"feGaussianBlur\", {\n      in: \"SourceGraphic\"\n    });\n    filter.append(gaussian);\n    svg.append(filter);\n    element.style.filter = `url(\"#${id}\")`;\n    document.body.prepend(svg);\n    return gaussian;\n  }\n};\nconst getDeviation = (blur, _ref6, curve) => {\n  let {\n    easing\n  } = _ref6;\n  const progress = blur * curve;\n  const out = blur - progress;\n  const deviation = (() => {\n    if (easing == \"linear\") return blur;\n    if (easing.startsWith(\"in-out\")) return (curve < .5 ? progress : out) * 2;\n    if (easing.startsWith(\"in\")) return progress;\n    return out;\n  })();\n  return Math.max(0, deviation);\n};\nconst setDeviation = (_ref7, curve) => {\n  let {\n    blur,\n    gaussian,\n    easing\n  } = _ref7;\n  const values = blurs.axes.map(axis => getDeviation(blur[axis], easing, curve));\n  gaussian.setAttribute(\"stdDeviation\", values.join());\n};\nconst normalizeBlur = blur => {\n  const defaults = blurs.axes.reduce((object, axis) => {\n    object[axis] = 0;\n    return object;\n  }, {});\n  return Object.assign(defaults, blur);\n};\nconst clearBlur = (_ref8, _ref9) => {\n  let {\n    style\n  } = _ref8;\n  let {\n    parentNode: {\n      parentNode: svg\n    }\n  } = _ref9;\n  style.filter = \"none\";\n  svg.remove();\n};\n\n// color conversion\n// ================\n\nconst hexPairs = color => {\n  const split = color.split(\"\");\n  const pairs = color.length < 5 ? split.map(string => string + string) : split.reduce((array, string, index) => {\n    if (index % 2) array.push(split[index - 1] + string);\n    return array;\n  }, []);\n  if (pairs.length < 4) pairs.push(\"ff\");\n  return pairs;\n};\nconst convert = color => hexPairs(color).map(string => parseInt(string, 16));\nconst rgba = hex => {\n  const color = hex.slice(1);\n  const [r, g, b, a] = convert(color);\n  return `rgba(${r}, ${g}, ${b}, ${a / 255})`;\n};\n\n// easing equations\n// ================\n\nconst pi2 = Math.PI * 2;\nconst getOffset = (strength, period) => period / pi2 * Math.asin(1 / strength);\nconst easings = {\n  \"linear\": progress => progress,\n  \"in-cubic\": progress => progress ** 3,\n  \"in-quartic\": progress => progress ** 4,\n  \"in-quintic\": progress => progress ** 5,\n  \"in-exponential\": progress => 1024 ** (progress - 1),\n  \"in-circular\": progress => 1 - Math.sqrt(1 - progress ** 2),\n  \"in-elastic\": (progress, amplitude, period) => {\n    const strength = Math.max(amplitude, 1);\n    const offset = getOffset(strength, period);\n    return -(strength * 2 ** (10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period));\n  },\n  \"out-cubic\": progress => --progress ** 3 + 1,\n  \"out-quartic\": progress => 1 - --progress ** 4,\n  \"out-quintic\": progress => --progress ** 5 + 1,\n  \"out-exponential\": progress => 1 - 2 ** (-10 * progress),\n  \"out-circular\": progress => Math.sqrt(1 - --progress ** 2),\n  \"out-elastic\": (progress, amplitude, period) => {\n    const strength = Math.max(amplitude, 1);\n    const offset = getOffset(strength, period);\n    return strength * 2 ** (-10 * progress) * Math.sin((progress - offset) * pi2 / period) + 1;\n  },\n  \"in-out-cubic\": progress => (progress *= 2) < 1 ? .5 * progress ** 3 : .5 * ((progress -= 2) * progress ** 2 + 2),\n  \"in-out-quartic\": progress => (progress *= 2) < 1 ? .5 * progress ** 4 : -.5 * ((progress -= 2) * progress ** 3 - 2),\n  \"in-out-quintic\": progress => (progress *= 2) < 1 ? .5 * progress ** 5 : .5 * ((progress -= 2) * progress ** 4 + 2),\n  \"in-out-exponential\": progress => (progress *= 2) < 1 ? .5 * 1024 ** (progress - 1) : .5 * (-(2 ** (-10 * (progress - 1))) + 2),\n  \"in-out-circular\": progress => (progress *= 2) < 1 ? -.5 * (Math.sqrt(1 - progress ** 2) - 1) : .5 * (Math.sqrt(1 - (progress -= 2) * progress) + 1),\n  \"in-out-elastic\": (progress, amplitude, period) => {\n    const strength = Math.max(amplitude, 1);\n    const offset = getOffset(strength, period);\n    return (progress *= 2) < 1 ? -.5 * (strength * 2 ** (10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period)) : strength * 2 ** (-10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period) * .5 + 1;\n  }\n};\nconst decomposeEasing = string => {\n  const [easing, amplitude = 1, period = .4] = string.trim().split(\" \");\n  return {\n    easing,\n    amplitude,\n    period\n  };\n};\nconst ease = (_ref10, progress) => {\n  let {\n    easing,\n    amplitude,\n    period\n  } = _ref10;\n  return easings[easing](progress, amplitude, period);\n};\n\n// keyframes composition\n// =====================\n\nconst extractRegExp = /-?\\d*\\.?\\d+/g;\nconst extractStrings = value => value.split(extractRegExp);\nconst extractNumbers = value => value.match(extractRegExp).map(Number);\nconst sanitize = values => values.map(value => {\n  const string = String(value);\n  return string.startsWith(\"#\") ? rgba(string) : string;\n});\nconst addPropertyKeyframes = (property, values) => {\n  const animatable = sanitize(values);\n  const strings = extractStrings(first(animatable));\n  const numbers = animatable.map(extractNumbers);\n  const round = first(strings).startsWith(\"rgb\");\n  return {\n    property,\n    strings,\n    numbers,\n    round\n  };\n};\nconst createAnimationKeyframes = (keyframes, index) => Object.entries(keyframes).map(_ref11 => {\n  let [property, values] = _ref11;\n  return addPropertyKeyframes(property, computeValue(values, index));\n});\nconst getCurrentValue = (from, to, easing) => from + (to - from) * easing;\nconst recomposeValue = (_ref12, strings, round, easing) => {\n  let [from, to] = _ref12;\n  return strings.reduce((style, string, index) => {\n    const previous = index - 1;\n    const value = getCurrentValue(from[previous], to[previous], easing);\n    return style + (round && index < 4 ? Math.round(value) : value) + string;\n  });\n};\nconst createStyles = (keyframes, easing) => keyframes.reduce((styles, _ref13) => {\n  let {\n    property,\n    numbers,\n    strings,\n    round\n  } = _ref13;\n  styles[property] = recomposeValue(numbers, strings, round, easing);\n  return styles;\n}, {});\nconst reverseKeyframes = keyframes => keyframes.forEach(_ref14 => {\n  let {\n    numbers\n  } = _ref14;\n  return numbers.reverse();\n});\n\n// animation tracking\n// ==================\n\nconst rAF = {\n  all: new Set(),\n  add(object) {\n    if (this.all.add(object).size < 2) requestAnimationFrame(tick);\n  }\n};\nconst paused = {};\nconst trackTime = (timing, now) => {\n  if (!timing.startTime) timing.startTime = now;\n  timing.elapsed = now - timing.startTime;\n};\nconst resetTime = object => object.startTime = 0;\nconst getProgress = _ref15 => {\n  let {\n    elapsed,\n    duration\n  } = _ref15;\n  return duration > 0 ? Math.min(elapsed / duration, 1) : 1;\n};\nconst setSpeed = (speed, value, index) => speed > 0 ? computeValue(value, index) / speed : 0;\nconst addAnimations = (options, resolve) => {\n  const {\n    elements = null,\n    easing = \"out-elastic\",\n    duration = 1000,\n    delay: timeout = 0,\n    speed = 1,\n    loop = false,\n    optimize = false,\n    direction = \"normal\",\n    blur = null,\n    change = null,\n    ...rest\n  } = options;\n  const last = {\n    totalDuration: -1\n  };\n  getElements(elements).forEach(async (element, index) => {\n    const keyframes = createAnimationKeyframes(rest, index);\n    const animation = {\n      element,\n      keyframes,\n      loop,\n      optimize,\n      direction,\n      change,\n      easing: decomposeEasing(easing),\n      duration: setSpeed(speed, duration, index)\n    };\n    const animationTimeout = setSpeed(speed, timeout, index);\n    const totalDuration = animationTimeout + animation.duration;\n    if (direction != \"normal\") reverseKeyframes(keyframes);\n    if (element) {\n      if (optimize) accelerate(element, keyframes);\n      if (blur) {\n        animation.blur = normalizeBlur(computeValue(blur, index));\n        animation.gaussian = blurs.add(animation);\n      }\n    }\n    if (totalDuration > last.totalDuration) {\n      last.animation = animation;\n      last.totalDuration = totalDuration;\n    }\n    if (animationTimeout) await delay(animationTimeout);\n    rAF.add(animation);\n  });\n  const {\n    animation\n  } = last;\n  if (!animation) return;\n  animation.end = resolve;\n  animation.options = options;\n};\nconst tick = now => {\n  const {\n    all\n  } = rAF;\n  all.forEach(object => {\n    trackTime(object, now);\n    const progress = getProgress(object);\n    const {\n      element,\n      keyframes,\n      loop,\n      optimize,\n      direction,\n      change,\n      easing,\n      duration,\n      gaussian,\n      end,\n      options\n    } = object;\n\n    // object is an animation\n    if (direction) {\n      let curve = progress;\n      switch (progress) {\n        case 0:\n          if (direction == \"alternate\") reverseKeyframes(keyframes);\n          break;\n        case 1:\n          if (loop) resetTime(object);else {\n            all.delete(object);\n            if (optimize && element) accelerate(element);\n            if (gaussian) clearBlur(element, gaussian);\n          }\n          if (end) end(options);\n          break;\n        default:\n          curve = ease(easing, progress);\n      }\n      if (gaussian) setDeviation(object, curve);\n      if (change && end) change(curve);\n      if (element) Object.assign(element.style, createStyles(keyframes, curve));\n      return;\n    }\n\n    // object is a delay\n    if (progress < 1) return;\n    all.delete(object);\n    end(duration);\n  });\n  if (all.size) requestAnimationFrame(tick);\n};\ndocument.addEventListener(\"visibilitychange\", () => {\n  const now = performance.now();\n  if (document.hidden) {\n    const {\n      all\n    } = rAF;\n    paused.time = now;\n    paused.all = new Set(all);\n    all.clear();\n    return;\n  }\n  const {\n    all,\n    time\n  } = paused;\n  if (!all) return;\n  const elapsed = now - time;\n  requestAnimationFrame(() => all.forEach(object => {\n    object.startTime += elapsed;\n    rAF.add(object);\n  }));\n});\n\n// exports\n// =======\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (options => new Promise(resolve => addAnimations(options, resolve)));\nconst delay = duration => new Promise(resolve => rAF.add({\n  duration,\n  end: resolve\n}));\nconst stop = elements => {\n  const {\n    all\n  } = rAF;\n  const nodes = getElements(elements);\n  all.forEach(object => {\n    if (nodes.includes(object.element)) all.delete(object);\n  });\n  return nodes;\n};\n\n//# sourceURL=webpack://personal_blog/./source/js/animaterplus.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animaterplus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animaterplus.js */ \"./source/js/animaterplus.js\");\n\n(0,_animaterplus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  elements: \".service-block\",\n  duration: 2000,\n  delay: index => index * 100,\n  transform: [\"scale(0)\", \"scale(1)\"]\n});\n\n//# sourceURL=webpack://personal_blog/./source/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/script.js");
/******/ 	
/******/ })()
;