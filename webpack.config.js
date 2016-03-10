var path = require('path');
var webpack = require("webpack");
var CleanPlugin = require("clean-webpack-plugin");
var StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;

module.exports = {
    cache: true,
    context: path.join(__dirname, "client"),
    entry: "./app.jsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/bundle.[hash].js",
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/,
                include: path.join(__dirname, 'client'),
                //exclude: path.join(__dirname, 'client/kl/klreact-hideable/node_modules'),
                loaders: ["babel-loader"]},
            { test: /\.css$/,
                loader: "style-loader!css-loader" },
            { test: /\.json$/,
                loader: "json-loader" },
            { test: /\.styl$/,
                loader: "style-loader!css-loader!stylus-loader" },
            { test: /\.woff(2)?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg|png|gif)$/,
                loader: "file-loader?name=images/[name].[hash].[ext]" }
        ]
    },
    resolve: {
        modulesDirectories: ["node_modules", "client"],//, "node_modules/@walmart"
        extensions: ["", ".js", ".jsx"]
    },
    plugins: [
        // Clean
        new CleanPlugin(["dist"]),
        // Optimize
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        // Meta, debug info.
        new webpack.DefinePlugin({
            "process.env": {
                // Signal production mode for React JS libs.
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.SourceMapDevToolPlugin(
            "./map/bundle.[hash].js.map",
            "\n//# sourceMappingURL=http://127.0.0.1:3001/dist/map/[url]"
        ),
        new StatsWriterPlugin({
            path: path.join(__dirname, "dist/server"),
            filename: "server/stats.json"
        })
    ]
}