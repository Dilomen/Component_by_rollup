import React, { Component } from "react";
import { Icon } from "cps";
import "./index.scss";
const IconGroups = [
  "check-circle",
  "close-circle",
  "info-circle",
  "left-circle",
  "down-circle",
  "minus-circle",
  "plus-circle",
  "play-circle",
  "question-circle",
  "right-circle",
  "time out",
  "up-circle",
  "warning-circle",
  "sync",
  "redo",
  "message",
  "poweroff",
  "pie chart",
  "setting",
  "eye",
  "location",
  "edit-square",
  "export",
  "save",
  "app store",
  "close-square",
  "control",
  "code library",
  "detail",
  "minus-square",
  "plus-square",
  "check-square",
  "like",
  "unlike",
  "folder",
  "folder-open",
  "folder-add",
  "scan",
  "right",
  "left",
  "up",
  "down",
  "check",
  "close",
  "check-circle-fill",
  "left-circle-fill",
  "down-circle-fill",
  "minus-circle-fill",
  "close-circle-fill",
  "info-circle-fill",
  "up-circle-fill",
  "right-circle-fill",
  "plus-circle-fill",
  "search",
  "question-circle-fill",
  "warning-circle-fill",
  "check-square-fill",
  "folder-fill",
  "folder-open-fill",
];
class IconShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCopyIcon = (icon) => {
    let tag = document.createElement("input");
    tag.setAttribute("id", "copt_text");
    tag.value = icon;
    tag.style.opacity = 0;
    document.body.appendChild(tag);
    document.getElementById("copt_text").select();
    var successful = document.execCommand("copy");
    if (successful) {
      alert("复制成功");
    } else {
      alert("复制失败");
    }
    document.getElementById("copt_text").remove();
  };

  render() {
    return (
      <div>
        {IconGroups.map((v) => {
          v = v.replace(" ", "");
          return (
            <div
              className="serein-icon-wrap"
              key={v}
              onClick={() => this.handleCopyIcon(v)}
            >
              <Icon icon={v} className="serein-icon"></Icon>
              <p>{v}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default IconShow;
