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
          // if ( location.host === "js-lessons.glitch.me" )
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
              console.log ( anchor.href );
              anchor.textContent = item.title;
              anchor.fileName = item.ref;

              anchor.onclick = function ( event ) {
                  event.preventDefault();
                  this.checkbox.checked = !this.checkbox.checked;
                  this.checkbox.dispatchEvent ( new Event ( "click" ) );
                  if ( location.host === "js-lessons.glitch.me" )
                      window.history.pushState( { route: event.target.href }, event.target.innerText, event.target.href );
                  else window.history.pushState( { route: `#${event.target.fileName}` }, event.target.innerText, `#${event.target.fileName}` );

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
    console.log ( "PATH: ", path );
    let startPath = `${createPath("lessons", path === "/" ? "start-page" : location.pathname.slice(1))}.md`;
    // let startPath = `${createPath("lessons", location.pathname === "/" ? "start-page" : location.pathname.slice(1))}`;
    console.log ( "Path to file: ", startPath );
    this.setAttribute("src", startPath);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvci1yYWluYm93LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9ub2lzZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dyYXBoaWNIZWFkZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NodXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVPdXRwdXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvci1yYWluYm93LmNzcz81NDMwIiwid2VicGFjazovLy8uL3NyYy9nbGl0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuY3NzP2YzOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4tbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/MzdmNSIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vaXNlLmNzcz9lYTY0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC5jc3M/ZDM3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0LXNwb2lsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwb2lsZXItY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zcG9pbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLW5hdmlnYXRpb24tcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsR0FBRyxVQUFVLEtBQUssV0FBVyxnQkFBZ0IsSUFBSSxzQkFBc0IsSUFBSSx3QkFBd0IsSUFBSSx3QkFBd0IsSUFBSSxVQUFVLElBQUksc0JBQXNCLEtBQUssc0JBQXNCLFdBQVcsc0ZBQXNGLFVBQVUsb0VBQW9FLCtDQUErQyxzSEFBc0gsZUFBZSxvQ0FBb0Msc0hBQXNILGVBQWUsMElBQTBJLFVBQVUsSUFB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QUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVyxZQUFZLGFBQWE7QUFDOUMsVUFBVSxXQUFXLGFBQWEsYUFBYTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxZQUFZO0FBQzlDLFdBQVcsV0FBVyxZQUFZLGFBQWE7QUFDL0MsV0FBVyxXQUFXLGFBQWEsWUFBWTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLGFBQWE7QUFDaEQsV0FBVyxXQUFXLFlBQVksWUFBWTtBQUM5QyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLFlBQVk7QUFDL0MsV0FBVyxXQUFXLFlBQVksYUFBYTtBQUMvQyxXQUFXLFdBQVcsWUFBWSxhQUFhO0FBQy9DLFdBQVcsV0FBVyxhQUFhLFlBQVk7QUFDL0MsV0FBVyxXQUFXLGFBQWEsYUFBYTtBQUNoRCxXQUFXLFdBQVcsWUFBWSxjQUFjO0FBQ2hELFdBQVcsV0FBVyxZQUFZLGFBQWE7QUFDL0Ms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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPLE1BQU0sYUFBYSxNQUFNLGFBQWEsR0FBRyxPQUFPLElBQUksT0FBTyxHQUFHLE9BQU87QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU8sTUFBTSxpQ0FBaUMsTUFBTSwwQkFBMEIsR0FBRyxXQUFXLEdBQUcsMEJBQTBCLEdBQUcsV0FBVyxHQUFHLG1DQUFtQyxHQUFHLE9BQU8sSUFBSSxPQUFPLEdBQUcsT0FBTztBQUN0UDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU8sTUFBTSw0QkFBNEIsTUFBTSwwQkFBMEIsR0FBRyxXQUFXLEdBQUcsY0FBYyxHQUFHLFdBQVcsR0FBRyw0QkFBNEIsR0FBRyxPQUFPLElBQUksT0FBTyxHQUFHLE9BQU87QUFDOU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPLE1BQU0scUJBQXFCLE1BQU0scUJBQXFCLEdBQUcsT0FBTyxJQUFJLE9BQU8sR0FBRyxPQUFPO0FBQ3RJOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3N0YXJ0LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSYWluYm93ICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlLWluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBmYWRlezEwJXt0cmFuc2Zvcm06c2NhbGUoMSwgMSl9MzUle3RyYW5zZm9ybTpzY2FsZSgxLCAxLjcpfTQwJXt0cmFuc2Zvcm06c2NhbGUoMSwgMS43KX01MCV7b3BhY2l0eToxfTYwJXt0cmFuc2Zvcm06c2NhbGUoMSwgMSl9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMSwgMSk7b3BhY2l0eTowfX1bZGF0YS1sYW5ndWFnZV0gY29kZSxbY2xhc3NePVxcXCJsYW5nXFxcIl0gY29kZSxwcmUgW2RhdGEtbGFuZ3VhZ2VdLHByZSBbY2xhc3NePVxcXCJsYW5nXFxcIl17b3BhY2l0eTowOy1tcy1maWx0ZXI6XFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcXFwiO2FuaW1hdGlvbjpmYWRlLWluIDUwbXMgZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHN9W2RhdGEtbGFuZ3VhZ2VdIGNvZGUucmFpbmJvdyxbY2xhc3NePVxcXCJsYW5nXFxcIl0gY29kZS5yYWluYm93LHByZSBbZGF0YS1sYW5ndWFnZV0ucmFpbmJvdyxwcmUgW2NsYXNzXj1cXFwibGFuZ1xcXCJdLnJhaW5ib3d7YW5pbWF0aW9uOm5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5IDUwbXMgZWFzZS1pbi1vdXR9W2RhdGEtbGFuZ3VhZ2VdIGNvZGUubG9hZGluZyxbY2xhc3NePVxcXCJsYW5nXFxcIl0gY29kZS5sb2FkaW5nLHByZSBbZGF0YS1sYW5ndWFnZV0ubG9hZGluZyxwcmUgW2NsYXNzXj1cXFwibGFuZ1xcXCJdLmxvYWRpbmd7YW5pbWF0aW9uOm5vbmV9W2RhdGEtbGFuZ3VhZ2VdIGNvZGUucmFpbmJvdy1zaG93LFtjbGFzc149XFxcImxhbmdcXFwiXSBjb2RlLnJhaW5ib3ctc2hvdyxwcmUgW2RhdGEtbGFuZ3VhZ2VdLnJhaW5ib3ctc2hvdyxwcmUgW2NsYXNzXj1cXFwibGFuZ1xcXCJdLnJhaW5ib3ctc2hvd3tvcGFjaXR5OjF9cHJle3Bvc2l0aW9uOnJlbGF0aXZlfXByZS5sb2FkaW5nIC5wcmVsb2FkZXIgZGl2e2FuaW1hdGlvbi1wbGF5LXN0YXRlOnJ1bm5pbmd9cHJlLmxvYWRpbmcgLnByZWxvYWRlciBkaXY6bnRoLW9mLXR5cGUoMSl7YmFja2dyb3VuZDojMDA4MWY1O2FuaW1hdGlvbjpmYWRlIDEuNXMgMzAwbXMgbGluZWFyIGluZmluaXRlfXByZS5sb2FkaW5nIC5wcmVsb2FkZXIgZGl2Om50aC1vZi10eXBlKDIpe2JhY2tncm91bmQ6IzUwMDBmNTthbmltYXRpb246ZmFkZSAxLjVzIDQzOG1zIGxpbmVhciBpbmZpbml0ZX1wcmUubG9hZGluZyAucHJlbG9hZGVyIGRpdjpudGgtb2YtdHlwZSgzKXtiYWNrZ3JvdW5kOiM5MDAwZjU7YW5pbWF0aW9uOmZhZGUgMS41cyA1NzdtcyBsaW5lYXIgaW5maW5pdGV9cHJlLmxvYWRpbmcgLnByZWxvYWRlciBkaXY6bnRoLW9mLXR5cGUoNCl7YmFja2dyb3VuZDojZjUwNDE5O2FuaW1hdGlvbjpmYWRlIDEuNXMgNzE1bXMgbGluZWFyIGluZmluaXRlfXByZS5sb2FkaW5nIC5wcmVsb2FkZXIgZGl2Om50aC1vZi10eXBlKDUpe2JhY2tncm91bmQ6I2Y1NzkwMDthbmltYXRpb246ZmFkZSAxLjVzIDg1M21zIGxpbmVhciBpbmZpbml0ZX1wcmUubG9hZGluZyAucHJlbG9hZGVyIGRpdjpudGgtb2YtdHlwZSg2KXtiYWNrZ3JvdW5kOiNmNWU2MDA7YW5pbWF0aW9uOmZhZGUgMS41cyA5OTJtcyBsaW5lYXIgaW5maW5pdGV9cHJlLmxvYWRpbmcgLnByZWxvYWRlciBkaXY6bnRoLW9mLXR5cGUoNyl7YmFja2dyb3VuZDojMDBmNTBjO2FuaW1hdGlvbjpmYWRlIDEuNXMgMTEzMG1zIGxpbmVhciBpbmZpbml0ZX1wcmUgLnByZWxvYWRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTJweDtsZWZ0OjEwcHh9cHJlIC5wcmVsb2FkZXIgZGl2e3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7Ym9yZGVyLXJhZGl1czo0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjRweDtvcGFjaXR5OjA7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHN9cHJle2JhY2tncm91bmQtY29sb3I6IzAwMDt3b3JkLXdyYXA6YnJlYWstd29yZDttYXJnaW46MHB4O3BhZGRpbmc6MTBweDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxNHB4O21hcmdpbi1ib3R0b206MjBweH1wcmUsY29kZXtmb250LWZhbWlseTonTW9uYWNvJywgJ01lbmxvJywgY291cmllciwgbW9ub3NwYWNlfXByZSxjb2Rle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZX1wcmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwMDA7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MTZweH1wcmUgLmNvbW1lbnR7Y29sb3I6Izg4OH1wcmUgLnN1cHBvcnR7Y29sb3I6I2NkNTdkNX1wcmUgLmNvbnN0YW50Lm51bWVyaWMscHJlIC5waHAuZW1iZWRkZWR7Y29sb3I6I2ZhMDAwMjtmb250LXdlaWdodDpib2xkfXByZSAua2V5d29yZCxwcmUgLmNvbnN0YW50Lmxhbmd1YWdle2NvbG9yOiMwMDA3ODk7Zm9udC13ZWlnaHQ6Ym9sZH1wcmUgLnNlbGVjdG9yLHByZSAuc3VwcG9ydC5wcm9wZXJ0eSxwcmUgLmVudGl0eS5uYW1lLmZ1bmN0aW9ue2NvbG9yOiMwMDB9cHJlIC5zdG9yYWdlLmZ1bmN0aW9uLHByZSAudmFyaWFibGUuc2VsZixwcmUgLnN1cHBvcnQuZnVuY3Rpb24scHJlIC5jb25zdGFudC5sYW5ndWFnZXtjb2xvcjojMDAwO2ZvbnQtd2VpZ2h0OmJvbGR9cHJlIC5zdHJpbmd7Y29sb3I6IzBkNDNmYTtmb250LXdlaWdodDpub3JtYWx9cHJlIC5jc3MtcHJvcGVydHkrc3BhbixwcmUgLmtleXdvcmQudW5pdCxwcmUgLnN1cHBvcnQuY3NzLXZhbHVle2NvbG9yOiMwZDQzZmEgIWltcG9ydGFudDtmb250LXdlaWdodDpub3JtYWwgIWltcG9ydGFudH1wcmUgLmVudGl0eS50YWcuc3R5bGUrLnN0cmluZyxwcmUgLnBocC5lbWJlZGRlZCAuY29uc3RhbnQubGFuZ3VhZ2UscHJlIC5waHAuZW1iZWRkZWQgLmtleXdvcmR7Y29sb3I6IzM3YTM0OCAhaW1wb3J0YW50fXByZSAuc3VwcG9ydC5tZXRob2R7Y29sb3I6IzJiZDViYn1wcmUgLmVudGl0eS5uYW1le2NvbG9yOiNmZDc0ZTB9cHJlIC5zdXBwb3J0LmNzcy1wcm9wZXJ0eSxwcmUgLnN1cHBvcnQudGFnLW5hbWUscHJlIC5zdXBwb3J0LnRhZyxwcmUgLnN1cHBvcnQuYXR0cmlidXRlLHByZSAuc3VwcG9ydC5hdHRyaWJ1dGUrLm9wZXJhdG9ye2NvbG9yOiMwMDA3ODl9cHJlIC5zdG9yYWdlLm1vZHVsZSxwcmUgLnN0b3JhZ2UuY2xhc3N7Y29sb3I6IzEyMjU3Mztmb250LXdlaWdodDpib2xkfXByZSAuY3NzLmVtYmVkZGVkIC5zdXBwb3J0LnRhZyxwcmUgLmNzcy5lbWJlZGRlZCAuc3R5bGUudGFne2NvbG9yOiNjZDU3ZDV9cHJlIC5rZXl3b3JkLm9wZXJhdG9ye2NvbG9yOiMyODUyZWI7Zm9udC13ZWlnaHQ6bm9ybWFsfXByZSAucGhwLmVtYmVkZGVkIC52YXJpYWJsZSxwcmUgLnBocC5lbWJlZGRlZCAuc3RvcmFnZS5mdW5jdGlvbntjb2xvcjojMGQ0M2ZhO2ZvbnQtd2VpZ2h0Om5vcm1hbH1wcmUgLnBocC5lbWJlZGRlZCAuc3RyaW5nLHByZSAuanMuZW1iZWRkZWQgLnRhZy5zY3JpcHR7Y29sb3I6I2M0MDAxZX1wcmUgLnBocC5lbWJlZGRlZCAuY29tbWVudHtjb2xvcjojZjRiNDQxO2ZvbnQtd2VpZ2h0Om5vcm1hbH1wcmUgLnBocC5lbWJlZGRlZCAuZnVuY3Rpb24ubmFtZXtjb2xvcjojMDAwO2ZvbnQtd2VpZ2h0Om5vcm1hbH1cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDAwMDA1MDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAyMHB4IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHggMTBweCAyMHB4IDJweDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHggMTBweCAwO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxucHJlIC5zdG9yYWdlLmZ1bmN0aW9uLCBwcmUgLnZhcmlhYmxlLnNlbGYsXFxyXFxucHJlIC5zdXBwb3J0LmZ1bmN0aW9uLCBwcmUgLmNvbnN0YW50Lmxhbmd1YWdlIHtcXHJcXG4gICAgY29sb3I6IGRhcmtvcmNoaWQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5wcmUgLnN0b3JhZ2UudHlwZSB7XFxyXFxuICBjb2xvcjogZmlyZWJyaWNrO1xcclxcbn1cXHJcXG5cXHJcXG5wcmUgLmVudGl0eS5uYW1lLmZ1bmN0aW9uIHtcXHJcXG4gICAgY29sb3I6IHJnYig3LCAxMTksIDcpO1xcclxcbn1cXHJcXG5cXHJcXG5jb2RlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbn1cXHJcXG5cXHJcXG50ZCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjZWVmO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMWZyKSk7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLmdyaWQgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG59XFxyXFxuLmdyaWQgPiBkaXYgPiBhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC8qIC0tY2FwLWltYWdlIDogdXJsKGh0dHBzOi8vd3d3LndlYmZ4LmNvbS90b29scy9lbW9qaS1jaGVhdC1zaGVldC9ncmFwaGljcy9lbW9qaXMvY29mZmVlLnBuZyk7ICovXFxyXFxuICAtLWNhcC1pbWFnZSA6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2pzLXNhbXBsZXMvaWNvbnMvY2FwLnBuZyk7XFxyXFxuICAvKiAtLWxpbmstaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2pzLXNhbXBsZXMvaWNvbnMvbGluay5wbmcpOyAqL1xcclxcblxcclxcbiAgLS1iYWNrLWNvbG9yOiAjZmZmZmZmOTA7XFxyXFxuICAtLW1lbnUtYmFjay1jb2xvcjogI2ZhMDtcXHJcXG4gIC0tc3VibWVudS1iYWNrLWNvbG9yOiAjMDliO1xcclxcbiAgLS1iYWNrLXRyYW5zcGFyZW50OiAjZmZmZmZmMDA7XFxyXFxuICAtLW1lbnUtY29sb3I6ICMwOWI7XFxyXFxuICAtLXN1Ym1lbnUtY29sb3I6ICMwOWI7XFxyXFxuICAtLW1lbnUtY29sb3ItaG92ZXI6ICMwMDA7XFxyXFxuICAtLXN1Ym1lbnUtY29sb3ItaG92ZXI6ICMwMDA7XFxyXFxuICAtLXNlbGVjdGVkLWxlc3Nvbi1jb2xvcjogI2ZmZjtcXHJcXG4gIC0taGVhZGVyLWJhY2stY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMDAwLCAjMDAwMDAwNTAgMzAlLCAjMDAwMDAwIDQwJSwgIzAwMCApO1xcclxcbiAgLS1oZWFkZXItYmFjay1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLmdsaXRjaC5jb20vYTRlMGE5ZmQtZWE3Yi00N2NmLWI1MmEtNDhmZDYzNTljNTU5JTJGc3RhcnMtNS5naWYpO1xcclxcblxcclxcbiAgLyotLWljb246ICAgICAgIHVybCguLi9zcmMvaW1hZ2VzL2NhdC5naWYpOyovXFxyXFxuICAtLWljb246ICAgICAgIHVybChodHRwczovL2Nkbi5nbGl0Y2guY29tL2E0ZTBhOWZkLWVhN2ItNDdjZi1iNTJhLTQ4ZmQ2MzU5YzU1OSUyRnBlcnNvbmFnZS10by1yaWdodC5naWYpO1xcclxcbiAgLS1zZWFyY2g6ICAgICB1cmwoaHR0cHM6Ly93d3cud2ViZnguY29tL3Rvb2xzL2Vtb2ppLWNoZWF0LXNoZWV0L2dyYXBoaWNzL2Vtb2ppcy9tYWcucG5nKTtcXHJcXG4gIC0tbGluay1pbWFnZTogdXJsKGh0dHBzOi8vZ2FyZXZuYS5naXRodWIuaW8vanMtc2FtcGxlcy9pY29ucy9saW5rLWljby5wbmcpO1xcclxcblxcclxcbiAgLS1idXR0b24tZ3JhZGllbnQtMDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDliLCAjMDliLCAjMDliKTtcXHJcXG4gIC0tYnV0dG9uLWdyYWRpZW50LTE6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgMTAlIDMwJSwgIzA5Yik7XFxyXFxuICAtLWJ1dHRvbi1ncmFkaWVudC0yOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDMwJSA1MCUsICMwOWIpO1xcclxcbiAgLS1idXR0b24tZ3JhZGllbnQtMzogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCA1MCUgNzAlLCAjMDliKTtcXHJcXG4gIC0tYnV0dG9uLWdyYWRpZW50LTQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgNzAlIDkwJSwgIzA5Yik7XFxyXFxuICAtLWJ1dHRvbi1ncmFkaWVudC01OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDQwJSA1MCUsICMwOWIpO1xcclxcbiAgLS1tYWluLW1lbnUtaXRlbS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAtLW1haW4tZm9udDogJ1BvcHBpbnMnLCAnTW9udHNlcnJhdCcsICdSb2JvdG8nLCBBcmlhbDtcXHJcXG4gIC0tZnVueS1mb250OiAnTHVja2llc3QgR3V5JywgJ01vbnRzZXJyYXQnLCAnUm9ib3RvJywgQXJpYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAyMHB4IGNhbGMoNTAlIC0gNDUwcHgpO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgQXJpYWw7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAyMHB4IHdoaXRlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNzBweCB3aGl0ZTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBtYXJnaW46IDMycHggMDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNmNTA7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxLjJweCAjMDliO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PSAgbWFpbi1tZW51LWNvbXBvbmVudCAgPT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxubWFpbi1tZW51LWNvbXBvbmVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmFjay1pbWFnZSksIHZhcigtLWhlYWRlci1iYWNrLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMCUsIDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteCwgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA5MDtcXHJcXG4gICAgei1pbmRleDogNTU7XFxyXFxufVxcclxcblxcclxcbm1haW4tbWVudS1jb21wb25lbnQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIkNsaWVudC1zaWRlIEpTXFxcIjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMdWNraWVzdCBHdXlcXFwiO1xcclxcbiAgICBjb2xvcjogI2RlZjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbiAgICAtbW96LWxldHRlci1zcGFjaW5nOiAyO1xcclxcbiAgICAtd2Via2l0LWxldHRlci1zcGFjaW5nOiAyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjtcXHJcXG59XFxyXFxuXFxyXFxucG9wdXAtd2luIGltZyB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcbnBvcHVwLXdpbiBoMyB7XFxyXFxuICBjb2xvcjogI2RkZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxyXFxuICBtYWluLW1lbnUtY29tcG9uZW50OmJlZm9yZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XFxyXFxuICBtYWluLW1lbnUtY29tcG9uZW50OmJlZm9yZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjB2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBnbGl0Y2gtbG9nbyB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG4gIHBvcHVwLXdpbiB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG5cXHJcXG4gIG1haW4tbWVudS1jb21wb25lbnQ6YmVmb3JlIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCksIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ4MHB4KSB7XFxyXFxuICAgIG1haW4tbWVudS1jb21wb25lbnQge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgbWFpbi1tZW51LWNvbXBvbmVudDpiZWZvcmUge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT0gZ2xpdGNoIGxvZ28gPT09PT0gKi9cXHJcXG5cXHJcXG5nbGl0Y2gtbG9nbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA3MHB4O1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxNTBweCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbm1lbnUtY29tcG9uZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDhweDtcXHJcXG4gICAgei1pbmRleDogNTAwO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNsb3NlLWJ1dHRvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cud2ViZnguY29tL3Rvb2xzL2Vtb2ppLWNoZWF0LXNoZWV0L2dyYXBoaWNzL2Vtb2ppcy9ub19lbnRyeV9zaWduLnBuZyk7XFxyXFxuICB3aWR0aDozMHB4O1xcclxcbiAgaGVpZ2h0OjMwcHg7XFxyXFxufVxcclxcbi5jbG9zZS1idXR0b246aG92ZXI6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogIzA3OTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzAwMDAwMDcwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmNTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZhMDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI25vaXNlLWJhY2ssICNub2lzZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDAlIDAlLCAwJSAwJSwgMCUgMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudDpob3ZlciA+ICNub2lzZS1iYWNrIHtcXHJcXG4gIGFuaW1hdGlvbjogY2xpcC1hbmltYXRpb24gMC4zcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLmNvbnRlbnQ6aG92ZXIgPiAjbm9pc2Uge1xcclxcbiAgYW5pbWF0aW9uOiBjbGlwLWFuaW1hdGlvbiAwLjRzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jbm9pc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1MDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25vaXNlLWJhY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5YjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjbGlwLWFuaW1hdGlvbiB7XFxyXFxuICAgIDAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA1JSAwJSwgNSUgNCUsIDAlIDQlKTsgfVxcclxcbiAgICAyJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA4JSwgMTAlIDglLCAxMCUgMTAlLCAwJSAxMCUpOyB9XFxyXFxuICAgIDUlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxNSUgMCUsIDE1JSA1JSwgMCUgNSUpOyB9XFxyXFxuICAgIDclIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEyJSwgNDAlIDEyJSwgNDAlIDE1JSwgMCUgMTUlKTsgfVxcclxcbiAgIDEwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAyNSUsIDIwJSAyNSUsIDIwJSAzMCUsIDAlIDMwJSk7IH1cXHJcXG4gICAxNSUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgODglLCAyMCUgODglLCAyMCUgOTAlLCAwJSA5MCUpOyB9XFxyXFxuICAgMjAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDk3JSwgNTAlIDk3JSwgNTAlIDEwMCUsIDAlIDEwMCUpOyB9XFxyXFxuICAgMjclIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDkwJSwgMzAlIDkwJSwgMzAlIDkyJSwgMCUgOTIlKTsgfVxcclxcbiAgIDMwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA1MCUsIDQwJSA1MCUsIDQwJSA1NCUsIDAlIDU0JSk7IH1cXHJcXG4gICAzNCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNDMlLCA0MCUgNDMlLCA0MCUgNDUlLCAwJSA0NSUpOyB9XFxyXFxuICAgNDAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMjAlIDMwJSwgMjAlIDMyJSwgMCUgMzIlKTsgfVxcclxcbiAgIDQ3JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgNTAlIDAlLCA1MCUgMyUsIDAlIDMlKTsgfVxcclxcbiAgIDUwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAxNSUsIDMwJSAxNSUsIDMwJSAyMCUsIDAlIDIwJSk7IH1cXHJcXG4gICA1NSUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTclLCA0MCUgMTclLCA0MCUgMjAlLCAwJSAyMCUpOyB9XFxyXFxuICAgNjAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDcwJSwgNDAlIDcwJSwgNDAlIDczJSwgMCUgNzMlKTsgfVxcclxcbiAgIDY0JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAxOCUsIDMwJSAxOCUsIDMwJSAyMCUsIDAlIDIwJSk7IH1cXHJcXG4gICA3MCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgODAlLCAyMCUgODAlLCAyMCUgODUlLCAwJSA4NSUpOyB9XFxyXFxuICAgNzIlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDc0JSwgMjAlIDc0JSwgMjAlIDc3JSwgMCUgNzclKTsgfVxcclxcbiAgIDc4JSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDQwJSAzMCUsIDQwJSAzMyUsIDAlIDMzJSk7IH1cXHJcXG4gICA4MCUgeyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNDAlLCA0MCUgNDAlLCA0MCUgNDQlLCAwJSA0NCUpOyB9XFxyXFxuICAgOTAlIHsgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwJSwgMzAlIDEwJSwgMzAlIDEyJSwgMCUgMTIlKTsgfVxcclxcbiAgMTAwJSB7IGNsaXAtcGF0aDogcG9seWdvbigwJSA4NCUsIDM1JSA4NCUsIDM1JSA4OCUsIDAlIDg4JSk7IH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1ha2V0LTAxIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDEucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTAyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDIucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTAzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDMucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTA0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDQucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTA1IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDUucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTA2IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDYucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTA3IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDcucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTA4IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDgucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTA5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMDkucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTEwIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMTAucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTExIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMTEucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTEyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMTIucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTEzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMTMucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTE0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMTQucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTE1IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMTUucG5nKTtcXHJcXG59XFxyXFxuLm1ha2V0LTE2IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2dhcmV2bmEuZ2l0aHViLmlvL2EtbGV2ZWwtanMtbGVzc29ucy9zcmMvaW1hZ2VzL3Byb2plY3QvMTYucG5nKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1ha2V0LTAxLCAubWFrZXQtMDIsIC5tYWtldC0wMywgLm1ha2V0LTA0LCAubWFrZXQtMDUsIC5tYWtldC0wNixcXHJcXG4ubWFrZXQtMDcsIC5tYWtldC0wOCwgLm1ha2V0LTA5LCAubWFrZXQtMTAsIC5tYWtldC0xMSwgLm1ha2V0LTEyLFxcclxcbi5tYWtldC0xMywgLm1ha2V0LTE0LCAubWFrZXQtMTUsIC5tYWtldC0xNiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGhlaWdodDogMzB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgPiBkaXYgPiBhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIEdyYXBoaWNIZWFkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKClcclxuICAgICAgICB0aGlzLm5vcm1hbFN0YXRlID0gWyAtMTAwLCAwLCAzMDAsIDAgXVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gWyAtMTAwLCAwLCAzMDAsIDAgXVxyXG4gICAgICAgIHRoaXMuaG92ZXJTdGF0ZSA9IFsgMjAsIDcwLCA4MCwgNzAgXVxyXG4gICAgICAgIHRoaXMuZGVmcyA9IGBcclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJzaGFkb3dcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIzMDAlXCIgaGVpZ2h0PVwiMzAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZlT2Zmc2V0IHJlc3VsdD1cIm9mZk91dFwiIGluPVwiU291cmNlQWxwaGFcIiBkeD1cIjFcIiBkeT1cIjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHJlc3VsdD1cImJsdXJJblwiIGluPVwib2ZmT3V0XCIgc3RkRGV2aWF0aW9uPVwiN1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmVCbGVuZCBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJibHVyT3V0XCIgbW9kZT1cIm5vcm1hbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdHRlcm4gaWQ9XCJwaWN0dXJlXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1hZ2UgeGxpbms6aHJlZj1cImh0dHBzOi8vY2RuLmdsaXRjaC5jb20vYTRlMGE5ZmQtZWE3Yi00N2NmLWI1MmEtNDhmZDYzNTljNTU5JTJGc3RhcnMtNS5naWZcIiB4PVwiMFwiIHk9XCItNTBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjIwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgIGBcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93ICggeyBtb2RlOiBcImNsb3NlZFwiIH0gKVxyXG5cdFx0dGhpcy5zaGFkb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICR7dGhpcy5kZWZzfVxyXG4gICAgICBcdFx0XHQ8cGF0aCBkPVwiTS01MCAwIEMgJHt0aGlzLmN1cnJlbnRTdGF0ZVswXX0gJHt0aGlzLmN1cnJlbnRTdGF0ZVsxXX0sICR7dGhpcy5jdXJyZW50U3RhdGVbMl19ICR7dGhpcy5jdXJyZW50U3RhdGVbM119LCAyNTAgMFwiIGZpbHRlcj1cInVybCgjc2hhZG93KVwiIGZpbGw9XCJ1cmwoI3BpY3R1cmUpXCIgLz5cclxuICAgIFx0XHQ8L3N2Zz5cclxuICAgICAgICBgXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCJzdmdcIiApXHJcbiAgICAgICAgdGhpcy5wYXRoID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwicGF0aFwiIClcclxuICAgICAgICB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCBcInN0eWxlXCIgKVxyXG4gICAgICAgICkudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJhY2stY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN2ZyA+IHBhdGgge1xyXG4gICAgICAgICAgICAgICAgZmlsbDogdXJsKCNwaWN0dXJlKTtcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZ1bnktZm9udCk7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmNTA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSwgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDgwcHgpIHtcclxuICAgICAgICAgICAgICAgIHN2ZywgaDMge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgICAgIHRoaXMuc3ZnLm9ucG9pbnRlcmRvd24gPSB0aGlzLmNoYW5nZS5iaW5kICggdGhpcywgXCJob3ZlclN0YXRlXCIgKVxyXG4gICAgICAgIHRoaXMuc3ZnLm9ucG9pbnRlcnVwID0gdGhpcy5jaGFuZ2UuYmluZCAoIHRoaXMsIFwibm9ybWFsU3RhdGVcIiApXHJcbiAgICAgICAgdGhpcy5zdmcuYWRkRXZlbnRMaXN0ZW5lciAoIFwicG9pbnRlcmRvd25cIiwgdGhpcy5jaGFuZ2VTVkdzaXplIClcclxuICAgICAgICB0aGlzLnN2Zy5hZGRFdmVudExpc3RlbmVyICggXCJwb2ludGVydXBcIiwgZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXHJcbiAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9IClcclxuICAgICAgICB3aW5kb3cub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU1ZHc2l6ZSAoIGV2ZW50ICkge1xyXG4gICAgICAgIC8vIGV2ZW50LnRhcmdldC5zZXRQb2ludGVyQ2FwdHVyZSAoIGV2ZW50LnBvaW50ZXJJZCApXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiODB2aFwiXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcInZhcigtLWJhY2stdHJhbnNwYXJlbnQpXCJcclxuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCJcclxuICAgIH1cclxuICAgIGFuaW1hdGUgKCkge1xyXG4gICAgICAgIGxldCB4MSA9IHRoaXMuY3VycmVudFN0YXRlWzBdLFxyXG4gICAgICAgICAgICB5MSA9IHRoaXMuY3VycmVudFN0YXRlWzFdLFxyXG4gICAgICAgICAgICB4MiA9IHRoaXMuY3VycmVudFN0YXRlWzJdLFxyXG4gICAgICAgICAgICB5MiA9IHRoaXMuY3VycmVudFN0YXRlWzNdXHJcbiAgICAgICAgdGhpcy5zdmcuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAke3RoaXMuZGVmc31cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0tMTUwIDAgQyAke3gxfSAke3kxfSwgJHt4Mn0gJHt5Mn0sIDMwMCAwXCIgZmlsdGVyPVwidXJsKCNmMSlcIi8+XHJcbiAgICAgICAgICAgIDwhLS0gPGltYWdlIHhsaW5rOmhyZWY9XCJodHRwczovL3lva29lbnQuY29tL2ltYWdlcy9maW5nZXJwcmludC1wbmctZ3JlZW4tMy5wbmdcIiB3aWR0aD1cIjIwJVwiIGhlaWdodD1cIjIwJVwiIHg9XCI1MFwiIHk9XCIyMFwiIC8+IC0tPlxyXG4gICAgICAgIGBcclxuICAgICAgICB0aGlzLmNoYW5nZS5jYWxsICggdGhpcywgYXJndW1lbnRzWzBdIClcclxuICAgIH1cclxuICAgIGNoYW5nZSAoKSB7XHJcbiAgICAgICAgbGV0IGRpc3QgPSAwXHJcbiAgICAgICAgZm9yICggbGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmN1cnJlbnRTdGF0ZS5sZW5ndGg7IGluZGV4KysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcyBbIGFyZ3VtZW50c1swXSBdIFsgaW5kZXggXSAtIHRoaXMuY3VycmVudFN0YXRlIFsgaW5kZXggXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgWyBpbmRleCBdICs9IGRpc3RhbmNlIDwgMCA/IC0xIDogZGlzdGFuY2UgPiAwID8gMSA6IDBcclxuICAgICAgICAgICAgICAgIGRpc3QgKz0gTWF0aC5hYnMgKCBkaXN0YW5jZSApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggZGlzdCA9PT0gMCApIHtcclxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09IFwibm9ybWFsU3RhdGVcIiApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnLnN0eWxlLmhlaWdodCA9IFwiNTBweFwiXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN2Zy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ2YXIoLS1oZWFkZXItYmFjay1jb2xvcilcIlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdmcuc3R5bGUuYm94U2hhZG93ID0gXCI1cHggNXB4IDEwcHggIzAwMDAwMDcwXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnN2Zy5pbm5lckhUTUwgKz0gYDxpbWFnZSB4bGluazpocmVmPVwiaHR0cHM6Ly95b2tvZW50LmNvbS9pbWFnZXMvZmluZ2VycHJpbnQtcG5nLWdyZWVuLTMucG5nXCIgd2lkdGg9XCIyMCVcIiBoZWlnaHQ9XCIyMCVcIiB4PVwiNTBcIiB5PVwiMjBcIiAvPmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICggdGhpcy5hbmltYXRlLmJpbmQgKCB0aGlzLCBhcmd1bWVudHNbMF0gKSApXHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nICggXCJHcmFwaGljSGVhZGVyQ29tcG9uZW50IHdhcyBkaXNjb25uZWN0ZWQhXCIgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUgKFxyXG4gICAgXCJncmFwaGljLWhlYWRlclwiLFxyXG4gICAgR3JhcGhpY0hlYWRlclxyXG4pXHJcblxyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkIChcclxuLy8gICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCBcImdyYXBoaWMtaGVhZGVyXCIgKVxyXG4vLyApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaGljSGVhZGVyXHJcbiIsImNsYXNzIFNodXR0ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3cgKCB7IG1vZGU6XCJjbG9zZWRcIiB9IClcclxuICAgICAgICB0aGlzLnBvbHlnb25lcyA9IFtdXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJzdHlsZVwiIClcclxuICAgICAgICApXHJcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWd1cmUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDkwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodC1maWd1cmUge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTJweCAycHggNHB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGVmdC1maWd1cmUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBtb3ZpZS1sZWZ0IHtcclxuICAgICAgICAgICAgICAgIDAlICAgeyBsZWZ0OiAtMTAwJTsgfVxyXG4gICAgICAgICAgICAgICAgNDUlICB7IGxlZnQ6IDAlOyB9XHJcbiAgICAgICAgICAgICAgICA1NSUgIHsgbGVmdDogMCU7IH1cclxuICAgICAgICAgICAgICAgIDEwMCUgeyBsZWZ0OiAtMTAwJTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgbW92aWUtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgMCUgICB7IHJpZ2h0OiAtMTAwJTsgfVxyXG4gICAgICAgICAgICAgICAgNDUlICB7IHJpZ2h0OiAwJTsgfVxyXG4gICAgICAgICAgICAgICAgNTUlICB7IHJpZ2h0OiAwJTsgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7IHJpZ2h0OiAtMTAwJTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGxldCBtYWluID0gdGhpcy5jcmVhdGVFbGVtICggXCJtYWluXCIsIHRoaXMuc2hhZG93IClcclxuICAgICAgICB0aGlzLmNyZWF0ZVBvbHlnb25lcyggbWFpbiApXHJcbiAgICAgICAgdGhpcy5wb2x5Z29uZXMuZm9yRWFjaCAoXHJcbiAgICAgICAgICAgIGl0ZW0gPT4gaXRlbS5mb3JFYWNoIChcclxuICAgICAgICAgICAgICAgIGVsZW0gPT4gZWxlbS5zdHlsZSBbIFwiYW5pbWF0aW9uLW5hbWVcIiBdID0gZWxlbS5tb3ZpZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZ2V0U2VnbWVudEhlaWdodCAoIHRvdGFsSGVpZ2h0ICkge1xyXG4gICAgICAgIHJldHVybiB0b3RhbEhlaWdodCA+IDUwID9cclxuICAgICAgICAgICAgICAgIE1hdGgubWF4KCA1MCwgTWF0aC5taW4gKCAxNTAsIE1hdGgucmFuZG9tICgpICogdG90YWxIZWlnaHQgKSApIDpcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVpZ2h0XHJcbiAgICB9XHJcbiAgICBnZXRSYW5kb21Db2xvciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGByZ2JhKFxyXG4gICAgICAgICAgICAgICAgICAgICR7TWF0aC5yb3VuZCAoIE1hdGgucmFuZG9tKCkgKiAyMDAgKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgJHtNYXRoLnJvdW5kICggTWF0aC5yYW5kb20oKSAqIDIwMCApfSxcclxuICAgICAgICAgICAgICAgICAgICAke01hdGgucm91bmQgKCBNYXRoLnJhbmRvbSgpICogMjAwICl9LFxyXG4gICAgICAgICAgICAgICAgICAgIDAuOClgXHJcbiAgICB9XHJcbiAgICBjcmVhdGVFbGVtICggdGFnTmFtZSwgY29udGFpbmVyICkge1xyXG4gICAgICAgIHJldHVybiBjb250YWluZXIuYXBwZW5kQ2hpbGQgKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggdGFnTmFtZSApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlRmlndXJlICggY29udGFpbmVyLCBjbGFzc19uYW1lICkge1xyXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5jcmVhdGVFbGVtICggXCJmaWd1cmVcIiwgY29udGFpbmVyIClcclxuICAgICAgICBjbGFzc19uYW1lID8gZWxlbS5jbGFzc05hbWUgPSBjbGFzc19uYW1lIDogbnVsbFxyXG4gICAgICAgIHJldHVybiBlbGVtXHJcbiAgICB9XHJcbiAgICBjcmVhdGVQb2x5Z29uZXMgKCBjb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGxldCBudW0gPSBNYXRoLm1heCAoIDUsIE1hdGgucm91bmQgKCBNYXRoLnJhbmRvbSAoKSAqIDEwICkgKVxyXG4gICAgICAgIGxldCB0b3RhbEhlaWdodCA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5nZXRTZWdtZW50SGVpZ2h0ICggdG90YWxIZWlnaHQgKVxyXG4gICAgICAgICAgICBsZXQgc2VjdGlvbiA9IHRoaXMuY3JlYXRlRWxlbSAoIFwic2VjdGlvblwiLCBjb250YWluZXIgKVxyXG4gICAgICAgICAgICBzZWN0aW9uLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIlxyXG4gICAgICAgICAgICB0b3RhbEhlaWdodCAtPSBoZWlnaHRcclxuXHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IE1hdGgucm91bmQgKCBNYXRoLm1heCAoIDAuMywgTWF0aC5taW4gKCBNYXRoLnJhbmRvbSAoKSwgMC43ICkgKSAqIHNlY3Rpb24ub2Zmc2V0V2lkdGggKVxyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW0xID0gdGhpcy5jcmVhdGVGaWd1cmUgKCBzZWN0aW9uLCBcImxlZnQtZmlndXJlXCIgKVxyXG4gICAgICAgICAgICBsZXQgZWxlbTIgPSB0aGlzLmNyZWF0ZUZpZ3VyZSAoIHNlY3Rpb24sIFwicmlnaHQtZmlndXJlXCIgKVxyXG4gICAgICAgICAgICAvLyBlbGVtMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmdldFJhbmRvbUNvbG9yKClcclxuICAgICAgICAgICAgLy8gZWxlbTIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5nZXRSYW5kb21Db2xvcigpXHJcblxyXG4gICAgICAgICAgICBlbGVtMS5zdHlsZVsgXCJhbmltYXRpb24tZHVyYXRpb25cIiBdID1cclxuICAgICAgICAgICAgICAgIGVsZW0yLnN0eWxlWyBcImFuaW1hdGlvbi1kdXJhdGlvblwiIF0gPSBNYXRoLm1heCggMC41LCBNYXRoLnJhbmRvbSAoKSApICsgXCJzXCJcclxuXHJcbiAgICAgICAgICAgIGVsZW0xLm1vdmllID0gXCJtb3ZpZS1sZWZ0XCJcclxuICAgICAgICAgICAgZWxlbTIubW92aWUgPSBcIm1vdmllLXJpZ2h0XCJcclxuXHJcbiAgICAgICAgICAgIGVsZW0xLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCJcclxuICAgICAgICAgICAgZWxlbTIuc3R5bGUud2lkdGggPSBzZWN0aW9uLm9mZnNldFdpZHRoIC0gd2lkdGggKyBcInB4XCJcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9seWdvbmVzLnB1c2ggKCBbIGVsZW0xLCBlbGVtMiBdIClcclxuICAgICAgICB9IHdoaWxlICggdG90YWxIZWlnaHQgPiAwIClcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lICggXCJzaHV0dGVyLWVsZW1lbnRcIiwgU2h1dHRlciApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaHV0dGVyXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuY2xhc3MgQ29kZU91dHB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoKVxyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3cgKCB7IG1vZGU6IFwiY2xvc2VkXCIgfSApXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAqIHsgb3V0bGluZTogbm9uZTsgfVxyXG4gICAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA0cHggIzAwMDAwMDcwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNkZGU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOWIsICMwOWIsICMwOWIpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTWFsaSwgTW9udHNlcnJhdCwgQXJpYWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbi1ob3ZlciAwLjJzIGVhc2UgYWx0ZXJuYXRlIDI7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggIzAwMDAwMDUwO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDA1NTc3ZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgYnV0dG9uLWhvdmVyIHtcclxuICAgICAgICAgICAgICAgIDAlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwjMDliLCAjMDliKTsgfVxyXG4gICAgICAgICAgICAgICAyMCUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDEwJSAzMCUsICMwOWIpOyB9XHJcbiAgICAgICAgICAgICAgIDQwJSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICM1YmQgMzAlIDUwJSwgIzA5Yik7IH1cclxuICAgICAgICAgICAgICAgNjAlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzA5YiwgIzViZCA1MCUgNzAlLCAjMDliKTsgfVxyXG4gICAgICAgICAgICAgICA4MCUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjMDliLCAjNWJkIDcwJSA5MCUsICMwOWIpOyB9XHJcbiAgICAgICAgICAgICAgMTAwJSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwOWIsICMwOWIsICMwOWIpOyB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNzk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjUwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDxidXR0b24+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiYnV0dG9uXCIgKVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcInNlY3Rpb25cIiApXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkge1xyXG4gICAgICAgIHJldHVybiBbIFwic2NyaXB0XCIgXVxyXG4gICAgfVxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrICggYXR0ck5hbWUsIG9sZFZhbCwgbmV3VmFsICkge1xyXG4gICAgICAgIGZldGNoKCBgJHtjcmVhdGVQYXRoKFwibGVzc29uc1wiLCBuZXdWYWwgKX1gIClcclxuICAgICAgICAgICAgLnRoZW4gKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKVxyXG4gICAgICAgICAgICAudGhlbiAoIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLnJlcGxhY2UoL2RvY3VtZW50LmJvZHkvZywgXCJ0aGlzLnNlY3Rpb25cIilcclxuICAgICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLnJlcGxhY2UoL2RvY3VtZW50LmhlYWQvZywgXCJ0aGlzLnNlY3Rpb25cIilcclxuXHJcbiAgICAgICAgICAgICAgbGV0IHN0b3BIYW5kbGVyID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSBcIlN0YXJ0XCJcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5vbmNsaWNrID0gc3RhcnRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb24uc3RvcCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgICAgICAgfS5iaW5kICggdGhpcyApXHJcblxyXG4gICAgICAgICAgICAgIGxldCBzdGFydEhhbmRsZXIgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwic3RvcFwiXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQub25jbGljayA9IHN0b3BIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb24uc3RvcCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBldmFsICggcmVzcG9uc2UgKVxyXG4gICAgICAgICAgICAgIH0uYmluZCAoIHRoaXMgKVxyXG5cclxuICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5vbmNsaWNrID0gc3RhcnRIYW5kbGVyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSAoXHJcbiAgXCJjb2RlLW91dHB1dFwiLFxyXG4gIENvZGVPdXRwdXRcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZU91dHB1dFxyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3ItcmFpbmJvdy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9yLXJhaW5ib3cuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3ItcmFpbmJvdy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIndXNlIHN0cmljdCdcclxuXHJcbmNsYXNzIEdsaXRjaExvZ28gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKClcclxuICAgIGxldCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogXCJjbG9zZWRcIiB9IClcclxuICAgIGxldCBzdHlsZSA9IHNoYWRvdy5hcHBlbmRDaGlsZCAoXHJcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCBcInN0eWxlXCIgKVxyXG4gICAgKVxyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAubG9nby1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgICAvLyBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmZjtcclxuICAgICAgICAvLyBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDAwMDA4MDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tYm94IC5vdmVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tYm94IC5ub2lzZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBnbGl0Y2gtbm9pc2UgMXMgbGluZWFyIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubG9nby1ib3ggLmdsaXRjaCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LWZhbWlseTogXCJMdWNraWVzdCBHdXlcIiwgXCJQb3BwaW5zXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAubG9nby1ib3ggLmdsaXRjaDpiZWZvcmUsIC5sb2dvLWJveCAuZ2xpdGNoOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJKU1wiO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubG9nby1ib3ggLmdsaXRjaDpiZWZvcmUge1xyXG4gICAgICBsZWZ0OiAyLjVweDtcclxuICAgICAgdGV4dC1zaGFkb3c6IC0yLjVweCAwICNmNTA7XHJcbiAgICAgIGFuaW1hdGlvbjogZ2xpdGNoLWJlZm9yZSAycyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIH1cclxuICAgIC5sb2dvLWJveCAuZ2xpdGNoOmFmdGVyIHtcclxuICAgICAgbGVmdDogLTIuNXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogLTIuNXB4IDAgIzA5YjtcclxuICAgICAgYW5pbWF0aW9uOiBnbGl0Y2gtYWZ0ZXIgMnMgZWFzZSAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBnbGl0Y2gtYmVmb3JlIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LCAxMjVweCwgMTIwcHgsIDUwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDBweCwgMTI1cHgsIDU5cHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDMwcHgsIDIxMHB4LCA5MHB4LCAzMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAxNSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTVweCwgNDBweCwgNDhweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAyMCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTVweCwgNXB4LCA1MHB4LCAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAyNSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTdweCwgMTI1cHgsIDQ1cHgsIDUwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDMwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsIDEyNXB4LCAzMnB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDM1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgyMHB4LCAxMDBweCwgNDdweCwgNTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNDAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDMwcHgsIDgwcHgsIDI4cHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDQ1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxNnB4LCA1MHB4LCAzNHB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsIDEyNXB4LCAzN3B4LCAxMDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNTUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDEycHgsIDEwMHB4LCAyMXB4LCAzMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA2MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNDFweCwgMTI1cHgsIDU1cHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDY1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg1cHgsIDUwcHgsIDM5cHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNzAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDVweCwgMTIwcHgsIDI0cHgsIDQwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDc1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzMHB4LCAxMjVweCwgNTBweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgODAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDM3cHgsIDgwcHgsIDUwcHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgODUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDM3cHgsIDgwcHgsIDQ4cHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDkwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzMHB4LCA1MHB4LCA5MnB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDk1JSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxN3B4LCAxMjVweCwgOTJweCwgOTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsIDEyNXB4LCA0NXB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGdsaXRjaC1hZnRlciB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDEwcHgsIDUwcHgsIDM0cHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNHB4LCA3MHB4LCAyMnB4LCAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsIDUwcHgsIDE3cHgsIDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMTUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDdweCwgMTI1cHgsIDM0cHgsIDEwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDIwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgxMXB4LCAxMTVweCwgNDVweCwgMzBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMjUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDNweCwgMTI1cHgsIDE4cHgsIDcwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDMwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgzOHB4LCA1MHB4LCAxMDBweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMzUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDIwcHgsIDcwcHgsIDEyMHB4LCA1cHgpO1xyXG4gICAgICB9XHJcbiAgICAgIDQwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg1cHgsIDEyNXB4LCA0OHB4LCA5MHB4KTtcclxuICAgICAgfVxyXG4gICAgICA0NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTVweCwgNDBweCwgNDRweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMjFweCwgODBweCwgMzdweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNTUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDE0cHgsIDEyNXB4LCA0MHB4LCA0MHB4KTtcclxuICAgICAgfVxyXG4gICAgICA2MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTZweCwgNTBweCwgMzBweCwgOHB4KTtcclxuICAgICAgfVxyXG4gICAgICA2NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoNTBweCwgMTI1cHgsIDEyMHB4LCA1MHB4KTtcclxuICAgICAgfVxyXG4gICAgICA3MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTBweCwgNzBweCwgNDRweCwgNDBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNzUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDcwcHgsIDEwMHB4LCA0OXB4LCAzMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA4MCUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMTNweCwgMTIwcHgsIDEyMHB4LCA5MHB4KTtcclxuICAgICAgfVxyXG4gICAgICA4NSUge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMzVweCwgODBweCwgOTBweCwgMzBweCk7XHJcbiAgICAgIH1cclxuICAgICAgOTAlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDVweCwgODBweCwgMzVweCwgMjBweCk7XHJcbiAgICAgIH1cclxuICAgICAgOTUlIHtcclxuICAgICAgICBjbGlwOiByZWN0KDMwcHgsIDEyNXB4LCAxMjBweCwgMTBweCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgY2xpcDogcmVjdCg1MHB4LCA1MHB4LCAxMTBweCwgMHB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBnbGl0Y2gtbm9pc2Uge1xyXG4gICAgICAwJSB7IHRvcDogMzBweDsgbGVmdDogMjVweDsgd2lkdGg6IDEwcHg7IH1cclxuICAgICAgNSUgeyB0b3A6IDkwcHg7IGxlZnQ6IDExMHB4OyB3aWR0aDogMjBweDsgfVxyXG4gICAgICAxMCUgeyB0b3A6IDQwcHg7IGxlZnQ6IDUwcHg7IHdpZHRoOiA1cHg7IH1cclxuICAgICAgMTUlIHsgdG9wOiA5MHB4OyBsZWZ0OiAyMHB4OyB3aWR0aDogMjBweDsgfVxyXG4gICAgICAyMCUgeyB0b3A6IDUwcHg7IGxlZnQ6IDExMHB4OyB3aWR0aDogNXB4OyB9XHJcbiAgICAgIDI1JSB7IHRvcDogOTBweDsgbGVmdDogMzBweDsgd2lkdGg6IDIwcHg7IH1cclxuICAgICAgMzAlIHsgdG9wOiA5MHB4OyBsZWZ0OiAxMTBweDsgd2lkdGg6IDEwcHg7IH1cclxuICAgICAgMzUlIHsgdG9wOiA0MHB4OyBsZWZ0OiA1MHB4OyB3aWR0aDogNXB4OyB9XHJcbiAgICAgIDQwJSB7IHRvcDogOTBweDsgbGVmdDogNDBweDsgd2lkdGg6IDIwcHg7IH1cclxuICAgICAgNDUlIHsgdG9wOiA1MHB4OyBsZWZ0OiAxMTBweDsgd2lkdGg6IDVweDsgfVxyXG4gICAgICA1MCUgeyB0b3A6IDMwcHg7IGxlZnQ6IDUwcHg7IHdpZHRoOiAxMHB4OyB9XHJcbiAgICAgIDU1JSB7IHRvcDogNzBweDsgbGVmdDogMzBweDsgd2lkdGg6IDIwcHg7IH1cclxuICAgICAgNjAlIHsgdG9wOiA5MHB4OyBsZWZ0OiAxMTBweDsgd2lkdGg6IDVweDsgfVxyXG4gICAgICA2NSUgeyB0b3A6IDQwcHg7IGxlZnQ6IDExMHB4OyB3aWR0aDogMjBweDsgfVxyXG4gICAgICA3MCUgeyB0b3A6IDUwcHg7IGxlZnQ6IDUwcHg7ICB3aWR0aDogMTBweDsgfVxyXG4gICAgICA3NSUgeyB0b3A6IDkwcHg7IGxlZnQ6IDUwcHg7IHdpZHRoOiAyMHB4OyB9XHJcbiAgICAgIDgwJSB7IHRvcDogMzBweDsgbGVmdDogNzBweDsgd2lkdGg6IDVweDsgfVxyXG4gICAgICA4NSUgeyB0b3A6IDkwcHg7IGxlZnQ6IDgwcHg7IHdpZHRoOiAxMHB4OyB9XHJcbiAgICAgIDkwJSB7IHRvcDogNTBweDsgbGVmdDogNDBweDsgd2lkdGg6IDVweDsgfVxyXG4gICAgICA5NSUgeyB0b3A6IDQwcHg7IGxlZnQ6IDcwcHg7IHdpZHRoOiAyMHB4OyB9XHJcbiAgICAgIDEwMCUgeyB0b3A6IDMwcHg7IGxlZnQ6IDUwcHg7IHdpZHRoOiA1cHg7IH1cclxuICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgc2hhZG93LmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvLWJveFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3ZlclwiPkNsaWVudC1zaWRlPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZ2xpdGNoXCI+SlM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJub2lzZVwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUgKFxyXG4gIFwiZ2xpdGNoLWxvZ29cIixcclxuICBHbGl0Y2hMb2dvXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsaXRjaExvZ29cclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ3JpZC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ3JpZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dyaWQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jbGFzcyBNYWluTWVudUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KCB7IG1vZGU6IFwiY2xvc2VkXCIgfSApXHJcbiAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSAoIFwicGFnZS1lbGVtZW50XCIgKVswXVxyXG4gICAgdGhpcy5jb3Vyc2UgPSBjcmVhdGVQYXRoKCBcImxlc3NvbnNcIiwgXCJcIiApXHJcbiAgICB0aGlzLmFzc2V0cyA9IGNyZWF0ZVBhdGgoIFwic3JjXCIsIFwiXCIgKVxyXG4gICAgdGhpcy5tZW51T3B0aW9ucyA9IFtdXHJcbiAgICB0aGlzLnN1Ym1lbnVPcHRpb25zID0gW11cclxuICAgIHRoaXMuc3RhdGUgPSBcImNsb3NlXCJcclxuICB9XHJcbiAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgdGhpcy5zaGFkb3cuaW5uZXJIVE1MICs9IGBcclxuXHJcbiAgICAgIDxncmFwaGljLWhlYWRlcj48L2dyYXBoaWMtaGVhZGVyPlxyXG4gICAgICA8c3ZnLW5hdi1wYW5lbD48L3N2Zy1uYXYtcGFuZWw+XHJcbiAgICAgIDxhc2lkZT5cclxuICAgICAgICA8ZGl2IGlkPVwibWVudVRvZ2dsZVwiPlxyXG5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGlkPVwibWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1pY29uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwic2VhcmNoLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1yZXN1bHRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aDM+PGEgaHJlZj1cIi9cIiBjbGFzcz1cImhvbWVcIj5MZXNzb25zPC9hPjwvaDM+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICAgIGBcclxuICAgICAgdGhpcy5jaGVja2JveCA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCAnI21lbnVUb2dnbGUgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nIClcclxuICAgICAgdGhpcy5tZW51ID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiI21lbnVcIiApXHJcblxyXG4gICAgICB0aGlzLnNldFN0eWxlcygpXHJcbiAgICAgIHRoaXMuY2hlY2tib3gub25jbGljayA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPT09IFwiY2xvc2VcIiA/IFwiZXhwYW5kXCIgOiBcImNsb3NlXCJcclxuICAgICAgICB0aGlzLm1lbnUuc3R5bGVbXCJ0cmFuc2l0aW9uLWRlbGF5XCJdID0gdGhpcy5zdGF0ZSA9PT0gXCJleHBhbmRcIiA/IFwiMXNcIiA6IFwiMHNcIlxyXG4gICAgICAgIHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcInN2Zy1uYXYtcGFuZWxcIiApLmRpc3BhdGNoRXZlbnQgKCBuZXcgRXZlbnQgKCB0aGlzLnN0YXRlICkgKVxyXG4gICAgICB9LmJpbmQgKHRoaXMpXHJcblxyXG4gICAgICB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIuaG9tZVwiICkub25jbGljayA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gIXRoaXMuY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgIHRoaXMuY2hlY2tib3guZGlzcGF0Y2hFdmVudCAoIG5ldyBFdmVudCAoIFwiY2xpY2tcIiApICk7XHJcbiAgICAgICAgICAvLyBpZiAoIGxvY2F0aW9uLmhvc3QgPT09IFwianMtbGVzc29ucy5nbGl0Y2gubWVcIiApXHJcbiAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7IHJvdXRlOiBldmVudC50YXJnZXQuaHJlZiB9LCBcImhvbWVcIiwgZXZlbnQudGFyZ2V0LmhyZWYgKVxyXG4gICAgICAgICAgdGhpcy52aWV3LnNldEF0dHJpYnV0ZSAoIFwic3JjXCIsIGAke2NyZWF0ZVBhdGgoIFwibGVzc29uc1wiLCBcInN0YXJ0LXBhZ2UubWRcIiApfWAgKVxyXG4gICAgICB9LmJpbmQgKCB0aGlzIClcclxuXHJcbiAgICAgIHRoaXMuZ2V0RGF0YSAoKS50aGVuIChcclxuICAgICAgICAoKSA9PiB0aGlzLnNoYWRvdy5nZXRFbGVtZW50QnlJZCAoIFwic2VhcmNoLWlucHV0XCIgKVxyXG4gICAgICAgICAgICAub25pbnB1dCA9IHRoaXMuc2VhcmNoLmJpbmQgKCB0aGlzIClcclxuICAgICAgKVxyXG4gIH1cclxuICBzZWFyY2ggKCBldmVudCApIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2hhZG93LmdldEVsZW1lbnRCeUlkICggXCJzZWFyY2gtcmVzdWx0XCIgKVxyXG4gICAgICByZXN1bHQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICBpZiAoICFldmVudC50YXJnZXQudmFsdWUgKSB7XHJcbiAgICAgICAgICBmb3IgKCBsZXQgaXRlbSBvZiB0aGlzLm1lbnVPcHRpb25zICkgdGhpcy5zaG93ICggaXRlbSApXHJcbiAgICAgICAgICBmb3IgKCBsZXQgaXRlbSBvZiB0aGlzLnN1Ym1lbnVPcHRpb25zICkgdGhpcy5zaG93ICggaXRlbSApXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBsZXQgc3RyaW5ncyA9IHRoaXMua2V5d29yZHMuZ2V0QWxsICggZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkgKVxyXG4gICAgICBpZiAoIHN0cmluZ3MubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgICAgcmVzdWx0LmlubmVydGV4dCA9IFwiTm90IGZvdW5kLi4uXCJcclxuICAgICAgICAgIGZvciAoIGxldCBpdGVtIG9mIHRoaXMubWVudU9wdGlvbnMgKSB0aGlzLmhpZGUgKCBpdGVtIClcclxuICAgICAgICAgIGZvciAoIGxldCBpdGVtIG9mIHRoaXMuc3VibWVudU9wdGlvbnMgKSB0aGlzLmhpZGUgKCBpdGVtIClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBpdGVtcyA9IHN0cmluZ3MubWFwICggaXRlbSA9PiBKU09OLnBhcnNlKCBpdGVtICkgKVxyXG4gICAgICBmb3IgKCBsZXQgb3B0aW9uIG9mIHRoaXMubWVudU9wdGlvbnMgKSB7XHJcbiAgICAgICAgICBpdGVtcy5maW5kICggaXRlbSA9PiBvcHRpb24uZmlyc3RFbGVtZW50Q2hpbGQuaWQgPT09IGl0ZW0ubGVzc29uICkgP1xyXG4gICAgICAgICAgICAgICB0aGlzLnNob3cgKCBvcHRpb24gKSA6IHRoaXMuaGlkZSAoIG9wdGlvbiApXHJcbiAgICAgIH1cclxuICAgICAgZm9yICggbGV0IG9wdGlvbiBvZiB0aGlzLnN1Ym1lbnVPcHRpb25zICkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBvcHRpb24ucXVlcnlTZWxlY3RvciAoIFwiYVwiICkudGV4dENvbnRlbnRcclxuICAgICAgICAgIGl0ZW1zLmZpbmQgKCBpdGVtID0+IGNvbnRlbnQgPT09IGl0ZW0udG9waWMgKSA/XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93ICggb3B0aW9uICkgOiB0aGlzLmhpZGUgKCBvcHRpb24gKVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGFkZEVsZW0gKCB0YWdOYW1lLCBjb250YWluZXIgKSB7XHJcbiAgICAgIHJldHVybiBjb250YWluZXIuYXBwZW5kQ2hpbGQgKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggdGFnTmFtZSApIClcclxuICB9XHJcbiAgc2V0U3R5bGVzICgpIHtcclxuICAgIGZldGNoKCBgc3JjL21haW4tbWVudS5jc3NgIClcclxuICAgICAgLnRoZW4gKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgY3NzID0+IHRoaXMuc2hhZG93LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIilcclxuICAgICAgICAgICkudGV4dENvbnRlbnQgPSBjc3NcclxuICAgICAgICApXHJcbiAgfVxyXG4gIGhpZGUgKCBlbGVtICkge1xyXG4gICAgICBlbGVtLmRpc3BhdGNoRXZlbnQgKCBuZXcgRXZlbnQgKCBcImhpZGVcIiApIClcclxuICB9XHJcbiAgc2hvdyAoIGVsZW0gKSB7XHJcbiAgICAgIGVsZW0uZGlzcGF0Y2hFdmVudCAoIG5ldyBFdmVudCAoIFwic2hvd1wiICkgKVxyXG4gIH1cclxuICBoaWRlQ2FsbGJhY2sgKCBldmVudCApIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIH1cclxuICBzaG93Q2FsbGJhY2sgKCBldmVudCApIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICB9XHJcbiAgc2V0TGlzdGVuZXJzICggZWxlbSApIHtcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyICggXCJzaG93XCIsIHRoaXMuc2hvd0NhbGxiYWNrIClcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyICggXCJoaWRlXCIsIHRoaXMuaGlkZUNhbGxiYWNrIClcclxuICB9XHJcbiAgYXN5bmMgZ2V0RGF0YSAoKSB7XHJcbiAgICAgIHRoaXMubWVudURhdGEgPSBhd2FpdCAoIGF3YWl0IGZldGNoICggYHNyYy9tYWluLW1lbnUuanNvbmAgKSApLmpzb24oKVxyXG4gICAgICB0aGlzLmtleXdvcmRzID0gbmV3IEZvcm1EYXRhXHJcbiAgICAgIGNvbnN0IHRvcExldmVsID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiI21lbnVcIiApXHJcblxyXG4gICAgICBmb3IgKCBsZXQgbGVzc29uIG9mIHRoaXMubWVudURhdGEgKSB7XHJcbiAgICAgICAgICBsZXQgbGVzc29uSXRlbSA9IHRoaXMuYWRkRWxlbSAoIFwibGlcIiwgdG9wTGV2ZWwgKTtcclxuICAgICAgICAgIHRoaXMubWVudU9wdGlvbnMucHVzaCAoIGxlc3Nvbkl0ZW0gKTtcclxuICAgICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzICggbGVzc29uSXRlbSApO1xyXG4gICAgICAgICAgbGVzc29uSXRlbS5pbm5lckhUTUwgPSB0aGlzLmdldExlc3NvblRlbXBsYXRlICggbGVzc29uLmlkICk7XHJcbiAgICAgICAgICBsZXNzb25JdGVtLnN1YkxldmVsID0gbGVzc29uSXRlbS5xdWVyeVNlbGVjdG9yICggXCJ1bC5zdWItbGV2ZWxcIiApO1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgIGZvciAoIGxldCBpdGVtIG9mIGxlc3Nvbi5pdGVtcyApIHtcclxuICAgICAgICAgICAgICBsZXQgZWxlbSA9IHRoaXMuYWRkRWxlbSAoIFwibGlcIiwgbGVzc29uSXRlbS5zdWJMZXZlbCApO1xyXG4gICAgICAgICAgICAgIHRoaXMuc3VibWVudU9wdGlvbnMucHVzaCAoIGVsZW0gKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldExpc3RlbmVycyAoIGVsZW0gKTtcclxuICAgICAgICAgICAgICBlbGVtLnN0eWxlW1wiYW5pbWF0aW9uLWRlbGF5XCJdID0gaW5kZXgrKyA8IDEwID8gYDAuJHtpbmRleH1zYCA6IGAxLiR7aW5kZXggLSA5fXNgO1xyXG4gICAgICAgICAgICAgIGxldCBhbmNob3IgPSB0aGlzLmFkZEVsZW0gKCBcImFcIiwgZWxlbSApO1xyXG4gICAgICAgICAgICAgIGFuY2hvci5ocmVmID0gaXRlbS5yZWY7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBhbmNob3IuaHJlZiApO1xyXG4gICAgICAgICAgICAgIGFuY2hvci50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICAgICAgYW5jaG9yLmZpbGVOYW1lID0gaXRlbS5yZWY7XHJcblxyXG4gICAgICAgICAgICAgIGFuY2hvci5vbmNsaWNrID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gIXRoaXMuY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveC5kaXNwYXRjaEV2ZW50ICggbmV3IEV2ZW50ICggXCJjbGlja1wiICkgKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCBsb2NhdGlvbi5ob3N0ID09PSBcImpzLWxlc3NvbnMuZ2xpdGNoLm1lXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7IHJvdXRlOiBldmVudC50YXJnZXQuaHJlZiB9LCBldmVudC50YXJnZXQuaW5uZXJUZXh0LCBldmVudC50YXJnZXQuaHJlZiApO1xyXG4gICAgICAgICAgICAgICAgICBlbHNlIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSggeyByb3V0ZTogYCMke2V2ZW50LnRhcmdldC5maWxlTmFtZX1gIH0sIGV2ZW50LnRhcmdldC5pbm5lclRleHQsIGAjJHtldmVudC50YXJnZXQuZmlsZU5hbWV9YCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IHNodXR0ZXIgPSB0aGlzLmFkZEVsZW0gKCBcInNodXR0ZXItZWxlbWVudFwiLCBkb2N1bWVudC5ib2R5ICk7XHJcbiAgICAgICAgICAgICAgICAgIHNodXR0ZXIuc3R5bGUgPSBgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7YDtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCAoICgpID0+IHNodXR0ZXIucmVtb3ZlKCksIDEwMDAgKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEF0dHJpYnV0ZSAoIFwic3JjXCIsICBgJHtjcmVhdGVQYXRoKCBcImxlc3NvbnNcIiwgZXZlbnQudGFyZ2V0LmZpbGVOYW1lICsgXCIubWRcIiApfWAgKTtcclxuICAgICAgICAgICAgICB9LmJpbmQgKCB0aGlzIClcclxuXHJcbiAgICAgICAgICAgICAgZm9yICggbGV0IGtleXdvcmQgb2YgaXRlbS5rZXl3b3JkcyApXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMua2V5d29yZHMuYXBwZW5kIChcclxuICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlc3NvbjogbGVzc29uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5yZWZcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICBnZXRMZXNzb25UZW1wbGF0ZSAoIGxlc3NvbklkICkge1xyXG4gICAgICByZXR1cm4gYDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIiR7bGVzc29uSWR9XCIgbmFtZT1cImxlc3NvbnNcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiJHtsZXNzb25JZH1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImljb25cIj48L2Rpdj5cclxuICAgICAgICAgIDxiPiR7bGVzc29uSWR9PC9iPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwic3ViLWxldmVsXCI+PC91bD5gXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXHJcbiAgXCJtYWluLW1lbnUtY29tcG9uZW50XCIsXHJcbiAgTWFpbk1lbnVDb21wb25lbnRcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk1lbnVDb21wb25lbnRcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jbGFzcyBNZW51Q29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3cgKHsgbW9kZTogXCJvcGVuXCIgfSlcclxuICAgICAgdGhpcy5zaGFkb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUx1Y2tpZXN0K0d1eXxQb3BwaW5zfFJvYm90b3xNb250c2VycmF0fCZhbXA7ZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInNyYy9tZW51LmNzc1wiPlxyXG4gICAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgIDx1bCBpZD1cIm1haW4tbmF2XCIgY2xhc3M9XCJkcm9wZG93blwiPjwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIHRoaXMubWVudUNvbnRlbnQgPSB0aGlzLnNoYWRvdy5nZXRFbGVtZW50QnlJZChcIm1haW4tbmF2XCIpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsgJ29wdGlvbnMnXVxyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayggYXR0ck5hbWUsIG9sZFZhbCwgbmV3VmFsICkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIuZHJvcGRvd25cIiApXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBpZiAoICFuZXdWYWwgKSByZXR1cm5cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlICggdGhpcy5nZXRBdHRyaWJ1dGUgKCBcIm9wdGlvbnNcIiApIClcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSAoIFwib3B0aW9uc1wiLCBcIlwiIClcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCAoXHJcbiAgICAgICAgICAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIFwibGlcIiApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgbGkuc3R5bGVbXCJhbmltYXRpb24tZGVsYXlcIl0gPSBpbmRleCA8IDEwID8gYDAuJHtpbmRleH1zYCA6IGAxLiR7aW5kZXgtOX1zYFxyXG4gICAgICAgICAgICBsaS5jbGFzc05hbWUgPSBgb3B0aW9uJHtvcHRpb24ubGV2ZWx9YFxyXG4gICAgICAgICAgICBsZXQgcmVmID0gbGkuYXBwZW5kQ2hpbGQgKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJhXCIgKSApXHJcbiAgICAgICAgICAgIHJlZi5pbm5lckhUTUwgPSBvcHRpb24udGV4dFxyXG4gICAgICAgICAgICByZWYuaHJlZiA9IGAjJHtlbmNvZGVVUkkgKCBvcHRpb24udGV4dCApfWBcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNZW51Q29tcG9uZW50LnByb3RvdHlwZS5zdHlsZUNvbnRlbnQgPSBgXHJcbi8vXHJcbi8vIGBcclxuTWVudUNvbXBvbmVudC5wcm90b3R5cGUudGVtcGxhdGUgPSBgXHJcbjxuYXYgaWQ9XCJuYXZcIiBjbGFzcz1cIm1haW4tbmF2XCI+XHJcblxyXG4gIDxsaT5cclxuXHJcblx0ICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duXCI+PC91bD5cclxuXHJcbiAgPC9saT5cclxuPC9uYXY+XHJcbmBcclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcclxuICBcIm1lbnUtY29tcG9uZW50XCIsXHJcbiAgTWVudUNvbXBvbmVudFxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Q29tcG9uZW50XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vaXNlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2lzZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vaXNlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5mcmFnbWVudHMgPSB7fTtcclxuICAgIHRoaXMucGFnZUNvbnRlbnQgPSBcIlwiO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudExpc3QgPSBbXTtcclxuICAgIHRoaXMubWFpbiA9IHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIikpO1xyXG4gICAgbGV0IGZvb3RlciA9IHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKSk7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MICs9IGBcclxuICAgIDxicj48YnI+PGJyPjxicj48YnI+PGJyPlxyXG4gICAgPGZpZ3VyZSBjbGFzcz1cIm92ZXJzaGFkb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm92ZXJzaGFkb3dfX3NoYWRvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyc2hhZG93X190ZXh0XCI+Jm5ic3A7PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9maWd1cmU+YDtcclxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibWVudS1jb21wb25lbnRcIilbMF07XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHJcbiAgICAvLyBsZXQgcGF0aCA9IGxvY2F0aW9uLmhvc3QgPT09IFwiZ2FyZXZuYS5naXRodWIuaW9cIiA/IFwiL2pzLWxlc3NvbnMvXCIgOiBcIi9cIjtcclxuXHJcbiAgICBsZXQgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCBcIi9qcy1sZXNzb25zXCIgKS5qb2luIChcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nICggXCJQQVRIOiBcIiwgcGF0aCApO1xyXG4gICAgbGV0IHN0YXJ0UGF0aCA9IGAke2NyZWF0ZVBhdGgoXCJsZXNzb25zXCIsIHBhdGggPT09IFwiL1wiID8gXCJzdGFydC1wYWdlXCIgOiBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxKSl9Lm1kYDtcclxuICAgIC8vIGxldCBzdGFydFBhdGggPSBgJHtjcmVhdGVQYXRoKFwibGVzc29uc1wiLCBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgPyBcInN0YXJ0LXBhZ2VcIiA6IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpKX1gO1xyXG4gICAgY29uc29sZS5sb2cgKCBcIlBhdGggdG8gZmlsZTogXCIsIHN0YXJ0UGF0aCApO1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3RhcnRQYXRoKTtcclxuICAgIHRoaXMuc3R5bGVTaGVldCA9IHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpKTtcclxuICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgZmV0Y2goY3JlYXRlUGF0aChcInNyY1wiLCBcImZvci1yYWluYm93LmNzc1wiKSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpLFxyXG4gICAgICBmZXRjaChjcmVhdGVQYXRoKFwic3JjXCIsIFwicGFnZS5jc3NcIikpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKSxcclxuICAgICAgZmV0Y2goY3JlYXRlUGF0aChcInNyY1wiLCBcImljb25zLmNzc1wiKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXSlcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHRoaXMuc3R5bGVTaGVldC50ZXh0Q29udGVudCArPSByZXNwb25zZS5qb2luKFN0cmluZy5mcm9tQ2hhckNvZGUoMTApKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ3NyYyddO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJOYW1lLCBvbGRWYWwsIG5ld1ZhbCkge1xyXG4gICAgdGhpcy5mcmFnbWVudHMgPSB7fTtcclxuICAgIHRoaXMucGFnZUNvbnRlbnQgPSBcIlwiO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudExpc3QgPSBbXTtcclxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy5tZW51LnNldEF0dHJpYnV0ZShcIm9wdGlvbnNcIiwgXCJcIik7XHJcbiAgICB0aGlzLmdldERhdGEobmV3VmFsKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoZmlsZSkge1xyXG4gICAgZmV0Y2goZmlsZSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkudGhlbihyZXNwb25zZSA9PiB0aGlzLnBhcnNlUGFnZUNvbnRlbnQocmVzcG9uc2UpKSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVRleHRGcmFnbWVudCh0ZXh0RnJhZ21lbnQpIHtcclxuICAgIGxldCBsaW5lcyA9IHRleHRGcmFnbWVudC5sZW5ndGggPyB0ZXh0RnJhZ21lbnQuc3BsaXQoXCJcXG5cIikgOiBbXTtcclxuICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiBsaW5lLmxlbmd0aCA/IHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLnBhcnNlTGluZShsaW5lKSkgOiBudWxsKTtcclxuICB9XHJcblxyXG4gIHBhcnNlUGFnZUNvbnRlbnQocGFnZUNvbnRlbnQpIHtcclxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudCA9IHBhZ2VDb250ZW50O1xyXG4gICAgdGhpcy5wYXJzZVRhYmxlcygpO1xyXG4gICAgdGhpcy5yZWdFeHBycy5wYWdlQ29udGVudCA9IHRoaXMucGFnZUNvbnRlbnQ7XHJcbiAgICB0aGlzLmZyYWdtZW50cyA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IGZyYWdtZW50IG9mIHRoaXMucmVnRXhwcnMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmZyYWdtZW50cywgZnJhZ21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnZUNvbnRlbnQgPSB0aGlzLmZyYWdtZW50cy5wYWdlQ29udGVudDtcclxuICAgIGRlbGV0ZSB0aGlzLmZyYWdtZW50cy5wYWdlQ29udGVudDtcclxuICAgIGxldCBpbnNlcnRpb25Qb2ludHMgPSB0aGlzLnBhZ2VDb250ZW50Lm1hdGNoKC8hISEuW14hISFdKyEhIS9nKTtcclxuICAgICFpbnNlcnRpb25Qb2ludHMgPyBudWxsIDogaW5zZXJ0aW9uUG9pbnRzLmZvckVhY2goaW5zZXJ0aW9uUG9pbnQgPT4ge1xyXG4gICAgICBsZXQgdG1wID0gdGhpcy5wYWdlQ29udGVudC5zcGxpdChpbnNlcnRpb25Qb2ludCk7XHJcbiAgICAgIGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQuc2xpY2UoMywgLTMpO1xyXG5cclxuICAgICAgd2hpbGUgKHRtcC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbGV0IGZyYWdtZW50ID0gdG1wLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5wYXJzZVRleHRGcmFnbWVudChmcmFnbWVudCk7XHJcbiAgICAgICAgdGhpc1tgY3JlYXRlJHt0aGlzLmZyYWdtZW50c1tpbnNlcnRpb25Qb2ludF0udHlwZX1gXSh0aGlzLmZyYWdtZW50c1tpbnNlcnRpb25Qb2ludF0uY29udGVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFnZUNvbnRlbnQgPSB0bXAuam9pbihcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wYWdlQ29udGVudC5sZW5ndGggPyB0aGlzLnBhcnNlVGV4dEZyYWdtZW50KHRoaXMucGFnZUNvbnRlbnQpIDogbnVsbDtcclxuICAgIHRoaXMubWVudS5zZXRBdHRyaWJ1dGUoXCJvcHRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucGFnZUNvbnRlbnRMaXN0KSk7XHJcbiAgICB0aGlzLnBhZ2VDb250ZW50ID0gdGhpcy5jcmVhdGVUYWJsZXModGhpcy5wYWdlQ29udGVudCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicGFnZS1lbGVtZW50XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIiwgXCJwcmVcIilcclxuICAgICAgICAuZm9yRWFjaChlbGVtID0+IGVsZW0uaW5uZXJIVE1MLnRyaW0oKSA/IHRoaXMuaW5zZXJ0VGFibGUoZWxlbSkgOiBlbGVtLnJlbW92ZSgpKTtcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIGxldmVsXHJcblxyXG4gIGluc2VydFRhYmxlKGVsZW0pIHtcclxuICAgIGxldCBjb250ID0gZWxlbS5pbm5lckhUTUwubWF0Y2goL1xcW3szfVxcZFxcXXszfS8pO1xyXG4gICAgaWYgKCFjb250KSByZXR1cm47XHJcbiAgICBlbGVtLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFibGUoY29udFswXS5zbGljZSgzLCAtMykpKTtcclxuICB9XHJcblxyXG4gIHBhcnNlVGFibGVzKCkge1xyXG4gICAgbGV0IHRvdGFsID0gdGhpcy5wYWdlQ29udGVudC5zcGxpdChcIlxcblwiKTtcclxuICAgIHRoaXMudGFibGVzID0gW107XHJcbiAgICBsZXQgdGFibGUsIHN0cmluZywgeDtcclxuXHJcbiAgICBjb25zdCBzdGFydFRhYmxlID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICB0aGlzLnBhZ2VDb250ZW50ID0gdGhpcy5wYWdlQ29udGVudC5zcGxpdChzdHJpbmcpLmpvaW4oYFtbWyR7dGhpcy50YWJsZXMubGVuZ3RofV1dXWApO1xyXG4gICAgICB0aGlzLnRhYmxlcy5wdXNoKFtdKTtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVzW3RoaXMudGFibGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGNvbnN0IGZpbGxUYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3RyaW5nID0gdG90YWwuc2hpZnQoKTtcclxuICAgICAgeCA9IHN0cmluZy5tYXRjaCgvKF5cXHwpKC4pKlxcfC9nbSk7XHJcbiAgICAgIHggPyB0YWJsZSA9IHN0YXJ0VGFibGUoc3RyaW5nKSA6IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAoeCkge1xyXG4gICAgICAgIHRhYmxlLnB1c2goeFswXS5zbGljZSgxLC0xKSk7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGVudCA9IHRoaXMucGFnZUNvbnRlbnQuc3BsaXQoc3RyaW5nKS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHN0cmluZyA9IHRvdGFsLnNoaWZ0KCk7XHJcbiAgICAgICAgeCA9IHN0cmluZy5tYXRjaCgvKF5cXHwpKC4pKlxcfC8pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b3RhbC5sZW5ndGggPyBmaWxsVGFibGUodG90YWwpIDogbnVsbDtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBmaWxsVGFibGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhYmxlcyhjb250ZW50KSB7XHJcbiAgICBsZXQgdGFibGVzID0gdGhpcy5wYWdlQ29udGVudC5tYXRjaCgvXFxbezN9XFxkXFxdezN9L2dtKTtcclxuICAgIGlmICghdGFibGVzKSByZXR1cm47XHJcbiAgICB0YWJsZXMuZm9yRWFjaChpdGVtID0+IHRoaXMucGFnZUNvbnRlbnQuc3BsaXQoaXRlbSkuam9pbih0aGlzLmNyZWF0ZVRhYmxlKHBhcnNlSW50KGl0ZW0uc2xpY2UoMywgLTMpKSkuaW5uZXJIVE1MKSk7IC8vIHJldHVybiBjb250ZW50XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUYWJsZShudW0pIHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCByb3cgb2YgdGhpcy50YWJsZXNbbnVtXSkge1xyXG4gICAgICBsZXQgdHIgPSB0YWJsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xyXG4gICAgICByb3cuc3BsaXQoXCJ8XCIpLmZvckVhY2goY2VsbCA9PiB0ci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpLmlubmVySFRNTCA9IHRoaXMucGFyc2VMaW5lKGNlbGwudHJpbSgpKS5vdXRlckhUTUwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNsaWRlcihmcmFnbWVudCkge1xyXG4gICAgbGV0IHNsaWRlclN0YXJ0ID0gdGhpcy5tYWluLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpO1xyXG4gICAgc2xpZGVyU3RhcnQuY2xhc3NOYW1lID0gXCJzbGlkZXItYnV0dG9uXCI7XHJcblxyXG4gICAgc2xpZGVyU3RhcnQub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5tYWluLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUtc2xpZGVyJykpO1xyXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInBpY3R1cmVzXCIsIEpTT04uc3RyaW5naWZ5KGZyYWdtZW50LnNsaWNlKDMsIC0xKS5zcGxpdChcIixcIikpKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvZGVDb21wb25lbnQoZnJhZ21lbnQpIHtcclxuICAgIGxldCBsYW5nID0gZnJhZ21lbnQuc2xpY2UoNCwgZnJhZ21lbnQuc2VhcmNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMTApKSk7XHJcbiAgICBsZXQgc25pcHBldCA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZS1zbmlwcGV0XCIpKTtcclxuICAgIHNuaXBwZXQudGV4dENvbnRlbnQgPSBmcmFnbWVudC5zbGljZSg0ICsgbGFuZy5sZW5ndGgsIGZyYWdtZW50Lmxlbmd0aCAtIDQpO1xyXG4gICAgc25pcHBldC5zZXRBdHRyaWJ1dGUoXCJoZWFkZXJcIiwgbGFuZyk7XHJcbiAgICBzbmlwcGV0LnNldEF0dHJpYnV0ZShcImxhbmdcIiwgbGFuZyk7XHJcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoc25pcHBldCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTY3JpcHRTcG9pbGVyKGZyYWdtZW50KSB7XHJcbiAgICBsZXQgbGFuZyA9IGZyYWdtZW50LnNsaWNlKDQsIGZyYWdtZW50LnNlYXJjaChTdHJpbmcuZnJvbUNoYXJDb2RlKDEwKSkpO1xyXG4gICAgbGV0IHNjcmlwdFNwb2lsZXIgPSB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdC1zcG9pbGVyXCIpKTtcclxuICAgIGxldCBzY3JpcHRTcG9pbGVyQ29udGVudCA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChsYW5nLnRyaW0oKSA9PT0gXCJjb25zb2xlXCIgPyB0aGlzLmNyZWF0ZUNvbnNvbGVPdXRwdXQoZnJhZ21lbnQuc2xpY2UoMSwgLTEpKSA6IHRoaXMuY3JlYXRlQ29kZVNuaXBwZXQoZnJhZ21lbnQuc2xpY2UoNCArIGxhbmcubGVuZ3RoLCBmcmFnbWVudC5sZW5ndGggLSA0KSwgbGFuZykpO1xyXG4gICAgc2NyaXB0U3BvaWxlci5zZXRBdHRyaWJ1dGUoXCJoZWFkZXJcIiwgbGFuZyk7XHJcbiAgICBzY3JpcHRTcG9pbGVyLmNvbnRlbnQgPSBzY3JpcHRTcG9pbGVyQ29udGVudDtcclxuICAgIHNjcmlwdFNwb2lsZXIuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCBcInJlYWR5XCIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2NyaXB0U25pcHBldChmcmFnbWVudCkge1xyXG4gICAgbGV0IGxhbmcgPSBmcmFnbWVudC5zbGljZSgzLCBmcmFnbWVudC5zZWFyY2goU3RyaW5nLmZyb21DaGFyQ29kZSgxMCkpKTtcclxuICAgIHJldHVybiB0aGlzLm1haW4uYXBwZW5kQ2hpbGQobGFuZy50cmltKCkgPT09IFwiY29uc29sZVwiID8gdGhpcy5jcmVhdGVDb25zb2xlT3V0cHV0KGZyYWdtZW50KSA6IHRoaXMuY3JlYXRlQ29kZVNuaXBwZXQoZnJhZ21lbnQuc2xpY2UoMyArIGxhbmcubGVuZ3RoLCBmcmFnbWVudC5sZW5ndGggLSAzKSwgbGFuZykpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29uc29sZU91dHB1dChmcmFnbWVudCkge1xyXG4gICAgbGV0IHNuaXBwZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xyXG4gICAgc25pcHBldC50ZXh0Q29udGVudCA9IGZyYWdtZW50LnNsaWNlKDEwLCBmcmFnbWVudC5sZW5ndGggLSAzKTtcclxuICAgIHNuaXBwZXQuY2xhc3NOYW1lID0gXCJibGFja1wiO1xyXG4gICAgcmV0dXJuIHNuaXBwZXQ7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb2RlU25pcHBldChmcmFnbWVudCwgbGFuZykge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGA8cHJlPjxjb2RlIGRhdGEtbGFuZ3VhZ2U9JHtsYW5nfT4ke2ZyYWdtZW50LnRyaW0oKX08L2NvZGU+PC9wcmU+YDtcclxuICAgIFJhaW5ib3cuY29sb3IoZGl2KTtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByZWxvYWRlclwiKSkuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvZGVPdXRwdXQoZnJhZ21lbnQpIHtcclxuICAgIGxldCBvdXRwdXRTY3JlZW4gPSB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGUtb3V0cHV0XCIpKTtcclxuICAgIG91dHB1dFNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJzY3JpcHRcIiwgZnJhZ21lbnQuc2xpY2UoMywgLTMpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNwb2lsZXIoZnJhZ21lbnQpIHtcclxuICAgIGxldCBzcG9pbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwb2lsZXItY29tcG9uZW50XCIpO1xyXG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHNwb2lsZXIpO1xyXG4gICAgbGV0IGhlYWQgPSBmcmFnbWVudC5tYXRjaCgvKFxcXnszfSlcXFsoLispXFxdLylbMF07XHJcbiAgICBzcG9pbGVyLnNldEF0dHJpYnV0ZShcImhlYWRlclwiLCBoZWFkLnNsaWNlKDQsIC0xKSk7XHJcbiAgICBzcG9pbGVyLmNvbnRlbnQgPSBbXTtcclxuXHJcbiAgICBjb25zdCBnZXRTbmlwcGV0ID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICByZXR1cm4gc3RyaW5nLmluZGV4T2YoXCIhISFcIikgPCAwID8gbnVsbCA6IHRoaXMuZnJhZ21lbnRzW3N0cmluZy5zbGljZSgzLCAtMyldO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGNvbnN0IGdldENvZGVTbmlwcGV0ID0gZnVuY3Rpb24gKHNuaXBwZXQpIHtcclxuICAgICAgaWYgKHNuaXBwZXQudHlwZSAhPT0gXCJTY3JpcHRTbmlwcGV0XCIpIHJldHVybiBudWxsO1xyXG4gICAgICBsZXQgbGFuZyA9IHNuaXBwZXQuY29udGVudC5zbGljZSgzLCBzbmlwcGV0LmNvbnRlbnQuc2VhcmNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMTApKSk7XHJcbiAgICAgIGxldCBzY3JpcHRTbmlwcGV0Q29udGVudCA9IHRoaXMubWFpbi5hcHBlbmRDaGlsZChsYW5nLnRyaW0oKSA9PT0gXCJjb25zb2xlXCIgPyB0aGlzLmNyZWF0ZUNvbnNvbGVPdXRwdXQoc25pcHBldC5jb250ZW50LnNsaWNlKDEsIC0xKSkgOiB0aGlzLmNyZWF0ZUNvZGVTbmlwcGV0KHNuaXBwZXQuY29udGVudC5zbGljZSgzICsgbGFuZy5sZW5ndGgsIHNuaXBwZXQuY29udGVudC5sZW5ndGggLSAzKSwgbGFuZykpO1xyXG4gICAgICBzcG9pbGVyLmNvbnRlbnQucHVzaChzY3JpcHRTbmlwcGV0Q29udGVudCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGNvbnN0IGdldFRhYmxlID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICBpZiAoIXN0cmluZy5tYXRjaCgvXFxbezN9XFxkXFxdezN9LykpIHJldHVybiBudWxsO1xyXG4gICAgICBzcG9pbGVyLmNvbnRlbnQucHVzaCh0aGlzLmNyZWF0ZVRhYmxlKHBhcnNlSW50KHN0cmluZy50cmltKCkuc2xpY2UoMywgLTMpKSkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBmcmFnbWVudC5zcGxpdChoZWFkKS5qb2luKFwiXCIpLnNsaWNlKDAsIC0zKS5zcGxpdCgnXFxuJykuZm9yRWFjaChsaW5lID0+IGdldFNuaXBwZXQobGluZSkgPyBnZXRDb2RlU25pcHBldChnZXRTbmlwcGV0KGxpbmUpKSA6IGdldFRhYmxlKGxpbmUpID8gbnVsbCA6IHNwb2lsZXIuY29udGVudC5wdXNoKHRoaXMucGFyc2VMaW5lKGxpbmUpKSk7XHJcbiAgICBzcG9pbGVyLnNldEF0dHJpYnV0ZShcInJlYWR5XCIsIFwiMVwiKTtcclxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTGluZSBsZXZlbCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICBwYXJzZUltYWdlKGxpbmUpIHtcclxuICAgIGxldCBzdHJpbmcgPSBsaW5lLm1hdGNoKC8hXFxbXFxdXFwoLitcXCkvKTtcclxuICAgIGxldCB1cmwgPSBzdHJpbmcgPyBsaW5lLm1hdGNoKC8hXFxbXFxdXFwoLitcXCkvKVswXS5zbGljZSg0LCAtMSkgOiBudWxsO1xyXG4gICAgaWYgKCF1cmwpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZWxlbS5zcmMgPSB1cmwuaW5kZXhPZihcImh0dHBcIikgPT09IDAgPyB1cmwgOiBldmFsKHVybCk7XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIHBhcnNlSGVhZGVyKGxpbmUpIHtcclxuICAgIGxldCBoZWFkZXJMZXZlbCA9IGxpbmUubWF0Y2goL15bI117MSw2fS8pO1xyXG4gICAgaWYgKCFoZWFkZXJMZXZlbCkgcmV0dXJuIHtcclxuICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgIHRleHQ6IGxpbmVcclxuICAgIH07XHJcbiAgICBsZXQgdGV4dCA9IGxpbmUuc2xpY2UoaGVhZGVyTGV2ZWxbMF0ubGVuZ3RoKTtcclxuICAgIGxldCBpY29ucyA9IHRleHQubWF0Y2goLyFcXFsuW15cXF1dK1xcXS9nKTtcclxuICAgIGljb25zID8gaWNvbnMuZm9yRWFjaChpY29uID0+IHRleHQgPSB0ZXh0LnNwbGl0KGljb24pLmpvaW4oXCJcIikpIDogbnVsbDtcclxuICAgIGxldCByZWZzID0gdGV4dC5tYXRjaCgvXFxbLlteKF0rXFxdXFwoLlteXFwpXStcXCkvZyk7XHJcbiAgICByZWZzID8gcmVmcy5mb3JFYWNoKHJlZiA9PiB7XHJcbiAgICAgIGxldCBjb250ZW50ID0gcmVmLnNwbGl0KFwiXShcIilbMF0uc2xpY2UoMSk7XHJcbiAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KHJlZikuam9pbihjb250ZW50KTtcclxuICAgIH0pIDogbnVsbDtcclxuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSkubmFtZSA9IGVuY29kZVVSSSh0ZXh0LnRyaW0oKSk7XHJcbiAgICB0aGlzLnBhZ2VDb250ZW50TGlzdC5wdXNoKHtcclxuICAgICAgbGV2ZWw6IGhlYWRlckxldmVsWzBdLmxlbmd0aCxcclxuICAgICAgdGV4dDogdGV4dC50cmltKClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGV2ZWw6IGhlYWRlckxldmVsWzBdLmxlbmd0aCxcclxuICAgICAgdGV4dDogbGluZSA9IGxpbmUuc3BsaXQoaGVhZGVyTGV2ZWxbMF0pLmpvaW4oXCJcIilcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwYXJzZUxpbmUobGluZSkge1xyXG4gICAgaWYgKGxpbmUubWF0Y2goL1stX117Myw1MDAwfS8pKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgbGV0IGltZyA9IHRoaXMucGFyc2VJbWFnZShsaW5lKTtcclxuICAgIGlmIChpbWcpIHJldHVybiBpbWc7XHJcbiAgICBsZXQge1xyXG4gICAgICBsZXZlbCxcclxuICAgICAgdGV4dFxyXG4gICAgfSA9IHRoaXMucGFyc2VIZWFkZXIobGluZSk7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobGV2ZWwgPiAwID8gYGgke2xldmVsfWAgOiBcImRpdlwiKTtcclxuICAgIGVsZW0uaW5uZXJIVE1MID0gdGhpcy5wYXJzZUFuY2hvcnModGV4dCk7XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIHBhcnNlSWNvbnMobGluZSkge1xyXG4gICAgbGV0IGljb25zID0gbGluZS5tYXRjaCgvIVxcWy5bXlxcXV0rXFxdL2cpO1xyXG4gICAgaWNvbnMgPyBpY29ucy5mb3JFYWNoKGljb24gPT4ge1xyXG4gICAgICBsZXQgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIGljb24uc2xpY2UoMiwgLTEpLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGl0ZW0gPT4gaWNvLmNsYXNzTGlzdC5hZGQoaXRlbSkpO1xyXG4gICAgICBsaW5lID0gbGluZS5zcGxpdChpY29uKS5qb2luKGljby5vdXRlckhUTUwpO1xyXG4gICAgfSkgOiBudWxsO1xyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG5cclxuICBwYXJzZUFuY2hvcnMobGluZSkge1xyXG4gICAgbGV0IG5ld0xpbmUgPSBcIlwiO1xyXG4gICAgbGV0IGFuY2hvcnMgPSBsaW5lLm1hdGNoKC9cXFsuW14oXStcXF1cXCguW15cXCldK1xcKS9nKTtcclxuICAgIGFuY2hvcnMgPyBhbmNob3JzLmZvckVhY2goYW5jaG9yID0+IHtcclxuICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdChhbmNob3IpO1xyXG4gICAgICBuZXdMaW5lICs9IHRoaXMucGFyc2VJY29ucyh0aGlzLmZvcm1hdFRleHQocGFydHNbMF0pKTtcclxuICAgICAgbGV0IHRtcCA9IGFuY2hvci5zcGxpdChcIl0oXCIpO1xyXG4gICAgICBsZXQgcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIHJlZi5ocmVmID0gdG1wWzFdLnNsaWNlKDAsIC0xKTtcclxuICAgICAgcmVmLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgICAgcmVmLmlubmVySFRNTCA9IHRoaXMucGFyc2VJY29ucyh0aGlzLmZvcm1hdFRleHQodG1wWzBdLnNsaWNlKDEpKSk7XHJcbiAgICAgIG5ld0xpbmUgKz0gcmVmLm91dGVySFRNTCArIHBhcnRzWzFdO1xyXG4gICAgfSkgOiBuZXdMaW5lID0gdGhpcy5wYXJzZUljb25zKHRoaXMuZm9ybWF0VGV4dChsaW5lKSk7XHJcbiAgICByZXR1cm4gbmV3TGluZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFRleHQobGluZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgcmVnZXhwcjtcclxuICAgIHRoaXMuc3ltYm9scy5mb3JFYWNoKGN1cnJlbnQgPT4ge1xyXG4gICAgICByZWdleHByID0gbmV3IFJlZ0V4cChjdXJyZW50LnJlZyArIFwiLlteXCIgKyBjdXJyZW50LnJlZyArIFwiXStcIiArIGN1cnJlbnQucmVnLCBcImdcIik7XHJcbiAgICAgIGxldCBtYXRjaGVzID0gbGluZS5tYXRjaChyZWdleHByKTtcclxuICAgICAgbWF0Y2hlcyA/IG1hdGNoZXMuZm9yRWFjaChpdGVtID0+IGxpbmUgPSBsaW5lLnNwbGl0KGl0ZW0pLmpvaW4oaXRlbS5yZXBsYWNlKGN1cnJlbnQuc3ltYiwgY3VycmVudC50YWdbMF0pLnJlcGxhY2UoY3VycmVudC5zeW1iLCBjdXJyZW50LnRhZ1sxXSkpKSA6IG51bGw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlR3JpZChmcmFnbWVudCkge1xyXG4gICAgbGV0IGdyaWQgPSB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICBncmlkLmNsYXNzTmFtZSA9IFwiZ3JpZFwiO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBmcmFnbWVudC5zbGljZSg0LCAtNCkuc3BsaXQoXCJcXG5cIik7XHJcbiAgICBjb250ZW50LmZvckVhY2gobGluZSA9PiBncmlkLmFwcGVuZENoaWxkKHRoaXMucGFyc2VMaW5lKGxpbmUpKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUGFnZUNvbXBvbmVudC5wcm90b3R5cGUucmVnRXhwcnMgPSB7XHJcbiAgQ29kZU91dHB1dDogL1xce3szfS5bXn1dKlxcfXszfS8sXHJcbiAgU2NyaXB0U3BvaWxlcjogL35+fn4uW15+fn5+XSt+fn5+LyxcclxuICBTY3JpcHRTbmlwcGV0OiAvfn5+Lltefn5+XSt+fn4vLFxyXG4gIFNwb2lsZXI6IC8oXFxeezN9KShbXFxzXFxTXSs/KVxcMS9tLFxyXG4gIFNsaWRlcjogLyEhXFxbLlteXFxdXStcXF0vLFxyXG4gIEdyaWQ6IC9cXEBcXEBcXEBcXEBcXHMrXFxTK1teXFxAXFxAXFxAXFxAXSpdKlxcQFxcQFxcQFxcQC9tXHJcbn07XHJcblxyXG5QYWdlQ29tcG9uZW50LnByb3RvdHlwZS5yZWdFeHByc1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qICgpIHtcclxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xyXG4gIGxldCBmcmFnbWVudHMsIHN0YXJ0LCBlbmQsIGtleTtcclxuXHJcbiAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XHJcbiAgICBmcmFnbWVudHMgPSB0cnVlO1xyXG4gICAga2V5ID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgaWYgKGtleSA9PT0gXCJwYWdlQ29udGVudFwiKSBjb250aW51ZTtcclxuXHJcbiAgICB3aGlsZSAoZnJhZ21lbnRzKSB7XHJcbiAgICAgIGZyYWdtZW50cyA9IHRoaXMucGFnZUNvbnRlbnQubWF0Y2godGhpc1trZXldKTtcclxuICAgICAgaWYgKCFmcmFnbWVudHMpIGJyZWFrO1xyXG4gICAgICBzdGFydCA9IGZyYWdtZW50cy5pbmRleDtcclxuICAgICAgZW5kID0gc3RhcnQgKyBmcmFnbWVudHNbMF0ubGVuZ3RoICsgMTtcclxuICAgICAgdGhpcy5wYWdlQ29udGVudCA9IHRoaXMucGFnZUNvbnRlbnQucmVwbGFjZShmcmFnbWVudHNbMF0sIGBcXG4hISEke3N0YXJ0fSEhIVxcbmApO1xyXG4gICAgICB5aWVsZCB7XHJcbiAgICAgICAgW3N0YXJ0XToge1xyXG4gICAgICAgICAgdHlwZToga2V5LFxyXG4gICAgICAgICAgY29udGVudDogZnJhZ21lbnRzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgeWllbGQge1xyXG4gICAgcGFnZUNvbnRlbnQ6IHRoaXMucGFnZUNvbnRlbnRcclxuICB9O1xyXG59O1xyXG5cclxuUGFnZUNvbXBvbmVudC5wcm90b3R5cGUuc3ltYm9scyA9IFt7XHJcbiAgc3ltYjogXCLigKLigKJcIixcclxuICByZWc6IFwi4oCi4oCiXCIsXHJcbiAgdGFnOiBbXCI8ZmlndXJlIGNsYXNzPSdibGFjayc+XCIsIFwiPC9maWd1cmU+XCJdXHJcbn0sIHtcclxuICBzeW1iOiBcIuKXmOKXmFwiLFxyXG4gIHJlZzogXCLil5jil5hcIixcclxuICB0YWc6IFtcIjxmaWd1cmUgY2xhc3M9J2JvcmRlcmVkJz5cIiwgXCI8L2ZpZ3VyZT5cIl1cclxufSwge1xyXG4gIHN5bWI6IFwiKipcIixcclxuICByZWc6IFwiXFxcXCpcXFxcKlwiLFxyXG4gIHRhZzogW1wiPGI+XCIsIFwiPC9iPlwiXVxyXG59LCB7XHJcbiAgc3ltYjogXCJfXCIsXHJcbiAgcmVnOiBcIl9cIixcclxuICB0YWc6IFtcIjxlbT5cIiwgXCI8L2VtPlwiXVxyXG59LCB7XHJcbiAgc3ltYjogXCJ+XCIsXHJcbiAgcmVnOiBcIn5cIixcclxuICB0YWc6IFtcIjxjb2RlIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiNlZWYnPlwiLCBcIjwvY29kZT5cIl1cclxufSwge1xyXG4gIHN5bWI6IFwiXl5cIixcclxuICByZWc6IFwiXFxcXF5cXFxcXlwiLFxyXG4gIHRhZzogW1wiPHNtYWxsPlwiLCBcIjwvc21hbGw+XCJdXHJcbn0sIHtcclxuICBzeW1iOiBcIjo6OlwiLFxyXG4gIHJlZzogXCI6OjpcIixcclxuICB0YWc6IFtcIjxidXR0b24gY2xhc3M9J2NhcCc+XCIsIFwiPC9idXR0b24+XCJdXHJcbn0sIHtcclxuICBzeW1iOiBcIiUlJVwiLFxyXG4gIHJlZzogXCJcXCVcXCVcXCVcIixcclxuICB0YWc6IFtcIjxidXR0b24gY2xhc3M9J2xpbmsnPlwiLCBcIjwvYnV0dG9uPlwiXVxyXG59XTtcclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInBhZ2UtZWxlbWVudFwiLCBQYWdlQ29tcG9uZW50KTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbXBvbmVudDtcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jbGFzcyBQaWN0dXJlU2xpZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnBpY3R1cmVzID0gW11cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDBcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IDBcclxuICAgICAgICBsZXQgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3cgKCB7IG1vZGU6ICdvcGVuJyB9IClcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNoYWRvdy5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW0gKCAnZmlndXJlJyApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCAnc3R5bGUnIClcclxuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICAgICAgZmlndXJlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjUwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5MDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvaW1hZ2VzL3Bob25lLXN0YXRpYy0zLmpwZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDAwMDA5MDtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCAnTHVja2llc3QgR3V5JywgUm9ib3RvLCBBcmlhbDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDBiMDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2xlZnQgeyBsZWZ0OiA0JTsgfVxyXG4gICAgICAgICAgICAjbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcIjxcIjsgfVxyXG4gICAgICAgICAgICAjcmlnaHQgeyByaWdodDogNCU7IH1cclxuICAgICAgICAgICAgI3JpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFwiPlwiOyB9XHJcbiAgICAgICAgICAgICNjbG9zZSB7IHRvcDogMTBweDsgcmlnaHQ6IDRweDsgfVxyXG4gICAgICAgICAgICAjY2xvc2U6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3LndlYmZ4LmNvbS90b29scy9lbW9qaS1jaGVhdC1zaGVldC9ncmFwaGljcy9lbW9qaXMvbm9fZW50cnlfc2lnbi5wbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMwZDkwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDIwcHggIzAwMDAwMDkwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcclxuICAgICAgICAgICAgICBidXR0b24geyBmb250LXNpemU6IDIwcHg7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSB7XHJcbiAgICAgICAgICAgICAgYnV0dG9uIHsgZm9udC1zaXplOiAxNnB4OyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkICggc3R5bGUgKVxyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSB0aGlzLmNyZWF0ZUVsZW0gKCAnYnV0dG9uJywgdGhpcy5jb250YWluZXIgKVxyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub25jbGljayA9ICgpID0+IHRoaXMucmVtb3ZlKClcclxuXHJcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pZCA9ICdjbG9zZSdcclxuICAgICAgICB0aGlzLmJ0bkxlZnQgPSB0aGlzLmNyZWF0ZUVsZW0gKCAnYnV0dG9uJywgdGhpcy5jb250YWluZXIgKVxyXG4gICAgICAgIHRoaXMuYnRuTGVmdC5pZCA9ICdsZWZ0J1xyXG4gICAgICAgIHRoaXMuYnRuTGVmdC5vbmNsaWNrID0gKCkgPT4gdGhpcy5jaGFuZ2VQaWN0dXJlICggXCJsZWZ0XCIgKVxyXG5cclxuICAgICAgICB0aGlzLmJ0blJpZ2h0ID0gdGhpcy5jcmVhdGVFbGVtICggJ2J1dHRvbicsIHRoaXMuY29udGFpbmVyIClcclxuICAgICAgICB0aGlzLmJ0blJpZ2h0LmlkID0gJ3JpZ2h0J1xyXG4gICAgICAgIHRoaXMuYnRuUmlnaHQub25jbGljayA9ICgpID0+IHRoaXMuY2hhbmdlUGljdHVyZSAoIFwicmlnaHRcIiApXHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRlRWxlbSAoIHRhZ05hbWUsIGNvbnRhaW5lciApIHtcclxuICAgICAgICByZXR1cm4gICggIWNvbnRhaW5lciA/IGRvY3VtZW50LmJvZHkgOiBjb250YWluZXIgKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkIChcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIHRhZ05hbWUgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbICdwaWN0dXJlcyddXHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlcyA9IEpTT04ucGFyc2UgKCB0aGlzLmdldEF0dHJpYnV0ZSAoIFwicGljdHVyZXNcIiApIClcclxuICAgICAgICB0aGlzLnNsaWRlcyA9IFtdXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyAwIF0gPSBuZXcgU2xpZGUgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY3R1cmVzIFsgMCBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnNsaWRlcyBbIDAgXS5tY0Zyb21UbyAoIDEwMCwgMTAgKVxyXG4gICAgICAgIHRoaXMuc2xpZGVzIFsgMSBdID0gbmV3IFNsaWRlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlcyBbIDEgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyAxIF0uaW5pdCAoIDEwMCApXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGljdHVyZSAoIGRpcmVjdGlvbiApIHtcclxuICAgICAgICBsZXQgdG8gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IDEwMCA6IC0xMDBcclxuICAgICAgICBsZXQgbmV4dFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgPT09IDAgPyAxIDogMFxyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldE5leHRJbmRleCAoIGRpcmVjdGlvbiApXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyBuZXh0U2xpZGUgXS5zZXRQaWN0dXJlICggdGhpcy5waWN0dXJlcyBbIG5leHRJbmRleCBdIClcclxuICAgICAgICB0aGlzLnNsaWRlcyBbIG5leHRTbGlkZSBdLmluaXQgKCAtdG8gKVxyXG4gICAgICAgIHRoaXMuc2xpZGVzIFsgdGhpcy5jdXJyZW50U2xpZGUgXS5tY0Zyb21UbyAoIDEwLCB0bywgMCApXHJcbiAgICAgICAgdGhpcy5zbGlkZXMgWyBuZXh0U2xpZGUgXS5tY0Zyb21UbyAoIC10bywgMTAsIDEgKVxyXG4gICAgICAgIHNldFRpbWVvdXQgKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlID0gbmV4dFNsaWRlXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gbmV4dEluZGV4XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAxMDAwIClcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0SW5kZXggKCBkaXIgKSB7XHJcbiAgICAgIHJldHVybiBkaXIgPT09ICdsZWZ0JyA/XHJcbiAgICAgICAgICAgICggdGhpcy5jdXJyZW50SW5kZXggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlcy5sZW5ndGggLSAxIDogdGhpcy5jdXJyZW50SW5kZXggLSAxICkgOlxyXG4gICAgICAgICAgICAoIHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLnBpY3R1cmVzLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICAgICAgMCA6IHRoaXMuY3VycmVudEluZGV4ICsgMSApXHJcbiAgICB9XHJcblxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSAoICdwaWN0dXJlLXNsaWRlcicsIFBpY3R1cmVTbGlkZXIgKVxyXG5cclxuY29uc3QgU2xpZGUgPSBmdW5jdGlvbiAoIGltYWdlVVJMLCBjb250YWluZXIgKSB7XHJcbiAgICB0aGlzLmltYWdlVVJMID0gaW1hZ2VVUkxcclxuICAgIGxldCBlbGVtID0gY29udGFpbmVyLmFwcGVuZENoaWxkIChcclxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoICdkaXYnIClcclxuICAgIClcclxuICAgIGVsZW0uc3R5bGUgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1hZ2VVUkx9KTtgXHJcbiAgICB0aGlzLmluaXQgPSB4ID0+IHtcclxuICAgICAgICBlbGVtLnN0eWxlLmxlZnQgPSB4ICsgJyUnXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFBpY3R1cmUgPSBwaWN0dXJlVVJMID0+XHJcbiAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljdHVyZVVSTH0pYFxyXG5cclxuICAgIHRoaXMubWNGcm9tVG8gPSBmdW5jdGlvbiAoIGZyb20sIHRvLCBmaW5hbE9wYWNpdHkgKSB7XHJcbiAgICAgICAgZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXHJcbiAgICAgICAgZWxlbS5zdHlsZS5sZWZ0ID0gZnJvbSArICclJ1xyXG4gICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDEgLSBmaW5hbE9wYWNpdHlcclxuICAgICAgICBzZXRUaW1lb3V0ICggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuOHMnXHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHRvICsgJyUnXHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IGZpbmFsT3BhY2l0eVxyXG4gICAgICAgIH0sIDUwIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZVNsaWRlclxyXG4iLCJjbGFzcyBQb3B1cFdpbmRvdyBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnNoYWRvdyA9dGhpcy5hdHRhY2hTaGFkb3cgKCB7IG1vZGU6IFwiY2xvc2VkXCIgfSApXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibGVmdFwiPjwvc2xvdD5cclxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJyaWdodFwiPjwvc2xvdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICAgICB0aGlzLmJveCA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIi5ib3hcIiApXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiLmNvbnRlbnRcIiApXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoIFwic3R5bGVcIiApXHJcbiAgICAgICAgKS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICBAY2hhcnNldCBcIlVURi04XCI7XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogMzAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJSb2JvdG9cIiwgQXJpYWw7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3ggPiAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcdCAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwIDcwJSwgdHJhbnNwYXJlbnQgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLXN0YXJzKSwgdmFyKC0taWNvbik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQsIHJpZ2h0LCByaWdodCBib3R0b207XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdCwgcmVwZWF0LCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIsIGNvbnRhaW4sIDEwMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCAyMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4ICNmZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMDAwMDAwNzA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3g6YmVmb3JlLCAuYm94OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveDpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNmNTA7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmNTA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDNweCAzcHggNnB4ICMwMDAwMDA3MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveDphZnRlciB7XHJcbiAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZjUwO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2Y1MDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweCAxMnB4ICMwMDAwMDA3MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3g6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVZKC00ZGVnKSBza2V3KC0xMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3g6aG92ZXIgPiAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg4ZGVnKSBza2V3KDIwZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4ICkge1xyXG4gICAgICAgICAgICAuYm94ID4gLmNvbnRlbnQgeyB3aWR0aDogNjB2dzsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHggKSB7XHJcbiAgICAgICAgICAgIC5ib3ggPiAuY29udGVudCB7IHdpZHRoOiA3MHZ3OyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCApIHtcclxuICAgICAgICAgICAgLmJveCA+IC5jb250ZW50IHsgd2lkdGg6IDgwdnc7IH1cclxuICAgICAgICAgICAgLmJveCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00NSUsIC01MCUpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCApIHtcclxuICAgICAgICAgICAgLmJveCA+IC5jb250ZW50IHsgd2lkdGg6IDkwdnc7IH1cclxuICAgICAgICAgICAgLmJveCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC01MCUpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICBjb2xvcjogIzBkZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQgcCB7XHJcbiAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgfWA7XHJcblxyXG4gICAgICAgIHRoaXMub25jbGljayA9IGV2ZW50ID0+IGV2ZW50LnRhcmdldC5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHtcclxuICAgICAgICByZXR1cm4gWyBcImNvbnRlbnRcIiBdXHJcbiAgICB9XHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgbmV3VmFsID8gdGhpcy5jb250ZW50LmlubmVySFRNTCA9IG5ld1ZhbCA6IG51bGxcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lICggXCJwb3B1cC13aW5cIiwgUG9wdXBXaW5kb3cgKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaW5kb3dcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgU3BvaWxlckNsYXNzIGZyb20gJy4vc3BvaWxlcidcclxuXHJcbmNsYXNzIFNjcmlwdFNwb2lsZXIgZXh0ZW5kcyBTcG9pbGVyQ2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKClcclxuICAgICAgbGV0IHJhaW5ib3dTdHlsZXMgPSB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCAoXHJcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpXHJcbiAgICAgIClcclxuICAgICAgZmV0Y2ggKCBgJHtjcmVhdGVQYXRoKCBcInNyY1wiLCBcImZvci1yYWluYm93LmNzc1wiICl9YCApXHJcbiAgICAgICAgICAudGhlbiAoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSApXHJcbiAgICAgICAgICAudGhlbiAoIGNzcyA9PiByYWluYm93U3R5bGVzLnRleHRDb250ZW50ID0gY3NzIClcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgdGhpcy5oZWFkZXIgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIjaGVhZGVyXCIgKVxyXG4gICAgICB0aGlzLndyYXBwZXIgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIuY29sbGFwc2libGUtY29udGVudFwiIClcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbICdoZWFkZXInLCAnY29udGVudCcgXVxyXG4gICAgfVxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCBhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwgKSB7XHJcbiAgICAgICAgYXR0ck5hbWUgPT09IFwiY29udGVudFwiID9cclxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkICggdGhpcy5jb250ZW50ICkgOlxyXG4gICAgICAgICAgICBhdHRyTmFtZSA9PT0gJ2hlYWRlcicgfHwgIW5ld1ZhbCA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlci5pbm5lclRleHQgPSB0aGlzLmdldEF0dHJpYnV0ZSAoIFwiaGVhZGVyXCIgKSA6XHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSggJ3NjcmlwdC1zcG9pbGVyJywgU2NyaXB0U3BvaWxlciApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRTcG9pbGVyXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IFNwb2lsZXJDbGFzcyBmcm9tICcuL3Nwb2lsZXInXHJcblxyXG5jbGFzcyBTcG9pbGVyQ29tcG9uZW50IGV4dGVuZHMgU3BvaWxlckNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIilcclxuICAgICAgKVxyXG4gICAgICBQcm9taXNlLmFsbCAoW1xyXG4gICAgICAgICAgZmV0Y2ggKCBcInNyYy9pY29ucy5jc3NcIiApXHJcbiAgICAgICAgICAgIC50aGVuICggcmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpICksXHJcbiAgICAgICAgICBmZXRjaCAoIFwic3JjL2Zvci1yYWluYm93LmNzc1wiIClcclxuICAgICAgICAgICAgLnRoZW4gKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKSxcclxuICAgICAgXSlcclxuICAgICAgLnRoZW4gKCBjc3MgPT4gc3R5bGVzLnRleHRDb250ZW50ID0gY3NzLmpvaW4oXCJcXG5cXG5cIikgKVxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICB0aGlzLmhlYWRlciA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIiNoZWFkZXJcIiApXHJcbiAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcIi5jb2xsYXBzaWJsZS1jb250ZW50XCIgKVxyXG4gICAgICB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIubGJsLXRvZ2dsZVwiIClcclxuICAgICAgICAuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NyZWF0ZVBhdGgoIFwiaWNvbnNcIixcInNsaWRlci0yLmdpZlwiICl9KWBcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbICdoZWFkZXInLCAncmVhZHknIF1cclxuICAgIH1cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayggYXR0ck5hbWUsIG9sZFZhbCwgbmV3VmFsICkge1xyXG4gICAgICAgIGlmICggIWF0dHJOYW1lICkgcmV0dXJuXHJcbiAgICAgICAgYXR0ck5hbWUgPT09IFwiaGVhZGVyXCIgPyB0aGlzLmhlYWRlci5pbm5lckhUTUwgPSBuZXdWYWwgOlxyXG4gICAgICAgICAgYXR0ck5hbWUgPT09IFwicmVhZHlcIiA/IChcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY29udGVudC5mb3JFYWNoIChcclxuICAgICAgICAgICAgICAgIGl0ZW0gPT4gdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkICggaXRlbSApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KSgpIDogbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lICggJ3Nwb2lsZXItY29tcG9uZW50JywgU3BvaWxlckNvbXBvbmVudCApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcG9pbGVyQ29tcG9uZW50XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvaWxlckNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKClcclxuICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogXCJvcGVuXCIgfSApXHJcbiAgICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkIChcclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICggXCJzdHlsZVwiIClcclxuICAgICAgKS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwNzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDo5OCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAxJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBpbnNldCAxcHggd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA4MDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlZWY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibC10b2dnbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICMwNzk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtjcmVhdGVQYXRoKCBcImV4dGVybmFsSWNvbnNcIiwgXCJjb2ZmZWUucG5nXCIgKX0pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMTBweCB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibC10b2dnbGU6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxLjVweCAjMDAwMDUwNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYmwtdG9nZ2xlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnICc7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2ZmNzAwMDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibC10b2dnbGU6OmFmdGVyIHtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sbGFwc2libGUtY29udGVudCAuY29udGVudC1pbm5lciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IC0ycHggM3B4ICMwMDAwMDA5MDtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVyZW0gMS4ycmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xsYXBzaWJsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9nZ2xlOmNoZWNrZWQgKyAubGJsLXRvZ2dsZSArIC5jb2xsYXBzaWJsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNzB2aDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAyMHB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA4MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZ2dsZTpjaGVja2VkICsgLmxibC10b2dnbGU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9nZ2xlOmNoZWNrZWQgKyAubGJsLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkID4gZGl2IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBocjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCLilpdcIjtcclxuICAgICAgICAgIGNvbG9yOiAjZjUwO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaHI6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCLilphcIjtcclxuICAgICAgICAgIGNvbG9yOiAjMDliO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsYWNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNkZGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgUm9ib3RvLCBBcmlhbDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpLCBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkge1xyXG4gICAgICAgICAgaDEgeyBmb250LXNpemU6IDEuMnJlbTsgfVxyXG4gICAgICAgICAgaDIgeyBmb250LXNpemU6IDEuMHJlbTsgfVxyXG4gICAgICAgICAgaDMgeyBmb250LXNpemU6IDAuOXJlbTsgfVxyXG4gICAgICAgICAgZGl2IHsgZm9udC1zaXplOiAwLjhyZW07IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDc5O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICMwMDAwMDA3MDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmEwO1xyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8c2VjdGlvbiBpZD1cImNvbXBvbmVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXAtY29sbGFic2libGVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjb2xsYXBzaWJsZVwiIGNsYXNzPVwidG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbGxhcHNpYmxlXCIgY2xhc3M9XCJsYmwtdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImhlYWRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1jb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICBgXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgIHRoaXMuaGVhZGVyID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiI2hlYWRlclwiIClcclxuICAgICAgdGhpcy5zY3JpcHQgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCIjc2NyaXB0Q29udGVudFwiIClcclxuICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvciAoIFwiLmNvbGxhcHNpYmxlLWNvbnRlbnRcIiApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGN1c3RvbUVsZW1lbnRzLmRlZmluZSggJ3Nwb2lsZXItZWxlbWVudCcsIFNwb2lsZXJDb21wb25lbnQgKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU3BvaWxlckNsYXNzXHJcbiIsImltcG9ydCBtYWluU3R5bGVzIGZyb20gJy4vbWFpbi5jc3MnXHJcbi8vIGltcG9ydCBSYWluYm93IGZyb20gJy4vcmFpbmJvdy5qcydcclxuaW1wb3J0IGZvclJhaW5ib3cgZnJvbSAnLi9mb3ItcmFpbmJvdy5jc3MnXHJcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9waWN0dXJlLXNsaWRlcidcclxuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSAnLi9tZW51LWNvbXBvbmVudCdcclxuaW1wb3J0IHNwb2lsZXIgZnJvbSAnLi9zcG9pbGVyJ1xyXG5pbXBvcnQgc3BvaWxlckNvbXBvbmVudCBmcm9tICcuL3Nwb2lsZXItY29tcG9uZW50J1xyXG5cclxuaW1wb3J0IG1haW5NZW51IGZyb20gJy4vbWFpbi1tZW51J1xyXG5pbXBvcnQgc2NyaXB0U3BvaWxlciBmcm9tICcuL3NjcmlwdC1zcG9pbGVyJ1xyXG5cclxuaW1wb3J0IGdsaXRjaCBmcm9tICcuL2dsaXRjaCdcclxuaW1wb3J0IHBhZ2VDb21wb25lbnQgZnJvbSAnLi9wYWdlLWNvbXBvbmVudCdcclxuaW1wb3J0IGNvZGVPdXRwdXRDb21wb25lbnQgZnJvbSBcIi4vY29kZU91dHB1dENvbXBvbmVudFwiXHJcbmltcG9ydCBTaHV0dGVyIGZyb20gXCIuL1NodXR0ZXJcIlxyXG5cclxuaW1wb3J0IEdyYXBoaWNIZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vR3JhcGhpY0hlYWRlckNvbXBvbmVudFwiXHJcblxyXG5pbXBvcnQgcHJvamVjdFN0eWxlcyBmcm9tIFwiLi9wcm9qZWN0LmNzc1wiXHJcbmltcG9ydCBncmlkU3R5bGVzIGZyb20gXCIuL2dyaWQuY3NzXCJcclxuXHJcbmltcG9ydCBTdmdOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIi4vc3ZnLW5hdmlnYXRpb24tcGFuZWxcIlxyXG5cclxuaW1wb3J0IG5vaXNlIGZyb20gXCIuL25vaXNlLmNzc1wiXHJcblxyXG5pbXBvcnQgUG9wdXBXaW5kb3cgZnJvbSBcIi4vcG9wdXAtd2luZG93XCJcclxuIiwiY2xhc3MgU3ZnTmF2aWdhdGlvblBhbmVsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyAoIHsgbW9kZTogXCJjbG9zZWRcIiB9IClcclxuICAgICAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgPSBgPHN2Zz48L3N2Zz5gXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcIm5vcm1cIlxyXG4gICAgICAgIHRoaXMubWF4V2lkdGggPSAzMjBcclxuICAgICAgICB0aGlzLm1pbldpZHRoID0gNTBcclxuICAgICAgICB0aGlzLnN0ZXAgPSA1XHJcbiAgICAgICAgdGhpcy5kID0gNTBcclxuICAgICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCBcInN2Z1wiIClcclxuXHJcbiAgICAgICAgdGhpcy5yYW5kMSA9IHRoaXMucmFuZG9tU3RlcFxyXG4gICAgICAgIHRoaXMucmFuZDIgPSB0aGlzLnJhbmQxICsgdGhpcy5yYW5kb21TdGVwLFxyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5yYW5kb21XaWR0aFxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciAoIFwiZXhwYW5kXCIsIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aC5kaXNwYXRjaEV2ZW50ICggbmV3IEV2ZW50ICggZXZlbnQudHlwZSApIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciAoIFwiY2xvc2VcIiwgZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoLmRpc3BhdGNoRXZlbnQgKCBuZXcgRXZlbnQgKCBldmVudC50eXBlICkgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXQgdyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICB9XHJcbiAgICBnZXQgaCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgfVxyXG4gICAgZ2V0IHBhdGggKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yICggXCJzdmcgPiBwYXRoXCIgKVxyXG4gICAgfVxyXG4gICAgZ2V0IHJhbmRvbVN0ZXAgKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kICggTWF0aC5yYW5kb20oKSAqIHRoaXMuaCAqIDAuMyApXHJcbiAgICB9XHJcbiAgICBnZXQgcmFuZG9tV2lkdGggKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kICggTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4V2lkdGggKiAwLjQgKVxyXG4gICAgfVxyXG5cclxuICAgIHNldExpc3RlbmVycyAoKSB7XHJcbiAgICAgIHRoaXMucGF0aC5hZGRFdmVudExpc3RlbmVyICggXCJleHBhbmRcIiwgdGhpcy5tb3ZpZS5iaW5kICggdGhpcyApIClcclxuICAgICAgdGhpcy5wYXRoLmFkZEV2ZW50TGlzdGVuZXIgKCBcImNsb3NlXCIsIHRoaXMucmV2ZXJzZS5iaW5kICggdGhpcyApIClcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0aWMgKCBleHBhbmQgKSB7XHJcbiAgICAgICAgdGhpcy5zdmcuc3R5bGUud2lkdGggPSBleHBhbmQgPyBcIjEwMHZ3XCIgOiBcIjBcIlxyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZXhwYW5kID8gXCJ3aWRlXCIgOiBcIm5vcm1cIlxyXG4gICAgICAgIGxldCB3aWR0aCA9IGV4cGFuZCA/IHRoaXMubWF4V2lkdGggOiB0aGlzLm1pbldpZHRoXHJcbiAgICAgICAgdGhpcy5zdmcuaW5uZXJIVE1MID0gYDxwYXRoIGQ9XCJNJHt0aGlzLnd9IDAgTCR7dGhpcy53LXdpZHRofSAwIEwke3RoaXMudy13aWR0aH0gJHt0aGlzLmh9IEwke3RoaXMud30gJHt0aGlzLmh9IFpcIiAvPmBcclxuICAgICAgICB0aGlzLnNldExpc3RlbmVycygpXHJcbiAgICAgICAgdGhpcy5yYW5kMSA9IHRoaXMucmFuZG9tU3RlcFxyXG4gICAgICAgIHRoaXMucmFuZDIgPSB0aGlzLnJhbmQxICsgdGhpcy5yYW5kb21TdGVwXHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLnJhbmRvbVdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgbW92aWUgKCkge1xyXG4gICAgICAgIHRoaXMuc3ZnLnN0eWxlLndpZHRoID0gXCIxMDB2d1wiXHJcbiAgICAgICAgdGhpcy5kICs9IHRoaXMuc3RlcCArIDFcclxuICAgICAgICB0aGlzLnJhbmQxICs9IDRcclxuICAgICAgICB0aGlzLnJhbmQyICs9IDVcclxuICAgICAgICB0aGlzLnN2Zy5pbm5lckhUTUwgPSBgPHBhdGggZD1cIk0ke3RoaXMud30gMCBMJHt0aGlzLnctdGhpcy5taW5XaWR0aC10aGlzLm9mZnNldH0gMCBDJHt0aGlzLnctdGhpcy5kK3RoaXMub2Zmc2V0fSAke3RoaXMucmFuZDF9ICR7dGhpcy53LXRoaXMuZC10aGlzLm9mZnNldH0gJHt0aGlzLnJhbmQyfSAke3RoaXMudy10aGlzLm1pbldpZHRoLXRoaXMub2Zmc2V0KjJ9ICR7dGhpcy5ofSBMJHt0aGlzLnd9ICR7dGhpcy5ofSBaXCIgLz5gO1xyXG4gICAgICAgIHRoaXMuZCA8IHRoaXMubWF4V2lkdGggPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKCB0aGlzLm1vdmllLmJpbmQgKCB0aGlzICkgKSA6IHRoaXMuc2V0U3RhdGljKCB0cnVlIClcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlICgpIHtcclxuICAgICAgICB0aGlzLmQgLT0gdGhpcy5zdGVwICsgMVxyXG4gICAgICAgIHRoaXMucmFuZDEgKz0gNFxyXG4gICAgICAgIHRoaXMucmFuZDIgKz0gNVxyXG4gICAgICAgIHRoaXMuc3ZnLmlubmVySFRNTCA9IGA8cGF0aCBkPVwiTSR7dGhpcy53fSAwIEwke3RoaXMudy10aGlzLm1pbldpZHRoLXRoaXMuZH0gMCBDJHt0aGlzLnctdGhpcy5kK3RoaXMub2Zmc2V0fSAke3RoaXMucmFuZDF9ICR7dGhpcy53LXRoaXMuZH0gJHt0aGlzLnJhbmQyfSAke3RoaXMudy10aGlzLm1pbldpZHRoLXRoaXMuZH0gJHt0aGlzLmh9IEwke3RoaXMud30gJHt0aGlzLmh9IFpcIiAvPmA7XHJcbiAgICAgICAgdGhpcy5kID4gMCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZSAoIHRoaXMucmV2ZXJzZS5iaW5kICggdGhpcyApICkgOiB0aGlzLnNldFN0YXRpYyggZmFsc2UgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMuc2hhZG93LnF1ZXJ5U2VsZWN0b3IgKCBcInN2Z1wiIClcclxuICAgICAgICB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCAoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwic3R5bGVcIikpXHJcbiAgICAgICAgICAgIC50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB0aGlzLnN2Zy5pbm5lckhUTUwgPSBgPHBhdGggZD1cIk0ke3RoaXMud30gMCBMJHt0aGlzLnctdGhpcy5taW5XaWR0aH0gMCBMJHt0aGlzLnctdGhpcy5taW5XaWR0aH0gJHt0aGlzLmh9IEwke3RoaXMud30gJHt0aGlzLmh9IFpcIiAvPmA7XHJcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAoIFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0aWMgKCBzdGF0dXMgPT09IFwid2lkZVwiIClcclxuICAgICAgICB9LmJpbmQgKCB0aGlzICkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSAoXHJcbiAgICBcInN2Zy1uYXYtcGFuZWxcIixcclxuICAgIFN2Z05hdmlnYXRpb25QYW5lbFxyXG4pXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTdmdOYXZpZ2F0aW9uUGFuZWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==