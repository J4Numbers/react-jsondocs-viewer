var path = require('path');

module.exports = {
    entry: ['whatwg-fetch', './index.js'],

    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,

                exclude: /node_modules/,

                enforce: "pre",

                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'env'],
                    plugins: ['syntax-async-functions', 'transform-regenerator', 'transform-runtime']
                }
            }
        ]
    }
};
