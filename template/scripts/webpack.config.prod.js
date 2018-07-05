const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const rootPath = path.resolve(__dirname, '../');

module.exports = merge(baseConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(rootPath + '/dist', {
            root: rootPath,
            verbose: true
        }),
        new ExtractTextPlugin('assets/styles/[name].[chunkhash:8].css'),
    ],
    optimization: {
        /*splitChunks: {
            chunks: 'all',
            name: false,
        },*/
        minimizer:[
            new UglifyJsPlugin()
        ]
    },
    performance: { hints: false }
});