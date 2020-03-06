//客户端webpack 打包入口
const merge = require('webpack-merge');
const path = require('path')
const base = require('./webpack.base');
module.exports = merge(base, {
  entry: './client/index.js',
  // webpack可以不处理应用的某些依赖库
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  }
})