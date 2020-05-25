import React from "react";
import { Notification, CodePreview } from "cps";
import renderInstruction from "./instruction";
import "./index.scss";
class NotificationShow extends React.Component {
  render() {
    return (
      <>
        <CodePreview title="基本">
          <Notification></Notification>;
        </CodePreview>
        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        ></div>
      </>
    )
  }
}

export default NotificationShow;
