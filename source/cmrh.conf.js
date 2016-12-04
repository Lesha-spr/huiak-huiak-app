import sass from 'node-sass';

module.exports = {
    extensions: ['.scss'],
    // Same scope name as in webpack build
    generateScopedName: '[name]-[local]',
    preprocessCss: (data, filename) => sass.renderSync({
        data,
        file: filename,
    }).css
};
