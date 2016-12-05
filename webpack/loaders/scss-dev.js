'use strict';

module.exports = {
    test: /\.scss$/,
    loaders: [
        'style',
        'css?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:3]',
        'postcss-loader',
        'resolve-url',
        'sass?sourceMap'
    ]
};
