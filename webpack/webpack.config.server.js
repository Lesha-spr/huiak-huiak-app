'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    devtool: 'source-map',

    debug: true,

    context: path.join(__dirname, '../source/server'),

    watchOptions: {
        aggregateTimeout: 50
    },

    entry: {
        app: './app.js'
    },

    target: 'node',

    node: {
        __dirname: false
    },

    output: {
        path: path.join(__dirname, '../build/server'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
        alias: {

        }
    },

    plugins: [require('./plugins/extract-text')],

    module: {
        preLoaders: require('./preloaders'),
        loaders: require('./loaders')
    },

    postcss: require('./postcss'),

    eslint: {
        configFile: path.join(__dirname, './eslint/.eslintrc'),
        emitWarning: true
    },

    externals: [nodeExternals()]
};

Array.prototype.push.apply(module.exports.module.loaders, [
    require('./loaders/scss-build')
]);
