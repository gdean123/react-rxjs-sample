var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/app');
var SPEC_DIR = path.resolve(__dirname, 'spec');

var testConfiguration = {
    output: {
        filename: 'spec.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: [APP_DIR, SPEC_DIR],
                loader: 'babel'
            }
        ]
    },
    plugins: [],
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    devtool: "source-map"
};

module.exports = testConfiguration;