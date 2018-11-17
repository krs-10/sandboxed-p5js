'use strict';

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 

let htmlTemplateFile = path.resolve(__dirname, 'src/index.html');
if (process.env.NODE_ENV === 'development') htmlTemplateFile = path.resolve(__dirname, 'src/development.html');



const externals = ["react", "fabric"];

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'fabric'], 
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
    proxy: [
      {
        context: ["/imprints", "/users", "/assets", "/signed_url"],
        target: "http://localhost:3003"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js", 
    chunkFilename: '[name].[hash].bundle.js',
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
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
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: { loader: "url-loader" }
      },
      {
        test: /\.(ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: { loader: "url-loader" }
      },
      {
        test: /\.(woff|wav|mp3)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/images/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlTemplateFile,
      sourceMap: true,
      chunksSortMode: "dependency"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
