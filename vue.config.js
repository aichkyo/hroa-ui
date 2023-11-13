const { defineConfig } = require('@vue/cli-service')
// import vue from '@vitejs/plugin-vue'
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,

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
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('assets', resolve('examples/assets'))
      .set('components', resolve('examples/components'))
  },

})