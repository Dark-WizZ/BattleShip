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
___CSS_LOADER_EXPORT___.push([module.id, "body, html{\n  height: 100%;\n}\n.outer_layout{\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n.inner_layout{\n  display: none;\n  flex-wrap: wrap;\n  gap: 1em;\n  justify-content: space-around;\n}\n.board1, .board2{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 1px solid blue;\n}\n.plot{\n  border: 1px solid red;\n}\n.plot:hover{\n  background: rgb(204, 204, 204);\n}\n.demo{\n  color:rgb(69, 216, 249);\n}\n.creater_board{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 400px;\n  width: 400px;\n  border: 1px solid blue;\n}\n.creater_layout{\n  display: grid;\n  place-items: center;\n  grid-template-columns: 1fr auto;\n  gap: 2em;\n}\nbutton{\n  height: fit-content;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,aAAa;EACb,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,aAAa;EACb,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,QAAQ;AACV;AACA;EACE,mBAAmB;AACrB","sourcesContent":["body, html{\n  height: 100%;\n}\n.outer_layout{\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n.inner_layout{\n  display: none;\n  flex-wrap: wrap;\n  gap: 1em;\n  justify-content: space-around;\n}\n.board1, .board2{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 300px;\n  width: 300px;\n  border: 1px solid blue;\n}\n.plot{\n  border: 1px solid red;\n}\n.plot:hover{\n  background: rgb(204, 204, 204);\n}\n.demo{\n  color:rgb(69, 216, 249);\n}\n.creater_board{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 400px;\n  width: 400px;\n  border: 1px solid blue;\n}\n.creater_layout{\n  display: grid;\n  place-items: center;\n  grid-template-columns: 1fr auto;\n  gap: 2em;\n}\nbutton{\n  height: fit-content;\n}"],"sourceRoot":""}]);
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
        else if(board.className!='board2')
        tar.style.background = 'rgb(174, 241, 92)'
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
    this.gb = new _modules_GameBoard__WEBPACK_IMPORTED_MODULE_1__["default"]("Player1");
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardCreate(this.createrBoard);
    this.domReload();
  }
  static domCache(){
    this.outLayout = document.querySelector('.outer_layout');
    this.inLayout = document.querySelector('.inner_layout');
    this.createrLayout = document.querySelector('.creater_layout');
    this.createrBoard = document.querySelector(' .creater_board');
    this.nextBtn = document.querySelector('.next_btn');
    this.oddClick = true;
  }
  static domReload(){
    this.plots = document.querySelectorAll('.creater_board .plot')
  }
  static bindEvent(){
    this.plots.forEach(e =>{
      e.addEventListener('click', x => this.plotClick(e))
    })
    this.nextBtn.addEventListener('click', this.nextBtnClick.bind(this));
  }

  static plotClick(e){
    let x = parseInt(e.getAttribute('x'));
    let y = parseInt(e.getAttribute('y'));
    if(this.oddClick){
      this.start = {x, y};
      this.oddClick = false;
      return;
    }
    this.end = {x, y};
    let len = this.end.x - this.start.x + 1;
    this.gb.place(this.start.x, this.start.y, len);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.createrBoard, this.gb);
    this.oddClick = true;
  }
  static nextBtnClick(){
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
    this.player1Board = _createShips__WEBPACK_IMPORTED_MODULE_1__["default"].gb;
    this.ai = new _modules_AI_ai__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.aiBoard = this.ai.gb;
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static domCache(){
    this.outLayout  = document.querySelector('.outer_layout');
    this.inLayout = document.querySelector('.inner_layout');
    this.board1 = document.querySelector('.board1');
    this.board2 = document.querySelector('.board2');
  }
  static render(){
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardCreate(this.board1);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardCreate(this.board2);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.board1, this.player1Board);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.board2, this.aiBoard)
    this.domReload();
  }
  static domReload(){
    this.b2Plot = document.querySelectorAll('.board2 .plot');
  }
  static bindEvent(){
    this.b2Plot.forEach(e => {
      e.addEventListener('click',this.plotClick.bind(this, this.aiBoard, e))
    })
  }
  static plotClick(data, plot){
    let z = plot.getAttribute('cliked');
    if(plot.hasAttribute('clicked')) return;
    plot.setAttribute('clicked', true);
    let x = plot.getAttribute('x');
    let y = plot.getAttribute('y');
    data.receiveAttack(x, y);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(plot.parentElement, data);
    this.ai.move(this.player1Board);
    _board__WEBPACK_IMPORTED_MODULE_2__["default"].boardRender(this.board1, this.player1Board);
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
    let x, y, bd;
    do{
      let hit=false
      x = Math.floor(Math.random()*10);
      y = Math.floor(Math.random()*10);
      bd = board.board[x][y];
    if(bd instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]){
      bd.body.forEach(e=>{
        if(e.hit && e.coord.x == x) hit=true;
      })
      if(hit)continue;
      else break;
    }
    }while(bd);
    board.receiveAttack(x, y);
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
    if(this.ships.length>=5 || len<=0) return;
    if(x+len>10 || y>10) return;
    if(this.board[x][y]) return;
    let coll = (this.isColloidal(x, y, len))
    console.log(coll);
    if(coll) {console.log('col');return;}
    let s = new _modules_ship__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, len);
    this.ships.push(s);
    for(let i=x; i<x+len; i++)
    this.board[i][y] = s;
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
        console.log(newStart, newEnd);
        console.log(start, end)
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



_UI_ui__WEBPACK_IMPORTED_MODULE_1__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ0k7O0FBRXhCLG1EQUFPLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS9jcmVhdGVTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL3BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvQUkvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LCBodG1se1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ub3V0ZXJfbGF5b3V0e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbm5lcl9sYXlvdXR7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmJvYXJkMSwgLmJvYXJkMntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG4ucGxvdHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuLnBsb3Q6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcbi5kZW1ve1xcbiAgY29sb3I6cmdiKDY5LCAyMTYsIDI0OSk7XFxufVxcbi5jcmVhdGVyX2JvYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcbi5jcmVhdGVyX2xheW91dHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGdhcDogMmVtO1xcbn1cXG5idXR0b257XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LCBodG1se1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ub3V0ZXJfbGF5b3V0e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbm5lcl9sYXlvdXR7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmJvYXJkMSwgLmJvYXJkMntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG4ucGxvdHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuLnBsb3Q6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcbi5kZW1ve1xcbiAgY29sb3I6cmdiKDY5LCAyMTYsIDI0OSk7XFxufVxcbi5jcmVhdGVyX2JvYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcbi5jcmVhdGVyX2xheW91dHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGdhcDogMmVtO1xcbn1cXG5idXR0b257XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZHtcbiAgc3RhdGljIGJvYXJkUmVuZGVyKGJvYXJkLCBkYXRhKXtcbiAgICBmb3IobGV0IHNoaXAgb2YgZGF0YS5zaGlwcyl7XG4gICAgICBmb3IobGV0IHBhcnQgb2Ygc2hpcC5ib2R5KXtcbiAgICAgICAgbGV0IHRhciA9IHRoaXMucGxvdFNlbGVjdG9yKGJvYXJkLCBwYXJ0KTtcbiAgICAgICAgaWYocGFydC5oaXQpXG4gICAgICAgIHRhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyNDEsIDEwNywgOTIpJ1xuICAgICAgICBlbHNlIGlmKGJvYXJkLmNsYXNzTmFtZSE9J2JvYXJkMicpXG4gICAgICAgIHRhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxNzQsIDI0MSwgOTIpJ1xuICAgICAgfVxuICAgICAgaWYoc2hpcC5pc1NpbmsoKSkgc2hpcC5ib2R5LmZvckVhY2gocGFydCA9PiB7XG4gICAgICAgIGxldCB0YXIgPSB0aGlzLnBsb3RTZWxlY3Rvcihib2FyZCwgcGFydCApXG4gICAgICAgIHRhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyNTMsIDQ0LCAyMSknXG4gICAgICB9KVxuICAgIH1cbiAgICBmb3IobGV0IHg9MDsgeDwxMDsgeCsrKVxuICAgIGZvcihsZXQgeT0wOyB5PDEwOyB5Kyspe1xuICAgICAgaWYoZGF0YS5ib2FyZFt4XVt5XT09MSl7XG4gICAgICAgIGxldCB0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZC5jbGFzc05hbWV9IC5wbG90W3g9XCIke3h9XCJdW3k9XCIke3l9XCJdYCk7XG4gICAgICAgIHRhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYig2OSwgMjE2LCAyNDkpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIHBsb3RTZWxlY3Rvcihib2FyZCwgcGFydCl7XG4gICAgbGV0IHggPSBwYXJ0LmNvb3JkLng7XG4gICAgbGV0IHkgPSBwYXJ0LmNvb3JkLnk7XG4gICAgbGV0IHRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkLmNsYXNzTmFtZX0gLnBsb3RbeD1cIiR7eH1cIl1beT1cIiR7eX1cIl1gKTtcbiAgICByZXR1cm4gdGFyO1xuICB9XG4gIHN0YXRpYyBib2FyZENyZWF0ZShib2FyZCl7XG4gICAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKylcbiAgICBmb3IobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgIGxldCBwbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwbG90LmNsYXNzTmFtZSA9ICdwbG90JztcbiAgICAgIHBsb3Quc2V0QXR0cmlidXRlKCd4Jywgaik7XG4gICAgICBwbG90LnNldEF0dHJpYnV0ZSgneScsIGkpO1xuICAgICAgYm9hcmQuYXBwZW5kKHBsb3QpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBQbGF5Z3JvdW5kIGZyb20gXCIuL3BsYXlncm91bmRcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL21vZHVsZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlU2hpcHtcbiAgc3RhdGljIGluaXQoKXtcbiAgICB0aGlzLmRvbUNhY2hlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG4gIHN0YXRpYyByZW5kZXIoKXtcbiAgICB0aGlzLmdiID0gbmV3IEdhbWVCb2FyZChcIlBsYXllcjFcIik7XG4gICAgQm9hcmQuYm9hcmRDcmVhdGUodGhpcy5jcmVhdGVyQm9hcmQpO1xuICAgIHRoaXMuZG9tUmVsb2FkKCk7XG4gIH1cbiAgc3RhdGljIGRvbUNhY2hlKCl7XG4gICAgdGhpcy5vdXRMYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0ZXJfbGF5b3V0Jyk7XG4gICAgdGhpcy5pbkxheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcl9sYXlvdXQnKTtcbiAgICB0aGlzLmNyZWF0ZXJMYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlcl9sYXlvdXQnKTtcbiAgICB0aGlzLmNyZWF0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyAuY3JlYXRlcl9ib2FyZCcpO1xuICAgIHRoaXMubmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0X2J0bicpO1xuICAgIHRoaXMub2RkQ2xpY2sgPSB0cnVlO1xuICB9XG4gIHN0YXRpYyBkb21SZWxvYWQoKXtcbiAgICB0aGlzLnBsb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWF0ZXJfYm9hcmQgLnBsb3QnKVxuICB9XG4gIHN0YXRpYyBiaW5kRXZlbnQoKXtcbiAgICB0aGlzLnBsb3RzLmZvckVhY2goZSA9PntcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB4ID0+IHRoaXMucGxvdENsaWNrKGUpKVxuICAgIH0pXG4gICAgdGhpcy5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgcGxvdENsaWNrKGUpe1xuICAgIGxldCB4ID0gcGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoJ3gnKSk7XG4gICAgbGV0IHkgPSBwYXJzZUludChlLmdldEF0dHJpYnV0ZSgneScpKTtcbiAgICBpZih0aGlzLm9kZENsaWNrKXtcbiAgICAgIHRoaXMuc3RhcnQgPSB7eCwgeX07XG4gICAgICB0aGlzLm9kZENsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW5kID0ge3gsIHl9O1xuICAgIGxldCBsZW4gPSB0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54ICsgMTtcbiAgICB0aGlzLmdiLnBsYWNlKHRoaXMuc3RhcnQueCwgdGhpcy5zdGFydC55LCBsZW4pO1xuICAgIEJvYXJkLmJvYXJkUmVuZGVyKHRoaXMuY3JlYXRlckJvYXJkLCB0aGlzLmdiKTtcbiAgICB0aGlzLm9kZENsaWNrID0gdHJ1ZTtcbiAgfVxuICBzdGF0aWMgbmV4dEJ0bkNsaWNrKCl7XG4gICAgdGhpcy5jcmVhdGVyTGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5pbkxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIFBsYXlncm91bmQuaW5pdCgpO1xuICB9XG59IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi4vbW9kdWxlcy9HYW1lQm9hcmRcIjtcbmltcG9ydCBDcmVhdGVTaGlwIGZyb20gXCIuL2NyZWF0ZVNoaXBzXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCBBSSBmcm9tIFwiLi4vbW9kdWxlcy9BSS9haVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5Z3JvdW5ke1xuICBzdGF0aWMgaW5pdCgpe1xuICAgIHRoaXMucGxheWVyMUJvYXJkID0gQ3JlYXRlU2hpcC5nYjtcbiAgICB0aGlzLmFpID0gbmV3IEFJKCk7XG4gICAgdGhpcy5haUJvYXJkID0gdGhpcy5haS5nYjtcbiAgICB0aGlzLmRvbUNhY2hlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG4gIHN0YXRpYyBkb21DYWNoZSgpe1xuICAgIHRoaXMub3V0TGF5b3V0ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXRlcl9sYXlvdXQnKTtcbiAgICB0aGlzLmluTGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyX2xheW91dCcpO1xuICAgIHRoaXMuYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkMScpO1xuICAgIHRoaXMuYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkMicpO1xuICB9XG4gIHN0YXRpYyByZW5kZXIoKXtcbiAgICBCb2FyZC5ib2FyZENyZWF0ZSh0aGlzLmJvYXJkMSk7XG4gICAgQm9hcmQuYm9hcmRDcmVhdGUodGhpcy5ib2FyZDIpO1xuICAgIEJvYXJkLmJvYXJkUmVuZGVyKHRoaXMuYm9hcmQxLCB0aGlzLnBsYXllcjFCb2FyZCk7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIodGhpcy5ib2FyZDIsIHRoaXMuYWlCb2FyZClcbiAgICB0aGlzLmRvbVJlbG9hZCgpO1xuICB9XG4gIHN0YXRpYyBkb21SZWxvYWQoKXtcbiAgICB0aGlzLmIyUGxvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZDIgLnBsb3QnKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50KCl7XG4gICAgdGhpcy5iMlBsb3QuZm9yRWFjaChlID0+IHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMucGxvdENsaWNrLmJpbmQodGhpcywgdGhpcy5haUJvYXJkLCBlKSlcbiAgICB9KVxuICB9XG4gIHN0YXRpYyBwbG90Q2xpY2soZGF0YSwgcGxvdCl7XG4gICAgbGV0IHogPSBwbG90LmdldEF0dHJpYnV0ZSgnY2xpa2VkJyk7XG4gICAgaWYocGxvdC5oYXNBdHRyaWJ1dGUoJ2NsaWNrZWQnKSkgcmV0dXJuO1xuICAgIHBsb3Quc2V0QXR0cmlidXRlKCdjbGlja2VkJywgdHJ1ZSk7XG4gICAgbGV0IHggPSBwbG90LmdldEF0dHJpYnV0ZSgneCcpO1xuICAgIGxldCB5ID0gcGxvdC5nZXRBdHRyaWJ1dGUoJ3knKTtcbiAgICBkYXRhLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgQm9hcmQuYm9hcmRSZW5kZXIocGxvdC5wYXJlbnRFbGVtZW50LCBkYXRhKTtcbiAgICB0aGlzLmFpLm1vdmUodGhpcy5wbGF5ZXIxQm9hcmQpO1xuICAgIEJvYXJkLmJvYXJkUmVuZGVyKHRoaXMuYm9hcmQxLCB0aGlzLnBsYXllcjFCb2FyZCk7XG4gIH1cbn0iLCJpbXBvcnQgUGxheWdyb3VuZCBmcm9tIFwiLi9wbGF5Z3JvdW5kXCI7XG5pbXBvcnQgQ3JlYXRlU2hpcCBmcm9tIFwiLi9jcmVhdGVTaGlwc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSXtcbiAgc3RhdGljIGluaXQoKXtcbiAgICBDcmVhdGVTaGlwLmluaXQoKTtcbiAgfVxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL0dhbWVCb2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUl7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5nYiA9IG5ldyBHYW1lQm9hcmQoJ0FJJyk7XG4gICAgdGhpcy5hdXRvcGxhY2UoKTtcbiAgfVxuICBhdXRvcGxhY2UoKXtcbiAgICB3aGlsZSh0aGlzLmdiLnNoaXBzLmxlbmd0aDw1KXtcbiAgICAgIGxldCBsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpKzM7XG4gICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICB0aGlzLmdiLnBsYWNlKHgsIHksIGwpO1xuICAgIH1cbiAgfVxuICBtb3ZlKGJvYXJkKXtcbiAgICBsZXQgeCwgeSwgYmQ7XG4gICAgZG97XG4gICAgICBsZXQgaGl0PWZhbHNlXG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgYmQgPSBib2FyZC5ib2FyZFt4XVt5XTtcbiAgICBpZihiZCBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgYmQuYm9keS5mb3JFYWNoKGU9PntcbiAgICAgICAgaWYoZS5oaXQgJiYgZS5jb29yZC54ID09IHgpIGhpdD10cnVlO1xuICAgICAgfSlcbiAgICAgIGlmKGhpdCljb250aW51ZTtcbiAgICAgIGVsc2UgYnJlYWs7XG4gICAgfVxuICAgIH13aGlsZShiZCk7XG4gICAgYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxufSIsImltcG9ydCBTaGlwIGZyb20gJy4uL21vZHVsZXMvc2hpcCdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmR7XG4gIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihuYW1lKTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKCkubWFwKCgpPT5uZXcgQXJyYXkoMTApLmZpbGwoKSk7XG4gICAgdGhpcy5zaGlwcyA9IG5ldyBBcnJheSgpO1xuICB9XG4gIHBsYWNlKHgsIHksIGxlbil7XG4gICAgaWYodGhpcy5zaGlwcy5sZW5ndGg+PTUgfHwgbGVuPD0wKSByZXR1cm47XG4gICAgaWYoeCtsZW4+MTAgfHwgeT4xMCkgcmV0dXJuO1xuICAgIGlmKHRoaXMuYm9hcmRbeF1beV0pIHJldHVybjtcbiAgICBsZXQgY29sbCA9ICh0aGlzLmlzQ29sbG9pZGFsKHgsIHksIGxlbikpXG4gICAgY29uc29sZS5sb2coY29sbCk7XG4gICAgaWYoY29sbCkge2NvbnNvbGUubG9nKCdjb2wnKTtyZXR1cm47fVxuICAgIGxldCBzID0gbmV3IFNoaXAoeCwgeSwgbGVuKTtcbiAgICB0aGlzLnNoaXBzLnB1c2gocyk7XG4gICAgZm9yKGxldCBpPXg7IGk8eCtsZW47IGkrKylcbiAgICB0aGlzLmJvYXJkW2ldW3ldID0gcztcbiAgfVxuICByZWNlaXZlQXR0YWNrKHgsIHkpe1xuICAgIGxldCBzID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICBpZihzIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICBzLmhpdCh4LHkpOyByZXR1cm47XG4gICAgfXRoaXMuYm9hcmRbeF1beV0gPSAxO1xuICB9XG4gIGlzQWxsU2luaygpe1xuICAgIGZvcihsZXQgcyBvZiB0aGlzLnNoaXBzKVxuICAgIGlmKCFzLmlzU2luaygpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNDb2xsb2lkYWwoeCwgeSwgbGVuKXtcbiAgICBmb3IobGV0IHMgb2YgdGhpcy5zaGlwcyl7XG4gICAgICBpZihzLmJvZHlbMF0uY29vcmQueT09eSl7XG4gICAgICAgIGxldCBuZXdTdGFydCA9IHg7XG4gICAgICAgIGxldCBuZXdFbmQgPSB4K2xlbi0xO1xuICAgICAgICBsZXQgc3RhcnQgPSBzLmJvZHlbMF0uY29vcmQueDtcbiAgICAgICAgbGV0IGVuZCA9IHMuYm9keVswXS5jb29yZC54ICsgcy5sZW4gLSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdTdGFydCwgbmV3RW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RhcnQsIGVuZClcbiAgICAgICAgaWYoKG5ld1N0YXJ0IDwgc3RhcnQpICYmIChuZXdFbmQgPj0gc3RhcnQpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYoKG5ld1N0YXJ0ID4gc3RhcnQpICYmIChuZXdTdGFydDw9ZW5kKSkgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVye1xuICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHtcbiAgY29uc3RydWN0b3IoeCwgeSwgbCl7XG4gICAgdGhpcy5sZW4gPSBsO1xuICAgIHRoaXMuYm9keSA9IG5ldyBBcnJheSgpO1xuICAgIGZvcihsZXQgaT0wOyBpPGw7IGkrKyl7XG4gICAgICB0aGlzLmJvZHkucHVzaChuZXcgUGFydCh4K2ksIHkpKTtcbiAgICB9XG4gIH1cbiAgaXNTaW5rKCl7XG4gICAgZm9yKGxldCB4IG9mIHRoaXMuYm9keSl7XG4gICAgICBpZiAoeC5oaXQgPT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICB9cmV0dXJuIHRydWU7XG4gIH1cbiAgaGl0KHgsIHkpe1xuICAgIGZvcihsZXQgcCBvZiB0aGlzLmJvZHkpe1xuICAgICAgaWYocC5jb29yZC54PT14ICYmIHAuY29vcmQueT09eSlcbiAgICAgIHAuaGl0PXRydWU7XG4gICAgfVxuICB9XG59XG5jbGFzcyBQYXJ0e1xuICBjb25zdHJ1Y3Rvcih4LCB5KXtcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIHRoaXMuY29vcmQgPSB7eCwgeX07XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHVpIGZyb20gJy4vVUkvdWknXG5cbnVpLmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=