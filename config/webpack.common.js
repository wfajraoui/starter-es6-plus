const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = (DEVELOPMENT, PRODUCTION, PATH) => ({
	devtool: 'source-map',
	entry: [
		'whatwg-fetch'
	],
	output: {
		path: PATH,
	},
	plugins: [
		new webpack.DefinePlugin({
			DEVELOPMENT: JSON.stringify(DEVELOPMENT),
			PRODUCTION: JSON.stringify(PRODUCTION)
		}),
		new CleanWebpackPlugin(`[output.path]`, {
			root: process.cwd()
		}),
		new ExtractTextPlugin({
			filename:  'style.css',
			allChunks: true
		})
	],
	module: {
		rules: [
			{test: /\.js(x?)$/, exclude: /node_modules/, use: ['babel-loader?cacheDirectory=true']},
			{ test: /\.json$/, loader: 'json-loader' },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	}
});



