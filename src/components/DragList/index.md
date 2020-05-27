# DragList

| 属性            | 说明                                                             | 类型                     | 默认值                         |
| --------------- | ---------------------------------------------------------------- | ------------------------ | ------------------------------ |
| isCopyNode      | 是否显示拖拉元素效果                                             | bool                     | true                           |
| beforeDragStart | 拖动前事件，可以返回 false(undefined 等不会阻止)，来阻止默认操作 | func                     | (拖拉元素) => {}               |
| beforeDragMove  | 拖动中事件，可以返回 false(undefined 等不会阻止)，来阻止默认操作 | func                     | (拖拉元素，鼠标所在元素) => {} |
| afterDragEnd    | 拖动完成事件，返回新的排序序号（key）                            | func                     | （keys）=> {}                  |
| itemClassName   | 每个子项的样式                                                   | string                   | ""                             |
| direction       | 水平排序还是垂直                                                 | "horizontal", "vertical" | "vertical"                     |

#### 同一个页面是否有多个 DragList 组件，如果有多个，事件就会绑定到对应的父组件，相互隔离，如果只有一个那么就绑定在 document 上
