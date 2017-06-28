var express = require("express");
var router = express.Router();
var fs = require("fs");
var marked = require("marked");
var projects  = require("../../../dist/data/projects-data")();
var common = require("../../../dist/common/common");
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});
router.get("/",function(req,res){
    res.render("dist/app/projects/index",{
        "projects":projects,
        "common":common
    },function(err,html){
        if (err) throw err;
        res.send(html);
    });
});
router.get("/article",function(req,res){
    fs.readFile("app/projects/article/DAY2-2016-10-13.md",function(err,buffer){
        var fileString = buffer.toString();
        console.log("read file success!");
        marked(fileString,function(err,content){
            if(err) throw err;
            res.send(content);
        });
    });
});
module.exports = router;
/*.get('/projects',function(req,res){
 res.send(fs.readFile(""));
 res.render("projects/index");
 //res.render("404page",{title:"T's page not found!"});
})*/