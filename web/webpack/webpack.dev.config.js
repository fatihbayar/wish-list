var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(parentDir, 'index.js')
  ],
  module: {
    loaders: [ {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      exclude: '/node_modules/',
      loader: ExtractTextPlugin.extract({
        fallback: [ {
          loader: 'style-loader'
        } ],
        use: [ {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }, {
          loader: 'less-loader'
        } ]
      })
    } ]
  },
  output: {
    path: parentDir + 'dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir + 'dist',
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};