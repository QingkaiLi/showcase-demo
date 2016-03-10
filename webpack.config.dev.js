var path = require("path");
var webpack = require("webpack");
var base = require("./webpack.config");

module.exports = {
    cache: true,
    context: base.context,
    entry: base.entry,
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/bundle.dev.js",
        publicPath: "http://"+(process.env.HOST||"127.0.0.1")+":3334/"
    },
    module: base.module,
    resolve: base.resolve,
    devtool: "eval-source-map",
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
}