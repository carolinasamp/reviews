const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const WebpackBar = require("webpackbar");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watchOptions: {
    poll: 1000,
    ignored: ["node_modules"],
  },
  devServer: {
    static: "./dist",
    compress: true,
    port: 9000,
    watchFiles: ["src/**/*"],
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|mp4|mp3)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new WebpackBar()],
});
