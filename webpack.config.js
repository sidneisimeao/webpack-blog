const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    // source maps
    devtool: "inline-source-map",
    // webpack-dev-server 
    devServer:{
        contentBase: "./dist",
        // Enabling HMR
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        // express, webpack-dev-middleware
        //publicPath: '/'
    },
};