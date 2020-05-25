import React from "react";
import { Button, Icon, CodePreview, Space } from "cps";
import renderInstruction from "./instruction";

const typeCode = `jsx
    <Button type='primary'>确定</Button>
    <Button>默认</Button>
    <Button type="danger">danger</Button>
    <Button type="link" href="http://www.baidu.com">Link</Button>
    <Button icon={<Icon icon={"search"}></Icon>}></Button>
    <Button type="primary">确定</Button>
    <Button>默认</Button>
    <Button type="danger">danger</Button>
    <Button type="link" href="http://www.baidu.com">Link</Button>
    <Button icon={<Icon icon={"search"}></Icon>}></Button>
`;

const sizeCode = `jsx
    <Button type="link" size="middle">Link</Button>
    <Button type="primary" size="small">确定</Button>
    <Button size="middle">默认</Button>
    <Button type="danger" size="large">danger</Button>
`;

const ghostCode = `jsx
    <Button type="primary" ghost>确定</Button>
    <Button ghost>默认</Button>
    <Button type="danger" ghost>danger</Button>
`;

const blockCode = `jsx
    <Button type="primary" block>确定</Button>
    <Button block>默认</Button>
    <Button type="danger" block>danger</Button>
`

class Form extends React.Component {
  state = {};
  render() {
    return (
      <>
        <CodePreview title="类型" code={typeCode}>
          <Space>
            <Button type="primary">确定</Button>
            <Button>默认</Button>
            <Button type="danger">danger</Button>
            <Button type="link" href="http://www.baidu.com">
              Link
            </Button>
            <Button icon={<Icon icon={"search"}></Icon>}></Button>
          </Space>
        </CodePreview>

        <CodePreview title="大小" code={sizeCode}>
          <Space>
            <Button type="link" size="middle">
              Link
            </Button>
            <Button type="primary" size="small">
              确定
            </Button>
            <Button size="middle">默认</Button>
            <Button type="danger" size="large">
              danger
            </Button>
          </Space>
        </CodePreview>

        <CodePreview title="灵魂按钮" code={ghostCode}>
          <Space>
            <Button type="primary" ghost>
              确定
            </Button>
            <Button ghost>默认</Button>
            <Button type="danger" ghost>
              danger
            </Button>
          </Space>
        </CodePreview>

        <CodePreview title="灵魂按钮" code={blockCode}>
          <Button type="primary" block>
            确定
          </Button>
          <Button block>默认</Button>
          <Button type="danger" block>
            danger
          </Button>
        </CodePreview>

        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        ></div>
      </>
    );
  }
}

export default Form;
