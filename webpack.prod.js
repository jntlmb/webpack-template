const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ]
});
