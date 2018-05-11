const webpack = require('webpack');
const getClientEnvironment = require('./env');
const PATHS = require('./paths');

module.exports = function devConfig(env) {
  return {
    devtool: 'eval-source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      PATHS.src,
    ],
    module: {
      rules: [
        // external css files
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: PATHS.src,
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(getClientEnvironment(env)),
    ],
  };
};
