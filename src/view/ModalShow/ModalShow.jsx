import React from "react";
import { Modal, Button, CodePreview, Space } from "cps";
import renderInstruction from "./instruction";
import "./index.scss";

const baseCode = `jsx
<Button type="primary"
  onClick={() => {
    this.setState({ baseVisible: true });
  }}
>打开弹框</Button>
<Modal
  title="我的计划"
  visible={baseVisible}
  onClose={() => this.setState({ baseVisible: false })}
>
  <li>任务一</li>
  <li>任务二</li>
  <li>任务三</li>
</Modal>
`;

const customCode = `jsx
<Button type="primary"
  onClick={() => {
    this.setState({ customVisible: true });
  }}>
  打开弹框
</Button>
<Modal
  title="我的计划"
  visible={customVisible}
  onClose={() => this.setState({ customVisible: false })}
  footer={<span>自定义底部</span>}
>
  <li>任务一</li>
</Modal>
`;

const confirmCode = `jsx
handleConfirm = () => {
  Modal.confirm({ title: "我是标题", content: "我是内容。。。。。。" });
};
handleConfirmError = () => {
  Modal.error({ title: "我是标题", content: "我是error。。。。。。" });
};
handleConfirmWarn = () => {
  Modal.warning({ title: "我是标题", content: "我是warn。。。。。。" });
};
handleConfirmSuccess = () => {
  Modal.success({ title: "我是标题", content: "我是success。。。。。。" });
};
handleConfirmInfo = () => {
  Modal.info({ title: "我是标题", content: "我是info。。。。。。" });
};

<Button onClick={this.handleConfirm}>confirm</Button>
<Button onClick={this.handleConfirmError}>Error</Button>
<Button onClick={this.handleConfirmWarn}>Warning</Button>
<Button onClick={this.handleConfirmSuccess}>Success</Button>
<Button onClick={this.handleConfirmInfo}>Info</Button>
`;

class ModalShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseVisible: false,
      customVisible: false,
    };
  }

  handleConfirm = () => {
    Modal.confirm({ title: "我是标题", content: "我是内容。。。。。。" });
  };
  handleConfirmError = () => {
    Modal.error({ title: "我是标题", content: "我是error。。。。。。" });
  };
  handleConfirmWarn = () => {
    Modal.warning({ title: "我是标题", content: "我是warn。。。。。。" });
  };
  handleConfirmSuccess = () => {
    Modal.success({ title: "我是标题", content: "我是success。。。。。。" });
  };
  handleConfirmInfo = () => {
    Modal.info({ title: "我是标题", content: "我是info。。。。。。" });
  };

  render() {
    const { baseVisible, customVisible } = this.state;
    return (
      <>
        <CodePreview title="基本" code={baseCode}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({ baseVisible: true });
            }}
          >
            打开弹框
          </Button>
          <Modal
            title="我的计划"
            visible={baseVisible}
            onClose={() => this.setState({ baseVisible: false })}
          >
            <li>任务一</li>
            <li>任务二</li>
            <li>任务三</li>
          </Modal>
        </CodePreview>

        <CodePreview title="自定义底部" code={customCode}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({ customVisible: true });
            }}
          >
            打开弹框
          </Button>
          <Modal
            title="我的计划"
            visible={customVisible}
            onClose={() => this.setState({ customVisible: false })}
            footer={<span>自定义底部</span>}
          >
            <li>任务一</li>
          </Modal>
        </CodePreview>
        <CodePreview title="confirm" code={confirmCode}>
          <Space>
            <Button onClick={this.handleConfirm}>confirm</Button>
            <Button onClick={this.handleConfirmError}>Error</Button>
            <Button onClick={this.handleConfirmWarn}>Warning</Button>
            <Button onClick={this.handleConfirmSuccess}>Success</Button>
            <Button onClick={this.handleConfirmInfo}>Info</Button>
          </Space>
        </CodePreview>
        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        ></div>
      </>
    );
  }
}

export default ModalShow;
