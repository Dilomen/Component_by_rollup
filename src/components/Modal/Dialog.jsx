import React from "react";
import { string, bool, node } from "prop-types";
import { Icon } from "cps";
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
    const { maskClosable } = this.props
    if (!maskClosable) return;
    this.close();
  };

  renderDialog = () => {
    const {
      className,
      children,
      closable,
      title,
      footer,
      visible,
      destroyOnClose,
    } = this.props;
    let closeBtn = null;
    if (closable) {
      closeBtn = (
        <div className="serein-dialog-close-btn" onClick={this.close}>
          <Icon icon="close"></Icon>
        </div>
      );
    }
    // 关闭销毁
    if (!visible && destroyOnClose) {
      return null;
    }
    return (
      <div className={`serein-dialog-container ${className}`}>
        <div className="serein-dialog-header">
          <span>{title}</span>
          {closeBtn}
        </div>
        <div className={`serein-dialog-content`}>{children}</div>
        {footer && <div className="serein-dialog-footer"> {footer}</div>}
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
      <>
        <div className={`serein-dialog-wrap ${wrapClassName}`} style={style}>
          {this.renderMask()}
          {this.renderDialog()}
        </div>
      </>
    );
  }
}

Dialog.defaultProps = {
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
  prefixCls: "",
};

Dialog.propTypes = {
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
};

export default Dialog;
