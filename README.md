# 开始

项目网站：[http://component.dilomen.com/](http://component.dilomen.com/)

## 安装

```bash
npm install -D serein_ui
```

```bash
yarn add -D serein_ui
```

## 使用

```jsx
import {Modal} from 'serein_ui'
import 'serein_ui/es/index.css'
ReactDOM.render(<Modal visible={true}>Hello Serein</Modal>, document.getElementById('root'));
```

### 按需加载

```bash
yarn add -D serein-import
```

```bash
npm install -D serein-import
```

```js
const sereinImport = require("serein-import");
// 然后配置"babel"的plugins就大功告成了

{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [
                    [
                        sereinImport,
                        { libraryName: "serein_ui", libraryDirectory: "es"},
                    ],
                ],
            },
        },
    ],
},
```

// 代码就会被转化成指定的路径

```js
import { Button } from 'serein_ui';
```

会被转化为

```js
import Button from 'serein_ui/es/Button/index.js
import 'serein_ui/es/Button/index.css
```
