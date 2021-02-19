const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            "loader": "file-loader",
            options: {
              name: "assets/[hash].[ext]"
            }
          }

        ]
      },
      
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
    ]
  },
  devServer: {
    historyApiFallback: true

  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
  ]
};