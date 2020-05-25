import React, { Component, isValidElement } from "react";
import { ReactSVG } from "react-svg";
import "./Icon.css";
class Icon extends Component {
  renderIcon = () => {
    const { icon, className = "" } = this.props;
    if (typeof icon === "string" && icon.slice(0, 3) !== "<svg") {
      return <i className={`iconfont icon-${icon} ${className}`}></i>;
    }
    if (isValidElement(icon) || icon instanceof Element) {
      return <i className={className}>{icon}</i>;
    }
    return <ReactSVG src={icon} className={className}></ReactSVG>;
  };
  render() {
    const { icon } = this.props;
    if (!icon) return null;
    return <>{this.renderIcon()}</>;
  }
}

export default Icon;
