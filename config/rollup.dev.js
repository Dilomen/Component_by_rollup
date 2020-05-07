//开启服务插件
const serve = require("rollup-plugin-serve");
// 监听文件改变，并刷新浏览器
const livereload = require("rollup-plugin-livereload");
// 编译css
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const { commonPlugin } = require("./rollup.common");

module.exports = {
  input: "./src/view/index.tsx",
  output: {
    file: "build/index.js",
    format: "iife",
  },
  plugins: [
    postcss({
      extract: `./build/index.css`,
      extensions: [".css", ".scss"],
      plugins: [autoprefixer, cssnano],
    }),
    ...commonPlugin,
    serve({
      open: true, // 是否打开浏览器
      contentBase: "./", // 入口html的文件位置
      historyApiFallback: true, // Set to true to return index.html instead of 404
      host: "localhost",
      port: 8002,
    }),
    livereload(),
  ],
  watch: {
    include: "src/**",
    clearScreen: true,
  },
};
