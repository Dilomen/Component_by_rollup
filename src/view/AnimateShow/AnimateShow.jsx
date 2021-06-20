import React from 'react';
import { Animate, Button, CodePreview } from 'cps';
import renderInstruction from './instruction';
import './index.scss';

class AnimateShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeStatus: true,
      slideStatus: true,
    };
  }

  handleFadeClick = () => {
    const { fadeStatus } = this.state;
    this.setState({
      fadeStatus: !fadeStatus,
    });
  };

  handleSlideClick = () => {
    const { fadeStatus } = this.state;
    this.setState({
      slideStatus: !fadeStatus,
    });
  };

  render () {
    const { fadeStatus, slideStatus } = this.state;
    return (
      <>
        <CodePreview>
          <Animate animateName="fade" enter={fadeStatus}>
            <div
              style={{ background: 'red', width: '200px', height: '200px' }}
            />
            <div
              style={{ background: 'red', width: '200px', height: '200px' }}
            />
          </Animate>
          <Button onClick={this.handleFadeClick}>
            {fadeStatus ? '淡出' : '淡入'}
          </Button>
        </CodePreview>
        <CodePreview>
          <Animate animateName="slide" enter={slideStatus}>
            <div
              style={{ background: 'green', width: '200px', height: '200px' }}
            />
          </Animate>
          <Button onClick={this.handleSlideClick}>
            {slideStatus ? '移出' : '移入'}
          </Button>
        </CodePreview>
        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        />
      </>
    );
  }
}

export default AnimateShow;
