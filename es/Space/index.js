import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as _assertThisInitialized, e as _createClass } from '../getPrototypeOf-d7a15518.js';
import { _ as _defineProperty } from '../defineProperty-e8b8a880.js';
import React from 'react';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Space = /*#__PURE__*/function (_React$Component) {
  _inherits(Space, _React$Component);

  var _super = _createSuper(Space);

  function Space() {
    var _this;

    _classCallCheck(this, Space);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderSpaceCps", function () {
      var children = _this.props.children;
      return /*#__PURE__*/React.createElement("div", {
        className: "serein-space-wrap",
        style: {
          display: "inline-flex"
        }
      }, React.Children.map(children, function (child) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            marginRight: "8px"
          }
        }, child);
      }));
    });

    return _this;
  }

  _createClass(Space, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderSpaceCps());
    }
  }]);

  return Space;
}(React.Component);

export default Space;
