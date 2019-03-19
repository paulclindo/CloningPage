const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  // module: {
  //   rules: [{
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: "babel-loader"
  //       }
  //     },
  //     {
  //       test: /\.(css|sass|scss)$/,
  //       loader: [
  //         MiniCSSExtractPlugin.loader,
  //         "css-loader",
  //         'sass-loader'
  //       ]
  //     }
  //   ]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    })
  ]
};