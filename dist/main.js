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

/***/ "./src/scripts/scripts.js":
/*!********************************!*\
  !*** ./src/scripts/scripts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data.json */ \"./data/data.json\");\n\r\n\r\n$(\"#subscribe_btn\").on(\"click\", (e) => {\r\n  e.preventDefault();\r\n  const firstName = $(\"#first_name\").val();\r\n  const lastName = $(\"#last_name\").val();\r\n  const email = $(\"#email\").val();\r\n  if (firstName !== \"\" && lastName !== \"\" && email !== \"\") {\r\n    $(\".error-message\").text(\"\").hide();\r\n  } else {\r\n    $(\".error-message\").text(\"All field must be filled out!\").show();\r\n  }\r\n});\r\n\r\n$(\"#scroll-top\").on(\"click\", (e) => {\r\n  e.preventDefault();\r\n  $(document).scrollTop(0);\r\n});\r\n\r\nconst getCards = () => {\r\n  $.when($.getJSON(\"data/data.json\"), $.ready)\r\n    .done(function (data) {\r\n      data[0].forEach((card, index) => {\r\n        const cardTemplate = `<div class=\"col-sm-12 card p-0\">\r\n            <img src=\"${card.image}\" class=\"card-img-top\" alt=\"watch ${index}\">\r\n            <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">${card.title}</h5>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a class=\"nav-link\" href=\"#\">Read more \r\n                    <img src=\"assets/icons/arrow.svg\" class=\"arrow_icon\" alt=\"arrow icon\">\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>`;\r\n        $(\".row.card-group\").append(cardTemplate);\r\n      });\r\n    })\r\n    .fail(function (jqXHR, textStatus) {\r\n      _data_data_json__WEBPACK_IMPORTED_MODULE_0__.forEach((card, index) => {\r\n        const cardTemplate = `<div class=\"col-sm-12 card p-0\">\r\n            <img src=\"${card.image}\" class=\"card-img-top\" alt=\"watch ${index}\">\r\n            <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">${card.title}</h5>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a class=\"nav-link\" href=\"#\">Read more \r\n                    <img src=\"assets/icons/arrow.svg\" class=\"arrow_icon\" alt=\"arrow icon\">\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>`;\r\n        $(\".row.card-group\").append(cardTemplate);\r\n      });\r\n    });\r\n};\r\n\r\n$(document).ready(function () {\r\n  getCards();\r\n});\r\n\n\n//# sourceURL=webpack://oander-fe/./src/scripts/scripts.js?");

/***/ }),

/***/ "./data/data.json":
/*!************************!*\
  !*** ./data/data.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"title\":\"Going Upstream: The Montblanc 1858 Chronograph Tachymeter Limited\",\"image\":\"https://oander.hu/frontend_work_resources/Blog_img_01.png\"},{\"title\":\"Baume & Mercier Clifton Club Burt Munro Tribute Honors\",\"image\":\"https://oander.hu/frontend_work_resources/Blog_img_02.png\"},{\"title\":\"Do a Barrel Roll: Introducing the Alpina 99MG Pilot’s Watch\",\"image\":\"https://oander.hu/frontend_work_resources/Blog_img_01.png\"}]');\n\n//# sourceURL=webpack://oander-fe/./data/data.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/scripts.js");
/******/ 	
/******/ })()
;