"use strict";

require("core-js");
require("./env.js");

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require('terser-webpack-plugin');
const  webpack  = require("webpack");

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
			minimize: true,
			minimizer: [
				new TerserPlugin({
					cache: true,
					parallel: true,
					sourceMap: true,
					terserOptions: {
						compress: {
							comparisons: false,
							ecma: 5,
							
							inline: 2,
							
							warnings: false,
						},
						mangle: {
							safari10: true,
						},
						output: {
							
							ascii_only: true,
							
							comments: false,
							ecma: 5,
						},
						parse: {
							ecma: 8,
						},
					},
				}),
				
			],
			occurrenceOrder: true,
			splitChunks: {
				cacheGroups: {
					commons: {
						chunks: 'initial',
						minChunks: 2,
						minSize: 0,
						name: 'commons',
					},
					vendor: {
						chunks: 'initial',
						enforce: true,
						name: 'vendor',
						priority: 10,
						test: /node_modules/,
					},
				},
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 0,
				name: false,
			},
		},
		output: {
			chunkFilename: "main.chunk.js",
			filename: "name-bundle.js",
			libraryTarget: "commonjs2",
			path: path.resolve(__dirname, "../dist"),
			publicPath: "/",
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
		],
		resolve: {
			extensions: ['.ts', '.js']
		}   ,
		target: "node",
	};
};
