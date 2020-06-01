import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as _assertThisInitialized, e as _createClass } from '../getPrototypeOf-d7a15518.js';
import { _ as _defineProperty } from '../defineProperty-e8b8a880.js';
import React from 'react';
import { p as propTypes_6, a as propTypes_2, b as propTypes_7, c as propTypes_5, d as propTypes_1 } from '../index-23943bf4.js';
import { C as Classnames } from '../index-8042726d.js';
import { ConfigConsumer as Consumer } from '../configProvider/index.js';
import Icon from '../Icon/index.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "renderButton", function (_ref) {
      var _Classnames;

      var getPrefixCls = _ref.getPrefixCls;
      var iconNode = null;
      var _this$props = _this.props,
          type = _this$props.type,
          size = _this$props.size,
          className = _this$props.className,
          children = _this$props.children,
          icon = _this$props.icon,
          ghost = _this$props.ghost,
          block = _this$props.block,
          onClick = _this$props.onClick,
          htmlType = _this$props.htmlType,
          href = _this$props.href,
          target = _this$props.target,
          style = _this$props.style;
      var prefixCls = getPrefixCls("btn");
      var classes = Classnames(["".concat(prefixCls)], (_Classnames = {}, _defineProperty(_Classnames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_Classnames, "".concat(prefixCls, "-").concat(size), size), _defineProperty(_Classnames, "".concat(prefixCls, "-").concat(type, "-ghost"), ghost), _defineProperty(_Classnames, "".concat(prefixCls, "-block"), block), _Classnames), className);

      if (icon) {
        iconNode = /*#__PURE__*/React.createElement(Icon, {
          icon: icon,
          className: "".concat(prefixCls, "-icon")
        });
      }

      if (href) {
        return /*#__PURE__*/React.createElement("a", {
          href: href,
          target: target,
          ref: _this.btnRef,
          onClick: onClick,
          className: classes
        }, iconNode, children);
      }

      return /*#__PURE__*/React.createElement("button", {
        type: htmlType,
        ref: _this.btnRef,
        onClick: onClick,
        className: classes
      }, iconNode, children);
    });

    _this.btnRef = React.createRef();
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Consumer, null, this.renderButton);
    }
  }]);

  return Button;
}(React.Component);

Button.defaultProps = {
  ghost: false,
  block: false,
  htmlType: "button",
  children: "btn",
  size: "large",
  type: "default",
  className: "",
  icon: "",
  href: "",
  target: ""
};
Button.propTypes = {
  ghost: propTypes_6,
  block: propTypes_6,
  htmlType: propTypes_2(["submit", "button", "reset"]),
  children: propTypes_7,
  size: propTypes_2(["small", "middle", "large"]),
  type: propTypes_2(["default", "primary", "link", "danger"]),
  href: propTypes_5,
  target: propTypes_5,
  onClick: propTypes_1,
  icon: propTypes_7,
  className: propTypes_5
};

export default Button;
