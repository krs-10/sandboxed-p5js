'use strict';

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 

let htmlTemplateFile = path.resolve(__dirname, 'src/index.html');


const externals = ["react"];

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['@babel/polyfill', 'react'], 
    client: path.resolve(__dirname, "src/index.js")
  },
  resolve: {
    alias: {
    components: path.resolve(__dirname, 'src/components/'), 
    styles: path.resolve(__dirname, 'src/styles/'), 
    assets: path.resolve(__dirname, 'src/assets/'), 
    }
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
    new webpack.ProvidePlugin({
      React: 'react', 
      Fragment: ['react', 'Fragment'], 
      Component: ['react', 'Component']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlTemplateFile,
      sourceMap: true,
      chunksSortMode: "dependency"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
