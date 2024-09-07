const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new CleanWebpackPlugin()
    ]
};
