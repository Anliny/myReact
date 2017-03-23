var path = require('path');
module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname,'build'),
    filename: 'bundel.js'
  },
  module: {
    loaders:[{
      'test': /\.js$/,
      'loader': 'babel-loader'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000
  }
}
