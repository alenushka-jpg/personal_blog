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

/***/ "./source/js/navigation-animation.js":
/*!*******************************************!*\
  !*** ./source/js/navigation-animation.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// const line = document.querySelector('.navigation__line');\n// const navigationItems = document.querySelectorAll('.navigation__li');\n// const activeWidth = document.querySelector('.navigation--active').offsetWidth;\n// // offsetWidth - возвращает ширину элемента в пикселях,\n// // границы и полосу прокрутки, но не включает отступы или границу прокрутки\n// const firstChild = navigationItems[0];\n// // `parseInt`- это функция, которая преобразует строку в число.\n// // `getComputedStyle` - это метод, который возвращает объект,\n// // содержащий все вычисленные стили элемента. Он принимает элемент в качестве значения.\n// // `firstChild.nextElementSibling` - это выборка первого дочернего элемента и переход\n// // к следующему соседнему элементу. Полученный элемент является следующим пунктом меню в навигационном списке.\n// // `marginLeft` - это свойство, возвращаемое методом `getComputedStyle',\n// // которое представляет значение левого отступа элемента.\n// // `.replace(/\\D/g, '')` - это регулярное выражение, которое удаляет все\n// // нечисловые символы из строки, чтобы получить только числовое значение.\n// const defaultMarginLeft = parseInt(getComputedStyle(firstChild.nextElementSibling).marginLeft.replace(/\\D/g, ''));\n// // получает значение левого внутреннего отступа (paddingLeft) <ul> элемента\n// // с идентификатором nav-container и преобразует его в целочисленное значение\n// const defaultPaddingLeft = parseInt(getComputedStyle(document.querySelector('.navigation__ul')).paddingLeft.replace(/\\D/g, ''));\n// // activeWidth и defaultPaddingLeft - это значения переменных,\n// // которые используются для установки значений ширины и отступа слева элемента line.\n// line.style.width = activeWidth + 'px';\n// line.style.marginLeft = defaultPaddingLeft + 'px';\n\n// export const initializeNavigation = () => {\n//   navigationItems.forEach(navListItem => {\n//     navListItem.addEventListener('click', function() {\n//       const navigationActive = document.querySelector('.navigation--active');\n\n//       // Получение горизонтального смещения (отступа слева) активного элемента навигации (navigationActive)\n//       //  с помощью свойства offsetLeft. Это свойство возвращает горизонтальное смещение элемента\n//       // относительно его родительского элемента в пикселях.\n//       const currentOffset = navigationActive.offsetLeft;\n\n//       // Array.from(...) - Преобразование коллекции дочерних элементов в массив.\n//       // navigationActive.parentNode - Получение родительского элемента активного элемента навигации (navigationActive).\n//       // .children - Получение всех дочерних элементов родительского элемента.\n//       // .indexOf(navigationActive) - Поиск индекса активного элемента (navigationActive) в полученном массиве дочерних элементов.\n//       const currentIndex = Array.from(navigationActive.parentNode.children).indexOf(navigationActive);\n\n//       navigationActive.classList.remove('navigation--active');\n//       this.classList.add('navigation--active');\n\n//       // Проверка на равенство между текущим элементом навигации (this) и элементом, который уже является активным (navigationActive)\n//       // Эта проверка используется для оптимизации и предотвращения повторной обработки клика на уже активном элементе навигации.\n//       if (this === navigationActive) {\n//         return 0;\n//       } else {\n//         // условие проверяет, является ли индекс текущего элемента навигации (this) больше индексы актинвого элемента (currentIndex)\n//         if (Array.from(navigationItems).indexOf(this) > currentIndex) {\n//           // переменная для сохранения ширины\n//           let initWidth;\n//           // условие проверяет является ли текущий элемент navigationActive первым дочерним элементом firstChild родительского элемента навигации\n//           if (navigationActive === firstChild) {\n//             // вычисляет ширину, которую нужно установить для элемента line. Значение initWidth вычисляется путем сложения\n//             // значения defaultMarginLeft (маргин слева), ширины текущего элемента навигации (this.offsetWidth),\n//             // позиции слева текущего элемента (this.offsetLeft) и вычитания значения defaultPaddingLeft (отступ слева) из этой суммы.\n//             initWidth = defaultMarginLeft + this.offsetWidth + this.offsetLeft - defaultPaddingLeft;\n//           } else {\n//             // вычисляем начальную ширину элемента line когда текущий элемент навигации не является первым дочерним элементом\n//             initWidth = this.offsetLeft + this.offsetWidth - currentOffset;\n//           }\n//           const marginLeftToSet = this.offsetLeft + defaultMarginLeft + 'px';\n\n//           line.style.width = initWidth + 'px';\n\n//           setTimeout(() => {\n//             line.style.marginLeft = marginLeftToSet;\n//             line.style.width = this.offsetWidth + 'px';\n//           }, 175);\n//         }\n//           // else {\n//           // let initWidth;\n//           // let marginLeftToSet;\n//           // if (this === firstChild) {\n//           //   initWidth = currentOffset - defaultPaddingLeft + defaultMarginLeft + currentWidth;\n//           //   marginLeftToSet = this.offsetLeft;\n//           // } else {\n//           //   initWidth = currentWidth + currentOffset - this.offsetLeft;\n//           //   marginLeftToSet = this.offsetLeft + defaultMarginLeft;\n//           // }\n\n//           // line.style.marginLeft = marginLeftToSet;\n//           // line.style.width = initWidth + 'px';\n\n//           // setTimeout(() => {\n//           //   line.style.width = this.offsetWidth + 'px';\n//           // }, 175);\n\n//           // }\n//       }\n//     });\n//   })\n// }\n\nconst navItems = document.querySelectorAll('.navigation__li');\nconst line = document.querySelector('.navigation__line');\nfunction setActiveNavItem(navItem) {\n  // Получаем ширину и отступы ссылки\n  const navItemRect = navItem.getBoundingClientRect();\n  const {\n    width,\n    left\n  } = navItemRect;\n\n  // Устанавливаем ширину и позицию линии\n  line.style.width = `${width}px`;\n  line.style.transform = `translateX(${left}px)`;\n}\nnavItems.forEach(navItem => {\n  navItem.addEventListener('click', function (e) {\n    e.preventDefault();\n    const clickedNavItem = this;\n    setActiveNavItem(clickedNavItem);\n  });\n});\n\n//# sourceURL=webpack://personal_blog/./source/js/navigation-animation.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-animation.js */ \"./source/js/navigation-animation.js\");\n\n\n//# sourceURL=webpack://personal_blog/./source/js/script.js?");

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