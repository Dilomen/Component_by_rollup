import { transferFile } from "utils";

const instrction = `
# Button

| 属性      | 说明                                                  | 类型    | 默认值  |
| --------- | ----------------------------------------------------- | ------- | ------- |
| type      | 设置按钮类型，可选值为 primary default danger link    | string  | default |
| size      | 设置按钮类型，可选值为 small middle large             | string  | large   |
| ghost     | 幽灵属性                                              | boolean | false   |
| href      | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string  | -       |  |
| target    | 相当于 a 链接的 target 属性，href 存在时生效          | string  | -       |
| htmlType  | 设置 button 原生的 type 值                            | string  | button  |
| icon      | 设置按钮的图标类型                                    | string  | -       |
| className | 添加 class 样式                                       | object  | {}      |
| onClick   | 点击 button                                           | func    | -       |
| children  | button 内容                                           | -       | 'btn'   |
| block     | 是否块状样式                                          | boolean | false   |
| style     | 行内样式                                              | object  | -       |
`;

const renderInstruction = transferFile(instrction);

export default renderInstruction;
