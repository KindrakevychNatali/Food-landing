'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
       // Змініть правила для обробки різних типів файлів, включаючи CSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
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
      template: 'index.html', // шлях до вашого вихідного HTML файлу
      filename: 'index.html', // ім'я згенерованого HTML файлу
    }),
     // Додаємо ProvidePlugin для nodelist-foreach-polyfill
     new webpack.ProvidePlugin({
      NodeList: ['nodelist-foreach-polyfill', 'NodeList'],
    }),
    ///плагін для css
    new MiniCssExtractPlugin({
      filename: 'build/styles.css',
    }),
  ],
};
//інсталювати обов'язкові залежості (npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env style-loader css-loader html-webpack-plugin mini-css-extract-plugin --save-dev);