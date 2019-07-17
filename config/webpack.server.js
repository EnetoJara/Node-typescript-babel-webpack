"use strict";

require("core-js");
require("./env.js");

const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = env => {
	return {
		devtool: "source-map",
		entry: path.join(__dirname, '../src/dev.ts'),
		externals: [nodeExternals()],
		module: {
			rules: [
				{
					exclude: /node_modules/,
					test: /\.ts$/,
					use: [
						{
							loader: "babel-loader",
						},
						{
							loader: "ts-loader"
						}
					],
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: "file-loader",
						},
					],
				},
			],
		},
		node: {
			__dirname: false,
			__filename: false,
		},
		optimization: {
			splitChunks: {
				automaticNameDelimiter: "_",
				cacheGroups: {
					vendor: {
						chunks: "initial",
						minChunks: 2,
						name: "vendor",
						test: /[\\/]node_modules[\\/]/,
					},
				},
			},
		},
		output: {
			chunkFilename: "main.chunk.js",
			filename: "name-bundle.js",
			libraryTarget: "commonjs2",
		},
		plugins: [],
		resolve: {
			extensions: ['.ts', '.js']
		}   ,
		target: "node"
	};
};
