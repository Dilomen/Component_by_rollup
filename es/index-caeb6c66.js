import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as _assertThisInitialized, e as _createClass } from './getPrototypeOf-d7a15518.js';
import { _ as _defineProperty } from './defineProperty-e8b8a880.js';
import React from 'react';
import Button from './Button/index.js';
import { h as propTypes_8, c as propTypes_5, p as propTypes_6, b as propTypes_7, g as propTypes_4, i as propTypes_9, f as propTypes_3, d as propTypes_1 } from './index-23943bf4.js';
import { C as Classnames } from './index-8042726d.js';
import { ConfigConsumer as Consumer } from './configProvider/index.js';
import Icon from './Icon/index.js';
import './CodePreview/index.js';
import ReactDOM from 'react-dom';
import './Space/index.js';
import './Notification/index.js';
import './DragList/index.js';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _Dialog$defaultProps;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Dialog = /*#__PURE__*/function (_React$Component) {
  _inherits(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "close", function (e) {
      var onClose = _this.props.onClose;
      if (!onClose) throw new Error("请声明onClose事件");
      onClose(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMasKClose", function () {
      var maskClosable = _this.props.maskClosable;
      if (!maskClosable) return;

      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "renderDialog", function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          className = _this$props.className,
          children = _this$props.children,
          closable = _this$props.closable,
          title = _this$props.title,
          propsFooter = _this$props.footer,
          visible = _this$props.visible,
          destroyOnClose = _this$props.destroyOnClose,
          zIndex = _this$props.zIndex,
          width = _this$props.width,
          centered = _this$props.centered,
          bodyStyle = _this$props.bodyStyle;
      var prefixCls = getPrefixCls("dialog");
      var classes = Classnames("".concat(prefixCls, "-container"), _defineProperty({}, "".concat(prefixCls, "-centered"), centered), className);
      var closeBtn = null;
      var header = null;
      var footer = null;

      if (closable) {
        closeBtn = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-close-btn"),
          onClick: _this.close
        }, /*#__PURE__*/React.createElement(Icon, {
          icon: "close"
        }));
      }

      if (title || closable) {
        header = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-header")
        }, /*#__PURE__*/React.createElement("span", null, title), closeBtn);
      }

      if (propsFooter) {
        footer = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-footer")
        }, " ", propsFooter);
      } // 关闭销毁


      if (!visible && destroyOnClose) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", {
        className: classes,
        style: _objectSpread(_objectSpread({}, bodyStyle), {}, {
          zIndex: zIndex,
          width: width
        })
      }, header, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children), footer);
    });

    _defineProperty(_assertThisInitialized(_this), "renderMask", function () {
      var _this$props2 = _this.props,
          maskClassName = _this$props2.maskClassName,
          mask = _this$props2.mask,
          visible = _this$props2.visible;
      if (!mask || !visible) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "serein-dialog-mask ".concat(maskClassName),
        onClick: _this.onMasKClose
      });
    });

    _this.state = {};
    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {} // 关闭

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          wrapClassName = _this$props3.wrapClassName,
          visible = _this$props3.visible;
      var style = {};
      style.display = visible ? "block" : "none";
      return /*#__PURE__*/React.createElement("div", {
        className: "serein-dialog-wrap ".concat(wrapClassName),
        style: style
      }, this.renderMask(), /*#__PURE__*/React.createElement(Consumer, null, this.renderDialog));
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.defaultProps = (_Dialog$defaultProps = {
  width: 600,
  zIndex: 100,
  visible: false,
  title: "",
  className: "",
  wrapClassName: "",
  maskClassName: "",
  mask: true
}, _defineProperty(_Dialog$defaultProps, "visible", false), _defineProperty(_Dialog$defaultProps, "keyboard", true), _defineProperty(_Dialog$defaultProps, "closable", true), _defineProperty(_Dialog$defaultProps, "maskClosable", true), _defineProperty(_Dialog$defaultProps, "destroyOnClose", false), _defineProperty(_Dialog$defaultProps, "centered", false), _Dialog$defaultProps);
Dialog.propTypes = {
  width: propTypes_8,
  zIndex: propTypes_8,
  title: propTypes_5,
  className: propTypes_5,
  wrapClassName: propTypes_5,
  maskClassName: propTypes_5,
  mask: propTypes_6,
  visible: propTypes_6,
  closable: propTypes_6,
  maskClosable: propTypes_6,
  destroyOnClose: propTypes_6,
  prefixCls: propTypes_5,
  footer: propTypes_7,
  centered: propTypes_6,
  bodyStyle: propTypes_4
};

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper$1(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderFooter", function (_ref) {
      var prefixCls = _ref.prefixCls;
      var _this$props = _this.props,
          cancelText = _this$props.cancelText,
          onText = _this$props.onText,
          onCancel = _this$props.onCancel,
          onOk = _this$props.onOk;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        onClick: onCancel,
        size: "middle",
        className: "".concat(prefixCls, "-cancel")
      }, cancelText), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: onOk,
        size: "middle",
        className: "".concat(prefixCls, "-ok")
      }, onText));
    });

    _defineProperty(_assertThisInitialized(_this), "renderModal", function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;
      var _this$props2 = _this.props,
          title = _this$props2.title,
          visible = _this$props2.visible,
          onClose = _this$props2.onClose,
          className = _this$props2.className,
          children = _this$props2.children,
          maskClosable = _this$props2.maskClosable,
          wrapClassName = _this$props2.wrapClassName,
          maskClassName = _this$props2.maskClassName,
          mask = _this$props2.mask,
          closable = _this$props2.closable,
          destroyOnClose = _this$props2.destroyOnClose,
          footer = _this$props2.footer,
          zIndex = _this$props2.zIndex,
          width = _this$props2.width,
          bodyStyle = _this$props2.bodyStyle;
      var prefixCls = getPrefixCls("modal"); // 默认底部

      var defineFooter = footer;

      if (footer === undefined) {
        defineFooter = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-footer")
        }, _this.renderFooter({
          prefixCls: prefixCls
        }));
      }

      return /*#__PURE__*/React.createElement(Dialog, {
        bodyStyle: bodyStyle,
        width: width,
        zIndex: zIndex,
        title: title,
        visible: visible,
        onClose: onClose,
        className: className,
        wrapClassName: wrapClassName,
        maskClassName: maskClassName,
        mask: mask,
        closable: closable,
        maskClosable: maskClosable,
        destroyOnClose: destroyOnClose,
        prefixCls: prefixCls,
        footer: defineFooter
      }, children);
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Consumer, null, this.renderModal);
    }
  }]);

  return Modal;
}(React.Component);

Modal.defaultProps = {
  width: 600,
  zIndex: 100,
  visible: false,
  title: "",
  className: "",
  wrapClassName: "",
  maskClassName: "",
  mask: true,
  closable: true,
  maskClosable: true,
  destroyOnClose: false,
  prefixCls: "",
  cancelText: "取消",
  onText: "确定",
  centered: false
};
Modal.propTypes = {
  width: propTypes_8,
  zIndex: propTypes_8,
  title: propTypes_5,
  className: propTypes_5,
  wrapClassName: propTypes_5,
  maskClassName: propTypes_5,
  mask: propTypes_6,
  visible: propTypes_6,
  closable: propTypes_6,
  maskClosable: propTypes_6,
  destroyOnClose: propTypes_6,
  prefixCls: propTypes_5,
  footer: propTypes_7,
  cancelText: propTypes_5,
  onText: propTypes_5,
  centered: propTypes_6,
  bodyStyle: propTypes_4
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConfirmDialog = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfirmDialog, _React$Component);

  var _super = _createSuper$2(ConfirmDialog);

  function ConfirmDialog() {
    var _this;

    _classCallCheck(this, ConfirmDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function () {
      var _this$props = _this.props,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? "confirm" : _this$props$type,
          _this$props$icon = _this$props.icon,
          icon = _this$props$icon === void 0 ? "question-circle-fill" : _this$props$icon;
      var classes = Classnames("serein-confirm-icon", _defineProperty({}, "serein-confirm-".concat(type), type));
      return /*#__PURE__*/React.createElement(Icon, {
        icon: icon,
        className: classes
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderActionButton", function () {
      var _this$props2 = _this.props,
          _this$props2$type = _this$props2.type,
          type = _this$props2$type === void 0 ? "confirm" : _this$props2$type,
          onClose = _this$props2.onClose,
          onOk = _this$props2.onOk;

      if (type === "confirm") {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
          size: "middle",
          className: "serein-confirm-btn-left",
          onClick: onClose
        }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
          size: "middle",
          type: "primary",
          onClick: onOk
        }, "\u786E\u8BA4"));
      } else {
        return /*#__PURE__*/React.createElement(Button, {
          size: "middle",
          type: "primary",
          onClick: onClose
        }, "\u77E5\u9053\u4E86");
      }
    });

    return _this;
  }

  _createClass(ConfirmDialog, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          title = _this$props3.title,
          content = _this$props3.content;
      return /*#__PURE__*/React.createElement(Modal, _extends({}, this.props, {
        title: ""
      }), /*#__PURE__*/React.createElement("div", {
        className: "serein-confirm-title"
      }, this.renderIcon(), /*#__PURE__*/React.createElement("span", null, title)), /*#__PURE__*/React.createElement("div", {
        className: "serein-confirm-content"
      }, content), /*#__PURE__*/React.createElement("div", {
        className: "serein-confirm-footer"
      }, this.renderActionButton()));
    }
  }]);

  return ConfirmDialog;
}(React.Component);

function confirm(config) {
  var _oDiv = document.createElement("div");

  document.body.appendChild(_oDiv);

  function destroy() {
    var unmountResult = ReactDOM.unmountComponentAtNode(_oDiv);

    if (unmountResult && _oDiv.parentNode) {
      _oDiv.parentNode.removeChild(_oDiv);
    }
  }

  function render(props) {
    ReactDOM.render( /*#__PURE__*/React.createElement(ConfirmDialog, _extends({}, props, {
      visible: true,
      onClose: destroy,
      footer: false,
      closable: false,
      maskClosable: false,
      width: 400,
      bodyStyle: _objectSpread$1({
        top: "8%"
      }, props.bodyStyle)
    })), _oDiv);
  }

  render(config);
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Modal.warning = function (props) {
  var config = _objectSpread$2({
    icon: "warning-circle-fill",
    type: "warning"
  }, props);

  return confirm(config);
};

Modal.info = function (props) {
  var config = _objectSpread$2({
    icon: "info-circle-fill",
    type: "info"
  }, props);

  return confirm(config);
};

Modal.success = function (props) {
  var config = _objectSpread$2({
    icon: "check-circle-fill",
    type: "success"
  }, props);

  return confirm(config);
};

Modal.error = function (props) {
  var config = _objectSpread$2({
    icon: "close-circle-fill",
    type: "error"
  }, props);

  return confirm(config);
};

Modal.confirm = confirm;

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PreviewImage = /*#__PURE__*/function (_React$Component) {
  _inherits(PreviewImage, _React$Component);

  var _super = _createSuper$3(PreviewImage);

  function PreviewImage(props) {
    var _this;

    _classCallCheck(this, PreviewImage);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "renderCloseBtn", function () {
      var onClose = _this.props.onClose;
      return /*#__PURE__*/React.createElement("div", {
        className: "serein-preview-image-close",
        onClick: onClose
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: "close"
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      _this.setState({
        loadError: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSuccess", function () {
      _this.setState({
        loadError: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderLayout", function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          list = _this$props.list,
          defaultError = _this$props.defaultError;
      var _this$state = _this.state,
          currentIndex = _this$state.currentIndex,
          loadError = _this$state.loadError;
      var prefixCls = getPrefixCls("preview-image");
      var leftBtn = null;
      var rightBtn = null;
      var errorNode = null;

      if (currentIndex !== 0) {
        leftBtn = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-left"),
          onClick: function onClick() {
            return _this.setState({
              currentIndex: currentIndex - 1,
              loadError: false
            });
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          icon: "left"
        }));
      }

      if (currentIndex !== list.length - 1) {
        rightBtn = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-right"),
          onClick: function onClick() {
            return _this.setState({
              currentIndex: currentIndex + 1,
              loadError: false
            });
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          icon: "right"
        }));
      }

      if (loadError) {
        errorNode = defaultError ? defaultError : /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-error")
        }, "\u56FE\u7247\u4E0D\u5B58\u5728");
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, leftBtn, rightBtn, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, !loadError ? /*#__PURE__*/React.createElement("img", {
        src: list[currentIndex],
        alt: "",
        onError: _this.handleError
      }) : errorNode));
    });

    _this.state = {
      currentIndex: props.currentIndex
    };
    return _this;
  }

  _createClass(PreviewImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("load", this.handleSuccess);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("load", this.handleSuccess);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "serein-preview-image-wrap"
      }, this.renderCloseBtn(), /*#__PURE__*/React.createElement(Consumer, null, this.renderLayout));
    }
  }]);

  return PreviewImage;
}(React.Component);

PreviewImage.defaultProps = {
  currentIndex: 0,
  list: []
};
PreviewImage.propTypes = {
  currentIndex: propTypes_8.isRequired,
  list: propTypes_9.isRequired,
  defaultError: propTypes_7
};
var _oDiv = null;

function init() {
  _oDiv = document.createElement("div");
  document.body.appendChild(_oDiv);
}

function destory() {
  if (_oDiv) {
    ReactDOM.unmountComponentAtNode(_oDiv);

    _oDiv.parentNode.removeChild(_oDiv);

    _oDiv = null;
  }
}

var previewImage = function previewImage(_ref2) {
  var _ref2$currentIndex = _ref2.currentIndex,
      currentIndex = _ref2$currentIndex === void 0 ? 0 : _ref2$currentIndex,
      _ref2$list = _ref2.list,
      list = _ref2$list === void 0 ? [] : _ref2$list,
      _ref2$defaultError = _ref2.defaultError,
      defaultError = _ref2$defaultError === void 0 ? '' : _ref2$defaultError;

  if (!_oDiv) {
    init();
  }

  ReactDOM.render( /*#__PURE__*/React.createElement(PreviewImage, {
    currentIndex: currentIndex,
    list: list,
    onClose: destory,
    defaultError: defaultError
  }), _oDiv);
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Checkbox = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  var _super = _createSuper$4(Checkbox);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (disabled) {
        return;
      }

      if (!("checked" in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      onChange && onChange(e);
    });

    _defineProperty(_assertThisInitialized(_this), "renderCheckbox", function (_ref) {
      var _Classnames;

      var getPrefixCls = _ref.getPrefixCls;

      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          children = _this$props2.children,
          onChange = _this$props2.onChange,
          className = _this$props2.className,
          value = _this$props2.value,
          others = _objectWithoutProperties(_this$props2, ["disabled", "children", "onChange", "className", "value"]);

      var checked = _this.state.checked;
      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") {
          prev[key] = others[key];
        }

        return prev;
      }, {});
      var prefixCls = getPrefixCls("checkbox");
      var classes = Classnames((_Classnames = {}, _defineProperty(_Classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_Classnames, "".concat(prefixCls, "-checked"), checked), _Classnames), className);
      return /*#__PURE__*/React.createElement("label", {
        className: "".concat(prefixCls, "-wrap ").concat(classes)
      }, /*#__PURE__*/React.createElement("input", _extends({
        ref: _this.input,
        type: "checkbox",
        disabled: disabled,
        checked: checked,
        onChange: _this.handleChange,
        value: value
      }, globalProps)), /*#__PURE__*/React.createElement("span", null, children));
    });

    var defaultChecked = props.defaultChecked,
        _value = props.value;
    var initChecked = false;

    if (props.defaultChecked) {
      initChecked = Array.isArray(defaultChecked) ? defaultChecked.includes(_value) : defaultChecked;
    }

    var _checked = "checked" in props ? props.checked : initChecked;

    _this.state = {
      checked: _checked
    };
    _this.input = React.createRef();
    return _this;
  }

  _createClass(Checkbox, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Consumer, null, this.renderCheckbox);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ("checked" in props) {
        return _objectSpread$3(_objectSpread$3({}, state), {}, {
          checked: props.checked
        });
      }

      return null;
    }
  }]);

  return Checkbox;
}(React.Component);

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  className: ""
};
Checkbox.propTypes = {
  defaultChecked: propTypes_3([propTypes_6, propTypes_9]),
  checked: propTypes_6,
  disabled: propTypes_6,
  onChange: propTypes_1,
  className: propTypes_5
};

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CheckboxGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  var _super = _createSuper$5(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getOptions", function () {
      var _this$props = _this.props,
          options = _this$props.options,
          disabled = _this$props.disabled;
      return options.map(function (option) {
        // 如果传入的是字符串数组，就组成所需的结构
        if (typeof option === "string") {
          return {
            label: option,
            value: option
          };
        }

        return option;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGroupChange", function (e) {
      var onChange = _this.props.onChange;
      var value = _this.state.value;
      var changeValue = e.target.value;
      var index = value.indexOf(e.target.value);

      if (index === -1) {
        value.push(changeValue);
      } else {
        value.splice(index, 1);
      }

      _this.setState({
        value: value
      }, function () {
        onChange && onChange(value);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderGroup", function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props2 = _this.props,
          options = _this$props2.options,
          disabled = _this$props2.disabled;
      var children = _this.props.children;
      var value = _this.state.value;
      var prefixCls = getPrefixCls("checkgroup");

      if (options && options.length > 0) {
        children = _this.getOptions().map(function (option) {
          return /*#__PURE__*/React.createElement(Checkbox, {
            key: option.value.toString(),
            disabled: "disabled" in option ? option.disabled : disabled,
            checked: value.indexOf(option.value) !== -1,
            value: option.value
          }, option.label);
        });
      } else {
        children = React.Children.map(children, function (child) {
          return React.cloneElement(child, {
            defaultChecked: value,
            disabled: disabled
          });
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-wrap"),
        onChange: _this.handleGroupChange
      }, children);
    });

    _this.state = {
      value: []
    };
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Consumer, null, this.renderGroup);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ("value" in nextProps) {
        return {
          value: nextProps.value || []
        };
      }

      return null;
    }
  }]);

  return CheckboxGroup;
}(React.Component);

CheckboxGroup.defaultProps = {
  options: [],
  value: [],
  disabled: false
};
CheckboxGroup.propTypes = {
  options: propTypes_9,
  onChange: propTypes_1,
  value: propTypes_9,
  disabled: propTypes_6
};

export { Checkbox as C, Modal as M, CheckboxGroup as a, previewImage as p };
