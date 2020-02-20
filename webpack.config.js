const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		library: 'versi-ui',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	node: {
		fs: 'empty',
		module: 'empty'
	}
};
