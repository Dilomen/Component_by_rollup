import React from "react";
import { DragList, CodePreview } from "cps";
import renderInstruction, { eventCode, verticalCode, horCode } from "./instruction";
import "./index.scss";

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
