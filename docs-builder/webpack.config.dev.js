const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  devServer: {
    stats: 'errors-only',
    host: 'localhost',
    port: 3000,
    historyApiFallback: { disableDotRule: true },
  },
  entry: {
    app: path.resolve(__dirname, './index.js'),
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
};
