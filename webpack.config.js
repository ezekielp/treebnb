var path = require('path');

module.exports = {
    entry: './frontend/index.jsx',
    output: {
        path: path.join(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
        modules: [
            'node_modules'
        ]
    }
};