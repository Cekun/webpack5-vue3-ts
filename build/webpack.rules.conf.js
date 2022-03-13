const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (prodMode) {
  return [
    {
      test: /.vue$/,
      use: "vue-loader",
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }, 
    {
      test: /.ts$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/.vue$/],
          },
        },
      ],
    },
    {
      test: /\.(css|scss|sass)$/,
      use: [
        !prodMode ? 'style-loader' : {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '../' }
        },
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(eot|svg|ttf|woff|)$/,
      type: "asset/resource",
      generator: {
        // 输出文件位置以及文件名
        filename: "fonts/[hash:8].[name][ext]",
      },
    },
    {
      test: /\.(png|jpg|svg|gif)$/,
      type: "asset/resource",
      generator: {
        // [ext]前面自带"."
        filename: "assets/[hash:8].[name][ext]",
      },
    }
  ];
};
