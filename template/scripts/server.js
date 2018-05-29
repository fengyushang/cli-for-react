'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');
const compression = require('compression');
const config = require('./config');
const devConfig = require('./webpack.config.dev');
devConfig.entry.app = [
    'webpack-hot-middleware/client',
    devConfig.entry.app
];

const app = express();
const compiler = webpack(devConfig);
const devMiddleware = webpackDevMiddleware(compiler,{
    open: true,
    hot: true,
    publicPath: devConfig.output.publicPath,
    quiet: true
});
const hotMiddleware = webpackHotMiddleware(compiler);
app.use(compression());
app.use(devMiddleware);
app.use(hotMiddleware);
app.use(config.prefix, proxy({
    target: config.host,
    changeOrigin: true
}));

const mfs = devMiddleware.fileSystem;
const file = path.join(devConfig.output.path, 'index.html');
app.get('*', (req, res) => {
    devMiddleware.waitUntilValid(() => {
        const html = mfs.readFileSync(file);
        res.end(html);
    })
});
app.listen(config.port,()=>{
    console.log(`listening http://localhost:${config.port}`)
});