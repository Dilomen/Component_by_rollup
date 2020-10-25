import { transferFile } from "utils";


export const verticalCode = [
  `jsx
const arr = ["任务一", "任务二", "任务三", "任务四", "任务五"];
render() {
  return (
    <div className="serein-drag-list">
      <DragList>
        {arr.map((item) => (
          <li className="serein-drag-item" key={item}>{item}</li>
        ))}
      </DragList>
    </div>
  )
}
`,
  `css
.serein-drag-item {
  height: 50px;
  border: 1px solid #333;
  list-style: none;
  text-align: center;
  margin: 5px;
  width: 400px;
  line-height: 50px;
  background: #999;
}
`,
];

export const horCode = [
  `jsx
const arr = ["任务一", "任务二", "任务三", "任务四", "任务五"];
render() {
  return (
    <div className="serein-drag-horizontal-list">
      <DragList itemClassName="serein-drag-horizontal-item" direction="horizontal">
        {arr.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </DragList>
    </div>
  )
}
`,
  `css
.serein-drag-horizontal-item {
  height: 50px;
  border: 1px solid #333;
  list-style: none;
  text-align: center;
  margin: 5px;
  width: 400px;
  line-height: 50px;
  background: #999;
  display: inline-block;
}
`,
];



export const eventCode = [
  `jsx
const arr = ["任务一", "任务二", "任务三", "任务四", "任务五"];

handleDragEnd = (keys) => {
  console.log(keys);
};
handleDragMove = (node, pointNode) => {
  console.log(node, pointNode);
  // if (...)  return false;
};
handleDragStart = (currentNode) => {
  console.log(currentNode);
  // if (...)  return false;
};

render() {
  return (
    <div className="serein-drag-list">
    <DragList
      beforeDragStart={this.handleDragStart}
      beforeDragMove={this.handleDragMove}
      afterDragEnd={this.handleDragEnd}
    >
      {arr.map((item) => (
        <li className="serein-drag-item" key={item}>
          {item}
        </li>
      ))}
    </DragList>
  </div>)
}
`,
];

const instrction = `
# DragList

| 属性            | 说明                                                             | 类型                     | 默认值                         |
| --------------- | ---------------------------------------------------------------- | ------------------------ | ------------------------------ |
| isCopyNode      | 是否显示拖拉元素效果                                             | bool                     | true                           |
| beforeDragStart | 拖动前事件，可以返回 false(undefined 等不会阻止)，来阻止默认操作 | func                     | (拖拉元素) => {}               |
| beforeDragMove  | 拖动中事件，可以返回 false(undefined 等不会阻止)，来阻止默认操作 | func                     | (拖拉元素，鼠标所在元素) => {} |
| afterDragEnd    | 拖动完成事件，返回新的排序序号（key）                            | func                     | （keys）=> {}                  |
| itemClassName   | 每个子项的样式                                                   | string                   | ""                             |
| direction       | 水平排序还是垂直                                                 | "horizontal", "vertical" | "vertical"                     |
#### 同一个页面是否有多个 DragList 组件，如果有多个，事件就会绑定到对应的父组件，相互隔离，如果只有一个那么就绑定在 document 上
`;
const renderInstruction = transferFile(instrction);

export default renderInstruction;
