import React from "react";
import "./index.scss";
import Classnames from "classnames";
import { ConfigConsumer } from "../configProvider/index.jsx";
import Icon from "../Icon/index";
import { string, bool, oneOfType, func, node, oneOf } from "prop-types";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.btnRef = React.createRef();
  }
  renderButton = ({ getPrefixCls }) => {
    let iconNode = null;
    const {
      prefixCls: customizePrefixCls,
      type,
      size,
      className,
      children,
      icon,
      ghost,
      block,
      onClick,
      htmlType,
      href,
      target,
    } = this.props;
    const prefixCls = getPrefixCls("btn", customizePrefixCls);
    const classes = Classnames(
      [`${prefixCls}`],
      {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-${type}-ghost`]: ghost,
        [`${prefixCls}-block`]: block,
      },
      className
    );

    if (icon) {
      iconNode = <Icon icon={icon} className={`${prefixCls}-icon`}></Icon>;
    }

    if (href) {
      return (
        <a
          href={href}
          target={target}
          ref={this.btnRef}
          onClick={onClick}
          className={classes}
        >
          {iconNode}
          {children}
        </a>
      );
    }

    return (
      <button
        type={htmlType}
        ref={this.btnRef}
        onClick={onClick}
        className={classes}
      >
        {iconNode}
        {children}
      </button>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderButton}</ConfigConsumer>;
  }
}

Button.defaultProps = {
  ghost: false,
  block: false,
  htmlType: "button",
  children: "btn",
  size: "large",
  type: "default",
};
Button.propTypes = {
  ghost: bool,
  block: bool,
  htmlType: oneOf(["submit", "button", "reset"]),
  children: node,
  size: oneOf(["small", "middle", "large"]),
  type: oneOf(["default", "primary", "link", "danger"]),
  href: string,
  target: string,
  onClick: func,
  icon: oneOfType([string, node]),
};
export default Button;
