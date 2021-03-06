const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/app.js',
  mode: 'development',
  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'server.js',
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: [{ loader: 'css-loader' }] },
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
};
