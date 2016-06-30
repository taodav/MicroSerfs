require('dotenv').config()
var webpack = require('webpack')

module.exports = {
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.GOOGLE_MAPS_API_KEY)
			}
		})
	],
	entry: "./app/App.jsx",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules|bower_components/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}