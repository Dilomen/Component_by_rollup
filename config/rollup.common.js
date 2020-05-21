const fs = require("fs");
const path = require("path");
const json = require("@rollup/plugin-json");
// rollup-plugin-node-resolve 插件可以告诉 Rollup 如何查找外部模块
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
// 使用babel
const {babel} = require("@rollup/plugin-babel");
// 使用typescript
const typescript = require("rollup-plugin-typescript2");
const ENV = process.env.NODE_ENV;
// 编译css
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
// 变量替换，可以将动态设置的变量提取出来在配置文件中设置
const replace = require("@rollup/plugin-replace");
const clear = require("rollup-plugin-clear");
// 别名
const alias = require("@rollup/plugin-alias");
// 共同plugin
const commonPlugin = [
  alias({
      entries: [
        { find: 'cps', replacement: path.resolve(__dirname, "../src/index.js") },
        { find: 'utils', replacement: path.resolve(__dirname, "../src/utils/index.js") }
      ]
  }),
  resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),
  typescript({
    clean: true,
    tsconfigOverride: {
      compilerOptions: {
        module: "ESNext",
      },
    },
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: "node_modules/**",
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  }),
  commonjs({
    namedExports: {
      "react": ["createElement", "Component", "isValidElement"],
      "react-is": ["isValidElementType"],
      "prop-types": ["func", "oneOf", "oneOfType", "object", "string", "bool", "node"]
    },
  }),
  json(),
  replace({
    "process.env.NODE_ENV": JSON.stringify(ENV),
  }),
];

const componentDir = "./src/components";
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const cModuleMap = cModuleNames.reduce((arr, dirname) => {
  // 防止mac下生成的.DS_Store目录
  if (dirname !== ".DS_Store") {
    arr[dirname] = `${componentDir}/${dirname}/index.js`;
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
    postcss({
      extract: `./es/${cModuleName}/index.css`,
      extensions: [".css", ".scss"],
      plugins: [autoprefixer, cssnano],
    }),
    ...commonPlugin,
  ],
});

let CSSGroup = {};
Object.keys(cModuleMap).map(
  (cModuleName) =>
    (CSSGroup[cModuleName] = createStyle(cModuleName, cModuleMap[cModuleName]))
);

module.exports = {
  commonPlugin,
  CSSGroup,
  cModuleMap,
};
