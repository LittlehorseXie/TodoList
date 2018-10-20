const path = require('path');
//用于icon和package.json
const CopyWebpackPlugin = require('copy-webpack-plugin');
//HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: "./src/pages/main.js"
  },
  output:{
    path : path.resolve(__dirname,),//需要绝对路径
    filename : "index.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/, 
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'NW-Demo',
      filename: 'index.html',
      inject: 'body',
      template: "index.html",
      chunks: ['main']
  })],
}