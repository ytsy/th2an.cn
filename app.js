var express = require('express');
var app = express();
var routers = require('./routers')(app,express);//load router
//使用模板文件
app.set('views',__dirname+'/dist/app');//设置模板文件所在目录
app.set('view engine','html');
app.engine('html',require('ejs').__express);//使用ejs模板引擎
app.listen('80');
console.log("server start!");