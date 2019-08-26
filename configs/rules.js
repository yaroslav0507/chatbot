const PATHS = require('./PATHS');

module.exports = (env) => {
  const isDev = !env.build;
  const isSourceMap = !!env.sourceMap || isDev;

  return [
    {
      test: /\.tsx?$/,
      include: PATHS.src,
      use: [
        {loader: 'react-hot-loader/webpack'},
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              sourceMap: isSourceMap,
              target: isDev ? 'es2015' : 'es5',
              isolatedModules: true,
              noEmitOnError: false
            }
          }
        }
      ]
    },
    {
      test: /\.json$/,
      include: [PATHS.src],
      use: {loader: 'json-loader'}
    },
    {
      test: /\.(woff|woff2|eot|ttf|jpg)$/,
      loader: 'url-loader?limit=100000'
    },
    {
      test: /\.(png)$/,
      use: [{
        loader: 'file-loader',
        options: {}
      }]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              removeStyleElement: false
            }
          }
        }
      ]
    }
  ]
};

