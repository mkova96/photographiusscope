(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-toastr/toastr.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./node_modules/ngx-toastr/toastr.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n", "",{"version":3,"sources":["toastr.css"],"names":[],"mappings":"AAAA,kJAAkJ;;AAElJ,aAAa;;AACb;EACE,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AACA;EACE,MAAM;EACN,QAAQ;EACR,WAAW;AACb;;AACA;EACE,SAAS;EACT,QAAQ;EACR,WAAW;AACb;;AACA;EACE,MAAM;EACN,QAAQ;EACR,WAAW;AACb;;AACA;EACE,SAAS;EACT,QAAQ;EACR,WAAW;AACb;;AACA;EACE,SAAS;EACT,UAAU;AACZ;;AACA;EACE,SAAS;EACT,WAAW;AACb;;AACA;EACE,WAAW;EACX,YAAY;AACd;;AACA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA,iBAAiB;;AACjB;EACE,iBAAiB;AACnB;;AACA;EACE,qBAAqB;AACvB;;AACA;;EAEE,cAAc;AAChB;;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,4BAA4B;EAC5B,kBAAkB;AACpB;;AACA;;EAEE,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AACA;;yDAEyD;;AACzD;EACE,UAAU;EACV,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AACA;EACE,oBAAoB;EACpB,eAAe;EACf,eAAe;AACjB;;AACA;EACE,sBAAsB;AACxB;;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4BAA4B;EAC5B,YAAY;EACZ,8BAA8B;EAC9B,gCAAgC;EAChC,4BAA4B;EAC5B,qBAAqB;EACrB,4BAA4B;EAC5B,cAAc;AAChB;;AACA;EACE,4BAA4B;EAC5B,UAAU;EACV,eAAe;AACjB;;AACA,iHAAiH;;AACjH;EACE,qlBAAqlB;AACvlB;;AACA,kHAAkH;;AAClH;EACE,6jBAA6jB;AAC/jB;;AACA,2GAA2G;;AAC3G;EACE,wdAAwd;AAC1d;;AACA,0HAA0H;;AAC1H;EACE,soBAAsoB;AACxoB;;AACA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AACA;;EAEE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AACA;EACE,yBAAyB;EACzB,oBAAoB;AACtB;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AACA,sBAAsB;;AACtB;EACE;IACE,yBAAyB;IACzB,WAAW;EACb;EACA;IACE,aAAa;IACb,WAAW;EACb;AACF;;AACA;EACE;IACE,yBAAyB;IACzB,WAAW;EACb;EACA;IACE,aAAa;IACb,WAAW;EACb;AACF;;AACA;EACE;IACE,4BAA4B;IAC5B,WAAW;EACb;AACF","file":"toastr.css","sourcesContent":["/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container * {\n  box-sizing: border-box;\n}\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\nmain {\n    width:100%;\n    min-height: 717px;\n}\n\nsection {\n    padding: 80px 0;\n    background-color:rgb(240, 234, 240);\n}\n\n.row {\n    max-width: 1140px;\n    /*margin: 0 auto 0 auto;*/ /*ISTOOOOO*/\n    margin: 0 auto; /*CENTRIRANJE ELEMENTA*/\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    background-color: #fff;\n    color: #555;\n    font-size: 20px;\n    font-weight: 300;\n    text-rendering: optimizeLegibility;\n    overflow-x: hidden;\n}\n\n/*************HEADINGS************/\n\nh1, h2, h3,label {\n    font-weight: 300;\n    text-transform: uppercase; /*UPPERCASE*/\n}\n\nh1 {\n    margin: 0;\n    text-align: center;\n    margin-bottom: 20px;\n    color:  #555;\n    font-size: 240%;\n    word-spacing: 4px;\n    letter-spacing: 1px;\n}\n\nh2 {\n    font-size: 160%;\n    color:  #555;\n    word-spacing: 2px;\n    text-align: center;\n    margin-bottom: 30px;\n    letter-spacing: 1px;\n    margin-top: 20px;\n}\n\nh3{\n    font-size: 110%;\n    color:  #555;\n    margin-bottom: 23px;\n    font-weight: 400;\n}\n\nlabel {\n    font-size: 110%;\n    color:  #555;\n    font-weight: 400;\n}\n\n.form-field {\n    padding: 5px;\n}\n\nh1:after ,h2:after { /*NARANCASTA CRTA*/\n    display: block;\n    height: 2px;\n    background-color: rgb(26, 25, 25);\n    content: \" \";\n    width: 100px;\n    margin: 0 auto;\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\n.naslov {\n    margin-top: 20px;\n}\n\ntd.title {\n    display: block;\n    margin-right: 40px;\n}\n\n.card {\n    width:750px;\n    margin-left: 475px;\n}\n\ntd.photo {\n    margin-right: 45px;\n}\n\n.search {\n    width:470px;\n}\n\ndiv.ipsearch {\n    position: relative;\n    left:550px;\n}\n\n.table {\n    border-collapse: separate;\n    border-spacing: 20px;\n}\n\n.src-btn{\n    position: absolute;\n    top: 48px;\n    left: 538px;\n}\n\n.ipresponse {\n    right:400px;\n    width: 500px;\n}\n\n.btn-center {\n    margin-left: 765px;\n    margin-bottom: 20px;\n}\n\n.form-center {\n    margin-left: 700px;\n}\n\n.form-buttons {\n    margin-left:115px;\n    margin-top: 10px;\n}\n\nfooter {\n    background-color: #333;\n    padding: 20px;\n    font-size: 80%;\n    height: -webkit-fill-available;\n    max-height: 162px;\n}\n\nfooter p {\n    color: #888;\n    margin-top: 5px;\n}\n\n.top-menu {\n    background-color: rgb(31, 21, 21);\n}\n\ntextarea{\n    height: 150px;\n    width: 250px;\n}\n\n.form-control {\n    width: 30%;\n}\n\n.btn-warning {\n    margin-right: 10px;\n}\n\n.message-content {\n    width: 300px;\n    margin-right: 40px;\n    display: block;\n}\n\n.msg-card {\n    width: 1000px;\n    margin-left: 50px;\n}\n\n.mess {\n    min-width: 80px;\n}\n\n.alert {\n    margin:auto;\n    width: 50%;\n}\n\n.fa {\n    width: 40px;\n}\n\n.user_search {\n    display:flex;\n}\n\n.search_card {\n    margin-top: 20px;\n}\n\ninput.ng-dirty.ng-invalid {\n    border: 3px solid #a94442;\n}\n\n.errors {\n    margin-left: 550px;\n}", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"AAAA,8EAA8E;;AAE9E;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,yBAAyB,EAAE,WAAW;IACtC,cAAc,EAAE,uBAAuB;AAC3C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA,kCAAkC;;AAElC;IACI,gBAAgB;IAChB,yBAAyB,EAAE,YAAY;AAC3C;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA,qBAAqB,kBAAkB;IACnC,cAAc;IACd,WAAW;IACX,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AACA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB","file":"styles.css","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\nmain {\n    width:100%;\n    min-height: 717px;\n}\n\nsection {\n    padding: 80px 0;\n    background-color:rgb(240, 234, 240);\n}\n\n.row {\n    max-width: 1140px;\n    /*margin: 0 auto 0 auto;*/ /*ISTOOOOO*/\n    margin: 0 auto; /*CENTRIRANJE ELEMENTA*/\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    background-color: #fff;\n    color: #555;\n    font-size: 20px;\n    font-weight: 300;\n    text-rendering: optimizeLegibility;\n    overflow-x: hidden;\n}\n\n/*************HEADINGS************/\n\nh1, h2, h3,label {\n    font-weight: 300;\n    text-transform: uppercase; /*UPPERCASE*/\n}\n\nh1 {\n    margin: 0;\n    text-align: center;\n    margin-bottom: 20px;\n    color:  #555;\n    font-size: 240%;\n    word-spacing: 4px;\n    letter-spacing: 1px;\n}\n\nh2 {\n    font-size: 160%;\n    color:  #555;\n    word-spacing: 2px;\n    text-align: center;\n    margin-bottom: 30px;\n    letter-spacing: 1px;\n    margin-top: 20px;\n}\n\nh3{\n    font-size: 110%;\n    color:  #555;\n    margin-bottom: 23px;\n    font-weight: 400;\n}\n\nlabel {\n    font-size: 110%;\n    color:  #555;\n    font-weight: 400;\n}\n\n.form-field {\n    padding: 5px;\n}\n\nh1:after ,h2:after { /*NARANCASTA CRTA*/\n    display: block;\n    height: 2px;\n    background-color: rgb(26, 25, 25);\n    content: \" \";\n    width: 100px;\n    margin: 0 auto;\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\n.naslov {\n    margin-top: 20px;\n}\ntd.title {\n    display: block;\n    margin-right: 40px;\n}\n\n.card {\n    width:750px;\n    margin-left: 475px;\n}\n\ntd.photo {\n    margin-right: 45px;\n}\n\n.search {\n    width:470px;\n}\n\ndiv.ipsearch {\n    position: relative;\n    left:550px;\n}\n\n.table {\n    border-collapse: separate;\n    border-spacing: 20px;\n}\n\n.src-btn{\n    position: absolute;\n    top: 48px;\n    left: 538px;\n}\n\n.ipresponse {\n    right:400px;\n    width: 500px;\n}\n\n.btn-center {\n    margin-left: 765px;\n    margin-bottom: 20px;\n}\n\n.form-center {\n    margin-left: 700px;\n}\n\n.form-buttons {\n    margin-left:115px;\n    margin-top: 10px;\n}\n\nfooter {\n    background-color: #333;\n    padding: 20px;\n    font-size: 80%;\n    height: -webkit-fill-available;\n    max-height: 162px;\n}\n\nfooter p {\n    color: #888;\n    margin-top: 5px;\n}\n\n.top-menu {\n    background-color: rgb(31, 21, 21);\n}\n\ntextarea{\n    height: 150px;\n    width: 250px;\n}\n\n.form-control {\n    width: 30%;\n}\n\n.btn-warning {\n    margin-right: 10px;\n}\n\n.message-content {\n    width: 300px;\n    margin-right: 40px;\n    display: block;\n}\n\n.msg-card {\n    width: 1000px;\n    margin-left: 50px;\n}\n\n.mess {\n    min-width: 80px;\n}\n\n.alert {\n    margin:auto;\n    width: 50%;\n}\n\n.fa {\n    width: 40px;\n}\n\n.user_search {\n    display:flex;\n}\n\n.search_card {\n    margin-top: 20px;\n}\n\ninput.ng-dirty.ng-invalid {\n    border: 3px solid #a94442;\n}\n\n.errors {\n    margin-left: 550px;\n}"]}]);
// Exports
module.exports = exports;


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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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

/***/ "./node_modules/ngx-toastr/toastr.css":
/*!********************************************!*\
  !*** ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js??ref--12-1!../postcss-loader/src??embedded!./toastr.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-toastr/toastr.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 3:
/*!*******************************************************************!*\
  !*** multi ./src/styles.css ./node_modules/ngx-toastr/toastr.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\mario\Desktop\LOCAL - sigurna\src\styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! C:\Users\mario\Desktop\LOCAL - sigurna\node_modules\ngx-toastr\toastr.css */"./node_modules/ngx-toastr/toastr.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2017.js.map