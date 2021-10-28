/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/scripts.js":
/*!********************************!*\
  !*** ./src/scripts/scripts.js ***!
  \********************************/
/***/ (() => {

eval("$(\"#subscribe_btn\").on(\"click\", (e) => {\r\n  e.preventDefault();\r\n  const firstName = $(\"#first_name\").val();\r\n  const lastName = $(\"#last_name\").val();\r\n  const email = $(\"#email\").val();\r\n  if (firstName !== \"\" && lastName !== \"\" && email !== \"\") {\r\n    $(\".error-message\").text(\"\").hide();\r\n  } else {\r\n    $(\".error-message\").text(\"All field must be filled out!\").show();\r\n  }\r\n});\r\n\r\n$(\"#scroll-top\").on(\"click\", (e) => {\r\n  e.preventDefault();\r\n  $(document).scrollTop(0);\r\n});\r\n\r\nconst getCards = () => {\r\n  $.when($.getJSON(\"data/data.json\"), $.ready).done(function (data) {\r\n    data[0].forEach((card, index) => {\r\n      const cardTemplate = `<div class=\"col-sm-12 card p-0\">\r\n            <img src=\"${card.image}\" class=\"card-img-top\" alt=\"watch ${index}\">\r\n            <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">${card.title}</h5>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a class=\"nav-link\" href=\"#\">Read more \r\n                    <img src=\"assets/icons/arrow.svg\" class=\"arrow_icon\" alt=\"arrow icon\">\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>`;\r\n      $(\".row.card-group\").append(cardTemplate);\r\n    });\r\n  });\r\n};\r\n\r\n$(document).ready(function () {\r\n  getCards();\r\n});\r\n\n\n//# sourceURL=webpack://oander-fe/./src/scripts/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/scripts.js"]();
/******/ 	
/******/ })()
;