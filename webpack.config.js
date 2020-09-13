// webpack.config.js
const path = require('path');

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
    ],
  },
  plugins: [],
  devtool: 'inline-source-map',
};
