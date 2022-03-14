const path = require('path');
//
module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
    publicPath: '/src'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};