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
  externals: {
    // The externals section is how you tell webpack "I want this module to be resolved at runtime,
    // instead of at build time". This is required for all modules that you upload separately from
    // the bundle
    './slug.txt': 'commonjs2 ./slug.txt'
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
