const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "client", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ title: "Code Walky", template: "./index.html" })],
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
