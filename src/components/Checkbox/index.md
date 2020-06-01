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
