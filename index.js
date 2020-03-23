"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rDropdownButton = _interopRequireDefault(require("r-dropdown-button"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RBar = /*#__PURE__*/function (_Component) {
  _inherits(RBar, _Component);

  var _super = _createSuper(RBar);

  function RBar(props) {
    var _this;

    _classCallCheck(this, RBar);

    _this = _super.call(this, props);
    var vertical = _this.props.vertical;
    return _this;
  }

  _createClass(RBar, [{
    key: "getStyle",
    value: function getStyle(h, active) {
      var buttonStyle = typeof this.props.buttonStyle === 'function' ? this.props.buttonStyle(h) : this.props.buttonStyle;
      var customStyle = typeof h.style === 'function' ? h.style(h) : h.style;
      var show = h.show ? h.show() : undefined;
      var obj = { ...buttonStyle,
        ...customStyle
      };

      if (show === false) {
        obj.display = 'none';
      }

      return obj;
    }
  }, {
    key: "getButton",
    value: function getButton(h, i) {
      var active = h.value === this.activeValue;
      var _onClick = this.props.onClick;
      return /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({}, h, {
        iconStyle: this.iconStyle,
        className: active ? 'active' : '',
        key: i,
        style: this.getStyle(h, active),
        onClick: function onClick() {
          return _onClick(h, i);
        },
        disabled: active ? 'disabled' : ''
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          active = _this$props.active,
          className = _this$props.className,
          id = _this$props.id,
          vertical = _this$props.vertical;
      var show = typeof this.props.show === 'function' ? this.props.show() : this.props.show;
      var style = typeof this.props.style === 'function' ? this.props.style() : this.props.style;

      if (show === false) {
        return '';
      }

      this.activeValue = typeof active === 'function' ? active() : active;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-bar".concat(vertical ? ' r-bar-vertical' : ' r-bar-horizontal').concat(className ? ' ' + className : ''),
        id: id,
        style: style
      }, items.length > 0 && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-bar-start r-bar-sides"
      }, items.filter(function (h) {
        return h.side !== 'end';
      }).map(function (h, i) {
        return _this2.getButton(h, i);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-bar-end r-bar-sides"
      }, items.filter(function (h) {
        return h.side === 'end';
      }).map(function (h, i) {
        return _this2.getButton(h, i);
      }))));
    }
  }]);

  return RBar;
}(_react.Component);

exports.default = RBar;
RBar.defaultProps = {
  items: [],
  show: true
};