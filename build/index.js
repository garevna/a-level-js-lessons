/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/for-rainbow.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/for-rainbow.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* Rainbow */\r\n\r\n@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade{10%{transform:scale(1, 1)}35%{transform:scale(1, 1.7)}40%{transform:scale(1, 1.7)}50%{opacity:1}60%{transform:scale(1, 1)}100%{transform:scale(1, 1);opacity:0}}[data-language] code,[class^=\"lang\"] code,pre [data-language],pre [class^=\"lang\"]{opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";animation:fade-in 50ms ease-in-out 2s forwards}[data-language] code.rainbow,[class^=\"lang\"] code.rainbow,pre [data-language].rainbow,pre [class^=\"lang\"].rainbow{animation:none;transition:opacity 50ms ease-in-out}[data-language] code.loading,[class^=\"lang\"] code.loading,pre [data-language].loading,pre [class^=\"lang\"].loading{animation:none}[data-language] code.rainbow-show,[class^=\"lang\"] code.rainbow-show,pre [data-language].rainbow-show,pre [class^=\"lang\"].rainbow-show{opacity:1}pre{position:relative}pre.loading .preloader div{animation-play-state:running}pre.loading .preloader div:nth-of-type(1){background:#0081f5;animation:fade 1.5s 300ms linear infinite}pre.loading .preloader div:nth-of-type(2){background:#5000f5;animation:fade 1.5s 438ms linear infinite}pre.loading .preloader div:nth-of-type(3){background:#9000f5;animation:fade 1.5s 577ms linear infinite}pre.loading .preloader div:nth-of-type(4){background:#f50419;animation:fade 1.5s 715ms linear infinite}pre.loading .preloader div:nth-of-type(5){background:#f57900;animation:fade 1.5s 853ms linear infinite}pre.loading .preloader div:nth-of-type(6){background:#f5e600;animation:fade 1.5s 992ms linear infinite}pre.loading .preloader div:nth-of-type(7){background:#00f50c;animation:fade 1.5s 1130ms linear infinite}pre .preloader{position:absolute;top:12px;left:10px}pre .preloader div{width:12px;height:12px;border-radius:4px;display:inline-block;margin-right:4px;opacity:0;animation-play-state:paused;animation-fill-mode:forwards}pre{background-color:#000;word-wrap:break-word;margin:0px;padding:10px;color:#fff;font-size:14px;margin-bottom:20px}pre,code{font-family:'Monaco', 'Menlo', courier, monospace}pre,code{font-family:monospace}pre{background-color:#fff;color:#000;font-size:13px;line-height:16px}pre .comment{color:#888}pre .support{color:#cd57d5}pre .constant.numeric,pre .php.embedded{color:#fa0002;font-weight:bold}pre .keyword,pre .constant.language{color:#000789;font-weight:bold}pre .selector,pre .support.property,pre .entity.name.function{color:#000}pre .storage.function,pre .variable.self,pre .support.function,pre .constant.language{color:#000;font-weight:bold}pre .string{color:#0d43fa;font-weight:normal}pre .css-property+span,pre .keyword.unit,pre .support.css-value{color:#0d43fa !important;font-weight:normal !important}pre .entity.tag.style+.string,pre .php.embedded .constant.language,pre .php.embedded .keyword{color:#37a348 !important}pre .support.method{color:#2bd5bb}pre .entity.name{color:#fd74e0}pre .support.css-property,pre .support.tag-name,pre .support.tag,pre .support.attribute,pre .support.attribute+.operator{color:#000789}pre .storage.module,pre .storage.class{color:#122573;font-weight:bold}pre .css.embedded .support.tag,pre .css.embedded .style.tag{color:#cd57d5}pre .keyword.operator{color:#2852eb;font-weight:normal}pre .php.embedded .variable,pre .php.embedded .storage.function{color:#0d43fa;font-weight:normal}pre .php.embedded .string,pre .js.embedded .tag.script{color:#c4001e}pre .php.embedded .comment{color:#f4b441;font-weight:normal}pre .php.embedded .function.name{color:#000;font-weight:normal}\r\n\r\npre {\r\n    box-shadow: 0 0 5px #00000050;\r\n    border: solid 20px transparent;\r\n    border-top-width: 10px;\r\n    border-bottom-width: 10px;\r\n    margin: 20px 10px 20px 2px;\r\n    padding: 0 5px 10px 0;\r\n    overflow: auto;\r\n}\r\n\r\npre .storage.function, pre .variable.self,\r\npre .support.function, pre .constant.language {\r\n    color: darkorchid;\r\n    font-weight: bold;\r\n}\r\n\r\npre .storage.type {\r\n  color: firebrick;\r\n}\r\n\r\npre .entity.name.function {\r\n    color: rgb(7, 119, 7);\r\n}\r\n\r\ncode {\r\n    font-size: 14px;\r\n    line-height: 1.8;\r\n}\r\n\r\ntd {\r\n  border: solid 1px #eef;\r\n  padding: 5px 10px;\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/grid.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/grid.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\r\n    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));\r\n    justify-items: center;\r\n    align-items: stretch;\r\n    gap: 10px;\r\n}\r\n.grid > div {\r\n    display: block;\r\n    width: max-content;\r\n    height: max-content;\r\n    padding: 0;\r\n    margin:0;\r\n}\r\n.grid > div > a {\r\n    display: block;\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\r\n  /* --cap-image : url(https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/coffee.png); */\r\n  --cap-image : url(https://garevna.github.io/js-samples/icons/cap.png);\r\n  /* --link-image: url(https://garevna.github.io/js-samples/icons/link.png); */\r\n\r\n  --back-color: #ffffff90;\r\n  --menu-back-color: #fa0;\r\n  --submenu-back-color: #09b;\r\n  --back-transparent: #ffffff00;\r\n  --menu-color: #09b;\r\n  --submenu-color: #09b;\r\n  --menu-color-hover: #000;\r\n  --submenu-color-hover: #000;\r\n  --selected-lesson-color: #fff;\r\n  --header-back-color: linear-gradient(to right, #00000000, #00000050 30%, #000000 40%, #000 );\r\n  --header-back-image: url(https://cdn.glitch.com/a4e0a9fd-ea7b-47cf-b52a-48fd6359c559%2Fstars-5.gif);\r\n\r\n  /*--icon:       url(../src/images/cat.gif);*/\r\n  --icon:       url(https://cdn.glitch.com/a4e0a9fd-ea7b-47cf-b52a-48fd6359c559%2Fpersonage-to-right.gif);\r\n  --search:     url(https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/mag.png);\r\n  --link-image: url(https://garevna.github.io/js-samples/icons/link-ico.png);\r\n\r\n  --button-gradient-0: linear-gradient(to right, #09b, #09b, #09b);\r\n  --button-gradient-1: linear-gradient(to right top, #09b, #5bd 10% 30%, #09b);\r\n  --button-gradient-2: linear-gradient(to right top, #09b, #5bd 30% 50%, #09b);\r\n  --button-gradient-3: linear-gradient(to right top, #09b, #5bd 50% 70%, #09b);\r\n  --button-gradient-4: linear-gradient(to right top, #09b, #5bd 70% 90%, #09b);\r\n  --button-gradient-5: linear-gradient(to right top, #09b, #5bd 40% 50%, #09b);\r\n  --main-menu-item-height: 20px;\r\n  --main-font: 'Poppins', 'Montserrat', 'Roboto', Arial;\r\n  --funy-font: 'Luckiest Guy', 'Montserrat', 'Roboto', Arial;\r\n}\r\n\r\nbody {\r\n  margin: 20px calc(50% - 450px);\r\n  font-family: \"Poppins\", Arial;\r\n  color: #555;\r\n  background-color: white;\r\n  border: solid 20px white;\r\n  border-bottom: solid 70px white;\r\n  overflow-x: hidden;\r\n}\r\n\r\nhtml {\r\n    background: #555;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nhr {\r\n  margin: 32px 0;\r\n  height: 1px;\r\n  border-top: solid 1px #f50;\r\n  border-bottom: solid 1.2px #09b;\r\n  background: transparent;\r\n}\r\n\r\n/* ===============  main-menu-component  =============== */\r\n\r\nmain-menu-component {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    background: var(--header-back-image), var(--header-back-color);\r\n    background-size: 30%, 100%;\r\n    background-repeat: repeat-x, no-repeat;\r\n    background-blend-mode: overlay;\r\n    box-shadow: 2px 2px 4px #00000090;\r\n    z-index: 55;\r\n}\r\n\r\nmain-menu-component:before {\r\n    content: \"Client-side JS\";\r\n    font-family: \"Luckiest Guy\";\r\n    color: #def;\r\n    display: block;\r\n    padding: 8px 16px;\r\n    font-size: 30px;\r\n    mix-blend-mode: difference;\r\n    -moz-letter-spacing: 2;\r\n    -webkit-letter-spacing: 2;\r\n    letter-spacing: 2;\r\n}\r\n\r\npopup-win img {\r\n  border: 0;\r\n}\r\npopup-win h3 {\r\n  color: #dde;\r\n}\r\n\r\n@media screen and (min-width: 1300px) {\r\n  main-menu-component:before {\r\n    padding-left: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1280px) {\r\n  main-menu-component:before {\r\n    padding-left: 20vw;\r\n  }\r\n}\r\n@media screen and (max-width: 900px) {\r\n  body {\r\n    margin: 0;\r\n  }\r\n  glitch-logo { display: none; }\r\n  popup-win { display: none; }\r\n\r\n  main-menu-component:before {\r\n    padding-left: 80px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px), screen and (max-height: 480px) {\r\n    main-menu-component {\r\n      background: transparent;\r\n      box-shadow: none;\r\n    }\r\n    main-menu-component:before {\r\n      display: none;\r\n    }\r\n}\r\n\r\n\r\n/* ===== glitch logo ===== */\r\n\r\nglitch-logo {\r\n    position: absolute;\r\n    top: 70px;\r\n    left: calc(100% - 150px);\r\n}\r\n\r\n\r\nmenu-component {\r\n    position: fixed;\r\n    top: 8px;\r\n    z-index: 500;\r\n    cursor:pointer;\r\n}\r\n\r\n.close-button {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  background: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n.close-button:before {\r\n  content: \"\";\r\n  background-size: contain;\r\n  background-image: url(https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/no_entry_sign.png);\r\n  width:30px;\r\n  height:30px;\r\n}\r\n.close-button:hover:before {\r\n  background-blend-mode: difference;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #079;\r\n  box-shadow: inset 0 0 1px #00000070;\r\n  border-radius: 1px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #f50;\r\n  border-radius: 1px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #fa0;\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/noise.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/noise.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#noise-back, #noise {\r\n  position: absolute;\r\n  width: inherit;\r\n  height: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);\r\n}\r\n\r\n.content:hover > #noise-back {\r\n  animation: clip-animation 0.3s infinite;\r\n}\r\n.content:hover > #noise {\r\n  animation: clip-animation 0.4s infinite;\r\n}\r\n\r\n#noise {\r\n  background-color: #f50;\r\n\r\n}\r\n\r\n#noise-back {\r\n  background-color: #09b;\r\n}\r\n\r\n@keyframes clip-animation {\r\n    0% { clip-path: polygon(0% 0%, 5% 0%, 5% 4%, 0% 4%); }\r\n    2% { clip-path: polygon(0% 8%, 10% 8%, 10% 10%, 0% 10%); }\r\n    5% { clip-path: polygon(0% 0%, 15% 0%, 15% 5%, 0% 5%); }\r\n    7% { clip-path: polygon(0% 12%, 40% 12%, 40% 15%, 0% 15%); }\r\n   10% { clip-path: polygon(0% 25%, 20% 25%, 20% 30%, 0% 30%); }\r\n   15% { clip-path: polygon(0% 88%, 20% 88%, 20% 90%, 0% 90%); }\r\n   20% { clip-path: polygon(0% 97%, 50% 97%, 50% 100%, 0% 100%); }\r\n   27% { clip-path: polygon(0% 90%, 30% 90%, 30% 92%, 0% 92%); }\r\n   30% { clip-path: polygon(0% 50%, 40% 50%, 40% 54%, 0% 54%); }\r\n   34% { clip-path: polygon(0% 43%, 40% 43%, 40% 45%, 0% 45%); }\r\n   40% { clip-path: polygon(0% 30%, 20% 30%, 20% 32%, 0% 32%); }\r\n   47% { clip-path: polygon(0% 0%, 50% 0%, 50% 3%, 0% 3%); }\r\n   50% { clip-path: polygon(0% 15%, 30% 15%, 30% 20%, 0% 20%); }\r\n   55% { clip-path: polygon(0% 17%, 40% 17%, 40% 20%, 0% 20%); }\r\n   60% { clip-path: polygon(0% 70%, 40% 70%, 40% 73%, 0% 73%); }\r\n   64% { clip-path: polygon(0% 18%, 30% 18%, 30% 20%, 0% 20%); }\r\n   70% { clip-path: polygon(0% 80%, 20% 80%, 20% 85%, 0% 85%); }\r\n   72% { clip-path: polygon(0% 74%, 20% 74%, 20% 77%, 0% 77%); }\r\n   78% { clip-path: polygon(0% 30%, 40% 30%, 40% 33%, 0% 33%); }\r\n   80% { clip-path: polygon(0% 40%, 40% 40%, 40% 44%, 0% 44%); }\r\n   90% { clip-path: polygon(0% 10%, 30% 10%, 30% 12%, 0% 12%); }\r\n  100% { clip-path: polygon(0% 84%, 35% 84%, 35% 88%, 0% 88%); }\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/project.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/project.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".maket-01 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/01.png);\r\n}\r\n.maket-02 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/02.png);\r\n}\r\n.maket-03 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/03.png);\r\n}\r\n.maket-04 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/04.png);\r\n}\r\n.maket-05 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/05.png);\r\n}\r\n.maket-06 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/06.png);\r\n}\r\n.maket-07 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/07.png);\r\n}\r\n.maket-08 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/08.png);\r\n}\r\n.maket-09 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/09.png);\r\n}\r\n.maket-10 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/10.png);\r\n}\r\n.maket-11 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/11.png);\r\n}\r\n.maket-12 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/12.png);\r\n}\r\n.maket-13 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/13.png);\r\n}\r\n.maket-14 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/14.png);\r\n}\r\n.maket-15 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/15.png);\r\n}\r\n.maket-16 {\r\n  background-image: url(https://garevna.github.io/a-level-js-lessons/src/images/project/16.png);\r\n}\r\n\r\n.maket-01, .maket-02, .maket-03, .maket-04, .maket-05, .maket-06,\r\n.maket-07, .maket-08, .maket-09, .maket-10, .maket-11, .maket-12,\r\n.maket-13, .maket-14, .maket-15, .maket-16 {\r\n    display: block;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    min-width: 320px;\r\n    max-width: 100vw;\r\n    min-height: 150px;\r\n    max-height: 30vh;\r\n    width: 320px;\r\n    height: 30vh;\r\n}\r\n\r\n.project > div > a {\r\n    display: block;\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/GraphicHeaderComponent.js":
/*!***************************************!*\
  !*** ./src/GraphicHeaderComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GraphicHeader extends HTMLElement {
    constructor () {
        super ()
        this.normalState = [ -100, 0, 300, 0 ]
        this.currentState = [ -100, 0, 300, 0 ]
        this.hoverState = [ 20, 70, 80, 70 ]
        this.defs = `
                <defs>
                    <filter id="shadow" x="0" y="0" width="300%" height="300%">
                      <feOffset result="offOut" in="SourceAlpha" dx="1" dy="1" />
                      <feGaussianBlur result="blurIn" in="offOut" stdDeviation="7" />
                      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                    <pattern id="picture" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="https://cdn.glitch.com/a4e0a9fd-ea7b-47cf-b52a-48fd6359c559%2Fstars-5.gif" x="0" y="-50" width="100" height="200" />
                    </pattern>
                </defs>
        `
        this.shadow = this.attachShadow ( { mode: "closed" } )
		this.shadow.innerHTML = `
            <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                ${this.defs}
      			<path d="M-50 0 C ${this.currentState[0]} ${this.currentState[1]}, ${this.currentState[2]} ${this.currentState[3]}, 250 0" filter="url(#shadow)" fill="url(#picture)" />
    		</svg>
        `
    }
    connectedCallback () {
        this.svg = this.shadow.querySelector ( "svg" )
        this.path = this.shadow.querySelector ( "path" )
        this.shadow.appendChild (
            document.createElement ( "style" )
        ).textContent = `
            svg {
                position: fixed;
                top: 0;
                height: 50px;
                left: 0;
                width: 100vw;
                background: var(--header-back-color);
                box-shadow: 3px 3px 5px #00000070;
            }
            svg > path {
                fill: url(#picture);
                stroke: none;
            }
            h3 {
              font-family: var(--funy-font);
              color: #f50;
            }

            @media screen and (max-width: 480px), screen and (max-height: 480px) {
                svg, h3 {
                  display: none;
                }
            }
        `
        this.svg.onpointerdown = this.change.bind ( this, "hoverState" )
        this.svg.onpointerup = this.change.bind ( this, "normalState" )
        this.svg.addEventListener ( "pointerdown", this.changeSVGsize )
        this.svg.addEventListener ( "pointerup", function ( event ) {
          event.preventDefault()
          event.stopPropagation()
          event.cancelBubble = true
          event.returnValue = false
          return false
        } )
        window.oncontextmenu = function(event) {
             event.preventDefault();
             event.stopPropagation();
             return false;
        }
    }
    changeSVGsize ( event ) {
        // event.target.setPointerCapture ( event.pointerId )
        event.target.style.height = "80vh"
        event.target.style.background = "var(--back-transparent)"
        event.target.style.boxShadow = "none"
    }
    animate () {
        let x1 = this.currentState[0],
            y1 = this.currentState[1],
            x2 = this.currentState[2],
            y2 = this.currentState[3]
        this.svg.innerHTML = `
            ${this.defs}
            <path d="M-150 0 C ${x1} ${y1}, ${x2} ${y2}, 300 0" filter="url(#f1)"/>
            <!-- <image xlink:href="https://yokoent.com/images/fingerprint-png-green-3.png" width="20%" height="20%" x="50" y="20" /> -->
        `
        this.change.call ( this, arguments[0] )
    }
    change () {
        let dist = 0
        for ( let index = 0; index < this.currentState.length; index++ ) {

                let distance = this [ arguments[0] ] [ index ] - this.currentState [ index ]
                this.currentState [ index ] += distance < 0 ? -1 : distance > 0 ? 1 : 0
                dist += Math.abs ( distance )
        }
        if ( dist === 0 ) {
            if ( arguments[0] === "normalState" ) {
                this.svg.style.height = "50px"
                this.svg.style.background = "var(--header-back-color)"
                this.svg.style.boxShadow = "5px 5px 10px #00000070"
            } else {
              this.svg.innerHTML += `<image xlink:href="https://yokoent.com/images/fingerprint-png-green-3.png" width="20%" height="20%" x="50" y="20" />`
            }
            return
        }
        requestAnimationFrame ( this.animate.bind ( this, arguments[0] ) )
    }
    disconnectedCallback () {
      console.log ( "GraphicHeaderComponent was disconnected!" )
    }
}

customElements.define (
    "graphic-header",
    GraphicHeader
)

// document.body.appendChild (
//     document.createElement ( "graphic-header" )
// )

/* harmony default export */ __webpack_exports__["default"] = (GraphicHeader);


/***/ }),

/***/ "./src/Shutter.js":
/*!************************!*\
  !*** ./src/Shutter.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Shutter extends HTMLElement {
    constructor () {
        super()
        this.shadow = this.attachShadow ( { mode:"closed" } )
        this.polygones = []
    }
    connectedCallback () {
        let style = this.shadow.appendChild (
            document.createElement ( "style" )
        )
        style.textContent = `
            main {
                position: absolute;
                width: 100vw;
                height: 100vh;
                margin: 0;
                padding: 0;
                overflow:hidden;
                box-sizing: border-box;
            }
            section {
                position: relative;
                width: 100%;
                overflow: hidden;
                margin: 0;
                padding: 0;
            }
            figure {
                position: absolute;
                display: inline-block;
                background-color: #444;
                height: 100%;
                margin: 0;
                animation-fill-mode: forwards;
                background: #00000090;
                box-shadow: 2px 2px 4px #00000070;
            }
            .right-figure {
                right: -100%;
                box-shadow: -2px 2px 4px #00000070;
            }
            .left-figure {
                left: -100%;
                box-shadow: 2px 2px 4px #00000070;
            }
            @keyframes movie-left {
                0%   { left: -100%; }
                45%  { left: 0%; }
                55%  { left: 0%; }
                100% { left: -100%; }
            }
            @keyframes movie-right {
                0%   { right: -100%; }
                45%  { right: 0%; }
                55%  { right: 0%; }
                100% { right: -100%; }
            }
        `
        let main = this.createElem ( "main", this.shadow )
        this.createPolygones( main )
        this.polygones.forEach (
            item => item.forEach (
                elem => elem.style [ "animation-name" ] = elem.movie
            )
        )
    }
    getSegmentHeight ( totalHeight ) {
        return totalHeight > 50 ?
                Math.max( 50, Math.min ( 150, Math.random () * totalHeight ) ) :
                totalHeight
    }
    getRandomColor () {
        return `rgba(
                    ${Math.round ( Math.random() * 200 )},
                    ${Math.round ( Math.random() * 200 )},
                    ${Math.round ( Math.random() * 200 )},
                    0.8)`
    }
    createElem ( tagName, container ) {
        return container.appendChild (
            document.createElement ( tagName )
        )
    }
    createFigure ( container, class_name ) {
        let elem = this.createElem ( "figure", container )
        class_name ? elem.className = class_name : null
        return elem
    }
    createPolygones ( container ) {

        let num = Math.max ( 5, Math.round ( Math.random () * 10 ) )
        let totalHeight = container.offsetHeight

        do {
            let height = this.getSegmentHeight ( totalHeight )
            let section = this.createElem ( "section", container )
            section.style.height = height + "px"
            totalHeight -= height

            let width = Math.round ( Math.max ( 0.3, Math.min ( Math.random (), 0.7 ) ) * section.offsetWidth )

            let elem1 = this.createFigure ( section, "left-figure" )
            let elem2 = this.createFigure ( section, "right-figure" )
            // elem1.style.backgroundColor = this.getRandomColor()
            // elem2.style.backgroundColor = this.getRandomColor()

            elem1.style[ "animation-duration" ] =
                elem2.style[ "animation-duration" ] = Math.max( 0.5, Math.random () ) + "s"

            elem1.movie = "movie-left"
            elem2.movie = "movie-right"

            elem1.style.width = width + "px"
            elem2.style.width = section.offsetWidth - width + "px"

            this.polygones.push ( [ elem1, elem2 ] )
        } while ( totalHeight > 0 )
    }
}

customElements.define ( "shutter-element", Shutter )

/* harmony default export */ __webpack_exports__["default"] = (Shutter);


/***/ }),

/***/ "./src/codeOutputComponent.js":
/*!************************************!*\
  !*** ./src/codeOutputComponent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class CodeOutput extends HTMLElement {
    constructor () {
        super ()
        this.shadow = this.attachShadow ( { mode: "closed" } )
        this.shadow.innerHTML = `
          <style>
            * { outline: none; }
            section {
              position: relative;
              height: 300px;
              padding: 20px;
              box-sizing: border-box;
              box-shadow: inset 2px 2px 4px #00000070;
              background: #000;
              color: #dde;
              overflow-x: hidden;
              overflow-y: auto;
            }
            button {
              background: linear-gradient(to right, #09b, #09b, #09b);
              padding: 10px 20px;
              font-family: Mali, Montserrat, Arial;
              font-size: 1.2rem;
              border:0;
              color: white;
              box-shadow: 1px 1px 2px #00000070;
            }

            button:hover {
              animation: button-hover 0.2s ease alternate 2;
              box-shadow: 0px 0px 2px #00000050;
              text-shadow: 1px 1px 1px #005577de;
            }

            @keyframes button-hover {
                0% { background: linear-gradient(to right top, #09b,#09b, #09b); }
               20% { background: linear-gradient(to right top, #09b, #5bd 10% 30%, #09b); }
               40% { background: linear-gradient(to right top, #09b, #5bd 30% 50%, #09b); }
               60% { background: linear-gradient(to right top, #09b, #5bd 50% 70%, #09b); }
               80% { background: linear-gradient(to right top, #09b, #5bd 70% 90%, #09b); }
              100% { background: linear-gradient(to right top, #09b, #09b, #09b); }

            }
            ::-webkit-scrollbar {
              width: 5px;
              height: 5px;
            }

            ::-webkit-scrollbar-track {
              background: #079;
              box-shadow: inset 0 0 1px #00000070;
              border-radius: 1px;
            }

            ::-webkit-scrollbar-thumb {
              background: #f50;
              border-radius: 1px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #fa0;
            }
          </style>
          <button>Start</button>
          <section>
          </section>
        `;

        this.button = this.shadow.querySelector ( "button" )
        this.section = this.shadow.querySelector ( "section" )
    }
    connectedCallback () {

    }
    static get observedAttributes () {
        return [ "script" ]
    }
    attributeChangedCallback ( attrName, oldVal, newVal ) {
        fetch( `${createPath("lessons", newVal )}` )
            .then ( response => response.text() )
            .then ( response => {
              response = response.replace(/document.body/g, "this.section")
              response = response.replace(/document.head/g, "this.section")

              let stopHandler = function ( event ) {
                event.target.innerText = "Start"
                event.target.onclick = startHandler
                this.section.stop = true
                this.section.innerHTML = ""
              }.bind ( this )

              let startHandler = function ( event ) {
                event.target.innerText = "stop"
                event.target.onclick = stopHandler
                this.section.stop = false
                eval ( response )
              }.bind ( this )

              this.button.onclick = startHandler
            })
    }
}

customElements.define (
  "code-output",
  CodeOutput
)

/* harmony default export */ __webpack_exports__["default"] = (CodeOutput);


/***/ }),

/***/ "./src/for-rainbow.css":
/*!*****************************!*\
  !*** ./src/for-rainbow.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./for-rainbow.css */ "./node_modules/css-loader/dist/cjs.js!./src/for-rainbow.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/glitch.js":
/*!***********************!*\
  !*** ./src/glitch.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class GlitchLogo extends HTMLElement {
  constructor(){
    super()
    let shadow = this.attachShadow ( { mode: "closed" } )
    let style = shadow.appendChild (
      document.createElement ( "style" )
    )
    style.textContent = `
    .logo-box {
        position: absolute;
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        padding: 20px 20px 0 20px;
        color: #fff;
        font-family: "Poppins", Roboto, sans-serif;
        // border-bottom: solid 1px #fff;
        // border-right: solid 1px #fff;
        box-shadow: 3px 3px 5px #00000080;
        overflow: hidden;
    }
    .logo-box .over {
      position: absolute;
      top: 0;
      margin: 20px 0;
    }
    .logo-box .noise {
        position: absolute;
        top: 50px;
        left: 0px;
        width: 10px;
        height: 1px;
        z-index: 5;
        background-color: #00000080;
        animation: glitch-noise 1s linear 0s infinite alternate;
       overflow: hidden;
    }
    .logo-box .glitch {
      color: #fff;
      font-family: "Luckiest Guy", "Poppins", Roboto, sans-serif;
      font-size: 80px;
      letter-spacing: 4px;
      position: relative;
    }
    .logo-box .glitch:before, .logo-box .glitch:after {
      content: "JS";
      color: #fff;
      position: absolute;
      top: 0;
      overflow: hidden;
    }
    .logo-box .glitch:before {
      left: 2.5px;
      text-shadow: -2.5px 0 #f50;
      animation: glitch-before 2s ease 0s infinite alternate;
    }
    .logo-box .glitch:after {
      left: -2.5px;
      text-shadow: -2.5px 0 #09b;
      animation: glitch-after 2s ease 0s infinite alternate;
    }

    @keyframes glitch-before {
      0% {
        clip: rect(0px, 125px, 120px, 50px);
      }
      5% {
        clip: rect(0px, 125px, 59px, 0px);
      }
      10% {
        clip: rect(30px, 210px, 90px, 30px);
      }
      15% {
        clip: rect(15px, 40px, 48px, 0px);
      }
      20% {
        clip: rect(15px, 5px, 50px, 10px);
      }
      25% {
        clip: rect(17px, 125px, 45px, 50px);
      }
      30% {
        clip: rect(0px, 125px, 32px, 0px);
      }
      35% {
        clip: rect(20px, 100px, 47px, 50px);
      }
      40% {
        clip: rect(30px, 80px, 28px, 10px);
      }
      45% {
        clip: rect(16px, 50px, 34px, 0px);
      }
      50% {
        clip: rect(0px, 125px, 37px, 100px);
      }
      55% {
        clip: rect(12px, 100px, 21px, 30px);
      }
      60% {
        clip: rect(41px, 125px, 55px, 10px);
      }
      65% {
        clip: rect(5px, 50px, 39px, 0px);
      }
      70% {
        clip: rect(5px, 120px, 24px, 40px);
      }
      75% {
        clip: rect(30px, 125px, 50px, 10px);
      }
      80% {
        clip: rect(37px, 80px, 50px, 0px);
      }
      85% {
        clip: rect(37px, 80px, 48px, 10px);
      }
      90% {
        clip: rect(30px, 50px, 92px, 0px);
      }
      95% {
        clip: rect(17px, 125px, 92px, 90px);
      }
      100% {
        clip: rect(0px, 125px, 45px, 0px);
      }
    }
    @keyframes glitch-after {
      0% {
        clip: rect(10px, 50px, 34px, 0px);
      }
      5% {
        clip: rect(4px, 70px, 22px, 0px);
      }
      10% {
        clip: rect(0px, 50px, 17px, 0px);
      }
      15% {
        clip: rect(7px, 125px, 34px, 10px);
      }
      20% {
        clip: rect(11px, 115px, 45px, 30px);
      }
      25% {
        clip: rect(3px, 125px, 18px, 70px);
      }
      30% {
        clip: rect(38px, 50px, 100px, 10px);
      }
      35% {
        clip: rect(20px, 70px, 120px, 5px);
      }
      40% {
        clip: rect(5px, 125px, 48px, 90px);
      }
      45% {
        clip: rect(15px, 40px, 44px, 0px);
      }
      50% {
        clip: rect(21px, 80px, 37px, 10px);
      }
      55% {
        clip: rect(14px, 125px, 40px, 40px);
      }
      60% {
        clip: rect(16px, 50px, 30px, 8px);
      }
      65% {
        clip: rect(50px, 125px, 120px, 50px);
      }
      70% {
        clip: rect(10px, 70px, 44px, 40px);
      }
      75% {
        clip: rect(70px, 100px, 49px, 30px);
      }
      80% {
        clip: rect(13px, 120px, 120px, 90px);
      }
      85% {
        clip: rect(35px, 80px, 90px, 30px);
      }
      90% {
        clip: rect(5px, 80px, 35px, 20px);
      }
      95% {
        clip: rect(30px, 125px, 120px, 10px);
      }
      100% {
        clip: rect(50px, 50px, 110px, 0px);
      }
    }
    @keyframes glitch-noise {
      0% { top: 30px; left: 25px; width: 10px; }
      5% { top: 90px; left: 110px; width: 20px; }
      10% { top: 40px; left: 50px; width: 5px; }
      15% { top: 90px; left: 20px; width: 20px; }
      20% { top: 50px; left: 110px; width: 5px; }
      25% { top: 90px; left: 30px; width: 20px; }
      30% { top: 90px; left: 110px; width: 10px; }
      35% { top: 40px; left: 50px; width: 5px; }
      40% { top: 90px; left: 40px; width: 20px; }
      45% { top: 50px; left: 110px; width: 5px; }
      50% { top: 30px; left: 50px; width: 10px; }
      55% { top: 70px; left: 30px; width: 20px; }
      60% { top: 90px; left: 110px; width: 5px; }
      65% { top: 40px; left: 110px; width: 20px; }
      70% { top: 50px; left: 50px;  width: 10px; }
      75% { top: 90px; left: 50px; width: 20px; }
      80% { top: 30px; left: 70px; width: 5px; }
      85% { top: 90px; left: 80px; width: 10px; }
      90% { top: 50px; left: 40px; width: 5px; }
      95% { top: 40px; left: 70px; width: 20px; }
      100% { top: 30px; left: 50px; width: 5px; }
    }
    `;

    shadow.innerHTML += `
      <div class="logo-box">
        <span class="over">Client-side</span>
        <span class="glitch">JS</span>
        <span class="noise"></span>
      </div>
    `
  }
}

customElements.define (
  "glitch-logo",
  GlitchLogo
)

/* harmony default export */ __webpack_exports__["default"] = (GlitchLogo);


/***/ }),

/***/ "./src/grid.css":
/*!**********************!*\
  !*** ./src/grid.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./grid.css */ "./node_modules/css-loader/dist/cjs.js!./src/grid.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/main-menu.js":
/*!**************************!*\
  !*** ./src/main-menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class MainMenuComponent extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow( { mode: "closed" } )
    this.view = document.getElementsByTagName ( "page-element" )[0]
    this.course = createPath( "lessons", "" )
    this.assets = createPath( "src", "" )
    this.menuOptions = []
    this.submenuOptions = []
    this.state = "close"
  }
  connectedCallback () {
    this.shadow.innerHTML += `

      <graphic-header></graphic-header>
      <svg-nav-panel></svg-nav-panel>
      <aside>
        <div id="menuToggle">

          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <div class="search-wrapper">
              <hr>
              <div class="search-icon"></div>
              <input id="search-input">
              <div id="search-result"></div>
            </div>

            <h3><a href="/" class="home">Lessons</a></h3>
            <hr>
          </ul>
        </div>
      </aside>
      `
      this.checkbox = this.shadow.querySelector ( '#menuToggle > input[type="checkbox"]' )
      this.menu = this.shadow.querySelector ( "#menu" )

      this.setStyles()
      this.checkbox.onclick = function ( event ) {
        this.state = this.state === "close" ? "expand" : "close"
        this.menu.style["transition-delay"] = this.state === "expand" ? "1s" : "0s"
        this.shadow.querySelector ( "svg-nav-panel" ).dispatchEvent ( new Event ( this.state ) )
      }.bind (this)

      this.shadow.querySelector ( ".home" ).onclick = function ( event ) {
          event.preventDefault()
          this.checkbox.checked = !this.checkbox.checked
          this.checkbox.dispatchEvent ( new Event ( "click" ) )
          window.history.pushState( { route: event.target.href }, "home", event.target.href )
          this.view.setAttribute ( "src", `${createPath( "lessons", "start-page.md" )}` )
      }.bind ( this )

      this.getData ().then (
        () => this.shadow.getElementById ( "search-input" )
            .oninput = this.search.bind ( this )
      )
  }
  search ( event ) {
      let result = this.shadow.getElementById ( "search-result" )
      result.innerHTML = ""
      if ( !event.target.value ) {
          for ( let item of this.menuOptions ) this.show ( item )
          for ( let item of this.submenuOptions ) this.show ( item )
          return
      }
      let strings = this.keywords.getAll ( event.target.value.toLowerCase() )
      if ( strings.length === 0 ) {
          result.innertext = "Not found..."
          for ( let item of this.menuOptions ) this.hide ( item )
          for ( let item of this.submenuOptions ) this.hide ( item )
          return
      }
      let items = strings.map ( item => JSON.parse( item ) )
      for ( let option of this.menuOptions ) {
          items.find ( item => option.firstElementChild.id === item.lesson ) ?
               this.show ( option ) : this.hide ( option )
      }
      for ( let option of this.submenuOptions ) {
          let content = option.querySelector ( "a" ).textContent
          items.find ( item => content === item.topic ) ?
              this.show ( option ) : this.hide ( option )
      }
  }
  addElem ( tagName, container ) {
      return container.appendChild ( document.createElement ( tagName ) )
  }
  setStyles () {
    fetch( `src/main-menu.css` )
      .then ( response => response.text() )
        .then(
          css => this.shadow.appendChild(
                  document.createElement("style")
          ).textContent = css
        )
  }
  hide ( elem ) {
      elem.dispatchEvent ( new Event ( "hide" ) )
  }
  show ( elem ) {
      elem.dispatchEvent ( new Event ( "show" ) )
  }
  hideCallback ( event ) {
      event.target.style.display = "none"
  }
  showCallback ( event ) {
      event.target.style.display = "block"
  }
  setListeners ( elem ) {
      elem.addEventListener ( "show", this.showCallback )
      elem.addEventListener ( "hide", this.hideCallback )
  }
  async getData () {
      this.menuData = await ( await fetch ( `src/main-menu.json` ) ).json()
      this.keywords = new FormData
      const topLevel = this.shadow.querySelector ( "#menu" )

      for ( let lesson of this.menuData ) {
          let lessonItem = this.addElem ( "li", topLevel )
          this.menuOptions.push ( lessonItem )
          this.setListeners ( lessonItem )
          lessonItem.innerHTML = this.getLessonTemplate ( lesson.id )
          lessonItem.subLevel = lessonItem.querySelector ( "ul.sub-level" )
          let index = 0
          for ( let item of lesson.items ) {
              let elem = this.addElem ( "li", lessonItem.subLevel )
              this.submenuOptions.push ( elem )
              this.setListeners ( elem )
              elem.style["animation-delay"] = index++ < 10 ? `0.${index}s` : `1.${index - 9}s`
              let anchor = this.addElem ( "a", elem )
              anchor.href = item.ref
              anchor.textContent = item.title
              anchor.fileName = item.ref

              anchor.onclick = function ( event ) {
                  event.preventDefault()
                  this.checkbox.checked = !this.checkbox.checked
                  this.checkbox.dispatchEvent ( new Event ( "click" ) )
                  window.history.pushState( { route: event.target.href }, event.target.innerText, event.target.href )
                  let shutter = this.addElem ( "shutter-element", document.body )
                  shutter.style = `position: absolute; top: 0; left: 0;`
                  setTimeout ( () => shutter.remove(), 1000 )
                  this.view.setAttribute ( "src",  `${createPath( "lessons", event.target.fileName + ".md" )}` )
              }.bind ( this )

              for ( let keyword of item.keywords )
                  this.keywords.append (
                      keyword,
                      JSON.stringify ({
                          lesson: lesson.id,
                          topic: item.title,
                          url: item.ref
                      })
                  )
          }
      }
  }
  getLessonTemplate ( lessonId ) {
      return `<input type="radio" id="${lessonId}" name="lessons">
        <label for="${lessonId}">
          <div class = "icon"></div>
          <b>${lessonId}</b>
        </label>
        <ul class="sub-level"></ul>`
  }
}

customElements.define(
  "main-menu-component",
  MainMenuComponent
)

/* harmony default export */ __webpack_exports__["default"] = (MainMenuComponent);


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/menu-component.js":
/*!*******************************!*\
  !*** ./src/menu-component.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class MenuComponent extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow ({ mode: "open" })
      this.shadow.innerHTML = `
      <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy|Poppins|Roboto|Montserrat|&amp;display=swap" rel="stylesheet">
      <link rel="stylesheet" href="src/menu.css">
      <nav id="navigation">
        <ul id="main-nav" class="dropdown"></ul>
      </nav>
      `
    }

    connectedCallback () {
        this.menuContent = this.shadow.getElementById("main-nav")
    }

    static get observedAttributes() {
        return [ 'options']
    }

    attributeChangedCallback( attrName, oldVal, newVal ) {
        let container = this.shadow.querySelector ( ".dropdown" )
        container.innerHTML = ""
        if ( !newVal ) return
        this.options = JSON.parse ( this.getAttribute ( "options" ) )
        this.setAttribute ( "options", "" )
        this.options.forEach (
          ( option, index ) => {
            let li = container.appendChild (
              document.createElement ( "li" )
            )
            li.style["animation-delay"] = index < 10 ? `0.${index}s` : `1.${index-9}s`
            li.className = `option${option.level}`
            let ref = li.appendChild ( document.createElement ( "a" ) )
            ref.innerHTML = option.text
            ref.href = `#${encodeURI ( option.text )}`

          }
        )
    }
}

// MenuComponent.prototype.styleContent = `
//
// `
MenuComponent.prototype.template = `
<nav id="nav" class="main-nav">

  <li>

	    <ul class="dropdown"></ul>

  </li>
</nav>
`

customElements.define(
  "menu-component",
  MenuComponent
)

/* harmony default export */ __webpack_exports__["default"] = (MenuComponent);


/***/ }),

/***/ "./src/noise.css":
/*!***********************!*\
  !*** ./src/noise.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./noise.css */ "./node_modules/css-loader/dist/cjs.js!./src/noise.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/page-component.js":
/*!*******************************!*\
  !*** ./src/page-component.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class PageComponent extends HTMLElement {
  constructor() {
    super();
    this.fragments = {};
    this.pageContent = "";
    this.pageContentList = [];
    this.main = this.appendChild(document.createElement("main"));
    let footer = this.appendChild(document.createElement("footer"));
    footer.innerHTML += `
    <br><br><br><br><br><br>
    <figure class="overshadow">
      <div class="overshadow__shadow">
        <div class="overshadow__text">&nbsp;</div>
      </div>
    </figure>`;
    this.menu = document.getElementsByTagName("menu-component")[0];
  }

  connectedCallback() {
    
    let path = location.host === "garevna.github.io" ? "/js-lessons/" : "/"
    let pathNew = location.pathname.split( location.host === "garevna.github.io" ? "/js-lessons/" : "/" ).join ("");
    console.log ( pathNew );
    let startPath = `${createPath("lessons", location.pathname === path ? "start-page" : location.pathname.slice(1))}`;
    // let startPath = `${createPath("lessons", location.pathname === "/" ? "start-page" : location.pathname.slice(1))}`;
    console.log ( startPath )
    this.setAttribute("src", `${startPath}.md`);
    this.styleSheet = this.appendChild(document.createElement("style"));
    Promise.all([
      fetch(createPath("src", "for-rainbow.css")).then(response => response.text()),
      fetch(createPath("src", "page.css")).then(response => response.text()),
      fetch(createPath("src", "icons.css"))
        .then(response => response.text())])
          .then(response => this.styleSheet.textContent += response.join(String.fromCharCode(10)));
  }

  static get observedAttributes() {
    return ['src'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.fragments = {};
    this.pageContent = "";
    this.pageContentList = [];
    this.main.innerHTML = "";
    this.menu.setAttribute("options", "");
    this.getData(newVal);
  }

  getData(file) {
    fetch(file).then(response => response.text().then(response => this.parsePageContent(response)));
  }

  parseTextFragment(textFragment) {
    let lines = textFragment.length ? textFragment.split("\n") : [];
    lines.forEach(line => line.length ? this.main.appendChild(this.parseLine(line)) : null);
  }

  parsePageContent(pageContent) {
    this.main.innerHTML = "";
    this.pageContent = pageContent;
    this.parseTables();
    this.regExprs.pageContent = this.pageContent;
    this.fragments = {};

    for (let fragment of this.regExprs) {
      Object.assign(this.fragments, fragment);
    }

    this.pageContent = this.fragments.pageContent;
    delete this.fragments.pageContent;
    let insertionPoints = this.pageContent.match(/!!!.[^!!!]+!!!/g);
    !insertionPoints ? null : insertionPoints.forEach(insertionPoint => {
      let tmp = this.pageContent.split(insertionPoint);
      insertionPoint = insertionPoint.slice(3, -3);

      while (tmp.length > 1) {
        let fragment = tmp.shift();
        this.parseTextFragment(fragment);
        this[`create${this.fragments[insertionPoint].type}`](this.fragments[insertionPoint].content);
      }

      this.pageContent = tmp.join("");
    });
    this.pageContent.length ? this.parseTextFragment(this.pageContent) : null;
    this.menu.setAttribute("options", JSON.stringify(this.pageContentList));
    this.pageContent = this.createTables(this.pageContent);
    document.querySelector("page-element").querySelectorAll("div", "pre").forEach(elem => elem.innerHTML.trim() ? this.insertTable(elem) : elem.remove());
  } // Block level


  insertTable(elem) {
    let cont = elem.innerHTML.match(/\[{3}\d\]{3}/);
    if (!cont) return;
    elem.innerHTML = "";
    elem.appendChild(this.createTable(cont[0].slice(3, -3)));
  }

  parseTables() {
    let total = this.pageContent.split("\n");
    this.tables = [];
    let table, string, x;

    const startTable = function (string) {
      this.pageContent = this.pageContent.split(string).join(`[[[${this.tables.length}]]]`);
      this.tables.push([]);
      return this.tables[this.tables.length - 1];
    }.bind(this);

    const fillTable = function () {
      string = total.shift();
      x = string.match(/(^\|)(.)*\|/gm);
      x ? table = startTable(string) : null;

      while (x) {
        table.push(x[0].slice(1,-1));
        this.pageContent = this.pageContent.split(string).join("");
        string = total.shift();
        x = string.match(/(^\|)(.)*\|/);
      }

      total.length ? fillTable(total) : null;
    }.bind(this);

    fillTable();
  }

  createTables(content) {
    let tables = this.pageContent.match(/\[{3}\d\]{3}/gm);
    if (!tables) return;
    tables.forEach(item => this.pageContent.split(item).join(this.createTable(parseInt(item.slice(3, -3))).innerHTML)); // return content
  }

  createTable(num) {
    let table = document.createElement("table");

    for (let row of this.tables[num]) {
      let tr = table.appendChild(document.createElement("tr"));
      row.split("|").forEach(cell => tr.appendChild(document.createElement("td")).innerHTML = this.parseLine(cell.trim()).outerHTML);
    }

    return table;
  }

  createSlider(fragment) {
    let sliderStart = this.main.appendChild(document.createElement("button"));
    sliderStart.className = "slider-button";

    sliderStart.onclick = function (event) {
      const elem = this.main.appendChild(document.createElement('picture-slider'));
      elem.setAttribute("pictures", JSON.stringify(fragment.slice(3, -1).split(",")));
    }.bind(this);
  }

  createCodeComponent(fragment) {
    let lang = fragment.slice(4, fragment.search(String.fromCharCode(10)));
    let snippet = this.main.appendChild(document.createElement("code-snippet"));
    snippet.textContent = fragment.slice(4 + lang.length, fragment.length - 4);
    snippet.setAttribute("header", lang);
    snippet.setAttribute("lang", lang);
    this.main.appendChild(snippet);
  }

  createScriptSpoiler(fragment) {
    let lang = fragment.slice(4, fragment.search(String.fromCharCode(10)));
    let scriptSpoiler = this.main.appendChild(document.createElement("script-spoiler"));
    let scriptSpoilerContent = this.main.appendChild(lang.trim() === "console" ? this.createConsoleOutput(fragment.slice(1, -1)) : this.createCodeSnippet(fragment.slice(4 + lang.length, fragment.length - 4), lang));
    scriptSpoiler.setAttribute("header", lang);
    scriptSpoiler.content = scriptSpoilerContent;
    scriptSpoiler.setAttribute("content", "ready");
  }

  createScriptSnippet(fragment) {
    let lang = fragment.slice(3, fragment.search(String.fromCharCode(10)));
    return this.main.appendChild(lang.trim() === "console" ? this.createConsoleOutput(fragment) : this.createCodeSnippet(fragment.slice(3 + lang.length, fragment.length - 3), lang));
  }

  createConsoleOutput(fragment) {
    let snippet = document.createElement("pre");
    snippet.textContent = fragment.slice(10, fragment.length - 3);
    snippet.className = "black";
    return snippet;
  }

  createCodeSnippet(fragment, lang) {
    var div = document.createElement('div');
    div.innerHTML = `<pre><code data-language=${lang}>${fragment.trim()}</code></pre>`;
    Rainbow.color(div);
    Array.from(document.getElementsByClassName("preloader")).forEach(elem => elem.remove());
    return div;
  }

  createCodeOutput(fragment) {
    let outputScreen = this.main.appendChild(document.createElement("code-output"));
    outputScreen.setAttribute("script", fragment.slice(3, -3));
  }

  createSpoiler(fragment) {
    let spoiler = document.createElement("spoiler-component");
    this.main.appendChild(spoiler);
    let head = fragment.match(/(\^{3})\[(.+)\]/)[0];
    spoiler.setAttribute("header", head.slice(4, -1));
    spoiler.content = [];

    const getSnippet = function (string) {
      return string.indexOf("!!!") < 0 ? null : this.fragments[string.slice(3, -3)];
    }.bind(this);

    const getCodeSnippet = function (snippet) {
      if (snippet.type !== "ScriptSnippet") return null;
      let lang = snippet.content.slice(3, snippet.content.search(String.fromCharCode(10)));
      let scriptSnippetContent = this.main.appendChild(lang.trim() === "console" ? this.createConsoleOutput(snippet.content.slice(1, -1)) : this.createCodeSnippet(snippet.content.slice(3 + lang.length, snippet.content.length - 3), lang));
      spoiler.content.push(scriptSnippetContent);
      return true;
    }.bind(this);

    const getTable = function (string) {
      if (!string.match(/\[{3}\d\]{3}/)) return null;
      spoiler.content.push(this.createTable(parseInt(string.trim().slice(3, -3))));
      return true;
    }.bind(this);

    fragment.split(head).join("").slice(0, -3).split('\n').forEach(line => getSnippet(line) ? getCodeSnippet(getSnippet(line)) : getTable(line) ? null : spoiler.content.push(this.parseLine(line)));
    spoiler.setAttribute("ready", "1");
  } // =============================== Line level ===============================


  parseImage(line) {
    let string = line.match(/!\[\]\(.+\)/);
    let url = string ? line.match(/!\[\]\(.+\)/)[0].slice(4, -1) : null;
    if (!url) return null;
    let elem = document.createElement("img");
    elem.src = url.indexOf("http") === 0 ? url : eval(url);
    return elem;
  }

  parseHeader(line) {
    let headerLevel = line.match(/^[#]{1,6}/);
    if (!headerLevel) return {
      level: 0,
      text: line
    };
    let text = line.slice(headerLevel[0].length);
    let icons = text.match(/!\[.[^\]]+\]/g);
    icons ? icons.forEach(icon => text = text.split(icon).join("")) : null;
    let refs = text.match(/\[.[^(]+\]\(.[^\)]+\)/g);
    refs ? refs.forEach(ref => {
      let content = ref.split("](")[0].slice(1);
      text = text.split(ref).join(content);
    }) : null;
    this.main.appendChild(document.createElement("a")).name = encodeURI(text.trim());
    this.pageContentList.push({
      level: headerLevel[0].length,
      text: text.trim()
    });
    return {
      level: headerLevel[0].length,
      text: line = line.split(headerLevel[0]).join("")
    };
  }

  parseLine(line) {
    if (line.match(/[-_]{3,5000}/)) return document.createElement("hr");
    let img = this.parseImage(line);
    if (img) return img;
    let {
      level,
      text
    } = this.parseHeader(line);
    let elem = document.createElement(level > 0 ? `h${level}` : "div");
    elem.innerHTML = this.parseAnchors(text);
    return elem;
  }

  parseIcons(line) {
    let icons = line.match(/!\[.[^\]]+\]/g);
    icons ? icons.forEach(icon => {
      let ico = document.createElement("span");
      icon.slice(2, -1).split(" ").forEach(item => ico.classList.add(item));
      line = line.split(icon).join(ico.outerHTML);
    }) : null;
    return line;
  }

  parseAnchors(line) {
    let newLine = "";
    let anchors = line.match(/\[.[^(]+\]\(.[^\)]+\)/g);
    anchors ? anchors.forEach(anchor => {
      let parts = line.split(anchor);
      newLine += this.parseIcons(this.formatText(parts[0]));
      let tmp = anchor.split("](");
      let ref = document.createElement("a");
      ref.href = tmp[1].slice(0, -1);
      ref.setAttribute("target", "_blank");
      ref.innerHTML = this.parseIcons(this.formatText(tmp[0].slice(1)));
      newLine += ref.outerHTML + parts[1];
    }) : newLine = this.parseIcons(this.formatText(line));
    return newLine;
  }

  formatText(line) {
    let result = "";
    let regexpr;
    this.symbols.forEach(current => {
      regexpr = new RegExp(current.reg + ".[^" + current.reg + "]+" + current.reg, "g");
      let matches = line.match(regexpr);
      matches ? matches.forEach(item => line = line.split(item).join(item.replace(current.symb, current.tag[0]).replace(current.symb, current.tag[1]))) : null;
    });
    return line;
  }

  createGrid(fragment) {
    let grid = this.main.appendChild(document.createElement("div"));
    grid.className = "grid";
    let content = fragment.slice(4, -4).split("\n");
    content.forEach(line => grid.appendChild(this.parseLine(line)));
  }

}

PageComponent.prototype.regExprs = {
  CodeOutput: /\{{3}.[^}]*\}{3}/,
  ScriptSpoiler: /~~~~.[^~~~~]+~~~~/,
  ScriptSnippet: /~~~.[^~~~]+~~~/,
  Spoiler: /(\^{3})([\s\S]+?)\1/m,
  Slider: /!!\[.[^\]]+\]/,
  Grid: /\@\@\@\@\s+\S+[^\@\@\@\@]*]*\@\@\@\@/m
};

PageComponent.prototype.regExprs[Symbol.iterator] = function* () {
  let keys = Object.keys(this);
  let fragments, start, end, key;

  while (keys.length) {
    fragments = true;
    key = keys.shift();
    if (key === "pageContent") continue;

    while (fragments) {
      fragments = this.pageContent.match(this[key]);
      if (!fragments) break;
      start = fragments.index;
      end = start + fragments[0].length + 1;
      this.pageContent = this.pageContent.replace(fragments[0], `\n!!!${start}!!!\n`);
      yield {
        [start]: {
          type: key,
          content: fragments[0]
        }
      };
    }
  }

  yield {
    pageContent: this.pageContent
  };
};

PageComponent.prototype.symbols = [{
  symb: "••",
  reg: "••",
  tag: ["<figure class='black'>", "</figure>"]
}, {
  symb: "◘◘",
  reg: "◘◘",
  tag: ["<figure class='bordered'>", "</figure>"]
}, {
  symb: "**",
  reg: "\\*\\*",
  tag: ["<b>", "</b>"]
}, {
  symb: "_",
  reg: "_",
  tag: ["<em>", "</em>"]
}, {
  symb: "~",
  reg: "~",
  tag: ["<code style='background-color:#eef'>", "</code>"]
}, {
  symb: "^^",
  reg: "\\^\\^",
  tag: ["<small>", "</small>"]
}, {
  symb: ":::",
  reg: ":::",
  tag: ["<button class='cap'>", "</button>"]
}, {
  symb: "%%%",
  reg: "\%\%\%",
  tag: ["<button class='link'>", "</button>"]
}];

customElements.define("page-element", PageComponent);
/* harmony default export */ __webpack_exports__["default"] = (PageComponent);


/***/ }),

/***/ "./src/picture-slider.js":
/*!*******************************!*\
  !*** ./src/picture-slider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class PictureSlider extends HTMLElement {
    constructor () {
        super()
        this.pictures = []
        this.currentIndex = 0
        this.currentSlide = 0
        let shadow = this.attachShadow ( { mode: 'open' } )
        this.container = shadow.appendChild (
          this.createElem ( 'figure' )
        )
        let style = document.createElement ( 'style' )
        style.textContent = `
            figure {
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                overflow: hidden;
                margin: 0;
                z-index:500;
                background: #00000090;
                background-image: url(src/images/phone-static-3.jpg);
                background-size: cover;
                background-position: center;

            }
            button {
              position: absolute;
              top: 50%;
              font-size: 50px;
              font-weight: bold;
              z-index: 100;
              background: transparent;
              border: 0;
              color: white;
              text-shadow: 3px 3px 5px #00000090;
              outline: none;
              font-family: Poppins, 'Luckiest Guy', Roboto, Arial;
              transition: all 0.5s;
            }
            button:hover {
              transform: rotate(360deg);
              text-shadow: 2px 2px 4px #000000b0;
              cursor: pointer;
            }
            #left { left: 4%; }
            #left:before { content: "<"; }
            #right { right: 4%; }
            #right:before { content: ">"; }
            #close { top: 10px; right: 4px; }
            #close:before {
              content: "";
              padding: 25px;
              vertical-align: middle;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/no_entry_sign.png);
            }
            div {
              position: absolute;
              top: 5%;
              bottom: 5%;
              left: 5%;
              width: 80%;
              box-sizing: border-box;
              margin:0;
              background-color: #000c0d90;
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center center;
              transition: all 0.8s;
              box-shadow: inset 10px 10px 20px #00000090;
            }
            @media screen and (max-width:500px) {
              button { font-size: 20px; }
            }
            @media screen and (max-width:360px) {
              button { font-size: 16px; }
            }
        `
        shadow.appendChild ( style )
        this.btnClose = this.createElem ( 'button', this.container )
        this.btnClose.onclick = () => this.remove()

        this.btnClose.id = 'close'
        this.btnLeft = this.createElem ( 'button', this.container )
        this.btnLeft.id = 'left'
        this.btnLeft.onclick = () => this.changePicture ( "left" )

        this.btnRight = this.createElem ( 'button', this.container )
        this.btnRight.id = 'right'
        this.btnRight.onclick = () => this.changePicture ( "right" )

    }
    createElem ( tagName, container ) {
        return  ( !container ? document.body : container )
                .appendChild (
                  document.createElement ( tagName )
                )
    }

    static get observedAttributes() {
        return [ 'pictures']
    }

    attributeChangedCallback( attrName, oldVal, newVal ) {
        this.pictures = JSON.parse ( this.getAttribute ( "pictures" ) )
        this.slides = []
        this.slides [ 0 ] = new Slide (
                        this.pictures [ 0 ],
                        this.container
        )
        this.slides [ 0 ].mcFromTo ( 100, 10 )
        this.slides [ 1 ] = new Slide (
                        this.pictures [ 1 ],
                        this.container
        )
        this.slides [ 1 ].init ( 100 )
    }

    changePicture ( direction ) {
        let to = direction === 'left' ? 100 : -100
        let nextSlide = this.currentSlide === 0 ? 1 : 0
        let nextIndex = this.getNextIndex ( direction )
        this.slides [ nextSlide ].setPicture ( this.pictures [ nextIndex ] )
        this.slides [ nextSlide ].init ( -to )
        this.slides [ this.currentSlide ].mcFromTo ( 10, to, 0 )
        this.slides [ nextSlide ].mcFromTo ( -to, 10, 1 )
        setTimeout ( function () {
            this.currentSlide = nextSlide
            this.currentIndex = nextIndex
        }.bind(this), 1000 )
    }

    getNextIndex ( dir ) {
      return dir === 'left' ?
            ( this.currentIndex === 0 ?
                this.pictures.length - 1 : this.currentIndex - 1 ) :
            ( this.currentIndex === this.pictures.length - 1 ?
                0 : this.currentIndex + 1 )
    }

}
customElements.define ( 'picture-slider', PictureSlider )

const Slide = function ( imageURL, container ) {
    this.imageURL = imageURL
    let elem = container.appendChild (
      document.createElement ( 'div' )
    )
    elem.style = `background-image: url(${imageURL});`
    this.init = x => {
        elem.style.left = x + '%'
    }
    this.setPicture = pictureURL =>
        elem.style.backgroundImage = `url(${pictureURL})`

    this.mcFromTo = function ( from, to, finalOpacity ) {
        elem.style.transition = 'none'
        elem.style.left = from + '%'
        elem.style.opacity = 1 - finalOpacity
        setTimeout ( function () {
            elem.style.transition = 'all 0.8s'
            elem.style.left = to + '%'
            elem.style.opacity = finalOpacity
        }, 50 )
    }
}

/* harmony default export */ __webpack_exports__["default"] = (PictureSlider);


/***/ }),

/***/ "./src/popup-window.js":
/*!*****************************!*\
  !*** ./src/popup-window.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class PopupWindow extends HTMLElement {
    constructor() {
        super()
        this.shadow =this.attachShadow ( { mode: "closed" } )
        this.shadow.innerHTML = `
          <div class="box">
              <div class="content">
                <slot name="left"></slot>
                <slot name="right"></slot>
              </div>
          </div>
        `
        this.box = this.shadow.querySelector ( ".box" )
        this.content = this.shadow.querySelector ( ".content" )
    }
    connectedCallback () {

        this.shadow.appendChild (
            document.createElement ( "style" )
        ).textContent = `
        @charset "UTF-8";
        * {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
        .box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            transform-style: preserve-3d;
            transition: 0.5s ease;
            perspective: 300px;
            box-sizing: border-box;
            padding: 20px 0 20px 20px;
            font-family: "Montserrat", "Roboto", Arial;
            line-height: 1.5rem;
        }
        .box > .content {
            position: relative;
        	  background: #000;
            background-image: linear-gradient(to right, #000 70%, transparent 100%),
                              var(--stars), var(--icon);
            background-position: left, right, right bottom;
            background-repeat:no-repeat, repeat, no-repeat;
            background-size: cover, contain, 100px;
            top: 20px;
            bottom: 10px;
            box-sizing: border-box;
            left: -30px;
            width: 50vw;
            height: fit-content;
            padding: 20px 40px 20px 20px;
            transition: 0.5s ease;
            border: solid 5px #fff;
            box-shadow: 5px 5px 10px #00000070;
            text-align: justify;
            text-indent: 24px;
            font-size: 0.8rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items:flex-end;
        }

        .box:before, .box:after {
            content: "";
            position: absolute;
            width: calc(100% - 80px);
            height: 100%;
        }
        .box:before {
            border-top: 10px solid #f50;
            border-left: 10px solid #f50;
            box-shadow: inset 3px 3px 6px #00000070;
        }
        .box:after {
            top: 30px;
            border-bottom: 10px solid #f50;
            border-right: 10px solid #f50;
            box-shadow: 8px 8px 12px #00000070;
        }

        .box:hover {
            transform: translate(-50%, -50%) rotateY(-4deg) skew(-10deg);
        }
        .box:hover > .content {
            transform: rotateY(8deg) skew(20deg);
        }

        @media screen and (max-width: 800px ) {
            .box > .content { width: 60vw; }
        }

        @media screen and (max-width: 600px ) {
            .box > .content { width: 70vw; }
        }

        @media screen and (max-width: 480px ) {
            .box > .content { width: 80vw; }
            .box { transform: translate(-45%, -50%); }
        }

        @media screen and (max-width: 360px ) {
            .box > .content { width: 90vw; }
            .box { transform: translate(-40%, -50%); }
        }

        small {
          color: #0df;
        }
        .content p {
          width: max-content;
        }`;

        this.onclick = event => event.target.remove()
    }

    static get observedAttributes () {
        return [ "content" ]
    }
    attributeChangedCallback ( attrName, oldVal, newVal ) {
        newVal ? this.content.innerHTML = newVal : null
    }
}

customElements.define ( "popup-win", PopupWindow )

/* harmony default export */ __webpack_exports__["default"] = (PopupWindow);


/***/ }),

/***/ "./src/project.css":
/*!*************************!*\
  !*** ./src/project.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./project.css */ "./node_modules/css-loader/dist/cjs.js!./src/project.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/script-spoiler.js":
/*!*******************************!*\
  !*** ./src/script-spoiler.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spoiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spoiler */ "./src/spoiler.js");




class ScriptSpoiler extends _spoiler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
      super()
      let rainbowStyles = this.shadow.appendChild (
        document.createElement("style")
      )
      fetch ( `${createPath( "src", "for-rainbow.css" )}` )
          .then ( response => response.text() )
          .then ( css => rainbowStyles.textContent = css )
    }
    connectedCallback () {
      this.header = this.shadow.querySelector ( "#header" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )
    }
    static get observedAttributes() {
        return [ 'header', 'content' ]
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {
        attrName === "content" ?
            this.wrapper.appendChild ( this.content ) :
            attrName === 'header' || !newVal ?
                this.header.innerText = this.getAttribute ( "header" ) :
                null
    }
}

customElements.define( 'script-spoiler', ScriptSpoiler )

/* harmony default export */ __webpack_exports__["default"] = (ScriptSpoiler);


/***/ }),

/***/ "./src/spoiler-component.js":
/*!**********************************!*\
  !*** ./src/spoiler-component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spoiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spoiler */ "./src/spoiler.js");




class SpoilerComponent extends _spoiler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        super()
        let styles = this.shadow.appendChild (
        document.createElement("style")
      )
      Promise.all ([
          fetch ( "src/icons.css" )
            .then ( response => response.text() ),
          fetch ( "src/for-rainbow.css" )
            .then ( response => response.text() ),
      ])
      .then ( css => styles.textContent = css.join("\n\n") )
    }
    connectedCallback () {
      this.header = this.shadow.querySelector ( "#header" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )
      this.shadow.querySelector ( ".lbl-toggle" )
        .style.backgroundImage = `url(${createPath( "icons","slider-2.gif" )})`
    }
    static get observedAttributes() {
        return [ 'header', 'ready' ]
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {
        if ( !attrName ) return
        attrName === "header" ? this.header.innerHTML = newVal :
          attrName === "ready" ? (
            () => {
              this.content.forEach (
                item => this.wrapper.appendChild ( item )
              )
            })() : null
    }
}


customElements.define ( 'spoiler-component', SpoilerComponent )

/* harmony default export */ __webpack_exports__["default"] = (SpoilerComponent);


/***/ }),

/***/ "./src/spoiler.js":
/*!************************!*\
  !*** ./src/spoiler.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpoilerClass; });


class SpoilerClass extends HTMLElement {
    constructor() {
      super()
      this.shadow = this.attachShadow ( { mode: "open" } )
      this.shadow.appendChild (
        document.createElement ( "style" )
      ).textContent = `
        * { box-sizing: border-box; }
        a {
          text-decoration: none;
          color: #079;
        }
        a:hover {
          color: #f50;
        }
        img {
            max-width:98%;
            margin: 20px 1%;
            padding: 10px;
            border: inset 1px white;
            box-shadow: 2px 2px 4px #00000080;
            box-sizing: border-box;
        }
        div {
            text-align: justify;
            margin: 16px 0;
        }

        table {
            margin: 30px 0;
            border-collapse: collapse;
        }
        td {
            border: solid 1px #eef;
            padding: 5px 10px;
            text-align: center;
        }

        input[type='checkbox'] {
            display: none;
        }
        .lbl-toggle {
            margin-top: 40px;
            display: block;
            font-weight: bold;
            font-family: Roboto, Arial, monospace;
            font-size: 1.0rem;
            text-align: right;
            padding: 0.5rem 0.8rem;
            color: #079;
            box-shadow: 1px 1px 2px #00000070;
            cursor: pointer;
            transition: all 0.25s ease-out;
            user-select: none;
            background-image: url(${createPath( "externalIcons", "coffee.png" )});
            background-repeat: no-repeat;
            background-size: 40px;
            background-position: left center;
            border-left: solid 10px transparent;
        }
        .lbl-toggle:hover {
            text-shadow: 1px 1px 1.5px #00005050;
        }
        .lbl-toggle::before {
            content: ' ';
            display: inline-block;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #ff7000;
            vertical-align: middle;
            margin-right: .7rem;
            transform: translateY(-2px);
            transition: transform .2s ease-out;
            user-select: none;
        }
        .lbl-toggle::after {

            width: 20px;
            height: 20px;
            display: inline-block;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
        }
        .collapsible-content .content-inner {
            background-color: white;
            color: #444;
            box-shadow: inset 2px -2px 3px #00000090;
            padding: .5rem 1.2rem;
            font-size: 0.8rem;
            overflow: auto;
        }
        .collapsible-content {
            max-height: 0px;
            overflow: auto;
            transition: all .4s ease-in-out;
            margin-bottom: 40px;
            border: solid 0px transparent;
            box-shadow: 0px 0px 0px transparent;
        }
        .toggle:checked + .lbl-toggle + .collapsible-content {
            max-height: 70vh;
            border: solid 20px transparent;
            padding-right:10px;
            box-shadow: 2px 2px 4px #00000080;
        }
        .toggle:checked + .lbl-toggle::before {
            transform: rotate(90deg) translateX(-3px);
        }
        .toggle:checked + .lbl-toggle {
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        table {
          margin: 30px 0;
          border-collapse: collapse;
        }
        td {
          border: solid 1px #eef;
          padding: 2px 8px;
        }
        td > div {
          margin: 0;
          padding: 0;
          font-size: 0.8rem;
        }

        hr {
          margin: 30px 0;
          border: 0;
        }
        hr:before {
          content: "▗";
          color: #f50;

        }
        hr:after {
          content: "▘";
          color: #09b;
        }

        ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }

        .black {
            background-color: #000;
            color: #dde;
            padding: 10px 15px;
            font-family: monospace, Roboto, Arial;
            font-size: 13px;
        }

        @media screen and (max-width: 400px), screen and (max-height: 400px) {
          h1 { font-size: 1.2rem; }
          h2 { font-size: 1.0rem; }
          h3 { font-size: 0.9rem; }
          div { font-size: 0.8rem; }
        }

        ::-webkit-scrollbar-track {
            background: #079;
            box-shadow: inset 0 0 1px #00000070;
            border-radius: 1px;
        }

        ::-webkit-scrollbar-thumb {
            background: #f50;
            border-radius: 1px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #fa0;
        }
      `
      this.shadow.innerHTML += `
      <section id="component">
          <div class="wrap-collabsible">
              <input id="collapsible" class="toggle" type="checkbox">
              <label for="collapsible" class="lbl-toggle">
                <span id="header"></span>
              </label>
              <div class="collapsible-content"></div>
          </div>
      </section>
      `
    }
    connectedCallback () {
      this.header = this.shadow.querySelector ( "#header" )
      this.script = this.shadow.querySelector ( "#scriptContent" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )
    }
}

// customElements.define( 'spoiler-element', SpoilerComponent )

// export default SpoilerClass


/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _for_rainbow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for-rainbow.css */ "./src/for-rainbow.css");
/* harmony import */ var _for_rainbow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_for_rainbow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _picture_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture-slider */ "./src/picture-slider.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-component */ "./src/menu-component.js");
/* harmony import */ var _spoiler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spoiler */ "./src/spoiler.js");
/* harmony import */ var _spoiler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spoiler-component */ "./src/spoiler-component.js");
/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-menu */ "./src/main-menu.js");
/* harmony import */ var _script_spoiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./script-spoiler */ "./src/script-spoiler.js");
/* harmony import */ var _glitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glitch */ "./src/glitch.js");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-component */ "./src/page-component.js");
/* harmony import */ var _codeOutputComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./codeOutputComponent */ "./src/codeOutputComponent.js");
/* harmony import */ var _Shutter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Shutter */ "./src/Shutter.js");
/* harmony import */ var _GraphicHeaderComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GraphicHeaderComponent */ "./src/GraphicHeaderComponent.js");
/* harmony import */ var _project_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project.css */ "./src/project.css");
/* harmony import */ var _project_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_project_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grid.css */ "./src/grid.css");
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_grid_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _svg_navigation_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svg-navigation-panel */ "./src/svg-navigation-panel.js");
/* harmony import */ var _svg_navigation_panel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_svg_navigation_panel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _noise_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./noise.css */ "./src/noise.css");
/* harmony import */ var _noise_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_noise_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _popup_window__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./popup-window */ "./src/popup-window.js");

// import Rainbow from './rainbow.js'


























/***/ }),

/***/ "./src/svg-navigation-panel.js":
/*!*************************************!*\
  !*** ./src/svg-navigation-panel.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class SvgNavigationPanel extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow ( { mode: "closed" } )
        this.shadow.innerHTML = `<svg></svg>`
        this.status = "norm"
        this.maxWidth = 320
        this.minWidth = 50
        this.step = 5
        this.d = 50
        this.svg = document.querySelector ( "svg" )

        this.rand1 = this.randomStep
        this.rand2 = this.rand1 + this.randomStep,
        this.offset = this.randomWidth
        this.addEventListener ( "expand", function ( event ) {
            this.path.dispatchEvent ( new Event ( event.type ) )
        })
        this.addEventListener ( "close", function ( event ) {
            this.path.dispatchEvent ( new Event ( event.type ) )
        })
    }
    get w () {
        return window.innerWidth
    }
    get h () {
        return window.innerHeight
    }
    get path () {
        return this.shadow.querySelector ( "svg > path" )
    }
    get randomStep () {
        return Math.round ( Math.random() * this.h * 0.3 )
    }
    get randomWidth () {
        return Math.round ( Math.random() * this.maxWidth * 0.4 )
    }

    setListeners () {
      this.path.addEventListener ( "expand", this.movie.bind ( this ) )
      this.path.addEventListener ( "close", this.reverse.bind ( this ) )
    }

    setStatic ( expand ) {
        this.svg.style.width = expand ? "100vw" : "0"
        this.status = expand ? "wide" : "norm"
        let width = expand ? this.maxWidth : this.minWidth
        this.svg.innerHTML = `<path d="M${this.w} 0 L${this.w-width} 0 L${this.w-width} ${this.h} L${this.w} ${this.h} Z" />`
        this.setListeners()
        this.rand1 = this.randomStep
        this.rand2 = this.rand1 + this.randomStep
        this.offset = this.randomWidth
    }

    movie () {
        this.svg.style.width = "100vw"
        this.d += this.step + 1
        this.rand1 += 4
        this.rand2 += 5
        this.svg.innerHTML = `<path d="M${this.w} 0 L${this.w-this.minWidth-this.offset} 0 C${this.w-this.d+this.offset} ${this.rand1} ${this.w-this.d-this.offset} ${this.rand2} ${this.w-this.minWidth-this.offset*2} ${this.h} L${this.w} ${this.h} Z" />`;
        this.d < this.maxWidth ? requestAnimationFrame ( this.movie.bind ( this ) ) : this.setStatic( true )
    }

    reverse () {
        this.d -= this.step + 1
        this.rand1 += 4
        this.rand2 += 5
        this.svg.innerHTML = `<path d="M${this.w} 0 L${this.w-this.minWidth-this.d} 0 C${this.w-this.d+this.offset} ${this.rand1} ${this.w-this.d} ${this.rand2} ${this.w-this.minWidth-this.d} ${this.h} L${this.w} ${this.h} Z" />`;
        this.d > 0 ? requestAnimationFrame ( this.reverse.bind ( this ) ) : this.setStatic( false )
    }

    connectedCallback () {
        this.svg = this.shadow.querySelector ( "svg" )
        this.shadow.appendChild ( document.createElement ("style"))
            .textContent = `
                svg {
                  position: fixed;
                  right: 0;
                  top: 0;
                  height: 100vh;
                  width: 0;
                  box-sizing:border-box;
                }
            `;
        this.svg.innerHTML = `<path d="M${this.w} 0 L${this.w-this.minWidth} 0 L${this.w-this.minWidth} ${this.h} L${this.w} ${this.h} Z" />`;
        this.setListeners()

        window.addEventListener ( "resize", function () {
            this.setStatic ( status === "wide" )
        }.bind ( this ))
    }
}

customElements.define (
    "svg-nav-panel",
    SvgNavigationPanel
)

// export default SvgNavigationPanel


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvci1yYWluYm93LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9ub2lzZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dyYXBoaWNIZWFkZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NodXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVPdXRwdXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvci1yYWluYm93LmNzcz81NDMwIiwid2VicGFjazovLy8uL3NyYy9nbGl0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuY3NzP2YzOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4tbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/MzdmNSIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vaXNlLmNzcz9lYTY0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC5jc3M/ZDM3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0LXNwb2lsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwb2lsZXItY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zcG9pbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLW5hdmlnYXRpb24tcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsR0FBRyxVQUFVLEtBQUssV0FBVyxnQkFBZ0IsSUFBSSxzQkFBc0IsSUFBSSx3QkFBd0IsSUFBSSx3QkFBd0IsSUFBSSxVQUFVLElBQUksc0JBQXNCLEtBQUssc0JBQXNCLFdBQVcsc0ZBQXNGLFVBQVUsb0VBQW9FLCtDQUErQyxzSEFBc0gsZUFBZSxvQ0FBb0Msc0hBQXNILGVBQWUsMElBQTBJLFVBQVUsSUFBSSxrQkFBa0IsMkJBQTJCLDZCQUE2QiwwQ0FBMEMsbUJBQW1CLDBDQUEwQywwQ0FBMEMsbUJBQW1CLDBDQUEwQywwQ0FBMEMsbUJBQW1CLDBDQUEwQywwQ0FBMEMsbUJBQW1CLDBDQUEwQywwQ0FBMEMsbUJBQW1CLDBDQUEwQywwQ0FBMEMsbUJBQW1CLDBDQUEwQywwQ0FBMEMsbUJBQW1CLDJDQUEyQyxlQUFlLGtCQUFrQixTQUFTLFVBQVUsbUJBQW1CLFdBQVcsWUFBWSxrQkFBa0IscUJBQXFCLGlCQUFpQixVQUFVLDRCQUE0Qiw2QkFBNkIsSUFBSSxzQkFBc0IscUJBQXFCLFdBQVcsYUFBYSxXQUFXLGVBQWUsbUJBQW1CLFNBQVMsa0RBQWtELFNBQVMsc0JBQXNCLElBQUksc0JBQXNCLFdBQVcsZUFBZSxpQkFBaUIsYUFBYSxXQUFXLGFBQWEsY0FBYyx3Q0FBd0MsY0FBYyxpQkFBaUIsb0NBQW9DLGNBQWMsaUJBQWlCLDhEQUE4RCxXQUFXLHNGQUFzRixXQUFXLGlCQUFpQixZQUFZLGNBQWMsbUJBQW1CLGdFQUFnRSx5QkFBeUIsOEJBQThCLDhGQUE4Rix5QkFBeUIsb0JBQW9CLGNBQWMsaUJBQWlCLGNBQWMseUhBQXlILGNBQWMsdUNBQXVDLGNBQWMsaUJBQWlCLDREQUE0RCxjQUFjLHNCQUFzQixjQUFjLG1CQUFtQixnRUFBZ0UsY0FBYyxtQkFBbUIsdURBQXVELGNBQWMsMkJBQTJCLGNBQWMsbUJBQW1CLGlDQUFpQyxXQUFXLG1CQUFtQixhQUFhLHNDQUFzQyx1Q0FBdUMsK0JBQStCLGtDQUFrQyxtQ0FBbUMsOEJBQThCLHVCQUF1QixLQUFLLHFHQUFxRywwQkFBMEIsMEJBQTBCLEtBQUssMkJBQTJCLHVCQUF1QixLQUFLLG1DQUFtQyw4QkFBOEIsS0FBSyxjQUFjLHdCQUF3Qix5QkFBeUIsS0FBSyxZQUFZLDZCQUE2Qix3QkFBd0IsS0FBSzs7Ozs7Ozs7Ozs7O0FDRmhwSSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsVUFBVSxzQkFBc0Isb0VBQW9FLGdFQUFnRSw4QkFBOEIsNkJBQTZCLGtCQUFrQixLQUFLLGlCQUFpQix1QkFBdUIsMkJBQTJCLDRCQUE0QixtQkFBbUIsaUJBQWlCLEtBQUsscUJBQXFCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLEtBQUs7Ozs7Ozs7Ozs7OztBQ0ZyZiwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsVUFBVSxxR0FBcUcsK0VBQStFLGdGQUFnRixxQ0FBcUMsOEJBQThCLGlDQUFpQyxvQ0FBb0MseUJBQXlCLDRCQUE0QiwrQkFBK0Isa0NBQWtDLG9DQUFvQyxtR0FBbUcsMEdBQTBHLHFEQUFxRCxnSEFBZ0gsK0ZBQStGLGlGQUFpRiwyRUFBMkUsbUZBQW1GLG1GQUFtRixtRkFBbUYsbUZBQW1GLG1GQUFtRixvQ0FBb0MsNERBQTRELGlFQUFpRSxLQUFLLGNBQWMscUNBQXFDLHNDQUFzQyxrQkFBa0IsOEJBQThCLCtCQUErQixzQ0FBc0MseUJBQXlCLEtBQUssY0FBYyx5QkFBeUIsZ0NBQWdDLEtBQUssWUFBWSxxQkFBcUIsa0JBQWtCLGlDQUFpQyxzQ0FBc0MsOEJBQThCLEtBQUssZ0dBQWdHLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLHVFQUF1RSxtQ0FBbUMsK0NBQStDLHVDQUF1QywwQ0FBMEMsb0JBQW9CLEtBQUssb0NBQW9DLG9DQUFvQyxzQ0FBc0Msb0JBQW9CLHVCQUF1QiwwQkFBMEIsd0JBQXdCLG1DQUFtQywrQkFBK0Isa0NBQWtDLDBCQUEwQixLQUFLLHVCQUF1QixnQkFBZ0IsS0FBSyxrQkFBa0Isa0JBQWtCLEtBQUssK0NBQStDLGtDQUFrQywyQkFBMkIsT0FBTyxLQUFLLCtDQUErQyxrQ0FBa0MsMkJBQTJCLE9BQU8sS0FBSywwQ0FBMEMsWUFBWSxrQkFBa0IsT0FBTyxtQkFBbUIsZUFBZSxFQUFFLGlCQUFpQixlQUFlLEVBQUUsc0NBQXNDLDJCQUEyQixPQUFPLEtBQUssOEVBQThFLDZCQUE2QixrQ0FBa0MsMkJBQTJCLFNBQVMsb0NBQW9DLHdCQUF3QixTQUFTLEtBQUssOERBQThELDJCQUEyQixrQkFBa0IsaUNBQWlDLEtBQUssNEJBQTRCLHdCQUF3QixpQkFBaUIscUJBQXFCLHVCQUF1QixLQUFLLHVCQUF1Qix5QkFBeUIsYUFBYSxlQUFlLDhCQUE4QixnQkFBZ0Isb0JBQW9CLHNCQUFzQixLQUFLLDBCQUEwQixvQkFBb0IsK0JBQStCLDZHQUE2RyxpQkFBaUIsa0JBQWtCLEtBQUssZ0NBQWdDLHdDQUF3QyxLQUFLLDZCQUE2QixpQkFBaUIsa0JBQWtCLEtBQUssbUNBQW1DLHVCQUF1QiwwQ0FBMEMseUJBQXlCLEtBQUssbUNBQW1DLHVCQUF1Qix5QkFBeUIsS0FBSyx5Q0FBeUMsdUJBQXVCLEtBQUs7Ozs7Ozs7Ozs7OztBQ0ZwMEosMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLHdCQUF3Qix5QkFBeUIscUJBQXFCLHNCQUFzQixhQUFhLGNBQWMscURBQXFELEtBQUssc0NBQXNDLDhDQUE4QyxLQUFLLDZCQUE2Qiw4Q0FBOEMsS0FBSyxnQkFBZ0IsNkJBQTZCLFNBQVMscUJBQXFCLDZCQUE2QixLQUFLLG1DQUFtQyxZQUFZLGdEQUFnRCxFQUFFLFlBQVksb0RBQW9ELEVBQUUsWUFBWSxrREFBa0QsRUFBRSxZQUFZLHNEQUFzRCxFQUFFLFlBQVksc0RBQXNELEVBQUUsWUFBWSxzREFBc0QsRUFBRSxZQUFZLHdEQUF3RCxFQUFFLFlBQVksc0RBQXNELEVBQUUsWUFBWSxzREFBc0QsRUFBRSxZQUFZLHNEQUFzRCxFQUFFLFlBQVksc0RBQXNELEVBQUUsWUFBWSxrREFBa0QsRUFBRSxZQUFZLHNEQUFzRCxFQUFFLFlBQVksc0RBQXNELEVBQUUsWUFBWSxzREFBc0QsRUFBRSxZQUFZLHNEQUFzRCxFQUFFLFlBQVksc0RBQXNELEVBQUUsWUFBWSxzREFBc0QsRUFBRSxZQUFZLHNEQUFzRCxFQUFFLFlBQVksc0RBQXNELEVBQUUsWUFBWSxzREFBc0QsRUFBRSxZQUFZLHNEQUFzRCxFQUFFLEtBQUs7Ozs7Ozs7Ozs7OztBQ0ZoOUQsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLGNBQWMsb0dBQW9HLEtBQUssZUFBZSxvR0FBb0csS0FBSyxlQUFlLG9HQUFvRyxLQUFLLGVBQWUsb0dBQW9HLEtBQUssZUFBZSxvR0FBb0csS0FBSyxlQUFlLG9HQUFvRyxLQUFLLGVBQWUsb0dBQW9HLEtBQUssZUFBZSxvR0FBb0csS0FBSyxlQUFlLG9HQUFvRyxLQUFLLGVBQWUsb0dBQW9HLEtBQUssZUFBZSxvR0FBb0csS0FBSyxlQUFlLG9HQUFvRyxLQUFLLGVBQWUsb0dBQW9HLEtBQUssZUFBZSxvR0FBb0csS0FBSyxlQUFlLG9HQUFvRyxLQUFLLGVBQWUsb0dBQW9HLEtBQUssOExBQThMLHVCQUF1QixxQ0FBcUMsaUNBQWlDLDJDQUEyQyx5QkFBeUIseUJBQXlCLDBCQUEwQix5QkFBeUIscUJBQXFCLHFCQUFxQixLQUFLLDRCQUE0Qix1QkFBdUIsdUJBQXVCLHdCQUF3QixLQUFLOzs7Ozs7Ozs7Ozs7O0FDRjE4RTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUJBQWlCO0FBQzVEO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsNkJBQTZCLHFCQUFxQixHQUFHLHFCQUFxQixJQUFJLHFCQUFxQixHQUFHLHFCQUFxQjtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsaUNBQWlDLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtDQUFrQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSw0RUFBYTs7Ozs7Ozs7Ozs7OztBQzVINUI7QUFBQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DLHNCQUFzQixVQUFVO0FBQ2hDLHNCQUFzQixVQUFVO0FBQ2hDLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQyxzQkFBc0IsV0FBVztBQUNqQyxzQkFBc0IsV0FBVztBQUNqQyxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RCxzQkFBc0IsbUNBQW1DO0FBQ3pELHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRWUsc0VBQU87Ozs7Ozs7Ozs7Ozs7QUMxSHRCO0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlCQUFpQjtBQUM1RDtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw0REFBNEQ7QUFDaEYsb0JBQW9CLHFFQUFxRTtBQUN6RixvQkFBb0IscUVBQXFFO0FBQ3pGLG9CQUFvQixxRUFBcUU7QUFDekYsb0JBQW9CLHFFQUFxRTtBQUN6RixvQkFBb0IsNkRBQTZEOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHlFQUFVOzs7Ozs7Ozs7Ozs7O0FDN0d6QixjQUFjLG1CQUFPLENBQUMsOEhBQTREOztBQUVsRiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVyxZQUFZLGFBQWE7QUFDOUMsVUFBVSxXQUFXLGFBQWEsYUFBYTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxZQUFZO0FBQzlDLFdBQVcsV0FBVyxZQUFZLGFBQWE7QUFDL0MsV0FBVyxXQUFXLGFBQWEsWUFBWTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLGFBQWE7QUFDaEQsV0FBVyxXQUFXLFlBQVksWUFBWTtBQUM5QyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLFlBQVk7QUFDL0MsV0FBVyxXQUFXLFlBQVksYUFBYTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLFlBQVk7QUFDL0MsV0FBVyxXQUFXLGFBQWEsYUFBYTtBQUNoRCxXQUFXLFdBQVcsWUFBWSxjQUFjO0FBQ2hELFdBQVcsV0FBVyxZQUFZLGFBQWE7QUFDL0Ms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TTtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsRUFBRSxJQUFJLEtBQUssRUFBRTtBQUMvQjtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLE1BQU07QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ2UsNEVBQWEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNZN0I7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTyxNQUFNLGFBQWEsTUFBTSxhQUFhLEdBQUcsT0FBTyxJQUFJLE9BQU8sR0FBRyxPQUFPO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPLE1BQU0saUNBQWlDLE1BQU0sMEJBQTBCLEdBQUcsV0FBVyxHQUFHLDBCQUEwQixHQUFHLFdBQVcsR0FBRyxtQ0FBbUMsR0FBRyxPQUFPLElBQUksT0FBTyxHQUFHLE9BQU87QUFDdFA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPLE1BQU0sNEJBQTRCLE1BQU0sMEJBQTBCLEdBQUcsV0FBVyxHQUFHLGNBQWMsR0FBRyxXQUFXLEdBQUcsNEJBQTRCLEdBQUcsT0FBTyxJQUFJLE9BQU8sR0FBRyxPQUFPO0FBQzlOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTyxNQUFNLHFCQUFxQixNQUFNLHFCQUFxQixHQUFHLE9BQU8sSUFBSSxPQUFPLEdBQUcsT0FBTztBQUN0STs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zdGFydC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmFpbmJvdyAqL1xcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZS1pbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgZmFkZXsxMCV7dHJhbnNmb3JtOnNjYWxlKDEsIDEpfTM1JXt0cmFuc2Zvcm06c2NhbGUoMSwgMS43KX00MCV7dHJhbnNmb3JtOnNjYWxlKDEsIDEuNyl9NTAle29wYWNpdHk6MX02MCV7dHJhbnNmb3JtOnNjYWxlKDEsIDEpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEsIDEpO29wYWNpdHk6MH19W2RhdGEtbGFuZ3VhZ2VdIGNvZGUsW2NsYXNzXj1cXFwibGFuZ1xcXCJdIGNvZGUscHJlIFtkYXRhLWxhbmd1YWdlXSxwcmUgW2NsYXNzXj1cXFwibGFuZ1xcXCJde29wYWNpdHk6MDstbXMtZmlsdGVyOlxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXFxcIjthbmltYXRpb246ZmFkZS1pbiA1MG1zIGVhc2UtaW4tb3V0IDJzIGZvcndhcmRzfVtkYXRhLWxhbmd1YWdlXSBjb2RlLnJhaW5ib3csW2NsYXNzXj1cXFwibGFuZ1xcXCJdIGNvZGUucmFpbmJvdyxwcmUgW2RhdGEtbGFuZ3VhZ2VdLnJhaW5ib3cscHJlIFtjbGFzc149XFxcImxhbmdcXFwiXS5yYWluYm93e2FuaW1hdGlvbjpub25lO3RyYW5zaXRpb246b3BhY2l0eSA1MG1zIGVhc2UtaW4tb3V0fVtkYXRhLWxhbmd1YWdlXSBjb2RlLmxvYWRpbmcsW2NsYXNzXj1cXFwibGFuZ1xcXCJdIGNvZGUubG9hZGluZyxwcmUgW2RhdGEtbGFuZ3VhZ2VdLmxvYWRpbmcscHJlIFtjbGFzc149XFxcImxhbmdcXFwiXS5sb2FkaW5ne2FuaW1hdGlvbjpub25lfVtkYXRhLWxhbmd1YWdlXSBjb2RlLnJhaW5ib3ctc2hvdyxbY2xhc3NePVxcXCJsYW5nXFxcIl0gY29kZS5yYWluYm93LXNob3cscHJlIFtkYXRhLWxhbmd1YWdlXS5yYWluYm93LXNob3cscHJlIFtjbGFzc149XFxcImxhbmdcXFwiXS5yYWluYm93LXNob3d7b3BhY2l0eToxfXByZXtwb3NpdGlvbjpyZWxhdGl2ZX1wcmUubG9hZGluZyAucHJlbG9hZGVyIGRpdnthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nfXByZS5sb2FkaW5nIC5wcmVsb2FkZXIgZGl2Om50aC1vZi10eXBlKDEpe2JhY2tncm91bmQ6IzAwODFmNTthbmltYXRpb246ZmFkZSAxLjVzIDMwMG1zIGxpbmVhciBpbmZpbml0ZX1wcmUubG9hZGluZyAucHJlbG9hZGVyIGRpdjpudGgtb2YtdHlwZSgyKXtiYWNrZ3JvdW5kOiM1MDAwZjU7YW5pbWF0aW9uOmZhZGUgMS41cyA0MzhtcyBsaW5lYXIgaW5maW5pdGV9cHJlLmxvYWRpbmcgLnByZWxvYWRlciBkaXY6bnRoLW9mLXR5cGUoMyl7YmFja2dyb3VuZDojOTAwMGY1O2FuaW1hdGlvbjpmYWRlIDEuNXMgNTc3bXMgbGluZWFyIGluZmluaXRlfXByZS5sb2FkaW5nIC5wcmVsb2FkZXIgZGl2Om50aC1vZi10eXBlKDQpe2JhY2tncm91bmQ6I2Y1MDQxOTthbmltYXRpb246ZmFkZSAxLjVzIDcxNW1zIGxpbmVhciBpbmZpbml0ZX1wcmUubG9hZGluZyAucHJlbG9hZGVyIGRpdjpudGgtb2YtdHlwZSg1KXtiYWNrZ3JvdW5kOiNmNTc5MDA7YW5pbWF0aW9uOmZhZGUgMS41cyA4NTNtcyBsaW5lYXIgaW5maW5pdGV9cHJlLmxvYWRpbmcgLnByZWxvYWRlciBkaXY6bnRoLW9mLXR5cGUoNil7YmFja2dyb3VuZDojZjVlNjAwO2FuaW1hdGlvbjpmYWRlIDEuNXMgOTkybXMgbGluZWFyIGluZmluaXRlfXByZS5sb2FkaW5nIC5wcmVsb2FkZXIgZGl2Om50aC1vZi10eXBlKDcpe2JhY2tncm91bmQ6IzAwZjUwYzthbmltYXRpb246ZmFkZSAxLjVzIDExMzBtcyBsaW5lYXIgaW5maW5pdGV9cHJlIC5wcmVsb2FkZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEycHg7bGVmdDoxMHB4fXByZSAucHJlbG9hZGVyIGRpdnt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2JvcmRlci1yYWRpdXM6NHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDo0cHg7b3BhY2l0eTowO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZDthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzfXByZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7d29yZC13cmFwOmJyZWFrLXdvcmQ7bWFyZ2luOjBweDtwYWRkaW5nOjEwcHg7Y29sb3I6I2ZmZjtmb250LXNpemU6MTRweDttYXJnaW4tYm90dG9tOjIwcHh9cHJlLGNvZGV7Zm9udC1mYW1pbHk6J01vbmFjbycsICdNZW5sbycsIGNvdXJpZXIsIG1vbm9zcGFjZX1wcmUsY29kZXtmb250LWZhbWlseTptb25vc3BhY2V9cHJle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMDAwO2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjE2cHh9cHJlIC5jb21tZW50e2NvbG9yOiM4ODh9cHJlIC5zdXBwb3J0e2NvbG9yOiNjZDU3ZDV9cHJlIC5jb25zdGFudC5udW1lcmljLHByZSAucGhwLmVtYmVkZGVke2NvbG9yOiNmYTAwMDI7Zm9udC13ZWlnaHQ6Ym9sZH1wcmUgLmtleXdvcmQscHJlIC5jb25zdGFudC5sYW5ndWFnZXtjb2xvcjojMDAwNzg5O2ZvbnQtd2VpZ2h0OmJvbGR9cHJlIC5zZWxlY3RvcixwcmUgLnN1cHBvcnQucHJvcGVydHkscHJlIC5lbnRpdHkubmFtZS5mdW5jdGlvbntjb2xvcjojMDAwfXByZSAuc3RvcmFnZS5mdW5jdGlvbixwcmUgLnZhcmlhYmxlLnNlbGYscHJlIC5zdXBwb3J0LmZ1bmN0aW9uLHByZSAuY29uc3RhbnQubGFuZ3VhZ2V7Y29sb3I6IzAwMDtmb250LXdlaWdodDpib2xkfXByZSAuc3RyaW5ne2NvbG9yOiMwZDQzZmE7Zm9udC13ZWlnaHQ6bm9ybWFsfXByZSAuY3NzLXByb3BlcnR5K3NwYW4scHJlIC5rZXl3b3JkLnVuaXQscHJlIC5zdXBwb3J0LmNzcy12YWx1ZXtjb2xvcjojMGQ0M2ZhICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6bm9ybWFsICFpbXBvcnRhbnR9cHJlIC5lbnRpdHkudGFnLnN0eWxlKy5zdHJpbmcscHJlIC5waHAuZW1iZWRkZWQgLmNvbnN0YW50Lmxhbmd1YWdlLHByZSAucGhwLmVtYmVkZGVkIC5rZXl3b3Jke2NvbG9yOiMzN2EzNDggIWltcG9ydGFudH1wcmUgLnN1cHBvcnQubWV0aG9ke2NvbG9yOiMyYmQ1YmJ9cHJlIC5lbnRpdHkubmFtZXtjb2xvcjojZmQ3NGUwfXByZSAuc3VwcG9ydC5jc3MtcHJvcGVydHkscHJlIC5zdXBwb3J0LnRhZy1uYW1lLHByZSAuc3VwcG9ydC50YWcscHJlIC5zdXBwb3J0LmF0dHJpYnV0ZSxwcmUgLnN1cHBvcnQuYXR0cmlidXRlKy5vcGVyYXRvcntjb2xvcjojMDAwNzg5fXByZSAuc3RvcmFnZS5tb2R1bGUscHJlIC5zdG9yYWdlLmNsYXNze2NvbG9yOiMxMjI1NzM7Zm9udC13ZWlnaHQ6Ym9sZH1wcmUgLmNzcy5lbWJlZGRlZCAuc3VwcG9ydC50YWcscHJlIC5jc3MuZW1iZWRkZWQgLnN0eWxlLnRhZ3tjb2xvcjojY2Q1N2Q1fXByZSAua2V5d29yZC5vcGVyYXRvcntjb2xvcjojMjg1MmViO2ZvbnQtd2VpZ2h0Om5vcm1hbH1wcmUgLnBocC5lbWJlZGRlZCAudmFyaWFibGUscHJlIC5waHAuZW1iZWRkZWQgLnN0b3JhZ2UuZnVuY3Rpb257Y29sb3I6IzBkNDNmYTtmb250LXdlaWdodDpub3JtYWx9cHJlIC5waHAuZW1iZWRkZWQgLnN0cmluZyxwcmUgLmpzLmVtYmVkZGVkIC50YWcuc2NyaXB0e2NvbG9yOiNjNDAwMWV9cHJlIC5waHAuZW1iZWRkZWQgLmNvbW1lbnR7Y29sb3I6I2Y0YjQ0MTtmb250LXdlaWdodDpub3JtYWx9cHJlIC5waHAuZW1iZWRkZWQgLmZ1bmN0aW9uLm5hbWV7Y29sb3I6IzAwMDtmb250LXdlaWdodDpub3JtYWx9XFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMDAwMDAwNTA7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMjBweCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMTBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDEwcHggMjBweCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4IDEwcHggMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbnByZSAuc3RvcmFnZS5mdW5jdGlvbiwgcHJlIC52YXJpYWJsZS5zZWxmLFxcclxcbnByZSAuc3VwcG9ydC5mdW5jdGlvbiwgcHJlIC5jb25zdGFudC5sYW5ndWFnZSB7XFxyXFxuICAgIGNvbG9yOiBkYXJrb3JjaGlkO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxucHJlIC5zdG9yYWdlLnR5cGUge1xcclxcbiAgY29sb3I6IGZpcmVicmljaztcXHJcXG59XFxyXFxuXFxyXFxucHJlIC5lbnRpdHkubmFtZS5mdW5jdGlvbiB7XFxyXFxuICAgIGNvbG9yOiByZ2IoNywgMTE5LCA3KTtcXHJcXG59XFxyXFxuXFxyXFxuY29kZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDFmcikpO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5ncmlkID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxufVxcclxcbi5ncmlkID4gZGl2ID4gYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAvKiAtLWNhcC1pbWFnZSA6IHVybChodHRwczovL3d3dy53ZWJmeC5jb20vdG9vbHMvZW1vamktY2hlYXQtc2hlZXQvZ3JhcGhpY3MvZW1vamlzL2NvZmZlZS5wbmcpOyAqL1xcclxcbiAgLS1jYXAtaW1hZ2UgOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9qcy1zYW1wbGVzL2ljb25zL2NhcC5wbmcpO1xcclxcbiAgLyogLS1saW5rLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9qcy1zYW1wbGVzL2ljb25zL2xpbmsucG5nKTsgKi9cXHJcXG5cXHJcXG4gIC0tYmFjay1jb2xvcjogI2ZmZmZmZjkwO1xcclxcbiAgLS1tZW51LWJhY2stY29sb3I6ICNmYTA7XFxyXFxuICAtLXN1Ym1lbnUtYmFjay1jb2xvcjogIzA5YjtcXHJcXG4gIC0tYmFjay10cmFuc3BhcmVudDogI2ZmZmZmZjAwO1xcclxcbiAgLS1tZW51LWNvbG9yOiAjMDliO1xcclxcbiAgLS1zdWJtZW51LWNvbG9yOiAjMDliO1xcclxcbiAgLS1tZW51LWNvbG9yLWhvdmVyOiAjMDAwO1xcclxcbiAgLS1zdWJtZW51LWNvbG9yLWhvdmVyOiAjMDAwO1xcclxcbiAgLS1zZWxlY3RlZC1sZXNzb24tY29sb3I6ICNmZmY7XFxyXFxuICAtLWhlYWRlci1iYWNrLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDAwMCwgIzAwMDAwMDUwIDMwJSwgIzAwMDAwMCA0MCUsICMwMDAgKTtcXHJcXG4gIC0taGVhZGVyLWJhY2staW1hZ2U6IHVybChodHRwczovL2Nkbi5nbGl0Y2guY29tL2E0ZTBhOWZkLWVhN2ItNDdjZi1iNTJhLTQ4ZmQ2MzU5YzU1OSUyRnN0YXJzLTUuZ2lmKTtcXHJcXG5cXHJcXG4gIC8qLS1pY29uOiAgICAgICB1cmwoLi4vc3JjL2ltYWdlcy9jYXQuZ2lmKTsqL1xcclxcbiAgLS1pY29uOiAgICAgICB1cmwoaHR0cHM6Ly9jZG4uZ2xpdGNoLmNvbS9hNGUwYTlmZC1lYTdiLTQ3Y2YtYjUyYS00OGZkNjM1OWM1NTklMkZwZXJzb25hZ2UtdG8tcmlnaHQuZ2lmKTtcXHJcXG4gIC0tc2VhcmNoOiAgICAgdXJsKGh0dHBzOi8vd3d3LndlYmZ4LmNvbS90b29scy9lbW9qaS1jaGVhdC1zaGVldC9ncmFwaGljcy9lbW9qaXMvbWFnLnBuZyk7XFxyXFxuICAtLWxpbmstaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2pzLXNhbXBsZXMvaWNvbnMvbGluay1pY28ucG5nKTtcXHJcXG5cXHJcXG4gIC0tYnV0dG9uLWdyYWRpZW50LTA6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA5YiwgIzA5YiwgIzA5Yik7XFxyXFxuICAtLWJ1dHRvbi1ncmFkaWVudC0xOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDEwJSAzMCUsICMwOWIpO1xcclxcbiAgLS1idXR0b24tZ3JhZGllbnQtMjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCAzMCUgNTAlLCAjMDliKTtcXHJcXG4gIC0tYnV0dG9uLWdyYWRpZW50LTM6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgNTAlIDcwJSwgIzA5Yik7XFxyXFxuICAtLWJ1dHRvbi1ncmFkaWVudC00OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDcwJSA5MCUsICMwOWIpO1xcclxcbiAgLS1idXR0b24tZ3JhZGllbnQtNTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCA0MCUgNTAlLCAjMDliKTtcXHJcXG4gIC0tbWFpbi1tZW51LWl0ZW0taGVpZ2h0OiAyMHB4O1xcclxcbiAgLS1tYWluLWZvbnQ6ICdQb3BwaW5zJywgJ01vbnRzZXJyYXQnLCAnUm9ib3RvJywgQXJpYWw7XFxyXFxuICAtLWZ1bnktZm9udDogJ0x1Y2tpZXN0IEd1eScsICdNb250c2VycmF0JywgJ1JvYm90bycsIEFyaWFsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMjBweCBjYWxjKDUwJSAtIDQ1MHB4KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIEFyaWFsO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgMjBweCB3aGl0ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDcwcHggd2hpdGU7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgbWFyZ2luOiAzMnB4IDA7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZjUwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMS4ycHggIzA5YjtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT0gIG1haW4tbWVudS1jb21wb25lbnQgID09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbm1haW4tbWVudS1jb21wb25lbnQge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJhY2staW1hZ2UpLCB2YXIoLS1oZWFkZXItYmFjay1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzAlLCAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXgsIG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAjMDAwMDAwOTA7XFxyXFxuICAgIHotaW5kZXg6IDU1O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluLW1lbnUtY29tcG9uZW50OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJDbGllbnQtc2lkZSBKU1xcXCI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTHVja2llc3QgR3V5XFxcIjtcXHJcXG4gICAgY29sb3I6ICNkZWY7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXHJcXG4gICAgLW1vei1sZXR0ZXItc3BhY2luZzogMjtcXHJcXG4gICAgLXdlYmtpdC1sZXR0ZXItc3BhY2luZzogMjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI7XFxyXFxufVxcclxcblxcclxcbnBvcHVwLXdpbiBpbWcge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5wb3B1cC13aW4gaDMge1xcclxcbiAgY29sb3I6ICNkZGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xcclxcbiAgbWFpbi1tZW51LWNvbXBvbmVudDpiZWZvcmUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xcclxcbiAgbWFpbi1tZW51LWNvbXBvbmVudDpiZWZvcmUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwdnc7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgZ2xpdGNoLWxvZ28geyBkaXNwbGF5OiBub25lOyB9XFxyXFxuICBwb3B1cC13aW4geyBkaXNwbGF5OiBub25lOyB9XFxyXFxuXFxyXFxuICBtYWluLW1lbnUtY29tcG9uZW50OmJlZm9yZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpLCBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0ODBweCkge1xcclxcbiAgICBtYWluLW1lbnUtY29tcG9uZW50IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIG1haW4tbWVudS1jb21wb25lbnQ6YmVmb3JlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qID09PT09IGdsaXRjaCBsb2dvID09PT09ICovXFxyXFxuXFxyXFxuZ2xpdGNoLWxvZ28ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNzBweDtcXHJcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTUwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5tZW51LWNvbXBvbmVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA4cHg7XFxyXFxuICAgIHotaW5kZXg6IDUwMDtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jbG9zZS1idXR0b246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3LndlYmZ4LmNvbS90b29scy9lbW9qaS1jaGVhdC1zaGVldC9ncmFwaGljcy9lbW9qaXMvbm9fZW50cnlfc2lnbi5wbmcpO1xcclxcbiAgd2lkdGg6MzBweDtcXHJcXG4gIGhlaWdodDozMHB4O1xcclxcbn1cXHJcXG4uY2xvc2UtYnV0dG9uOmhvdmVyOmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwNzk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICMwMDAwMDA3MDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjUwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYTA7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNub2lzZS1iYWNrLCAjbm9pc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAwJSAwJSwgMCUgMCUsIDAlIDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQ6aG92ZXIgPiAjbm9pc2UtYmFjayB7XFxyXFxuICBhbmltYXRpb246IGNsaXAtYW5pbWF0aW9uIDAuM3MgaW5maW5pdGU7XFxyXFxufVxcclxcbi5jb250ZW50OmhvdmVyID4gI25vaXNlIHtcXHJcXG4gIGFuaW1hdGlvbjogY2xpcC1hbmltYXRpb24gMC40cyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI25vaXNlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNub2lzZS1iYWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOWI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2xpcC1hbmltYXRpb24ge1xcclxcbiAgICAwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgNSUgMCUsIDUlIDQlLCAwJSA0JSk7IH1cXHJcXG4gICAgMiUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgOCUsIDEwJSA4JSwgMTAlIDEwJSwgMCUgMTAlKTsgfVxcclxcbiAgICA1JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTUlIDAlLCAxNSUgNSUsIDAlIDUlKTsgfVxcclxcbiAgICA3JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAxMiUsIDQwJSAxMiUsIDQwJSAxNSUsIDAlIDE1JSk7IH1cXHJcXG4gICAxMCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMjUlLCAyMCUgMjUlLCAyMCUgMzAlLCAwJSAzMCUpOyB9XFxyXFxuICAgMTUlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDg4JSwgMjAlIDg4JSwgMjAlIDkwJSwgMCUgOTAlKTsgfVxcclxcbiAgIDIwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA5NyUsIDUwJSA5NyUsIDUwJSAxMDAlLCAwJSAxMDAlKTsgfVxcclxcbiAgIDI3JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA5MCUsIDMwJSA5MCUsIDMwJSA5MiUsIDAlIDkyJSk7IH1cXHJcXG4gICAzMCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNTAlLCA0MCUgNTAlLCA0MCUgNTQlLCAwJSA1NCUpOyB9XFxyXFxuICAgMzQlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDQzJSwgNDAlIDQzJSwgNDAlIDQ1JSwgMCUgNDUlKTsgfVxcclxcbiAgIDQwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDIwJSAzMCUsIDIwJSAzMiUsIDAlIDMyJSk7IH1cXHJcXG4gICA0NyUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDUwJSAwJSwgNTAlIDMlLCAwJSAzJSk7IH1cXHJcXG4gICA1MCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTUlLCAzMCUgMTUlLCAzMCUgMjAlLCAwJSAyMCUpOyB9XFxyXFxuICAgNTUlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDE3JSwgNDAlIDE3JSwgNDAlIDIwJSwgMCUgMjAlKTsgfVxcclxcbiAgIDYwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA3MCUsIDQwJSA3MCUsIDQwJSA3MyUsIDAlIDczJSk7IH1cXHJcXG4gICA2NCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTglLCAzMCUgMTglLCAzMCUgMjAlLCAwJSAyMCUpOyB9XFxyXFxuICAgNzAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDgwJSwgMjAlIDgwJSwgMjAlIDg1JSwgMCUgODUlKTsgfVxcclxcbiAgIDcyJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA3NCUsIDIwJSA3NCUsIDIwJSA3NyUsIDAlIDc3JSk7IH1cXHJcXG4gICA3OCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCA0MCUgMzAlLCA0MCUgMzMlLCAwJSAzMyUpOyB9XFxyXFxuICAgODAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDQwJSwgNDAlIDQwJSwgNDAlIDQ0JSwgMCUgNDQlKTsgfVxcclxcbiAgIDkwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAxMCUsIDMwJSAxMCUsIDMwJSAxMiUsIDAlIDEyJSk7IH1cXHJcXG4gIDEwMCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgODQlLCAzNSUgODQlLCAzNSUgODglLCAwJSA4OCUpOyB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tYWtldC0wMSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzAxLnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0wMiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzAyLnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0wMyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzAzLnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0wNCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzA0LnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0wNSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzA1LnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0wNiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzA2LnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0wNyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzA3LnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0wOCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzA4LnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0wOSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzA5LnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0xMCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzEwLnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0xMSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzExLnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0xMiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzEyLnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0xMyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzEzLnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0xNCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzE0LnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0xNSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzE1LnBuZyk7XFxyXFxufVxcclxcbi5tYWtldC0xNiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9hLWxldmVsLWpzLWxlc3NvbnMvc3JjL2ltYWdlcy9wcm9qZWN0LzE2LnBuZyk7XFxyXFxufVxcclxcblxcclxcbi5tYWtldC0wMSwgLm1ha2V0LTAyLCAubWFrZXQtMDMsIC5tYWtldC0wNCwgLm1ha2V0LTA1LCAubWFrZXQtMDYsXFxyXFxuLm1ha2V0LTA3LCAubWFrZXQtMDgsIC5tYWtldC0wOSwgLm1ha2V0LTEwLCAubWFrZXQtMTEsIC5tYWtldC0xMixcXHJcXG4ubWFrZXQtMTMsIC5tYWtldC0xNCwgLm1ha2V0LTE1LCAubWFrZXQtMTYge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMzB2aDtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0ID4gZGl2ID4gYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJjbGFzcyBHcmFwaGljSGVhZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICgpXHJcbiAgICAgICAgdGhpcy5ub3JtYWxTdGF0ZSA9IFsgLTEwMCwgMCwgMzAwLCAwIF1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFsgLTEwMCwgMCwgMzAwLCAwIF1cclxuICAgICAgICB0aGlzLmhvdmVyU3RhdGUgPSBbIDIwLCA3MCwgODAsIDcwIF1cclxuICAgICAgICB0aGlzLmRlZnMgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwic2hhZG93XCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMzAwJVwiIGhlaWdodD1cIjMwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmZU9mZnNldCByZXN1bHQ9XCJvZmZPdXRcIiBpbj1cIlNvdXJjZUFscGhhXCIgZHg9XCIxXCIgZHk9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9XCJibHVySW5cIiBpbj1cIm9mZk91dFwiIHN0ZERldmlhdGlvbj1cIjdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiYmx1ck91dFwiIG1vZGU9XCJub3JtYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXR0ZXJuIGlkPVwicGljdHVyZVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltYWdlIHhsaW5rOmhyZWY9XCJodHRwczovL2Nkbi5nbGl0Y2guY29tL2E0ZTBhOWZkLWVhN2ItNDdjZi1iNTJhLTQ4ZmQ2MzU5YzU1OSUyRnN0YXJzLTUuZ2lmXCIgeD1cIjBcIiB5PVwiLTUwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICBgXHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogXCJjbG9zZWRcIiB9IClcclxuXHRcdHRoaXMuc2hhZG93LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAke3RoaXMuZGVmc31cclxuICAgICAgXHRcdFx0PHBhdGggZD1cIk0tNTAgMCBDICR7dGhpcy5jdXJyZW50U3RhdGVbMF19ICR7dGhpcy5jdXJyZW50U3RhdGVbMV19LCAke3RoaXMuY3VycmVudFN0YXRlWzJdfSAke3RoaXMuY3VycmVudFN0YXRlWzNdfSwgMjUwIDBcIiBmaWx0ZXI9XCJ1cmwoI3NoYWRvdylcIiBmaWxsPVwidXJsKCNwaWN0dXJlKVwiIC8+XHJcbiAgICBcdFx0PC9zdmc+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwic3ZnXCIgKVxyXG4gICAgICAgIHRoaXMucGF0aCA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcInBhdGhcIiApXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJzdHlsZVwiIClcclxuICAgICAgICApLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iYWNrLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdmcgPiBwYXRoIHtcclxuICAgICAgICAgICAgICAgIGZpbGw6IHVybCgjcGljdHVyZSk7XHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mdW55LWZvbnQpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZjUwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCksIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBzdmcsIGgzIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgICAgICB0aGlzLnN2Zy5vbnBvaW50ZXJkb3duID0gdGhpcy5jaGFuZ2UuYmluZCAoIHRoaXMsIFwiaG92ZXJTdGF0ZVwiIClcclxuICAgICAgICB0aGlzLnN2Zy5vbnBvaW50ZXJ1cCA9IHRoaXMuY2hhbmdlLmJpbmQgKCB0aGlzLCBcIm5vcm1hbFN0YXRlXCIgKVxyXG4gICAgICAgIHRoaXMuc3ZnLmFkZEV2ZW50TGlzdGVuZXIgKCBcInBvaW50ZXJkb3duXCIsIHRoaXMuY2hhbmdlU1ZHc2l6ZSApXHJcbiAgICAgICAgdGhpcy5zdmcuYWRkRXZlbnRMaXN0ZW5lciAoIFwicG9pbnRlcnVwXCIsIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZVxyXG4gICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgd2luZG93Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVNWR3NpemUgKCBldmVudCApIHtcclxuICAgICAgICAvLyBldmVudC50YXJnZXQuc2V0UG9pbnRlckNhcHR1cmUgKCBldmVudC5wb2ludGVySWQgKVxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjgwdmhcIlxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ2YXIoLS1iYWNrLXRyYW5zcGFyZW50KVwiXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiXHJcbiAgICB9XHJcbiAgICBhbmltYXRlICgpIHtcclxuICAgICAgICBsZXQgeDEgPSB0aGlzLmN1cnJlbnRTdGF0ZVswXSxcclxuICAgICAgICAgICAgeTEgPSB0aGlzLmN1cnJlbnRTdGF0ZVsxXSxcclxuICAgICAgICAgICAgeDIgPSB0aGlzLmN1cnJlbnRTdGF0ZVsyXSxcclxuICAgICAgICAgICAgeTIgPSB0aGlzLmN1cnJlbnRTdGF0ZVszXVxyXG4gICAgICAgIHRoaXMuc3ZnLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgJHt0aGlzLmRlZnN9XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNLTE1MCAwIEMgJHt4MX0gJHt5MX0sICR7eDJ9ICR7eTJ9LCAzMDAgMFwiIGZpbHRlcj1cInVybCgjZjEpXCIvPlxyXG4gICAgICAgICAgICA8IS0tIDxpbWFnZSB4bGluazpocmVmPVwiaHR0cHM6Ly95b2tvZW50LmNvbS9pbWFnZXMvZmluZ2VycHJpbnQtcG5nLWdyZWVuLTMucG5nXCIgd2lkdGg9XCIyMCVcIiBoZWlnaHQ9XCIyMCVcIiB4PVwiNTBcIiB5PVwiMjBcIiAvPiAtLT5cclxuICAgICAgICBgXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuY2FsbCAoIHRoaXMsIGFyZ3VtZW50c1swXSApXHJcbiAgICB9XHJcbiAgICBjaGFuZ2UgKCkge1xyXG4gICAgICAgIGxldCBkaXN0ID0gMFxyXG4gICAgICAgIGZvciAoIGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jdXJyZW50U3RhdGUubGVuZ3RoOyBpbmRleCsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMgWyBhcmd1bWVudHNbMF0gXSBbIGluZGV4IF0gLSB0aGlzLmN1cnJlbnRTdGF0ZSBbIGluZGV4IF1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlIFsgaW5kZXggXSArPSBkaXN0YW5jZSA8IDAgPyAtMSA6IGRpc3RhbmNlID4gMCA/IDEgOiAwXHJcbiAgICAgICAgICAgICAgICBkaXN0ICs9IE1hdGguYWJzICggZGlzdGFuY2UgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGRpc3QgPT09IDAgKSB7XHJcbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSBcIm5vcm1hbFN0YXRlXCIgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN2Zy5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdmcuc3R5bGUuYmFja2dyb3VuZCA9IFwidmFyKC0taGVhZGVyLWJhY2stY29sb3IpXCJcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnLnN0eWxlLmJveFNoYWRvdyA9IFwiNXB4IDVweCAxMHB4ICMwMDAwMDA3MFwiXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdmcuaW5uZXJIVE1MICs9IGA8aW1hZ2UgeGxpbms6aHJlZj1cImh0dHBzOi8veW9rb2VudC5jb20vaW1hZ2VzL2ZpbmdlcnByaW50LXBuZy1ncmVlbi0zLnBuZ1wiIHdpZHRoPVwiMjAlXCIgaGVpZ2h0PVwiMjAlXCIgeD1cIjUwXCIgeT1cIjIwXCIgLz5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAoIHRoaXMuYW5pbWF0ZS5iaW5kICggdGhpcywgYXJndW1lbnRzWzBdICkgKVxyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyAoIFwiR3JhcGhpY0hlYWRlckNvbXBvbmVudCB3YXMgZGlzY29ubmVjdGVkIVwiIClcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lIChcclxuICAgIFwiZ3JhcGhpYy1oZWFkZXJcIixcclxuICAgIEdyYXBoaWNIZWFkZXJcclxuKVxyXG5cclxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCAoXHJcbi8vICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJncmFwaGljLWhlYWRlclwiIClcclxuLy8gKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGhpY0hlYWRlclxyXG4iLCJjbGFzcyBTaHV0dGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93ICggeyBtb2RlOlwiY2xvc2VkXCIgfSApXHJcbiAgICAgICAgdGhpcy5wb2x5Z29uZXMgPSBbXVxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIFwic3R5bGVcIiApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlndXJlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5MDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHQtZmlndXJlIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDRweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxlZnQtZmlndXJlIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgbW92aWUtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAwJSAgIHsgbGVmdDogLTEwMCU7IH1cclxuICAgICAgICAgICAgICAgIDQ1JSAgeyBsZWZ0OiAwJTsgfVxyXG4gICAgICAgICAgICAgICAgNTUlICB7IGxlZnQ6IDAlOyB9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHsgbGVmdDogLTEwMCU7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIG1vdmllLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIDAlICAgeyByaWdodDogLTEwMCU7IH1cclxuICAgICAgICAgICAgICAgIDQ1JSAgeyByaWdodDogMCU7IH1cclxuICAgICAgICAgICAgICAgIDU1JSAgeyByaWdodDogMCU7IH1cclxuICAgICAgICAgICAgICAgIDEwMCUgeyByaWdodDogLTEwMCU7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXMuY3JlYXRlRWxlbSAoIFwibWFpblwiLCB0aGlzLnNoYWRvdyApXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQb2x5Z29uZXMoIG1haW4gKVxyXG4gICAgICAgIHRoaXMucG9seWdvbmVzLmZvckVhY2ggKFxyXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0uZm9yRWFjaCAoXHJcbiAgICAgICAgICAgICAgICBlbGVtID0+IGVsZW0uc3R5bGUgWyBcImFuaW1hdGlvbi1uYW1lXCIgXSA9IGVsZW0ubW92aWVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGdldFNlZ21lbnRIZWlnaHQgKCB0b3RhbEhlaWdodCApIHtcclxuICAgICAgICByZXR1cm4gdG90YWxIZWlnaHQgPiA1MCA/XHJcbiAgICAgICAgICAgICAgICBNYXRoLm1heCggNTAsIE1hdGgubWluICggMTUwLCBNYXRoLnJhbmRvbSAoKSAqIHRvdGFsSGVpZ2h0ICkgKSA6XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlaWdodFxyXG4gICAgfVxyXG4gICAgZ2V0UmFuZG9tQ29sb3IgKCkge1xyXG4gICAgICAgIHJldHVybiBgcmdiYShcclxuICAgICAgICAgICAgICAgICAgICAke01hdGgucm91bmQgKCBNYXRoLnJhbmRvbSgpICogMjAwICl9LFxyXG4gICAgICAgICAgICAgICAgICAgICR7TWF0aC5yb3VuZCAoIE1hdGgucmFuZG9tKCkgKiAyMDAgKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgJHtNYXRoLnJvdW5kICggTWF0aC5yYW5kb20oKSAqIDIwMCApfSxcclxuICAgICAgICAgICAgICAgICAgICAwLjgpYFxyXG4gICAgfVxyXG4gICAgY3JlYXRlRWxlbSAoIHRhZ05hbWUsIGNvbnRhaW5lciApIHtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyLmFwcGVuZENoaWxkIChcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIHRhZ05hbWUgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNyZWF0ZUZpZ3VyZSAoIGNvbnRhaW5lciwgY2xhc3NfbmFtZSApIHtcclxuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuY3JlYXRlRWxlbSAoIFwiZmlndXJlXCIsIGNvbnRhaW5lciApXHJcbiAgICAgICAgY2xhc3NfbmFtZSA/IGVsZW0uY2xhc3NOYW1lID0gY2xhc3NfbmFtZSA6IG51bGxcclxuICAgICAgICByZXR1cm4gZWxlbVxyXG4gICAgfVxyXG4gICAgY3JlYXRlUG9seWdvbmVzICggY29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBsZXQgbnVtID0gTWF0aC5tYXggKCA1LCBNYXRoLnJvdW5kICggTWF0aC5yYW5kb20gKCkgKiAxMCApIClcclxuICAgICAgICBsZXQgdG90YWxIZWlnaHQgPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuZ2V0U2VnbWVudEhlaWdodCAoIHRvdGFsSGVpZ2h0IClcclxuICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSB0aGlzLmNyZWF0ZUVsZW0gKCBcInNlY3Rpb25cIiwgY29udGFpbmVyIClcclxuICAgICAgICAgICAgc2VjdGlvbi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCJcclxuICAgICAgICAgICAgdG90YWxIZWlnaHQgLT0gaGVpZ2h0XHJcblxyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSBNYXRoLnJvdW5kICggTWF0aC5tYXggKCAwLjMsIE1hdGgubWluICggTWF0aC5yYW5kb20gKCksIDAuNyApICkgKiBzZWN0aW9uLm9mZnNldFdpZHRoIClcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtMSA9IHRoaXMuY3JlYXRlRmlndXJlICggc2VjdGlvbiwgXCJsZWZ0LWZpZ3VyZVwiIClcclxuICAgICAgICAgICAgbGV0IGVsZW0yID0gdGhpcy5jcmVhdGVGaWd1cmUgKCBzZWN0aW9uLCBcInJpZ2h0LWZpZ3VyZVwiIClcclxuICAgICAgICAgICAgLy8gZWxlbTEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5nZXRSYW5kb21Db2xvcigpXHJcbiAgICAgICAgICAgIC8vIGVsZW0yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuZ2V0UmFuZG9tQ29sb3IoKVxyXG5cclxuICAgICAgICAgICAgZWxlbTEuc3R5bGVbIFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIgXSA9XHJcbiAgICAgICAgICAgICAgICBlbGVtMi5zdHlsZVsgXCJhbmltYXRpb24tZHVyYXRpb25cIiBdID0gTWF0aC5tYXgoIDAuNSwgTWF0aC5yYW5kb20gKCkgKSArIFwic1wiXHJcblxyXG4gICAgICAgICAgICBlbGVtMS5tb3ZpZSA9IFwibW92aWUtbGVmdFwiXHJcbiAgICAgICAgICAgIGVsZW0yLm1vdmllID0gXCJtb3ZpZS1yaWdodFwiXHJcblxyXG4gICAgICAgICAgICBlbGVtMS5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiXHJcbiAgICAgICAgICAgIGVsZW0yLnN0eWxlLndpZHRoID0gc2VjdGlvbi5vZmZzZXRXaWR0aCAtIHdpZHRoICsgXCJweFwiXHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvbHlnb25lcy5wdXNoICggWyBlbGVtMSwgZWxlbTIgXSApXHJcbiAgICAgICAgfSB3aGlsZSAoIHRvdGFsSGVpZ2h0ID4gMCApXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSAoIFwic2h1dHRlci1lbGVtZW50XCIsIFNodXR0ZXIgKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2h1dHRlclxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbmNsYXNzIENvZGVPdXRwdXQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKClcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93ICggeyBtb2RlOiBcImNsb3NlZFwiIH0gKVxyXG4gICAgICAgIHRoaXMuc2hhZG93LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgKiB7IG91dGxpbmU6IG5vbmU7IH1cclxuICAgICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNHB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZGRlO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDliLCAjMDliLCAjMDliKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1hbGksIE1vbnRzZXJyYXQsIEFyaWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBidXR0b24taG92ZXIgMC4ycyBlYXNlIGFsdGVybmF0ZSAyO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4ICMwMDAwMDA1MDtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwNTU3N2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGJ1dHRvbi1ob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAwJSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsIzA5YiwgIzA5Yik7IH1cclxuICAgICAgICAgICAgICAgMjAlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCAxMCUgMzAlLCAjMDliKTsgfVxyXG4gICAgICAgICAgICAgICA0MCUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDMwJSA1MCUsICMwOWIpOyB9XHJcbiAgICAgICAgICAgICAgIDYwJSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgNTAlIDcwJSwgIzA5Yik7IH1cclxuICAgICAgICAgICAgICAgODAlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCA3MCUgOTAlLCAjMDliKTsgfVxyXG4gICAgICAgICAgICAgIDEwMCUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjMDliLCAjMDliKTsgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDc5O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1MDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8YnV0dG9uPlN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcImJ1dHRvblwiIClcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCJzZWN0aW9uXCIgKVxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG5cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHtcclxuICAgICAgICByZXR1cm4gWyBcInNjcmlwdFwiIF1cclxuICAgIH1cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAoIGF0dHJOYW1lLCBvbGRWYWwsIG5ld1ZhbCApIHtcclxuICAgICAgICBmZXRjaCggYCR7Y3JlYXRlUGF0aChcImxlc3NvbnNcIiwgbmV3VmFsICl9YCApXHJcbiAgICAgICAgICAgIC50aGVuICggcmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpIClcclxuICAgICAgICAgICAgLnRoZW4gKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5yZXBsYWNlKC9kb2N1bWVudC5ib2R5L2csIFwidGhpcy5zZWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5yZXBsYWNlKC9kb2N1bWVudC5oZWFkL2csIFwidGhpcy5zZWN0aW9uXCIpXHJcblxyXG4gICAgICAgICAgICAgIGxldCBzdG9wSGFuZGxlciA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gXCJTdGFydFwiXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQub25jbGljayA9IHN0YXJ0SGFuZGxlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uLnN0b3AgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgICAgICAgIH0uYmluZCAoIHRoaXMgKVxyXG5cclxuICAgICAgICAgICAgICBsZXQgc3RhcnRIYW5kbGVyID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSBcInN0b3BcIlxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm9uY2xpY2sgPSBzdG9wSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uLnN0b3AgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZXZhbCAoIHJlc3BvbnNlIClcclxuICAgICAgICAgICAgICB9LmJpbmQgKCB0aGlzIClcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5idXR0b24ub25jbGljayA9IHN0YXJ0SGFuZGxlclxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUgKFxyXG4gIFwiY29kZS1vdXRwdXRcIixcclxuICBDb2RlT3V0cHV0XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVPdXRwdXRcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9yLXJhaW5ib3cuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvci1yYWluYm93LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9yLXJhaW5ib3cuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jbGFzcyBHbGl0Y2hMb2dvIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpXHJcbiAgICBsZXQgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3cgKCB7IG1vZGU6IFwiY2xvc2VkXCIgfSApXHJcbiAgICBsZXQgc3R5bGUgPSBzaGFkb3cuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJzdHlsZVwiIClcclxuICAgIClcclxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxyXG4gICAgLmxvZ28tYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmZmY7XHJcbiAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwMDAwODA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5sb2dvLWJveCAub3ZlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIH1cclxuICAgIC5sb2dvLWJveCAubm9pc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZ2xpdGNoLW5vaXNlIDFzIGxpbmVhciAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tYm94IC5nbGl0Y2gge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsIFwiUG9wcGluc1wiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tYm94IC5nbGl0Y2g6YmVmb3JlLCAubG9nby1ib3ggLmdsaXRjaDphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiSlNcIjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tYm94IC5nbGl0Y2g6YmVmb3JlIHtcclxuICAgICAgbGVmdDogMi41cHg7XHJcbiAgICAgIHRleHQtc2hhZG93OiAtMi41cHggMCAjZjUwO1xyXG4gICAgICBhbmltYXRpb246IGdsaXRjaC1iZWZvcmUgMnMgZWFzZSAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICB9XHJcbiAgICAubG9nby1ib3ggLmdsaXRjaDphZnRlciB7XHJcbiAgICAgIGxlZnQ6IC0yLjVweDtcclxuICAgICAgdGV4dC1zaGFkb3c6IC0yLjVweCAwICMwOWI7XHJcbiAgICAgIGFuaW1hdGlvbjogZ2xpdGNoLWFmdGVyIDJzIGVhc2UgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgZ2xpdGNoLWJlZm9yZSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDBweCwgMTI1cHgsIDEyMHB4LCA1MHB4KTtcclxuICAgICAgfVxyXG4gICAgICA1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsIDEyNXB4LCA1OXB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzMHB4LCAyMTBweCwgOTBweCwgMzBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMTUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDE1cHgsIDQwcHgsIDQ4cHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMjAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDE1cHgsIDVweCwgNTBweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMjUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDE3cHgsIDEyNXB4LCA0NXB4LCA1MHB4KTtcclxuICAgICAgfVxyXG4gICAgICAzMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LCAxMjVweCwgMzJweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAzNSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMjBweCwgMTAwcHgsIDQ3cHgsIDUwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDQwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzMHB4LCA4MHB4LCAyOHB4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA0NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTZweCwgNTBweCwgMzRweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LCAxMjVweCwgMzdweCwgMTAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDU1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxMnB4LCAxMDBweCwgMjFweCwgMzBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNjAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDQxcHgsIDEyNXB4LCA1NXB4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA2NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNXB4LCA1MHB4LCAzOXB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDcwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg1cHgsIDEyMHB4LCAyNHB4LCA0MHB4KTtcclxuICAgICAgfVxyXG4gICAgICA3NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzBweCwgMTI1cHgsIDUwcHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDgwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzN3B4LCA4MHB4LCA1MHB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDg1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzN3B4LCA4MHB4LCA0OHB4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA5MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzBweCwgNTBweCwgOTJweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA5NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTdweCwgMTI1cHgsIDkycHgsIDkwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LCAxMjVweCwgNDVweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBnbGl0Y2gtYWZ0ZXIge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxMHB4LCA1MHB4LCAzNHB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDRweCwgNzBweCwgMjJweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAxMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LCA1MHB4LCAxN3B4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDE1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg3cHgsIDEyNXB4LCAzNHB4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAyMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTFweCwgMTE1cHgsIDQ1cHgsIDMwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDI1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzcHgsIDEyNXB4LCAxOHB4LCA3MHB4KTtcclxuICAgICAgfVxyXG4gICAgICAzMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzhweCwgNTBweCwgMTAwcHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDM1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgyMHB4LCA3MHB4LCAxMjBweCwgNXB4KTtcclxuICAgICAgfVxyXG4gICAgICA0MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNXB4LCAxMjVweCwgNDhweCwgOTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNDUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDE1cHgsIDQwcHgsIDQ0cHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDIxcHgsIDgwcHgsIDM3cHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDU1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxNHB4LCAxMjVweCwgNDBweCwgNDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNjAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDE2cHgsIDUwcHgsIDMwcHgsIDhweCk7XHJcbiAgICAgIH1cclxuICAgICAgNjUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDUwcHgsIDEyNXB4LCAxMjBweCwgNTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNzAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDEwcHgsIDcwcHgsIDQ0cHgsIDQwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDc1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg3MHB4LCAxMDBweCwgNDlweCwgMzBweCk7XHJcbiAgICAgIH1cclxuICAgICAgODAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDEzcHgsIDEyMHB4LCAxMjBweCwgOTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgODUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDM1cHgsIDgwcHgsIDkwcHgsIDMwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDkwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg1cHgsIDgwcHgsIDM1cHgsIDIwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDk1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzMHB4LCAxMjVweCwgMTIwcHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNTBweCwgNTBweCwgMTEwcHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgZ2xpdGNoLW5vaXNlIHtcclxuICAgICAgMCUgeyB0b3A6IDMwcHg7IGxlZnQ6IDI1cHg7IHdpZHRoOiAxMHB4OyB9XHJcbiAgICAgIDUlIHsgdG9wOiA5MHB4OyBsZWZ0OiAxMTBweDsgd2lkdGg6IDIwcHg7IH1cclxuICAgICAgMTAlIHsgdG9wOiA0MHB4OyBsZWZ0OiA1MHB4OyB3aWR0aDogNXB4OyB9XHJcbiAgICAgIDE1JSB7IHRvcDogOTBweDsgbGVmdDogMjBweDsgd2lkdGg6IDIwcHg7IH1cclxuICAgICAgMjAlIHsgdG9wOiA1MHB4OyBsZWZ0OiAxMTBweDsgd2lkdGg6IDVweDsgfVxyXG4gICAgICAyNSUgeyB0b3A6IDkwcHg7IGxlZnQ6IDMwcHg7IHdpZHRoOiAyMHB4OyB9XHJcbiAgICAgIDMwJSB7IHRvcDogOTBweDsgbGVmdDogMTEwcHg7IHdpZHRoOiAxMHB4OyB9XHJcbiAgICAgIDM1JSB7IHRvcDogNDBweDsgbGVmdDogNTBweDsgd2lkdGg6IDVweDsgfVxyXG4gICAgICA0MCUgeyB0b3A6IDkwcHg7IGxlZnQ6IDQwcHg7IHdpZHRoOiAyMHB4OyB9XHJcbiAgICAgIDQ1JSB7IHRvcDogNTBweDsgbGVmdDogMTEwcHg7IHdpZHRoOiA1cHg7IH1cclxuICAgICAgNTAlIHsgdG9wOiAzMHB4OyBsZWZ0OiA1MHB4OyB3aWR0aDogMTBweDsgfVxyXG4gICAgICA1NSUgeyB0b3A6IDcwcHg7IGxlZnQ6IDMwcHg7IHdpZHRoOiAyMHB4OyB9XHJcbiAgICAgIDYwJSB7IHRvcDogOTBweDsgbGVmdDogMTEwcHg7IHdpZHRoOiA1cHg7IH1cclxuICAgICAgNjUlIHsgdG9wOiA0MHB4OyBsZWZ0OiAxMTBweDsgd2lkdGg6IDIwcHg7IH1cclxuICAgICAgNzAlIHsgdG9wOiA1MHB4OyBsZWZ0OiA1MHB4OyAgd2lkdGg6IDEwcHg7IH1cclxuICAgICAgNzUlIHsgdG9wOiA5MHB4OyBsZWZ0OiA1MHB4OyB3aWR0aDogMjBweDsgfVxyXG4gICAgICA4MCUgeyB0b3A6IDMwcHg7IGxlZnQ6IDcwcHg7IHdpZHRoOiA1cHg7IH1cclxuICAgICAgODUlIHsgdG9wOiA5MHB4OyBsZWZ0OiA4MHB4OyB3aWR0aDogMTBweDsgfVxyXG4gICAgICA5MCUgeyB0b3A6IDUwcHg7IGxlZnQ6IDQwcHg7IHdpZHRoOiA1cHg7IH1cclxuICAgICAgOTUlIHsgdG9wOiA0MHB4OyBsZWZ0OiA3MHB4OyB3aWR0aDogMjBweDsgfVxyXG4gICAgICAxMDAlIHsgdG9wOiAzMHB4OyBsZWZ0OiA1MHB4OyB3aWR0aDogNXB4OyB9XHJcbiAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIHNoYWRvdy5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9nby1ib3hcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm92ZXJcIj5DbGllbnQtc2lkZTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImdsaXRjaFwiPkpTPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibm9pc2VcIj48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lIChcclxuICBcImdsaXRjaC1sb2dvXCIsXHJcbiAgR2xpdGNoTG9nb1xyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbGl0Y2hMb2dvXHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dyaWQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dyaWQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ncmlkLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIid1c2Ugc3RyaWN0J1xyXG5cclxuY2xhc3MgTWFpbk1lbnVDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyggeyBtb2RlOiBcImNsb3NlZFwiIH0gKVxyXG4gICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgKCBcInBhZ2UtZWxlbWVudFwiIClbMF1cclxuICAgIHRoaXMuY291cnNlID0gY3JlYXRlUGF0aCggXCJsZXNzb25zXCIsIFwiXCIgKVxyXG4gICAgdGhpcy5hc3NldHMgPSBjcmVhdGVQYXRoKCBcInNyY1wiLCBcIlwiIClcclxuICAgIHRoaXMubWVudU9wdGlvbnMgPSBbXVxyXG4gICAgdGhpcy5zdWJtZW51T3B0aW9ucyA9IFtdXHJcbiAgICB0aGlzLnN0YXRlID0gXCJjbG9zZVwiXHJcbiAgfVxyXG4gIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgIHRoaXMuc2hhZG93LmlubmVySFRNTCArPSBgXHJcblxyXG4gICAgICA8Z3JhcGhpYy1oZWFkZXI+PC9ncmFwaGljLWhlYWRlcj5cclxuICAgICAgPHN2Zy1uYXYtcGFuZWw+PC9zdmctbmF2LXBhbmVsPlxyXG4gICAgICA8YXNpZGU+XHJcbiAgICAgICAgPGRpdiBpZD1cIm1lbnVUb2dnbGVcIj5cclxuXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDx1bCBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtcmVzdWx0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGgzPjxhIGhyZWY9XCIvXCIgY2xhc3M9XCJob21lXCI+TGVzc29uczwvYT48L2gzPlxyXG4gICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgICBgXHJcbiAgICAgIHRoaXMuY2hlY2tib3ggPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggJyNtZW51VG9nZ2xlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyApXHJcbiAgICAgIHRoaXMubWVudSA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIiNtZW51XCIgKVxyXG5cclxuICAgICAgdGhpcy5zZXRTdHlsZXMoKVxyXG4gICAgICB0aGlzLmNoZWNrYm94Lm9uY2xpY2sgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSBcImNsb3NlXCIgPyBcImV4cGFuZFwiIDogXCJjbG9zZVwiXHJcbiAgICAgICAgdGhpcy5tZW51LnN0eWxlW1widHJhbnNpdGlvbi1kZWxheVwiXSA9IHRoaXMuc3RhdGUgPT09IFwiZXhwYW5kXCIgPyBcIjFzXCIgOiBcIjBzXCJcclxuICAgICAgICB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCJzdmctbmF2LXBhbmVsXCIgKS5kaXNwYXRjaEV2ZW50ICggbmV3IEV2ZW50ICggdGhpcy5zdGF0ZSApIClcclxuICAgICAgfS5iaW5kICh0aGlzKVxyXG5cclxuICAgICAgdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiLmhvbWVcIiApLm9uY2xpY2sgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gIXRoaXMuY2hlY2tib3guY2hlY2tlZFxyXG4gICAgICAgICAgdGhpcy5jaGVja2JveC5kaXNwYXRjaEV2ZW50ICggbmV3IEV2ZW50ICggXCJjbGlja1wiICkgKVxyXG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7IHJvdXRlOiBldmVudC50YXJnZXQuaHJlZiB9LCBcImhvbWVcIiwgZXZlbnQudGFyZ2V0LmhyZWYgKVxyXG4gICAgICAgICAgdGhpcy52aWV3LnNldEF0dHJpYnV0ZSAoIFwic3JjXCIsIGAke2NyZWF0ZVBhdGgoIFwibGVzc29uc1wiLCBcInN0YXJ0LXBhZ2UubWRcIiApfWAgKVxyXG4gICAgICB9LmJpbmQgKCB0aGlzIClcclxuXHJcbiAgICAgIHRoaXMuZ2V0RGF0YSAoKS50aGVuIChcclxuICAgICAgICAoKSA9PiB0aGlzLnNoYWRvdy5nZXRFbGVtZW50QnlJZCAoIFwic2VhcmNoLWlucHV0XCIgKVxyXG4gICAgICAgICAgICAub25pbnB1dCA9IHRoaXMuc2VhcmNoLmJpbmQgKCB0aGlzIClcclxuICAgICAgKVxyXG4gIH1cclxuICBzZWFyY2ggKCBldmVudCApIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2hhZG93LmdldEVsZW1lbnRCeUlkICggXCJzZWFyY2gtcmVzdWx0XCIgKVxyXG4gICAgICByZXN1bHQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICBpZiAoICFldmVudC50YXJnZXQudmFsdWUgKSB7XHJcbiAgICAgICAgICBmb3IgKCBsZXQgaXRlbSBvZiB0aGlzLm1lbnVPcHRpb25zICkgdGhpcy5zaG93ICggaXRlbSApXHJcbiAgICAgICAgICBmb3IgKCBsZXQgaXRlbSBvZiB0aGlzLnN1Ym1lbnVPcHRpb25zICkgdGhpcy5zaG93ICggaXRlbSApXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBsZXQgc3RyaW5ncyA9IHRoaXMua2V5d29yZHMuZ2V0QWxsICggZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkgKVxyXG4gICAgICBpZiAoIHN0cmluZ3MubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgICAgcmVzdWx0LmlubmVydGV4dCA9IFwiTm90IGZvdW5kLi4uXCJcclxuICAgICAgICAgIGZvciAoIGxldCBpdGVtIG9mIHRoaXMubWVudU9wdGlvbnMgKSB0aGlzLmhpZGUgKCBpdGVtIClcclxuICAgICAgICAgIGZvciAoIGxldCBpdGVtIG9mIHRoaXMuc3VibWVudU9wdGlvbnMgKSB0aGlzLmhpZGUgKCBpdGVtIClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBpdGVtcyA9IHN0cmluZ3MubWFwICggaXRlbSA9PiBKU09OLnBhcnNlKCBpdGVtICkgKVxyXG4gICAgICBmb3IgKCBsZXQgb3B0aW9uIG9mIHRoaXMubWVudU9wdGlvbnMgKSB7XHJcbiAgICAgICAgICBpdGVtcy5maW5kICggaXRlbSA9PiBvcHRpb24uZmlyc3RFbGVtZW50Q2hpbGQuaWQgPT09IGl0ZW0ubGVzc29uICkgP1xyXG4gICAgICAgICAgICAgICB0aGlzLnNob3cgKCBvcHRpb24gKSA6IHRoaXMuaGlkZSAoIG9wdGlvbiApXHJcbiAgICAgIH1cclxuICAgICAgZm9yICggbGV0IG9wdGlvbiBvZiB0aGlzLnN1Ym1lbnVPcHRpb25zICkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBvcHRpb24ucXVlcnlTZWxlY3RvciAoIFwiYVwiICkudGV4dENvbnRlbnRcclxuICAgICAgICAgIGl0ZW1zLmZpbmQgKCBpdGVtID0+IGNvbnRlbnQgPT09IGl0ZW0udG9waWMgKSA/XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93ICggb3B0aW9uICkgOiB0aGlzLmhpZGUgKCBvcHRpb24gKVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGFkZEVsZW0gKCB0YWdOYW1lLCBjb250YWluZXIgKSB7XHJcbiAgICAgIHJldHVybiBjb250YWluZXIuYXBwZW5kQ2hpbGQgKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggdGFnTmFtZSApIClcclxuICB9XHJcbiAgc2V0U3R5bGVzICgpIHtcclxuICAgIGZldGNoKCBgc3JjL21haW4tbWVudS5jc3NgIClcclxuICAgICAgLnRoZW4gKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgY3NzID0+IHRoaXMuc2hhZG93LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIilcclxuICAgICAgICAgICkudGV4dENvbnRlbnQgPSBjc3NcclxuICAgICAgICApXHJcbiAgfVxyXG4gIGhpZGUgKCBlbGVtICkge1xyXG4gICAgICBlbGVtLmRpc3BhdGNoRXZlbnQgKCBuZXcgRXZlbnQgKCBcImhpZGVcIiApIClcclxuICB9XHJcbiAgc2hvdyAoIGVsZW0gKSB7XHJcbiAgICAgIGVsZW0uZGlzcGF0Y2hFdmVudCAoIG5ldyBFdmVudCAoIFwic2hvd1wiICkgKVxyXG4gIH1cclxuICBoaWRlQ2FsbGJhY2sgKCBldmVudCApIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIH1cclxuICBzaG93Q2FsbGJhY2sgKCBldmVudCApIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICB9XHJcbiAgc2V0TGlzdGVuZXJzICggZWxlbSApIHtcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyICggXCJzaG93XCIsIHRoaXMuc2hvd0NhbGxiYWNrIClcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyICggXCJoaWRlXCIsIHRoaXMuaGlkZUNhbGxiYWNrIClcclxuICB9XHJcbiAgYXN5bmMgZ2V0RGF0YSAoKSB7XHJcbiAgICAgIHRoaXMubWVudURhdGEgPSBhd2FpdCAoIGF3YWl0IGZldGNoICggYHNyYy9tYWluLW1lbnUuanNvbmAgKSApLmpzb24oKVxyXG4gICAgICB0aGlzLmtleXdvcmRzID0gbmV3IEZvcm1EYXRhXHJcbiAgICAgIGNvbnN0IHRvcExldmVsID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiI21lbnVcIiApXHJcblxyXG4gICAgICBmb3IgKCBsZXQgbGVzc29uIG9mIHRoaXMubWVudURhdGEgKSB7XHJcbiAgICAgICAgICBsZXQgbGVzc29uSXRlbSA9IHRoaXMuYWRkRWxlbSAoIFwibGlcIiwgdG9wTGV2ZWwgKVxyXG4gICAgICAgICAgdGhpcy5tZW51T3B0aW9ucy5wdXNoICggbGVzc29uSXRlbSApXHJcbiAgICAgICAgICB0aGlzLnNldExpc3RlbmVycyAoIGxlc3Nvbkl0ZW0gKVxyXG4gICAgICAgICAgbGVzc29uSXRlbS5pbm5lckhUTUwgPSB0aGlzLmdldExlc3NvblRlbXBsYXRlICggbGVzc29uLmlkIClcclxuICAgICAgICAgIGxlc3Nvbkl0ZW0uc3ViTGV2ZWwgPSBsZXNzb25JdGVtLnF1ZXJ5U2VsZWN0b3IgKCBcInVsLnN1Yi1sZXZlbFwiIClcclxuICAgICAgICAgIGxldCBpbmRleCA9IDBcclxuICAgICAgICAgIGZvciAoIGxldCBpdGVtIG9mIGxlc3Nvbi5pdGVtcyApIHtcclxuICAgICAgICAgICAgICBsZXQgZWxlbSA9IHRoaXMuYWRkRWxlbSAoIFwibGlcIiwgbGVzc29uSXRlbS5zdWJMZXZlbCApXHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtZW51T3B0aW9ucy5wdXNoICggZWxlbSApXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMgKCBlbGVtIClcclxuICAgICAgICAgICAgICBlbGVtLnN0eWxlW1wiYW5pbWF0aW9uLWRlbGF5XCJdID0gaW5kZXgrKyA8IDEwID8gYDAuJHtpbmRleH1zYCA6IGAxLiR7aW5kZXggLSA5fXNgXHJcbiAgICAgICAgICAgICAgbGV0IGFuY2hvciA9IHRoaXMuYWRkRWxlbSAoIFwiYVwiLCBlbGVtIClcclxuICAgICAgICAgICAgICBhbmNob3IuaHJlZiA9IGl0ZW0ucmVmXHJcbiAgICAgICAgICAgICAgYW5jaG9yLnRleHRDb250ZW50ID0gaXRlbS50aXRsZVxyXG4gICAgICAgICAgICAgIGFuY2hvci5maWxlTmFtZSA9IGl0ZW0ucmVmXHJcblxyXG4gICAgICAgICAgICAgIGFuY2hvci5vbmNsaWNrID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSAhdGhpcy5jaGVja2JveC5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3guZGlzcGF0Y2hFdmVudCAoIG5ldyBFdmVudCAoIFwiY2xpY2tcIiApIClcclxuICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7IHJvdXRlOiBldmVudC50YXJnZXQuaHJlZiB9LCBldmVudC50YXJnZXQuaW5uZXJUZXh0LCBldmVudC50YXJnZXQuaHJlZiApXHJcbiAgICAgICAgICAgICAgICAgIGxldCBzaHV0dGVyID0gdGhpcy5hZGRFbGVtICggXCJzaHV0dGVyLWVsZW1lbnRcIiwgZG9jdW1lbnQuYm9keSApXHJcbiAgICAgICAgICAgICAgICAgIHNodXR0ZXIuc3R5bGUgPSBgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7YFxyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0ICggKCkgPT4gc2h1dHRlci5yZW1vdmUoKSwgMTAwMCApXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRBdHRyaWJ1dGUgKCBcInNyY1wiLCAgYCR7Y3JlYXRlUGF0aCggXCJsZXNzb25zXCIsIGV2ZW50LnRhcmdldC5maWxlTmFtZSArIFwiLm1kXCIgKX1gIClcclxuICAgICAgICAgICAgICB9LmJpbmQgKCB0aGlzIClcclxuXHJcbiAgICAgICAgICAgICAgZm9yICggbGV0IGtleXdvcmQgb2YgaXRlbS5rZXl3b3JkcyApXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMua2V5d29yZHMuYXBwZW5kIChcclxuICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlc3NvbjogbGVzc29uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5yZWZcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICBnZXRMZXNzb25UZW1wbGF0ZSAoIGxlc3NvbklkICkge1xyXG4gICAgICByZXR1cm4gYDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIiR7bGVzc29uSWR9XCIgbmFtZT1cImxlc3NvbnNcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiJHtsZXNzb25JZH1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImljb25cIj48L2Rpdj5cclxuICAgICAgICAgIDxiPiR7bGVzc29uSWR9PC9iPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwic3ViLWxldmVsXCI+PC91bD5gXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXHJcbiAgXCJtYWluLW1lbnUtY29tcG9uZW50XCIsXHJcbiAgTWFpbk1lbnVDb21wb25lbnRcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk1lbnVDb21wb25lbnRcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jbGFzcyBNZW51Q29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3cgKHsgbW9kZTogXCJvcGVuXCIgfSlcclxuICAgICAgdGhpcy5zaGFkb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUx1Y2tpZXN0K0d1eXxQb3BwaW5zfFJvYm90b3xNb250c2VycmF0fCZhbXA7ZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInNyYy9tZW51LmNzc1wiPlxyXG4gICAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgIDx1bCBpZD1cIm1haW4tbmF2XCIgY2xhc3M9XCJkcm9wZG93blwiPjwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIHRoaXMubWVudUNvbnRlbnQgPSB0aGlzLnNoYWRvdy5nZXRFbGVtZW50QnlJZChcIm1haW4tbmF2XCIpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsgJ29wdGlvbnMnXVxyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayggYXR0ck5hbWUsIG9sZFZhbCwgbmV3VmFsICkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIuZHJvcGRvd25cIiApXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBpZiAoICFuZXdWYWwgKSByZXR1cm5cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlICggdGhpcy5nZXRBdHRyaWJ1dGUgKCBcIm9wdGlvbnNcIiApIClcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSAoIFwib3B0aW9uc1wiLCBcIlwiIClcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCAoXHJcbiAgICAgICAgICAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIFwibGlcIiApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgbGkuc3R5bGVbXCJhbmltYXRpb24tZGVsYXlcIl0gPSBpbmRleCA8IDEwID8gYDAuJHtpbmRleH1zYCA6IGAxLiR7aW5kZXgtOX1zYFxyXG4gICAgICAgICAgICBsaS5jbGFzc05hbWUgPSBgb3B0aW9uJHtvcHRpb24ubGV2ZWx9YFxyXG4gICAgICAgICAgICBsZXQgcmVmID0gbGkuYXBwZW5kQ2hpbGQgKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJhXCIgKSApXHJcbiAgICAgICAgICAgIHJlZi5pbm5lckhUTUwgPSBvcHRpb24udGV4dFxyXG4gICAgICAgICAgICByZWYuaHJlZiA9IGAjJHtlbmNvZGVVUkkgKCBvcHRpb24udGV4dCApfWBcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNZW51Q29tcG9uZW50LnByb3RvdHlwZS5zdHlsZUNvbnRlbnQgPSBgXHJcbi8vXHJcbi8vIGBcclxuTWVudUNvbXBvbmVudC5wcm90b3R5cGUudGVtcGxhdGUgPSBgXHJcbjxuYXYgaWQ9XCJuYXZcIiBjbGFzcz1cIm1haW4tbmF2XCI+XHJcblxyXG4gIDxsaT5cclxuXHJcblx0ICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duXCI+PC91bD5cclxuXHJcbiAgPC9saT5cclxuPC9uYXY+XHJcbmBcclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcclxuICBcIm1lbnUtY29tcG9uZW50XCIsXHJcbiAgTWVudUNvbXBvbmVudFxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Q29tcG9uZW50XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vaXNlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2lzZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vaXNlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5mcmFnbWVudHMgPSB7fTtcclxuICAgIHRoaXMucGFnZUNvbnRlbnQgPSBcIlwiO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudExpc3QgPSBbXTtcclxuICAgIHRoaXMubWFpbiA9IHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIikpO1xyXG4gICAgbGV0IGZvb3RlciA9IHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKSk7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MICs9IGBcclxuICAgIDxicj48YnI+PGJyPjxicj48YnI+PGJyPlxyXG4gICAgPGZpZ3VyZSBjbGFzcz1cIm92ZXJzaGFkb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm92ZXJzaGFkb3dfX3NoYWRvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyc2hhZG93X190ZXh0XCI+Jm5ic3A7PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9maWd1cmU+YDtcclxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibWVudS1jb21wb25lbnRcIilbMF07XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIFxyXG4gICAgbGV0IHBhdGggPSBsb2NhdGlvbi5ob3N0ID09PSBcImdhcmV2bmEuZ2l0aHViLmlvXCIgPyBcIi9qcy1sZXNzb25zL1wiIDogXCIvXCJcclxuICAgIGxldCBwYXRoTmV3ID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoIGxvY2F0aW9uLmhvc3QgPT09IFwiZ2FyZXZuYS5naXRodWIuaW9cIiA/IFwiL2pzLWxlc3NvbnMvXCIgOiBcIi9cIiApLmpvaW4gKFwiXCIpO1xyXG4gICAgY29uc29sZS5sb2cgKCBwYXRoTmV3ICk7XHJcbiAgICBsZXQgc3RhcnRQYXRoID0gYCR7Y3JlYXRlUGF0aChcImxlc3NvbnNcIiwgbG9jYXRpb24ucGF0aG5hbWUgPT09IHBhdGggPyBcInN0YXJ0LXBhZ2VcIiA6IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpKX1gO1xyXG4gICAgLy8gbGV0IHN0YXJ0UGF0aCA9IGAke2NyZWF0ZVBhdGgoXCJsZXNzb25zXCIsIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiA/IFwic3RhcnQtcGFnZVwiIDogbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkpfWA7XHJcbiAgICBjb25zb2xlLmxvZyAoIHN0YXJ0UGF0aCApXHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtzdGFydFBhdGh9Lm1kYCk7XHJcbiAgICB0aGlzLnN0eWxlU2hlZXQgPSB0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSk7XHJcbiAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgIGZldGNoKGNyZWF0ZVBhdGgoXCJzcmNcIiwgXCJmb3ItcmFpbmJvdy5jc3NcIikpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKSxcclxuICAgICAgZmV0Y2goY3JlYXRlUGF0aChcInNyY1wiLCBcInBhZ2UuY3NzXCIpKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSksXHJcbiAgICAgIGZldGNoKGNyZWF0ZVBhdGgoXCJzcmNcIiwgXCJpY29ucy5jc3NcIikpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKV0pXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0aGlzLnN0eWxlU2hlZXQudGV4dENvbnRlbnQgKz0gcmVzcG9uc2Uuam9pbihTdHJpbmcuZnJvbUNoYXJDb2RlKDEwKSkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gWydzcmMnXTtcclxuICB9XHJcblxyXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcclxuICAgIHRoaXMuZnJhZ21lbnRzID0ge307XHJcbiAgICB0aGlzLnBhZ2VDb250ZW50ID0gXCJcIjtcclxuICAgIHRoaXMucGFnZUNvbnRlbnRMaXN0ID0gW107XHJcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRoaXMubWVudS5zZXRBdHRyaWJ1dGUoXCJvcHRpb25zXCIsIFwiXCIpO1xyXG4gICAgdGhpcy5nZXREYXRhKG5ld1ZhbCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKGZpbGUpIHtcclxuICAgIGZldGNoKGZpbGUpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5wYXJzZVBhZ2VDb250ZW50KHJlc3BvbnNlKSkpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VUZXh0RnJhZ21lbnQodGV4dEZyYWdtZW50KSB7XHJcbiAgICBsZXQgbGluZXMgPSB0ZXh0RnJhZ21lbnQubGVuZ3RoID8gdGV4dEZyYWdtZW50LnNwbGl0KFwiXFxuXCIpIDogW107XHJcbiAgICBsaW5lcy5mb3JFYWNoKGxpbmUgPT4gbGluZS5sZW5ndGggPyB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5wYXJzZUxpbmUobGluZSkpIDogbnVsbCk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVBhZ2VDb250ZW50KHBhZ2VDb250ZW50KSB7XHJcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRoaXMucGFnZUNvbnRlbnQgPSBwYWdlQ29udGVudDtcclxuICAgIHRoaXMucGFyc2VUYWJsZXMoKTtcclxuICAgIHRoaXMucmVnRXhwcnMucGFnZUNvbnRlbnQgPSB0aGlzLnBhZ2VDb250ZW50O1xyXG4gICAgdGhpcy5mcmFnbWVudHMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBmcmFnbWVudCBvZiB0aGlzLnJlZ0V4cHJzKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5mcmFnbWVudHMsIGZyYWdtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2VDb250ZW50ID0gdGhpcy5mcmFnbWVudHMucGFnZUNvbnRlbnQ7XHJcbiAgICBkZWxldGUgdGhpcy5mcmFnbWVudHMucGFnZUNvbnRlbnQ7XHJcbiAgICBsZXQgaW5zZXJ0aW9uUG9pbnRzID0gdGhpcy5wYWdlQ29udGVudC5tYXRjaCgvISEhLlteISEhXSshISEvZyk7XHJcbiAgICAhaW5zZXJ0aW9uUG9pbnRzID8gbnVsbCA6IGluc2VydGlvblBvaW50cy5mb3JFYWNoKGluc2VydGlvblBvaW50ID0+IHtcclxuICAgICAgbGV0IHRtcCA9IHRoaXMucGFnZUNvbnRlbnQuc3BsaXQoaW5zZXJ0aW9uUG9pbnQpO1xyXG4gICAgICBpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50LnNsaWNlKDMsIC0zKTtcclxuXHJcbiAgICAgIHdoaWxlICh0bXAubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGxldCBmcmFnbWVudCA9IHRtcC5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMucGFyc2VUZXh0RnJhZ21lbnQoZnJhZ21lbnQpO1xyXG4gICAgICAgIHRoaXNbYGNyZWF0ZSR7dGhpcy5mcmFnbWVudHNbaW5zZXJ0aW9uUG9pbnRdLnR5cGV9YF0odGhpcy5mcmFnbWVudHNbaW5zZXJ0aW9uUG9pbnRdLmNvbnRlbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnBhZ2VDb250ZW50ID0gdG1wLmpvaW4oXCJcIik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucGFnZUNvbnRlbnQubGVuZ3RoID8gdGhpcy5wYXJzZVRleHRGcmFnbWVudCh0aGlzLnBhZ2VDb250ZW50KSA6IG51bGw7XHJcbiAgICB0aGlzLm1lbnUuc2V0QXR0cmlidXRlKFwib3B0aW9uc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnBhZ2VDb250ZW50TGlzdCkpO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudCA9IHRoaXMuY3JlYXRlVGFibGVzKHRoaXMucGFnZUNvbnRlbnQpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBhZ2UtZWxlbWVudFwiKS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIsIFwicHJlXCIpLmZvckVhY2goZWxlbSA9PiBlbGVtLmlubmVySFRNTC50cmltKCkgPyB0aGlzLmluc2VydFRhYmxlKGVsZW0pIDogZWxlbS5yZW1vdmUoKSk7XHJcbiAgfSAvLyBCbG9jayBsZXZlbFxyXG5cclxuXHJcbiAgaW5zZXJ0VGFibGUoZWxlbSkge1xyXG4gICAgbGV0IGNvbnQgPSBlbGVtLmlubmVySFRNTC5tYXRjaCgvXFxbezN9XFxkXFxdezN9Lyk7XHJcbiAgICBpZiAoIWNvbnQpIHJldHVybjtcclxuICAgIGVsZW0uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYWJsZShjb250WzBdLnNsaWNlKDMsIC0zKSkpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VUYWJsZXMoKSB7XHJcbiAgICBsZXQgdG90YWwgPSB0aGlzLnBhZ2VDb250ZW50LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgdGhpcy50YWJsZXMgPSBbXTtcclxuICAgIGxldCB0YWJsZSwgc3RyaW5nLCB4O1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0VGFibGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMucGFnZUNvbnRlbnQgPSB0aGlzLnBhZ2VDb250ZW50LnNwbGl0KHN0cmluZykuam9pbihgW1tbJHt0aGlzLnRhYmxlcy5sZW5ndGh9XV1dYCk7XHJcbiAgICAgIHRoaXMudGFibGVzLnB1c2goW10pO1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZXNbdGhpcy50YWJsZXMubGVuZ3RoIC0gMV07XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgY29uc3QgZmlsbFRhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBzdHJpbmcgPSB0b3RhbC5zaGlmdCgpO1xyXG4gICAgICB4ID0gc3RyaW5nLm1hdGNoKC8oXlxcfCkoLikqXFx8L2dtKTtcclxuICAgICAgeCA/IHRhYmxlID0gc3RhcnRUYWJsZShzdHJpbmcpIDogbnVsbDtcclxuXHJcbiAgICAgIHdoaWxlICh4KSB7XHJcbiAgICAgICAgdGFibGUucHVzaCh4WzBdLnNsaWNlKDEsLTEpKTtcclxuICAgICAgICB0aGlzLnBhZ2VDb250ZW50ID0gdGhpcy5wYWdlQ29udGVudC5zcGxpdChzdHJpbmcpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgc3RyaW5nID0gdG90YWwuc2hpZnQoKTtcclxuICAgICAgICB4ID0gc3RyaW5nLm1hdGNoKC8oXlxcfCkoLikqXFx8Lyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRvdGFsLmxlbmd0aCA/IGZpbGxUYWJsZSh0b3RhbCkgOiBudWxsO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGZpbGxUYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGFibGVzKGNvbnRlbnQpIHtcclxuICAgIGxldCB0YWJsZXMgPSB0aGlzLnBhZ2VDb250ZW50Lm1hdGNoKC9cXFt7M31cXGRcXF17M30vZ20pO1xyXG4gICAgaWYgKCF0YWJsZXMpIHJldHVybjtcclxuICAgIHRhYmxlcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5wYWdlQ29udGVudC5zcGxpdChpdGVtKS5qb2luKHRoaXMuY3JlYXRlVGFibGUocGFyc2VJbnQoaXRlbS5zbGljZSgzLCAtMykpKS5pbm5lckhUTUwpKTsgLy8gcmV0dXJuIGNvbnRlbnRcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhYmxlKG51bSkge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cclxuICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLnRhYmxlc1tudW1dKSB7XHJcbiAgICAgIGxldCB0ciA9IHRhYmxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XHJcbiAgICAgIHJvdy5zcGxpdChcInxcIikuZm9yRWFjaChjZWxsID0+IHRyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSkuaW5uZXJIVE1MID0gdGhpcy5wYXJzZUxpbmUoY2VsbC50cmltKCkpLm91dGVySFRNTCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2xpZGVyKGZyYWdtZW50KSB7XHJcbiAgICBsZXQgc2xpZGVyU3RhcnQgPSB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSk7XHJcbiAgICBzbGlkZXJTdGFydC5jbGFzc05hbWUgPSBcInNsaWRlci1idXR0b25cIjtcclxuXHJcbiAgICBzbGlkZXJTdGFydC5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZS1zbGlkZXInKSk7XHJcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwicGljdHVyZXNcIiwgSlNPTi5zdHJpbmdpZnkoZnJhZ21lbnQuc2xpY2UoMywgLTEpLnNwbGl0KFwiLFwiKSkpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29kZUNvbXBvbmVudChmcmFnbWVudCkge1xyXG4gICAgbGV0IGxhbmcgPSBmcmFnbWVudC5zbGljZSg0LCBmcmFnbWVudC5zZWFyY2goU3RyaW5nLmZyb21DaGFyQ29kZSgxMCkpKTtcclxuICAgIGxldCBzbmlwcGV0ID0gdGhpcy5tYWluLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlLXNuaXBwZXRcIikpO1xyXG4gICAgc25pcHBldC50ZXh0Q29udGVudCA9IGZyYWdtZW50LnNsaWNlKDQgKyBsYW5nLmxlbmd0aCwgZnJhZ21lbnQubGVuZ3RoIC0gNCk7XHJcbiAgICBzbmlwcGV0LnNldEF0dHJpYnV0ZShcImhlYWRlclwiLCBsYW5nKTtcclxuICAgIHNuaXBwZXQuc2V0QXR0cmlidXRlKFwibGFuZ1wiLCBsYW5nKTtcclxuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChzbmlwcGV0KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNjcmlwdFNwb2lsZXIoZnJhZ21lbnQpIHtcclxuICAgIGxldCBsYW5nID0gZnJhZ21lbnQuc2xpY2UoNCwgZnJhZ21lbnQuc2VhcmNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMTApKSk7XHJcbiAgICBsZXQgc2NyaXB0U3BvaWxlciA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0LXNwb2lsZXJcIikpO1xyXG4gICAgbGV0IHNjcmlwdFNwb2lsZXJDb250ZW50ID0gdGhpcy5tYWluLmFwcGVuZENoaWxkKGxhbmcudHJpbSgpID09PSBcImNvbnNvbGVcIiA/IHRoaXMuY3JlYXRlQ29uc29sZU91dHB1dChmcmFnbWVudC5zbGljZSgxLCAtMSkpIDogdGhpcy5jcmVhdGVDb2RlU25pcHBldChmcmFnbWVudC5zbGljZSg0ICsgbGFuZy5sZW5ndGgsIGZyYWdtZW50Lmxlbmd0aCAtIDQpLCBsYW5nKSk7XHJcbiAgICBzY3JpcHRTcG9pbGVyLnNldEF0dHJpYnV0ZShcImhlYWRlclwiLCBsYW5nKTtcclxuICAgIHNjcmlwdFNwb2lsZXIuY29udGVudCA9IHNjcmlwdFNwb2lsZXJDb250ZW50O1xyXG4gICAgc2NyaXB0U3BvaWxlci5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIFwicmVhZHlcIik7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTY3JpcHRTbmlwcGV0KGZyYWdtZW50KSB7XHJcbiAgICBsZXQgbGFuZyA9IGZyYWdtZW50LnNsaWNlKDMsIGZyYWdtZW50LnNlYXJjaChTdHJpbmcuZnJvbUNoYXJDb2RlKDEwKSkpO1xyXG4gICAgcmV0dXJuIHRoaXMubWFpbi5hcHBlbmRDaGlsZChsYW5nLnRyaW0oKSA9PT0gXCJjb25zb2xlXCIgPyB0aGlzLmNyZWF0ZUNvbnNvbGVPdXRwdXQoZnJhZ21lbnQpIDogdGhpcy5jcmVhdGVDb2RlU25pcHBldChmcmFnbWVudC5zbGljZSgzICsgbGFuZy5sZW5ndGgsIGZyYWdtZW50Lmxlbmd0aCAtIDMpLCBsYW5nKSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb25zb2xlT3V0cHV0KGZyYWdtZW50KSB7XHJcbiAgICBsZXQgc25pcHBldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XHJcbiAgICBzbmlwcGV0LnRleHRDb250ZW50ID0gZnJhZ21lbnQuc2xpY2UoMTAsIGZyYWdtZW50Lmxlbmd0aCAtIDMpO1xyXG4gICAgc25pcHBldC5jbGFzc05hbWUgPSBcImJsYWNrXCI7XHJcbiAgICByZXR1cm4gc25pcHBldDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvZGVTbmlwcGV0KGZyYWdtZW50LCBsYW5nKSB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxwcmU+PGNvZGUgZGF0YS1sYW5ndWFnZT0ke2xhbmd9PiR7ZnJhZ21lbnQudHJpbSgpfTwvY29kZT48L3ByZT5gO1xyXG4gICAgUmFpbmJvdy5jb2xvcihkaXYpO1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJlbG9hZGVyXCIpKS5mb3JFYWNoKGVsZW0gPT4gZWxlbS5yZW1vdmUoKSk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29kZU91dHB1dChmcmFnbWVudCkge1xyXG4gICAgbGV0IG91dHB1dFNjcmVlbiA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZS1vdXRwdXRcIikpO1xyXG4gICAgb3V0cHV0U2NyZWVuLnNldEF0dHJpYnV0ZShcInNjcmlwdFwiLCBmcmFnbWVudC5zbGljZSgzLCAtMykpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3BvaWxlcihmcmFnbWVudCkge1xyXG4gICAgbGV0IHNwb2lsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BvaWxlci1jb21wb25lbnRcIik7XHJcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoc3BvaWxlcik7XHJcbiAgICBsZXQgaGVhZCA9IGZyYWdtZW50Lm1hdGNoKC8oXFxeezN9KVxcWyguKylcXF0vKVswXTtcclxuICAgIHNwb2lsZXIuc2V0QXR0cmlidXRlKFwiaGVhZGVyXCIsIGhlYWQuc2xpY2UoNCwgLTEpKTtcclxuICAgIHNwb2lsZXIuY29udGVudCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldFNuaXBwZXQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBzdHJpbmcuaW5kZXhPZihcIiEhIVwiKSA8IDAgPyBudWxsIDogdGhpcy5mcmFnbWVudHNbc3RyaW5nLnNsaWNlKDMsIC0zKV07XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q29kZVNuaXBwZXQgPSBmdW5jdGlvbiAoc25pcHBldCkge1xyXG4gICAgICBpZiAoc25pcHBldC50eXBlICE9PSBcIlNjcmlwdFNuaXBwZXRcIikgcmV0dXJuIG51bGw7XHJcbiAgICAgIGxldCBsYW5nID0gc25pcHBldC5jb250ZW50LnNsaWNlKDMsIHNuaXBwZXQuY29udGVudC5zZWFyY2goU3RyaW5nLmZyb21DaGFyQ29kZSgxMCkpKTtcclxuICAgICAgbGV0IHNjcmlwdFNuaXBwZXRDb250ZW50ID0gdGhpcy5tYWluLmFwcGVuZENoaWxkKGxhbmcudHJpbSgpID09PSBcImNvbnNvbGVcIiA/IHRoaXMuY3JlYXRlQ29uc29sZU91dHB1dChzbmlwcGV0LmNvbnRlbnQuc2xpY2UoMSwgLTEpKSA6IHRoaXMuY3JlYXRlQ29kZVNuaXBwZXQoc25pcHBldC5jb250ZW50LnNsaWNlKDMgKyBsYW5nLmxlbmd0aCwgc25pcHBldC5jb250ZW50Lmxlbmd0aCAtIDMpLCBsYW5nKSk7XHJcbiAgICAgIHNwb2lsZXIuY29udGVudC5wdXNoKHNjcmlwdFNuaXBwZXRDb250ZW50KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgY29uc3QgZ2V0VGFibGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgIGlmICghc3RyaW5nLm1hdGNoKC9cXFt7M31cXGRcXF17M30vKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIHNwb2lsZXIuY29udGVudC5wdXNoKHRoaXMuY3JlYXRlVGFibGUocGFyc2VJbnQoc3RyaW5nLnRyaW0oKS5zbGljZSgzLCAtMykpKSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGZyYWdtZW50LnNwbGl0KGhlYWQpLmpvaW4oXCJcIikuc2xpY2UoMCwgLTMpLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGxpbmUgPT4gZ2V0U25pcHBldChsaW5lKSA/IGdldENvZGVTbmlwcGV0KGdldFNuaXBwZXQobGluZSkpIDogZ2V0VGFibGUobGluZSkgPyBudWxsIDogc3BvaWxlci5jb250ZW50LnB1c2godGhpcy5wYXJzZUxpbmUobGluZSkpKTtcclxuICAgIHNwb2lsZXIuc2V0QXR0cmlidXRlKFwicmVhZHlcIiwgXCIxXCIpO1xyXG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMaW5lIGxldmVsID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gIHBhcnNlSW1hZ2UobGluZSkge1xyXG4gICAgbGV0IHN0cmluZyA9IGxpbmUubWF0Y2goLyFcXFtcXF1cXCguK1xcKS8pO1xyXG4gICAgbGV0IHVybCA9IHN0cmluZyA/IGxpbmUubWF0Y2goLyFcXFtcXF1cXCguK1xcKS8pWzBdLnNsaWNlKDQsIC0xKSA6IG51bGw7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBlbGVtLnNyYyA9IHVybC5pbmRleE9mKFwiaHR0cFwiKSA9PT0gMCA/IHVybCA6IGV2YWwodXJsKTtcclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VIZWFkZXIobGluZSkge1xyXG4gICAgbGV0IGhlYWRlckxldmVsID0gbGluZS5tYXRjaCgvXlsjXXsxLDZ9Lyk7XHJcbiAgICBpZiAoIWhlYWRlckxldmVsKSByZXR1cm4ge1xyXG4gICAgICBsZXZlbDogMCxcclxuICAgICAgdGV4dDogbGluZVxyXG4gICAgfTtcclxuICAgIGxldCB0ZXh0ID0gbGluZS5zbGljZShoZWFkZXJMZXZlbFswXS5sZW5ndGgpO1xyXG4gICAgbGV0IGljb25zID0gdGV4dC5tYXRjaCgvIVxcWy5bXlxcXV0rXFxdL2cpO1xyXG4gICAgaWNvbnMgPyBpY29ucy5mb3JFYWNoKGljb24gPT4gdGV4dCA9IHRleHQuc3BsaXQoaWNvbikuam9pbihcIlwiKSkgOiBudWxsO1xyXG4gICAgbGV0IHJlZnMgPSB0ZXh0Lm1hdGNoKC9cXFsuW14oXStcXF1cXCguW15cXCldK1xcKS9nKTtcclxuICAgIHJlZnMgPyByZWZzLmZvckVhY2gocmVmID0+IHtcclxuICAgICAgbGV0IGNvbnRlbnQgPSByZWYuc3BsaXQoXCJdKFwiKVswXS5zbGljZSgxKTtcclxuICAgICAgdGV4dCA9IHRleHQuc3BsaXQocmVmKS5qb2luKGNvbnRlbnQpO1xyXG4gICAgfSkgOiBudWxsO1xyXG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpKS5uYW1lID0gZW5jb2RlVVJJKHRleHQudHJpbSgpKTtcclxuICAgIHRoaXMucGFnZUNvbnRlbnRMaXN0LnB1c2goe1xyXG4gICAgICBsZXZlbDogaGVhZGVyTGV2ZWxbMF0ubGVuZ3RoLFxyXG4gICAgICB0ZXh0OiB0ZXh0LnRyaW0oKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsZXZlbDogaGVhZGVyTGV2ZWxbMF0ubGVuZ3RoLFxyXG4gICAgICB0ZXh0OiBsaW5lID0gbGluZS5zcGxpdChoZWFkZXJMZXZlbFswXSkuam9pbihcIlwiKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHBhcnNlTGluZShsaW5lKSB7XHJcbiAgICBpZiAobGluZS5tYXRjaCgvWy1fXXszLDUwMDB9LykpIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICBsZXQgaW1nID0gdGhpcy5wYXJzZUltYWdlKGxpbmUpO1xyXG4gICAgaWYgKGltZykgcmV0dXJuIGltZztcclxuICAgIGxldCB7XHJcbiAgICAgIGxldmVsLFxyXG4gICAgICB0ZXh0XHJcbiAgICB9ID0gdGhpcy5wYXJzZUhlYWRlcihsaW5lKTtcclxuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsZXZlbCA+IDAgPyBgaCR7bGV2ZWx9YCA6IFwiZGl2XCIpO1xyXG4gICAgZWxlbS5pbm5lckhUTUwgPSB0aGlzLnBhcnNlQW5jaG9ycyh0ZXh0KTtcclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VJY29ucyhsaW5lKSB7XHJcbiAgICBsZXQgaWNvbnMgPSBsaW5lLm1hdGNoKC8hXFxbLlteXFxdXStcXF0vZyk7XHJcbiAgICBpY29ucyA/IGljb25zLmZvckVhY2goaWNvbiA9PiB7XHJcbiAgICAgIGxldCBpY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgaWNvbi5zbGljZSgyLCAtMSkuc3BsaXQoXCIgXCIpLmZvckVhY2goaXRlbSA9PiBpY28uY2xhc3NMaXN0LmFkZChpdGVtKSk7XHJcbiAgICAgIGxpbmUgPSBsaW5lLnNwbGl0KGljb24pLmpvaW4oaWNvLm91dGVySFRNTCk7XHJcbiAgICB9KSA6IG51bGw7XHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcblxyXG4gIHBhcnNlQW5jaG9ycyhsaW5lKSB7XHJcbiAgICBsZXQgbmV3TGluZSA9IFwiXCI7XHJcbiAgICBsZXQgYW5jaG9ycyA9IGxpbmUubWF0Y2goL1xcWy5bXihdK1xcXVxcKC5bXlxcKV0rXFwpL2cpO1xyXG4gICAgYW5jaG9ycyA/IGFuY2hvcnMuZm9yRWFjaChhbmNob3IgPT4ge1xyXG4gICAgICBsZXQgcGFydHMgPSBsaW5lLnNwbGl0KGFuY2hvcik7XHJcbiAgICAgIG5ld0xpbmUgKz0gdGhpcy5wYXJzZUljb25zKHRoaXMuZm9ybWF0VGV4dChwYXJ0c1swXSkpO1xyXG4gICAgICBsZXQgdG1wID0gYW5jaG9yLnNwbGl0KFwiXShcIik7XHJcbiAgICAgIGxldCByZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgcmVmLmhyZWYgPSB0bXBbMV0uc2xpY2UoMCwgLTEpO1xyXG4gICAgICByZWYuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgICByZWYuaW5uZXJIVE1MID0gdGhpcy5wYXJzZUljb25zKHRoaXMuZm9ybWF0VGV4dCh0bXBbMF0uc2xpY2UoMSkpKTtcclxuICAgICAgbmV3TGluZSArPSByZWYub3V0ZXJIVE1MICsgcGFydHNbMV07XHJcbiAgICB9KSA6IG5ld0xpbmUgPSB0aGlzLnBhcnNlSWNvbnModGhpcy5mb3JtYXRUZXh0KGxpbmUpKTtcclxuICAgIHJldHVybiBuZXdMaW5lO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0VGV4dChsaW5lKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGxldCByZWdleHByO1xyXG4gICAgdGhpcy5zeW1ib2xzLmZvckVhY2goY3VycmVudCA9PiB7XHJcbiAgICAgIHJlZ2V4cHIgPSBuZXcgUmVnRXhwKGN1cnJlbnQucmVnICsgXCIuW15cIiArIGN1cnJlbnQucmVnICsgXCJdK1wiICsgY3VycmVudC5yZWcsIFwiZ1wiKTtcclxuICAgICAgbGV0IG1hdGNoZXMgPSBsaW5lLm1hdGNoKHJlZ2V4cHIpO1xyXG4gICAgICBtYXRjaGVzID8gbWF0Y2hlcy5mb3JFYWNoKGl0ZW0gPT4gbGluZSA9IGxpbmUuc3BsaXQoaXRlbSkuam9pbihpdGVtLnJlcGxhY2UoY3VycmVudC5zeW1iLCBjdXJyZW50LnRhZ1swXSkucmVwbGFjZShjdXJyZW50LnN5bWIsIGN1cnJlbnQudGFnWzFdKSkpIDogbnVsbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVHcmlkKGZyYWdtZW50KSB7XHJcbiAgICBsZXQgZ3JpZCA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgIGdyaWQuY2xhc3NOYW1lID0gXCJncmlkXCI7XHJcbiAgICBsZXQgY29udGVudCA9IGZyYWdtZW50LnNsaWNlKDQsIC00KS5zcGxpdChcIlxcblwiKTtcclxuICAgIGNvbnRlbnQuZm9yRWFjaChsaW5lID0+IGdyaWQuYXBwZW5kQ2hpbGQodGhpcy5wYXJzZUxpbmUobGluZSkpKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5QYWdlQ29tcG9uZW50LnByb3RvdHlwZS5yZWdFeHBycyA9IHtcclxuICBDb2RlT3V0cHV0OiAvXFx7ezN9LltefV0qXFx9ezN9LyxcclxuICBTY3JpcHRTcG9pbGVyOiAvfn5+fi5bXn5+fn5dK35+fn4vLFxyXG4gIFNjcmlwdFNuaXBwZXQ6IC9+fn4uW15+fn5dK35+fi8sXHJcbiAgU3BvaWxlcjogLyhcXF57M30pKFtcXHNcXFNdKz8pXFwxL20sXHJcbiAgU2xpZGVyOiAvISFcXFsuW15cXF1dK1xcXS8sXHJcbiAgR3JpZDogL1xcQFxcQFxcQFxcQFxccytcXFMrW15cXEBcXEBcXEBcXEBdKl0qXFxAXFxAXFxAXFxAL21cclxufTtcclxuXHJcblBhZ2VDb21wb25lbnQucHJvdG90eXBlLnJlZ0V4cHJzW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiogKCkge1xyXG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XHJcbiAgbGV0IGZyYWdtZW50cywgc3RhcnQsIGVuZCwga2V5O1xyXG5cclxuICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcclxuICAgIGZyYWdtZW50cyA9IHRydWU7XHJcbiAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICBpZiAoa2V5ID09PSBcInBhZ2VDb250ZW50XCIpIGNvbnRpbnVlO1xyXG5cclxuICAgIHdoaWxlIChmcmFnbWVudHMpIHtcclxuICAgICAgZnJhZ21lbnRzID0gdGhpcy5wYWdlQ29udGVudC5tYXRjaCh0aGlzW2tleV0pO1xyXG4gICAgICBpZiAoIWZyYWdtZW50cykgYnJlYWs7XHJcbiAgICAgIHN0YXJ0ID0gZnJhZ21lbnRzLmluZGV4O1xyXG4gICAgICBlbmQgPSBzdGFydCArIGZyYWdtZW50c1swXS5sZW5ndGggKyAxO1xyXG4gICAgICB0aGlzLnBhZ2VDb250ZW50ID0gdGhpcy5wYWdlQ29udGVudC5yZXBsYWNlKGZyYWdtZW50c1swXSwgYFxcbiEhISR7c3RhcnR9ISEhXFxuYCk7XHJcbiAgICAgIHlpZWxkIHtcclxuICAgICAgICBbc3RhcnRdOiB7XHJcbiAgICAgICAgICB0eXBlOiBrZXksXHJcbiAgICAgICAgICBjb250ZW50OiBmcmFnbWVudHNbMF1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB5aWVsZCB7XHJcbiAgICBwYWdlQ29udGVudDogdGhpcy5wYWdlQ29udGVudFxyXG4gIH07XHJcbn07XHJcblxyXG5QYWdlQ29tcG9uZW50LnByb3RvdHlwZS5zeW1ib2xzID0gW3tcclxuICBzeW1iOiBcIuKAouKAolwiLFxyXG4gIHJlZzogXCLigKLigKJcIixcclxuICB0YWc6IFtcIjxmaWd1cmUgY2xhc3M9J2JsYWNrJz5cIiwgXCI8L2ZpZ3VyZT5cIl1cclxufSwge1xyXG4gIHN5bWI6IFwi4peY4peYXCIsXHJcbiAgcmVnOiBcIuKXmOKXmFwiLFxyXG4gIHRhZzogW1wiPGZpZ3VyZSBjbGFzcz0nYm9yZGVyZWQnPlwiLCBcIjwvZmlndXJlPlwiXVxyXG59LCB7XHJcbiAgc3ltYjogXCIqKlwiLFxyXG4gIHJlZzogXCJcXFxcKlxcXFwqXCIsXHJcbiAgdGFnOiBbXCI8Yj5cIiwgXCI8L2I+XCJdXHJcbn0sIHtcclxuICBzeW1iOiBcIl9cIixcclxuICByZWc6IFwiX1wiLFxyXG4gIHRhZzogW1wiPGVtPlwiLCBcIjwvZW0+XCJdXHJcbn0sIHtcclxuICBzeW1iOiBcIn5cIixcclxuICByZWc6IFwiflwiLFxyXG4gIHRhZzogW1wiPGNvZGUgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6I2VlZic+XCIsIFwiPC9jb2RlPlwiXVxyXG59LCB7XHJcbiAgc3ltYjogXCJeXlwiLFxyXG4gIHJlZzogXCJcXFxcXlxcXFxeXCIsXHJcbiAgdGFnOiBbXCI8c21hbGw+XCIsIFwiPC9zbWFsbD5cIl1cclxufSwge1xyXG4gIHN5bWI6IFwiOjo6XCIsXHJcbiAgcmVnOiBcIjo6OlwiLFxyXG4gIHRhZzogW1wiPGJ1dHRvbiBjbGFzcz0nY2FwJz5cIiwgXCI8L2J1dHRvbj5cIl1cclxufSwge1xyXG4gIHN5bWI6IFwiJSUlXCIsXHJcbiAgcmVnOiBcIlxcJVxcJVxcJVwiLFxyXG4gIHRhZzogW1wiPGJ1dHRvbiBjbGFzcz0nbGluayc+XCIsIFwiPC9idXR0b24+XCJdXHJcbn1dO1xyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwicGFnZS1lbGVtZW50XCIsIFBhZ2VDb21wb25lbnQpO1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29tcG9uZW50O1xyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbmNsYXNzIFBpY3R1cmVTbGlkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMucGljdHVyZXMgPSBbXVxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMFxyXG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlID0gMFxyXG4gICAgICAgIGxldCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogJ29wZW4nIH0gKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbSAoICdmaWd1cmUnIClcclxuICAgICAgICApXHJcbiAgICAgICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoICdzdHlsZScgKVxyXG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAgICAgICBmaWd1cmUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6NTAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDkwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9pbWFnZXMvcGhvbmUtc3RhdGljLTMuanBnKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDkwO1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsICdMdWNraWVzdCBHdXknLCBSb2JvdG8sIEFyaWFsO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMGIwO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbGVmdCB7IGxlZnQ6IDQlOyB9XHJcbiAgICAgICAgICAgICNsZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFwiPFwiOyB9XHJcbiAgICAgICAgICAgICNyaWdodCB7IHJpZ2h0OiA0JTsgfVxyXG4gICAgICAgICAgICAjcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXCI+XCI7IH1cclxuICAgICAgICAgICAgI2Nsb3NlIHsgdG9wOiAxMHB4OyByaWdodDogNHB4OyB9XHJcbiAgICAgICAgICAgICNjbG9zZTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cud2ViZnguY29tL3Rvb2xzL2Vtb2ppLWNoZWF0LXNoZWV0L2dyYXBoaWNzL2Vtb2ppcy9ub19lbnRyeV9zaWduLnBuZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgICBib3R0b206IDUlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzBkOTA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDEwcHggMjBweCAjMDAwMDAwOTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDBweCkge1xyXG4gICAgICAgICAgICAgIGJ1dHRvbiB7IGZvbnQtc2l6ZTogMjBweDsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuICAgICAgICAgICAgICBidXR0b24geyBmb250LXNpemU6IDE2cHg7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQgKCBzdHlsZSApXHJcbiAgICAgICAgdGhpcy5idG5DbG9zZSA9IHRoaXMuY3JlYXRlRWxlbSAoICdidXR0b24nLCB0aGlzLmNvbnRhaW5lciApXHJcbiAgICAgICAgdGhpcy5idG5DbG9zZS5vbmNsaWNrID0gKCkgPT4gdGhpcy5yZW1vdmUoKVxyXG5cclxuICAgICAgICB0aGlzLmJ0bkNsb3NlLmlkID0gJ2Nsb3NlJ1xyXG4gICAgICAgIHRoaXMuYnRuTGVmdCA9IHRoaXMuY3JlYXRlRWxlbSAoICdidXR0b24nLCB0aGlzLmNvbnRhaW5lciApXHJcbiAgICAgICAgdGhpcy5idG5MZWZ0LmlkID0gJ2xlZnQnXHJcbiAgICAgICAgdGhpcy5idG5MZWZ0Lm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNoYW5nZVBpY3R1cmUgKCBcImxlZnRcIiApXHJcblxyXG4gICAgICAgIHRoaXMuYnRuUmlnaHQgPSB0aGlzLmNyZWF0ZUVsZW0gKCAnYnV0dG9uJywgdGhpcy5jb250YWluZXIgKVxyXG4gICAgICAgIHRoaXMuYnRuUmlnaHQuaWQgPSAncmlnaHQnXHJcbiAgICAgICAgdGhpcy5idG5SaWdodC5vbmNsaWNrID0gKCkgPT4gdGhpcy5jaGFuZ2VQaWN0dXJlICggXCJyaWdodFwiIClcclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdGVFbGVtICggdGFnTmFtZSwgY29udGFpbmVyICkge1xyXG4gICAgICAgIHJldHVybiAgKCAhY29udGFpbmVyID8gZG9jdW1lbnQuYm9keSA6IGNvbnRhaW5lciApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggdGFnTmFtZSApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsgJ3BpY3R1cmVzJ11cclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soIGF0dHJOYW1lLCBvbGRWYWwsIG5ld1ZhbCApIHtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzID0gSlNPTi5wYXJzZSAoIHRoaXMuZ2V0QXR0cmlidXRlICggXCJwaWN0dXJlc1wiICkgKVxyXG4gICAgICAgIHRoaXMuc2xpZGVzID0gW11cclxuICAgICAgICB0aGlzLnNsaWRlcyBbIDAgXSA9IG5ldyBTbGlkZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGljdHVyZXMgWyAwIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuc2xpZGVzIFsgMCBdLm1jRnJvbVRvICggMTAwLCAxMCApXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyAxIF0gPSBuZXcgU2xpZGUgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY3R1cmVzIFsgMSBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnNsaWRlcyBbIDEgXS5pbml0ICggMTAwIClcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQaWN0dXJlICggZGlyZWN0aW9uICkge1xyXG4gICAgICAgIGxldCB0byA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gMTAwIDogLTEwMFxyXG4gICAgICAgIGxldCBuZXh0U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCA/IDEgOiAwXHJcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHRoaXMuZ2V0TmV4dEluZGV4ICggZGlyZWN0aW9uIClcclxuICAgICAgICB0aGlzLnNsaWRlcyBbIG5leHRTbGlkZSBdLnNldFBpY3R1cmUgKCB0aGlzLnBpY3R1cmVzIFsgbmV4dEluZGV4IF0gKVxyXG4gICAgICAgIHRoaXMuc2xpZGVzIFsgbmV4dFNsaWRlIF0uaW5pdCAoIC10byApXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyB0aGlzLmN1cnJlbnRTbGlkZSBdLm1jRnJvbVRvICggMTAsIHRvLCAwIClcclxuICAgICAgICB0aGlzLnNsaWRlcyBbIG5leHRTbGlkZSBdLm1jRnJvbVRvICggLXRvLCAxMCwgMSApXHJcbiAgICAgICAgc2V0VGltZW91dCAoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgPSBuZXh0U2xpZGVcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBuZXh0SW5kZXhcclxuICAgICAgICB9LmJpbmQodGhpcyksIDEwMDAgKVxyXG4gICAgfVxyXG5cclxuICAgIGdldE5leHRJbmRleCAoIGRpciApIHtcclxuICAgICAgcmV0dXJuIGRpciA9PT0gJ2xlZnQnID9cclxuICAgICAgICAgICAgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY3R1cmVzLmxlbmd0aCAtIDEgOiB0aGlzLmN1cnJlbnRJbmRleCAtIDEgKSA6XHJcbiAgICAgICAgICAgICggdGhpcy5jdXJyZW50SW5kZXggPT09IHRoaXMucGljdHVyZXMubGVuZ3RoIC0gMSA/XHJcbiAgICAgICAgICAgICAgICAwIDogdGhpcy5jdXJyZW50SW5kZXggKyAxIClcclxuICAgIH1cclxuXHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lICggJ3BpY3R1cmUtc2xpZGVyJywgUGljdHVyZVNsaWRlciApXHJcblxyXG5jb25zdCBTbGlkZSA9IGZ1bmN0aW9uICggaW1hZ2VVUkwsIGNvbnRhaW5lciApIHtcclxuICAgIHRoaXMuaW1hZ2VVUkwgPSBpbWFnZVVSTFxyXG4gICAgbGV0IGVsZW0gPSBjb250YWluZXIuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggJ2RpdicgKVxyXG4gICAgKVxyXG4gICAgZWxlbS5zdHlsZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpbWFnZVVSTH0pO2BcclxuICAgIHRoaXMuaW5pdCA9IHggPT4ge1xyXG4gICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHggKyAnJSdcclxuICAgIH1cclxuICAgIHRoaXMuc2V0UGljdHVyZSA9IHBpY3R1cmVVUkwgPT5cclxuICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtwaWN0dXJlVVJMfSlgXHJcblxyXG4gICAgdGhpcy5tY0Zyb21UbyA9IGZ1bmN0aW9uICggZnJvbSwgdG8sIGZpbmFsT3BhY2l0eSApIHtcclxuICAgICAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcclxuICAgICAgICBlbGVtLnN0eWxlLmxlZnQgPSBmcm9tICsgJyUnXHJcbiAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMSAtIGZpbmFsT3BhY2l0eVxyXG4gICAgICAgIHNldFRpbWVvdXQgKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC44cydcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS5sZWZ0ID0gdG8gKyAnJSdcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gZmluYWxPcGFjaXR5XHJcbiAgICAgICAgfSwgNTAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlU2xpZGVyXHJcbiIsImNsYXNzIFBvcHVwV2luZG93IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc2hhZG93ID10aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogXCJjbG9zZWRcIiB9IClcclxuICAgICAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsZWZ0XCI+PC9zbG90PlxyXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cInJpZ2h0XCI+PC9zbG90PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIHRoaXMuYm94ID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiLmJveFwiIClcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIuY29udGVudFwiIClcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJzdHlsZVwiIClcclxuICAgICAgICApLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAgIEBjaGFyc2V0IFwiVVRGLThcIjtcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAzMDBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDIwcHggMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIlJvYm90b1wiLCBBcmlhbDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveCA+IC5jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIFx0ICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAgNzAlLCB0cmFuc3BhcmVudCAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyKC0tc3RhcnMpLCB2YXIoLS1pY29uKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCwgcmlnaHQsIHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0LCByZXBlYXQsIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciwgY29udGFpbiwgMTAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJveDpiZWZvcmUsIC5ib3g6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Y1MDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2Y1MDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgM3B4IDNweCA2cHggIzAwMDAwMDcwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94OmFmdGVyIHtcclxuICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmNTA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZjUwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4IDEycHggIzAwMDAwMDcwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJveDpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZVkoLTRkZWcpIHNrZXcoLTEwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveDpob3ZlciA+IC5jb250ZW50IHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDhkZWcpIHNrZXcoMjBkZWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHggKSB7XHJcbiAgICAgICAgICAgIC5ib3ggPiAuY29udGVudCB7IHdpZHRoOiA2MHZ3OyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAgICAgICAgICAgLmJveCA+IC5jb250ZW50IHsgd2lkdGg6IDcwdnc7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4ICkge1xyXG4gICAgICAgICAgICAuYm94ID4gLmNvbnRlbnQgeyB3aWR0aDogODB2dzsgfVxyXG4gICAgICAgICAgICAuYm94IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTUwJSk7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4ICkge1xyXG4gICAgICAgICAgICAuYm94ID4gLmNvbnRlbnQgeyB3aWR0aDogOTB2dzsgfVxyXG4gICAgICAgICAgICAuYm94IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTUwJSk7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgIGNvbG9yOiAjMGRmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCBwIHtcclxuICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgdGhpcy5vbmNsaWNrID0gZXZlbnQgPT4gZXZlbnQudGFyZ2V0LnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkge1xyXG4gICAgICAgIHJldHVybiBbIFwiY29udGVudFwiIF1cclxuICAgIH1cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAoIGF0dHJOYW1lLCBvbGRWYWwsIG5ld1ZhbCApIHtcclxuICAgICAgICBuZXdWYWwgPyB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gbmV3VmFsIDogbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUgKCBcInBvcHVwLXdpblwiLCBQb3B1cFdpbmRvdyApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpbmRvd1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBTcG9pbGVyQ2xhc3MgZnJvbSAnLi9zcG9pbGVyJ1xyXG5cclxuY2xhc3MgU2NyaXB0U3BvaWxlciBleHRlbmRzIFNwb2lsZXJDbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgICBsZXQgcmFpbmJvd1N0eWxlcyA9IHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIilcclxuICAgICAgKVxyXG4gICAgICBmZXRjaCAoIGAke2NyZWF0ZVBhdGgoIFwic3JjXCIsIFwiZm9yLXJhaW5ib3cuY3NzXCIgKX1gIClcclxuICAgICAgICAgIC50aGVuICggcmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpIClcclxuICAgICAgICAgIC50aGVuICggY3NzID0+IHJhaW5ib3dTdHlsZXMudGV4dENvbnRlbnQgPSBjc3MgKVxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICB0aGlzLmhlYWRlciA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIiNoZWFkZXJcIiApXHJcbiAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIi5jb2xsYXBzaWJsZS1jb250ZW50XCIgKVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsgJ2hlYWRlcicsICdjb250ZW50JyBdXHJcbiAgICB9XHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soIGF0dHJOYW1lLCBvbGRWYWwsIG5ld1ZhbCApIHtcclxuICAgICAgICBhdHRyTmFtZSA9PT0gXCJjb250ZW50XCIgP1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQgKCB0aGlzLmNvbnRlbnQgKSA6XHJcbiAgICAgICAgICAgIGF0dHJOYW1lID09PSAnaGVhZGVyJyB8fCAhbmV3VmFsID9cclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyLmlubmVyVGV4dCA9IHRoaXMuZ2V0QXR0cmlidXRlICggXCJoZWFkZXJcIiApIDpcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCAnc2NyaXB0LXNwb2lsZXInLCBTY3JpcHRTcG9pbGVyIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFNwb2lsZXJcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgU3BvaWxlckNsYXNzIGZyb20gJy4vc3BvaWxlcidcclxuXHJcbmNsYXNzIFNwb2lsZXJDb21wb25lbnQgZXh0ZW5kcyBTcG9pbGVyQ2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBsZXQgc3R5bGVzID0gdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKVxyXG4gICAgICApXHJcbiAgICAgIFByb21pc2UuYWxsIChbXHJcbiAgICAgICAgICBmZXRjaCAoIFwic3JjL2ljb25zLmNzc1wiIClcclxuICAgICAgICAgICAgLnRoZW4gKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKSxcclxuICAgICAgICAgIGZldGNoICggXCJzcmMvZm9yLXJhaW5ib3cuY3NzXCIgKVxyXG4gICAgICAgICAgICAudGhlbiAoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSApLFxyXG4gICAgICBdKVxyXG4gICAgICAudGhlbiAoIGNzcyA9PiBzdHlsZXMudGV4dENvbnRlbnQgPSBjc3Muam9pbihcIlxcblxcblwiKSApXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgIHRoaXMuaGVhZGVyID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiI2hlYWRlclwiIClcclxuICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiLmNvbGxhcHNpYmxlLWNvbnRlbnRcIiApXHJcbiAgICAgIHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIi5sYmwtdG9nZ2xlXCIgKVxyXG4gICAgICAgIC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y3JlYXRlUGF0aCggXCJpY29uc1wiLFwic2xpZGVyLTIuZ2lmXCIgKX0pYFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsgJ2hlYWRlcicsICdyZWFkeScgXVxyXG4gICAgfVxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgaWYgKCAhYXR0ck5hbWUgKSByZXR1cm5cclxuICAgICAgICBhdHRyTmFtZSA9PT0gXCJoZWFkZXJcIiA/IHRoaXMuaGVhZGVyLmlubmVySFRNTCA9IG5ld1ZhbCA6XHJcbiAgICAgICAgICBhdHRyTmFtZSA9PT0gXCJyZWFkeVwiID8gKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmZvckVhY2ggKFxyXG4gICAgICAgICAgICAgICAgaXRlbSA9PiB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQgKCBpdGVtIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pKCkgOiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUgKCAnc3BvaWxlci1jb21wb25lbnQnLCBTcG9pbGVyQ29tcG9uZW50IClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwb2lsZXJDb21wb25lbnRcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcG9pbGVyQ2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93ICggeyBtb2RlOiBcIm9wZW5cIiB9IClcclxuICAgICAgdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCBcInN0eWxlXCIgKVxyXG4gICAgICApLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAgICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzA3OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjk4JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDElO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IGluc2V0IDFweCB3aGl0ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDgwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGJsLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzA3OTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2NyZWF0ZVBhdGgoIFwiZXh0ZXJuYWxJY29uc1wiLCBcImNvZmZlZS5wbmdcIiApfSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGJsLXRvZ2dsZTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDEuNXB4ICMwMDAwNTA1MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibC10b2dnbGU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZmY3MDAwO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGJsLXRvZ2dsZTo6YWZ0ZXIge1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xsYXBzaWJsZS1jb250ZW50IC5jb250ZW50LWlubmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAycHggLTJweCAzcHggIzAwMDAwMDkwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbGxhcHNpYmxlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDBweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2dnbGU6Y2hlY2tlZCArIC5sYmwtdG9nZ2xlICsgLmNvbGxhcHNpYmxlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDIwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDgwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9nZ2xlOmNoZWNrZWQgKyAubGJsLXRvZ2dsZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVgoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2dnbGU6Y2hlY2tlZCArIC5sYmwtdG9nZ2xlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWVmO1xyXG4gICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQgPiBkaXYge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhyOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIuKWl1wiO1xyXG4gICAgICAgICAgY29sb3I6ICNmNTA7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBocjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIuKWmFwiO1xyXG4gICAgICAgICAgY29sb3I6ICMwOWI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2RkZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBSb2JvdG8sIEFyaWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCksIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQwMHB4KSB7XHJcbiAgICAgICAgICBoMSB7IGZvbnQtc2l6ZTogMS4ycmVtOyB9XHJcbiAgICAgICAgICBoMiB7IGZvbnQtc2l6ZTogMS4wcmVtOyB9XHJcbiAgICAgICAgICBoMyB7IGZvbnQtc2l6ZTogMC45cmVtOyB9XHJcbiAgICAgICAgICBkaXYgeyBmb250LXNpemU6IDAuOHJlbTsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNzk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1MDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYTA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICAgIHRoaXMuc2hhZG93LmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiY29tcG9uZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcC1jb2xsYWJzaWJsZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbGxhcHNpYmxlXCIgY2xhc3M9XCJ0b2dnbGVcIiB0eXBlPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29sbGFwc2libGVcIiBjbGFzcz1cImxibC10b2dnbGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaGVhZGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWNvbnRlbnRcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIGBcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgdGhpcy5oZWFkZXIgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIjaGVhZGVyXCIgKVxyXG4gICAgICB0aGlzLnNjcmlwdCA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIiNzY3JpcHRDb250ZW50XCIgKVxyXG4gICAgICB0aGlzLndyYXBwZXIgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIuY29sbGFwc2libGUtY29udGVudFwiIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gY3VzdG9tRWxlbWVudHMuZGVmaW5lKCAnc3BvaWxlci1lbGVtZW50JywgU3BvaWxlckNvbXBvbmVudCApXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTcG9pbGVyQ2xhc3NcclxuIiwiaW1wb3J0IG1haW5TdHlsZXMgZnJvbSAnLi9tYWluLmNzcydcclxuLy8gaW1wb3J0IFJhaW5ib3cgZnJvbSAnLi9yYWluYm93LmpzJ1xyXG5pbXBvcnQgZm9yUmFpbmJvdyBmcm9tICcuL2Zvci1yYWluYm93LmNzcydcclxuaW1wb3J0IHNsaWRlciBmcm9tICcuL3BpY3R1cmUtc2xpZGVyJ1xyXG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tICcuL21lbnUtY29tcG9uZW50J1xyXG5pbXBvcnQgc3BvaWxlciBmcm9tICcuL3Nwb2lsZXInXHJcbmltcG9ydCBzcG9pbGVyQ29tcG9uZW50IGZyb20gJy4vc3BvaWxlci1jb21wb25lbnQnXHJcblxyXG5pbXBvcnQgbWFpbk1lbnUgZnJvbSAnLi9tYWluLW1lbnUnXHJcbmltcG9ydCBzY3JpcHRTcG9pbGVyIGZyb20gJy4vc2NyaXB0LXNwb2lsZXInXHJcblxyXG5pbXBvcnQgZ2xpdGNoIGZyb20gJy4vZ2xpdGNoJ1xyXG5pbXBvcnQgcGFnZUNvbXBvbmVudCBmcm9tICcuL3BhZ2UtY29tcG9uZW50J1xyXG5pbXBvcnQgY29kZU91dHB1dENvbXBvbmVudCBmcm9tIFwiLi9jb2RlT3V0cHV0Q29tcG9uZW50XCJcclxuaW1wb3J0IFNodXR0ZXIgZnJvbSBcIi4vU2h1dHRlclwiXHJcblxyXG5pbXBvcnQgR3JhcGhpY0hlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9HcmFwaGljSGVhZGVyQ29tcG9uZW50XCJcclxuXHJcbmltcG9ydCBwcm9qZWN0U3R5bGVzIGZyb20gXCIuL3Byb2plY3QuY3NzXCJcclxuaW1wb3J0IGdyaWRTdHlsZXMgZnJvbSBcIi4vZ3JpZC5jc3NcIlxyXG5cclxuaW1wb3J0IFN2Z05hdmlnYXRpb25QYW5lbCBmcm9tIFwiLi9zdmctbmF2aWdhdGlvbi1wYW5lbFwiXHJcblxyXG5pbXBvcnQgbm9pc2UgZnJvbSBcIi4vbm9pc2UuY3NzXCJcclxuXHJcbmltcG9ydCBQb3B1cFdpbmRvdyBmcm9tIFwiLi9wb3B1cC13aW5kb3dcIlxyXG4iLCJjbGFzcyBTdmdOYXZpZ2F0aW9uUGFuZWwgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93ICggeyBtb2RlOiBcImNsb3NlZFwiIH0gKVxyXG4gICAgICAgIHRoaXMuc2hhZG93LmlubmVySFRNTCA9IGA8c3ZnPjwvc3ZnPmBcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFwibm9ybVwiXHJcbiAgICAgICAgdGhpcy5tYXhXaWR0aCA9IDMyMFxyXG4gICAgICAgIHRoaXMubWluV2lkdGggPSA1MFxyXG4gICAgICAgIHRoaXMuc3RlcCA9IDVcclxuICAgICAgICB0aGlzLmQgPSA1MFxyXG4gICAgICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoIFwic3ZnXCIgKVxyXG5cclxuICAgICAgICB0aGlzLnJhbmQxID0gdGhpcy5yYW5kb21TdGVwXHJcbiAgICAgICAgdGhpcy5yYW5kMiA9IHRoaXMucmFuZDEgKyB0aGlzLnJhbmRvbVN0ZXAsXHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLnJhbmRvbVdpZHRoXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyICggXCJleHBhbmRcIiwgZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoLmRpc3BhdGNoRXZlbnQgKCBuZXcgRXZlbnQgKCBldmVudC50eXBlICkgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyICggXCJjbG9zZVwiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdGguZGlzcGF0Y2hFdmVudCAoIG5ldyBFdmVudCAoIGV2ZW50LnR5cGUgKSApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldCB3ICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGhcclxuICAgIH1cclxuICAgIGdldCBoICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB9XHJcbiAgICBnZXQgcGF0aCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcInN2ZyA+IHBhdGhcIiApXHJcbiAgICB9XHJcbiAgICBnZXQgcmFuZG9tU3RlcCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQgKCBNYXRoLnJhbmRvbSgpICogdGhpcy5oICogMC4zIClcclxuICAgIH1cclxuICAgIGdldCByYW5kb21XaWR0aCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQgKCBNYXRoLnJhbmRvbSgpICogdGhpcy5tYXhXaWR0aCAqIDAuNCApXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlzdGVuZXJzICgpIHtcclxuICAgICAgdGhpcy5wYXRoLmFkZEV2ZW50TGlzdGVuZXIgKCBcImV4cGFuZFwiLCB0aGlzLm1vdmllLmJpbmQgKCB0aGlzICkgKVxyXG4gICAgICB0aGlzLnBhdGguYWRkRXZlbnRMaXN0ZW5lciAoIFwiY2xvc2VcIiwgdGhpcy5yZXZlcnNlLmJpbmQgKCB0aGlzICkgKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRpYyAoIGV4cGFuZCApIHtcclxuICAgICAgICB0aGlzLnN2Zy5zdHlsZS53aWR0aCA9IGV4cGFuZCA/IFwiMTAwdndcIiA6IFwiMFwiXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBleHBhbmQgPyBcIndpZGVcIiA6IFwibm9ybVwiXHJcbiAgICAgICAgbGV0IHdpZHRoID0gZXhwYW5kID8gdGhpcy5tYXhXaWR0aCA6IHRoaXMubWluV2lkdGhcclxuICAgICAgICB0aGlzLnN2Zy5pbm5lckhUTUwgPSBgPHBhdGggZD1cIk0ke3RoaXMud30gMCBMJHt0aGlzLnctd2lkdGh9IDAgTCR7dGhpcy53LXdpZHRofSAke3RoaXMuaH0gTCR7dGhpcy53fSAke3RoaXMuaH0gWlwiIC8+YFxyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLnJhbmQxID0gdGhpcy5yYW5kb21TdGVwXHJcbiAgICAgICAgdGhpcy5yYW5kMiA9IHRoaXMucmFuZDEgKyB0aGlzLnJhbmRvbVN0ZXBcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMucmFuZG9tV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBtb3ZpZSAoKSB7XHJcbiAgICAgICAgdGhpcy5zdmcuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCJcclxuICAgICAgICB0aGlzLmQgKz0gdGhpcy5zdGVwICsgMVxyXG4gICAgICAgIHRoaXMucmFuZDEgKz0gNFxyXG4gICAgICAgIHRoaXMucmFuZDIgKz0gNVxyXG4gICAgICAgIHRoaXMuc3ZnLmlubmVySFRNTCA9IGA8cGF0aCBkPVwiTSR7dGhpcy53fSAwIEwke3RoaXMudy10aGlzLm1pbldpZHRoLXRoaXMub2Zmc2V0fSAwIEMke3RoaXMudy10aGlzLmQrdGhpcy5vZmZzZXR9ICR7dGhpcy5yYW5kMX0gJHt0aGlzLnctdGhpcy5kLXRoaXMub2Zmc2V0fSAke3RoaXMucmFuZDJ9ICR7dGhpcy53LXRoaXMubWluV2lkdGgtdGhpcy5vZmZzZXQqMn0gJHt0aGlzLmh9IEwke3RoaXMud30gJHt0aGlzLmh9IFpcIiAvPmA7XHJcbiAgICAgICAgdGhpcy5kIDwgdGhpcy5tYXhXaWR0aCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZSAoIHRoaXMubW92aWUuYmluZCAoIHRoaXMgKSApIDogdGhpcy5zZXRTdGF0aWMoIHRydWUgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZCAtPSB0aGlzLnN0ZXAgKyAxXHJcbiAgICAgICAgdGhpcy5yYW5kMSArPSA0XHJcbiAgICAgICAgdGhpcy5yYW5kMiArPSA1XHJcbiAgICAgICAgdGhpcy5zdmcuaW5uZXJIVE1MID0gYDxwYXRoIGQ9XCJNJHt0aGlzLnd9IDAgTCR7dGhpcy53LXRoaXMubWluV2lkdGgtdGhpcy5kfSAwIEMke3RoaXMudy10aGlzLmQrdGhpcy5vZmZzZXR9ICR7dGhpcy5yYW5kMX0gJHt0aGlzLnctdGhpcy5kfSAke3RoaXMucmFuZDJ9ICR7dGhpcy53LXRoaXMubWluV2lkdGgtdGhpcy5kfSAke3RoaXMuaH0gTCR7dGhpcy53fSAke3RoaXMuaH0gWlwiIC8+YDtcclxuICAgICAgICB0aGlzLmQgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lICggdGhpcy5yZXZlcnNlLmJpbmQgKCB0aGlzICkgKSA6IHRoaXMuc2V0U3RhdGljKCBmYWxzZSApXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwic3ZnXCIgKVxyXG4gICAgICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkICggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoXCJzdHlsZVwiKSlcclxuICAgICAgICAgICAgLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuc3ZnLmlubmVySFRNTCA9IGA8cGF0aCBkPVwiTSR7dGhpcy53fSAwIEwke3RoaXMudy10aGlzLm1pbldpZHRofSAwIEwke3RoaXMudy10aGlzLm1pbldpZHRofSAke3RoaXMuaH0gTCR7dGhpcy53fSAke3RoaXMuaH0gWlwiIC8+YDtcclxuICAgICAgICB0aGlzLnNldExpc3RlbmVycygpXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICggXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRpYyAoIHN0YXR1cyA9PT0gXCJ3aWRlXCIgKVxyXG4gICAgICAgIH0uYmluZCAoIHRoaXMgKSlcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lIChcclxuICAgIFwic3ZnLW5hdi1wYW5lbFwiLFxyXG4gICAgU3ZnTmF2aWdhdGlvblBhbmVsXHJcbilcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFN2Z05hdmlnYXRpb25QYW5lbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9