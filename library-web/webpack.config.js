const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './src/index.js',
  mode: "production",
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'libraryWeb',
    libraryTarget: 'umd'
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // 3. Inject styles into DOM
            "css-loader", // 2. Turns css into commonjs
            "sass-loader", // 1. Turns sass into css
        ],
    },
    ]
  }
}