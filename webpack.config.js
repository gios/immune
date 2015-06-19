'use strict';

var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    { test: /\.js$/, loader: "jsx-loader" },
    { test: /\.css$/, loader: "style-loader!css-loader" },
  ]
  }
};
