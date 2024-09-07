const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: "./dist"
        },
        hot: true,
        open: true,
        watchFiles: ["./src/**/*.{html,js,css}"]
    }
});
