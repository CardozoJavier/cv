const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	module : {
		rules : [
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use : {
					loader : "babel-loader"
				}
			},
			{
				test : /\.html$/,
				use : [
					{
						loader : 'html-loader',
						options : { minimize : true }
					}
				]
			},
			{
				test : /\.css$/,
				use : [ MiniCssExtractPlugin.loader, 'css-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|ico)$/,
        use: ['file-loader?name=[name].[ext]'],
      },
		]
	},
	plugins : [
		new HtmlWebpackPlugin ({
			template : './src/index.html',
      filename : 'index.html',
      favicon: './src/assets/favicon.ico'
		}),
		new MiniCssExtractPlugin({
			filename : '[name].css',
			chunkFilename : '[id].css'
		})
	]
} 