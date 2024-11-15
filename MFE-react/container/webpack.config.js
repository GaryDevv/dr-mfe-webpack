const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: "development",
    devServer: {
        port: 1000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                MFE1: "MFE1@http://localhost:1001/remoteEntry.js",
            }
        })
    ]
}