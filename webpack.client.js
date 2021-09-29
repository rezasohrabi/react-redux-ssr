const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client.js',
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$|jsx/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
