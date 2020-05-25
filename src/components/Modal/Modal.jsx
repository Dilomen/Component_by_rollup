import React from "react";
import Dialog from "./Dialog";
import { Button, ConfigConsumer } from "cps";
import "./index.scss";
import { string, bool, node, number, object } from "prop-types";
class Modal extends React.Component {
  renderFooter = ({ prefixCls }) => {
    const { cancelText, onText, onCancel, onOk } = this.props;
    return (
      <>
        <Button
          onClick={onCancel}
          size="middle"
          className={`${prefixCls}-cancel`}
        >
          {cancelText}
        </Button>
        <Button
          type="primary"
          onClick={onOk}
          size="middle"
          className={`${prefixCls}-ok`}
        >
          {onText}
        </Button>
      </>
    );
  };

  renderModal = ({ getPrefixCls }) => {
    const {
      title,
      visible,
      onClose,
      className,
      children,
      maskClosable,
      wrapClassName,
      maskClassName,
      mask,
      closable,
      destroyOnClose,
      footer,
      zIndex,
      width,
      bodyStyle,
    } = this.props;
    const prefixCls = getPrefixCls("modal");
    // 默认底部
    let defineFooter = footer;
    if (footer === undefined) {
      defineFooter = (
        <div className={`${prefixCls}-footer`}>
          {this.renderFooter({ prefixCls })}
        </div>
      );
    }
    return (
      <Dialog
        bodyStyle={bodyStyle}
        width={width}
        zIndex={zIndex}
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
  centered: false,
};

Modal.propTypes = {
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
  cancelText: string,
  onText: string,
  centered: bool,
  bodyStyle: object,
};

export default Modal;
