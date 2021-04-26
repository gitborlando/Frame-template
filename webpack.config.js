const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        port: 8787
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}
