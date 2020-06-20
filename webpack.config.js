// required for path resolution for dist folder
const path = require("path");
// used to access the BannerPlugin
const webpack = require("webpack");
// required for pretty format for the Userscript banner
const stripIndent = require("common-tags").stripIndent;

module.exports = {
    entry: "./src/Main.ts",
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "mangadex-update-filter.user.js"
    },
    plugins: [
        new webpack.BannerPlugin({
            raw: true,
            banner: stripIndent`
                // ==UserScript==
                // @name    mangadex-update-filter
                // @description Filter entries from the update feed
                // @version 1.0.0
                // @author  Nicholas Wright
                // @copyright  MIT 2020, Nicholas Wright
                // @namespace   https://github.com/seeker/
                //
                // @grant    GM.openInTab
                // @grant    GM.setValue
                // @grant    GM.getValue
                // @grant    GM.deleteValue
                //
                // @match https://mangadex.org/
                // @match https://mangadex.org/title/*
                // ==/UserScript==`
        })
    ]
};