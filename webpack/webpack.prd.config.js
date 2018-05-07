const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const getClientEnvironment = require('./env');
const PATHS = require('./paths');

// eslint-disable-next-line no-empty-function
const noop = () => {};
module.exports = function prdConfig(env) {
  return {
    entry: {
      app: [require.resolve('./polyfills'), PATHS.src],
    },
    output: {
      filename: '[name].[chunkhash]-bundle.js',
      chunkFilename: '[name].[chunkhash]-chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                },
              },
            ],
          }),
          exclude: PATHS.src,
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(PATHS.dist, {
        root: process.cwd(),
        verbose: true,
      }),
      new webpack.DefinePlugin(getClientEnvironment(env)),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({ context }) => context.indexOf('node_modules') !== -1,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
      }),
      new ExtractTextPlugin({
        filename: '[name].[chunkhash].css',
        disable: false,
        allChunks: true,
      }),
      env.analyze ? new BundleAnalyzerPlugin() : noop,
    ],
  };
};
