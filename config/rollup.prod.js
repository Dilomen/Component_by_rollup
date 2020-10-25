// 编译css
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const clear = require("rollup-plugin-clear");
const { commonPlugin, CSSGroup, cModuleMap } = require("./rollup.common");
module.exports = [
  {
    input: "./src/index.js",
    output: {
      format: "esm",
      file: "es/index.js",
    },
    external: ["react", "react-dom"],
    experimentalCodeSplitting: true,
    plugins: [
      postcss({
        extract: `./es/index.css`,
        extensions: [".css", ".scss"],
        plugins: [autoprefixer, cssnano],
      }),
      ...commonPlugin,
    ],
  },
  {
    input: { ...cModuleMap },
    output: {
      format: "esm",
      dir: "es", // 输出到一个目录而不是一个文件
      entryFileNames: "[name]/index.js", // 输出文件名
      minify: true,
      // sourcemap: true,
      exports: "named",
    },
    external: ["react", "react-dom"],
    experimentalCodeSplitting: true,
    plugins: [
      clear({
        targets: ["es"],
      }),
      postcss({
        extract: `./build/index.css`,
        extensions: [".css", ".scss"],
        plugins: [autoprefixer, cssnano],
      }),
      ...commonPlugin,
    ],
  },
  ...Object.values(CSSGroup),
];
