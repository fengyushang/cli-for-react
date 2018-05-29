const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Config = require('./config');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        app: rootPath + '/src/index.js',
        react: ['react','react-router','react-dom']
    },
    output: {
        filename: 'assets/scripts/[name].[hash].bundle.js',
        path: rootPath + '/dist',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(rootPath + '/dist', {
            root: rootPath,
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: Config.title,
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.css', '.json','.less'],
        alias: {
            src: path.join(__dirname, '../src'),
            components: path.join(__dirname, '../src/components'),
            views: path.join(__dirname, '../src/views'),
            js: path.join(__dirname, '../src/js'),
            css: path.join(__dirname, '../src/css'),
            images: path.join(__dirname, '../src/images'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(svg|ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2|swf)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: 'assets/static/media/[name].[hash:8].[ext]'
                    }
                }
            }
        ]
    },
};