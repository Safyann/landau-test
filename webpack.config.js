const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = {
  entry: "./src/js/main.js",

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "env"]
        }
      }
    ]
  },

  output: {
    filename: "main.min.js"
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
