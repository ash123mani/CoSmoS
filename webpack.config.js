const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './docs/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      cosmos: path.join(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    contentBase: 'docs/'
  }
}
