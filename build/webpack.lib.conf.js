'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const env = config.lib.env

baseWebpackConfig.entry = {
  'vue-multi-select': './src/lib.js'
}

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.lib.productionSourceMap,
      extract: true,
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.lib.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.lib.assetsRoot,
    filename: utils.assetsLibPath('[name].min.js'),
    library: '[name]',
    libraryTarget: 'umd'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: utils.assetsLibPath('[name].min.css'),
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
  ]
})

module.exports = webpackConfig
