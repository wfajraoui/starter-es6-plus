const webpack = require("webpack");
var fs = require('fs');
const name = require("../package.json").name;
var nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});
module.exports = {
  entry : ['./app/index.js'],
	externals: nodeModules,
	target: 'node',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
  ],
  output: {
  	filename: name + '.js',
		library: name,
		libraryTarget: 'umd',
		umdNamedDefine: true
  }
}



