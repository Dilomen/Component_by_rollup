import React, { Component } from "react";
import "./index.scss";
import { transferFile } from "utils";
import classNames from "classnames";
import { ConfigConsumer } from "../configProvider/index.jsx";
import Icon from "../Icon/index.js";
class CodePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }
  renderPreview = ({ getPrefixCls }) => {
    let { children, code = '', title, language = 'jsx' } = this.props;
    const { isExpand } = this.state;
    const prefixCls = getPrefixCls("code-preview");
    const classes = classNames(prefixCls);
    code = '```' + language + code + '```';
  console.log(code)

    return (
      <div className={classes}>
        <div className={`${prefixCls}-title`}>{title}</div>
        <div className={`${prefixCls}-content`}>{children}</div>
        <div
          className={`${prefixCls}-expand`}
          onClick={() => {
            this.setState({ isExpand: !isExpand });
          }}
        >
          <Icon icon={isExpand ? "up" : "down" }></Icon>
        </div>
        <div
          className={`${prefixCls}-code`}
          style={{ display: !isExpand ? 'none' : 'block' }}
          dangerouslySetInnerHTML={{ __html: transferFile(code) }}
        ></div>
      </div>
    );
  };
  render() {
    return <ConfigConsumer>{this.renderPreview}</ConfigConsumer>;
  }
}

export default CodePreview;
