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
    vendor: ["@babel/polyfill", "p5", additionalDevIndex],
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
    // publicPath: '/assets',
    host: "0.0.0.0",
    port: 8080,
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    proxy: {
      // context: ['**', '!http://localhost:8080/**'],
      context: ["https://**"],
      target: "http://localhost:9000/",
      secure: false,
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
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
    // new CorsProxyWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

// new CorsProxyWebpackPlugin({
//   host: "127.0.0.1",
//   port: 8888,
// })

module.exports = merge(common, DEVELOPMENT)
