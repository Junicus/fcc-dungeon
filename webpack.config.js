var debug = true;
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: "inline-sourcemap",
    entry: "./app.jsx",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react', 'es2015', 'stage-0'
                    ],
                    plugins: ['transform-class-properties', 'transform-decorators-legacy']
                }
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
				loader: ''
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "app.js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },
};
