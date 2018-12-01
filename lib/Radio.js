
"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _InnerRadio = _interopRequireDefault(require("./InnerRadio"));

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