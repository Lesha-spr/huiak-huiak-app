'use strict';

const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = new webpack.DefinePlugin({
    process: {
        env: {
            NODE_ENV: JSON.stringify(NODE_ENV)
        }
    }
});
