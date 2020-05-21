import React, { Component, isValidElement } from "react";
import { ReactSVG } from "react-svg";
import "./Icon.css";
class Icon extends Component {
  renderIcon = () => {
    const { icon } = this.props;
    if (typeof icon === "string" && icon.slice(0, 3) !== "<svg") {
      return <i className={`iconfont icon-${icon}`}></i>;
    }
    if (isValidElement(icon) || icon instanceof Element) {
      return icon;
    }
    return <ReactSVG src={icon}></ReactSVG>;
  };
  render() {
    const { icon, className = "" } = this.props;
    if (!icon) return null;
    return <i className={className}>{this.renderIcon()}</i>;
  }
}

export default Icon;
