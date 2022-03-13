const path = require('path'),
  { merge } = require('webpack-merge'),
  webpackConfigBase = require('./webpack.base.conf')

let webpackConfigDev = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {},
  plugins: [],
  // webpack-dev-server 会从 output.path 中定义的目录为服务提供 bundle 文件，
  // 即，文件将可以通过 http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename] 进行访问。
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    // 设置代理，用来解决本地开发跨域问题，
    // 如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    proxy: {
      '/api': {
        secure: false,
        changeOrigin: true,
        target: 'http://www.konka.com/',
        pathRewrite: { '^/api': '' } 
      },
      '/user': {
        secure: false,
        changeOrigin: true,
        target: 'http://kkiot.kkapp.com/',
        pathRewrite: { '^/api': '' } 
      }
    }
  },
}

module.exports = merge(webpackConfigBase(false), webpackConfigDev)