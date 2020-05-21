module.exports = {
    // preset: "ts-jest",
    // testMatch: ["<rootDir>/src/components/**/__test__/*.(spec|test).(t|j)sx?"],
    testRegex: [/(test|spec)\.[jt]sx?$/],
    transform: {
        // 将.js后缀的文件使用babel-jest处理
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest"
    },
    // 下面非要从重要, 将不忽略 lodash-es, other-es-lib 这些es库, 从而使babel-jest去处理它们
    "transformIgnorePatterns": [
        "/node_modules/(?!(@ky)/).*/"
      ]
};