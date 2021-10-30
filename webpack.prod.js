const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new SentryWebpackPlugin({
      // sentry-cli configuration - can also be done directly through sentry-cli
      // see https://docs.sentry.io/product/cli/configuration/ for details
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "hyperlinq-iw",
      project: "demo",
      release: process.env.SENTRY_RELEASE,

      // other SentryWebpackPlugin configuration
      include: "./build",
      ignore: [
        "node_modules",
        "webpack.dev.js",
        "webpack.common.js",
        "webpack.prod.js",
      ],
    }),
  ],
});
