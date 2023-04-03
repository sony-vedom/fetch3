const HtmlWebpackPlugin = require("html-webpack-plugin")

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
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: ['main'],
            scriptLoading: 'defer',
            inject: "body",
        })],
    module: {
        rules: [
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