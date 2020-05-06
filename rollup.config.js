// rollup.config.js
const json = require("rollup-plugin-json");
// rollup-plugin-node-resolve 插件可以告诉 Rollup 如何查找外部模块
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
// 使用babel
const babel = require("rollup-plugin-babel");
// 使用typescript
const typescript = require("rollup-plugin-typescript2");
//开启服务插件
const serve = require("rollup-plugin-serve");
// 监听文件改变，并刷新浏览器
const livereload = require("rollup-plugin-livereload");
// 编译css
const postcss = require("rollup-plugin-postcss");
const sass = require("node-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
// 变量替换，可以将动态设置的变量提取出来在配置文件中设置
const replace = require("rollup-plugin-replace");


const clear = require('rollup-plugin-clear');
const image = require("rollup-plugin-img");

// const tsImportPluginFactory = require("ts-import-plugin");
const fs = require("fs");
const path = require("path");
const CSSGroup = require('./config/index')
const componentDir = "./src/components";
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const cModuleMap = cModuleNames.reduce((arr, dirname) => {
  // 防止mac下生成的.DS_Store目录
  if (dirname !== ".DS_Store") {
    arr[dirname] = `${componentDir}/${dirname}/index.ts`;
  }
  return arr;
}, {});
// 当前环境
const ENV = process.env.NODE_ENV;

module.exports = [{
  input: ENV === "development" ? "./src/view/index.tsx" : {index: "./src/index.ts", ...cModuleMap},
  output: ENV === "development" ? {
      file: 'build/index.js',
      format: 'iife'
  } : {
    format: "esm",
    dir: 'es', // 输出到一个目录而不是一个文件
    entryFileNames: '[name]/index.js', // 输出文件名
    minify: true,
    // sourcemap: true,
    exports: 'named'
  },
  // external: ['react', 'react-dom'],
  experimentalCodeSplitting: true,
  plugins: [
    clear({
      targets: ['es']
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    postcss({
      extract: `./build/index.css`,
      extensions: [".css", ".scss"],
      plugins: [autoprefixer, cssnano]
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
    json(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(ENV),
    }),
    ENV === "development" &&
      serve({
        open: true, // 是否打开浏览器
        contentBase: "./", // 入口html的文件位置
        historyApiFallback: true, // Set to true to return index.html instead of 404
        host: "localhost",
        port: 8002,
      }),
    ENV === "development" && livereload(),
  ],
  watch: {
    include: "src/**",
    clearScreen: true,
  },
}, ...(Object.values(CSSGroup))];
