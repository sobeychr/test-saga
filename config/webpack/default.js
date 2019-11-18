const alias = require('./alias');
const modules = require('./modules');
const { rootPath, srcPath } = require('./paths');

module.exports = {
    entry: rootPath + '/src/App.jsx',
    output: {
        path: rootPath + '/dist',
        filename: 'app.dist.js',
    },

    module: modules,

    resolve: {
        alias,
        extensions: ['.js', '.jsx', '.scss', '.json'],
        modules: [srcPath, 'node_modules'],
    },
};
