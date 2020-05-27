import React from "react";
import "./index.scss";
import { array, number, node } from "prop-types";
import ReactDOM from "react-dom";
import { Icon, ConfigConsumer } from "cps";
class PreviewImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.currentIndex,
    };
  }
  componentDidMount() {
    document.addEventListener("load", this.handleSuccess);
  }
  componentWillUnmount() {
    document.removeEventListener("load", this.handleSuccess);
  }
  renderCloseBtn = () => {
    const { onClose } = this.props;
    return (
      <div className="serein-preview-image-close" onClick={onClose}>
        <Icon icon="close"></Icon>
      </div>
    );
  };
  handleError = () => {
    this.setState({ loadError: true });
  };
  handleSuccess = () => {
    this.setState({ loadError: false });
  };
  renderLayout = ({ getPrefixCls }) => {
    const { list, defaultError } = this.props;
    const { currentIndex, loadError } = this.state;
    const prefixCls = getPrefixCls("preview-image");
    let leftBtn = null;
    let rightBtn = null;
    let errorNode = null;
    if (currentIndex !== 0) {
      leftBtn = (
        <div
          className={`${prefixCls}-left`}
          onClick={() =>
            this.setState({ currentIndex: currentIndex - 1, loadError: false })
          }
        >
          <Icon icon="left"></Icon>
        </div>
      );
    }
    if (currentIndex !== list.length - 1) {
      rightBtn = (
        <div
          className={`${prefixCls}-right`}
          onClick={() =>
            this.setState({ currentIndex: currentIndex + 1, loadError: false })
          }
        >
          <Icon icon="right"></Icon>
        </div>
      );
    }

    if (loadError) {
      errorNode = defaultError ? (
        defaultError
      ) : (
        <div className={`${prefixCls}-error`}>图片不存在</div>
      );
    }

    return (
      <>
        {leftBtn}
        {rightBtn}
        <div className={`${prefixCls}-content`}>
          {!loadError ? (
            <img src={list[currentIndex]} alt="" onError={this.handleError} />
          ) : (
            errorNode
          )}
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="serein-preview-image-wrap">
        {this.renderCloseBtn()}
        <ConfigConsumer>{this.renderLayout}</ConfigConsumer>
      </div>
    );
  }
}

PreviewImage.defaultProps = {
  currentIndex: 0,
  list: [],
};

PreviewImage.propTypes = {
  currentIndex: number.isRequired,
  list: array.isRequired,
  defaultError: node
};
let _oDiv = null;
function init() {
  _oDiv = document.createElement("div");
  document.body.appendChild(_oDiv);
}

function destory() {
  if (_oDiv) {
    ReactDOM.unmountComponentAtNode(_oDiv);
    _oDiv.parentNode.removeChild(_oDiv);
    _oDiv = null;
  }
}

const previewImage = function({ currentIndex = 0, list = [], defaultError = '' }) {
  if (!_oDiv) {
    init();
  }
  ReactDOM.render(
    <PreviewImage
      currentIndex={currentIndex}
      list={list}
      onClose={destory}
      defaultError={defaultError}
    ></PreviewImage>,
    _oDiv
  );
};

export default previewImage;
