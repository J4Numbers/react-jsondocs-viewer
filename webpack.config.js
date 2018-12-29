var path = require('path');

module.exports = {
    entry: ['whatwg-fetch', './index.js'],
    mode: 'development',

    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,

                exclude: /node_modules/,

                enforce: 'pre',

                loader: 'babel-loader',
                options: {
                    presets: ['@babel/react', '@babel/env'],
                    plugins: ['@babel/transform-regenerator', '@babel/transform-runtime']
                }
            }
        ]
    }
};
