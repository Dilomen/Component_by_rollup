import React from "react";
import "./index.scss";
import { ConfigConsumer } from "cps";
import Classnames from "classnames";
import { bool, oneOf } from "prop-types";
import { createRandomStr } from "dark-utils";

// function setChildKey(children) {
//   if (React.isValidElement(children)) {
//     if (!children.key) {
//       return React.cloneElement(children, {
//         key: `serein-animate-${createRandomStr()}`,
//       });
//     }
//   }
//   return children;
// }

// function toArrayChildren(children) {
//   let node = [];
//   React.Children.map(children, (child) => {
//     node.push(setChildKey(child));
//   });
//   return node;
// }

class Animate extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   stateChildren: toArrayChildren(props.children),
    // };
    this.childrenRefs = {};
  }
  renderChild = ({ getPrefixCls }) => {
    // const { stateChildren } = this.state;
    const { animateName, enter = true } = this.props;
    const prefixCls = getPrefixCls("animate");
    const classes = Classnames({
      [`${prefixCls}-${animateName}-enter`]: enter,
      [`${prefixCls}-${animateName}-leave`]: !enter,
    });
    return <div
        className={classes}
      >
        {this.props.children}
      </div>
    // stateChildren.map((child) => (
    //   <div
    //     key={child.key}
    //     ref={(block) => (this.childrenRefs[child.key] = block)}
    //     className={classes}
    //   >
    //     {child}
    //   </div>
    // ));
  };

  render() {
    return <ConfigConsumer>{this.renderChild}</ConfigConsumer>;
  }
}

Animate.defaultProps = {
  enter: true,
};

Animate.propTypes = {
  enter: bool,
  animateName: oneOf(["fade", "toggle", "slide"]),
};

export default Animate;
