import React from "react";
import { Modal, Button, CodePreview } from "cps";
import renderInstruction from "./instruction";
import "./index.scss";

const baseCode = `
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
`

const customCode = `
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
`

class ModalShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseVisible: false,
      customVisible: false
    };
  }
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
        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        ></div>
      </>
    );
  }
}

export default ModalShow;
