const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}