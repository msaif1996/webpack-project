const { dirname } = require("path")
const path = require("path")

module.exports = {
    entry: {
        path: path.join(__dirname,"/pages/index.js")
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js"
    },
    devServer: {
        port: 8080,
        open: true,
        hot: true
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                exclude:/node_modules/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}