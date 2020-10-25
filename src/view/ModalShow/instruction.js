import { transferFile } from "utils";

export const baseCode = `jsx
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

export const customCode = `jsx
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

export const confirmCode = `jsx
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


const instrction = `
# Modal

| 属性           | 说明                                           | 类型    | 默认值 |
| -------------- | ---------------------------------------------- | ------- | ------ |
| width          | 弹出框的宽度                                   | number  | 600    |
| zIndex         | 弹出框的 z-index 属性                          | number  | 100    |
| visible        | 控制弹出框的显示                               | boolean | false  |
| title          | 弹出框标题                                     | string  | -      |
| className      | 弹出框内容样式                                 | string  | -      |
| wrapClassName  | 弹出框整个包裹样式                             | string  | -      |
| maskClassName  | 阴影遮罩样式                                   | string  | -      |
| mask           | 是否需要阴影遮罩                               | string  | button |
| closable       | 关闭按钮                                       | boolean | true   |
| maskClosable   | 是否可点击阴影遮罩关闭                         | boolean | true   |
| destroyOnClose | 关闭是否销毁组件                               | boolean | false  |
| cancelText     | 取消文本                                       | string  | '取消‘ |
| onText         | 确认文本                                       | string  | '确定' |
| onCancel       | 取消事件                                       | func    | -      |
| onOk           | 确认事件                                       | func    | -      |
| footer         | 底部内容，可以设置为 null 和 false，不需要底部 | node    | -      |
| bodyStyle      | 弹出框样式                                     | object  | -      |
`;
const renderInstruction = transferFile(instrction);

export default renderInstruction;
