const path = require('path') //导入node.js中专门操作路径的模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
	template:'./src/index.html',
	filename:'index.html'
})
module.exports = {
	mode:'development' //mode用来指定构建模式  development production
	,
	entry:path.join(__dirname,'./src/index.js'), //打包入口的路径
	output:{
		path:path.join(__dirname,'./dist'),//输出文件的存放路径
		filename:'run.js' //输出文件名称
	},
	plugins:[htmlPlugin],//plugins数组是webpack打包期间会用到的一些插件列表
	module:{
		rules: [
			{test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			{test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,use:'url-loader?limit=16940'},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
		]
	}
}