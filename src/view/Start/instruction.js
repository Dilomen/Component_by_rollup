import { transferFile } from "utils";

function handleCode(code, language) {
  return "```" + language + "\n" + code + "```\n";
}

const installCode = `npm install -D serein_ui
yarn add -D serein_ui
`;

const useCode = `import {Modal} from 'serein_ui'
import 'serein_ui/es/index.css'
ReactDOM.render(<Modal visible={true}>Hello Serein</Modal>, document.getElementById('root'))
`;

const importCode = `yarn add -D serein-import 
或者 npm install -D serein-import

const sereinImport = require("serein-import");
// 然后配置babel的plugins就大功告成了
plugins: [
        ...
        [
        sereinImport,
        { libraryName: "serein_ui", libraryDirectory: "es"},
        ],
    ],
}
// 代码就会被转化成指定的路径
import { Button } from 'serein_ui'
会被转化为
import Button from 'serein_ui/es/Button/index.js
import 'serein_ui/es/Button/index.css' 
`;

const instrction = `
# 开始

## 安装
${handleCode(installCode, "bash")}

## 使用
${handleCode(useCode, "jsx")} 

### 按需加载
${handleCode(importCode, "js")}`;
const renderInstruction = transferFile(instrction);

export default renderInstruction;
