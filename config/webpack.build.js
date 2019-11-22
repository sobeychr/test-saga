const defaultConfig = require('./webpack/default');
const { rootPath } = require('./webpack/paths');

module.exports = {
    ...defaultConfig,

    devtool: 'source-map',
    devServer: {
        bonjour: true,
        clientLogLevel: 'info',
        compress: true,
        contentBase: rootPath + '/dist',
        headers: {
            'X-Custom-Header': 'testing',
        },
        historyApiFallback: true,
        inline: true,
        host: 'localhost',
        https: false,
        open: true,
        port: 3000,
    },

    mode: 'production',
};
