const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "test.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/html/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: 'kontakt.html',
      template: "./src/html/kontakt.html"
    }),
    new HtmlWebpackPlugin({
      filename: 'aparaty.html',
      template: "./src/html/aparaty.html"
    }),
    new HtmlWebpackPlugin({
      filename: 'galeria.html',
      template: "./src/html/galeria.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    compress: true,
    host: "localhost",
    port: 9000,
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
};
