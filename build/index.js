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
          event.preventDefault();
          this.checkbox.checked = !this.checkbox.checked;
          this.checkbox.dispatchEvent ( new Event ( "click" ) );
          if ( location.host === "js-lessons.glitch.me" )
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
          let lessonItem = this.addElem ( "li", topLevel );
          this.menuOptions.push ( lessonItem );
          this.setListeners ( lessonItem );
          lessonItem.innerHTML = this.getLessonTemplate ( lesson.id );
          lessonItem.subLevel = lessonItem.querySelector ( "ul.sub-level" );
          let index = 0;
          for ( let item of lesson.items ) {
              let elem = this.addElem ( "li", lessonItem.subLevel );
              this.submenuOptions.push ( elem );
              this.setListeners ( elem );
              elem.style["animation-delay"] = index++ < 10 ? `0.${index}s` : `1.${index - 9}s`;
              let anchor = this.addElem ( "a", elem );
              anchor.href = item.ref;
              anchor.textContent = item.title;
              anchor.fileName = item.ref;

              anchor.onclick = function ( event ) {
                  event.preventDefault();
                  this.checkbox.checked = !this.checkbox.checked;
                  this.checkbox.dispatchEvent ( new Event ( "click" ) );
                  let ref = "js-lessons.glitch.me" ? event.target.href : undefined;
                  window.history.pushState( { route: ref }, event.target.innerText, ref );

                  let shutter = this.addElem ( "shutter-element", document.body );
                  shutter.style = `position: absolute; top: 0; left: 0;`;
                  setTimeout ( () => shutter.remove(), 1000 );
                  this.view.setAttribute ( "src",  `${createPath( "lessons", event.target.fileName + ".md" )}` );
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

    // let path = location.host === "garevna.github.io" ? "/js-lessons/" : "/";

    let path = location.pathname.split( "/js-lessons" ).join ("");
    let fileName = location.search ? location.search.slice (1) :
        path === "/" ? "start-page" : location.pathname.slice(1);
    let srcURL = `${createPath( "lessons", fileName )}.md`;
    // let startPath = `${createPath("lessons", location.pathname === "/" ? "start-page" : location.pathname.slice(1))}`;
    this.setAttribute( "src", srcURL );
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
    document.querySelector("page-element").querySelectorAll("div", "pre")
        .forEach(elem => elem.innerHTML.trim() ? this.insertTable(elem) : elem.remove());
  }

  // Block level

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvci1yYWluYm93LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9ub2lzZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dyYXBoaWNIZWFkZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NodXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVPdXRwdXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvci1yYWluYm93LmNzcz81NDMwIiwid2VicGFjazovLy8uL3NyYy9nbGl0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuY3NzP2YzOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4tbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/MzdmNSIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vaXNlLmNzcz9lYTY0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC5jc3M/ZDM3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0LXNwb2lsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwb2lsZXItY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zcG9pbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLW5hdmlnYXRpb24tcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsR0FBRyxVQUFVLEtBQUssV0FBVyxnQkFBZ0IsSUFBSSxzQkFBc0IsSUFBSSx3QkFBd0IsSUFBSSx3QkFBd0IsSUFBSSxVQUFVLElBQUksc0JBQXNCLEtBQUssc0JBQXNCLFdBQVcsc0ZBQXNGLFVBQVUsb0VBQW9FLCtDQUErQyxzSEFBc0gsZUFBZSxvQ0FBb0Msc0hBQXNILGVBQWUsMElBQTBJLFVBQVUsSUFB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QUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVyxZQUFZLGFBQWE7QUFDOUMsVUFBVSxXQUFXLGFBQWEsYUFBYTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxZQUFZO0FBQzlDLFdBQVcsV0FBVyxZQUFZLGFBQWE7QUFDL0MsV0FBVyxXQUFXLGFBQWEsWUFBWTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLGFBQWE7QUFDaEQsV0FBVyxXQUFXLFlBQVksWUFBWTtBQUM5QyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLFlBQVk7QUFDL0MsV0FBVyxXQUFXLFlBQVksYUFBYTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLFlBQVk7QUFDL0MsV0FBVyxXQUFXLGFBQWEsYUFBYTtBQUNoRCxXQUFXLFdBQVcsWUFBWSxjQUFjO0FBQ2hELFdBQVcsV0FBVyxZQUFZLGFBQWE7QUFDL0Ms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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU8sTUFBTSxhQUFhLE1BQU0sYUFBYSxHQUFHLE9BQU8sSUFBSSxPQUFPLEdBQUcsT0FBTztBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTyxNQUFNLGlDQUFpQyxNQUFNLDBCQUEwQixHQUFHLFdBQVcsR0FBRywwQkFBMEIsR0FBRyxXQUFXLEdBQUcsbUNBQW1DLEdBQUcsT0FBTyxJQUFJLE9BQU8sR0FBRyxPQUFPO0FBQ3RQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTyxNQUFNLDRCQUE0QixNQUFNLDBCQUEwQixHQUFHLFdBQVcsR0FBRyxjQUFjLEdBQUcsV0FBVyxHQUFHLDRCQUE0QixHQUFHLE9BQU8sSUFBSSxPQUFPLEdBQUcsT0FBTztBQUM5TjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU8sTUFBTSxxQkFBcUIsTUFBTSxxQkFBcUIsR0FBRyxPQUFPLElBQUksT0FBTyxHQUFHLE9BQU87QUFDdEk7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc3RhcnQuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJhaW5ib3cgKi9cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUtaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZhZGV7MTAle3RyYW5zZm9ybTpzY2FsZSgxLCAxKX0zNSV7dHJhbnNmb3JtOnNjYWxlKDEsIDEuNyl9NDAle3RyYW5zZm9ybTpzY2FsZSgxLCAxLjcpfTUwJXtvcGFjaXR5OjF9NjAle3RyYW5zZm9ybTpzY2FsZSgxLCAxKX0xMDAle3RyYW5zZm9ybTpzY2FsZSgxLCAxKTtvcGFjaXR5OjB9fVtkYXRhLWxhbmd1YWdlXSBjb2RlLFtjbGFzc149XFxcImxhbmdcXFwiXSBjb2RlLHByZSBbZGF0YS1sYW5ndWFnZV0scHJlIFtjbGFzc149XFxcImxhbmdcXFwiXXtvcGFjaXR5OjA7LW1zLWZpbHRlcjpcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVxcXCI7YW5pbWF0aW9uOmZhZGUtaW4gNTBtcyBlYXNlLWluLW91dCAycyBmb3J3YXJkc31bZGF0YS1sYW5ndWFnZV0gY29kZS5yYWluYm93LFtjbGFzc149XFxcImxhbmdcXFwiXSBjb2RlLnJhaW5ib3cscHJlIFtkYXRhLWxhbmd1YWdlXS5yYWluYm93LHByZSBbY2xhc3NePVxcXCJsYW5nXFxcIl0ucmFpbmJvd3thbmltYXRpb246bm9uZTt0cmFuc2l0aW9uOm9wYWNpdHkgNTBtcyBlYXNlLWluLW91dH1bZGF0YS1sYW5ndWFnZV0gY29kZS5sb2FkaW5nLFtjbGFzc149XFxcImxhbmdcXFwiXSBjb2RlLmxvYWRpbmcscHJlIFtkYXRhLWxhbmd1YWdlXS5sb2FkaW5nLHByZSBbY2xhc3NePVxcXCJsYW5nXFxcIl0ubG9hZGluZ3thbmltYXRpb246bm9uZX1bZGF0YS1sYW5ndWFnZV0gY29kZS5yYWluYm93LXNob3csW2NsYXNzXj1cXFwibGFuZ1xcXCJdIGNvZGUucmFpbmJvdy1zaG93LHByZSBbZGF0YS1sYW5ndWFnZV0ucmFpbmJvdy1zaG93LHByZSBbY2xhc3NePVxcXCJsYW5nXFxcIl0ucmFpbmJvdy1zaG93e29wYWNpdHk6MX1wcmV7cG9zaXRpb246cmVsYXRpdmV9cHJlLmxvYWRpbmcgLnByZWxvYWRlciBkaXZ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ31wcmUubG9hZGluZyAucHJlbG9hZGVyIGRpdjpudGgtb2YtdHlwZSgxKXtiYWNrZ3JvdW5kOiMwMDgxZjU7YW5pbWF0aW9uOmZhZGUgMS41cyAzMDBtcyBsaW5lYXIgaW5maW5pdGV9cHJlLmxvYWRpbmcgLnByZWxvYWRlciBkaXY6bnRoLW9mLXR5cGUoMil7YmFja2dyb3VuZDojNTAwMGY1O2FuaW1hdGlvbjpmYWRlIDEuNXMgNDM4bXMgbGluZWFyIGluZmluaXRlfXByZS5sb2FkaW5nIC5wcmVsb2FkZXIgZGl2Om50aC1vZi10eXBlKDMpe2JhY2tncm91bmQ6IzkwMDBmNTthbmltYXRpb246ZmFkZSAxLjVzIDU3N21zIGxpbmVhciBpbmZpbml0ZX1wcmUubG9hZGluZyAucHJlbG9hZGVyIGRpdjpudGgtb2YtdHlwZSg0KXtiYWNrZ3JvdW5kOiNmNTA0MTk7YW5pbWF0aW9uOmZhZGUgMS41cyA3MTVtcyBsaW5lYXIgaW5maW5pdGV9cHJlLmxvYWRpbmcgLnByZWxvYWRlciBkaXY6bnRoLW9mLXR5cGUoNSl7YmFja2dyb3VuZDojZjU3OTAwO2FuaW1hdGlvbjpmYWRlIDEuNXMgODUzbXMgbGluZWFyIGluZmluaXRlfXByZS5sb2FkaW5nIC5wcmVsb2FkZXIgZGl2Om50aC1vZi10eXBlKDYpe2JhY2tncm91bmQ6I2Y1ZTYwMDthbmltYXRpb246ZmFkZSAxLjVzIDk5Mm1zIGxpbmVhciBpbmZpbml0ZX1wcmUubG9hZGluZyAucHJlbG9hZGVyIGRpdjpudGgtb2YtdHlwZSg3KXtiYWNrZ3JvdW5kOiMwMGY1MGM7YW5pbWF0aW9uOmZhZGUgMS41cyAxMTMwbXMgbGluZWFyIGluZmluaXRlfXByZSAucHJlbG9hZGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMnB4O2xlZnQ6MTBweH1wcmUgLnByZWxvYWRlciBkaXZ7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtib3JkZXItcmFkaXVzOjRweDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6NHB4O29wYWNpdHk6MDthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQ7YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkc31wcmV7YmFja2dyb3VuZC1jb2xvcjojMDAwO3dvcmQtd3JhcDpicmVhay13b3JkO21hcmdpbjowcHg7cGFkZGluZzoxMHB4O2NvbG9yOiNmZmY7Zm9udC1zaXplOjE0cHg7bWFyZ2luLWJvdHRvbToyMHB4fXByZSxjb2Rle2ZvbnQtZmFtaWx5OidNb25hY28nLCAnTWVubG8nLCBjb3VyaWVyLCBtb25vc3BhY2V9cHJlLGNvZGV7Zm9udC1mYW1pbHk6bW9ub3NwYWNlfXByZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzAwMDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxNnB4fXByZSAuY29tbWVudHtjb2xvcjojODg4fXByZSAuc3VwcG9ydHtjb2xvcjojY2Q1N2Q1fXByZSAuY29uc3RhbnQubnVtZXJpYyxwcmUgLnBocC5lbWJlZGRlZHtjb2xvcjojZmEwMDAyO2ZvbnQtd2VpZ2h0OmJvbGR9cHJlIC5rZXl3b3JkLHByZSAuY29uc3RhbnQubGFuZ3VhZ2V7Y29sb3I6IzAwMDc4OTtmb250LXdlaWdodDpib2xkfXByZSAuc2VsZWN0b3IscHJlIC5zdXBwb3J0LnByb3BlcnR5LHByZSAuZW50aXR5Lm5hbWUuZnVuY3Rpb257Y29sb3I6IzAwMH1wcmUgLnN0b3JhZ2UuZnVuY3Rpb24scHJlIC52YXJpYWJsZS5zZWxmLHByZSAuc3VwcG9ydC5mdW5jdGlvbixwcmUgLmNvbnN0YW50Lmxhbmd1YWdle2NvbG9yOiMwMDA7Zm9udC13ZWlnaHQ6Ym9sZH1wcmUgLnN0cmluZ3tjb2xvcjojMGQ0M2ZhO2ZvbnQtd2VpZ2h0Om5vcm1hbH1wcmUgLmNzcy1wcm9wZXJ0eStzcGFuLHByZSAua2V5d29yZC51bml0LHByZSAuc3VwcG9ydC5jc3MtdmFsdWV7Y29sb3I6IzBkNDNmYSAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0Om5vcm1hbCAhaW1wb3J0YW50fXByZSAuZW50aXR5LnRhZy5zdHlsZSsuc3RyaW5nLHByZSAucGhwLmVtYmVkZGVkIC5jb25zdGFudC5sYW5ndWFnZSxwcmUgLnBocC5lbWJlZGRlZCAua2V5d29yZHtjb2xvcjojMzdhMzQ4ICFpbXBvcnRhbnR9cHJlIC5zdXBwb3J0Lm1ldGhvZHtjb2xvcjojMmJkNWJifXByZSAuZW50aXR5Lm5hbWV7Y29sb3I6I2ZkNzRlMH1wcmUgLnN1cHBvcnQuY3NzLXByb3BlcnR5LHByZSAuc3VwcG9ydC50YWctbmFtZSxwcmUgLnN1cHBvcnQudGFnLHByZSAuc3VwcG9ydC5hdHRyaWJ1dGUscHJlIC5zdXBwb3J0LmF0dHJpYnV0ZSsub3BlcmF0b3J7Y29sb3I6IzAwMDc4OX1wcmUgLnN0b3JhZ2UubW9kdWxlLHByZSAuc3RvcmFnZS5jbGFzc3tjb2xvcjojMTIyNTczO2ZvbnQtd2VpZ2h0OmJvbGR9cHJlIC5jc3MuZW1iZWRkZWQgLnN1cHBvcnQudGFnLHByZSAuY3NzLmVtYmVkZGVkIC5zdHlsZS50YWd7Y29sb3I6I2NkNTdkNX1wcmUgLmtleXdvcmQub3BlcmF0b3J7Y29sb3I6IzI4NTJlYjtmb250LXdlaWdodDpub3JtYWx9cHJlIC5waHAuZW1iZWRkZWQgLnZhcmlhYmxlLHByZSAucGhwLmVtYmVkZGVkIC5zdG9yYWdlLmZ1bmN0aW9ue2NvbG9yOiMwZDQzZmE7Zm9udC13ZWlnaHQ6bm9ybWFsfXByZSAucGhwLmVtYmVkZGVkIC5zdHJpbmcscHJlIC5qcy5lbWJlZGRlZCAudGFnLnNjcmlwdHtjb2xvcjojYzQwMDFlfXByZSAucGhwLmVtYmVkZGVkIC5jb21tZW50e2NvbG9yOiNmNGI0NDE7Zm9udC13ZWlnaHQ6bm9ybWFsfXByZSAucGhwLmVtYmVkZGVkIC5mdW5jdGlvbi5uYW1le2NvbG9yOiMwMDA7Zm9udC13ZWlnaHQ6bm9ybWFsfVxcclxcblxcclxcbnByZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwMDAwMDUwO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDIwcHggdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci10b3Atd2lkdGg6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweCAxMHB4IDIwcHggMnB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDVweCAxMHB4IDA7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5wcmUgLnN0b3JhZ2UuZnVuY3Rpb24sIHByZSAudmFyaWFibGUuc2VsZixcXHJcXG5wcmUgLnN1cHBvcnQuZnVuY3Rpb24sIHByZSAuY29uc3RhbnQubGFuZ3VhZ2Uge1xcclxcbiAgICBjb2xvcjogZGFya29yY2hpZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbnByZSAuc3RvcmFnZS50eXBlIHtcXHJcXG4gIGNvbG9yOiBmaXJlYnJpY2s7XFxyXFxufVxcclxcblxcclxcbnByZSAuZW50aXR5Lm5hbWUuZnVuY3Rpb24ge1xcclxcbiAgICBjb2xvcjogcmdiKDcsIDExOSwgNyk7XFxyXFxufVxcclxcblxcclxcbmNvZGUge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNlZWY7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxZnIpKTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uZ3JpZCA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG4uZ3JpZCA+IGRpdiA+IGEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLyogLS1jYXAtaW1hZ2UgOiB1cmwoaHR0cHM6Ly93d3cud2ViZnguY29tL3Rvb2xzL2Vtb2ppLWNoZWF0LXNoZWV0L2dyYXBoaWNzL2Vtb2ppcy9jb2ZmZWUucG5nKTsgKi9cXHJcXG4gIC0tY2FwLWltYWdlIDogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vanMtc2FtcGxlcy9pY29ucy9jYXAucG5nKTtcXHJcXG4gIC8qIC0tbGluay1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vanMtc2FtcGxlcy9pY29ucy9saW5rLnBuZyk7ICovXFxyXFxuXFxyXFxuICAtLWJhY2stY29sb3I6ICNmZmZmZmY5MDtcXHJcXG4gIC0tbWVudS1iYWNrLWNvbG9yOiAjZmEwO1xcclxcbiAgLS1zdWJtZW51LWJhY2stY29sb3I6ICMwOWI7XFxyXFxuICAtLWJhY2stdHJhbnNwYXJlbnQ6ICNmZmZmZmYwMDtcXHJcXG4gIC0tbWVudS1jb2xvcjogIzA5YjtcXHJcXG4gIC0tc3VibWVudS1jb2xvcjogIzA5YjtcXHJcXG4gIC0tbWVudS1jb2xvci1ob3ZlcjogIzAwMDtcXHJcXG4gIC0tc3VibWVudS1jb2xvci1ob3ZlcjogIzAwMDtcXHJcXG4gIC0tc2VsZWN0ZWQtbGVzc29uLWNvbG9yOiAjZmZmO1xcclxcbiAgLS1oZWFkZXItYmFjay1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDAwMDAsICMwMDAwMDA1MCAzMCUsICMwMDAwMDAgNDAlLCAjMDAwICk7XFxyXFxuICAtLWhlYWRlci1iYWNrLWltYWdlOiB1cmwoaHR0cHM6Ly9jZG4uZ2xpdGNoLmNvbS9hNGUwYTlmZC1lYTdiLTQ3Y2YtYjUyYS00OGZkNjM1OWM1NTklMkZzdGFycy01LmdpZik7XFxyXFxuXFxyXFxuICAvKi0taWNvbjogICAgICAgdXJsKC4uL3NyYy9pbWFnZXMvY2F0LmdpZik7Ki9cXHJcXG4gIC0taWNvbjogICAgICAgdXJsKGh0dHBzOi8vY2RuLmdsaXRjaC5jb20vYTRlMGE5ZmQtZWE3Yi00N2NmLWI1MmEtNDhmZDYzNTljNTU5JTJGcGVyc29uYWdlLXRvLXJpZ2h0LmdpZik7XFxyXFxuICAtLXNlYXJjaDogICAgIHVybChodHRwczovL3d3dy53ZWJmeC5jb20vdG9vbHMvZW1vamktY2hlYXQtc2hlZXQvZ3JhcGhpY3MvZW1vamlzL21hZy5wbmcpO1xcclxcbiAgLS1saW5rLWltYWdlOiB1cmwoaHR0cHM6Ly9nYXJldm5hLmdpdGh1Yi5pby9qcy1zYW1wbGVzL2ljb25zL2xpbmstaWNvLnBuZyk7XFxyXFxuXFxyXFxuICAtLWJ1dHRvbi1ncmFkaWVudC0wOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOWIsICMwOWIsICMwOWIpO1xcclxcbiAgLS1idXR0b24tZ3JhZGllbnQtMTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCAxMCUgMzAlLCAjMDliKTtcXHJcXG4gIC0tYnV0dG9uLWdyYWRpZW50LTI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgMzAlIDUwJSwgIzA5Yik7XFxyXFxuICAtLWJ1dHRvbi1ncmFkaWVudC0zOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDUwJSA3MCUsICMwOWIpO1xcclxcbiAgLS1idXR0b24tZ3JhZGllbnQtNDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCA3MCUgOTAlLCAjMDliKTtcXHJcXG4gIC0tYnV0dG9uLWdyYWRpZW50LTU6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgNDAlIDUwJSwgIzA5Yik7XFxyXFxuICAtLW1haW4tbWVudS1pdGVtLWhlaWdodDogMjBweDtcXHJcXG4gIC0tbWFpbi1mb250OiAnUG9wcGlucycsICdNb250c2VycmF0JywgJ1JvYm90bycsIEFyaWFsO1xcclxcbiAgLS1mdW55LWZvbnQ6ICdMdWNraWVzdCBHdXknLCAnTW9udHNlcnJhdCcsICdSb2JvdG8nLCBBcmlhbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDIwcHggY2FsYyg1MCUgLSA0NTBweCk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBBcmlhbDtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDIwcHggd2hpdGU7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCA3MHB4IHdoaXRlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gIG1hcmdpbjogMzJweCAwO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2Y1MDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDEuMnB4ICMwOWI7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09ICBtYWluLW1lbnUtY29tcG9uZW50ICA9PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG5tYWluLW1lbnUtY29tcG9uZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iYWNrLWltYWdlKSwgdmFyKC0taGVhZGVyLWJhY2stY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwJSwgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14LCBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDkwO1xcclxcbiAgICB6LWluZGV4OiA1NTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbi1tZW51LWNvbXBvbmVudDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiQ2xpZW50LXNpZGUgSlNcXFwiO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkx1Y2tpZXN0IEd1eVxcXCI7XFxyXFxuICAgIGNvbG9yOiAjZGVmO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxyXFxuICAgIC1tb3otbGV0dGVyLXNwYWNpbmc6IDI7XFxyXFxuICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyO1xcclxcbn1cXHJcXG5cXHJcXG5wb3B1cC13aW4gaW1nIHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxucG9wdXAtd2luIGgzIHtcXHJcXG4gIGNvbG9yOiAjZGRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcXHJcXG4gIG1haW4tbWVudS1jb21wb25lbnQ6YmVmb3JlIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gIG1haW4tbWVudS1jb21wb25lbnQ6YmVmb3JlIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIGdsaXRjaC1sb2dvIHsgZGlzcGxheTogbm9uZTsgfVxcclxcbiAgcG9wdXAtd2luIHsgZGlzcGxheTogbm9uZTsgfVxcclxcblxcclxcbiAgbWFpbi1tZW51LWNvbXBvbmVudDpiZWZvcmUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSwgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDgwcHgpIHtcXHJcXG4gICAgbWFpbi1tZW51LWNvbXBvbmVudCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBtYWluLW1lbnUtY29tcG9uZW50OmJlZm9yZSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiA9PT09PSBnbGl0Y2ggbG9nbyA9PT09PSAqL1xcclxcblxcclxcbmdsaXRjaC1sb2dvIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDcwcHg7XFxyXFxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubWVudS1jb21wb25lbnQge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogOHB4O1xcclxcbiAgICB6LWluZGV4OiA1MDA7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2xvc2UtYnV0dG9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy53ZWJmeC5jb20vdG9vbHMvZW1vamktY2hlYXQtc2hlZXQvZ3JhcGhpY3MvZW1vamlzL25vX2VudHJ5X3NpZ24ucG5nKTtcXHJcXG4gIHdpZHRoOjMwcHg7XFxyXFxuICBoZWlnaHQ6MzBweDtcXHJcXG59XFxyXFxuLmNsb3NlLWJ1dHRvbjpob3ZlcjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDc5O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjMDAwMDAwNzA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogI2Y1MDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmEwO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbm9pc2UtYmFjaywgI25vaXNlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMCUgMCUsIDAlIDAlLCAwJSAwJSk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50OmhvdmVyID4gI25vaXNlLWJhY2sge1xcclxcbiAgYW5pbWF0aW9uOiBjbGlwLWFuaW1hdGlvbiAwLjNzIGluZmluaXRlO1xcclxcbn1cXHJcXG4uY29udGVudDpob3ZlciA+ICNub2lzZSB7XFxyXFxuICBhbmltYXRpb246IGNsaXAtYW5pbWF0aW9uIDAuNHMgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbiNub2lzZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbm9pc2UtYmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDliO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNsaXAtYW5pbWF0aW9uIHtcXHJcXG4gICAgMCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDUlIDAlLCA1JSA0JSwgMCUgNCUpOyB9XFxyXFxuICAgIDIlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDglLCAxMCUgOCUsIDEwJSAxMCUsIDAlIDEwJSk7IH1cXHJcXG4gICAgNSUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDE1JSAwJSwgMTUlIDUlLCAwJSA1JSk7IH1cXHJcXG4gICAgNyUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTIlLCA0MCUgMTIlLCA0MCUgMTUlLCAwJSAxNSUpOyB9XFxyXFxuICAgMTAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDI1JSwgMjAlIDI1JSwgMjAlIDMwJSwgMCUgMzAlKTsgfVxcclxcbiAgIDE1JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA4OCUsIDIwJSA4OCUsIDIwJSA5MCUsIDAlIDkwJSk7IH1cXHJcXG4gICAyMCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgOTclLCA1MCUgOTclLCA1MCUgMTAwJSwgMCUgMTAwJSk7IH1cXHJcXG4gICAyNyUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgOTAlLCAzMCUgOTAlLCAzMCUgOTIlLCAwJSA5MiUpOyB9XFxyXFxuICAgMzAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDUwJSwgNDAlIDUwJSwgNDAlIDU0JSwgMCUgNTQlKTsgfVxcclxcbiAgIDM0JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA0MyUsIDQwJSA0MyUsIDQwJSA0NSUsIDAlIDQ1JSk7IH1cXHJcXG4gICA0MCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAyMCUgMzAlLCAyMCUgMzIlLCAwJSAzMiUpOyB9XFxyXFxuICAgNDclIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA1MCUgMCUsIDUwJSAzJSwgMCUgMyUpOyB9XFxyXFxuICAgNTAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDE1JSwgMzAlIDE1JSwgMzAlIDIwJSwgMCUgMjAlKTsgfVxcclxcbiAgIDU1JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAxNyUsIDQwJSAxNyUsIDQwJSAyMCUsIDAlIDIwJSk7IH1cXHJcXG4gICA2MCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNzAlLCA0MCUgNzAlLCA0MCUgNzMlLCAwJSA3MyUpOyB9XFxyXFxuICAgNjQlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDE4JSwgMzAlIDE4JSwgMzAlIDIwJSwgMCUgMjAlKTsgfVxcclxcbiAgIDcwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA4MCUsIDIwJSA4MCUsIDIwJSA4NSUsIDAlIDg1JSk7IH1cXHJcXG4gICA3MiUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNzQlLCAyMCUgNzQlLCAyMCUgNzclLCAwJSA3NyUpOyB9XFxyXFxuICAgNzglIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgNDAlIDMwJSwgNDAlIDMzJSwgMCUgMzMlKTsgfVxcclxcbiAgIDgwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA0MCUsIDQwJSA0MCUsIDQwJSA0NCUsIDAlIDQ0JSk7IH1cXHJcXG4gICA5MCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAlLCAzMCUgMTAlLCAzMCUgMTIlLCAwJSAxMiUpOyB9XFxyXFxuICAxMDAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDg0JSwgMzUlIDg0JSwgMzUlIDg4JSwgMCUgODglKTsgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFrZXQtMDEge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wMS5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMDIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wMi5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMDMge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wMy5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMDQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wNC5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMDUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wNS5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMDYge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wNi5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMDcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wNy5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMDgge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wOC5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMDkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8wOS5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMTAge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8xMC5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMTEge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8xMS5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMTIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8xMi5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMTMge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8xMy5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMTQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8xNC5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMTUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8xNS5wbmcpO1xcclxcbn1cXHJcXG4ubWFrZXQtMTYge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vYS1sZXZlbC1qcy1sZXNzb25zL3NyYy9pbWFnZXMvcHJvamVjdC8xNi5wbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFrZXQtMDEsIC5tYWtldC0wMiwgLm1ha2V0LTAzLCAubWFrZXQtMDQsIC5tYWtldC0wNSwgLm1ha2V0LTA2LFxcclxcbi5tYWtldC0wNywgLm1ha2V0LTA4LCAubWFrZXQtMDksIC5tYWtldC0xMCwgLm1ha2V0LTExLCAubWFrZXQtMTIsXFxyXFxuLm1ha2V0LTEzLCAubWFrZXQtMTQsIC5tYWtldC0xNSwgLm1ha2V0LTE2IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgbWluLXdpZHRoOiAzMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwdmg7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCA+IGRpdiA+IGEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiY2xhc3MgR3JhcGhpY0hlYWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoKVxyXG4gICAgICAgIHRoaXMubm9ybWFsU3RhdGUgPSBbIC0xMDAsIDAsIDMwMCwgMCBdXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBbIC0xMDAsIDAsIDMwMCwgMCBdXHJcbiAgICAgICAgdGhpcy5ob3ZlclN0YXRlID0gWyAyMCwgNzAsIDgwLCA3MCBdXHJcbiAgICAgICAgdGhpcy5kZWZzID0gYFxyXG4gICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cInNoYWRvd1wiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjMwMCVcIiBoZWlnaHQ9XCIzMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmVPZmZzZXQgcmVzdWx0PVwib2ZmT3V0XCIgaW49XCJTb3VyY2VBbHBoYVwiIGR4PVwiMVwiIGR5PVwiMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PVwiYmx1ckluXCIgaW49XCJvZmZPdXRcIiBzdGREZXZpYXRpb249XCI3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImJsdXJPdXRcIiBtb2RlPVwibm9ybWFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0dGVybiBpZD1cInBpY3R1cmVcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSB4bGluazpocmVmPVwiaHR0cHM6Ly9jZG4uZ2xpdGNoLmNvbS9hNGUwYTlmZC1lYTdiLTQ3Y2YtYjUyYS00OGZkNjM1OWM1NTklMkZzdGFycy01LmdpZlwiIHg9XCIwXCIgeT1cIi01MFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3BhdHRlcm4+XHJcbiAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3cgKCB7IG1vZGU6IFwiY2xvc2VkXCIgfSApXHJcblx0XHR0aGlzLnNoYWRvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxNTAgMTUwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLmRlZnN9XHJcbiAgICAgIFx0XHRcdDxwYXRoIGQ9XCJNLTUwIDAgQyAke3RoaXMuY3VycmVudFN0YXRlWzBdfSAke3RoaXMuY3VycmVudFN0YXRlWzFdfSwgJHt0aGlzLmN1cnJlbnRTdGF0ZVsyXX0gJHt0aGlzLmN1cnJlbnRTdGF0ZVszXX0sIDI1MCAwXCIgZmlsdGVyPVwidXJsKCNzaGFkb3cpXCIgZmlsbD1cInVybCgjcGljdHVyZSlcIiAvPlxyXG4gICAgXHRcdDwvc3ZnPlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcInN2Z1wiIClcclxuICAgICAgICB0aGlzLnBhdGggPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCJwYXRoXCIgKVxyXG4gICAgICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIFwic3R5bGVcIiApXHJcbiAgICAgICAgKS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmFjay1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ZnID4gcGF0aCB7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiB1cmwoI3BpY3R1cmUpO1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZnVueS1mb250KTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2Y1MDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpLCBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0ODBweCkge1xyXG4gICAgICAgICAgICAgICAgc3ZnLCBoMyB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICAgICAgdGhpcy5zdmcub25wb2ludGVyZG93biA9IHRoaXMuY2hhbmdlLmJpbmQgKCB0aGlzLCBcImhvdmVyU3RhdGVcIiApXHJcbiAgICAgICAgdGhpcy5zdmcub25wb2ludGVydXAgPSB0aGlzLmNoYW5nZS5iaW5kICggdGhpcywgXCJub3JtYWxTdGF0ZVwiIClcclxuICAgICAgICB0aGlzLnN2Zy5hZGRFdmVudExpc3RlbmVyICggXCJwb2ludGVyZG93blwiLCB0aGlzLmNoYW5nZVNWR3NpemUgKVxyXG4gICAgICAgIHRoaXMuc3ZnLmFkZEV2ZW50TGlzdGVuZXIgKCBcInBvaW50ZXJ1cFwiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcclxuICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIHdpbmRvdy5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTVkdzaXplICggZXZlbnQgKSB7XHJcbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0LnNldFBvaW50ZXJDYXB0dXJlICggZXZlbnQucG9pbnRlcklkIClcclxuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCI4MHZoXCJcclxuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwidmFyKC0tYmFjay10cmFuc3BhcmVudClcIlxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIlxyXG4gICAgfVxyXG4gICAgYW5pbWF0ZSAoKSB7XHJcbiAgICAgICAgbGV0IHgxID0gdGhpcy5jdXJyZW50U3RhdGVbMF0sXHJcbiAgICAgICAgICAgIHkxID0gdGhpcy5jdXJyZW50U3RhdGVbMV0sXHJcbiAgICAgICAgICAgIHgyID0gdGhpcy5jdXJyZW50U3RhdGVbMl0sXHJcbiAgICAgICAgICAgIHkyID0gdGhpcy5jdXJyZW50U3RhdGVbM11cclxuICAgICAgICB0aGlzLnN2Zy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICR7dGhpcy5kZWZzfVxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTS0xNTAgMCBDICR7eDF9ICR7eTF9LCAke3gyfSAke3kyfSwgMzAwIDBcIiBmaWx0ZXI9XCJ1cmwoI2YxKVwiLz5cclxuICAgICAgICAgICAgPCEtLSA8aW1hZ2UgeGxpbms6aHJlZj1cImh0dHBzOi8veW9rb2VudC5jb20vaW1hZ2VzL2ZpbmdlcnByaW50LXBuZy1ncmVlbi0zLnBuZ1wiIHdpZHRoPVwiMjAlXCIgaGVpZ2h0PVwiMjAlXCIgeD1cIjUwXCIgeT1cIjIwXCIgLz4gLS0+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIHRoaXMuY2hhbmdlLmNhbGwgKCB0aGlzLCBhcmd1bWVudHNbMF0gKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlICgpIHtcclxuICAgICAgICBsZXQgZGlzdCA9IDBcclxuICAgICAgICBmb3IgKCBsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY3VycmVudFN0YXRlLmxlbmd0aDsgaW5kZXgrKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzIFsgYXJndW1lbnRzWzBdIF0gWyBpbmRleCBdIC0gdGhpcy5jdXJyZW50U3RhdGUgWyBpbmRleCBdXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSBbIGluZGV4IF0gKz0gZGlzdGFuY2UgPCAwID8gLTEgOiBkaXN0YW5jZSA+IDAgPyAxIDogMFxyXG4gICAgICAgICAgICAgICAgZGlzdCArPSBNYXRoLmFicyAoIGRpc3RhbmNlIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBkaXN0ID09PSAwICkge1xyXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gXCJub3JtYWxTdGF0ZVwiICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdmcuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCJcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnLnN0eWxlLmJhY2tncm91bmQgPSBcInZhcigtLWhlYWRlci1iYWNrLWNvbG9yKVwiXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN2Zy5zdHlsZS5ib3hTaGFkb3cgPSBcIjVweCA1cHggMTBweCAjMDAwMDAwNzBcIlxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3ZnLmlubmVySFRNTCArPSBgPGltYWdlIHhsaW5rOmhyZWY9XCJodHRwczovL3lva29lbnQuY29tL2ltYWdlcy9maW5nZXJwcmludC1wbmctZ3JlZW4tMy5wbmdcIiB3aWR0aD1cIjIwJVwiIGhlaWdodD1cIjIwJVwiIHg9XCI1MFwiIHk9XCIyMFwiIC8+YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKCB0aGlzLmFuaW1hdGUuYmluZCAoIHRoaXMsIGFyZ3VtZW50c1swXSApIClcclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgY29uc29sZS5sb2cgKCBcIkdyYXBoaWNIZWFkZXJDb21wb25lbnQgd2FzIGRpc2Nvbm5lY3RlZCFcIiApXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSAoXHJcbiAgICBcImdyYXBoaWMtaGVhZGVyXCIsXHJcbiAgICBHcmFwaGljSGVhZGVyXHJcbilcclxuXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQgKFxyXG4vLyAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIFwiZ3JhcGhpYy1oZWFkZXJcIiApXHJcbi8vIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoaWNIZWFkZXJcclxuIiwiY2xhc3MgU2h1dHRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTpcImNsb3NlZFwiIH0gKVxyXG4gICAgICAgIHRoaXMucG9seWdvbmVzID0gW11cclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCBcInN0eWxlXCIgKVxyXG4gICAgICAgIClcclxuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0LWZpZ3VyZSB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMnB4IDJweCA0cHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZWZ0LWZpZ3VyZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIG1vdmllLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgMCUgICB7IGxlZnQ6IC0xMDAlOyB9XHJcbiAgICAgICAgICAgICAgICA0NSUgIHsgbGVmdDogMCU7IH1cclxuICAgICAgICAgICAgICAgIDU1JSAgeyBsZWZ0OiAwJTsgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7IGxlZnQ6IC0xMDAlOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBtb3ZpZS1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAwJSAgIHsgcmlnaHQ6IC0xMDAlOyB9XHJcbiAgICAgICAgICAgICAgICA0NSUgIHsgcmlnaHQ6IDAlOyB9XHJcbiAgICAgICAgICAgICAgICA1NSUgIHsgcmlnaHQ6IDAlOyB9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHsgcmlnaHQ6IC0xMDAlOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzLmNyZWF0ZUVsZW0gKCBcIm1haW5cIiwgdGhpcy5zaGFkb3cgKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUG9seWdvbmVzKCBtYWluIClcclxuICAgICAgICB0aGlzLnBvbHlnb25lcy5mb3JFYWNoIChcclxuICAgICAgICAgICAgaXRlbSA9PiBpdGVtLmZvckVhY2ggKFxyXG4gICAgICAgICAgICAgICAgZWxlbSA9PiBlbGVtLnN0eWxlIFsgXCJhbmltYXRpb24tbmFtZVwiIF0gPSBlbGVtLm1vdmllXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBnZXRTZWdtZW50SGVpZ2h0ICggdG90YWxIZWlnaHQgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsSGVpZ2h0ID4gNTAgP1xyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoIDUwLCBNYXRoLm1pbiAoIDE1MCwgTWF0aC5yYW5kb20gKCkgKiB0b3RhbEhlaWdodCApICkgOlxyXG4gICAgICAgICAgICAgICAgdG90YWxIZWlnaHRcclxuICAgIH1cclxuICAgIGdldFJhbmRvbUNvbG9yICgpIHtcclxuICAgICAgICByZXR1cm4gYHJnYmEoXHJcbiAgICAgICAgICAgICAgICAgICAgJHtNYXRoLnJvdW5kICggTWF0aC5yYW5kb20oKSAqIDIwMCApfSxcclxuICAgICAgICAgICAgICAgICAgICAke01hdGgucm91bmQgKCBNYXRoLnJhbmRvbSgpICogMjAwICl9LFxyXG4gICAgICAgICAgICAgICAgICAgICR7TWF0aC5yb3VuZCAoIE1hdGgucmFuZG9tKCkgKiAyMDAgKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgMC44KWBcclxuICAgIH1cclxuICAgIGNyZWF0ZUVsZW0gKCB0YWdOYW1lLCBjb250YWluZXIgKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCB0YWdOYW1lIClcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBjcmVhdGVGaWd1cmUgKCBjb250YWluZXIsIGNsYXNzX25hbWUgKSB7XHJcbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLmNyZWF0ZUVsZW0gKCBcImZpZ3VyZVwiLCBjb250YWluZXIgKVxyXG4gICAgICAgIGNsYXNzX25hbWUgPyBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzX25hbWUgOiBudWxsXHJcbiAgICAgICAgcmV0dXJuIGVsZW1cclxuICAgIH1cclxuICAgIGNyZWF0ZVBvbHlnb25lcyAoIGNvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgbGV0IG51bSA9IE1hdGgubWF4ICggNSwgTWF0aC5yb3VuZCAoIE1hdGgucmFuZG9tICgpICogMTAgKSApXHJcbiAgICAgICAgbGV0IHRvdGFsSGVpZ2h0ID0gY29udGFpbmVyLm9mZnNldEhlaWdodFxyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmdldFNlZ21lbnRIZWlnaHQgKCB0b3RhbEhlaWdodCApXHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9uID0gdGhpcy5jcmVhdGVFbGVtICggXCJzZWN0aW9uXCIsIGNvbnRhaW5lciApXHJcbiAgICAgICAgICAgIHNlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiXHJcbiAgICAgICAgICAgIHRvdGFsSGVpZ2h0IC09IGhlaWdodFxyXG5cclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5yb3VuZCAoIE1hdGgubWF4ICggMC4zLCBNYXRoLm1pbiAoIE1hdGgucmFuZG9tICgpLCAwLjcgKSApICogc2VjdGlvbi5vZmZzZXRXaWR0aCApXHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbTEgPSB0aGlzLmNyZWF0ZUZpZ3VyZSAoIHNlY3Rpb24sIFwibGVmdC1maWd1cmVcIiApXHJcbiAgICAgICAgICAgIGxldCBlbGVtMiA9IHRoaXMuY3JlYXRlRmlndXJlICggc2VjdGlvbiwgXCJyaWdodC1maWd1cmVcIiApXHJcbiAgICAgICAgICAgIC8vIGVsZW0xLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuZ2V0UmFuZG9tQ29sb3IoKVxyXG4gICAgICAgICAgICAvLyBlbGVtMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmdldFJhbmRvbUNvbG9yKClcclxuXHJcbiAgICAgICAgICAgIGVsZW0xLnN0eWxlWyBcImFuaW1hdGlvbi1kdXJhdGlvblwiIF0gPVxyXG4gICAgICAgICAgICAgICAgZWxlbTIuc3R5bGVbIFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIgXSA9IE1hdGgubWF4KCAwLjUsIE1hdGgucmFuZG9tICgpICkgKyBcInNcIlxyXG5cclxuICAgICAgICAgICAgZWxlbTEubW92aWUgPSBcIm1vdmllLWxlZnRcIlxyXG4gICAgICAgICAgICBlbGVtMi5tb3ZpZSA9IFwibW92aWUtcmlnaHRcIlxyXG5cclxuICAgICAgICAgICAgZWxlbTEuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIlxyXG4gICAgICAgICAgICBlbGVtMi5zdHlsZS53aWR0aCA9IHNlY3Rpb24ub2Zmc2V0V2lkdGggLSB3aWR0aCArIFwicHhcIlxyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2x5Z29uZXMucHVzaCAoIFsgZWxlbTEsIGVsZW0yIF0gKVxyXG4gICAgICAgIH0gd2hpbGUgKCB0b3RhbEhlaWdodCA+IDAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUgKCBcInNodXR0ZXItZWxlbWVudFwiLCBTaHV0dGVyIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNodXR0ZXJcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jbGFzcyBDb2RlT3V0cHV0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICgpXHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogXCJjbG9zZWRcIiB9IClcclxuICAgICAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICogeyBvdXRsaW5lOiBub25lOyB9XHJcbiAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2RkZTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA5YiwgIzA5YiwgIzA5Yik7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNYWxpLCBNb250c2VycmF0LCBBcmlhbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uLWhvdmVyIDAuMnMgZWFzZSBhbHRlcm5hdGUgMjtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAjMDAwMDAwNTA7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDU1NzdkZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBidXR0b24taG92ZXIge1xyXG4gICAgICAgICAgICAgICAgMCUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCMwOWIsICMwOWIpOyB9XHJcbiAgICAgICAgICAgICAgIDIwJSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgMTAlIDMwJSwgIzA5Yik7IH1cclxuICAgICAgICAgICAgICAgNDAlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCAzMCUgNTAlLCAjMDliKTsgfVxyXG4gICAgICAgICAgICAgICA2MCUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDUwJSA3MCUsICMwOWIpOyB9XHJcbiAgICAgICAgICAgICAgIDgwJSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgNzAlIDkwJSwgIzA5Yik7IH1cclxuICAgICAgICAgICAgICAxMDAlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzA5YiwgIzA5Yik7IH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA3OTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPGJ1dHRvbj5TdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCJidXR0b25cIiApXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwic2VjdGlvblwiIClcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsgXCJzY3JpcHRcIiBdXHJcbiAgICB9XHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgZmV0Y2goIGAke2NyZWF0ZVBhdGgoXCJsZXNzb25zXCIsIG5ld1ZhbCApfWAgKVxyXG4gICAgICAgICAgICAudGhlbiAoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSApXHJcbiAgICAgICAgICAgIC50aGVuICggcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UucmVwbGFjZSgvZG9jdW1lbnQuYm9keS9nLCBcInRoaXMuc2VjdGlvblwiKVxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UucmVwbGFjZSgvZG9jdW1lbnQuaGVhZC9nLCBcInRoaXMuc2VjdGlvblwiKVxyXG5cclxuICAgICAgICAgICAgICBsZXQgc3RvcEhhbmRsZXIgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwiU3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm9uY2xpY2sgPSBzdGFydEhhbmRsZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbi5zdG9wID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICAgICAgICB9LmJpbmQgKCB0aGlzIClcclxuXHJcbiAgICAgICAgICAgICAgbGV0IHN0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gXCJzdG9wXCJcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5vbmNsaWNrID0gc3RvcEhhbmRsZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbi5zdG9wID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGV2YWwgKCByZXNwb25zZSApXHJcbiAgICAgICAgICAgICAgfS5iaW5kICggdGhpcyApXHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuYnV0dG9uLm9uY2xpY2sgPSBzdGFydEhhbmRsZXJcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lIChcclxuICBcImNvZGUtb3V0cHV0XCIsXHJcbiAgQ29kZU91dHB1dFxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlT3V0cHV0XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvci1yYWluYm93LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3ItcmFpbmJvdy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvci1yYWluYm93LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIid1c2Ugc3RyaWN0J1xyXG5cclxuY2xhc3MgR2xpdGNoTG9nbyBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKVxyXG4gICAgbGV0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93ICggeyBtb2RlOiBcImNsb3NlZFwiIH0gKVxyXG4gICAgbGV0IHN0eWxlID0gc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIFwic3R5bGVcIiApXHJcbiAgICApXHJcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcclxuICAgIC5sb2dvLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZmZmO1xyXG4gICAgICAgIC8vIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDgwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubG9nby1ib3ggLm92ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB9XHJcbiAgICAubG9nby1ib3ggLm5vaXNlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcclxuICAgICAgICBhbmltYXRpb246IGdsaXRjaC1ub2lzZSAxcyBsaW5lYXIgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5sb2dvLWJveCAuZ2xpdGNoIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLCBcIlBvcHBpbnNcIiwgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5sb2dvLWJveCAuZ2xpdGNoOmJlZm9yZSwgLmxvZ28tYm94IC5nbGl0Y2g6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIkpTXCI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5sb2dvLWJveCAuZ2xpdGNoOmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDIuNXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogLTIuNXB4IDAgI2Y1MDtcclxuICAgICAgYW5pbWF0aW9uOiBnbGl0Y2gtYmVmb3JlIDJzIGVhc2UgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tYm94IC5nbGl0Y2g6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAtMi41cHg7XHJcbiAgICAgIHRleHQtc2hhZG93OiAtMi41cHggMCAjMDliO1xyXG4gICAgICBhbmltYXRpb246IGdsaXRjaC1hZnRlciAycyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGdsaXRjaC1iZWZvcmUge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsIDEyNXB4LCAxMjBweCwgNTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LCAxMjVweCwgNTlweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAxMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzBweCwgMjEwcHgsIDkwcHgsIDMwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDE1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxNXB4LCA0MHB4LCA0OHB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDIwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxNXB4LCA1cHgsIDUwcHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDI1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxN3B4LCAxMjVweCwgNDVweCwgNTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMzAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDBweCwgMTI1cHgsIDMycHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMzUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDIwcHgsIDEwMHB4LCA0N3B4LCA1MHB4KTtcclxuICAgICAgfVxyXG4gICAgICA0MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzBweCwgODBweCwgMjhweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNDUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDE2cHgsIDUwcHgsIDM0cHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDBweCwgMTI1cHgsIDM3cHgsIDEwMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA1NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTJweCwgMTAwcHgsIDIxcHgsIDMwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDYwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg0MXB4LCAxMjVweCwgNTVweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNjUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDVweCwgNTBweCwgMzlweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA3MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNXB4LCAxMjBweCwgMjRweCwgNDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNzUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDMwcHgsIDEyNXB4LCA1MHB4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA4MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzdweCwgODBweCwgNTBweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA4NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzdweCwgODBweCwgNDhweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgOTAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDMwcHgsIDUwcHgsIDkycHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgOTUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDE3cHgsIDEyNXB4LCA5MnB4LCA5MHB4KTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDBweCwgMTI1cHgsIDQ1cHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgZ2xpdGNoLWFmdGVyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTBweCwgNTBweCwgMzRweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg0cHgsIDcwcHgsIDIycHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDBweCwgNTBweCwgMTdweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAxNSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoN3B4LCAxMjVweCwgMzRweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMjAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDExcHgsIDExNXB4LCA0NXB4LCAzMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAyNSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoM3B4LCAxMjVweCwgMThweCwgNzBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMzAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDM4cHgsIDUwcHgsIDEwMHB4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAzNSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMjBweCwgNzBweCwgMTIwcHgsIDVweCk7XHJcbiAgICAgIH1cclxuICAgICAgNDAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDVweCwgMTI1cHgsIDQ4cHgsIDkwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDQ1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxNXB4LCA0MHB4LCA0NHB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgyMXB4LCA4MHB4LCAzN3B4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA1NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTRweCwgMTI1cHgsIDQwcHgsIDQwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDYwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxNnB4LCA1MHB4LCAzMHB4LCA4cHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDY1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg1MHB4LCAxMjVweCwgMTIwcHgsIDUwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDcwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxMHB4LCA3MHB4LCA0NHB4LCA0MHB4KTtcclxuICAgICAgfVxyXG4gICAgICA3NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNzBweCwgMTAwcHgsIDQ5cHgsIDMwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDgwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxM3B4LCAxMjBweCwgMTIwcHgsIDkwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDg1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzNXB4LCA4MHB4LCA5MHB4LCAzMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA5MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNXB4LCA4MHB4LCAzNXB4LCAyMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA5NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzBweCwgMTI1cHgsIDEyMHB4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDUwcHgsIDUwcHgsIDExMHB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGdsaXRjaC1ub2lzZSB7XHJcbiAgICAgIDAlIHsgdG9wOiAzMHB4OyBsZWZ0OiAyNXB4OyB3aWR0aDogMTBweDsgfVxyXG4gICAgICA1JSB7IHRvcDogOTBweDsgbGVmdDogMTEwcHg7IHdpZHRoOiAyMHB4OyB9XHJcbiAgICAgIDEwJSB7IHRvcDogNDBweDsgbGVmdDogNTBweDsgd2lkdGg6IDVweDsgfVxyXG4gICAgICAxNSUgeyB0b3A6IDkwcHg7IGxlZnQ6IDIwcHg7IHdpZHRoOiAyMHB4OyB9XHJcbiAgICAgIDIwJSB7IHRvcDogNTBweDsgbGVmdDogMTEwcHg7IHdpZHRoOiA1cHg7IH1cclxuICAgICAgMjUlIHsgdG9wOiA5MHB4OyBsZWZ0OiAzMHB4OyB3aWR0aDogMjBweDsgfVxyXG4gICAgICAzMCUgeyB0b3A6IDkwcHg7IGxlZnQ6IDExMHB4OyB3aWR0aDogMTBweDsgfVxyXG4gICAgICAzNSUgeyB0b3A6IDQwcHg7IGxlZnQ6IDUwcHg7IHdpZHRoOiA1cHg7IH1cclxuICAgICAgNDAlIHsgdG9wOiA5MHB4OyBsZWZ0OiA0MHB4OyB3aWR0aDogMjBweDsgfVxyXG4gICAgICA0NSUgeyB0b3A6IDUwcHg7IGxlZnQ6IDExMHB4OyB3aWR0aDogNXB4OyB9XHJcbiAgICAgIDUwJSB7IHRvcDogMzBweDsgbGVmdDogNTBweDsgd2lkdGg6IDEwcHg7IH1cclxuICAgICAgNTUlIHsgdG9wOiA3MHB4OyBsZWZ0OiAzMHB4OyB3aWR0aDogMjBweDsgfVxyXG4gICAgICA2MCUgeyB0b3A6IDkwcHg7IGxlZnQ6IDExMHB4OyB3aWR0aDogNXB4OyB9XHJcbiAgICAgIDY1JSB7IHRvcDogNDBweDsgbGVmdDogMTEwcHg7IHdpZHRoOiAyMHB4OyB9XHJcbiAgICAgIDcwJSB7IHRvcDogNTBweDsgbGVmdDogNTBweDsgIHdpZHRoOiAxMHB4OyB9XHJcbiAgICAgIDc1JSB7IHRvcDogOTBweDsgbGVmdDogNTBweDsgd2lkdGg6IDIwcHg7IH1cclxuICAgICAgODAlIHsgdG9wOiAzMHB4OyBsZWZ0OiA3MHB4OyB3aWR0aDogNXB4OyB9XHJcbiAgICAgIDg1JSB7IHRvcDogOTBweDsgbGVmdDogODBweDsgd2lkdGg6IDEwcHg7IH1cclxuICAgICAgOTAlIHsgdG9wOiA1MHB4OyBsZWZ0OiA0MHB4OyB3aWR0aDogNXB4OyB9XHJcbiAgICAgIDk1JSB7IHRvcDogNDBweDsgbGVmdDogNzBweDsgd2lkdGg6IDIwcHg7IH1cclxuICAgICAgMTAwJSB7IHRvcDogMzBweDsgbGVmdDogNTBweDsgd2lkdGg6IDVweDsgfVxyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBzaGFkb3cuaW5uZXJIVE1MICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImxvZ28tYm94XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvdmVyXCI+Q2xpZW50LXNpZGU8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGl0Y2hcIj5KUzwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5vaXNlXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGBcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSAoXHJcbiAgXCJnbGl0Y2gtbG9nb1wiLFxyXG4gIEdsaXRjaExvZ29cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xpdGNoTG9nb1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ncmlkLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ncmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ3JpZC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIndXNlIHN0cmljdCdcclxuXHJcbmNsYXNzIE1haW5NZW51Q29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coIHsgbW9kZTogXCJjbG9zZWRcIiB9IClcclxuICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lICggXCJwYWdlLWVsZW1lbnRcIiApWzBdXHJcbiAgICB0aGlzLmNvdXJzZSA9IGNyZWF0ZVBhdGgoIFwibGVzc29uc1wiLCBcIlwiIClcclxuICAgIHRoaXMuYXNzZXRzID0gY3JlYXRlUGF0aCggXCJzcmNcIiwgXCJcIiApXHJcbiAgICB0aGlzLm1lbnVPcHRpb25zID0gW11cclxuICAgIHRoaXMuc3VibWVudU9wdGlvbnMgPSBbXVxyXG4gICAgdGhpcy5zdGF0ZSA9IFwiY2xvc2VcIlxyXG4gIH1cclxuICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgKz0gYFxyXG5cclxuICAgICAgPGdyYXBoaWMtaGVhZGVyPjwvZ3JhcGhpYy1oZWFkZXI+XHJcbiAgICAgIDxzdmctbmF2LXBhbmVsPjwvc3ZnLW5hdi1wYW5lbD5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJtZW51VG9nZ2xlXCI+XHJcblxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8dWwgaWQ9XCJtZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWljb25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2gtaW5wdXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLXJlc3VsdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMz48YSBocmVmPVwiL1wiIGNsYXNzPVwiaG9tZVwiPkxlc3NvbnM8L2E+PC9oMz5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hc2lkZT5cclxuICAgICAgYFxyXG4gICAgICB0aGlzLmNoZWNrYm94ID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoICcjbWVudVRvZ2dsZSA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScgKVxyXG4gICAgICB0aGlzLm1lbnUgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIjbWVudVwiIClcclxuXHJcbiAgICAgIHRoaXMuc2V0U3R5bGVzKClcclxuICAgICAgdGhpcy5jaGVja2JveC5vbmNsaWNrID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gXCJjbG9zZVwiID8gXCJleHBhbmRcIiA6IFwiY2xvc2VcIlxyXG4gICAgICAgIHRoaXMubWVudS5zdHlsZVtcInRyYW5zaXRpb24tZGVsYXlcIl0gPSB0aGlzLnN0YXRlID09PSBcImV4cGFuZFwiID8gXCIxc1wiIDogXCIwc1wiXHJcbiAgICAgICAgdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwic3ZnLW5hdi1wYW5lbFwiICkuZGlzcGF0Y2hFdmVudCAoIG5ldyBFdmVudCAoIHRoaXMuc3RhdGUgKSApXHJcbiAgICAgIH0uYmluZCAodGhpcylcclxuXHJcbiAgICAgIHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIi5ob21lXCIgKS5vbmNsaWNrID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSAhdGhpcy5jaGVja2JveC5jaGVja2VkO1xyXG4gICAgICAgICAgdGhpcy5jaGVja2JveC5kaXNwYXRjaEV2ZW50ICggbmV3IEV2ZW50ICggXCJjbGlja1wiICkgKTtcclxuICAgICAgICAgIGlmICggbG9jYXRpb24uaG9zdCA9PT0gXCJqcy1sZXNzb25zLmdsaXRjaC5tZVwiIClcclxuICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoIHsgcm91dGU6IGV2ZW50LnRhcmdldC5ocmVmIH0sIFwiaG9tZVwiLCBldmVudC50YXJnZXQuaHJlZiApXHJcbiAgICAgICAgICB0aGlzLnZpZXcuc2V0QXR0cmlidXRlICggXCJzcmNcIiwgYCR7Y3JlYXRlUGF0aCggXCJsZXNzb25zXCIsIFwic3RhcnQtcGFnZS5tZFwiICl9YCApXHJcbiAgICAgIH0uYmluZCAoIHRoaXMgKVxyXG5cclxuICAgICAgdGhpcy5nZXREYXRhICgpLnRoZW4gKFxyXG4gICAgICAgICgpID0+IHRoaXMuc2hhZG93LmdldEVsZW1lbnRCeUlkICggXCJzZWFyY2gtaW5wdXRcIiApXHJcbiAgICAgICAgICAgIC5vbmlucHV0ID0gdGhpcy5zZWFyY2guYmluZCAoIHRoaXMgKVxyXG4gICAgICApXHJcbiAgfVxyXG4gIHNlYXJjaCAoIGV2ZW50ICkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zaGFkb3cuZ2V0RWxlbWVudEJ5SWQgKCBcInNlYXJjaC1yZXN1bHRcIiApXHJcbiAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgIGlmICggIWV2ZW50LnRhcmdldC52YWx1ZSApIHtcclxuICAgICAgICAgIGZvciAoIGxldCBpdGVtIG9mIHRoaXMubWVudU9wdGlvbnMgKSB0aGlzLnNob3cgKCBpdGVtIClcclxuICAgICAgICAgIGZvciAoIGxldCBpdGVtIG9mIHRoaXMuc3VibWVudU9wdGlvbnMgKSB0aGlzLnNob3cgKCBpdGVtIClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzdHJpbmdzID0gdGhpcy5rZXl3b3Jkcy5nZXRBbGwgKCBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSApXHJcbiAgICAgIGlmICggc3RyaW5ncy5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICByZXN1bHQuaW5uZXJ0ZXh0ID0gXCJOb3QgZm91bmQuLi5cIlxyXG4gICAgICAgICAgZm9yICggbGV0IGl0ZW0gb2YgdGhpcy5tZW51T3B0aW9ucyApIHRoaXMuaGlkZSAoIGl0ZW0gKVxyXG4gICAgICAgICAgZm9yICggbGV0IGl0ZW0gb2YgdGhpcy5zdWJtZW51T3B0aW9ucyApIHRoaXMuaGlkZSAoIGl0ZW0gKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGl0ZW1zID0gc3RyaW5ncy5tYXAgKCBpdGVtID0+IEpTT04ucGFyc2UoIGl0ZW0gKSApXHJcbiAgICAgIGZvciAoIGxldCBvcHRpb24gb2YgdGhpcy5tZW51T3B0aW9ucyApIHtcclxuICAgICAgICAgIGl0ZW1zLmZpbmQgKCBpdGVtID0+IG9wdGlvbi5maXJzdEVsZW1lbnRDaGlsZC5pZCA9PT0gaXRlbS5sZXNzb24gKSA/XHJcbiAgICAgICAgICAgICAgIHRoaXMuc2hvdyAoIG9wdGlvbiApIDogdGhpcy5oaWRlICggb3B0aW9uIClcclxuICAgICAgfVxyXG4gICAgICBmb3IgKCBsZXQgb3B0aW9uIG9mIHRoaXMuc3VibWVudU9wdGlvbnMgKSB7XHJcbiAgICAgICAgICBsZXQgY29udGVudCA9IG9wdGlvbi5xdWVyeVNlbGVjdG9yICggXCJhXCIgKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgaXRlbXMuZmluZCAoIGl0ZW0gPT4gY29udGVudCA9PT0gaXRlbS50b3BpYyApID9cclxuICAgICAgICAgICAgICB0aGlzLnNob3cgKCBvcHRpb24gKSA6IHRoaXMuaGlkZSAoIG9wdGlvbiApXHJcbiAgICAgIH1cclxuICB9XHJcbiAgYWRkRWxlbSAoIHRhZ05hbWUsIGNvbnRhaW5lciApIHtcclxuICAgICAgcmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZCAoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCB0YWdOYW1lICkgKVxyXG4gIH1cclxuICBzZXRTdHlsZXMgKCkge1xyXG4gICAgZmV0Y2goIGBzcmMvbWFpbi1tZW51LmNzc2AgKVxyXG4gICAgICAudGhlbiAoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSApXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICBjc3MgPT4gdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKVxyXG4gICAgICAgICAgKS50ZXh0Q29udGVudCA9IGNzc1xyXG4gICAgICAgIClcclxuICB9XHJcbiAgaGlkZSAoIGVsZW0gKSB7XHJcbiAgICAgIGVsZW0uZGlzcGF0Y2hFdmVudCAoIG5ldyBFdmVudCAoIFwiaGlkZVwiICkgKVxyXG4gIH1cclxuICBzaG93ICggZWxlbSApIHtcclxuICAgICAgZWxlbS5kaXNwYXRjaEV2ZW50ICggbmV3IEV2ZW50ICggXCJzaG93XCIgKSApXHJcbiAgfVxyXG4gIGhpZGVDYWxsYmFjayAoIGV2ZW50ICkge1xyXG4gICAgICBldmVudC50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG4gIHNob3dDYWxsYmFjayAoIGV2ZW50ICkge1xyXG4gICAgICBldmVudC50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gIH1cclxuICBzZXRMaXN0ZW5lcnMgKCBlbGVtICkge1xyXG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKCBcInNob3dcIiwgdGhpcy5zaG93Q2FsbGJhY2sgKVxyXG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKCBcImhpZGVcIiwgdGhpcy5oaWRlQ2FsbGJhY2sgKVxyXG4gIH1cclxuICBhc3luYyBnZXREYXRhICgpIHtcclxuICAgICAgdGhpcy5tZW51RGF0YSA9IGF3YWl0ICggYXdhaXQgZmV0Y2ggKCBgc3JjL21haW4tbWVudS5qc29uYCApICkuanNvbigpXHJcbiAgICAgIHRoaXMua2V5d29yZHMgPSBuZXcgRm9ybURhdGFcclxuICAgICAgY29uc3QgdG9wTGV2ZWwgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIjbWVudVwiIClcclxuXHJcbiAgICAgIGZvciAoIGxldCBsZXNzb24gb2YgdGhpcy5tZW51RGF0YSApIHtcclxuICAgICAgICAgIGxldCBsZXNzb25JdGVtID0gdGhpcy5hZGRFbGVtICggXCJsaVwiLCB0b3BMZXZlbCApO1xyXG4gICAgICAgICAgdGhpcy5tZW51T3B0aW9ucy5wdXNoICggbGVzc29uSXRlbSApO1xyXG4gICAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMgKCBsZXNzb25JdGVtICk7XHJcbiAgICAgICAgICBsZXNzb25JdGVtLmlubmVySFRNTCA9IHRoaXMuZ2V0TGVzc29uVGVtcGxhdGUgKCBsZXNzb24uaWQgKTtcclxuICAgICAgICAgIGxlc3Nvbkl0ZW0uc3ViTGV2ZWwgPSBsZXNzb25JdGVtLnF1ZXJ5U2VsZWN0b3IgKCBcInVsLnN1Yi1sZXZlbFwiICk7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgZm9yICggbGV0IGl0ZW0gb2YgbGVzc29uLml0ZW1zICkge1xyXG4gICAgICAgICAgICAgIGxldCBlbGVtID0gdGhpcy5hZGRFbGVtICggXCJsaVwiLCBsZXNzb25JdGVtLnN1YkxldmVsICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtZW51T3B0aW9ucy5wdXNoICggZWxlbSApO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzICggZWxlbSApO1xyXG4gICAgICAgICAgICAgIGVsZW0uc3R5bGVbXCJhbmltYXRpb24tZGVsYXlcIl0gPSBpbmRleCsrIDwgMTAgPyBgMC4ke2luZGV4fXNgIDogYDEuJHtpbmRleCAtIDl9c2A7XHJcbiAgICAgICAgICAgICAgbGV0IGFuY2hvciA9IHRoaXMuYWRkRWxlbSAoIFwiYVwiLCBlbGVtICk7XHJcbiAgICAgICAgICAgICAgYW5jaG9yLmhyZWYgPSBpdGVtLnJlZjtcclxuICAgICAgICAgICAgICBhbmNob3IudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgICAgICAgIGFuY2hvci5maWxlTmFtZSA9IGl0ZW0ucmVmO1xyXG5cclxuICAgICAgICAgICAgICBhbmNob3Iub25jbGljayA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9ICF0aGlzLmNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3guZGlzcGF0Y2hFdmVudCAoIG5ldyBFdmVudCAoIFwiY2xpY2tcIiApICk7XHJcbiAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBcImpzLWxlc3NvbnMuZ2xpdGNoLm1lXCIgPyBldmVudC50YXJnZXQuaHJlZiA6IGA/JHtldmVudC50YXJnZXQuZmlsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7IHJvdXRlOiByZWYgfSwgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCwgcmVmICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgc2h1dHRlciA9IHRoaXMuYWRkRWxlbSAoIFwic2h1dHRlci1lbGVtZW50XCIsIGRvY3VtZW50LmJvZHkgKTtcclxuICAgICAgICAgICAgICAgICAgc2h1dHRlci5zdHlsZSA9IGBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDtgO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0ICggKCkgPT4gc2h1dHRlci5yZW1vdmUoKSwgMTAwMCApO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0QXR0cmlidXRlICggXCJzcmNcIiwgIGAke2NyZWF0ZVBhdGgoIFwibGVzc29uc1wiLCBldmVudC50YXJnZXQuZmlsZU5hbWUgKyBcIi5tZFwiICl9YCApO1xyXG4gICAgICAgICAgICAgIH0uYmluZCAoIHRoaXMgKVxyXG5cclxuICAgICAgICAgICAgICBmb3IgKCBsZXQga2V5d29yZCBvZiBpdGVtLmtleXdvcmRzIClcclxuICAgICAgICAgICAgICAgICAgdGhpcy5rZXl3b3Jkcy5hcHBlbmQgKFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5d29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVzc29uOiBsZXNzb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9waWM6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLnJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGdldExlc3NvblRlbXBsYXRlICggbGVzc29uSWQgKSB7XHJcbiAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtsZXNzb25JZH1cIiBuYW1lPVwibGVzc29uc1wiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCIke2xlc3NvbklkfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcyA9IFwiaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGI+JHtsZXNzb25JZH08L2I+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJzdWItbGV2ZWxcIj48L3VsPmBcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcclxuICBcIm1haW4tbWVudS1jb21wb25lbnRcIixcclxuICBNYWluTWVudUNvbXBvbmVudFxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTWVudUNvbXBvbmVudFxyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIndXNlIHN0cmljdCdcclxuXHJcbmNsYXNzIE1lbnVDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgIHN1cGVyKClcclxuICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoeyBtb2RlOiBcIm9wZW5cIiB9KVxyXG4gICAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9THVja2llc3QrR3V5fFBvcHBpbnN8Um9ib3RvfE1vbnRzZXJyYXR8JmFtcDtkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwic3JjL21lbnUuY3NzXCI+XHJcbiAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgPHVsIGlkPVwibWFpbi1uYXZcIiBjbGFzcz1cImRyb3Bkb3duXCI+PC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51Q29udGVudCA9IHRoaXMuc2hhZG93LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgICAgICByZXR1cm4gWyAnb3B0aW9ucyddXHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIi5kcm9wZG93blwiIClcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIGlmICggIW5ld1ZhbCApIHJldHVyblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IEpTT04ucGFyc2UgKCB0aGlzLmdldEF0dHJpYnV0ZSAoIFwib3B0aW9uc1wiICkgKVxyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlICggXCJvcHRpb25zXCIsIFwiXCIgKVxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoIChcclxuICAgICAgICAgICggb3B0aW9uLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpID0gY29udGFpbmVyLmFwcGVuZENoaWxkIChcclxuICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJsaVwiIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBsaS5zdHlsZVtcImFuaW1hdGlvbi1kZWxheVwiXSA9IGluZGV4IDwgMTAgPyBgMC4ke2luZGV4fXNgIDogYDEuJHtpbmRleC05fXNgXHJcbiAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IGBvcHRpb24ke29wdGlvbi5sZXZlbH1gXHJcbiAgICAgICAgICAgIGxldCByZWYgPSBsaS5hcHBlbmRDaGlsZCAoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCBcImFcIiApIClcclxuICAgICAgICAgICAgcmVmLmlubmVySFRNTCA9IG9wdGlvbi50ZXh0XHJcbiAgICAgICAgICAgIHJlZi5ocmVmID0gYCMke2VuY29kZVVSSSAoIG9wdGlvbi50ZXh0ICl9YFxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1lbnVDb21wb25lbnQucHJvdG90eXBlLnN0eWxlQ29udGVudCA9IGBcclxuLy9cclxuLy8gYFxyXG5NZW51Q29tcG9uZW50LnByb3RvdHlwZS50ZW1wbGF0ZSA9IGBcclxuPG5hdiBpZD1cIm5hdlwiIGNsYXNzPVwibWFpbi1uYXZcIj5cclxuXHJcbiAgPGxpPlxyXG5cclxuXHQgICAgPHVsIGNsYXNzPVwiZHJvcGRvd25cIj48L3VsPlxyXG5cclxuICA8L2xpPlxyXG48L25hdj5cclxuYFxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxyXG4gIFwibWVudS1jb21wb25lbnRcIixcclxuICBNZW51Q29tcG9uZW50XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb21wb25lbnRcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9pc2UuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vaXNlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9pc2UuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmZyYWdtZW50cyA9IHt9O1xyXG4gICAgdGhpcy5wYWdlQ29udGVudCA9IFwiXCI7XHJcbiAgICB0aGlzLnBhZ2VDb250ZW50TGlzdCA9IFtdO1xyXG4gICAgdGhpcy5tYWluID0gdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKSk7XHJcbiAgICBsZXQgZm9vdGVyID0gdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpKTtcclxuICAgIGZvb3Rlci5pbm5lckhUTUwgKz0gYFxyXG4gICAgPGJyPjxicj48YnI+PGJyPjxicj48YnI+XHJcbiAgICA8ZmlndXJlIGNsYXNzPVwib3ZlcnNoYWRvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwib3ZlcnNoYWRvd19fc2hhZG93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJzaGFkb3dfX3RleHRcIj4mbmJzcDs8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2ZpZ3VyZT5gO1xyXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJtZW51LWNvbXBvbmVudFwiKVswXTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cclxuICAgIC8vIGxldCBwYXRoID0gbG9jYXRpb24uaG9zdCA9PT0gXCJnYXJldm5hLmdpdGh1Yi5pb1wiID8gXCIvanMtbGVzc29ucy9cIiA6IFwiL1wiO1xyXG5cclxuICAgIGxldCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoIFwiL2pzLWxlc3NvbnNcIiApLmpvaW4gKFwiXCIpO1xyXG4gICAgbGV0IGZpbGVOYW1lID0gbG9jYXRpb24uc2VhcmNoID8gbG9jYXRpb24uc2VhcmNoLnNsaWNlICgxKSA6XHJcbiAgICAgICAgcGF0aCA9PT0gXCIvXCIgPyBcInN0YXJ0LXBhZ2VcIiA6IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpO1xyXG4gICAgbGV0IHNyY1VSTCA9IGAke2NyZWF0ZVBhdGgoIFwibGVzc29uc1wiLCBmaWxlTmFtZSApfS5tZGA7XHJcbiAgICAvLyBsZXQgc3RhcnRQYXRoID0gYCR7Y3JlYXRlUGF0aChcImxlc3NvbnNcIiwgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiID8gXCJzdGFydC1wYWdlXCIgOiBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxKSl9YDtcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCBcInNyY1wiLCBzcmNVUkwgKTtcclxuICAgIHRoaXMuc3R5bGVTaGVldCA9IHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpKTtcclxuICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgZmV0Y2goY3JlYXRlUGF0aChcInNyY1wiLCBcImZvci1yYWluYm93LmNzc1wiKSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpLFxyXG4gICAgICBmZXRjaChjcmVhdGVQYXRoKFwic3JjXCIsIFwicGFnZS5jc3NcIikpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKSxcclxuICAgICAgZmV0Y2goY3JlYXRlUGF0aChcInNyY1wiLCBcImljb25zLmNzc1wiKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXSlcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHRoaXMuc3R5bGVTaGVldC50ZXh0Q29udGVudCArPSByZXNwb25zZS5qb2luKFN0cmluZy5mcm9tQ2hhckNvZGUoMTApKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ3NyYyddO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJOYW1lLCBvbGRWYWwsIG5ld1ZhbCkge1xyXG4gICAgdGhpcy5mcmFnbWVudHMgPSB7fTtcclxuICAgIHRoaXMucGFnZUNvbnRlbnQgPSBcIlwiO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudExpc3QgPSBbXTtcclxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy5tZW51LnNldEF0dHJpYnV0ZShcIm9wdGlvbnNcIiwgXCJcIik7XHJcbiAgICB0aGlzLmdldERhdGEobmV3VmFsKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoZmlsZSkge1xyXG4gICAgZmV0Y2goZmlsZSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkudGhlbihyZXNwb25zZSA9PiB0aGlzLnBhcnNlUGFnZUNvbnRlbnQocmVzcG9uc2UpKSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVRleHRGcmFnbWVudCh0ZXh0RnJhZ21lbnQpIHtcclxuICAgIGxldCBsaW5lcyA9IHRleHRGcmFnbWVudC5sZW5ndGggPyB0ZXh0RnJhZ21lbnQuc3BsaXQoXCJcXG5cIikgOiBbXTtcclxuICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiBsaW5lLmxlbmd0aCA/IHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLnBhcnNlTGluZShsaW5lKSkgOiBudWxsKTtcclxuICB9XHJcblxyXG4gIHBhcnNlUGFnZUNvbnRlbnQocGFnZUNvbnRlbnQpIHtcclxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudCA9IHBhZ2VDb250ZW50O1xyXG4gICAgdGhpcy5wYXJzZVRhYmxlcygpO1xyXG4gICAgdGhpcy5yZWdFeHBycy5wYWdlQ29udGVudCA9IHRoaXMucGFnZUNvbnRlbnQ7XHJcbiAgICB0aGlzLmZyYWdtZW50cyA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IGZyYWdtZW50IG9mIHRoaXMucmVnRXhwcnMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmZyYWdtZW50cywgZnJhZ21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnZUNvbnRlbnQgPSB0aGlzLmZyYWdtZW50cy5wYWdlQ29udGVudDtcclxuICAgIGRlbGV0ZSB0aGlzLmZyYWdtZW50cy5wYWdlQ29udGVudDtcclxuICAgIGxldCBpbnNlcnRpb25Qb2ludHMgPSB0aGlzLnBhZ2VDb250ZW50Lm1hdGNoKC8hISEuW14hISFdKyEhIS9nKTtcclxuICAgICFpbnNlcnRpb25Qb2ludHMgPyBudWxsIDogaW5zZXJ0aW9uUG9pbnRzLmZvckVhY2goaW5zZXJ0aW9uUG9pbnQgPT4ge1xyXG4gICAgICBsZXQgdG1wID0gdGhpcy5wYWdlQ29udGVudC5zcGxpdChpbnNlcnRpb25Qb2ludCk7XHJcbiAgICAgIGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQuc2xpY2UoMywgLTMpO1xyXG5cclxuICAgICAgd2hpbGUgKHRtcC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbGV0IGZyYWdtZW50ID0gdG1wLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5wYXJzZVRleHRGcmFnbWVudChmcmFnbWVudCk7XHJcbiAgICAgICAgdGhpc1tgY3JlYXRlJHt0aGlzLmZyYWdtZW50c1tpbnNlcnRpb25Qb2ludF0udHlwZX1gXSh0aGlzLmZyYWdtZW50c1tpbnNlcnRpb25Qb2ludF0uY29udGVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFnZUNvbnRlbnQgPSB0bXAuam9pbihcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudC5sZW5ndGggPyB0aGlzLnBhcnNlVGV4dEZyYWdtZW50KHRoaXMucGFnZUNvbnRlbnQpIDogbnVsbDtcclxuICAgIHRoaXMubWVudS5zZXRBdHRyaWJ1dGUoXCJvcHRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucGFnZUNvbnRlbnRMaXN0KSk7XHJcbiAgICB0aGlzLnBhZ2VDb250ZW50ID0gdGhpcy5jcmVhdGVUYWJsZXModGhpcy5wYWdlQ29udGVudCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicGFnZS1lbGVtZW50XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIiwgXCJwcmVcIilcclxuICAgICAgICAuZm9yRWFjaChlbGVtID0+IGVsZW0uaW5uZXJIVE1MLnRyaW0oKSA/IHRoaXMuaW5zZXJ0VGFibGUoZWxlbSkgOiBlbGVtLnJlbW92ZSgpKTtcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIGxldmVsXHJcblxyXG4gIGluc2VydFRhYmxlKGVsZW0pIHtcclxuICAgIGxldCBjb250ID0gZWxlbS5pbm5lckhUTUwubWF0Y2goL1xcW3szfVxcZFxcXXszfS8pO1xyXG4gICAgaWYgKCFjb250KSByZXR1cm47XHJcbiAgICBlbGVtLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFibGUoY29udFswXS5zbGljZSgzLCAtMykpKTtcclxuICB9XHJcblxyXG4gIHBhcnNlVGFibGVzKCkge1xyXG4gICAgbGV0IHRvdGFsID0gdGhpcy5wYWdlQ29udGVudC5zcGxpdChcIlxcblwiKTtcclxuICAgIHRoaXMudGFibGVzID0gW107XHJcbiAgICBsZXQgdGFibGUsIHN0cmluZywgeDtcclxuXHJcbiAgICBjb25zdCBzdGFydFRhYmxlID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICB0aGlzLnBhZ2VDb250ZW50ID0gdGhpcy5wYWdlQ29udGVudC5zcGxpdChzdHJpbmcpLmpvaW4oYFtbWyR7dGhpcy50YWJsZXMubGVuZ3RofV1dXWApO1xyXG4gICAgICB0aGlzLnRhYmxlcy5wdXNoKFtdKTtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVzW3RoaXMudGFibGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGNvbnN0IGZpbGxUYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3RyaW5nID0gdG90YWwuc2hpZnQoKTtcclxuICAgICAgeCA9IHN0cmluZy5tYXRjaCgvKF5cXHwpKC4pKlxcfC9nbSk7XHJcbiAgICAgIHggPyB0YWJsZSA9IHN0YXJ0VGFibGUoc3RyaW5nKSA6IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAoeCkge1xyXG4gICAgICAgIHRhYmxlLnB1c2goeFswXS5zbGljZSgxLC0xKSk7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGVudCA9IHRoaXMucGFnZUNvbnRlbnQuc3BsaXQoc3RyaW5nKS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHN0cmluZyA9IHRvdGFsLnNoaWZ0KCk7XHJcbiAgICAgICAgeCA9IHN0cmluZy5tYXRjaCgvKF5cXHwpKC4pKlxcfC8pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b3RhbC5sZW5ndGggPyBmaWxsVGFibGUodG90YWwpIDogbnVsbDtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBmaWxsVGFibGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhYmxlcyhjb250ZW50KSB7XHJcbiAgICBsZXQgdGFibGVzID0gdGhpcy5wYWdlQ29udGVudC5tYXRjaCgvXFxbezN9XFxkXFxdezN9L2dtKTtcclxuICAgIGlmICghdGFibGVzKSByZXR1cm47XHJcbiAgICB0YWJsZXMuZm9yRWFjaChpdGVtID0+IHRoaXMucGFnZUNvbnRlbnQuc3BsaXQoaXRlbSkuam9pbih0aGlzLmNyZWF0ZVRhYmxlKHBhcnNlSW50KGl0ZW0uc2xpY2UoMywgLTMpKSkuaW5uZXJIVE1MKSk7IC8vIHJldHVybiBjb250ZW50XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUYWJsZShudW0pIHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCByb3cgb2YgdGhpcy50YWJsZXNbbnVtXSkge1xyXG4gICAgICBsZXQgdHIgPSB0YWJsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xyXG4gICAgICByb3cuc3BsaXQoXCJ8XCIpLmZvckVhY2goY2VsbCA9PiB0ci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpLmlubmVySFRNTCA9IHRoaXMucGFyc2VMaW5lKGNlbGwudHJpbSgpKS5vdXRlckhUTUwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNsaWRlcihmcmFnbWVudCkge1xyXG4gICAgbGV0IHNsaWRlclN0YXJ0ID0gdGhpcy5tYWluLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpO1xyXG4gICAgc2xpZGVyU3RhcnQuY2xhc3NOYW1lID0gXCJzbGlkZXItYnV0dG9uXCI7XHJcblxyXG4gICAgc2xpZGVyU3RhcnQub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5tYWluLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUtc2xpZGVyJykpO1xyXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInBpY3R1cmVzXCIsIEpTT04uc3RyaW5naWZ5KGZyYWdtZW50LnNsaWNlKDMsIC0xKS5zcGxpdChcIixcIikpKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvZGVDb21wb25lbnQoZnJhZ21lbnQpIHtcclxuICAgIGxldCBsYW5nID0gZnJhZ21lbnQuc2xpY2UoNCwgZnJhZ21lbnQuc2VhcmNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMTApKSk7XHJcbiAgICBsZXQgc25pcHBldCA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZS1zbmlwcGV0XCIpKTtcclxuICAgIHNuaXBwZXQudGV4dENvbnRlbnQgPSBmcmFnbWVudC5zbGljZSg0ICsgbGFuZy5sZW5ndGgsIGZyYWdtZW50Lmxlbmd0aCAtIDQpO1xyXG4gICAgc25pcHBldC5zZXRBdHRyaWJ1dGUoXCJoZWFkZXJcIiwgbGFuZyk7XHJcbiAgICBzbmlwcGV0LnNldEF0dHJpYnV0ZShcImxhbmdcIiwgbGFuZyk7XHJcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoc25pcHBldCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTY3JpcHRTcG9pbGVyKGZyYWdtZW50KSB7XHJcbiAgICBsZXQgbGFuZyA9IGZyYWdtZW50LnNsaWNlKDQsIGZyYWdtZW50LnNlYXJjaChTdHJpbmcuZnJvbUNoYXJDb2RlKDEwKSkpO1xyXG4gICAgbGV0IHNjcmlwdFNwb2lsZXIgPSB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdC1zcG9pbGVyXCIpKTtcclxuICAgIGxldCBzY3JpcHRTcG9pbGVyQ29udGVudCA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChsYW5nLnRyaW0oKSA9PT0gXCJjb25zb2xlXCIgPyB0aGlzLmNyZWF0ZUNvbnNvbGVPdXRwdXQoZnJhZ21lbnQuc2xpY2UoMSwgLTEpKSA6IHRoaXMuY3JlYXRlQ29kZVNuaXBwZXQoZnJhZ21lbnQuc2xpY2UoNCArIGxhbmcubGVuZ3RoLCBmcmFnbWVudC5sZW5ndGggLSA0KSwgbGFuZykpO1xyXG4gICAgc2NyaXB0U3BvaWxlci5zZXRBdHRyaWJ1dGUoXCJoZWFkZXJcIiwgbGFuZyk7XHJcbiAgICBzY3JpcHRTcG9pbGVyLmNvbnRlbnQgPSBzY3JpcHRTcG9pbGVyQ29udGVudDtcclxuICAgIHNjcmlwdFNwb2lsZXIuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCBcInJlYWR5XCIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2NyaXB0U25pcHBldChmcmFnbWVudCkge1xyXG4gICAgbGV0IGxhbmcgPSBmcmFnbWVudC5zbGljZSgzLCBmcmFnbWVudC5zZWFyY2goU3RyaW5nLmZyb21DaGFyQ29kZSgxMCkpKTtcclxuICAgIHJldHVybiB0aGlzLm1haW4uYXBwZW5kQ2hpbGQobGFuZy50cmltKCkgPT09IFwiY29uc29sZVwiID8gdGhpcy5jcmVhdGVDb25zb2xlT3V0cHV0KGZyYWdtZW50KSA6IHRoaXMuY3JlYXRlQ29kZVNuaXBwZXQoZnJhZ21lbnQuc2xpY2UoMyArIGxhbmcubGVuZ3RoLCBmcmFnbWVudC5sZW5ndGggLSAzKSwgbGFuZykpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29uc29sZU91dHB1dChmcmFnbWVudCkge1xyXG4gICAgbGV0IHNuaXBwZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xyXG4gICAgc25pcHBldC50ZXh0Q29udGVudCA9IGZyYWdtZW50LnNsaWNlKDEwLCBmcmFnbWVudC5sZW5ndGggLSAzKTtcclxuICAgIHNuaXBwZXQuY2xhc3NOYW1lID0gXCJibGFja1wiO1xyXG4gICAgcmV0dXJuIHNuaXBwZXQ7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb2RlU25pcHBldChmcmFnbWVudCwgbGFuZykge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGA8cHJlPjxjb2RlIGRhdGEtbGFuZ3VhZ2U9JHtsYW5nfT4ke2ZyYWdtZW50LnRyaW0oKX08L2NvZGU+PC9wcmU+YDtcclxuICAgIFJhaW5ib3cuY29sb3IoZGl2KTtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByZWxvYWRlclwiKSkuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvZGVPdXRwdXQoZnJhZ21lbnQpIHtcclxuICAgIGxldCBvdXRwdXRTY3JlZW4gPSB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGUtb3V0cHV0XCIpKTtcclxuICAgIG91dHB1dFNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJzY3JpcHRcIiwgZnJhZ21lbnQuc2xpY2UoMywgLTMpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNwb2lsZXIoZnJhZ21lbnQpIHtcclxuICAgIGxldCBzcG9pbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwb2lsZXItY29tcG9uZW50XCIpO1xyXG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHNwb2lsZXIpO1xyXG4gICAgbGV0IGhlYWQgPSBmcmFnbWVudC5tYXRjaCgvKFxcXnszfSlcXFsoLispXFxdLylbMF07XHJcbiAgICBzcG9pbGVyLnNldEF0dHJpYnV0ZShcImhlYWRlclwiLCBoZWFkLnNsaWNlKDQsIC0xKSk7XHJcbiAgICBzcG9pbGVyLmNvbnRlbnQgPSBbXTtcclxuXHJcbiAgICBjb25zdCBnZXRTbmlwcGV0ID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICByZXR1cm4gc3RyaW5nLmluZGV4T2YoXCIhISFcIikgPCAwID8gbnVsbCA6IHRoaXMuZnJhZ21lbnRzW3N0cmluZy5zbGljZSgzLCAtMyldO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGNvbnN0IGdldENvZGVTbmlwcGV0ID0gZnVuY3Rpb24gKHNuaXBwZXQpIHtcclxuICAgICAgaWYgKHNuaXBwZXQudHlwZSAhPT0gXCJTY3JpcHRTbmlwcGV0XCIpIHJldHVybiBudWxsO1xyXG4gICAgICBsZXQgbGFuZyA9IHNuaXBwZXQuY29udGVudC5zbGljZSgzLCBzbmlwcGV0LmNvbnRlbnQuc2VhcmNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMTApKSk7XHJcbiAgICAgIGxldCBzY3JpcHRTbmlwcGV0Q29udGVudCA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChsYW5nLnRyaW0oKSA9PT0gXCJjb25zb2xlXCIgPyB0aGlzLmNyZWF0ZUNvbnNvbGVPdXRwdXQoc25pcHBldC5jb250ZW50LnNsaWNlKDEsIC0xKSkgOiB0aGlzLmNyZWF0ZUNvZGVTbmlwcGV0KHNuaXBwZXQuY29udGVudC5zbGljZSgzICsgbGFuZy5sZW5ndGgsIHNuaXBwZXQuY29udGVudC5sZW5ndGggLSAzKSwgbGFuZykpO1xyXG4gICAgICBzcG9pbGVyLmNvbnRlbnQucHVzaChzY3JpcHRTbmlwcGV0Q29udGVudCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGNvbnN0IGdldFRhYmxlID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICBpZiAoIXN0cmluZy5tYXRjaCgvXFxbezN9XFxkXFxdezN9LykpIHJldHVybiBudWxsO1xyXG4gICAgICBzcG9pbGVyLmNvbnRlbnQucHVzaCh0aGlzLmNyZWF0ZVRhYmxlKHBhcnNlSW50KHN0cmluZy50cmltKCkuc2xpY2UoMywgLTMpKSkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBmcmFnbWVudC5zcGxpdChoZWFkKS5qb2luKFwiXCIpLnNsaWNlKDAsIC0zKS5zcGxpdCgnXFxuJykuZm9yRWFjaChsaW5lID0+IGdldFNuaXBwZXQobGluZSkgPyBnZXRDb2RlU25pcHBldChnZXRTbmlwcGV0KGxpbmUpKSA6IGdldFRhYmxlKGxpbmUpID8gbnVsbCA6IHNwb2lsZXIuY29udGVudC5wdXNoKHRoaXMucGFyc2VMaW5lKGxpbmUpKSk7XHJcbiAgICBzcG9pbGVyLnNldEF0dHJpYnV0ZShcInJlYWR5XCIsIFwiMVwiKTtcclxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTGluZSBsZXZlbCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICBwYXJzZUltYWdlKGxpbmUpIHtcclxuICAgIGxldCBzdHJpbmcgPSBsaW5lLm1hdGNoKC8hXFxbXFxdXFwoLitcXCkvKTtcclxuICAgIGxldCB1cmwgPSBzdHJpbmcgPyBsaW5lLm1hdGNoKC8hXFxbXFxdXFwoLitcXCkvKVswXS5zbGljZSg0LCAtMSkgOiBudWxsO1xyXG4gICAgaWYgKCF1cmwpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZWxlbS5zcmMgPSB1cmwuaW5kZXhPZihcImh0dHBcIikgPT09IDAgPyB1cmwgOiBldmFsKHVybCk7XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIHBhcnNlSGVhZGVyKGxpbmUpIHtcclxuICAgIGxldCBoZWFkZXJMZXZlbCA9IGxpbmUubWF0Y2goL15bI117MSw2fS8pO1xyXG4gICAgaWYgKCFoZWFkZXJMZXZlbCkgcmV0dXJuIHtcclxuICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgIHRleHQ6IGxpbmVcclxuICAgIH07XHJcbiAgICBsZXQgdGV4dCA9IGxpbmUuc2xpY2UoaGVhZGVyTGV2ZWxbMF0ubGVuZ3RoKTtcclxuICAgIGxldCBpY29ucyA9IHRleHQubWF0Y2goLyFcXFsuW15cXF1dK1xcXS9nKTtcclxuICAgIGljb25zID8gaWNvbnMuZm9yRWFjaChpY29uID0+IHRleHQgPSB0ZXh0LnNwbGl0KGljb24pLmpvaW4oXCJcIikpIDogbnVsbDtcclxuICAgIGxldCByZWZzID0gdGV4dC5tYXRjaCgvXFxbLlteKF0rXFxdXFwoLlteXFwpXStcXCkvZyk7XHJcbiAgICByZWZzID8gcmVmcy5mb3JFYWNoKHJlZiA9PiB7XHJcbiAgICAgIGxldCBjb250ZW50ID0gcmVmLnNwbGl0KFwiXShcIilbMF0uc2xpY2UoMSk7XHJcbiAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KHJlZikuam9pbihjb250ZW50KTtcclxuICAgIH0pIDogbnVsbDtcclxuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSkubmFtZSA9IGVuY29kZVVSSSh0ZXh0LnRyaW0oKSk7XHJcbiAgICB0aGlzLnBhZ2VDb250ZW50TGlzdC5wdXNoKHtcclxuICAgICAgbGV2ZWw6IGhlYWRlckxldmVsWzBdLmxlbmd0aCxcclxuICAgICAgdGV4dDogdGV4dC50cmltKClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGV2ZWw6IGhlYWRlckxldmVsWzBdLmxlbmd0aCxcclxuICAgICAgdGV4dDogbGluZSA9IGxpbmUuc3BsaXQoaGVhZGVyTGV2ZWxbMF0pLmpvaW4oXCJcIilcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwYXJzZUxpbmUobGluZSkge1xyXG4gICAgaWYgKGxpbmUubWF0Y2goL1stX117Myw1MDAwfS8pKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgbGV0IGltZyA9IHRoaXMucGFyc2VJbWFnZShsaW5lKTtcclxuICAgIGlmIChpbWcpIHJldHVybiBpbWc7XHJcbiAgICBsZXQge1xyXG4gICAgICBsZXZlbCxcclxuICAgICAgdGV4dFxyXG4gICAgfSA9IHRoaXMucGFyc2VIZWFkZXIobGluZSk7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobGV2ZWwgPiAwID8gYGgke2xldmVsfWAgOiBcImRpdlwiKTtcclxuICAgIGVsZW0uaW5uZXJIVE1MID0gdGhpcy5wYXJzZUFuY2hvcnModGV4dCk7XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIHBhcnNlSWNvbnMobGluZSkge1xyXG4gICAgbGV0IGljb25zID0gbGluZS5tYXRjaCgvIVxcWy5bXlxcXV0rXFxdL2cpO1xyXG4gICAgaWNvbnMgPyBpY29ucy5mb3JFYWNoKGljb24gPT4ge1xyXG4gICAgICBsZXQgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIGljb24uc2xpY2UoMiwgLTEpLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGl0ZW0gPT4gaWNvLmNsYXNzTGlzdC5hZGQoaXRlbSkpO1xyXG4gICAgICBsaW5lID0gbGluZS5zcGxpdChpY29uKS5qb2luKGljby5vdXRlckhUTUwpO1xyXG4gICAgfSkgOiBudWxsO1xyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG5cclxuICBwYXJzZUFuY2hvcnMobGluZSkge1xyXG4gICAgbGV0IG5ld0xpbmUgPSBcIlwiO1xyXG4gICAgbGV0IGFuY2hvcnMgPSBsaW5lLm1hdGNoKC9cXFsuW14oXStcXF1cXCguW15cXCldK1xcKS9nKTtcclxuICAgIGFuY2hvcnMgPyBhbmNob3JzLmZvckVhY2goYW5jaG9yID0+IHtcclxuICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdChhbmNob3IpO1xyXG4gICAgICBuZXdMaW5lICs9IHRoaXMucGFyc2VJY29ucyh0aGlzLmZvcm1hdFRleHQocGFydHNbMF0pKTtcclxuICAgICAgbGV0IHRtcCA9IGFuY2hvci5zcGxpdChcIl0oXCIpO1xyXG4gICAgICBsZXQgcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIHJlZi5ocmVmID0gdG1wWzFdLnNsaWNlKDAsIC0xKTtcclxuICAgICAgcmVmLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgICAgcmVmLmlubmVySFRNTCA9IHRoaXMucGFyc2VJY29ucyh0aGlzLmZvcm1hdFRleHQodG1wWzBdLnNsaWNlKDEpKSk7XHJcbiAgICAgIG5ld0xpbmUgKz0gcmVmLm91dGVySFRNTCArIHBhcnRzWzFdO1xyXG4gICAgfSkgOiBuZXdMaW5lID0gdGhpcy5wYXJzZUljb25zKHRoaXMuZm9ybWF0VGV4dChsaW5lKSk7XHJcbiAgICByZXR1cm4gbmV3TGluZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFRleHQobGluZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgcmVnZXhwcjtcclxuICAgIHRoaXMuc3ltYm9scy5mb3JFYWNoKGN1cnJlbnQgPT4ge1xyXG4gICAgICByZWdleHByID0gbmV3IFJlZ0V4cChjdXJyZW50LnJlZyArIFwiLlteXCIgKyBjdXJyZW50LnJlZyArIFwiXStcIiArIGN1cnJlbnQucmVnLCBcImdcIik7XHJcbiAgICAgIGxldCBtYXRjaGVzID0gbGluZS5tYXRjaChyZWdleHByKTtcclxuICAgICAgbWF0Y2hlcyA/IG1hdGNoZXMuZm9yRWFjaChpdGVtID0+IGxpbmUgPSBsaW5lLnNwbGl0KGl0ZW0pLmpvaW4oaXRlbS5yZXBsYWNlKGN1cnJlbnQuc3ltYiwgY3VycmVudC50YWdbMF0pLnJlcGxhY2UoY3VycmVudC5zeW1iLCBjdXJyZW50LnRhZ1sxXSkpKSA6IG51bGw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlR3JpZChmcmFnbWVudCkge1xyXG4gICAgbGV0IGdyaWQgPSB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICBncmlkLmNsYXNzTmFtZSA9IFwiZ3JpZFwiO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBmcmFnbWVudC5zbGljZSg0LCAtNCkuc3BsaXQoXCJcXG5cIik7XHJcbiAgICBjb250ZW50LmZvckVhY2gobGluZSA9PiBncmlkLmFwcGVuZENoaWxkKHRoaXMucGFyc2VMaW5lKGxpbmUpKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUGFnZUNvbXBvbmVudC5wcm90b3R5cGUucmVnRXhwcnMgPSB7XHJcbiAgQ29kZU91dHB1dDogL1xce3szfS5bXn1dKlxcfXszfS8sXHJcbiAgU2NyaXB0U3BvaWxlcjogL35+fn4uW15+fn5+XSt+fn5+LyxcclxuICBTY3JpcHRTbmlwcGV0OiAvfn5+Lltefn5+XSt+fn4vLFxyXG4gIFNwb2lsZXI6IC8oXFxeezN9KShbXFxzXFxTXSs/KVxcMS9tLFxyXG4gIFNsaWRlcjogLyEhXFxbLlteXFxdXStcXF0vLFxyXG4gIEdyaWQ6IC9cXEBcXEBcXEBcXEBcXHMrXFxTK1teXFxAXFxAXFxAXFxAXSpdKlxcQFxcQFxcQFxcQC9tXHJcbn07XHJcblxyXG5QYWdlQ29tcG9uZW50LnByb3RvdHlwZS5yZWdFeHByc1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qICgpIHtcclxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xyXG4gIGxldCBmcmFnbWVudHMsIHN0YXJ0LCBlbmQsIGtleTtcclxuXHJcbiAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XHJcbiAgICBmcmFnbWVudHMgPSB0cnVlO1xyXG4gICAga2V5ID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgaWYgKGtleSA9PT0gXCJwYWdlQ29udGVudFwiKSBjb250aW51ZTtcclxuXHJcbiAgICB3aGlsZSAoZnJhZ21lbnRzKSB7XHJcbiAgICAgIGZyYWdtZW50cyA9IHRoaXMucGFnZUNvbnRlbnQubWF0Y2godGhpc1trZXldKTtcclxuICAgICAgaWYgKCFmcmFnbWVudHMpIGJyZWFrO1xyXG4gICAgICBzdGFydCA9IGZyYWdtZW50cy5pbmRleDtcclxuICAgICAgZW5kID0gc3RhcnQgKyBmcmFnbWVudHNbMF0ubGVuZ3RoICsgMTtcclxuICAgICAgdGhpcy5wYWdlQ29udGVudCA9IHRoaXMucGFnZUNvbnRlbnQucmVwbGFjZShmcmFnbWVudHNbMF0sIGBcXG4hISEke3N0YXJ0fSEhIVxcbmApO1xyXG4gICAgICB5aWVsZCB7XHJcbiAgICAgICAgW3N0YXJ0XToge1xyXG4gICAgICAgICAgdHlwZToga2V5LFxyXG4gICAgICAgICAgY29udGVudDogZnJhZ21lbnRzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgeWllbGQge1xyXG4gICAgcGFnZUNvbnRlbnQ6IHRoaXMucGFnZUNvbnRlbnRcclxuICB9O1xyXG59O1xyXG5cclxuUGFnZUNvbXBvbmVudC5wcm90b3R5cGUuc3ltYm9scyA9IFt7XHJcbiAgc3ltYjogXCLigKLigKJcIixcclxuICByZWc6IFwi4oCi4oCiXCIsXHJcbiAgdGFnOiBbXCI8ZmlndXJlIGNsYXNzPSdibGFjayc+XCIsIFwiPC9maWd1cmU+XCJdXHJcbn0sIHtcclxuICBzeW1iOiBcIuKXmOKXmFwiLFxyXG4gIHJlZzogXCLil5jil5hcIixcclxuICB0YWc6IFtcIjxmaWd1cmUgY2xhc3M9J2JvcmRlcmVkJz5cIiwgXCI8L2ZpZ3VyZT5cIl1cclxufSwge1xyXG4gIHN5bWI6IFwiKipcIixcclxuICByZWc6IFwiXFxcXCpcXFxcKlwiLFxyXG4gIHRhZzogW1wiPGI+XCIsIFwiPC9iPlwiXVxyXG59LCB7XHJcbiAgc3ltYjogXCJfXCIsXHJcbiAgcmVnOiBcIl9cIixcclxuICB0YWc6IFtcIjxlbT5cIiwgXCI8L2VtPlwiXVxyXG59LCB7XHJcbiAgc3ltYjogXCJ+XCIsXHJcbiAgcmVnOiBcIn5cIixcclxuICB0YWc6IFtcIjxjb2RlIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiNlZWYnPlwiLCBcIjwvY29kZT5cIl1cclxufSwge1xyXG4gIHN5bWI6IFwiXl5cIixcclxuICByZWc6IFwiXFxcXF5cXFxcXlwiLFxyXG4gIHRhZzogW1wiPHNtYWxsPlwiLCBcIjwvc21hbGw+XCJdXHJcbn0sIHtcclxuICBzeW1iOiBcIjo6OlwiLFxyXG4gIHJlZzogXCI6OjpcIixcclxuICB0YWc6IFtcIjxidXR0b24gY2xhc3M9J2NhcCc+XCIsIFwiPC9idXR0b24+XCJdXHJcbn0sIHtcclxuICBzeW1iOiBcIiUlJVwiLFxyXG4gIHJlZzogXCJcXCVcXCVcXCVcIixcclxuICB0YWc6IFtcIjxidXR0b24gY2xhc3M9J2xpbmsnPlwiLCBcIjwvYnV0dG9uPlwiXVxyXG59XTtcclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInBhZ2UtZWxlbWVudFwiLCBQYWdlQ29tcG9uZW50KTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbXBvbmVudDtcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jbGFzcyBQaWN0dXJlU2xpZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnBpY3R1cmVzID0gW11cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDBcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IDBcclxuICAgICAgICBsZXQgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3cgKCB7IG1vZGU6ICdvcGVuJyB9IClcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNoYWRvdy5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW0gKCAnZmlndXJlJyApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCAnc3R5bGUnIClcclxuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICAgICAgZmlndXJlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjUwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5MDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvaW1hZ2VzL3Bob25lLXN0YXRpYy0zLmpwZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDAwMDA5MDtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCAnTHVja2llc3QgR3V5JywgUm9ib3RvLCBBcmlhbDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDBiMDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2xlZnQgeyBsZWZ0OiA0JTsgfVxyXG4gICAgICAgICAgICAjbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcIjxcIjsgfVxyXG4gICAgICAgICAgICAjcmlnaHQgeyByaWdodDogNCU7IH1cclxuICAgICAgICAgICAgI3JpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFwiPlwiOyB9XHJcbiAgICAgICAgICAgICNjbG9zZSB7IHRvcDogMTBweDsgcmlnaHQ6IDRweDsgfVxyXG4gICAgICAgICAgICAjY2xvc2U6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3LndlYmZ4LmNvbS90b29scy9lbW9qaS1jaGVhdC1zaGVldC9ncmFwaGljcy9lbW9qaXMvbm9fZW50cnlfc2lnbi5wbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMwZDkwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDIwcHggIzAwMDAwMDkwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcclxuICAgICAgICAgICAgICBidXR0b24geyBmb250LXNpemU6IDIwcHg7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSB7XHJcbiAgICAgICAgICAgICAgYnV0dG9uIHsgZm9udC1zaXplOiAxNnB4OyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkICggc3R5bGUgKVxyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSB0aGlzLmNyZWF0ZUVsZW0gKCAnYnV0dG9uJywgdGhpcy5jb250YWluZXIgKVxyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub25jbGljayA9ICgpID0+IHRoaXMucmVtb3ZlKClcclxuXHJcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pZCA9ICdjbG9zZSdcclxuICAgICAgICB0aGlzLmJ0bkxlZnQgPSB0aGlzLmNyZWF0ZUVsZW0gKCAnYnV0dG9uJywgdGhpcy5jb250YWluZXIgKVxyXG4gICAgICAgIHRoaXMuYnRuTGVmdC5pZCA9ICdsZWZ0J1xyXG4gICAgICAgIHRoaXMuYnRuTGVmdC5vbmNsaWNrID0gKCkgPT4gdGhpcy5jaGFuZ2VQaWN0dXJlICggXCJsZWZ0XCIgKVxyXG5cclxuICAgICAgICB0aGlzLmJ0blJpZ2h0ID0gdGhpcy5jcmVhdGVFbGVtICggJ2J1dHRvbicsIHRoaXMuY29udGFpbmVyIClcclxuICAgICAgICB0aGlzLmJ0blJpZ2h0LmlkID0gJ3JpZ2h0J1xyXG4gICAgICAgIHRoaXMuYnRuUmlnaHQub25jbGljayA9ICgpID0+IHRoaXMuY2hhbmdlUGljdHVyZSAoIFwicmlnaHRcIiApXHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRlRWxlbSAoIHRhZ05hbWUsIGNvbnRhaW5lciApIHtcclxuICAgICAgICByZXR1cm4gICggIWNvbnRhaW5lciA/IGRvY3VtZW50LmJvZHkgOiBjb250YWluZXIgKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkIChcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIHRhZ05hbWUgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbICdwaWN0dXJlcyddXHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlcyA9IEpTT04ucGFyc2UgKCB0aGlzLmdldEF0dHJpYnV0ZSAoIFwicGljdHVyZXNcIiApIClcclxuICAgICAgICB0aGlzLnNsaWRlcyA9IFtdXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyAwIF0gPSBuZXcgU2xpZGUgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY3R1cmVzIFsgMCBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnNsaWRlcyBbIDAgXS5tY0Zyb21UbyAoIDEwMCwgMTAgKVxyXG4gICAgICAgIHRoaXMuc2xpZGVzIFsgMSBdID0gbmV3IFNsaWRlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlcyBbIDEgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyAxIF0uaW5pdCAoIDEwMCApXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGljdHVyZSAoIGRpcmVjdGlvbiApIHtcclxuICAgICAgICBsZXQgdG8gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IDEwMCA6IC0xMDBcclxuICAgICAgICBsZXQgbmV4dFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgPT09IDAgPyAxIDogMFxyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldE5leHRJbmRleCAoIGRpcmVjdGlvbiApXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyBuZXh0U2xpZGUgXS5zZXRQaWN0dXJlICggdGhpcy5waWN0dXJlcyBbIG5leHRJbmRleCBdIClcclxuICAgICAgICB0aGlzLnNsaWRlcyBbIG5leHRTbGlkZSBdLmluaXQgKCAtdG8gKVxyXG4gICAgICAgIHRoaXMuc2xpZGVzIFsgdGhpcy5jdXJyZW50U2xpZGUgXS5tY0Zyb21UbyAoIDEwLCB0bywgMCApXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyBuZXh0U2xpZGUgXS5tY0Zyb21UbyAoIC10bywgMTAsIDEgKVxyXG4gICAgICAgIHNldFRpbWVvdXQgKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlID0gbmV4dFNsaWRlXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gbmV4dEluZGV4XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAxMDAwIClcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0SW5kZXggKCBkaXIgKSB7XHJcbiAgICAgIHJldHVybiBkaXIgPT09ICdsZWZ0JyA/XHJcbiAgICAgICAgICAgICggdGhpcy5jdXJyZW50SW5kZXggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlcy5sZW5ndGggLSAxIDogdGhpcy5jdXJyZW50SW5kZXggLSAxICkgOlxyXG4gICAgICAgICAgICAoIHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLnBpY3R1cmVzLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICAgICAgMCA6IHRoaXMuY3VycmVudEluZGV4ICsgMSApXHJcbiAgICB9XHJcblxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSAoICdwaWN0dXJlLXNsaWRlcicsIFBpY3R1cmVTbGlkZXIgKVxyXG5cclxuY29uc3QgU2xpZGUgPSBmdW5jdGlvbiAoIGltYWdlVVJMLCBjb250YWluZXIgKSB7XHJcbiAgICB0aGlzLmltYWdlVVJMID0gaW1hZ2VVUkxcclxuICAgIGxldCBlbGVtID0gY29udGFpbmVyLmFwcGVuZENoaWxkIChcclxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoICdkaXYnIClcclxuICAgIClcclxuICAgIGVsZW0uc3R5bGUgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1hZ2VVUkx9KTtgXHJcbiAgICB0aGlzLmluaXQgPSB4ID0+IHtcclxuICAgICAgICBlbGVtLnN0eWxlLmxlZnQgPSB4ICsgJyUnXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFBpY3R1cmUgPSBwaWN0dXJlVVJMID0+XHJcbiAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljdHVyZVVSTH0pYFxyXG5cclxuICAgIHRoaXMubWNGcm9tVG8gPSBmdW5jdGlvbiAoIGZyb20sIHRvLCBmaW5hbE9wYWNpdHkgKSB7XHJcbiAgICAgICAgZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXHJcbiAgICAgICAgZWxlbS5zdHlsZS5sZWZ0ID0gZnJvbSArICclJ1xyXG4gICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDEgLSBmaW5hbE9wYWNpdHlcclxuICAgICAgICBzZXRUaW1lb3V0ICggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuOHMnXHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHRvICsgJyUnXHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IGZpbmFsT3BhY2l0eVxyXG4gICAgICAgIH0sIDUwIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZVNsaWRlclxyXG4iLCJjbGFzcyBQb3B1cFdpbmRvdyBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnNoYWRvdyA9dGhpcy5hdHRhY2hTaGFkb3cgKCB7IG1vZGU6IFwiY2xvc2VkXCIgfSApXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibGVmdFwiPjwvc2xvdD5cclxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJyaWdodFwiPjwvc2xvdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICAgICB0aGlzLmJveCA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIi5ib3hcIiApXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiLmNvbnRlbnRcIiApXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIFwic3R5bGVcIiApXHJcbiAgICAgICAgKS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICBAY2hhcnNldCBcIlVURi04XCI7XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogMzAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJSb2JvdG9cIiwgQXJpYWw7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3ggPiAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcdCAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwIDcwJSwgdHJhbnNwYXJlbnQgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLXN0YXJzKSwgdmFyKC0taWNvbik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQsIHJpZ2h0LCByaWdodCBib3R0b207XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdCwgcmVwZWF0LCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIsIGNvbnRhaW4sIDEwMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCAyMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4ICNmZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3g6YmVmb3JlLCAuYm94OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveDpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNmNTA7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmNTA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDNweCAzcHggNnB4ICMwMDAwMDA3MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveDphZnRlciB7XHJcbiAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZjUwO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2Y1MDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweCAxMnB4ICMwMDAwMDA3MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3g6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVZKC00ZGVnKSBza2V3KC0xMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3g6aG92ZXIgPiAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg4ZGVnKSBza2V3KDIwZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4ICkge1xyXG4gICAgICAgICAgICAuYm94ID4gLmNvbnRlbnQgeyB3aWR0aDogNjB2dzsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHggKSB7XHJcbiAgICAgICAgICAgIC5ib3ggPiAuY29udGVudCB7IHdpZHRoOiA3MHZ3OyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCApIHtcclxuICAgICAgICAgICAgLmJveCA+IC5jb250ZW50IHsgd2lkdGg6IDgwdnc7IH1cclxuICAgICAgICAgICAgLmJveCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00NSUsIC01MCUpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCApIHtcclxuICAgICAgICAgICAgLmJveCA+IC5jb250ZW50IHsgd2lkdGg6IDkwdnc7IH1cclxuICAgICAgICAgICAgLmJveCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC01MCUpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICBjb2xvcjogIzBkZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQgcCB7XHJcbiAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgfWA7XHJcblxyXG4gICAgICAgIHRoaXMub25jbGljayA9IGV2ZW50ID0+IGV2ZW50LnRhcmdldC5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHtcclxuICAgICAgICByZXR1cm4gWyBcImNvbnRlbnRcIiBdXHJcbiAgICB9XHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgbmV3VmFsID8gdGhpcy5jb250ZW50LmlubmVySFRNTCA9IG5ld1ZhbCA6IG51bGxcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lICggXCJwb3B1cC13aW5cIiwgUG9wdXBXaW5kb3cgKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaW5kb3dcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgU3BvaWxlckNsYXNzIGZyb20gJy4vc3BvaWxlcidcclxuXHJcbmNsYXNzIFNjcmlwdFNwb2lsZXIgZXh0ZW5kcyBTcG9pbGVyQ2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKClcclxuICAgICAgbGV0IHJhaW5ib3dTdHlsZXMgPSB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpXHJcbiAgICAgIClcclxuICAgICAgZmV0Y2ggKCBgJHtjcmVhdGVQYXRoKCBcInNyY1wiLCBcImZvci1yYWluYm93LmNzc1wiICl9YCApXHJcbiAgICAgICAgICAudGhlbiAoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSApXHJcbiAgICAgICAgICAudGhlbiAoIGNzcyA9PiByYWluYm93U3R5bGVzLnRleHRDb250ZW50ID0gY3NzIClcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgdGhpcy5oZWFkZXIgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIjaGVhZGVyXCIgKVxyXG4gICAgICB0aGlzLndyYXBwZXIgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIuY29sbGFwc2libGUtY29udGVudFwiIClcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbICdoZWFkZXInLCAnY29udGVudCcgXVxyXG4gICAgfVxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgYXR0ck5hbWUgPT09IFwiY29udGVudFwiID9cclxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkICggdGhpcy5jb250ZW50ICkgOlxyXG4gICAgICAgICAgICBhdHRyTmFtZSA9PT0gJ2hlYWRlcicgfHwgIW5ld1ZhbCA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlci5pbm5lclRleHQgPSB0aGlzLmdldEF0dHJpYnV0ZSAoIFwiaGVhZGVyXCIgKSA6XHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSggJ3NjcmlwdC1zcG9pbGVyJywgU2NyaXB0U3BvaWxlciApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRTcG9pbGVyXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IFNwb2lsZXJDbGFzcyBmcm9tICcuL3Nwb2lsZXInXHJcblxyXG5jbGFzcyBTcG9pbGVyQ29tcG9uZW50IGV4dGVuZHMgU3BvaWxlckNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIilcclxuICAgICAgKVxyXG4gICAgICBQcm9taXNlLmFsbCAoW1xyXG4gICAgICAgICAgZmV0Y2ggKCBcInNyYy9pY29ucy5jc3NcIiApXHJcbiAgICAgICAgICAgIC50aGVuICggcmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpICksXHJcbiAgICAgICAgICBmZXRjaCAoIFwic3JjL2Zvci1yYWluYm93LmNzc1wiIClcclxuICAgICAgICAgICAgLnRoZW4gKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKSxcclxuICAgICAgXSlcclxuICAgICAgLnRoZW4gKCBjc3MgPT4gc3R5bGVzLnRleHRDb250ZW50ID0gY3NzLmpvaW4oXCJcXG5cXG5cIikgKVxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICB0aGlzLmhlYWRlciA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIiNoZWFkZXJcIiApXHJcbiAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIi5jb2xsYXBzaWJsZS1jb250ZW50XCIgKVxyXG4gICAgICB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIubGJsLXRvZ2dsZVwiIClcclxuICAgICAgICAuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NyZWF0ZVBhdGgoIFwiaWNvbnNcIixcInNsaWRlci0yLmdpZlwiICl9KWBcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbICdoZWFkZXInLCAncmVhZHknIF1cclxuICAgIH1cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayggYXR0ck5hbWUsIG9sZFZhbCwgbmV3VmFsICkge1xyXG4gICAgICAgIGlmICggIWF0dHJOYW1lICkgcmV0dXJuXHJcbiAgICAgICAgYXR0ck5hbWUgPT09IFwiaGVhZGVyXCIgPyB0aGlzLmhlYWRlci5pbm5lckhUTUwgPSBuZXdWYWwgOlxyXG4gICAgICAgICAgYXR0ck5hbWUgPT09IFwicmVhZHlcIiA/IChcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY29udGVudC5mb3JFYWNoIChcclxuICAgICAgICAgICAgICAgIGl0ZW0gPT4gdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkICggaXRlbSApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KSgpIDogbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lICggJ3Nwb2lsZXItY29tcG9uZW50JywgU3BvaWxlckNvbXBvbmVudCApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcG9pbGVyQ29tcG9uZW50XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvaWxlckNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKClcclxuICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogXCJvcGVuXCIgfSApXHJcbiAgICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJzdHlsZVwiIClcclxuICAgICAgKS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwNzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDo5OCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAxJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBpbnNldCAxcHggd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA4MDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlZWY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibC10b2dnbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICMwNzk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtjcmVhdGVQYXRoKCBcImV4dGVybmFsSWNvbnNcIiwgXCJjb2ZmZWUucG5nXCIgKX0pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMTBweCB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibC10b2dnbGU6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxLjVweCAjMDAwMDUwNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYmwtdG9nZ2xlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnICc7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2ZmNzAwMDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibC10b2dnbGU6OmFmdGVyIHtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sbGFwc2libGUtY29udGVudCAuY29udGVudC1pbm5lciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IC0ycHggM3B4ICMwMDAwMDA5MDtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVyZW0gMS4ycmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xsYXBzaWJsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9nZ2xlOmNoZWNrZWQgKyAubGJsLXRvZ2dsZSArIC5jb2xsYXBzaWJsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNzB2aDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAyMHB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA4MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZ2dsZTpjaGVja2VkICsgLmxibC10b2dnbGU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9nZ2xlOmNoZWNrZWQgKyAubGJsLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkID4gZGl2IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBocjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCLilpdcIjtcclxuICAgICAgICAgIGNvbG9yOiAjZjUwO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaHI6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCLilphcIjtcclxuICAgICAgICAgIGNvbG9yOiAjMDliO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsYWNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNkZGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgUm9ib3RvLCBBcmlhbDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpLCBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkge1xyXG4gICAgICAgICAgaDEgeyBmb250LXNpemU6IDEuMnJlbTsgfVxyXG4gICAgICAgICAgaDIgeyBmb250LXNpemU6IDEuMHJlbTsgfVxyXG4gICAgICAgICAgaDMgeyBmb250LXNpemU6IDAuOXJlbTsgfVxyXG4gICAgICAgICAgZGl2IHsgZm9udC1zaXplOiAwLjhyZW07IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDc5O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmEwO1xyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8c2VjdGlvbiBpZD1cImNvbXBvbmVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXAtY29sbGFic2libGVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjb2xsYXBzaWJsZVwiIGNsYXNzPVwidG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbGxhcHNpYmxlXCIgY2xhc3M9XCJsYmwtdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImhlYWRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1jb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICBgXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgIHRoaXMuaGVhZGVyID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiI2hlYWRlclwiIClcclxuICAgICAgdGhpcy5zY3JpcHQgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIjc2NyaXB0Q29udGVudFwiIClcclxuICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiLmNvbGxhcHNpYmxlLWNvbnRlbnRcIiApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGN1c3RvbUVsZW1lbnRzLmRlZmluZSggJ3Nwb2lsZXItZWxlbWVudCcsIFNwb2lsZXJDb21wb25lbnQgKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU3BvaWxlckNsYXNzXHJcbiIsImltcG9ydCBtYWluU3R5bGVzIGZyb20gJy4vbWFpbi5jc3MnXHJcbi8vIGltcG9ydCBSYWluYm93IGZyb20gJy4vcmFpbmJvdy5qcydcclxuaW1wb3J0IGZvclJhaW5ib3cgZnJvbSAnLi9mb3ItcmFpbmJvdy5jc3MnXHJcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9waWN0dXJlLXNsaWRlcidcclxuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSAnLi9tZW51LWNvbXBvbmVudCdcclxuaW1wb3J0IHNwb2lsZXIgZnJvbSAnLi9zcG9pbGVyJ1xyXG5pbXBvcnQgc3BvaWxlckNvbXBvbmVudCBmcm9tICcuL3Nwb2lsZXItY29tcG9uZW50J1xyXG5cclxuaW1wb3J0IG1haW5NZW51IGZyb20gJy4vbWFpbi1tZW51J1xyXG5pbXBvcnQgc2NyaXB0U3BvaWxlciBmcm9tICcuL3NjcmlwdC1zcG9pbGVyJ1xyXG5cclxuaW1wb3J0IGdsaXRjaCBmcm9tICcuL2dsaXRjaCdcclxuaW1wb3J0IHBhZ2VDb21wb25lbnQgZnJvbSAnLi9wYWdlLWNvbXBvbmVudCdcclxuaW1wb3J0IGNvZGVPdXRwdXRDb21wb25lbnQgZnJvbSBcIi4vY29kZU91dHB1dENvbXBvbmVudFwiXHJcbmltcG9ydCBTaHV0dGVyIGZyb20gXCIuL1NodXR0ZXJcIlxyXG5cclxuaW1wb3J0IEdyYXBoaWNIZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vR3JhcGhpY0hlYWRlckNvbXBvbmVudFwiXHJcblxyXG5pbXBvcnQgcHJvamVjdFN0eWxlcyBmcm9tIFwiLi9wcm9qZWN0LmNzc1wiXHJcbmltcG9ydCBncmlkU3R5bGVzIGZyb20gXCIuL2dyaWQuY3NzXCJcclxuXHJcbmltcG9ydCBTdmdOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIi4vc3ZnLW5hdmlnYXRpb24tcGFuZWxcIlxyXG5cclxuaW1wb3J0IG5vaXNlIGZyb20gXCIuL25vaXNlLmNzc1wiXHJcblxyXG5pbXBvcnQgUG9wdXBXaW5kb3cgZnJvbSBcIi4vcG9wdXAtd2luZG93XCJcclxuIiwiY2xhc3MgU3ZnTmF2aWdhdGlvblBhbmVsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogXCJjbG9zZWRcIiB9IClcclxuICAgICAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgPSBgPHN2Zz48L3N2Zz5gXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcIm5vcm1cIlxyXG4gICAgICAgIHRoaXMubWF4V2lkdGggPSAzMjBcclxuICAgICAgICB0aGlzLm1pbldpZHRoID0gNTBcclxuICAgICAgICB0aGlzLnN0ZXAgPSA1XHJcbiAgICAgICAgdGhpcy5kID0gNTBcclxuICAgICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCBcInN2Z1wiIClcclxuXHJcbiAgICAgICAgdGhpcy5yYW5kMSA9IHRoaXMucmFuZG9tU3RlcFxyXG4gICAgICAgIHRoaXMucmFuZDIgPSB0aGlzLnJhbmQxICsgdGhpcy5yYW5kb21TdGVwLFxyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5yYW5kb21XaWR0aFxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciAoIFwiZXhwYW5kXCIsIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aC5kaXNwYXRjaEV2ZW50ICggbmV3IEV2ZW50ICggZXZlbnQudHlwZSApIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciAoIFwiY2xvc2VcIiwgZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoLmRpc3BhdGNoRXZlbnQgKCBuZXcgRXZlbnQgKCBldmVudC50eXBlICkgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXQgdyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICB9XHJcbiAgICBnZXQgaCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgfVxyXG4gICAgZ2V0IHBhdGggKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCJzdmcgPiBwYXRoXCIgKVxyXG4gICAgfVxyXG4gICAgZ2V0IHJhbmRvbVN0ZXAgKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kICggTWF0aC5yYW5kb20oKSAqIHRoaXMuaCAqIDAuMyApXHJcbiAgICB9XHJcbiAgICBnZXQgcmFuZG9tV2lkdGggKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kICggTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4V2lkdGggKiAwLjQgKVxyXG4gICAgfVxyXG5cclxuICAgIHNldExpc3RlbmVycyAoKSB7XHJcbiAgICAgIHRoaXMucGF0aC5hZGRFdmVudExpc3RlbmVyICggXCJleHBhbmRcIiwgdGhpcy5tb3ZpZS5iaW5kICggdGhpcyApIClcclxuICAgICAgdGhpcy5wYXRoLmFkZEV2ZW50TGlzdGVuZXIgKCBcImNsb3NlXCIsIHRoaXMucmV2ZXJzZS5iaW5kICggdGhpcyApIClcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0aWMgKCBleHBhbmQgKSB7XHJcbiAgICAgICAgdGhpcy5zdmcuc3R5bGUud2lkdGggPSBleHBhbmQgPyBcIjEwMHZ3XCIgOiBcIjBcIlxyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZXhwYW5kID8gXCJ3aWRlXCIgOiBcIm5vcm1cIlxyXG4gICAgICAgIGxldCB3aWR0aCA9IGV4cGFuZCA/IHRoaXMubWF4V2lkdGggOiB0aGlzLm1pbldpZHRoXHJcbiAgICAgICAgdGhpcy5zdmcuaW5uZXJIVE1MID0gYDxwYXRoIGQ9XCJNJHt0aGlzLnd9IDAgTCR7dGhpcy53LXdpZHRofSAwIEwke3RoaXMudy13aWR0aH0gJHt0aGlzLmh9IEwke3RoaXMud30gJHt0aGlzLmh9IFpcIiAvPmBcclxuICAgICAgICB0aGlzLnNldExpc3RlbmVycygpXHJcbiAgICAgICAgdGhpcy5yYW5kMSA9IHRoaXMucmFuZG9tU3RlcFxyXG4gICAgICAgIHRoaXMucmFuZDIgPSB0aGlzLnJhbmQxICsgdGhpcy5yYW5kb21TdGVwXHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLnJhbmRvbVdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgbW92aWUgKCkge1xyXG4gICAgICAgIHRoaXMuc3ZnLnN0eWxlLndpZHRoID0gXCIxMDB2d1wiXHJcbiAgICAgICAgdGhpcy5kICs9IHRoaXMuc3RlcCArIDFcclxuICAgICAgICB0aGlzLnJhbmQxICs9IDRcclxuICAgICAgICB0aGlzLnJhbmQyICs9IDVcclxuICAgICAgICB0aGlzLnN2Zy5pbm5lckhUTUwgPSBgPHBhdGggZD1cIk0ke3RoaXMud30gMCBMJHt0aGlzLnctdGhpcy5taW5XaWR0aC10aGlzLm9mZnNldH0gMCBDJHt0aGlzLnctdGhpcy5kK3RoaXMub2Zmc2V0fSAke3RoaXMucmFuZDF9ICR7dGhpcy53LXRoaXMuZC10aGlzLm9mZnNldH0gJHt0aGlzLnJhbmQyfSAke3RoaXMudy10aGlzLm1pbldpZHRoLXRoaXMub2Zmc2V0KjJ9ICR7dGhpcy5ofSBMJHt0aGlzLnd9ICR7dGhpcy5ofSBaXCIgLz5gO1xyXG4gICAgICAgIHRoaXMuZCA8IHRoaXMubWF4V2lkdGggPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKCB0aGlzLm1vdmllLmJpbmQgKCB0aGlzICkgKSA6IHRoaXMuc2V0U3RhdGljKCB0cnVlIClcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlICgpIHtcclxuICAgICAgICB0aGlzLmQgLT0gdGhpcy5zdGVwICsgMVxyXG4gICAgICAgIHRoaXMucmFuZDEgKz0gNFxyXG4gICAgICAgIHRoaXMucmFuZDIgKz0gNVxyXG4gICAgICAgIHRoaXMuc3ZnLmlubmVySFRNTCA9IGA8cGF0aCBkPVwiTSR7dGhpcy53fSAwIEwke3RoaXMudy10aGlzLm1pbldpZHRoLXRoaXMuZH0gMCBDJHt0aGlzLnctdGhpcy5kK3RoaXMub2Zmc2V0fSAke3RoaXMucmFuZDF9ICR7dGhpcy53LXRoaXMuZH0gJHt0aGlzLnJhbmQyfSAke3RoaXMudy10aGlzLm1pbldpZHRoLXRoaXMuZH0gJHt0aGlzLmh9IEwke3RoaXMud30gJHt0aGlzLmh9IFpcIiAvPmA7XHJcbiAgICAgICAgdGhpcy5kID4gMCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZSAoIHRoaXMucmV2ZXJzZS5iaW5kICggdGhpcyApICkgOiB0aGlzLnNldFN0YXRpYyggZmFsc2UgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcInN2Z1wiIClcclxuICAgICAgICB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCAoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwic3R5bGVcIikpXHJcbiAgICAgICAgICAgIC50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB0aGlzLnN2Zy5pbm5lckhUTUwgPSBgPHBhdGggZD1cIk0ke3RoaXMud30gMCBMJHt0aGlzLnctdGhpcy5taW5XaWR0aH0gMCBMJHt0aGlzLnctdGhpcy5taW5XaWR0aH0gJHt0aGlzLmh9IEwke3RoaXMud30gJHt0aGlzLmh9IFpcIiAvPmA7XHJcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAoIFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0aWMgKCBzdGF0dXMgPT09IFwid2lkZVwiIClcclxuICAgICAgICB9LmJpbmQgKCB0aGlzICkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSAoXHJcbiAgICBcInN2Zy1uYXYtcGFuZWxcIixcclxuICAgIFN2Z05hdmlnYXRpb25QYW5lbFxyXG4pXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTdmdOYXZpZ2F0aW9uUGFuZWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==