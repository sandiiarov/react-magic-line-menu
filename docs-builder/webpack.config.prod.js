const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isVendor = ({ userRequest }) =>
  userRequest &&
  userRequest.indexOf('node_modules') >= 0 &&
  userRequest.match(/\.js$/);

module.exports = {
  entry: {
    app: path.resolve(__dirname, './index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules(?!\/animateplus)/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['docs'], {
      root: path.resolve(__dirname, '../'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MinifyPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
