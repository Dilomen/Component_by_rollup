import { transferFile } from "utils";

const instrction = `
# previewImage

| 属性         | 说明                   | 类型   | 默认值   |
| ------------ | ---------------------- | ------ | -------- |
| currentIndex | 当前展示的图片         | number | 0        |
| list         | 需要展示的图片列表     | Arrry  | []       |
| defaultError | 图片加载失败的样式显示 | node   | 默认样式 |
`;
const renderInstruction = transferFile(instrction);

export default renderInstruction;
