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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  text-align: center;\n  box-sizing: border-box;\n}\nbody, html{\n  padding:0;\n  margin:0;\n  height: 100%;\n}\n.outer_layout{\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n.inner_layout{\n  width:100%;\n  /* uncomment */\n  /* display: none; */\n  /* delete */\n  display: flex;\n  flex-wrap: wrap;\n  gap:1rem;\n  justify-content:space-evenly;\n}\n.board, .creater_board{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 3px solid red;\n  border-radius: 0.2rem;\n}\n.plot{\n  border: 1px solid red;\n}\n.plot:hover{\n  background: rgb(204, 204, 204);\n}\n.demo{\n  color:rgb(69, 216, 249);\n}\n.creater_board{\n  height: 400px;\n  width: 400px;\n}\n.creater_layout{\n  /* uncomment */\n  /* display: grid; */\n  /* delete */\n  display:none;\n  place-items: center;\n  gap: 2em;\n}\nbutton{\n  height: fit-content;\n  background-color: #1a73e8;\n  color: white;\n  border-radius: 2px;\n  border:none;\n  padding:0.3rem;\n}\n.heading{\n  font-size: 2rem;\n  padding: 1rem;\n}\n.end_point_txt{\n  display:none;\n}\nbutton:hover{\n  border: 1px solid #00357a;\n  box-shadow: inset;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,QAAQ;EACR,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,UAAU;EACV,cAAc;EACd,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,eAAe;EACf,QAAQ;EACR,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,cAAc;AAChB;AACA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["*{\n  text-align: center;\n  box-sizing: border-box;\n}\nbody, html{\n  padding:0;\n  margin:0;\n  height: 100%;\n}\n.outer_layout{\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n.inner_layout{\n  width:100%;\n  /* uncomment */\n  /* display: none; */\n  /* delete */\n  display: flex;\n  flex-wrap: wrap;\n  gap:1rem;\n  justify-content:space-evenly;\n}\n.board, .creater_board{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 3px solid red;\n  border-radius: 0.2rem;\n}\n.plot{\n  border: 1px solid red;\n}\n.plot:hover{\n  background: rgb(204, 204, 204);\n}\n.demo{\n  color:rgb(69, 216, 249);\n}\n.creater_board{\n  height: 400px;\n  width: 400px;\n}\n.creater_layout{\n  /* uncomment */\n  /* display: grid; */\n  /* delete */\n  display:none;\n  place-items: center;\n  gap: 2em;\n}\nbutton{\n  height: fit-content;\n  background-color: #1a73e8;\n  color: white;\n  border-radius: 2px;\n  border:none;\n  padding:0.3rem;\n}\n.heading{\n  font-size: 2rem;\n  padding: 1rem;\n}\n.end_point_txt{\n  display:none;\n}\nbutton:hover{\n  border: 1px solid #00357a;\n  box-shadow: inset;\n}"],"sourceRoot":""}]);
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
  static boardRender(board, data){
    for(let ship of data.ships){
      for(let part of ship.body){
        let tar = this.plotSelector(board, part);
        if(part.hit)
        tar.style.background = 'rgb(241, 107, 92)'
        else if(board.className!='board1')
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
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.createrBoard, this.gb);
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
    this.inLayout.style.display = 'flex';
    _playground__WEBPACK_IMPORTED_MODULE_0__["default"].init();
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
  }
  static render(){
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardCreate(this.aiBoard);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardCreate(this.playerBoard);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.aiBoard.parentElement, this.aiData);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.playerBoard.parentElement, this.playerData);
    this.domReload();
  }
  static domReload(){
    this.b1Plot = document.querySelectorAll('.board1 .plot');
  }
  static bindEvent(){
    this.b1Plot.forEach(e => {
      e.addEventListener('click',this.plotClick.bind(this, e))
    })
  }
  static plotClick(plot){
    if(plot.hasAttribute('clicked')) return;
    plot.setAttribute('clicked', true);
    let x = plot.getAttribute('x');
    let y = plot.getAttribute('y');
    this.aiData.receiveAttack(x, y);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.aiBoard.parentElement, this.aiData);
    if(this.aiData.isAllSink()) alert("Player WON!");
    this.ai.move(this.playerData);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.playerBoard.parentElement, this.playerData);
    if(this.playerData.isAllSink()) alert("AI WON!");
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
    if(this.ships.length>=5 || len<=0) return false;
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
/* harmony import */ var _UI_playground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/playground */ "./src/UI/playground.js");


// delete


// uncomment
// ui.init();

//delete
_UI_playground__WEBPACK_IMPORTED_MODULE_2__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSwyREFBZSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvY3JlYXRlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS9wbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0FJL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksIGh0bWx7XFxuICBwYWRkaW5nOjA7XFxuICBtYXJnaW46MDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm91dGVyX2xheW91dHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW5uZXJfbGF5b3V0e1xcbiAgd2lkdGg6MTAwJTtcXG4gIC8qIHVuY29tbWVudCAqL1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIC8qIGRlbGV0ZSAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDoxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuLmJvYXJkLCAuY3JlYXRlcl9ib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcbi5wbG90e1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG4ucGxvdDpob3ZlcntcXG4gIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuLmRlbW97XFxuICBjb2xvcjpyZ2IoNjksIDIxNiwgMjQ5KTtcXG59XFxuLmNyZWF0ZXJfYm9hcmR7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4uY3JlYXRlcl9sYXlvdXR7XFxuICAvKiB1bmNvbW1lbnQgKi9cXG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxuICAvKiBkZWxldGUgKi9cXG4gIGRpc3BsYXk6bm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuYnV0dG9ue1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTczZTg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6bm9uZTtcXG4gIHBhZGRpbmc6MC4zcmVtO1xcbn1cXG4uaGVhZGluZ3tcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5lbmRfcG9pbnRfdHh0e1xcbiAgZGlzcGxheTpub25lO1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTdhO1xcbiAgYm94LXNoYWRvdzogaW5zZXQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksIGh0bWx7XFxuICBwYWRkaW5nOjA7XFxuICBtYXJnaW46MDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm91dGVyX2xheW91dHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW5uZXJfbGF5b3V0e1xcbiAgd2lkdGg6MTAwJTtcXG4gIC8qIHVuY29tbWVudCAqL1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIC8qIGRlbGV0ZSAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDoxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuLmJvYXJkLCAuY3JlYXRlcl9ib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcbi5wbG90e1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG4ucGxvdDpob3ZlcntcXG4gIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuLmRlbW97XFxuICBjb2xvcjpyZ2IoNjksIDIxNiwgMjQ5KTtcXG59XFxuLmNyZWF0ZXJfYm9hcmR7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4uY3JlYXRlcl9sYXlvdXR7XFxuICAvKiB1bmNvbW1lbnQgKi9cXG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxuICAvKiBkZWxldGUgKi9cXG4gIGRpc3BsYXk6bm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuYnV0dG9ue1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTczZTg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6bm9uZTtcXG4gIHBhZGRpbmc6MC4zcmVtO1xcbn1cXG4uaGVhZGluZ3tcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5lbmRfcG9pbnRfdHh0e1xcbiAgZGlzcGxheTpub25lO1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTdhO1xcbiAgYm94LXNoYWRvdzogaW5zZXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJke1xuICBzdGF0aWMgYm9hcmRSZW5kZXIoYm9hcmQsIGRhdGEpe1xuICAgIGZvcihsZXQgc2hpcCBvZiBkYXRhLnNoaXBzKXtcbiAgICAgIGZvcihsZXQgcGFydCBvZiBzaGlwLmJvZHkpe1xuICAgICAgICBsZXQgdGFyID0gdGhpcy5wbG90U2VsZWN0b3IoYm9hcmQsIHBhcnQpO1xuICAgICAgICBpZihwYXJ0LmhpdClcbiAgICAgICAgdGFyLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDI0MSwgMTA3LCA5MiknXG4gICAgICAgIGVsc2UgaWYoYm9hcmQuY2xhc3NOYW1lIT0nYm9hcmQxJylcbiAgICAgICAgdGFyLnN0eWxlLmJhY2tncm91bmQgPSAnIzI3OTg0NydcbiAgICAgIH1cbiAgICAgIGlmKHNoaXAuaXNTaW5rKCkpIHNoaXAuYm9keS5mb3JFYWNoKHBhcnQgPT4ge1xuICAgICAgICBsZXQgdGFyID0gdGhpcy5wbG90U2VsZWN0b3IoYm9hcmQsIHBhcnQgKVxuICAgICAgICB0YXIuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjUzLCA0NCwgMjEpJ1xuICAgICAgfSlcbiAgICB9XG4gICAgZm9yKGxldCB4PTA7IHg8MTA7IHgrKylcbiAgICBmb3IobGV0IHk9MDsgeTwxMDsgeSsrKXtcbiAgICAgIGlmKGRhdGEuYm9hcmRbeF1beV09PTEpe1xuICAgICAgICBsZXQgdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmQuY2xhc3NOYW1lfSAucGxvdFt4PVwiJHt4fVwiXVt5PVwiJHt5fVwiXWApO1xuICAgICAgICB0YXIuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoNjksIDIxNiwgMjQ5KSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwbG90U2VsZWN0b3IoYm9hcmQsIHBhcnQpe1xuICAgIGxldCB4ID0gcGFydC5jb29yZC54O1xuICAgIGxldCB5ID0gcGFydC5jb29yZC55O1xuICAgIGxldCB0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZC5jbGFzc05hbWV9IC5wbG90W3g9XCIke3h9XCJdW3k9XCIke3l9XCJdYCk7XG4gICAgcmV0dXJuIHRhcjtcbiAgfVxuICBzdGF0aWMgYm9hcmRDcmVhdGUoYm9hcmQpe1xuICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspXG4gICAgZm9yKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICBsZXQgcGxvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxvdC5jbGFzc05hbWUgPSAncGxvdCc7XG4gICAgICBwbG90LnNldEF0dHJpYnV0ZSgneCcsIGopO1xuICAgICAgcGxvdC5zZXRBdHRyaWJ1dGUoJ3knLCBpKTtcbiAgICAgIGJvYXJkLmFwcGVuZChwbG90KTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgUGxheWdyb3VuZCBmcm9tIFwiLi9wbGF5Z3JvdW5kXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9tb2R1bGVzL0dhbWVCb2FyZFwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVNoaXB7XG4gIHN0YXRpYyBpbml0KCl7XG4gICAgdGhpcy5kb21DYWNoZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5iaW5kRXZlbnQoKTtcbiAgfVxuICBzdGF0aWMgcmVuZGVyKCl7XG4gICAgdGhpcy5nYiA9IG5ldyBHYW1lQm9hcmQoXCJQbGF5ZXJcIik7XG4gICAgQm9hcmQuYm9hcmRDcmVhdGUodGhpcy5jcmVhdGVyQm9hcmQpO1xuICAgIHRoaXMuZG9tUmVsb2FkKCk7XG4gIH1cbiAgc3RhdGljIGRvbUNhY2hlKCl7XG4gICAgdGhpcy5vdXRMYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0ZXJfbGF5b3V0Jyk7XG4gICAgdGhpcy5pbkxheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcl9sYXlvdXQnKTtcbiAgICB0aGlzLmNyZWF0ZXJMYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlcl9sYXlvdXQnKTtcbiAgICB0aGlzLmNyZWF0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyAuY3JlYXRlcl9ib2FyZCcpO1xuICAgIHRoaXMub2RkQ2xpY2sgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRQb2ludFR4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydF9wb2ludF90eHQnKTtcbiAgICB0aGlzLmVuZFBvaW50VHh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZF9wb2ludF90eHQnKTtcbiAgICB0aGlzLnN0YXJ0UG9pbnRIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X3BvaW50X3R4dCAuaGVhZGluZycpO1xuICAgIHRoaXMuZW5kUG9pbnRIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZF9wb2ludF90eHQgLmhlYWRpbmcnKTtcbiAgICB0aGlzLnN0YXJ0UG9pbnRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X3BvaW50X3R4dCAuY29udGVudCcpO1xuICAgIHRoaXMuYm90dG9tUGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b21fcGxheV9idG4nKTtcbiAgICB0aGlzLmNvdW50PTE7XG4gIH1cbiAgc3RhdGljIGRvbVJlbG9hZCgpe1xuICAgIHRoaXMucGxvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlYXRlcl9ib2FyZCAucGxvdCcpO1xuICAgIHRoaXMudG9wUGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BfcGxheV9idG4nKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50KCl7XG4gICAgdGhpcy5wbG90cy5mb3JFYWNoKGUgPT57XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgeCA9PiB0aGlzLnBsb3RDbGljayhlKSk7XG4gICAgfSlcbiAgICB0aGlzLmJvdHRvbVBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50UmVsb2FkKCl7XG4gICAgdGhpcy50b3BQbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wbGF5QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgcGxvdENsaWNrKHBsb3Qpe1xuICAgIGxldCB4ID0gcGFyc2VJbnQocGxvdC5nZXRBdHRyaWJ1dGUoJ3gnKSk7XG4gICAgbGV0IHkgPSBwYXJzZUludChwbG90LmdldEF0dHJpYnV0ZSgneScpKTtcbiAgICBpZih0aGlzLm9kZENsaWNrKXtcbiAgICAgIHRoaXMuc3RhcnRCbG9jayA9IHBsb3Q7XG4gICAgICBwbG90LnN0eWxlLmJhY2tncm91bmQgPSAnI2ZiYmYxMic7XG4gICAgICB0aGlzLnN0YXJ0ID0ge3gsIHl9O1xuICAgICAgdGhpcy5lbmRQb2ludEhlYWQudGV4dENvbnRlbnQgPSBgU2VsZWN0IFNoaXAgJHt0aGlzLmNvdW50fSdzIEVuZGluZyBQb2ludGBcbiAgICAgIHRoaXMuc3RhcnRQb2ludFR4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5lbmRQb2ludFR4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMub2RkQ2xpY2sgPSBmYWxzZTsgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVuZCA9IHt4LCB5fTtcbiAgICBsZXQgbGVuID0gdGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCArIDE7XG4gICAgbGV0IGlzUGxhY2VkID0gdGhpcy5nYi5wbGFjZSh0aGlzLnN0YXJ0LngsIHRoaXMuc3RhcnQueSwgbGVuKTtcbiAgICBpZihpc1BsYWNlZCkgdGhpcy5jb3VudCsrO1xuICAgIGVsc2UgdGhpcy5zdGFydEJsb2NrLnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSc7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5jcmVhdGVyQm9hcmQsIHRoaXMuZ2IpO1xuICAgIHRoaXMuc3RhcnRQb2ludEhlYWQudGV4dENvbnRlbnQgPSBgU2VsZWN0IFNoaXAgJHt0aGlzLmNvdW50fSdzIFN0YXJ0aW5nIFBvaW50YDtcbiAgICB0aGlzLnN0YXJ0UG9pbnRUeHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5lbmRQb2ludFR4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMub2RkQ2xpY2sgPSB0cnVlO1xuICAgIGlmKHRoaXMuY291bnQ+NSl7XG4gICAgICB0aGlzLnN0YXJ0UG9pbnRIZWFkLnRleHRDb250ZW50PWBTaGlwIExpbWl0IFJlYWNoZWQhYDtcbiAgICAgIHRoaXMuc3RhcnRQb2ludENvbnQuaW5uZXJIVE1MPWB5b3UgY2FuJ3QgcGxhY2UgbW9yZSB0aGFuIDUgc2hpcHMuIE5vdyB5b3UgbWF5IHByb2NlZWQgdG8gXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9wX3BsYXlfYnRuXCI+UGxheT4+PC9idXR0b24+XG4gICAgICAgICAgICA8YnI+KGNsaWNrIHBsYXkgYnV0dG9uIHRvIHN0YXJ0KWA7XG4gICAgICB0aGlzLmRvbVJlbG9hZCgpO1xuICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgdGhpcy5iaW5kRXZlbnRSZWxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGxheUJ0bkNsaWNrKCl7XG4gICAgdGhpcy5jcmVhdGVyTGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5pbkxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIFBsYXlncm91bmQuaW5pdCgpO1xuICB9XG59IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi4vbW9kdWxlcy9HYW1lQm9hcmRcIjtcbmltcG9ydCBDcmVhdGVTaGlwIGZyb20gXCIuL2NyZWF0ZVNoaXBzXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCBBSSBmcm9tIFwiLi4vbW9kdWxlcy9BSS9haVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5Z3JvdW5ke1xuICBzdGF0aWMgaW5pdCgpe1xuICAgIHRoaXMucGxheWVyRGF0YSA9IENyZWF0ZVNoaXAuZ2I7XG4gICAgdGhpcy5haSA9IG5ldyBBSSgpO1xuICAgIHRoaXMuYWlEYXRhID0gdGhpcy5haS5nYjtcbiAgICB0aGlzLmRvbUNhY2hlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG4gIHN0YXRpYyBkb21DYWNoZSgpe1xuICAgIHRoaXMub3V0TGF5b3V0ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXRlcl9sYXlvdXQnKTtcbiAgICB0aGlzLmluTGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyX2xheW91dCcpO1xuICAgIHRoaXMuYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkMScpO1xuICAgIHRoaXMuYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkMicpO1xuICAgIHRoaXMuYWlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZDEgLmJvYXJkJyk7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZDIgLmJvYXJkJyk7XG4gIH1cbiAgc3RhdGljIHJlbmRlcigpe1xuICAgIEJvYXJkLmJvYXJkQ3JlYXRlKHRoaXMuYWlCb2FyZCk7XG4gICAgQm9hcmQuYm9hcmRDcmVhdGUodGhpcy5wbGF5ZXJCb2FyZCk7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5haUJvYXJkLnBhcmVudEVsZW1lbnQsIHRoaXMuYWlEYXRhKTtcbiAgICBCb2FyZC5ib2FyZFJlbmRlcih0aGlzLnBsYXllckJvYXJkLnBhcmVudEVsZW1lbnQsIHRoaXMucGxheWVyRGF0YSk7XG4gICAgdGhpcy5kb21SZWxvYWQoKTtcbiAgfVxuICBzdGF0aWMgZG9tUmVsb2FkKCl7XG4gICAgdGhpcy5iMVBsb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQxIC5wbG90Jyk7XG4gIH1cbiAgc3RhdGljIGJpbmRFdmVudCgpe1xuICAgIHRoaXMuYjFQbG90LmZvckVhY2goZSA9PiB7XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLnBsb3RDbGljay5iaW5kKHRoaXMsIGUpKVxuICAgIH0pXG4gIH1cbiAgc3RhdGljIHBsb3RDbGljayhwbG90KXtcbiAgICBpZihwbG90Lmhhc0F0dHJpYnV0ZSgnY2xpY2tlZCcpKSByZXR1cm47XG4gICAgcGxvdC5zZXRBdHRyaWJ1dGUoJ2NsaWNrZWQnLCB0cnVlKTtcbiAgICBsZXQgeCA9IHBsb3QuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gICAgbGV0IHkgPSBwbG90LmdldEF0dHJpYnV0ZSgneScpO1xuICAgIHRoaXMuYWlEYXRhLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5haUJvYXJkLnBhcmVudEVsZW1lbnQsIHRoaXMuYWlEYXRhKTtcbiAgICBpZih0aGlzLmFpRGF0YS5pc0FsbFNpbmsoKSkgYWxlcnQoXCJQbGF5ZXIgV09OIVwiKTtcbiAgICB0aGlzLmFpLm1vdmUodGhpcy5wbGF5ZXJEYXRhKTtcbiAgICBCb2FyZC5ib2FyZFJlbmRlcih0aGlzLnBsYXllckJvYXJkLnBhcmVudEVsZW1lbnQsIHRoaXMucGxheWVyRGF0YSk7XG4gICAgaWYodGhpcy5wbGF5ZXJEYXRhLmlzQWxsU2luaygpKSBhbGVydChcIkFJIFdPTiFcIik7XG4gIH1cbn0iLCJpbXBvcnQgUGxheWdyb3VuZCBmcm9tIFwiLi9wbGF5Z3JvdW5kXCI7XG5pbXBvcnQgQ3JlYXRlU2hpcCBmcm9tIFwiLi9jcmVhdGVTaGlwc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSXtcbiAgc3RhdGljIGluaXQoKXtcbiAgICBDcmVhdGVTaGlwLmluaXQoKTtcbiAgfVxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL0dhbWVCb2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUl7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5nYiA9IG5ldyBHYW1lQm9hcmQoJ0FJJyk7XG4gICAgdGhpcy5hdXRvcGxhY2UoKTtcbiAgICB0aGlzLmZpcnN0SGl0O1xuICAgIHRoaXMubGVmdFdpbmc7XG4gICAgdGhpcy5yaWdodFdpbmc7XG4gIH1cbiAgYXV0b3BsYWNlKCl7XG4gICAgd2hpbGUodGhpcy5nYi5zaGlwcy5sZW5ndGg8NSl7XG4gICAgICBsZXQgbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KSszO1xuICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgdGhpcy5nYi5wbGFjZSh4LCB5LCBsKTtcbiAgICB9XG4gIH1cbiAgbW92ZShib2FyZCl7XG4gICAgbGV0IHgsIHk7XG4gICAgW3gsIHldID0gdGhpcy5waWNrTW92ZShib2FyZC5ib2FyZCk7XG4gICAgYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICBpZih0aGlzLmlzSXRTaW5rKGJvYXJkLmJvYXJkLCB4LCB5KSl7XG4gICAgICB0aGlzLmZpcnN0SGl0ID0gdGhpcy5yaWdodFdpbmcgPSB0aGlzLmxlZnRXaW5nID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZih0aGlzLmlzSXRIaXQoYm9hcmQuYm9hcmQsIHgsIHkpKXtcbiAgICAgIGlmKHRoaXMuZmlyc3RIaXQpe1xuICAgICAgICBpZih0aGlzLnJpZ2h0V2luZykgdGhpcy5yaWdodFdpbmc9W3RoaXMucmlnaHRXaW5nWzBdKzEsIHRoaXMucmlnaHRXaW5nWzFdXVxuICAgICAgICBlbHNlIGlmKHRoaXMubGVmdFdpbmcpIHRoaXMubGVmdFdpbmc9W3RoaXMubGVmdFdpbmdbMF0tMSwgdGhpcy5sZWZ0V2luZ1sxXV1cbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLmZpcnN0SGl0ID0gW3gsIHldO1xuICAgICAgICB0aGlzLnJpZ2h0V2luZyA9IFt4KzEsIHldO1xuICAgICAgICB0aGlzLmxlZnRXaW5nID0gW3gtMSwgeV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBpZih0aGlzLmZpcnN0SGl0KXtcbiAgICAgICAgaWYodGhpcy5yaWdodFdpbmcpIHRoaXMucmlnaHRXaW5nID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWRNb3ZlKGJvYXJkLCB4LCB5KXtcbiAgICBpZih4PDAgfHwgeD45IHx8IHk8MCB8fCB5PjkpIHJldHVybiBmYWxzZTtcbiAgICBpZighYm9hcmRbeF1beV0pIHJldHVybiB0cnVlO1xuICAgIGlmKGJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICBmb3IobGV0IHNoaXAgb2YgYm9hcmRbeF1beV0uYm9keSlcbiAgICAgIGlmKHNoaXAuY29vcmQueCA9PSB4ICYmICFzaGlwLmhpdCkgcmV0dXJuIHRydWU7XG4gICAgfXJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzSXRIaXQoYm9hcmQsIHgsIHkpe1xuICAgIHJldHVybiAoYm9hcmRbeF1beV1pbnN0YW5jZW9mIFNoaXAgJiYgIXRoaXMuaXNWYWxpZE1vdmUoYm9hcmQsIHgsIHkpKTtcbiAgfVxuXG4gIGlzSXRTaW5rKGJvYXJkLCB4LCB5KXtcbiAgICByZXR1cm4gKGJvYXJkW3hdW3ldaW5zdGFuY2VvZiBTaGlwICYmIGJvYXJkW3hdW3ldLmlzU2luaygpKTtcbiAgfVxuICBwaWNrTW92ZShib2FyZCl7XG4gICAgbGV0IHgsIHk7XG4gICAgZG97XG4gICAgICBpZih0aGlzLmZpcnN0SGl0KXtcbiAgICAgICAgaWYodGhpcy5yaWdodFdpbmcpIHtcbiAgICAgICAgICBbeCx5XT10aGlzLnJpZ2h0V2luZztcbiAgICAgICAgICBpZighdGhpcy5pc1ZhbGlkTW92ZShib2FyZCwgeCwgeSkpe1xuICAgICAgICAgICAgdGhpcy5yaWdodFdpbmc9dW5kZWZpbmVkO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLmxlZnRXaW5nKSBbeCx5XT10aGlzLmxlZnRXaW5nO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgIH1cbiAgICB9d2hpbGUoIXRoaXMuaXNWYWxpZE1vdmUoYm9hcmQsIHgsIHkpKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG59IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi4vbW9kdWxlcy9zaGlwJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZHtcbiAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUpO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkoMTApLmZpbGwoKS5tYXAoKCk9Pm5ldyBBcnJheSgxMCkuZmlsbCgpKTtcbiAgICB0aGlzLnNoaXBzID0gbmV3IEFycmF5KCk7XG4gIH1cbiAgcGxhY2UoeCwgeSwgbGVuKXtcbiAgICBpZih0aGlzLnNoaXBzLmxlbmd0aD49NSB8fCBsZW48PTApIHJldHVybiBmYWxzZTtcbiAgICBpZih4K2xlbj4xMCB8fCB5PjEwKSByZXR1cm4gZmFsc2U7XG4gICAgaWYodGhpcy5ib2FyZFt4XVt5XSkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBjb2xsID0gKHRoaXMuaXNDb2xsb2lkYWwoeCwgeSwgbGVuKSlcbiAgICBpZihjb2xsKSByZXR1cm47XG4gICAgbGV0IHMgPSBuZXcgU2hpcCh4LCB5LCBsZW4pO1xuICAgIHRoaXMuc2hpcHMucHVzaChzKTtcbiAgICBmb3IobGV0IGk9eDsgaTx4K2xlbjsgaSsrKVxuICAgIHRoaXMuYm9hcmRbaV1beV0gPSBzO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soeCwgeSl7XG4gICAgbGV0IHMgPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgIGlmKHMgaW5zdGFuY2VvZiBTaGlwKXtcbiAgICAgIHMuaGl0KHgseSk7IHJldHVybjtcbiAgICB9dGhpcy5ib2FyZFt4XVt5XSA9IDE7XG4gIH1cbiAgaXNBbGxTaW5rKCl7XG4gICAgZm9yKGxldCBzIG9mIHRoaXMuc2hpcHMpXG4gICAgaWYoIXMuaXNTaW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpc0NvbGxvaWRhbCh4LCB5LCBsZW4pe1xuICAgIGZvcihsZXQgcyBvZiB0aGlzLnNoaXBzKXtcbiAgICAgIGlmKHMuYm9keVswXS5jb29yZC55PT15KXtcbiAgICAgICAgbGV0IG5ld1N0YXJ0ID0geDtcbiAgICAgICAgbGV0IG5ld0VuZCA9IHgrbGVuLTE7XG4gICAgICAgIGxldCBzdGFydCA9IHMuYm9keVswXS5jb29yZC54O1xuICAgICAgICBsZXQgZW5kID0gcy5ib2R5WzBdLmNvb3JkLnggKyBzLmxlbiAtIDE7XG4gICAgICAgIGlmKChuZXdTdGFydCA8IHN0YXJ0KSAmJiAobmV3RW5kID49IHN0YXJ0KSkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmKChuZXdTdGFydCA+IHN0YXJ0KSAmJiAobmV3U3RhcnQ8PWVuZCkpIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcntcbiAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGwpe1xuICAgIHRoaXMubGVuID0gbDtcbiAgICB0aGlzLmJvZHkgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IobGV0IGk9MDsgaTxsOyBpKyspe1xuICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBhcnQoeCtpLCB5KSk7XG4gICAgfVxuICB9XG4gIGlzU2luaygpe1xuICAgIGZvcihsZXQgeCBvZiB0aGlzLmJvZHkpe1xuICAgICAgaWYgKHguaGl0ID09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgfXJldHVybiB0cnVlO1xuICB9XG4gIGhpdCh4LCB5KXtcbiAgICBmb3IobGV0IHAgb2YgdGhpcy5ib2R5KXtcbiAgICAgIGlmKHAuY29vcmQueD09eCAmJiBwLmNvb3JkLnk9PXkpXG4gICAgICBwLmhpdD10cnVlO1xuICAgIH1cbiAgfVxufVxuY2xhc3MgUGFydHtcbiAgY29uc3RydWN0b3IoeCwgeSl7XG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICB0aGlzLmNvb3JkID0ge3gsIHl9O1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB1aSBmcm9tICcuL1VJL3VpJ1xuLy8gZGVsZXRlXG5pbXBvcnQgUGxheWdyb3VuZCBmcm9tICcuL1VJL3BsYXlncm91bmQnO1xuXG4vLyB1bmNvbW1lbnRcbi8vIHVpLmluaXQoKTtcblxuLy9kZWxldGVcblBsYXlncm91bmQuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==