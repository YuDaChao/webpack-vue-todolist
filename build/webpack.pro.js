const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = webpackMerge(base, {
  entry: {
    vendor: [
      'vue',
      'vuex',
      'iview'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.content && module.content.includes('node_modules')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  ]
})
