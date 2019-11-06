const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    bootstrap: ["./www/plugins/bootstrap.js"],
    index: ["@babel/polyfill", "./www/app/index.js"]
  },

  output: {
    path: path.resolve(__dirname, "./src/public"),
    filename: "js/[name].bundle.js"
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  devServer: {
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./www/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css"
    })
  ]
};
