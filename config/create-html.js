/**
 * @file Page html configuration
 * @author:messidagod
 * @date: 03/31/2020
 * @update: 2018-11-05
 * @use: Dynamically configure the html page, get the pageinfo.json content under each file under src, and parse it into HtmlWebpackPlugin
 */

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const getPath = require("./get-path");
let htmlArr = [];
function createHtml(page_path){
	getPath(page_path).map((item)=>{
		let infoJson ={},infoData={};
		try{
			// 读取pageinfo.json文件内容，如果在页面目录下没有找到pageinfo.json 捕获异常
			infoJson = fs.readFileSync(`${page_path}/${item}/pageinfo.json`,"utf-8");//
			infoData = JSON.parse(infoJson);
		}catch(err){
			infoData = {};
		}
		htmlArr.push(new HtmlWebpackPlugin({
			title:infoData.title ? infoData.title : "webpack,react多页面架构",
			meta:{
				keywords: infoData.keywords ? infoData.keywords : "webpack，react，github",
				description:infoData.description ? infoData.description : "这是一个webpack，react多页面架构"
			},
			chunks:[`${item}/${item}`], //引入的js
			template: "./src/template.html",
			filename : item == "index" ? "index.html" : `${item}/index.html`, //html位置
			minify:{//压缩html
				collapseWhitespace: true,
				preserveLineBreaks: true
			},
		}));
	});
	return htmlArr;
}


module.exports = createHtml;
