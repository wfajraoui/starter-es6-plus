const path = require('path');
const webpack = require("webpack");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
	test: /\.(js)$/,
	loader: 'eslint-loader',
	enforce: 'pre',
	include: [resolve('src'), resolve('test')],
	options: {
	  formatter: require('eslint-friendly-formatter'),
	  emitWarning: true
	}
  })

module.exports = (HOST, PORT) => ({
	entry: [
		'./app/index.js'
	],
	output: {
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: `http://${HOST}:${PORT}` })
	],
	module: {
		rules: [
			//createLintingRule()
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
			  }
		]
	},
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



