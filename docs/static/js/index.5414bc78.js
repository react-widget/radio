/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/Demo.js":
/*!**************************!*\
  !*** ./examples/Demo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DemoList = _interopRequireDefault(__webpack_require__(/*! ./DemoList */ "./examples/DemoList.js"));

var Demo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Demo, _Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      current: _DemoList.default[0]
    });
    return _this;
  }

  (0, _createClass2.default)(Demo, [{
    key: "onDemoChange",
    value: function onDemoChange(item, e) {
      this.setState({
        current: item
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var current = this.state.current;
      return _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("div", {
        className: "slider"
      }, _DemoList.default.map(function (item, i) {
        return _react.default.createElement("div", {
          className: current === item ? 'active' : '',
          onClick: _this2.onDemoChange.bind(_this2, item)
        }, item.label);
      })), _react.default.createElement("div", {
        className: "content"
      }, current ? _react.default.createElement(current.component, null) : null));
    }
  }]);
  return Demo;
}(_react.Component);

exports.default = Demo;

/***/ }),

/***/ "./examples/DemoList.js":
/*!******************************!*\
  !*** ./examples/DemoList.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _demo = _interopRequireDefault(__webpack_require__(/*! ./demos/demo1 */ "./examples/demos/demo1.js"));

// import Demo2 from './demos/Demo2';
// import Demo3 from './demos/Demo3';
// import Demo4 from './demos/Demo4';
var _default = [{
  label: '基本功能',
  component: _demo.default
}];
exports.default = _default;

/***/ }),

/***/ "./examples/demos/demo1.js":
/*!*********************************!*\
  !*** ./examples/demos/demo1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _InnerRadio = _interopRequireDefault(__webpack_require__(/*! ../../src/InnerRadio */ "./src/InnerRadio.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../../src/index */ "./src/index.js"));

var CheckboxGroup = _index.default.Group;

var DEMO =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DEMO, _Component);

  function DEMO() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DEMO);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DEMO)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      checked: true,
      disabled: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "toggleChecked", function () {
      _this.setState({
        checked: !_this.state.checked
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "toggleDisable", function () {
      _this.setState({
        disabled: !_this.state.disabled
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onChange", function (e) {
      console.log('checked = ', e.target.checked);

      _this.setState({
        checked: e.target.checked
      });
    });
    return _this;
  }

  (0, _createClass2.default)(DEMO, [{
    key: "render",
    value: function render() {
      var label = "".concat(this.state.checked ? 'Checked' : 'Unchecked', "-").concat(this.state.disabled ? 'Disabled' : 'Enabled');
      return _react.default.createElement("div", null, _react.default.createElement("p", {
        style: {
          marginBottom: '20px'
        }
      }, "\xA0", _react.default.createElement(_InnerRadio.default, {
        checked: this.state.checked,
        disabled: this.state.disabled,
        onChange: this.onChange
      }), "\xA0", _react.default.createElement(_InnerRadio.default, null)), _react.default.createElement("p", null, _react.default.createElement(_index.default, null, "test1"), _react.default.createElement(_index.default, {
        disabled: true
      }, "\u6D4B\u8BD5A"), _react.default.createElement(_index.default, {
        readOnly: true
      }, "\u6D4B\u8BD5B"), _react.default.createElement(_index.default, {
        checked: true
      }, "\u6D4B\u8BD5C"), _react.default.createElement(_index.default, {
        defaultChecked: true
      }, "\u6D4B\u8BD5D"), _react.default.createElement(_index.default, {
        onChange: this.onChange,
        checked: this.state.checked
      }, "\u6D4B\u8BD5D")), _react.default.createElement("p", null, _react.default.createElement(CheckboxGroup, {
        disabled: true
      }, _react.default.createElement(_index.default, null, "\u6D4B\u8BD5A"), _react.default.createElement(_index.default, null, "\u6D4B\u8BD5B"), _react.default.createElement(_index.default, null, "\u6D4B\u8BD5C"), _react.default.createElement(_index.default, null, "\u6D4B\u8BD5D"), _react.default.createElement(_index.default, null, "\u6D4B\u8BD5D"))), _react.default.createElement("p", null, _react.default.createElement(CheckboxGroup, {
        value: "C"
      }, _react.default.createElement(_index.default, {
        value: "A"
      }, "\u6D4B\u8BD5A"), _react.default.createElement(_index.default, {
        value: "B"
      }, "\u6D4B\u8BD5B"), _react.default.createElement(_index.default, {
        value: "C"
      }, "\u6D4B\u8BD5C"), _react.default.createElement(_index.default, {
        value: "D"
      }, "\u6D4B\u8BD5D"), _react.default.createElement(_index.default, {
        value: "E"
      }, "\u6D4B\u8BD5E"))), _react.default.createElement("p", null, _react.default.createElement(CheckboxGroup, {
        defaultValue: "C"
      }, _react.default.createElement(_index.default, {
        value: "A"
      }, "\u6D4B\u8BD5A"), _react.default.createElement(_index.default, {
        value: "B"
      }, "\u6D4B\u8BD5B"), _react.default.createElement(_index.default, {
        value: "C",
        disabled: true
      }, "\u6D4B\u8BD5C"), _react.default.createElement(_index.default, {
        value: "D"
      }, "\u6D4B\u8BD5D"), _react.default.createElement(_index.default, {
        value: "E"
      }, "\u6D4B\u8BD5E"))), _react.default.createElement("p", null, _react.default.createElement(CheckboxGroup, null, _react.default.createElement(_index.default, {
        value: "A"
      }, "\u6D4B\u8BD5A"), _react.default.createElement(_index.default, {
        value: "B"
      }, "\u6D4B\u8BD5B"), _react.default.createElement(_index.default, {
        value: "C",
        checked: true
      }, "\u6D4B\u8BD5C"), _react.default.createElement(_index.default, {
        value: "D"
      }, "\u6D4B\u8BD5D"), _react.default.createElement(_index.default, {
        value: "E"
      }, "\u6D4B\u8BD5E"))), _react.default.createElement("p", null, _react.default.createElement(CheckboxGroup, {
        options: ['A', 'B', 'C', 'D', 'E'],
        value: "C"
      })), _react.default.createElement("p", null, _react.default.createElement(CheckboxGroup, {
        onChange: function onChange(v) {
          return console.log(v);
        },
        options: [{
          label: '测试A',
          value: "A"
        }, {
          label: '测试B',
          value: "B"
        }, {
          label: '测试C',
          value: "C"
        }, {
          label: '测试D',
          value: "D"
        }, {
          label: '测试E',
          value: "E"
        }]
      })), _react.default.createElement("p", null, _react.default.createElement("button", {
        onClick: this.toggleChecked
      }, !this.state.checked ? 'Check' : 'Uncheck'), _react.default.createElement("button", {
        style: {
          marginLeft: '10px'
        },
        onClick: this.toggleDisable
      }, !this.state.disabled ? 'Disable' : 'Enable')));
    }
  }]);
  return DEMO;
}(_react.Component);

exports.default = DEMO;

/***/ }),

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

__webpack_require__(/*! ./style/index.scss */ "./examples/style/index.scss");

__webpack_require__(/*! ./style/animate.scss */ "./examples/style/animate.scss");

__webpack_require__(/*! ../src/style/index.scss */ "./src/style/index.scss");

var _Demo = _interopRequireDefault(__webpack_require__(/*! ./Demo */ "./examples/Demo.js"));

_reactDom.default.render(_react.default.createElement(_Demo.default, null), demo);

/***/ }),

/***/ "./examples/style/animate.scss":
/*!*************************************!*\
  !*** ./examples/style/animate.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./examples/style/index.scss":
/*!***********************************!*\
  !*** ./examples/style/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Group.js":
/*!**********************!*\
  !*** ./src/Group.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _shallowequal = _interopRequireDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

var _Radio = _interopRequireDefault(__webpack_require__(/*! ./Radio */ "./src/Radio.js"));

function getCheckedValue(children) {
  var value = null;
  var matched = false;

  _react.default.Children.forEach(children, function (radio) {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });

  return matched ? {
    value: value
  } : undefined;
}

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RadioGroup, _React$Component);
  (0, _createClass2.default)(RadioGroup, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newState = {};

      if ('value' in props) {
        newState.value = props.value;
      }

      return newState;
    }
  }]);

  function RadioGroup(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RadioGroup);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadioGroup).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onRadioChange", function (e) {
      var lastValue = _this.state.value;
      var value = e.target.value;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      var onChange = _this.props.onChange;

      if (onChange && value !== lastValue) {
        onChange(e);
      }
    });

    var _value;

    if ('value' in props) {
      _value = props.value;
    } else if ('defaultValue' in props) {
      _value = props.defaultValue;
    } else {
      var checkedValue = getCheckedValue(props.children);
      _value = checkedValue && checkedValue.value;
    }

    _this.state = {
      value: _value
    };
    return _this;
  }

  (0, _createClass2.default)(RadioGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        radioGroup: {
          onChange: this.onRadioChange,
          value: this.state.value,
          disabled: this.props.disabled,
          name: this.props.name
        }
      };
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal.default)(this.props, nextProps) || !(0, _shallowequal.default)(this.state, nextState);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var options = this.props.options;
      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }

        return option;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames;

      var props = this.props,
          state = this.state;
      var prefixCls = props.prefixCls,
          className = props.className,
          options = props.options,
          _props$style = props.style,
          style = _props$style === void 0 ? {} : _props$style;
      var children = props.children;

      if (options && options.length > 0) {
        children = this.getOptions().map(function (option) {
          return _react.default.createElement(_Radio.default, {
            key: option.key || option.value,
            prefixCls: prefixCls,
            disabled: 'disabled' in option ? option.disabled : props.disabled,
            value: option.value,
            onChange: _this2.onRadioChange,
            checked: state.value === option.value
          }, option.label);
        });
      }

      var classString = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-group"), true), (0, _defineProperty2.default)(_classNames, className, className), _classNames));
      return _react.default.createElement("div", {
        className: classString,
        style: style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave
      }, children);
    }
  }]);
  return RadioGroup;
}(_react.default.Component);

exports.default = RadioGroup;
(0, _defineProperty2.default)(RadioGroup, "defaultProps", {
  options: [],
  prefixCls: 'rw-radio'
});
(0, _defineProperty2.default)(RadioGroup, "propTypes", {
  defaultValue: _propTypes.default.any,
  value: _propTypes.default.any,
  options: _propTypes.default.array.isRequired,
  onChange: _propTypes.default.func,
  name: _propTypes.default.string
});
(0, _defineProperty2.default)(RadioGroup, "childContextTypes", {
  radioGroup: _propTypes.default.any
});

/***/ }),

/***/ "./src/InnerRadio.js":
/*!***************************!*\
  !*** ./src/InnerRadio.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _InnerCheckbox = _interopRequireDefault(__webpack_require__(/*! react-widget-checkbox/lib/InnerCheckbox */ "./node_modules/react-widget-checkbox/lib/InnerCheckbox.js"));

var InnerRadio =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(InnerRadio, _React$Component);

  function InnerRadio() {
    (0, _classCallCheck2.default)(this, InnerRadio);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InnerRadio).apply(this, arguments));
  }

  (0, _createClass2.default)(InnerRadio, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_InnerCheckbox.default, (0, _extends2.default)({}, this.props, {
        type: "radio",
        indeterminate: false
      }));
    }
  }]);
  return InnerRadio;
}(_react.default.Component);

exports.default = InnerRadio;
(0, _defineProperty2.default)(InnerRadio, "propTypes", {
  prefixCls: _propTypes.default.string
});
(0, _defineProperty2.default)(InnerRadio, "defaultProps", {
  prefixCls: 'rw-radio'
});

/***/ }),

/***/ "./src/Radio.js":
/*!**********************!*\
  !*** ./src/Radio.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _shallowequal = _interopRequireDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

var _InnerRadio = _interopRequireDefault(__webpack_require__(/*! ./InnerRadio */ "./src/InnerRadio.js"));

var Radio =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Radio, _Component);

  function Radio() {
    (0, _classCallCheck2.default)(this, Radio);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Radio).apply(this, arguments));
  }

  (0, _createClass2.default)(Radio, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowequal.default)(this.props, nextProps) || !(0, _shallowequal.default)(this.state, nextState) || !(0, _shallowequal.default)(this.context.radioGroup, nextContext.radioGroup);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var props = this.props,
          context = this.context;
      var prefixCls = props.prefixCls,
          className = props.className,
          children = props.children,
          style = props.style,
          onMouseEnter = props.onMouseEnter,
          onMouseLeave = props.onMouseLeave,
          others = (0, _objectWithoutProperties2.default)(props, ["prefixCls", "className", "children", "style", "onMouseEnter", "onMouseLeave"]);
      var classString = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2.default)(_classNames, className, !!className), _classNames));
      var radioGroup = context.radioGroup;

      if (radioGroup) {
        others.name = radioGroup.name;
        others.onChange = radioGroup.onChange;
        others.checked = props.value === radioGroup.value;
        others.disabled = props.disabled || radioGroup.disabled;
      }

      return _react.default.createElement("label", {
        className: classString,
        style: style,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      }, _react.default.createElement(_InnerRadio.default, (0, _extends2.default)({}, others, {
        prefixCls: prefixCls
      })), children !== undefined ? _react.default.createElement("span", {
        className: "".concat(prefixCls, "-label")
      }, children) : null);
    }
  }]);
  return Radio;
}(_react.Component);

exports.default = Radio;
(0, _defineProperty2.default)(Radio, "propTypes", {
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  prefixCls: _propTypes.default.string
});
(0, _defineProperty2.default)(Radio, "defaultProps", {
  prefixCls: 'rw-radio',
  className: '',
  style: {}
});
(0, _defineProperty2.default)(Radio, "contextTypes", {
  radioGroup: _propTypes.default.any
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Radio = _interopRequireDefault(__webpack_require__(/*! ./Radio */ "./src/Radio.js"));

var _Group = _interopRequireDefault(__webpack_require__(/*! ./Group */ "./src/Group.js"));

_Radio.default.Group = _Group.default;
var _default = _Radio.default;
exports.default = _default;

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************************************!*\
  !*** multi ./node_modules/packez/lib/fetchPolyfills.js ./node_modules/packez/lib/polyfills.js ./examples/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\wamp\www\github-projects\react-widget\radio\node_modules\packez\lib\fetchPolyfills.js */"./node_modules/packez/lib/fetchPolyfills.js");
__webpack_require__(/*! D:\wamp\www\github-projects\react-widget\radio\node_modules\packez\lib\polyfills.js */"./node_modules/packez/lib/polyfills.js");
module.exports = __webpack_require__(/*! D:\wamp\www\github-projects\react-widget\radio\examples\index.js */"./examples/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.5414bc78.js.map