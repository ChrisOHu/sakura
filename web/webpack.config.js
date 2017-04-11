'use strict';

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    "index": path.join(__dirname, "./pages/index.js")
  },
  // see different options of sourcemaps: https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg|mp3|ttf)$/i,
        loader: "url-loader",
        // include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
        query: {
          limit: 5000,
          //name: '[name].[hash:16].[ext]'
          name: "./assets/[name].[hash:16].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(pug|jade|html)$/,
        loader: "pug-loader"
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        // exclude: /node_modules/,
        query: { cacheDirectory: true }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './pages/index.pug'),
      inject: true,
      chunks: ["index"],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  resolve: {
    alias: {
      'react-native/Libraries/Renderer/src/renderers/native/ReactNativePropRegistry': 'react-native-web/dist/modules/ReactNativePropRegistry',
      'react-native/Libraries/Components/StaticContainer': 'react-native-web/dist/components/StaticContainer',
      'react-native/Libraries/Components/StaticRenderer': 'react-native-web/dist/components/StaticRenderer',
      'react-native': 'react-native-web'
    },
    extensions: [ '.web.js', '.js', '.jsx' ]
  }
}

