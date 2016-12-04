'use strict';

const webpack = require('webpack');

module.exports = new webpack.optimize.CommonsChunkPlugin(
    'vendor',
    'vendor.js'
);
