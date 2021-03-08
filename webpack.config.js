const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    sourceMapFilename: 'index.js.map',
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/slug.txt', to: 'slug.txt' }],
    }),
  ],
}
