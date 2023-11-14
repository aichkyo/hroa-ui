module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "hroa-ui", // 组件库名称
        "camel2DashComponentName": false, // 关闭驼峰自动转链式
        "camel2UnderlineComponentName": false // 关闭蛇形自动转链式
      }
    ],
  ]
}
