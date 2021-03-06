var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
