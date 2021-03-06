'use strict';

const webpack = require("webpack");
const path = require("path");

const CorsProxyWebpackPlugin = require('cors-proxy-webpack-plugin').CorsProxyWebpackPlugin,
  merge = require("webpack-merge"),
  common = require('./webpack.common.js');


const externals = [];
const additionalDevIndex = path.resolve(__dirname, "src/index.dev.js");

const DEVELOPMENT = {
  mode: "development",
  entry: {
    // vendor: ['@babel/polyfill', 'p5'],
    // vendor: ["@babel/polyfill", "p5", additionalDevIndex],
    vendor: ["@babel/polyfill", "p5", "ml5", additionalDevIndex],
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
        }
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
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      Connection: "keep-alive"
    },
    proxy: {
      '/proxied': {
        target: 'http://localhost:8081',
        pathRewrite: { '^/proxied': '' }
      }
    }
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
              sourceMaps: true
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};


module.exports = merge(common, DEVELOPMENT)
