const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const Visualizer = require('webpack-visualizer-plugin');
var webpack = require('webpack');
var config = require('./env.config');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimize: true
    },
    plugins: [
        new Visualizer({
            filename: './statistics.html' // statistics.html will view the bundle.js usages.
        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    'ROOT_URL': JSON.stringify(config.PRODUCTION.ROOT_URL),
                }
            }
        })
    ],
});