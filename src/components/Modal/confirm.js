import React from "react";
import Modal from "./Modal";
import { Icon, Button } from "cps";
import Classnames from "classnames";
import ReactDOM from "react-dom";
class ConfirmDialog extends React.Component {
  renderIcon = () => {
    const { type = "confirm", icon = "question-circle-fill" } = this.props;
    const classes = Classnames("serein-confirm-icon", {
      [`serein-confirm-${type}`]: type,
    });
    return <Icon icon={icon} className={classes}></Icon>;
  };
  renderActionButton = () => {
    const { type = "confirm", onClose, onOk } = this.props;
    if (type === "confirm") {
      return (
        <>
          <Button
            size="middle"
            className="serein-confirm-btn-left"
            onClick={onClose}
          >
            取消
          </Button>
          <Button size="middle" type="primary" onClick={onOk}>
            确认
          </Button>
        </>
      );
    } else {
      return (
        <Button size="middle" type="primary" onClick={onClose}>
          知道了
        </Button>
      );
    }
  };
  render() {
    const { title, content } = this.props;
    return (
      <Modal {...this.props} title="">
        <div className="serein-confirm-title">
          {this.renderIcon()}
          <span>{title}</span>
        </div>
        <div className="serein-confirm-content">{content}</div>
        <div className="serein-confirm-footer">{this.renderActionButton()}</div>
      </Modal>
    );
  }
}

function confirm(config) {
  const _oDiv = document.createElement("div");
  document.body.appendChild(_oDiv);
  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(_oDiv);
    if (unmountResult && _oDiv.parentNode) {
      _oDiv.parentNode.removeChild(_oDiv);
    }
  }
  function render(props) {
    ReactDOM.render(
      <ConfirmDialog
        {...props}
        visible={true}
        onClose={destroy}
        footer={false}
        closable={false}
        maskClosable={false}
        width={400}
        bodyStyle={{ top: "8%", ...props.bodyStyle }}
      />,
      _oDiv
    );
  }
  render(config);
}

export default confirm;
