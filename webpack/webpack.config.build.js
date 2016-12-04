'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = Object.assign({}, require('./webpack.config.base'), {
    devtool: 'source-map',

    entry: {
        main: './main',
        vendor: [
            // TODO: Comment on Material-UI fix
            'react',
            'react-dom',
            'react-css-modules',
            'material-ui/styles/MuiThemeProvider'
        ]
    },

    output: {
        path: path.join(__dirname, '../', 'build', 'client'),
        publicPath: '/client/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },

    eslint: {
        configFile: path.join(__dirname, 'eslint', '.eslintrc'),
        emitWarning: false
    }
});

Array.prototype.push.apply(module.exports.module.loaders, [
    require('./loaders/extract-text-build')
]);

Array.prototype.push.apply(module.exports.plugins, [
    require('./plugins/uglify'),
    require('./plugins/extract-text'),
]);
