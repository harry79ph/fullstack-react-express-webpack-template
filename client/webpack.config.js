const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PUBLIC_DIR = path.resolve(__dirname, "public");

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIR, "index.html"),
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
    })
  ],
  devServer: { // use this for full stack applications
    historyApiFallback: true,
    hot: true,
    proxy: [
      {
        context: ["/"],
        target: "http://localhost:3000",// https://webpack.js.org/configuration/dev-server/#devserverproxy
      },
    ],
  },// or you can use https://github.com/chimurai/http-proxy-middleware
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].chunk.js",
    clean: true,
  },
};
