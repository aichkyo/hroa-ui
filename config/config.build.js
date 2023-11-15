
const { defineConfig } = require('@vue/cli-service')
const fs = require('fs');
const path = require('path')
const join = path.join
const resolve = dir => path.join(__dirname, '../', dir);


module.exports = defineConfig({
  transpileDependencies: true,

  //  输出文件目录
  outputDir: resolve('lib'),
  productionSourceMap: false,
  
  //  webpack配置
  configureWebpack: {
    //  入口文件
    entry: getComponentEntries('examples/packages'),
    //  输出配置
    output: {
        filename: '[name]/index.js',//  文件名称
        libraryTarget: 'umd',//  构建依赖类型
        libraryExport: 'default',//  库中被导出的项
        library: 'hroa-ui'//  引用时的依赖名
    }
  },
  
  css: {
    sourceMap: false,
    extract: {
        filename: '[name]/index.css'
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
    
    config.optimization.delete('splitChunks');
    config.plugins.delete('copy');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('html');
    config.plugins.delete('hmr');
    config.entryPoints.delete('app');
  },

})

// 给每个组件都设置独立的入口
function getComponentEntries(path) {

  let files = fs.readdirSync(resolve(path));
  console.log('files :>> ', files);
  const componentEntries = files.reduce((fileObj, item) => {
      //  文件路径
      const itemPath = join(path, item);
      //  在文件夹中
      const isDir = fs.statSync(itemPath).isDirectory();
      const [name, suffix] = item.split('.');

      //  文件中的入口文件
      if (isDir) {
          fileObj[item] = resolve(join(itemPath, 'index.js'));
      }
      //  文件夹外的入口文件
      else if (suffix === 'js') {
          fileObj[name] = resolve(`${itemPath}`);
      }
      return fileObj;
  }, {});
  console.log('componentEntries :>> ', componentEntries);
  return Object.values(componentEntries);
}
