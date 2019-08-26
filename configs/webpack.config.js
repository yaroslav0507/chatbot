const PATHS = require('./PATHS');
const DEV_SERVER = require('./DEV_SERVER');
const plugins = require('./plugins');
const rules = require('./rules');

module.exports = (env = {}) => {
  console.log({ env });
  const isDev = env.isDev !== undefined;

  return {
    cache: true,
    devtool: isDev ? 'eval-source-map' : 'source-map',
    devServer: DEV_SERVER,
    context: PATHS.root,
    entry: {
      app: ['react-hot-loader/patch', './src/index.tsx']
    },
    output: {
      path: PATHS.dist,
      filename: '[name].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: ['src', 'node_modules']
    },
    module: {
      rules: rules(env)
    },
    plugins: plugins(isDev)
  };
};
