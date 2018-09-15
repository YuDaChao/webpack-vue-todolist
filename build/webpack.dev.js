const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.base')

const config = webpackMerge(base, {
  devtool: '#cheap-module-eval-source-map',
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
module.exports = config