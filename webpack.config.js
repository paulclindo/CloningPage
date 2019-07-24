const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  entry: {
    home: path.resolve(__dirname, "src/app/script.js")
  },
  devServer: {
    port: 8080,
   
  },

  module: {
    rules: [
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,

          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Clone Git Hub',
      template: path.resolve(__dirname, 'src/index.html')
    }),
  ]
};