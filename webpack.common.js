/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/public/icons/icon.jpg',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'profil.html',
      template: path.resolve(__dirname, 'src/views/admin/profil.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, 'src/views/admin/login.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: path.resolve(__dirname, 'src/views/page/dashboard/dashboard.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'indexdash.html',
      template: path.resolve(__dirname, 'src/views/page/dashboard/indexdash.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'lupapassword.html',
      template: path.resolve(__dirname, 'src/views/admin/lupapassword.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
