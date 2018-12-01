
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InnerCheckbox = _interopRequireDefault(require("react-widget-checkbox/lib/InnerCheckbox"));

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