const transformIgnorePatterns = ["/dist/", "node_modules/*"];
function getTestRegex(libDir) {
  if (libDir === "dist") {
    return "demo\\.test\\.js$";
  }
  return ".*\\.test\\.(j|t)sx?$";
}

module.exports = {
  globals: {
    __DEV__: true,
  },
  notify: true,
  notifyMode: "failure", // 测试失败时发送通知
  verbose: true,
  setupFiles: ["./tests/setup.js"], // 运行一些配置
  //   setupFilesAfterEnv: ["./tests/setupAfterEnv.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  modulePathIgnorePatterns: ["/_site/"],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    'cps': "<rootDir>/src/index.js",
    '^utils$': "<rootDir>/src/utils/index.js",
    '@tests': "<rootDir>/tests/shared/index.ts"
  }, // 切换引入模块地址
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.tsx?$': 'ts-jest',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/fileTransformer.js"
  },
  // testRegex: getTestRegex(process.env.LIB_DIR),
  collectCoverage: true, // 是否开启收集覆盖率
  collectCoverageFrom: [
    // 需要统计覆盖率的文件
    "src/components/**/*.{ts,tsx,js,jsx}",
    "src/components/**/*.{scss,css,less}",
    "!src/components/*/__tests__/*",
    "!src/components/**/*/interface.{ts,tsx}",
  ],
  coverageDirectory: "<rootDir>/coverage", // 输出的收集文件地址
  // 覆盖率设限
  coverageThreshold: {
    // 如果分支，行和函数的覆盖率不到80％，或者未发现的语句多于10条，不通过单测
    "./src/components": {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
  transformIgnorePatterns: ["node_modules/react"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
    },
  },
  testURL: "http://localhost",
};
