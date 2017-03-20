const path = require('path');
const webpack = require("webpack");

module.exports = (HOST, PORT) => ({
	entry: [
		'./app/index.js'
	],
	output: {
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		compress: true,
		historyApiFallback: true,
		inline: true,
		stats: 'errors-only',  // Display only errors to reduce the amount of output.
		host: HOST,
		port: PORT
	}

});



