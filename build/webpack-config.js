const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', 'app', dir)
}

module.exports = {
  mode: 'development',
  entry: resolve('index.js'),
  output: {
    path: resolve('assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: ['htmllint-loader', 'html-loader']
    }, {
      test: /\.(js|jsx)$/,
      use: {
          loader: 'babel-loader',
      },
      include: [resolve('pages')],
      exclude: /^node_modules$/
    }, {
      test: /\.css$/,
      use: [
          'style-loader',
          'css-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve('assets/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}