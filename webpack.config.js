const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[
                    {loader: "babel-loader", query:{ cacheDirectory: true }}
                ]
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}