// rollup.config.js
const json = require("rollup-plugin-json");
// rollup-plugin-node-resolve 插件可以告诉 Rollup 如何查找外部模块
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
// 使用babel
const babel = require("rollup-plugin-babel");
// 使用typescript
const typescript = require("rollup-plugin-typescript2");
// 变量替换，可以将动态设置的变量提取出来在配置文件中设置
const replace = require("rollup-plugin-replace");


const fs = require("fs");
const path = require("path");
const clear = require("rollup-plugin-clear");
// 编译css
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const componentDir = path.resolve(__dirname, "../src/components");
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const cModuleMap = cModuleNames.reduce((arr, dirname) => {
  // 防止mac下生成的.DS_Store目录
  if (dirname !== ".DS_Store") {
    arr[dirname] = `${componentDir}/${dirname}/index.ts`;
  }
  return arr;
}, {});
const createStyle = (cModuleName, path) => ({
  input: { [cModuleName]: path },
  output: {
    dir: `noNeed/${cModuleName}/index.js`,
    format: "esm",
  },
  plugins: [
    clear({ targets: ["noNeed"] }),
    resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
    postcss({
      extract: `./es/${cModuleName}/index.css`,
      extensions: [".css", ".scss"],
      plugins: [autoprefixer, cssnano],
    }),
    typescript({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: "ESNext",
          },
        },
      }),
      commonjs(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
        extensions: [".ts", ".tsx", "js", "jsx"],
      }),
      json()
  ],
});

let CSSGroup = {};
Object.keys(cModuleMap).map(
  (cModuleName) =>
    CSSGroup[cModuleName] = createStyle(cModuleName, cModuleMap[cModuleName])
);

module.exports = CSSGroup;
