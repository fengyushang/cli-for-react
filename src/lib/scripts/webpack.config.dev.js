const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
});