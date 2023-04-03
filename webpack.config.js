const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const postcssPresetEnv = require('postcss-preset-env');

let mode = "development"
if (process.env.NODE_ENV === "production") {
    mode = "production"
}
module.exports = {
    mode: mode,
    output: {
        assetModuleFilename: "assets/[hash][ext][query]",
        filename: "[name].[contenthash].js",
        clean: true,
    },
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: ['main'],
            scriptLoading: 'defer',
            inject: "body",
        })],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    postcssPresetEnv()
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'assets/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },

        ]
    }

}