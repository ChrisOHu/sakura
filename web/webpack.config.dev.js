
'use strict';

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require("./webpack.config");

module.exports = Object.assign(baseConfig, {
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'development'"
    }),
  ]
})

