'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:3]!postcss-loader!resolve-url!sass?sourceMap'),
};
