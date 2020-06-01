import React from "react";
import { Animate, Button, CodePreview } from "cps";
import renderInstruction from "./instruction";
import "./index.scss";
class AnimateShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeStatus: true,
      slideStatus: true,
    };
  }

  handleFadeClick = () => {
    this.setState({
      fadeStatus: !this.state.fadeStatus,
    });
  };

  handleSlideClick = () => {
    this.setState({
      slideStatus: !this.state.slideStatus,
    });
  };

  render() {
    const { fadeStatus, slideStatus } = this.state;
    return (
      <>
        <CodePreview>
          <Animate animateName="fade" enter={fadeStatus}>
            <div
              style={{ background: "red", width: "200px", height: "200px" }}
            ></div>
              <div
              style={{ background: "red", width: "200px", height: "200px" }}
            ></div>
          </Animate>
          <Button onClick={this.handleFadeClick}>
            {fadeStatus ? "淡出" : "淡入"}
          </Button>
        </CodePreview>
        <CodePreview>
          <Animate animateName="slide" enter={slideStatus}>
            <div
              style={{ background: "green", width: "200px", height: "200px" }}
            ></div>
          </Animate>
          <Button onClick={this.handleSlideClick}>
            {slideStatus ? "移出" : "移入"}
          </Button>
        </CodePreview>
        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        ></div>
      </>
    );
  }
}

export default AnimateShow;
