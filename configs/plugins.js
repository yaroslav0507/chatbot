const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (isDev) => (
  [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    ...(isDev
      ? [
        new webpack.HotModuleReplacementPlugin({}),
        new webpack.NamedModulesPlugin()
      ]
      : []),
    ...(!isDev
      ? [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
         beautify: false,
         compress: {
           screw_ie8: true
         },
         comments: false,
         sourceMap: false
        })
      ]
      : []),
  ]
);
