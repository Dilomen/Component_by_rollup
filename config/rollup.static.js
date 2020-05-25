// 编译css
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const { commonPlugin } = require("./rollup.common");
module.exports = [
  {
    input: "./src/view/index.jsx",
    output: {
      format: "iife",
      file: "static/index.js",
    },
    external: ["react", "react-dom"],
    experimentalCodeSplitting: true,
    plugins: [
      postcss({
        extract: "static/index.css",
        extensions: [".css", ".scss"],
        plugins: [autoprefixer, cssnano],
      }),
      ...commonPlugin,
    ],
  }
];
