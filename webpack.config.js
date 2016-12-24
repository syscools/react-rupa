var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },    
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/                
            }
        ]
    },
    devtool:'cheap-module-eval-source-map'
}