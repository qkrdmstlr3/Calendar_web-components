// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'calendar.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: '/.js$/',
        include: [path.resolve(__dirname, 'src/')],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin, 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, 'src/lib/'),
      util: path.resolve(__dirname, 'src/util/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'src/style/style.css',
    }),
  ],
  devtool: 'inline-source-map',
};
