const fs = require('fs')
var path = require('path')
let fileList = fs.readdirSync(path.join(__dirname,'../src'))
let pages = []
fileList.forEach(item => {
    if (/\.html$/.test(item)) {
        pages.push(item.replace('.html', ''))
    }
})

let entry = {}
pages.forEach((name) => {
    entry[name] = `./src/js/${name}.js`
})
exports.entry = entry
// 开发
let HtmlWebpackPlugin = require('html-webpack-plugin')
let devHtmlPlugin = []
pages.forEach((name) => {
    devHtmlPlugin.push(new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: `./src/${name}.html`,
        // inject: true,
        chunks: [`${name}`, 'common'],
    }))
})
exports.devHtmlPlugin = devHtmlPlugin
// 生产
let prodHtmlPlugin = []
pages.forEach((name) => {
    prodHtmlPlugin.push(
        new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: `./src/${name}.html`,
            inject: true,
            chunks: ['manifest', 'vendor', `${name}`, 'common'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        })
    )
})
exports.prodHtmlPlugin = prodHtmlPlugin