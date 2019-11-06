const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
    entry: rootPath + '/src/App.jsx',
    output: {
        path: rootPath + '/dist',
        filename: 'app.dist.js',
    },

    devtool: 'source-map',
    devServer: {
        bonjour: true,
        clientLogLevel: 'info',
        compress: true,
        contentBase: rootPath + '/dist',
        headers: {
            'X-Custom-Header': 'testing'
        },
        historyApiFallback: true,
        inline: true,
        host:   'test-saga',
        https:  false,
        open:   true,
        port:   3000
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|gif|png|mp3|svg)$/,
                loaders: ['file-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    },
};
