// 开发环境
const devConfig = require('./config/config.dev');
// 打包环境
const buildConfig = require('./config/config.build');
const production = process.env.NODE_ENV === 'production'
console.log('production :>> ', production, process.env.NODE_ENV);
module.exports = production ? buildConfig : devConfig;
