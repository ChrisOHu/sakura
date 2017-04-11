'use strict';

const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require("./webpack.config");

module.exports = Object.assign(baseConfig, {
  output: {
    publicPath: 'http://app.dengnilvyou.com.cn/',
    path: path.join(__dirname, 'dist/'),
    filename: '[name].[hash].js'
  },
  stats: {
    colors: true,
    reasons: false
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'production'"
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
})

