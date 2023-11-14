
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,

  // 入口文件
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {

  },
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('assets', resolve('examples/assets'))
      .set('components', resolve('examples/components'))
    
    // 配置loader
    config.module
      .rule('js')
      .include
      .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
      .tap(options => {
          return options
      })
  },

})