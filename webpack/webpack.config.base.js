'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    debug: true,

    context: path.join(__dirname, '../source/client'),

    watchOptions: {
        aggregateTimeout: 50
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
        alias: {

        }
    },

    externals: {
        // TODO: Uncomment on Material-UI fix
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        'react-router': 'ReactRouter',
        'react-router-redux': 'ReactRouterRedux',
        'lodash': '_'
    },

    plugins: require('./plugins'),

    module: {
        preLoaders: require('./preloaders'),
        loaders: require('./loaders')
    },

    postcss: require('./postcss'),

    eslint: {
        configFile: path.join(__dirname, './eslint/.eslintrc'),
        emitWarning: true
    },
};
