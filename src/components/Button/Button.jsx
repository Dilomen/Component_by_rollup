import React from "react";
import "./index.scss";

class Button extends React.Component {
  render() {
    const { name = "确定" } = this.props;
    return <button className="button">{name}</button>;
  }
}

export default Button;
