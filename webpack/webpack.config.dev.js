'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = Object.assign({}, require('./webpack.config.base'), {
    devtool: 'eval',

    entry: {
        main: [
            'webpack-hot-middleware/client',
            './main'
        ],
        vendor: [
            'react-css-modules',
            'material-ui/styles/MuiThemeProvider'
        ]
    },

    output: {
        path: path.join(__dirname, '../', 'source', 'client'),
        publicPath: '/client/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }
});

Array.prototype.push.apply(module.exports.module.loaders, [
    require('./loaders/extract-text-dev')
]);

Array.prototype.push.apply(module.exports.plugins, [
    require('./plugins/hot-module-replacement')
]);
