const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = webpackMerge(base, {
  devtool: '#cheap-module-eval-source-map',
  entry: {
    app: path.join(__dirname, '../src/main.js')
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true,
    publicPath: '/public/',
    historyApiFallback: {
      index: path.join(__dirname, '../dist/index.html')
    }
  }
})
