var path = require('path');

var SPEC_DIR = path.resolve(__dirname, 'spec');
var testConfiguration = {
    watch: true,
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
    }
};

module.exports = testConfiguration;