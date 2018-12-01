
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _Radio = _interopRequireDefault(require("./Radio"));

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