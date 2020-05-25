const fs = require("fs");
const exec = require("child_process").exec;
// exec('mkdir ')

process.stdin.setEncoding("utf8");
process.stdout.write("请输入文件名称？");
process.stdin.on("data", async (input) => {
  if (typeof input === "string") {
    input = input.trim();
    const componentPath = `src/components/${input}`;
    const viewPath = `src/view/${input}Show`;
    try {
      // components
      await execute(`mkdir ./${componentPath}`);
      await execute(`mkdir ./${componentPath}/__test__`);
      await execute(`mkdir ./${viewPath}`);
      fs.writeFileSync(
        getRePath(componentPath, `${input}.jsx`),
        `import React from "react";
import './index.scss';
class ${input} extends React.Component {
    render() { 
        return <>${input}</>;
    }
}
    
export default ${input};`,
        "utf-8"
      );
      fs.writeFileSync(
        getRePath(componentPath, "index.js"),
        `import ${input} from './${input}';\nexport default ${input};`,
        "utf-8"
      );
      fs.writeFileSync(
        getRePath(componentPath, "index.scss"),
        `@import "../../common/style/variable.scss";`,
        "utf-8"
      );
      fs.writeFileSync(getRePath(componentPath, "index.md"), "");
      // view
      fs.writeFileSync(
        getRePath(viewPath, `${input}Show.jsx`),
        `import React from "react";
import { ${input} } from "cps";
import renderInstruction from "./instruction";
import './index.scss';
class ${input}Show extends React.Component {
    render() { 
        return <>
          <div
            className="instruction"
            dangerouslySetInnerHTML={{ __html: renderInstruction }}
          ></div>
        </>;
    }
}
    
export default ${input}Show;`,
        "utf-8"
      );
      fs.writeFileSync(
        getRePath(viewPath, "index.js"),
        `import ${input}Show from './${input}Show';\nexport default ${input}Show;`,
        "utf-8"
      );
      fs.writeFileSync(getRePath(viewPath, "index.scss"), "");
      fs.writeFileSync(
        getRePath(viewPath, "instruction.js"),
        `
  import { transferFile } from "utils";

  const instrction = '';
  const renderInstruction = transferFile(instrction);

  export default renderInstruction;
`
      );
    } catch (err) {
      console.log(err);
    } finally {
      process.exit(0);
    }
  }
});

function execute(cmd) {
  return new Promise((resolve, reject) =>
    exec(cmd, function(err, stdout, stderr) {
      if (err) {
        console.error(err);
        reject(err);
      }
      console.log(stdout);
      console.log(stderr);
      resolve();
    })
  );
}

function getRePath(rootPath, path) {
  return `./${rootPath}/${path}`;
}
