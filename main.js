/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Roboto-Bold.woff2 */ "./src/font/Roboto-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Roboto-Bold.woff */ "./src/font/Roboto-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Roboto-Regular.woff2 */ "./src/font/Roboto-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Roboto-Regular.woff */ "./src/font/Roboto-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Roboto-bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n*{\n  font-family: 'Roboto';\n  text-align: center;\n  box-sizing: border-box;\n}\nbody, html{\n  padding:0;\n  margin:0;\n  height: 100%;\n}\n.outer_layout{\n  display: grid;\n  place-items: center;\n  height: 100%;\n  position: relative;\n}\n.inner_layout{\n  width:100%;\n  display:none;\n  grid-template-columns: 1fr auto 1fr;\n  place-items: center;\n}\n.board, .creater_board{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 3px solid red;\n  border-radius: 0.2rem;\n}\n.plot{\n  border: 1px solid red;\n}\n.plot:hover{\n  background: rgb(204, 204, 204);\n}\n.demo{\n  color:rgb(69, 216, 249);\n}\n.creater_board{\n  height: 400px;\n  width: 400px;\n}\n.creater_layout{\n  display: grid;\n  place-items: center;\n  gap: 2em;\n}\nbutton{\n  height: fit-content;\n  background-color: #1a73e8;\n  color: white;\n  border-radius: 2px;\n  border:none;\n  padding:0.3rem;\n}\n.heading{\n  font-family: 'Roboto-Bold';\n  font-size: 2rem;\n  padding: 1rem;\n}\n.end_point_txt{\n  display:none;\n}\nbutton:hover{\n  background-color:#45d8f9;\n  color:black;\n  box-shadow: inset;\n}\n.inner_layout .menu{\n  display: grid;\n  gap: 1rem;\n}\n.inner_layout .menu .reveal{\n  display: none;\n}\n.greetings_layout{\n  display:none;\n  place-items: center;\n  height: 100%;\n  width: 100%; \n  backdrop-filter:blur(5px);\n  position: absolute;\n}\n.greetings_layout .card{\n  display:grid;\n  align-items: center;\n  border-radius: 1rem;\n  background-color: rgba(0, 0, 0, 0.80);\n  padding:3% 10%;\n  gap:1rem;\n}\n.greetings_layout .greeting{\n  color:white;\n  font-size: 3.5rem;\n  font-weight: 900;\n}\n.greetings_layout .menu{\n  display: grid;\n  grid-auto-flow: column;\n  gap:1rem;\n}\n.greetings_layout .menu button{\n  border-radius: 1rem;\n}\n.greetings_layout .gif{\n  display: grid;\n}\n.greetings_layout .gif img{\n  border-radius: 1rem;\n  max-height: 300px;\n  display:none;\n  place-self: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B;yDAC8C;EAC9C,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB;yDACiD;EACjD,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,QAAQ;EACR,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,YAAY;EACZ,mCAAmC;EACnC,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,cAAc;AAChB;AACA;EACE,0BAA0B;EAC1B,eAAe;EACf,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,qCAAqC;EACrC,cAAc;EACd,QAAQ;AACV;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["@font-face {\n  font-family: \"Roboto-bold\";\n  src: url('./font/Roboto-Bold.woff2')format('woff2'),\n    url('./font/Roboto-Bold.woff')format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('./font/Roboto-Regular.woff2')format('woff2'),\n    url('./font/Roboto-Regular.woff')format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n*{\n  font-family: 'Roboto';\n  text-align: center;\n  box-sizing: border-box;\n}\nbody, html{\n  padding:0;\n  margin:0;\n  height: 100%;\n}\n.outer_layout{\n  display: grid;\n  place-items: center;\n  height: 100%;\n  position: relative;\n}\n.inner_layout{\n  width:100%;\n  display:none;\n  grid-template-columns: 1fr auto 1fr;\n  place-items: center;\n}\n.board, .creater_board{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 3px solid red;\n  border-radius: 0.2rem;\n}\n.plot{\n  border: 1px solid red;\n}\n.plot:hover{\n  background: rgb(204, 204, 204);\n}\n.demo{\n  color:rgb(69, 216, 249);\n}\n.creater_board{\n  height: 400px;\n  width: 400px;\n}\n.creater_layout{\n  display: grid;\n  place-items: center;\n  gap: 2em;\n}\nbutton{\n  height: fit-content;\n  background-color: #1a73e8;\n  color: white;\n  border-radius: 2px;\n  border:none;\n  padding:0.3rem;\n}\n.heading{\n  font-family: 'Roboto-Bold';\n  font-size: 2rem;\n  padding: 1rem;\n}\n.end_point_txt{\n  display:none;\n}\nbutton:hover{\n  background-color:#45d8f9;\n  color:black;\n  box-shadow: inset;\n}\n.inner_layout .menu{\n  display: grid;\n  gap: 1rem;\n}\n.inner_layout .menu .reveal{\n  display: none;\n}\n.greetings_layout{\n  display:none;\n  place-items: center;\n  height: 100%;\n  width: 100%; \n  backdrop-filter:blur(5px);\n  position: absolute;\n}\n.greetings_layout .card{\n  display:grid;\n  align-items: center;\n  border-radius: 1rem;\n  background-color: rgba(0, 0, 0, 0.80);\n  padding:3% 10%;\n  gap:1rem;\n}\n.greetings_layout .greeting{\n  color:white;\n  font-size: 3.5rem;\n  font-weight: 900;\n}\n.greetings_layout .menu{\n  display: grid;\n  grid-auto-flow: column;\n  gap:1rem;\n}\n.greetings_layout .menu button{\n  border-radius: 1rem;\n}\n.greetings_layout .gif{\n  display: grid;\n}\n.greetings_layout .gif img{\n  border-radius: 1rem;\n  max-height: 300px;\n  display:none;\n  place-self: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI/board.js":
/*!*************************!*\
  !*** ./src/UI/board.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
class Board{
  static boardRender(board, data, reveal){
    for(let ship of data.ships){
      for(let part of ship.body){
        let tar = this.plotSelector(board, part);
        if(part.hit)
        tar.style.background = 'rgb(241, 107, 92)'
        else if(reveal)
        tar.style.background = '#279847'
      }
      if(ship.isSink()) ship.body.forEach(part => {
        let tar = this.plotSelector(board, part )
        tar.style.background = 'rgb(253, 44, 21)'
      })
    }
    for(let x=0; x<10; x++)
    for(let y=0; y<10; y++){
      if(data.board[x][y]==1){
        let tar = document.querySelector(`.${board.className} .plot[x="${x}"][y="${y}"]`);
        tar.style.background = 'rgb(69, 216, 249)';
      }
    }
  }
  static plotSelector(board, part){
    let x = part.coord.x;
    let y = part.coord.y;
    let tar = document.querySelector(`.${board.className} .plot[x="${x}"][y="${y}"]`);
    return tar;
  }
  static boardCreate(board){
    for(let i=0; i<10; i++)
    for(let j=0; j<10; j++){
      let plot = document.createElement('div');
      plot.className = 'plot';
      plot.setAttribute('x', j);
      plot.setAttribute('y', i);
      board.append(plot);
    }
  }
}

/***/ }),

/***/ "./src/UI/createShips.js":
/*!*******************************!*\
  !*** ./src/UI/createShips.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateShip)
/* harmony export */ });
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playground */ "./src/UI/playground.js");
/* harmony import */ var _modules_GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/GameBoard */ "./src/modules/GameBoard.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ "./src/UI/board.js");




class CreateShip{
  static init(){
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.gb = new _modules_GameBoard__WEBPACK_IMPORTED_MODULE_1__["default"]("Player");
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardCreate(this.createrBoard);
    this.domReload();
  }
  static domCache(){
    this.outLayout = document.querySelector('.outer_layout');
    this.inLayout = document.querySelector('.inner_layout');
    this.createrLayout = document.querySelector('.creater_layout');
    this.createrBoard = document.querySelector(' .creater_board');
    this.oddClick = true;
    this.startPointTxt = document.querySelector('.start_point_txt');
    this.endPointTxt = document.querySelector('.end_point_txt');
    this.startPointHead = document.querySelector('.start_point_txt .heading');
    this.endPointHead = document.querySelector('.end_point_txt .heading');
    this.startPointCont = document.querySelector('.start_point_txt .content');
    this.bottomPlayBtn = document.querySelector('.bottom_play_btn');
    this.count=1;
  }
  static domReload(){
    this.plots = document.querySelectorAll('.creater_board .plot');
    this.topPlayBtn = document.querySelector('.top_play_btn');
  }
  static bindEvent(){
    this.plots.forEach(e =>{
      e.addEventListener('click', x => this.plotClick(e));
    })
    this.bottomPlayBtn.addEventListener('click', this.playBtnClick.bind(this));
  }
  static bindEventReload(){
    this.topPlayBtn.addEventListener('click', this.playBtnClick.bind(this));
  }

  static plotClick(plot){
    let x = parseInt(plot.getAttribute('x'));
    let y = parseInt(plot.getAttribute('y'));
    if(this.oddClick){
      this.startBlock = plot;
      plot.style.background = '#fbbf12';
      this.start = {x, y};
      this.endPointHead.textContent = `Select Ship ${this.count}'s Ending Point`
      this.startPointTxt.style.display = 'none';
      this.endPointTxt.style.display = 'block';
      this.oddClick = false; return;
    }
    this.end = {x, y};
    let len = this.end.x - this.start.x + 1;
    let isPlaced = this.gb.place(this.start.x, this.start.y, len);
    if(isPlaced) this.count++;
    else this.startBlock.style.background = 'none';
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.createrBoard, this.gb, true);
    this.startPointHead.textContent = `Select Ship ${this.count}'s Starting Point`;
    this.startPointTxt.style.display = 'block';
    this.endPointTxt.style.display = 'none';
    this.oddClick = true;
    if(this.count>5){
      this.startPointHead.textContent=`Ship Limit Reached!`;
      this.startPointCont.innerHTML=`you can't place more than 5 ships. Now you may proceed to 
            <button class="top_play_btn">Play>></button>
            <br>(click play button to start)`;
      this.domReload();
      this.count++;
      this.bindEventReload();
    }
  }

  static playBtnClick(){
    this.createrLayout.style.display = 'none';
    this.inLayout.style.display = 'grid';
    _playground__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  }
}

/***/ }),

/***/ "./src/UI/greetings.js":
/*!*****************************!*\
  !*** ./src/UI/greetings.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Greetings)
/* harmony export */ });
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playground */ "./src/UI/playground.js");

class Greetings{
  static init(name){
    this.player = name;
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.greetingMessage.textContent = `${this.player} Won The Match`;
    this.greetingsLayout.style.display = 'grid';
    this.setGif();
  }
  static domCache(){
    this.greetingsLayout = document.querySelector('.greetings_layout');
    this.greetingGif = document.querySelector('.greetings_layout .gif img');
    this.greetingMessage = document.querySelector('.greeting');
    this.restartBtn = document.querySelector('.greetings_layout .restart_btn');
    this.reviewBtn = document.querySelector('.greetings_layout .review_btn');
  }
  static bindEvent(){
    this.restartBtn.addEventListener('click', this.restartClk);
    this.reviewBtn.addEventListener('click', this.reviewClk.bind(this));
  }
  static async setGif(){
    const key = (this.player=='AI')? 'sad': 'happy'
    const apiCode = 'eNSyVSBV1h56QbQZN9TNR73COMnUtRvS';
    const reqUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiCode}&tag=${key}`;
    const response = await fetch(reqUrl);
    const resData = await response.json();
    const gifUrl = resData.data.images.downsized.url;
    this.greetingGif.src =gifUrl;
    this.greetingGif.style.display="block";
  }
  static restartClk(){
    console.log("restart")
    location.reload();
  }
  static reviewClk(){
    this.greetingsLayout.style.display = 'none';
    _playground__WEBPACK_IMPORTED_MODULE_0__["default"].revealBtn.style.display='block';
  }
}

/***/ }),

/***/ "./src/UI/playground.js":
/*!******************************!*\
  !*** ./src/UI/playground.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var _modules_GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/GameBoard */ "./src/modules/GameBoard.js");
/* harmony import */ var _createShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createShips */ "./src/UI/createShips.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ "./src/UI/board.js");
/* harmony import */ var _modules_AI_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/AI/ai */ "./src/modules/AI/ai.js");
/* harmony import */ var _greetings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./greetings */ "./src/UI/greetings.js");






class Playground{
  static init(){
    this.playerData = _createShips__WEBPACK_IMPORTED_MODULE_1__["default"].gb;
    this.ai = new _modules_AI_ai__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.aiData = this.ai.gb;
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static domCache(){
    this.outLayout  = document.querySelector('.outer_layout');
    this.inLayout = document.querySelector('.inner_layout');
    this.board1 = document.querySelector('.board1');
    this.board2 = document.querySelector('.board2');
    this.aiBoard = document.querySelector('.board1 .board');
    this.playerBoard = document.querySelector('.board2 .board');
    this.restartBtn = document.querySelector('.restart_btn');
    this.greetingsLayout = document.querySelector('.greetings_layout');
    this.greetingsTxt = document.querySelector('.greeting');
    this.revealBtn = document.querySelector('.inner_layout .reveal');
  }
  static render(){
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardCreate(this.aiBoard);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardCreate(this.playerBoard);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.aiBoard.parentElement, this.aiData, false);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.playerBoard.parentElement, this.playerData, true);
    this.domReload();
  }
  static domReload(){
    this.b1Plot = document.querySelectorAll('.board1 .plot');
  }
  static bindEvent(){
    this.b1Plot.forEach(e => {
      e.addEventListener('click',this.plotClick.bind(this, e))
    })
    this.restartBtn.addEventListener('click', this.restartClick.bind(this));
    this.revealBtn.addEventListener('click', this.revealClk.bind(this));
  }
  static plotClick(plot){
    if(plot.hasAttribute('clicked')) return;
    plot.setAttribute('clicked', true);
    let x = plot.getAttribute('x');
    let y = plot.getAttribute('y');
    this.aiData.receiveAttack(x, y);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.aiBoard.parentElement, this.aiData, false);
    if(this.aiData.isAllSink()) _greetings__WEBPACK_IMPORTED_MODULE_4__["default"].init('Player');
    this.ai.move(this.playerData);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.playerBoard.parentElement, this.playerData, true);
    if(this.playerData.isAllSink()) _greetings__WEBPACK_IMPORTED_MODULE_4__["default"].init('AI');
  }
  static restartClick(){
    location.reload();
  }
  static revealClk(){
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.aiBoard, this.aiData, true);
  }
}

/***/ }),

/***/ "./src/UI/ui.js":
/*!**********************!*\
  !*** ./src/UI/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playground */ "./src/UI/playground.js");
/* harmony import */ var _createShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createShips */ "./src/UI/createShips.js");



class UI{
  static init(){
    _createShips__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  }
}

/***/ }),

/***/ "./src/modules/AI/ai.js":
/*!******************************!*\
  !*** ./src/modules/AI/ai.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameBoard */ "./src/modules/GameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship */ "./src/modules/ship.js");



class AI{
  constructor(){
    this.gb = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]('AI');
    this.autoplace();
    this.firstHit;
    this.leftWing;
    this.rightWing;
  }
  autoplace(){
    while(this.gb.ships.length<5){
      let l = Math.floor(Math.random()*4)+3;
      let x = Math.floor(Math.random()*10);
      let y = Math.floor(Math.random()*10);
      this.gb.place(x, y, l);
    }
  }
  move(board){
    let x, y;
    [x, y] = this.pickMove(board.board);
    board.receiveAttack(x, y);
    if(this.isItSink(board.board, x, y)){
      this.firstHit = this.rightWing = this.leftWing = undefined;
      return;
    }
    if(this.isItHit(board.board, x, y)){
      if(this.firstHit){
        if(this.rightWing) this.rightWing=[this.rightWing[0]+1, this.rightWing[1]]
        else if(this.leftWing) this.leftWing=[this.leftWing[0]-1, this.leftWing[1]]
      }else{
        this.firstHit = [x, y];
        this.rightWing = [x+1, y];
        this.leftWing = [x-1, y];
      }
    }else{
      if(this.firstHit){
        if(this.rightWing) this.rightWing = undefined;
      }
    }
  }

  isValidMove(board, x, y){
    if(x<0 || x>9 || y<0 || y>9) return false;
    if(!board[x][y]) return true;
    if(board[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]){
      for(let ship of board[x][y].body)
      if(ship.coord.x == x && !ship.hit) return true;
    }return false;
  }

  isItHit(board, x, y){
    return (board[x][y]instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"] && !this.isValidMove(board, x, y));
  }

  isItSink(board, x, y){
    return (board[x][y]instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"] && board[x][y].isSink());
  }
  pickMove(board){
    let x, y;
    do{
      if(this.firstHit){
        if(this.rightWing) {
          [x,y]=this.rightWing;
          if(!this.isValidMove(board, x, y)){
            this.rightWing=undefined;
            continue;
          }
        }else if(this.leftWing) [x,y]=this.leftWing;
      }else{
        x = Math.floor(Math.random()*10);
        y = Math.floor(Math.random()*10);
      }
    }while(!this.isValidMove(board, x, y));
    return [x, y];
  }
}

/***/ }),

/***/ "./src/modules/GameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/ship */ "./src/modules/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");



class GameBoard{
  constructor(name){
    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](name);
    this.board = new Array(10).fill().map(()=>new Array(10).fill());
    this.ships = new Array();
  }
  place(x, y, len){
    if(this.ships.length>=5 || len<=2 || len>6) return false;
    if(x+len>10 || y>10) return false;
    if(this.board[x][y]) return false;
    let coll = (this.isColloidal(x, y, len))
    if(coll) return;
    let s = new _modules_ship__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, len);
    this.ships.push(s);
    for(let i=x; i<x+len; i++)
    this.board[i][y] = s;
    return true;
  }
  receiveAttack(x, y){
    let s = this.board[x][y];
    if(s instanceof _modules_ship__WEBPACK_IMPORTED_MODULE_0__["default"]){
      s.hit(x,y); return;
    }this.board[x][y] = 1;
  }
  isAllSink(){
    for(let s of this.ships)
    if(!s.isSink()) return false;
    return true;
  }
  isColloidal(x, y, len){
    for(let s of this.ships){
      if(s.body[0].coord.y==y){
        let newStart = x;
        let newEnd = x+len-1;
        let start = s.body[0].coord.x;
        let end = s.body[0].coord.x + s.len - 1;
        if((newStart < start) && (newEnd >= start)) return true;
        if((newStart > start) && (newStart<=end)) return true
      }
    }
    return false;
  }
}

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player{
  constructor(name){
    this.name = name;
    this.score = 0;
  }
}

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship{
  constructor(x, y, l){
    this.len = l;
    this.body = new Array();
    for(let i=0; i<l; i++){
      this.body.push(new Part(x+i, y));
    }
  }
  isSink(){
    for(let x of this.body){
      if (x.hit == false) return false;
    }return true;
  }
  hit(x, y){
    for(let p of this.body){
      if(p.coord.x==x && p.coord.y==y)
      p.hit=true;
    }
  }
}
class Part{
  constructor(x, y){
    this.hit = false;
    this.coord = {x, y};
  }
}

/***/ }),

/***/ "./src/font/Roboto-Bold.woff":
/*!***********************************!*\
  !*** ./src/font/Roboto-Bold.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fa4a8113c081e9b3138.woff";

/***/ }),

/***/ "./src/font/Roboto-Bold.woff2":
/*!************************************!*\
  !*** ./src/font/Roboto-Bold.woff2 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b21da07c934a28b2fef3.woff2";

/***/ }),

/***/ "./src/font/Roboto-Regular.woff":
/*!**************************************!*\
  !*** ./src/font/Roboto-Regular.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0944be1093c62cedb919.woff";

/***/ }),

/***/ "./src/font/Roboto-Regular.woff2":
/*!***************************************!*\
  !*** ./src/font/Roboto-Regular.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d43b86421e004e704b9.woff2";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _UI_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/ui */ "./src/UI/ui.js");



_UI_ui__WEBPACK_IMPORTED_MODULE_1__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ0k7O0FBRXhCLG1EQUFPLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS9jcmVhdGVTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL2dyZWV0aW5ncy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL3BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvQUkvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L1JvYm90by1Cb2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250L1JvYm90by1Cb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUm9ib3RvLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUm9ib3RvLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tYm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIilmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIilmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG4qe1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSwgaHRtbHtcXG4gIHBhZGRpbmc6MDtcXG4gIG1hcmdpbjowO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ub3V0ZXJfbGF5b3V0e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbm5lcl9sYXlvdXR7XFxuICB3aWR0aDoxMDAlO1xcbiAgZGlzcGxheTpub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9hcmQsIC5jcmVhdGVyX2JvYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuLnBsb3R7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5wbG90OmhvdmVye1xcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG4uZGVtb3tcXG4gIGNvbG9yOnJnYig2OSwgMjE2LCAyNDkpO1xcbn1cXG4uY3JlYXRlcl9ib2FyZHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcbi5jcmVhdGVyX2xheW91dHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcbmJ1dHRvbntcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOm5vbmU7XFxuICBwYWRkaW5nOjAuM3JlbTtcXG59XFxuLmhlYWRpbmd7XFxuICBmb250LWZhbWlseTogJ1JvYm90by1Cb2xkJztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5lbmRfcG9pbnRfdHh0e1xcbiAgZGlzcGxheTpub25lO1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0NWQ4Zjk7XFxuICBjb2xvcjpibGFjaztcXG4gIGJveC1zaGFkb3c6IGluc2V0O1xcbn1cXG4uaW5uZXJfbGF5b3V0IC5tZW51e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuLmlubmVyX2xheW91dCAubWVudSAucmV2ZWFse1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXR7XFxuICBkaXNwbGF5Om5vbmU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IFxcbiAgYmFja2Ryb3AtZmlsdGVyOmJsdXIoNXB4KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLmNhcmR7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MCk7XFxuICBwYWRkaW5nOjMlIDEwJTtcXG4gIGdhcDoxcmVtO1xcbn1cXG4uZ3JlZXRpbmdzX2xheW91dCAuZ3JlZXRpbmd7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLm1lbnV7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDoxcmVtO1xcbn1cXG4uZ3JlZXRpbmdzX2xheW91dCAubWVudSBidXR0b257XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4uZ3JlZXRpbmdzX2xheW91dCAuZ2lme1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLmdpZiBpbWd7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5Om5vbmU7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUI7eURBQzhDO0VBQzlDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckI7eURBQ2lEO0VBQ2pELG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsUUFBUTtBQUNWO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1ib2xkXFxcIjtcXG4gIHNyYzogdXJsKCcuL2ZvbnQvUm9ib3RvLUJvbGQud29mZjInKWZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuL2ZvbnQvUm9ib3RvLUJvbGQud29mZicpZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKCcuL2ZvbnQvUm9ib3RvLVJlZ3VsYXIud29mZjInKWZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuL2ZvbnQvUm9ib3RvLVJlZ3VsYXIud29mZicpZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG4qe1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSwgaHRtbHtcXG4gIHBhZGRpbmc6MDtcXG4gIG1hcmdpbjowO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ub3V0ZXJfbGF5b3V0e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbm5lcl9sYXlvdXR7XFxuICB3aWR0aDoxMDAlO1xcbiAgZGlzcGxheTpub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9hcmQsIC5jcmVhdGVyX2JvYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuLnBsb3R7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5wbG90OmhvdmVye1xcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG4uZGVtb3tcXG4gIGNvbG9yOnJnYig2OSwgMjE2LCAyNDkpO1xcbn1cXG4uY3JlYXRlcl9ib2FyZHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcbi5jcmVhdGVyX2xheW91dHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcbmJ1dHRvbntcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOm5vbmU7XFxuICBwYWRkaW5nOjAuM3JlbTtcXG59XFxuLmhlYWRpbmd7XFxuICBmb250LWZhbWlseTogJ1JvYm90by1Cb2xkJztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5lbmRfcG9pbnRfdHh0e1xcbiAgZGlzcGxheTpub25lO1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0NWQ4Zjk7XFxuICBjb2xvcjpibGFjaztcXG4gIGJveC1zaGFkb3c6IGluc2V0O1xcbn1cXG4uaW5uZXJfbGF5b3V0IC5tZW51e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuLmlubmVyX2xheW91dCAubWVudSAucmV2ZWFse1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXR7XFxuICBkaXNwbGF5Om5vbmU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IFxcbiAgYmFja2Ryb3AtZmlsdGVyOmJsdXIoNXB4KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLmNhcmR7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MCk7XFxuICBwYWRkaW5nOjMlIDEwJTtcXG4gIGdhcDoxcmVtO1xcbn1cXG4uZ3JlZXRpbmdzX2xheW91dCAuZ3JlZXRpbmd7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLm1lbnV7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDoxcmVtO1xcbn1cXG4uZ3JlZXRpbmdzX2xheW91dCAubWVudSBidXR0b257XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4uZ3JlZXRpbmdzX2xheW91dCAuZ2lme1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLmdpZiBpbWd7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5Om5vbmU7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZHtcbiAgc3RhdGljIGJvYXJkUmVuZGVyKGJvYXJkLCBkYXRhLCByZXZlYWwpe1xuICAgIGZvcihsZXQgc2hpcCBvZiBkYXRhLnNoaXBzKXtcbiAgICAgIGZvcihsZXQgcGFydCBvZiBzaGlwLmJvZHkpe1xuICAgICAgICBsZXQgdGFyID0gdGhpcy5wbG90U2VsZWN0b3IoYm9hcmQsIHBhcnQpO1xuICAgICAgICBpZihwYXJ0LmhpdClcbiAgICAgICAgdGFyLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDI0MSwgMTA3LCA5MiknXG4gICAgICAgIGVsc2UgaWYocmV2ZWFsKVxuICAgICAgICB0YXIuc3R5bGUuYmFja2dyb3VuZCA9ICcjMjc5ODQ3J1xuICAgICAgfVxuICAgICAgaWYoc2hpcC5pc1NpbmsoKSkgc2hpcC5ib2R5LmZvckVhY2gocGFydCA9PiB7XG4gICAgICAgIGxldCB0YXIgPSB0aGlzLnBsb3RTZWxlY3Rvcihib2FyZCwgcGFydCApXG4gICAgICAgIHRhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyNTMsIDQ0LCAyMSknXG4gICAgICB9KVxuICAgIH1cbiAgICBmb3IobGV0IHg9MDsgeDwxMDsgeCsrKVxuICAgIGZvcihsZXQgeT0wOyB5PDEwOyB5Kyspe1xuICAgICAgaWYoZGF0YS5ib2FyZFt4XVt5XT09MSl7XG4gICAgICAgIGxldCB0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZC5jbGFzc05hbWV9IC5wbG90W3g9XCIke3h9XCJdW3k9XCIke3l9XCJdYCk7XG4gICAgICAgIHRhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYig2OSwgMjE2LCAyNDkpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIHBsb3RTZWxlY3Rvcihib2FyZCwgcGFydCl7XG4gICAgbGV0IHggPSBwYXJ0LmNvb3JkLng7XG4gICAgbGV0IHkgPSBwYXJ0LmNvb3JkLnk7XG4gICAgbGV0IHRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkLmNsYXNzTmFtZX0gLnBsb3RbeD1cIiR7eH1cIl1beT1cIiR7eX1cIl1gKTtcbiAgICByZXR1cm4gdGFyO1xuICB9XG4gIHN0YXRpYyBib2FyZENyZWF0ZShib2FyZCl7XG4gICAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKylcbiAgICBmb3IobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgIGxldCBwbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwbG90LmNsYXNzTmFtZSA9ICdwbG90JztcbiAgICAgIHBsb3Quc2V0QXR0cmlidXRlKCd4Jywgaik7XG4gICAgICBwbG90LnNldEF0dHJpYnV0ZSgneScsIGkpO1xuICAgICAgYm9hcmQuYXBwZW5kKHBsb3QpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBQbGF5Z3JvdW5kIGZyb20gXCIuL3BsYXlncm91bmRcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL21vZHVsZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlU2hpcHtcbiAgc3RhdGljIGluaXQoKXtcbiAgICB0aGlzLmRvbUNhY2hlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG4gIHN0YXRpYyByZW5kZXIoKXtcbiAgICB0aGlzLmdiID0gbmV3IEdhbWVCb2FyZChcIlBsYXllclwiKTtcbiAgICBCb2FyZC5ib2FyZENyZWF0ZSh0aGlzLmNyZWF0ZXJCb2FyZCk7XG4gICAgdGhpcy5kb21SZWxvYWQoKTtcbiAgfVxuICBzdGF0aWMgZG9tQ2FjaGUoKXtcbiAgICB0aGlzLm91dExheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXRlcl9sYXlvdXQnKTtcbiAgICB0aGlzLmluTGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyX2xheW91dCcpO1xuICAgIHRoaXMuY3JlYXRlckxheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVyX2xheW91dCcpO1xuICAgIHRoaXMuY3JlYXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIC5jcmVhdGVyX2JvYXJkJyk7XG4gICAgdGhpcy5vZGRDbGljayA9IHRydWU7XG4gICAgdGhpcy5zdGFydFBvaW50VHh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X3BvaW50X3R4dCcpO1xuICAgIHRoaXMuZW5kUG9pbnRUeHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kX3BvaW50X3R4dCcpO1xuICAgIHRoaXMuc3RhcnRQb2ludEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRfcG9pbnRfdHh0IC5oZWFkaW5nJyk7XG4gICAgdGhpcy5lbmRQb2ludEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kX3BvaW50X3R4dCAuaGVhZGluZycpO1xuICAgIHRoaXMuc3RhcnRQb2ludENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRfcG9pbnRfdHh0IC5jb250ZW50Jyk7XG4gICAgdGhpcy5ib3R0b21QbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbV9wbGF5X2J0bicpO1xuICAgIHRoaXMuY291bnQ9MTtcbiAgfVxuICBzdGF0aWMgZG9tUmVsb2FkKCl7XG4gICAgdGhpcy5wbG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVyX2JvYXJkIC5wbG90Jyk7XG4gICAgdGhpcy50b3BQbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcF9wbGF5X2J0bicpO1xuICB9XG4gIHN0YXRpYyBiaW5kRXZlbnQoKXtcbiAgICB0aGlzLnBsb3RzLmZvckVhY2goZSA9PntcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB4ID0+IHRoaXMucGxvdENsaWNrKGUpKTtcbiAgICB9KVxuICAgIHRoaXMuYm90dG9tUGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGxheUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIHN0YXRpYyBiaW5kRXZlbnRSZWxvYWQoKXtcbiAgICB0aGlzLnRvcFBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBwbG90Q2xpY2socGxvdCl7XG4gICAgbGV0IHggPSBwYXJzZUludChwbG90LmdldEF0dHJpYnV0ZSgneCcpKTtcbiAgICBsZXQgeSA9IHBhcnNlSW50KHBsb3QuZ2V0QXR0cmlidXRlKCd5JykpO1xuICAgIGlmKHRoaXMub2RkQ2xpY2spe1xuICAgICAgdGhpcy5zdGFydEJsb2NrID0gcGxvdDtcbiAgICAgIHBsb3Quc3R5bGUuYmFja2dyb3VuZCA9ICcjZmJiZjEyJztcbiAgICAgIHRoaXMuc3RhcnQgPSB7eCwgeX07XG4gICAgICB0aGlzLmVuZFBvaW50SGVhZC50ZXh0Q29udGVudCA9IGBTZWxlY3QgU2hpcCAke3RoaXMuY291bnR9J3MgRW5kaW5nIFBvaW50YFxuICAgICAgdGhpcy5zdGFydFBvaW50VHh0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVuZFBvaW50VHh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5vZGRDbGljayA9IGZhbHNlOyByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW5kID0ge3gsIHl9O1xuICAgIGxldCBsZW4gPSB0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54ICsgMTtcbiAgICBsZXQgaXNQbGFjZWQgPSB0aGlzLmdiLnBsYWNlKHRoaXMuc3RhcnQueCwgdGhpcy5zdGFydC55LCBsZW4pO1xuICAgIGlmKGlzUGxhY2VkKSB0aGlzLmNvdW50Kys7XG4gICAgZWxzZSB0aGlzLnN0YXJ0QmxvY2suc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJztcbiAgICBCb2FyZC5ib2FyZFJlbmRlcih0aGlzLmNyZWF0ZXJCb2FyZCwgdGhpcy5nYiwgdHJ1ZSk7XG4gICAgdGhpcy5zdGFydFBvaW50SGVhZC50ZXh0Q29udGVudCA9IGBTZWxlY3QgU2hpcCAke3RoaXMuY291bnR9J3MgU3RhcnRpbmcgUG9pbnRgO1xuICAgIHRoaXMuc3RhcnRQb2ludFR4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLmVuZFBvaW50VHh0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5vZGRDbGljayA9IHRydWU7XG4gICAgaWYodGhpcy5jb3VudD41KXtcbiAgICAgIHRoaXMuc3RhcnRQb2ludEhlYWQudGV4dENvbnRlbnQ9YFNoaXAgTGltaXQgUmVhY2hlZCFgO1xuICAgICAgdGhpcy5zdGFydFBvaW50Q29udC5pbm5lckhUTUw9YHlvdSBjYW4ndCBwbGFjZSBtb3JlIHRoYW4gNSBzaGlwcy4gTm93IHlvdSBtYXkgcHJvY2VlZCB0byBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b3BfcGxheV9idG5cIj5QbGF5Pj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj4oY2xpY2sgcGxheSBidXR0b24gdG8gc3RhcnQpYDtcbiAgICAgIHRoaXMuZG9tUmVsb2FkKCk7XG4gICAgICB0aGlzLmNvdW50Kys7XG4gICAgICB0aGlzLmJpbmRFdmVudFJlbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwbGF5QnRuQ2xpY2soKXtcbiAgICB0aGlzLmNyZWF0ZXJMYXlvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmluTGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgUGxheWdyb3VuZC5pbml0KCk7XG4gIH1cbn0iLCJpbXBvcnQgUGxheWdyb3VuZCBmcm9tIFwiLi9wbGF5Z3JvdW5kXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmVldGluZ3N7XG4gIHN0YXRpYyBpbml0KG5hbWUpe1xuICAgIHRoaXMucGxheWVyID0gbmFtZTtcbiAgICB0aGlzLmRvbUNhY2hlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG4gIHN0YXRpYyByZW5kZXIoKXtcbiAgICB0aGlzLmdyZWV0aW5nTWVzc2FnZS50ZXh0Q29udGVudCA9IGAke3RoaXMucGxheWVyfSBXb24gVGhlIE1hdGNoYDtcbiAgICB0aGlzLmdyZWV0aW5nc0xheW91dC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIHRoaXMuc2V0R2lmKCk7XG4gIH1cbiAgc3RhdGljIGRvbUNhY2hlKCl7XG4gICAgdGhpcy5ncmVldGluZ3NMYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZXRpbmdzX2xheW91dCcpO1xuICAgIHRoaXMuZ3JlZXRpbmdHaWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZXRpbmdzX2xheW91dCAuZ2lmIGltZycpO1xuICAgIHRoaXMuZ3JlZXRpbmdNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nJyk7XG4gICAgdGhpcy5yZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nc19sYXlvdXQgLnJlc3RhcnRfYnRuJyk7XG4gICAgdGhpcy5yZXZpZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZXRpbmdzX2xheW91dCAucmV2aWV3X2J0bicpO1xuICB9XG4gIHN0YXRpYyBiaW5kRXZlbnQoKXtcbiAgICB0aGlzLnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc3RhcnRDbGspO1xuICAgIHRoaXMucmV2aWV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXZpZXdDbGsuYmluZCh0aGlzKSk7XG4gIH1cbiAgc3RhdGljIGFzeW5jIHNldEdpZigpe1xuICAgIGNvbnN0IGtleSA9ICh0aGlzLnBsYXllcj09J0FJJyk/ICdzYWQnOiAnaGFwcHknXG4gICAgY29uc3QgYXBpQ29kZSA9ICdlTlN5VlNCVjFoNTZRYlFaTjlUTlI3M0NPTW5VdFJ2Uyc7XG4gICAgY29uc3QgcmVxVXJsID0gYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3JhbmRvbT9hcGlfa2V5PSR7YXBpQ29kZX0mdGFnPSR7a2V5fWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXFVcmwpO1xuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgZ2lmVXJsID0gcmVzRGF0YS5kYXRhLmltYWdlcy5kb3duc2l6ZWQudXJsO1xuICAgIHRoaXMuZ3JlZXRpbmdHaWYuc3JjID1naWZVcmw7XG4gICAgdGhpcy5ncmVldGluZ0dpZi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgfVxuICBzdGF0aWMgcmVzdGFydENsaygpe1xuICAgIGNvbnNvbGUubG9nKFwicmVzdGFydFwiKVxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG4gIHN0YXRpYyByZXZpZXdDbGsoKXtcbiAgICB0aGlzLmdyZWV0aW5nc0xheW91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIFBsYXlncm91bmQucmV2ZWFsQnRuLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztcbiAgfVxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL21vZHVsZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgQ3JlYXRlU2hpcCBmcm9tIFwiLi9jcmVhdGVTaGlwc1wiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgQUkgZnJvbSBcIi4uL21vZHVsZXMvQUkvYWlcIjtcbmltcG9ydCBHcmVldGluZ3MgZnJvbSBcIi4vZ3JlZXRpbmdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlncm91bmR7XG4gIHN0YXRpYyBpbml0KCl7XG4gICAgdGhpcy5wbGF5ZXJEYXRhID0gQ3JlYXRlU2hpcC5nYjtcbiAgICB0aGlzLmFpID0gbmV3IEFJKCk7XG4gICAgdGhpcy5haURhdGEgPSB0aGlzLmFpLmdiO1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cbiAgc3RhdGljIGRvbUNhY2hlKCl7XG4gICAgdGhpcy5vdXRMYXlvdXQgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dGVyX2xheW91dCcpO1xuICAgIHRoaXMuaW5MYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXJfbGF5b3V0Jyk7XG4gICAgdGhpcy5ib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQxJyk7XG4gICAgdGhpcy5ib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQyJyk7XG4gICAgdGhpcy5haUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkMSAuYm9hcmQnKTtcbiAgICB0aGlzLnBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkMiAuYm9hcmQnKTtcbiAgICB0aGlzLnJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydF9idG4nKTtcbiAgICB0aGlzLmdyZWV0aW5nc0xheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZ3NfbGF5b3V0Jyk7XG4gICAgdGhpcy5ncmVldGluZ3NUeHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZXRpbmcnKTtcbiAgICB0aGlzLnJldmVhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcl9sYXlvdXQgLnJldmVhbCcpO1xuICB9XG4gIHN0YXRpYyByZW5kZXIoKXtcbiAgICBCb2FyZC5ib2FyZENyZWF0ZSh0aGlzLmFpQm9hcmQpO1xuICAgIEJvYXJkLmJvYXJkQ3JlYXRlKHRoaXMucGxheWVyQm9hcmQpO1xuICAgIEJvYXJkLmJvYXJkUmVuZGVyKHRoaXMuYWlCb2FyZC5wYXJlbnRFbGVtZW50LCB0aGlzLmFpRGF0YSwgZmFsc2UpO1xuICAgIEJvYXJkLmJvYXJkUmVuZGVyKHRoaXMucGxheWVyQm9hcmQucGFyZW50RWxlbWVudCwgdGhpcy5wbGF5ZXJEYXRhLCB0cnVlKTtcbiAgICB0aGlzLmRvbVJlbG9hZCgpO1xuICB9XG4gIHN0YXRpYyBkb21SZWxvYWQoKXtcbiAgICB0aGlzLmIxUGxvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZDEgLnBsb3QnKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50KCl7XG4gICAgdGhpcy5iMVBsb3QuZm9yRWFjaChlID0+IHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMucGxvdENsaWNrLmJpbmQodGhpcywgZSkpXG4gICAgfSlcbiAgICB0aGlzLnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc3RhcnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJldmVhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmV2ZWFsQ2xrLmJpbmQodGhpcykpO1xuICB9XG4gIHN0YXRpYyBwbG90Q2xpY2socGxvdCl7XG4gICAgaWYocGxvdC5oYXNBdHRyaWJ1dGUoJ2NsaWNrZWQnKSkgcmV0dXJuO1xuICAgIHBsb3Quc2V0QXR0cmlidXRlKCdjbGlja2VkJywgdHJ1ZSk7XG4gICAgbGV0IHggPSBwbG90LmdldEF0dHJpYnV0ZSgneCcpO1xuICAgIGxldCB5ID0gcGxvdC5nZXRBdHRyaWJ1dGUoJ3knKTtcbiAgICB0aGlzLmFpRGF0YS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIEJvYXJkLmJvYXJkUmVuZGVyKHRoaXMuYWlCb2FyZC5wYXJlbnRFbGVtZW50LCB0aGlzLmFpRGF0YSwgZmFsc2UpO1xuICAgIGlmKHRoaXMuYWlEYXRhLmlzQWxsU2luaygpKSBHcmVldGluZ3MuaW5pdCgnUGxheWVyJyk7XG4gICAgdGhpcy5haS5tb3ZlKHRoaXMucGxheWVyRGF0YSk7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5wbGF5ZXJCb2FyZC5wYXJlbnRFbGVtZW50LCB0aGlzLnBsYXllckRhdGEsIHRydWUpO1xuICAgIGlmKHRoaXMucGxheWVyRGF0YS5pc0FsbFNpbmsoKSkgR3JlZXRpbmdzLmluaXQoJ0FJJyk7XG4gIH1cbiAgc3RhdGljIHJlc3RhcnRDbGljaygpe1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG4gIHN0YXRpYyByZXZlYWxDbGsoKXtcbiAgICBCb2FyZC5ib2FyZFJlbmRlcih0aGlzLmFpQm9hcmQsIHRoaXMuYWlEYXRhLCB0cnVlKTtcbiAgfVxufSIsImltcG9ydCBQbGF5Z3JvdW5kIGZyb20gXCIuL3BsYXlncm91bmRcIjtcbmltcG9ydCBDcmVhdGVTaGlwIGZyb20gXCIuL2NyZWF0ZVNoaXBzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJe1xuICBzdGF0aWMgaW5pdCgpe1xuICAgIENyZWF0ZVNoaXAuaW5pdCgpO1xuICB9XG59IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi4vR2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBSXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmdiID0gbmV3IEdhbWVCb2FyZCgnQUknKTtcbiAgICB0aGlzLmF1dG9wbGFjZSgpO1xuICAgIHRoaXMuZmlyc3RIaXQ7XG4gICAgdGhpcy5sZWZ0V2luZztcbiAgICB0aGlzLnJpZ2h0V2luZztcbiAgfVxuICBhdXRvcGxhY2UoKXtcbiAgICB3aGlsZSh0aGlzLmdiLnNoaXBzLmxlbmd0aDw1KXtcbiAgICAgIGxldCBsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpKzM7XG4gICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICB0aGlzLmdiLnBsYWNlKHgsIHksIGwpO1xuICAgIH1cbiAgfVxuICBtb3ZlKGJvYXJkKXtcbiAgICBsZXQgeCwgeTtcbiAgICBbeCwgeV0gPSB0aGlzLnBpY2tNb3ZlKGJvYXJkLmJvYXJkKTtcbiAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmKHRoaXMuaXNJdFNpbmsoYm9hcmQuYm9hcmQsIHgsIHkpKXtcbiAgICAgIHRoaXMuZmlyc3RIaXQgPSB0aGlzLnJpZ2h0V2luZyA9IHRoaXMubGVmdFdpbmcgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHRoaXMuaXNJdEhpdChib2FyZC5ib2FyZCwgeCwgeSkpe1xuICAgICAgaWYodGhpcy5maXJzdEhpdCl7XG4gICAgICAgIGlmKHRoaXMucmlnaHRXaW5nKSB0aGlzLnJpZ2h0V2luZz1bdGhpcy5yaWdodFdpbmdbMF0rMSwgdGhpcy5yaWdodFdpbmdbMV1dXG4gICAgICAgIGVsc2UgaWYodGhpcy5sZWZ0V2luZykgdGhpcy5sZWZ0V2luZz1bdGhpcy5sZWZ0V2luZ1swXS0xLCB0aGlzLmxlZnRXaW5nWzFdXVxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuZmlyc3RIaXQgPSBbeCwgeV07XG4gICAgICAgIHRoaXMucmlnaHRXaW5nID0gW3grMSwgeV07XG4gICAgICAgIHRoaXMubGVmdFdpbmcgPSBbeC0xLCB5XTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGlmKHRoaXMuZmlyc3RIaXQpe1xuICAgICAgICBpZih0aGlzLnJpZ2h0V2luZykgdGhpcy5yaWdodFdpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZE1vdmUoYm9hcmQsIHgsIHkpe1xuICAgIGlmKHg8MCB8fCB4PjkgfHwgeTwwIHx8IHk+OSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKCFib2FyZFt4XVt5XSkgcmV0dXJuIHRydWU7XG4gICAgaWYoYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwKXtcbiAgICAgIGZvcihsZXQgc2hpcCBvZiBib2FyZFt4XVt5XS5ib2R5KVxuICAgICAgaWYoc2hpcC5jb29yZC54ID09IHggJiYgIXNoaXAuaGl0KSByZXR1cm4gdHJ1ZTtcbiAgICB9cmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNJdEhpdChib2FyZCwgeCwgeSl7XG4gICAgcmV0dXJuIChib2FyZFt4XVt5XWluc3RhbmNlb2YgU2hpcCAmJiAhdGhpcy5pc1ZhbGlkTW92ZShib2FyZCwgeCwgeSkpO1xuICB9XG5cbiAgaXNJdFNpbmsoYm9hcmQsIHgsIHkpe1xuICAgIHJldHVybiAoYm9hcmRbeF1beV1pbnN0YW5jZW9mIFNoaXAgJiYgYm9hcmRbeF1beV0uaXNTaW5rKCkpO1xuICB9XG4gIHBpY2tNb3ZlKGJvYXJkKXtcbiAgICBsZXQgeCwgeTtcbiAgICBkb3tcbiAgICAgIGlmKHRoaXMuZmlyc3RIaXQpe1xuICAgICAgICBpZih0aGlzLnJpZ2h0V2luZykge1xuICAgICAgICAgIFt4LHldPXRoaXMucmlnaHRXaW5nO1xuICAgICAgICAgIGlmKCF0aGlzLmlzVmFsaWRNb3ZlKGJvYXJkLCB4LCB5KSl7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0V2luZz11bmRlZmluZWQ7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMubGVmdFdpbmcpIFt4LHldPXRoaXMubGVmdFdpbmc7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgfVxuICAgIH13aGlsZSghdGhpcy5pc1ZhbGlkTW92ZShib2FyZCwgeCwgeSkpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cbn0iLCJpbXBvcnQgU2hpcCBmcm9tICcuLi9tb2R1bGVzL3NoaXAnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJke1xuICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIobmFtZSk7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSgxMCkuZmlsbCgpLm1hcCgoKT0+bmV3IEFycmF5KDEwKS5maWxsKCkpO1xuICAgIHRoaXMuc2hpcHMgPSBuZXcgQXJyYXkoKTtcbiAgfVxuICBwbGFjZSh4LCB5LCBsZW4pe1xuICAgIGlmKHRoaXMuc2hpcHMubGVuZ3RoPj01IHx8IGxlbjw9MiB8fCBsZW4+NikgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHgrbGVuPjEwIHx8IHk+MTApIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLmJvYXJkW3hdW3ldKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGNvbGwgPSAodGhpcy5pc0NvbGxvaWRhbCh4LCB5LCBsZW4pKVxuICAgIGlmKGNvbGwpIHJldHVybjtcbiAgICBsZXQgcyA9IG5ldyBTaGlwKHgsIHksIGxlbik7XG4gICAgdGhpcy5zaGlwcy5wdXNoKHMpO1xuICAgIGZvcihsZXQgaT14OyBpPHgrbGVuOyBpKyspXG4gICAgdGhpcy5ib2FyZFtpXVt5XSA9IHM7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KXtcbiAgICBsZXQgcyA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgaWYocyBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgcy5oaXQoeCx5KTsgcmV0dXJuO1xuICAgIH10aGlzLmJvYXJkW3hdW3ldID0gMTtcbiAgfVxuICBpc0FsbFNpbmsoKXtcbiAgICBmb3IobGV0IHMgb2YgdGhpcy5zaGlwcylcbiAgICBpZighcy5pc1NpbmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlzQ29sbG9pZGFsKHgsIHksIGxlbil7XG4gICAgZm9yKGxldCBzIG9mIHRoaXMuc2hpcHMpe1xuICAgICAgaWYocy5ib2R5WzBdLmNvb3JkLnk9PXkpe1xuICAgICAgICBsZXQgbmV3U3RhcnQgPSB4O1xuICAgICAgICBsZXQgbmV3RW5kID0geCtsZW4tMTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gcy5ib2R5WzBdLmNvb3JkLng7XG4gICAgICAgIGxldCBlbmQgPSBzLmJvZHlbMF0uY29vcmQueCArIHMubGVuIC0gMTtcbiAgICAgICAgaWYoKG5ld1N0YXJ0IDwgc3RhcnQpICYmIChuZXdFbmQgPj0gc3RhcnQpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYoKG5ld1N0YXJ0ID4gc3RhcnQpICYmIChuZXdTdGFydDw9ZW5kKSkgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVye1xuICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHtcbiAgY29uc3RydWN0b3IoeCwgeSwgbCl7XG4gICAgdGhpcy5sZW4gPSBsO1xuICAgIHRoaXMuYm9keSA9IG5ldyBBcnJheSgpO1xuICAgIGZvcihsZXQgaT0wOyBpPGw7IGkrKyl7XG4gICAgICB0aGlzLmJvZHkucHVzaChuZXcgUGFydCh4K2ksIHkpKTtcbiAgICB9XG4gIH1cbiAgaXNTaW5rKCl7XG4gICAgZm9yKGxldCB4IG9mIHRoaXMuYm9keSl7XG4gICAgICBpZiAoeC5oaXQgPT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICB9cmV0dXJuIHRydWU7XG4gIH1cbiAgaGl0KHgsIHkpe1xuICAgIGZvcihsZXQgcCBvZiB0aGlzLmJvZHkpe1xuICAgICAgaWYocC5jb29yZC54PT14ICYmIHAuY29vcmQueT09eSlcbiAgICAgIHAuaGl0PXRydWU7XG4gICAgfVxuICB9XG59XG5jbGFzcyBQYXJ0e1xuICBjb25zdHJ1Y3Rvcih4LCB5KXtcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIHRoaXMuY29vcmQgPSB7eCwgeX07XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB1aSBmcm9tICcuL1VJL3VpJ1xuXG51aS5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9