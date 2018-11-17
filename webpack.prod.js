'use strict';

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let htmlTemplateFile = path.resolve(__dirname, 'src/index.html');
if (process.env.NODE_ENV === 'development') htmlTemplateFile = path.resolve(__dirname, 'src/development.html');


const externals = ["react", "fabric"];

module.exports = {
  mode: 'production',
  entry: {
    client: path.resolve(__dirname, "src/index.js"), 
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].bundle.js", 
    publicPath: "./"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { 
            mergeIdents: true,
            discardComments: { removeAll: true } }],
        },
      })
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: new RegExp(
            `[\\/]node_modules[\\/](${externals.join("|")})[\\/]`
          ),
          chunks: "all",
          name: "vendors",
          reuseExistingChunk: true
        }, 
        styles: {
          name: 'styles', 
          test: /\.css$/, 
          chunks: 'all', 
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader", 
        options: {
          cacheDirectory: true
        }}
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", 
            options: {
              importLoaders: 1
            }
          },
          { loader: "postcss-loader"}
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
    new CleanWebpackPlugin("build", {}),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlTemplateFile,
      sourceMap: true,
      chunksSortMode: "dependency"
    }),
    new BundleAnalyzerPlugin({ open: true })
    // new WebpackMd5Hash
  ]
};
