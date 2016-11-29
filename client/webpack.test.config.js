var path = require('path');

var SPEC_DIR = path.resolve(__dirname, 'spec');
var testConfiguration = {
    output: {
        filename: 'spec.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: SPEC_DIR,
                loader: 'babel'
            }
        ]
    },
    plugins: []
};

module.exports = testConfiguration;