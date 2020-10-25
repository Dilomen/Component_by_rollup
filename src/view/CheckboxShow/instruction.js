
import { transferFile } from "utils";


export const eventCode = `
  handleChange = (e) => {
    const {value, checked} = e.target
    console.log(value, checked);
  };
  <Checkbox onChange={this.handleChange} value="aa">男</Checkbox>
  
  <Checkbox disabled>禁用</Checkbox>
  
  <Checkbox disabled checked>选中禁用</Checkbox>
  `;

export const GroupCode = `
  this.state = {
    defaultValue: ["a"],
  };
  handleGroupChnage = (value) => {
    this.setState({
      defaultValue: value,
    });
  };
  render () {
    return (
      <CheckboxGroup
        options={["a", "b", "c"]}
        onChange={this.handleGroupChnage}
        value={defaultValue}
      ></CheckboxGroup>
    )
  }
  `;

export const GroupCode2 = `
  this.state = {
    defaultValue: ["1"],
  };
  handleGroupChange2 = (value) => {
    this.setState({
      defaultValue2: value,
    });
  }
  render() {
    return (
      <CheckboxGroup onChange={this.handleGroupChange2} value={defaultValue2}>
        <Checkbox value="1">1</Checkbox>
        <Checkbox value="2">2</Checkbox>
        <Checkbox value="3">3</Checkbox>
      </CheckboxGroup>
    )
  }
  `

const instrction = `
  # Checkbox

| 属性           | 说明         | 类型    | 默认值 |
| -------------- | ------------ | ------- | ------ |
| defaultChecked | 是否默认选中 | boolean | false  |
| checked        | 是否选中     | boolean | false  |
| disabled       | 是否禁用     | boolean | false  |
| onChange       | 变化时回调   | func    | -      |

# CheckboxGroup

| 属性     | 说明                                                                                | 类型     | 默认值 |
| -------- | ----------------------------------------------------------------------------------- | -------- | ------ |
| value    | 选中的项                                                                            | string[] | []     |
| options  | 指定可选项，['a', 'b', 'c'] 或 [{label: 'a', value: '1'}, {label: 'b', value: '2'}] | array    | []     |
| disabled | 是否禁用包裹下所有的可选项                                                          | boolean  | false  |
| onChange | 变化时回调                                                                          | func     | -      |

  `;
const renderInstruction = transferFile(instrction);

export default renderInstruction;
