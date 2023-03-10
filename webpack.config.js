const path = require('path');

module.exports = {
  // watch: true,
  mode : 'development',
  devtool:'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    host: '192.168.43.75',
    // below 3 lines to disable auto reload
    // liveReload: false,
    // hot:false,
    // inline:false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
}