var express = require("express");
var router=express.Router();
router.get("/",function(req,res){
     res.render("dist/app/index/index");
});

module.exports = router;