import React from "react";
import Dialog from "./Dialog";
import { Button, ConfigConsumer } from "cps";
import "./index.scss";
import { string, bool, node } from "prop-types";
class Modal extends React.Component {
  renderFooter = () => {
    const { cancelText, onText, onCancel, onOk } = this.props;
    return (
      <>
        <Button onClick={onCancel} size="middle" className="serein-modal-cancel">
          {cancelText}
        </Button>
        <Button type="primary" onClick={onOk} size="middle" className="serein-modal-ok">
          {onText}
        </Button>
      </>
    );
  };

  renderModal = () => {
    const {
      title,
      visible,
      onClose,
      className,
      children,
      maskClosable,
      prefixCls,
      wrapClassName,
      maskClassName,
      mask,
      closable,
      destroyOnClose,
      footer,
    } = this.props;
    // 默认底部
    let defineFooter = footer;
    if (footer === undefined) {
      defineFooter = (
        <div className="serein-modal-footer">{this.renderFooter()}</div>
      );
    }
    return (
      <Dialog
        title={title}
        visible={visible}
        onClose={onClose}
        className={className}
        wrapClassName={wrapClassName}
        maskClassName={maskClassName}
        mask={mask}
        closable={closable}
        maskClosable={maskClosable}
        destroyOnClose={destroyOnClose}
        prefixCls={prefixCls}
        footer={defineFooter}
      >
        {children}
      </Dialog>
    );
  };
  render() {
    return <ConfigConsumer>{this.renderModal}</ConfigConsumer>;
  }
}

Modal.defaultProps = {
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
  onText: "确定"
};

Modal.propTypes = {
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
  cancelText: string,
  onText: string
};

export default Modal;
