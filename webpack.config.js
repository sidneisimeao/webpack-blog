const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
    // source maps
    devtool: "inline-source-map",
    // webpack-dev-server 
    devServer:{
        contentBase: "./dist"
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        // express, webpack-dev-middleware
        publicPath: '/'
    },
};