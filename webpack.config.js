const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/src/app.jsx"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: "babel-loader" },
      { test: /\.jsx$/, use: "eslint-loader", exclude: "/node_modules/" }
    ]
  },
  mode: "development",
  resolve: { extensions: [".js", ".jsx"] },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  },
  devtool: "cheap-module-eval-soruce-map"
};
