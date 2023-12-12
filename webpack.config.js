'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // або 'production' або 'none'
  entry: './js/script.js', // Замініть це на шлях до вашого основного модуля
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Додайте babel-loader для обробки JavaScript
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Додайте підтримку для обробки CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Додайте підтримку для обробки зображень
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // шлях до вашого вихідного HTML файлу
      filename: 'index.html', // ім'я згенерованого HTML файлу
    }),
  ],
};
//інсталювати обов'язкові залежості (npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env style-loader css-loader html-webpack-plugin--save-dev);