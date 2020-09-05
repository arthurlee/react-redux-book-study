var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-module-eval-source_map',
	entry: [
		//'./src/client',
		'webpack-hot-middleware/client',
		'./index.js'
	],
	output: {
		//path: __dirname + '/static/dist',
		//filename: 'main.js'

		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader'
				],
				include: __dirname
			}
		]
	}
}
