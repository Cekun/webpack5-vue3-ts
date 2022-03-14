const path = require("path"),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'), //   css提取
  CopyWebpackPlugin = require('copy-webpack-plugin'),  // 静态资源输出到根目录,不需要经过webpack打包处理而直接使用
  CssMinimizerPlugin = require('css-minimizer-webpack-plugin'), // 压缩CSS
  { merge } = require("webpack-merge");

const webpackConfigBase = require('./webpack.base.conf')


const webpackConfigProd = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "./[name]/js/[name].[contenthash:8].js",
    publicPath: '../',
    clean: true, // Clean the output directory before emit.
    // assetModuleFilename: "./[name]/assets/[name].[hash:8][ext][query]"
  },
  cache: {
		type: 'filesystem',
		buildDependencies: {
		  config: [__filename]
		}
	},
  plugins: [
    // 静态资源输出到根目录
    // new CopyWebpackPlugin({
    //   patterns: [{
    //     form: path.resolve(__dirname, "../public"),
    //     to: './to',
    //     globOptions: {
		// 			dot: true,
		// 			gitignore: true,
		// 			ignore: ["**/index.html*"],
		// 		}
    //   }]
    // }),
    new MiniCssExtractPlugin({
      filename: './[name]/css/[name].[contenthash].css',
      chunkFilename: './css/[id].[contenthash].css',
    })
  ],
  module: {
		rules: []
	},
}

module.exports = merge(webpackConfigBase(true), webpackConfigProd)
