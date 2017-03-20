const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const configDev = require('./config/webpack.dev.js');
const configProd = require('./config/webpack.prod.js');
const configCommon = require('./config/webpack.common.js');

const DEVELOPMENT = process.env.NODE_ENV === ('development' || 'dev');
const PRODUCTION = process.env.NODE_ENV === ('production' || 'prod');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PATH = path.join(__dirname, 'dist');

const webpackConfig = PRODUCTION ?
		merge(
			configProd,
			configCommon(DEVELOPMENT, PRODUCTION, PATH)
		)
		: 
		merge(
			configDev(HOST, PORT),
			configCommon(DEVELOPMENT, PRODUCTION,  PATH)
		)


module.exports = webpackConfig;
