const path = require('path');

const clientConfig = {
	mode: process.env.NODE_ENV || 'development',
	entry: './src/client/index.tsx',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					configFile: 'tsconfig.client.json'
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public/js')
	}
};
module.exports = [clientConfig];
