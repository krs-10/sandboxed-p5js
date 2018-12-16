'use strict';

const webpack = require("webpack");
const path = require("path");

const merge = require("webpack-merge"),
  common = require('./webpack.common.js');

const p5dom = (path.resolve(__dirname, "node_modules/p5/lib/addons/p5.min.js")),
  p5sound = (path.resolve(__dirname, "src/libs/p5.sound.min.js"));
///Users/Kristen/Code/Mine/sandboxed-p5js/node_modules/p5/lib/addons/p5.dom.js


const externals = [];

const DEVELOPMENT = {
  mode: 'development',
  entry: {
    // vendor: ['@babel/polyfill', 'p5'], 
    vendor: ['@babel/polyfill', 'p5'],
    client: path.resolve(__dirname, "src/index.js")
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial", 
          name: "vendor", 
          reuseExistingChunk: true,
          priority: -10,
          enforce: true
        }, 
      }
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src"),
    host: "0.0.0.0",
    port: 8080,
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMaps: true,
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(common, DEVELOPMENT)
