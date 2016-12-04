'use strict';

module.exports = {
    test: /\.scss$/,
    loaders: [
        'style',
        'css?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]',
        'postcss-loader',
        'resolve-url',
        'sass?sourceMap'
    ]
};
