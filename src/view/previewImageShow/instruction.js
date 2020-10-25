import { transferFile } from "utils";

export const code = `
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

export const errorcode = `
handleOpenImage = (index, list) => {
  previewImage({
    currentIndex: index,
    list,
    defaultError: <p style={{color: "#fff"}}>加载失败</p>
  });
};
`

const instrction = `
# previewImage

| 属性         | 说明                   | 类型   | 默认值   |
| ------------ | ---------------------- | ------ | -------- |
| currentIndex | 当前展示的图片         | number | 0        |
| list         | 需要展示的图片列表     | Arrry  | []       |
| defaultError | 图片加载失败的样式显示 | node   | 默认样式 |
`;
const renderInstruction = transferFile(instrction);

export default renderInstruction;
