const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { VueLoaderPlugin } = require("vue-loader/dist/index"),
  fs = require("fs"),
  rules = require("./webpack.rules.conf"),
  viewDir = path.resolve(__dirname, "../src/views"),
  dirs = fs.readdirSync(viewDir);

const envMode = process.env.envMode,
  prefixRE = /^VUE_APP_/; // 正则匹配以 VUE_APP_ 开头的 变量

require("dotenv").config({ path: `.env.${envMode}` });
let env = {},
  entry = {},
  htmlPlugins = [];

// 只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin
// 静态地嵌入到客户端侧的代码中
for (const key in process.env) {
  if (key == "NODE_ENV" || key == "BASE_URL" || prefixRE.test(key)) {
    env[key] = JSON.stringify(process.env[key]);
  }
}



// cdn预加载使用
const externals = {
  vue: "Vue",
  // 'vue-router': 'VueRouter',
  vuex: "Vuex",
};


const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: [],
  },
  // 生产环境
  prod: {
    css: [],
    js: ["https://lib.baomitu.com/vue/3.2.31/vue.runtime.global.prod.js"],
  },
};

for (let i = 0; i < dirs.length; i++) {
  const dir = dirs[i];
  entry[dir] = viewDir + "/" + dir + "/index.ts";

  htmlPlugins.push(
    new HtmlWebpackPlugin({
      filename: `./${dir}/index.html`,
      template: "./src/index.html",
      chunks: [dir],   // HTML只引入对应chunks的JS文件
      title: dir,
      minify: {
        collapseWhitespace: false, // 去掉空格
        removeComments: true, // 去掉注释
      },
      // files: cdn.prod,
    })
  );
}

module.exports = function (prodMode) {
  return {
    mode: "development",
    entry,
    //     配置 alias 别名
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    // 在template中的静态文件地址和style中的静态文件地址需要加~, 在script里的, 别名定义成什么就写什么
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../src"),
        assets: path.resolve(__dirname, "../src/assets/"),
        img: path.resolve(__dirname, "../src/assets/img"),
        utils: path.resolve(__dirname, "../src/utils"),
        api: path.resolve(__dirname, "../src/api"),
      },
    },

    // 将外部变量或者模块加载进来
    // externals: prodMode ? externals : {},

    module: {
      rules: rules(prodMode),
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": { ...env },
      }),
      new VueLoaderPlugin(),
      ...htmlPlugins
      // new HtmlWebpackPlugin({
      //   template: "./src/index.html",
      //   filename: "index.html",
      //   title: "Vue3 + TS ->Web App",
      //   // minify: {
      //   //   collapseWhitespace: true, // 去掉空格
      //   //   removeComments: true, // 去掉注释
      //   // },
      //   files: prodMode ? cdn.prod : cdn.env,
      // }),
    ],
  };
};
