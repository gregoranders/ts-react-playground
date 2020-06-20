'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');
const pkgJson = require('./package.json');

const plugins = [
  new CaseSensitivePlugin(),
  new CleanPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    title: 'TypeScript React Redux Webpack Demo',
    template: path.join('./public', 'webpack.html'),
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: 'css/[name].css',
  }),
  // process.env.NODE_E2E === 'webpack' && new webpack.ProgressPlugin(),
];
const cssLoaders = [
  {
    loader: 'css-loader',
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: { includePaths: ['node_modules'] },
    },
  },
];
const sassLoaders = cssLoaders.concat([
  {
    loader: 'sass-loader',
    options: {
      sassOptions: { includePaths: ['node_modules'] },
    },
  },
]);

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: {
    index: path.resolve(path.join('src', 'script', 'index.tsx')),
    styles: path.resolve(path.join('src', 'style', 'styles.scss')),
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'js/[name].bundle.js',
  },
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  performance: {
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js'],
    alias: {
      '@models': path.resolve('src/script/models'),
      '@states': path.resolve('src/script/states'),
      '@atoms': path.resolve('src/script/components/atoms'),
      '@organisms': path.resolve('src/script/components/organisms'),
      '@molecules': path.resolve('src/script/components/molecules'),
      '@pages': path.resolve('src/script/components/pages'),
      '@components': path.resolve('src/script/components'),
      '@app': path.resolve('src/script'),
      './fonts': 'node_modules/@fortawesome/fontawesome-free/webfonts',
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: './test',
      //   options: {
      //     tsConfig: path.resolve('src/script/tsConfig.json'),
      //   },
      // },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.s[a|c]ss$/,
        use: [MiniCssExtractPlugin.loader].concat(sassLoaders),
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader].concat(cssLoaders),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: process.env.NODE_HOST || 'localhost',
    port: process.env.NODE_PORT || pkgJson.baseport,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'ssl', 'development.fritz.box.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'ssl', 'development.fritz.box.crt')),
    },
  },
  plugins: plugins,
};
