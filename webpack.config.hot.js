var base = require("./webpack.config");
var webpack = require("webpack");
var path = require("path");

var jsLoader = base.module.loaders[0];
jsLoader.loaders = ["react-hot"].concat(jsLoader.loaders);

module.exports = {
    cache: true,
    context: base.context,
    entry: [
        "webpack-dev-server/client?http://127.0.0.1:3334",
        "webpack/hot/only-dev-server",
        base.entry
    ],
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