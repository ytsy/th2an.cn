var express = require('express');
var app = express();
var routers = require('./routers')(app,express);//load router
app.set('views',__dirname+'/app');
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
app.listen('80');
console.log("server start!");