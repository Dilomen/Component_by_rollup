import React from "react";
import { DragList, CodePreview } from "cps";
import renderInstruction from "./instruction";
import "./index.scss";

const verticalCode = [
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

const horCode = [
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



const eventCode = [
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

class DragListShow extends React.Component {
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
    const arr = ["任务一", "任务二", "任务三", "任务四", "任务五"];
    return (
      <>
        <CodePreview title="垂直排序" code={verticalCode}>
          <div className="serein-drag-list">
            <DragList>
              {arr.map((item) => (
                <li className="serein-drag-item" key={item}>
                  {item}
                </li>
              ))}
            </DragList>
          </div>
        </CodePreview>

        <CodePreview title="水平排序" code={horCode}>
          <div className="serein-drag-horizontal-list">
            <DragList itemClassName="serein-drag-horizontal-item" direction="horizontal">
              {arr.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </DragList>
          </div>
        </CodePreview>
        
        <CodePreview title="事件" code={eventCode}>
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
          </div>
        </CodePreview>
        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        ></div>
      </>
    );
  }
}

export default DragListShow;
