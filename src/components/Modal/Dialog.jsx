import React from "react";
import { string, bool, node, number, object } from "prop-types";
import { Icon, ConfigConsumer } from "cps";
import Classnames from "classnames";
import "./index.scss";
class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  // 关闭
  close = (e) => {
    const { onClose } = this.props;
    if (!onClose) throw new Error("请声明onClose事件");
    onClose(e);
  };

  // 点击阴影关闭
  onMasKClose = () => {
    const { maskClosable } = this.props;
    if (!maskClosable) return;
    this.close();
  };

  renderDialog = ({ getPrefixCls }) => {
    const {
      className,
      children,
      closable,
      title,
      footer: propsFooter,
      visible,
      destroyOnClose,
      zIndex,
      width,
      centered,
      bodyStyle,
    } = this.props;
    const prefixCls = getPrefixCls("dialog");
    const classes = Classnames(
      `${prefixCls}-container`,
      {
        [`${prefixCls}-centered`]: centered,
      },
      className
    );
    let closeBtn = null;
    let header = null;
    let footer = null;
    if (closable) {
      closeBtn = (
        <div className={`${prefixCls}-close-btn`} onClick={this.close}>
          <Icon icon="close"></Icon>
        </div>
      );
    }
    if (title || closable) {
      header = (
        <div className={`${prefixCls}-header`}>
          <span>{title}</span>
          {closeBtn}
        </div>
      );
    }
    if (propsFooter) {
      footer = <div className={`${prefixCls}-footer`}> {propsFooter}</div>;
    }
    // 关闭销毁
    if (!visible && destroyOnClose) {
      return null;
    }
    return (
      <div className={classes} style={{ ...bodyStyle, zIndex, width }}>
        {header}
        <div className={`${prefixCls}-content`}>{children}</div>
        {footer}
      </div>
    );
  };
  renderMask = () => {
    const { maskClassName, mask, visible } = this.props;
    if (!mask || !visible) return null;
    return (
      <div
        className={`serein-dialog-mask ${maskClassName}`}
        onClick={this.onMasKClose}
      ></div>
    );
  };
  render() {
    const { wrapClassName, visible } = this.props;
    let style = {};
    style.display = visible ? "block" : "none";
    return (
      <div className={`serein-dialog-wrap ${wrapClassName}`} style={style}>
        {this.renderMask()}
        <ConfigConsumer>{this.renderDialog}</ConfigConsumer>
      </div>
    );
  }
}

Dialog.defaultProps = {
  width: 600,
  zIndex: 100,
  visible: false,
  title: "",
  className: "",
  wrapClassName: "",
  maskClassName: "",
  mask: true,
  visible: false,
  keyboard: true,
  closable: true,
  maskClosable: true,
  destroyOnClose: false,
  centered: false,
};

Dialog.propTypes = {
  width: number,
  zIndex: number,
  title: string,
  className: string,
  wrapClassName: string,
  maskClassName: string,
  mask: bool,
  visible: bool,
  closable: bool,
  maskClosable: bool,
  destroyOnClose: bool,
  prefixCls: string,
  footer: node,
  centered: bool,
  bodyStyle: object,
};

export default Dialog;
