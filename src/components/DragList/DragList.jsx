import React from "react";
import { string, func, bool } from "prop-types";
import { tryPromiseFunc } from "dark-utils";
import "./index.scss";
// 通过闭包来区分多个DragList组件
let dragIndex = 0;
class DragList extends React.Component {
  constructor(props) {
    super(props);
    this.dragList = React.createRef();
    // 防止一个应用中使用多个DragList组件，导致共享一个闭包的问题
    this.currentNode = null;
    this.isClickEvent = false;
    this._startX = 0;
    this._startY = 0;
    this.pointNode = null;
    this.currentNodeTop = 0;
    this.currentNodeLeft = 0;
    this.copyNode = null;
    dragIndex++;
  }
  componentDidMount() {
    let dragWrapLength =
      document.getElementsByClassName("serein-dragList-wrap").length || 1;
    this._oDivWrap = dragWrapLength > 1 ? this.dragList.current : document;
    this._oDivWrap.addEventListener("mousedown", this.handleMouseDown);
    this._oDivWrap.addEventListener("click", this.docClick);
  }

  componentWillUnmount() {
    this._oDivWrap.removeEventListener("mousedown", this.handleMouseDown);
    this._oDivWrap.removeEventListener("click", this.docClick);
  }

  docClick = () => {
    this.isClickEvent = true;
  };

  handleMouseDown = (e) => {
    const { beforeDragStart } = this.props;
    // 当元素执行click事件时，阻止onmousedown执行的内容
    this.isClickEvent = false;
    setTimeout(async () => {
      this._startX = e.clientX;
      this._startY = e.clientY;
      let node = document.elementFromPoint(this._startX, this._startY);
      node = this.findContainerChild(node);
      // 监听父级事件
      let isContinue = await tryPromiseFunc(beforeDragStart, node);
      if (isContinue === false) return false;
      if (!node) return false;
      this.currentNode = node;
      let elementSite = this.getEleSizeAndSite(node);
      this.currentNodeTop = elementSite.y;
      this.currentNodeLeft = elementSite.x;
      this.docMouseEvent();
    }, 200);
  };

  handleMouseMove = async (e) => {
    const { isCopyNode, beforeDragMove } = this.props;
    window.getSelection
    ? window.getSelection().removeAllRanges()
    : document.selection.empty();
    let _moveX = e.clientX;
    let _moveY = e.clientY;
    this.currentNode.classList.add("serein-draping-item");
    if (isCopyNode && !this.copyNode) {
      this.copyNode = this.currentNode.cloneNode(true);
      this.copyNode.classList.add("serein-draping-copy-item");
      document.body.appendChild(this.copyNode);
    }
    if (this.copyNode) {
      this.copyNode.style.top =
        this.currentNodeTop + (_moveY - this._startY) + "px";
      this.copyNode.style.left =
        this.currentNodeLeft + (_moveX - this._startX) + "px";
    }
    this.pointNode = document.elementFromPoint(_moveX, _moveY);
    this.pointNode = this.findContainerChild(this.pointNode);
    let isContinue = await tryPromiseFunc(
      beforeDragMove,
      this.currentNode,
      this.pointNode
    );
    if (isContinue === false) return false;
    if (this.pointNode) {
      let _pointSite = this.getEleSizeAndSite(this.pointNode);
      if (_moveY <= _pointSite.y + _pointSite.height / 2) {
        this.pointNode.parentNode.insertBefore(
          this.currentNode,
          this.pointNode
        );
      } else {
        this.pointNode.parentNode.insertBefore(
          this.currentNode,
          this.pointNode.nextElementSibling
        );
      }
    }
  };

  handleMouseUp = () => {
    const { afterDragEnd } = this.props;
    let _oDivWrap = this.dragList.current;
    let children = Array.from(_oDivWrap.children) || [];
    let result = children.map((ele) => ele.dataset.key);
    afterDragEnd && afterDragEnd(result);
    this.currentNode.classList.remove("serein-draping-item");
    this.docMouseEvent(true);
    if (this.copyNode) {
      document.body.removeChild(this.copyNode);
    }
    this.clear();
  };

  clear() {
    this.currentNode = null;
    this.isClickEvent = false;
    this._startX = 0;
    this._startY = 0;
    this.pointNode = null;
    this.currentNodeTop = 0;
    this.currentNodeLeft = 0;
    this.copyNode = null;
  }

  docMouseEvent(remove) {
    if (remove) {
      this._oDivWrap.removeEventListener("mouseup", this.handleMouseUp);
      this._oDivWrap.removeEventListener("mousemove", this.handleMouseMove);
      this._oDivWrap.removeEventListener("mouseleave", this.handleMouseUp);
    } else {
      if (this.isClickEvent) return false;
      this._oDivWrap.addEventListener("mouseup", this.handleMouseUp);
      this._oDivWrap.addEventListener("mousemove", this.handleMouseMove);
      this._oDivWrap.addEventListener("mouseleave", this.handleMouseUp);
    }
  }

  findContainerChild(node) {
    if (node === document.documentElement || !(node instanceof HTMLElement))
      return null;
    if (node.classList.contains("serein-dragList-item")) {
      return node;
    } else {
      let parentNode = node.parentNode;
      return this.findContainerChild(parentNode);
    }
  }

  getEleSizeAndSite = (ele) => {
    return ele.getBoundingClientRect();
  };

  render() {
    const { children } = this.props;
    return (
      <div ref={this.dragList} className={`serein-dragList-wrap`}>
        {React.Children.map(children, (child, index) => (
          <div
            className="serein-dragList-item"
            id={`serein-dragList-item-${index}`}
            data-key={child.key}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
}

DragList.defaultProps = {
  isCopyNode: true,
};

DragList.propTypes = {
  beforeDragStart: func,
  beforeDragMove: func,
  afterDragEnd: func,
  isCopyNode: bool,
};
export default DragList;
