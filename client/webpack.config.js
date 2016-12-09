var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: [
        APP_DIR + '/index.js'
    ],
    module: {
        loaders: [
            { test: /\.jsx?/, include: APP_DIR, loader: 'babel'},
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: APP_DIR + '/../index.html'
    })]
};

module.exports = config;