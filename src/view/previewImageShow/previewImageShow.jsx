import React from "react";
import { previewImage, CodePreview, Space, Icon } from "cps";
import renderInstruction from "./instruction";
import "./index.scss";

const code = `
handleOpenImage = (index, list) => {
  previewImage({
    currentIndex: index,
    list,
  });
};
render() {
  const list = [
  "http://cnpm.dilomen.top:9001/study.jpg",
  "http://cnpm.dilomen.top:9001/meeting.jpg",
  "http://cnpm.dilomen.top:9001/industry.jpg",
  "http://cnpm.dilomen.top:9001/education.jpeg",
];
return (<>
  {list.map((item, index) => (
    <img
      className="preview-show-img"
      src={item}
      key={item}
      onClick={() => this.handleOpenImage(index, list)}
    />
  ))}
  </>)
}

`;

const errorcode = `
handleOpenImage = (index, list) => {
  previewImage({
    currentIndex: index,
    list,
    defaultError: <p style={{color: "#fff"}}>加载失败</p>
  });
};
`

class previewImageShow extends React.Component {
  handleOpenImage = (index, list) => {
    previewImage({
      currentIndex: index,
      list,
    });
  };
  handleErrorImage = (index, list) => {
    previewImage({
      currentIndex: index,
      list,
      defaultError: <p style={{color: "#fff"}}>加载失败</p>
    });
  };
  render() {
    const list = [
      "http://cnpm.dilomen.top:9001/study.jpg",
      "http://cnpm.dilomen.top:9001/meeting.jpg",
      "http://cnpm.dilomen.top:9001/industry.jpg",
      "http://cnpm.dilomen.top:9001/education.jpeg",
    ];
    const errorList = [
      "http://cnpm.dilomen.top:9001/study.jpg",
      "http://cnpm.dilomen.top:9001/meting.jpg",
      "http://cnpm.dilomen.top:9001/industry.jpg",
      "http://cnpm.dilomen.top:9001/education.jpeg",
    ];
    return (
      <>
        <CodePreview title="点击图片" code={code}>
          <Space>
            {list.map((item, index) => (
              <img
                className="preview-show-img"
                src={item}
                key={item}
                onClick={() => this.handleOpenImage(index, list)}
              />
            ))}
          </Space>
        </CodePreview>
        <CodePreview title="自定义失败显示" code={errorcode}>
          <Space>
            {errorList.map((item, index) => (
              <img
                className="preview-show-img"
                src={item}
                key={item}
                onClick={() => this.handleErrorImage(index, errorList)}
              />
            ))}
          </Space>
        </CodePreview>
        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        ></div>
      </>
    );
  }
}

export default previewImageShow;
