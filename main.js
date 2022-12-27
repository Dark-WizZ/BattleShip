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
    if(this.count>5) return;
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
    let cloneBoard = _playground__WEBPACK_IMPORTED_MODULE_0__["default"].aiBoard.cloneNode(true);
    _playground__WEBPACK_IMPORTED_MODULE_0__["default"].board1.replaceChild(cloneBoard, _playground__WEBPACK_IMPORTED_MODULE_0__["default"].aiBoard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNJOztBQUV4QixtREFBTyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvY3JlYXRlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS9ncmVldGluZ3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS9wbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0FJL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Sb2JvdG8tQm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9Sb2JvdG8tQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250L1JvYm90by1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250L1JvYm90by1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLWJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKWZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKWZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuKntcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksIGh0bWx7XFxuICBwYWRkaW5nOjA7XFxuICBtYXJnaW46MDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm91dGVyX2xheW91dHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW5uZXJfbGF5b3V0e1xcbiAgd2lkdGg6MTAwJTtcXG4gIGRpc3BsYXk6bm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXJkLCAuY3JlYXRlcl9ib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcbi5wbG90e1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG4ucGxvdDpob3ZlcntcXG4gIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuLmRlbW97XFxuICBjb2xvcjpyZ2IoNjksIDIxNiwgMjQ5KTtcXG59XFxuLmNyZWF0ZXJfYm9hcmR7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4uY3JlYXRlcl9sYXlvdXR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5idXR0b257XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNlODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjpub25lO1xcbiAgcGFkZGluZzowLjNyZW07XFxufVxcbi5oZWFkaW5ne1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tQm9sZCc7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uZW5kX3BvaW50X3R4dHtcXG4gIGRpc3BsYXk6bm9uZTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjojNDVkOGY5O1xcbiAgY29sb3I6YmxhY2s7XFxuICBib3gtc2hhZG93OiBpbnNldDtcXG59XFxuLmlubmVyX2xheW91dCAubWVudXtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxufVxcbi5pbm5lcl9sYXlvdXQgLm1lbnUgLnJldmVhbHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ncmVldGluZ3NfbGF5b3V0e1xcbiAgZGlzcGxheTpub25lO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIGJhY2tkcm9wLWZpbHRlcjpibHVyKDVweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ncmVldGluZ3NfbGF5b3V0IC5jYXJke1xcbiAgZGlzcGxheTpncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODApO1xcbiAgcGFkZGluZzozJSAxMCU7XFxuICBnYXA6MXJlbTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLmdyZWV0aW5ne1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5ncmVldGluZ3NfbGF5b3V0IC5tZW51e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6MXJlbTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLm1lbnUgYnV0dG9ue1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLmdpZntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5ncmVldGluZ3NfbGF5b3V0IC5naWYgaW1ne1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgZGlzcGxheTpub25lO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCO3lEQUM4QztFQUM5QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCO3lEQUNpRDtFQUNqRCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tYm9sZFxcXCI7XFxuICBzcmM6IHVybCgnLi9mb250L1JvYm90by1Cb2xkLndvZmYyJylmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi9mb250L1JvYm90by1Cb2xkLndvZmYnKWZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybCgnLi9mb250L1JvYm90by1SZWd1bGFyLndvZmYyJylmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi9mb250L1JvYm90by1SZWd1bGFyLndvZmYnKWZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuKntcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksIGh0bWx7XFxuICBwYWRkaW5nOjA7XFxuICBtYXJnaW46MDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm91dGVyX2xheW91dHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW5uZXJfbGF5b3V0e1xcbiAgd2lkdGg6MTAwJTtcXG4gIGRpc3BsYXk6bm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXJkLCAuY3JlYXRlcl9ib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcbi5wbG90e1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG4ucGxvdDpob3ZlcntcXG4gIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuLmRlbW97XFxuICBjb2xvcjpyZ2IoNjksIDIxNiwgMjQ5KTtcXG59XFxuLmNyZWF0ZXJfYm9hcmR7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4uY3JlYXRlcl9sYXlvdXR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5idXR0b257XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNlODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjpub25lO1xcbiAgcGFkZGluZzowLjNyZW07XFxufVxcbi5oZWFkaW5ne1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tQm9sZCc7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uZW5kX3BvaW50X3R4dHtcXG4gIGRpc3BsYXk6bm9uZTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjojNDVkOGY5O1xcbiAgY29sb3I6YmxhY2s7XFxuICBib3gtc2hhZG93OiBpbnNldDtcXG59XFxuLmlubmVyX2xheW91dCAubWVudXtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxufVxcbi5pbm5lcl9sYXlvdXQgLm1lbnUgLnJldmVhbHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ncmVldGluZ3NfbGF5b3V0e1xcbiAgZGlzcGxheTpub25lO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIGJhY2tkcm9wLWZpbHRlcjpibHVyKDVweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ncmVldGluZ3NfbGF5b3V0IC5jYXJke1xcbiAgZGlzcGxheTpncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODApO1xcbiAgcGFkZGluZzozJSAxMCU7XFxuICBnYXA6MXJlbTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLmdyZWV0aW5ne1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5ncmVldGluZ3NfbGF5b3V0IC5tZW51e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6MXJlbTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLm1lbnUgYnV0dG9ue1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLmdyZWV0aW5nc19sYXlvdXQgLmdpZntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5ncmVldGluZ3NfbGF5b3V0IC5naWYgaW1ne1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgZGlzcGxheTpub25lO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmR7XG4gIHN0YXRpYyBib2FyZFJlbmRlcihib2FyZCwgZGF0YSwgcmV2ZWFsKXtcbiAgICBmb3IobGV0IHNoaXAgb2YgZGF0YS5zaGlwcyl7XG4gICAgICBmb3IobGV0IHBhcnQgb2Ygc2hpcC5ib2R5KXtcbiAgICAgICAgbGV0IHRhciA9IHRoaXMucGxvdFNlbGVjdG9yKGJvYXJkLCBwYXJ0KTtcbiAgICAgICAgaWYocGFydC5oaXQpXG4gICAgICAgIHRhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyNDEsIDEwNywgOTIpJ1xuICAgICAgICBlbHNlIGlmKHJldmVhbClcbiAgICAgICAgdGFyLnN0eWxlLmJhY2tncm91bmQgPSAnIzI3OTg0NydcbiAgICAgIH1cbiAgICAgIGlmKHNoaXAuaXNTaW5rKCkpIHNoaXAuYm9keS5mb3JFYWNoKHBhcnQgPT4ge1xuICAgICAgICBsZXQgdGFyID0gdGhpcy5wbG90U2VsZWN0b3IoYm9hcmQsIHBhcnQgKVxuICAgICAgICB0YXIuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjUzLCA0NCwgMjEpJ1xuICAgICAgfSlcbiAgICB9XG4gICAgZm9yKGxldCB4PTA7IHg8MTA7IHgrKylcbiAgICBmb3IobGV0IHk9MDsgeTwxMDsgeSsrKXtcbiAgICAgIGlmKGRhdGEuYm9hcmRbeF1beV09PTEpe1xuICAgICAgICBsZXQgdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmQuY2xhc3NOYW1lfSAucGxvdFt4PVwiJHt4fVwiXVt5PVwiJHt5fVwiXWApO1xuICAgICAgICB0YXIuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoNjksIDIxNiwgMjQ5KSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwbG90U2VsZWN0b3IoYm9hcmQsIHBhcnQpe1xuICAgIGxldCB4ID0gcGFydC5jb29yZC54O1xuICAgIGxldCB5ID0gcGFydC5jb29yZC55O1xuICAgIGxldCB0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZC5jbGFzc05hbWV9IC5wbG90W3g9XCIke3h9XCJdW3k9XCIke3l9XCJdYCk7XG4gICAgcmV0dXJuIHRhcjtcbiAgfVxuICBzdGF0aWMgYm9hcmRDcmVhdGUoYm9hcmQpe1xuICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspXG4gICAgZm9yKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICBsZXQgcGxvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxvdC5jbGFzc05hbWUgPSAncGxvdCc7XG4gICAgICBwbG90LnNldEF0dHJpYnV0ZSgneCcsIGopO1xuICAgICAgcGxvdC5zZXRBdHRyaWJ1dGUoJ3knLCBpKTtcbiAgICAgIGJvYXJkLmFwcGVuZChwbG90KTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgUGxheWdyb3VuZCBmcm9tIFwiLi9wbGF5Z3JvdW5kXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9tb2R1bGVzL0dhbWVCb2FyZFwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVNoaXB7XG4gIHN0YXRpYyBpbml0KCl7XG4gICAgdGhpcy5kb21DYWNoZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5iaW5kRXZlbnQoKTtcbiAgfVxuICBzdGF0aWMgcmVuZGVyKCl7XG4gICAgdGhpcy5nYiA9IG5ldyBHYW1lQm9hcmQoXCJQbGF5ZXJcIik7XG4gICAgQm9hcmQuYm9hcmRDcmVhdGUodGhpcy5jcmVhdGVyQm9hcmQpO1xuICAgIHRoaXMuZG9tUmVsb2FkKCk7XG4gIH1cbiAgc3RhdGljIGRvbUNhY2hlKCl7XG4gICAgdGhpcy5vdXRMYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0ZXJfbGF5b3V0Jyk7XG4gICAgdGhpcy5pbkxheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcl9sYXlvdXQnKTtcbiAgICB0aGlzLmNyZWF0ZXJMYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlcl9sYXlvdXQnKTtcbiAgICB0aGlzLmNyZWF0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyAuY3JlYXRlcl9ib2FyZCcpO1xuICAgIHRoaXMub2RkQ2xpY2sgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRQb2ludFR4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydF9wb2ludF90eHQnKTtcbiAgICB0aGlzLmVuZFBvaW50VHh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZF9wb2ludF90eHQnKTtcbiAgICB0aGlzLnN0YXJ0UG9pbnRIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X3BvaW50X3R4dCAuaGVhZGluZycpO1xuICAgIHRoaXMuZW5kUG9pbnRIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZF9wb2ludF90eHQgLmhlYWRpbmcnKTtcbiAgICB0aGlzLnN0YXJ0UG9pbnRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X3BvaW50X3R4dCAuY29udGVudCcpO1xuICAgIHRoaXMuYm90dG9tUGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b21fcGxheV9idG4nKTtcbiAgICB0aGlzLmNvdW50PTE7XG4gIH1cbiAgc3RhdGljIGRvbVJlbG9hZCgpe1xuICAgIHRoaXMucGxvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlYXRlcl9ib2FyZCAucGxvdCcpO1xuICAgIHRoaXMudG9wUGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BfcGxheV9idG4nKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50KCl7XG4gICAgdGhpcy5wbG90cy5mb3JFYWNoKGUgPT57XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgeCA9PiB0aGlzLnBsb3RDbGljayhlKSk7XG4gICAgfSlcbiAgICB0aGlzLmJvdHRvbVBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50UmVsb2FkKCl7XG4gICAgdGhpcy50b3BQbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wbGF5QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgcGxvdENsaWNrKHBsb3Qpe1xuICAgIGlmKHRoaXMuY291bnQ+NSkgcmV0dXJuO1xuICAgIGxldCB4ID0gcGFyc2VJbnQocGxvdC5nZXRBdHRyaWJ1dGUoJ3gnKSk7XG4gICAgbGV0IHkgPSBwYXJzZUludChwbG90LmdldEF0dHJpYnV0ZSgneScpKTtcbiAgICBpZih0aGlzLm9kZENsaWNrKXtcbiAgICAgIHRoaXMuc3RhcnRCbG9jayA9IHBsb3Q7XG4gICAgICBwbG90LnN0eWxlLmJhY2tncm91bmQgPSAnI2ZiYmYxMic7XG4gICAgICB0aGlzLnN0YXJ0ID0ge3gsIHl9O1xuICAgICAgdGhpcy5lbmRQb2ludEhlYWQudGV4dENvbnRlbnQgPSBgU2VsZWN0IFNoaXAgJHt0aGlzLmNvdW50fSdzIEVuZGluZyBQb2ludGBcbiAgICAgIHRoaXMuc3RhcnRQb2ludFR4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5lbmRQb2ludFR4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMub2RkQ2xpY2sgPSBmYWxzZTsgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVuZCA9IHt4LCB5fTtcbiAgICBsZXQgbGVuID0gdGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCArIDE7XG4gICAgbGV0IGlzUGxhY2VkID0gdGhpcy5nYi5wbGFjZSh0aGlzLnN0YXJ0LngsIHRoaXMuc3RhcnQueSwgbGVuKTtcbiAgICBpZihpc1BsYWNlZCkgdGhpcy5jb3VudCsrO1xuICAgIGVsc2UgdGhpcy5zdGFydEJsb2NrLnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSc7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5jcmVhdGVyQm9hcmQsIHRoaXMuZ2IsIHRydWUpO1xuICAgIHRoaXMuc3RhcnRQb2ludEhlYWQudGV4dENvbnRlbnQgPSBgU2VsZWN0IFNoaXAgJHt0aGlzLmNvdW50fSdzIFN0YXJ0aW5nIFBvaW50YDtcbiAgICB0aGlzLnN0YXJ0UG9pbnRUeHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5lbmRQb2ludFR4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMub2RkQ2xpY2sgPSB0cnVlO1xuICAgIGlmKHRoaXMuY291bnQ+NSl7XG4gICAgICB0aGlzLnN0YXJ0UG9pbnRIZWFkLnRleHRDb250ZW50PWBTaGlwIExpbWl0IFJlYWNoZWQhYDtcbiAgICAgIHRoaXMuc3RhcnRQb2ludENvbnQuaW5uZXJIVE1MPWB5b3UgY2FuJ3QgcGxhY2UgbW9yZSB0aGFuIDUgc2hpcHMuIE5vdyB5b3UgbWF5IHByb2NlZWQgdG8gXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9wX3BsYXlfYnRuXCI+UGxheT4+PC9idXR0b24+XG4gICAgICAgICAgICA8YnI+KGNsaWNrIHBsYXkgYnV0dG9uIHRvIHN0YXJ0KWA7XG4gICAgICB0aGlzLmRvbVJlbG9hZCgpO1xuICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgdGhpcy5iaW5kRXZlbnRSZWxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGxheUJ0bkNsaWNrKCl7XG4gICAgdGhpcy5jcmVhdGVyTGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5pbkxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIFBsYXlncm91bmQuaW5pdCgpO1xuICB9XG59IiwiaW1wb3J0IFBsYXlncm91bmQgZnJvbSBcIi4vcGxheWdyb3VuZFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZXRpbmdze1xuICBzdGF0aWMgaW5pdChuYW1lKXtcbiAgICB0aGlzLnBsYXllciA9IG5hbWU7XG4gICAgdGhpcy5kb21DYWNoZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5iaW5kRXZlbnQoKTtcbiAgfVxuICBzdGF0aWMgcmVuZGVyKCl7XG4gICAgdGhpcy5ncmVldGluZ01lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHt0aGlzLnBsYXllcn0gV29uIFRoZSBNYXRjaGA7XG4gICAgdGhpcy5ncmVldGluZ3NMYXlvdXQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICB0aGlzLnNldEdpZigpO1xuICB9XG4gIHN0YXRpYyBkb21DYWNoZSgpe1xuICAgIHRoaXMuZ3JlZXRpbmdzTGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nc19sYXlvdXQnKTtcbiAgICB0aGlzLmdyZWV0aW5nR2lmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nc19sYXlvdXQgLmdpZiBpbWcnKTtcbiAgICB0aGlzLmdyZWV0aW5nTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZycpO1xuICAgIHRoaXMucmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZ3NfbGF5b3V0IC5yZXN0YXJ0X2J0bicpO1xuICAgIHRoaXMucmV2aWV3QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nc19sYXlvdXQgLnJldmlld19idG4nKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50KCl7XG4gICAgdGhpcy5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXN0YXJ0Q2xrKTtcbiAgICB0aGlzLnJldmlld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmV2aWV3Q2xrLmJpbmQodGhpcykpO1xuICB9XG4gIHN0YXRpYyBhc3luYyBzZXRHaWYoKXtcbiAgICBjb25zdCBrZXkgPSAodGhpcy5wbGF5ZXI9PSdBSScpPyAnc2FkJzogJ2hhcHB5J1xuICAgIGNvbnN0IGFwaUNvZGUgPSAnZU5TeVZTQlYxaDU2UWJRWk45VE5SNzNDT01uVXRSdlMnO1xuICAgIGNvbnN0IHJlcVVybCA9IGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9yYW5kb20/YXBpX2tleT0ke2FwaUNvZGV9JnRhZz0ke2tleX1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxVXJsKTtcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGdpZlVybCA9IHJlc0RhdGEuZGF0YS5pbWFnZXMuZG93bnNpemVkLnVybDtcbiAgICB0aGlzLmdyZWV0aW5nR2lmLnNyYyA9Z2lmVXJsO1xuICAgIHRoaXMuZ3JlZXRpbmdHaWYuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gIH1cbiAgc3RhdGljIHJlc3RhcnRDbGsoKXtcbiAgICBjb25zb2xlLmxvZyhcInJlc3RhcnRcIilcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuICBzdGF0aWMgcmV2aWV3Q2xrKCl7XG4gICAgdGhpcy5ncmVldGluZ3NMYXlvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsZXQgY2xvbmVCb2FyZCA9IFBsYXlncm91bmQuYWlCb2FyZC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgUGxheWdyb3VuZC5ib2FyZDEucmVwbGFjZUNoaWxkKGNsb25lQm9hcmQsIFBsYXlncm91bmQuYWlCb2FyZCk7XG4gICAgUGxheWdyb3VuZC5yZXZlYWxCdG4uc3R5bGUuZGlzcGxheT0nYmxvY2snO1xuICB9XG59IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi4vbW9kdWxlcy9HYW1lQm9hcmRcIjtcbmltcG9ydCBDcmVhdGVTaGlwIGZyb20gXCIuL2NyZWF0ZVNoaXBzXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCBBSSBmcm9tIFwiLi4vbW9kdWxlcy9BSS9haVwiO1xuaW1wb3J0IEdyZWV0aW5ncyBmcm9tIFwiLi9ncmVldGluZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWdyb3VuZHtcbiAgc3RhdGljIGluaXQoKXtcbiAgICB0aGlzLnBsYXllckRhdGEgPSBDcmVhdGVTaGlwLmdiO1xuICAgIHRoaXMuYWkgPSBuZXcgQUkoKTtcbiAgICB0aGlzLmFpRGF0YSA9IHRoaXMuYWkuZ2I7XG4gICAgdGhpcy5kb21DYWNoZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5iaW5kRXZlbnQoKTtcbiAgfVxuICBzdGF0aWMgZG9tQ2FjaGUoKXtcbiAgICB0aGlzLm91dExheW91dCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0ZXJfbGF5b3V0Jyk7XG4gICAgdGhpcy5pbkxheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcl9sYXlvdXQnKTtcbiAgICB0aGlzLmJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZDEnKTtcbiAgICB0aGlzLmJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZDInKTtcbiAgICB0aGlzLmFpQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQxIC5ib2FyZCcpO1xuICAgIHRoaXMucGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQyIC5ib2FyZCcpO1xuICAgIHRoaXMucmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0X2J0bicpO1xuICAgIHRoaXMuZ3JlZXRpbmdzTGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nc19sYXlvdXQnKTtcbiAgICB0aGlzLmdyZWV0aW5nc1R4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZycpO1xuICAgIHRoaXMucmV2ZWFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyX2xheW91dCAucmV2ZWFsJyk7XG4gIH1cbiAgc3RhdGljIHJlbmRlcigpe1xuICAgIEJvYXJkLmJvYXJkQ3JlYXRlKHRoaXMuYWlCb2FyZCk7XG4gICAgQm9hcmQuYm9hcmRDcmVhdGUodGhpcy5wbGF5ZXJCb2FyZCk7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5haUJvYXJkLnBhcmVudEVsZW1lbnQsIHRoaXMuYWlEYXRhLCBmYWxzZSk7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5wbGF5ZXJCb2FyZC5wYXJlbnRFbGVtZW50LCB0aGlzLnBsYXllckRhdGEsIHRydWUpO1xuICAgIHRoaXMuZG9tUmVsb2FkKCk7XG4gIH1cbiAgc3RhdGljIGRvbVJlbG9hZCgpe1xuICAgIHRoaXMuYjFQbG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkMSAucGxvdCcpO1xuICB9XG4gIHN0YXRpYyBiaW5kRXZlbnQoKXtcbiAgICB0aGlzLmIxUGxvdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGhpcy5wbG90Q2xpY2suYmluZCh0aGlzLCBlKSlcbiAgICB9KVxuICAgIHRoaXMucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzdGFydENsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMucmV2ZWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXZlYWxDbGsuYmluZCh0aGlzKSk7XG4gIH1cbiAgc3RhdGljIHBsb3RDbGljayhwbG90KXtcbiAgICBpZihwbG90Lmhhc0F0dHJpYnV0ZSgnY2xpY2tlZCcpKSByZXR1cm47XG4gICAgcGxvdC5zZXRBdHRyaWJ1dGUoJ2NsaWNrZWQnLCB0cnVlKTtcbiAgICBsZXQgeCA9IHBsb3QuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gICAgbGV0IHkgPSBwbG90LmdldEF0dHJpYnV0ZSgneScpO1xuICAgIHRoaXMuYWlEYXRhLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5haUJvYXJkLnBhcmVudEVsZW1lbnQsIHRoaXMuYWlEYXRhLCBmYWxzZSk7XG4gICAgaWYodGhpcy5haURhdGEuaXNBbGxTaW5rKCkpIEdyZWV0aW5ncy5pbml0KCdQbGF5ZXInKTtcbiAgICB0aGlzLmFpLm1vdmUodGhpcy5wbGF5ZXJEYXRhKTtcbiAgICBCb2FyZC5ib2FyZFJlbmRlcih0aGlzLnBsYXllckJvYXJkLnBhcmVudEVsZW1lbnQsIHRoaXMucGxheWVyRGF0YSwgdHJ1ZSk7XG4gICAgaWYodGhpcy5wbGF5ZXJEYXRhLmlzQWxsU2luaygpKSBHcmVldGluZ3MuaW5pdCgnQUknKTtcbiAgfVxuICBzdGF0aWMgcmVzdGFydENsaWNrKCl7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbiAgc3RhdGljIHJldmVhbENsaygpe1xuICAgIEJvYXJkLmJvYXJkUmVuZGVyKHRoaXMuYWlCb2FyZCwgdGhpcy5haURhdGEsIHRydWUpO1xuICB9XG59IiwiaW1wb3J0IFBsYXlncm91bmQgZnJvbSBcIi4vcGxheWdyb3VuZFwiO1xuaW1wb3J0IENyZWF0ZVNoaXAgZnJvbSBcIi4vY3JlYXRlU2hpcHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUl7XG4gIHN0YXRpYyBpbml0KCl7XG4gICAgQ3JlYXRlU2hpcC5pbml0KCk7XG4gIH1cbn0iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9HYW1lQm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuZ2IgPSBuZXcgR2FtZUJvYXJkKCdBSScpO1xuICAgIHRoaXMuYXV0b3BsYWNlKCk7XG4gICAgdGhpcy5maXJzdEhpdDtcbiAgICB0aGlzLmxlZnRXaW5nO1xuICAgIHRoaXMucmlnaHRXaW5nO1xuICB9XG4gIGF1dG9wbGFjZSgpe1xuICAgIHdoaWxlKHRoaXMuZ2Iuc2hpcHMubGVuZ3RoPDUpe1xuICAgICAgbGV0IGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCkrMztcbiAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgIHRoaXMuZ2IucGxhY2UoeCwgeSwgbCk7XG4gICAgfVxuICB9XG4gIG1vdmUoYm9hcmQpe1xuICAgIGxldCB4LCB5O1xuICAgIFt4LCB5XSA9IHRoaXMucGlja01vdmUoYm9hcmQuYm9hcmQpO1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYodGhpcy5pc0l0U2luayhib2FyZC5ib2FyZCwgeCwgeSkpe1xuICAgICAgdGhpcy5maXJzdEhpdCA9IHRoaXMucmlnaHRXaW5nID0gdGhpcy5sZWZ0V2luZyA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYodGhpcy5pc0l0SGl0KGJvYXJkLmJvYXJkLCB4LCB5KSl7XG4gICAgICBpZih0aGlzLmZpcnN0SGl0KXtcbiAgICAgICAgaWYodGhpcy5yaWdodFdpbmcpIHRoaXMucmlnaHRXaW5nPVt0aGlzLnJpZ2h0V2luZ1swXSsxLCB0aGlzLnJpZ2h0V2luZ1sxXV1cbiAgICAgICAgZWxzZSBpZih0aGlzLmxlZnRXaW5nKSB0aGlzLmxlZnRXaW5nPVt0aGlzLmxlZnRXaW5nWzBdLTEsIHRoaXMubGVmdFdpbmdbMV1dXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5maXJzdEhpdCA9IFt4LCB5XTtcbiAgICAgICAgdGhpcy5yaWdodFdpbmcgPSBbeCsxLCB5XTtcbiAgICAgICAgdGhpcy5sZWZ0V2luZyA9IFt4LTEsIHldO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgaWYodGhpcy5maXJzdEhpdCl7XG4gICAgICAgIGlmKHRoaXMucmlnaHRXaW5nKSB0aGlzLnJpZ2h0V2luZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkTW92ZShib2FyZCwgeCwgeSl7XG4gICAgaWYoeDwwIHx8IHg+OSB8fCB5PDAgfHwgeT45KSByZXR1cm4gZmFsc2U7XG4gICAgaWYoIWJvYXJkW3hdW3ldKSByZXR1cm4gdHJ1ZTtcbiAgICBpZihib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgZm9yKGxldCBzaGlwIG9mIGJvYXJkW3hdW3ldLmJvZHkpXG4gICAgICBpZihzaGlwLmNvb3JkLnggPT0geCAmJiAhc2hpcC5oaXQpIHJldHVybiB0cnVlO1xuICAgIH1yZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0l0SGl0KGJvYXJkLCB4LCB5KXtcbiAgICByZXR1cm4gKGJvYXJkW3hdW3ldaW5zdGFuY2VvZiBTaGlwICYmICF0aGlzLmlzVmFsaWRNb3ZlKGJvYXJkLCB4LCB5KSk7XG4gIH1cblxuICBpc0l0U2luayhib2FyZCwgeCwgeSl7XG4gICAgcmV0dXJuIChib2FyZFt4XVt5XWluc3RhbmNlb2YgU2hpcCAmJiBib2FyZFt4XVt5XS5pc1NpbmsoKSk7XG4gIH1cbiAgcGlja01vdmUoYm9hcmQpe1xuICAgIGxldCB4LCB5O1xuICAgIGRve1xuICAgICAgaWYodGhpcy5maXJzdEhpdCl7XG4gICAgICAgIGlmKHRoaXMucmlnaHRXaW5nKSB7XG4gICAgICAgICAgW3gseV09dGhpcy5yaWdodFdpbmc7XG4gICAgICAgICAgaWYoIXRoaXMuaXNWYWxpZE1vdmUoYm9hcmQsIHgsIHkpKXtcbiAgICAgICAgICAgIHRoaXMucmlnaHRXaW5nPXVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5sZWZ0V2luZykgW3gseV09dGhpcy5sZWZ0V2luZztcbiAgICAgIH1lbHNle1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICB9XG4gICAgfXdoaWxlKCF0aGlzLmlzVmFsaWRNb3ZlKGJvYXJkLCB4LCB5KSk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxufSIsImltcG9ydCBTaGlwIGZyb20gJy4uL21vZHVsZXMvc2hpcCdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmR7XG4gIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihuYW1lKTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKCkubWFwKCgpPT5uZXcgQXJyYXkoMTApLmZpbGwoKSk7XG4gICAgdGhpcy5zaGlwcyA9IG5ldyBBcnJheSgpO1xuICB9XG4gIHBsYWNlKHgsIHksIGxlbil7XG4gICAgaWYodGhpcy5zaGlwcy5sZW5ndGg+PTUgfHwgbGVuPD0yIHx8IGxlbj42KSByZXR1cm4gZmFsc2U7XG4gICAgaWYoeCtsZW4+MTAgfHwgeT4xMCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMuYm9hcmRbeF1beV0pIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY29sbCA9ICh0aGlzLmlzQ29sbG9pZGFsKHgsIHksIGxlbikpXG4gICAgaWYoY29sbCkgcmV0dXJuO1xuICAgIGxldCBzID0gbmV3IFNoaXAoeCwgeSwgbGVuKTtcbiAgICB0aGlzLnNoaXBzLnB1c2gocyk7XG4gICAgZm9yKGxldCBpPXg7IGk8eCtsZW47IGkrKylcbiAgICB0aGlzLmJvYXJkW2ldW3ldID0gcztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWNlaXZlQXR0YWNrKHgsIHkpe1xuICAgIGxldCBzID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICBpZihzIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICBzLmhpdCh4LHkpOyByZXR1cm47XG4gICAgfXRoaXMuYm9hcmRbeF1beV0gPSAxO1xuICB9XG4gIGlzQWxsU2luaygpe1xuICAgIGZvcihsZXQgcyBvZiB0aGlzLnNoaXBzKVxuICAgIGlmKCFzLmlzU2luaygpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNDb2xsb2lkYWwoeCwgeSwgbGVuKXtcbiAgICBmb3IobGV0IHMgb2YgdGhpcy5zaGlwcyl7XG4gICAgICBpZihzLmJvZHlbMF0uY29vcmQueT09eSl7XG4gICAgICAgIGxldCBuZXdTdGFydCA9IHg7XG4gICAgICAgIGxldCBuZXdFbmQgPSB4K2xlbi0xO1xuICAgICAgICBsZXQgc3RhcnQgPSBzLmJvZHlbMF0uY29vcmQueDtcbiAgICAgICAgbGV0IGVuZCA9IHMuYm9keVswXS5jb29yZC54ICsgcy5sZW4gLSAxO1xuICAgICAgICBpZigobmV3U3RhcnQgPCBzdGFydCkgJiYgKG5ld0VuZCA+PSBzdGFydCkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZigobmV3U3RhcnQgPiBzdGFydCkgJiYgKG5ld1N0YXJ0PD1lbmQpKSByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwe1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBsKXtcbiAgICB0aGlzLmxlbiA9IGw7XG4gICAgdGhpcy5ib2R5ID0gbmV3IEFycmF5KCk7XG4gICAgZm9yKGxldCBpPTA7IGk8bDsgaSsrKXtcbiAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQYXJ0KHgraSwgeSkpO1xuICAgIH1cbiAgfVxuICBpc1NpbmsoKXtcbiAgICBmb3IobGV0IHggb2YgdGhpcy5ib2R5KXtcbiAgICAgIGlmICh4LmhpdCA9PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIH1yZXR1cm4gdHJ1ZTtcbiAgfVxuICBoaXQoeCwgeSl7XG4gICAgZm9yKGxldCBwIG9mIHRoaXMuYm9keSl7XG4gICAgICBpZihwLmNvb3JkLng9PXggJiYgcC5jb29yZC55PT15KVxuICAgICAgcC5oaXQ9dHJ1ZTtcbiAgICB9XG4gIH1cbn1cbmNsYXNzIFBhcnR7XG4gIGNvbnN0cnVjdG9yKHgsIHkpe1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgdGhpcy5jb29yZCA9IHt4LCB5fTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHVpIGZyb20gJy4vVUkvdWknXG5cbnVpLmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=