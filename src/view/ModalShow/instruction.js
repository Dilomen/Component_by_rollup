import { transferFile } from "utils";

const instrction = `
# Modal

| 属性           | 说明                                           | 类型    | 默认值 |
| -------------- | ---------------------------------------------- | ------- | ------ |
| visible        | 控制弹出框的显示                               | boolean | false  |
| title          | 弹出框标题                                     | string  | -      |
| className      | 弹出框内容样式                                 | string  | -      |
| wrapClassName  | 弹出框整个包裹样式                             | string  | -      |
| maskClassName  | 相当于 a 链接的 target 属性，href 存在时生效   | string  | -      |
| mask           | 是否需要阴影遮罩                               | string  | button |
| closable       | 关闭按钮                                       | boolean | true   |
| maskClosable   | 是否可点击阴影遮罩关闭                         | boolean | true   |
| destroyOnClose | 关闭是否销毁组件                               | boolean | false  |
| cancelText     | 取消文本                                       | string  | '取消‘ |
| onText         | 确认文本                                       | string  | '确定' |
| onCancel       | 取消事件                                       | func    | -      |
| onText         | 确认事件                                       | func    | -      |
| footer         | 底部内容，可以设置为 null 和 false，不需要底部 | node    | -      |
`;
const renderInstruction = transferFile(instrction);

export default renderInstruction;
