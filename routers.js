/**
 * 路由文件
 */
module.exports = function(app,express) {
    var options = {
      root:__dirname+"/app/",
      headers:{
        "Content-type":"text/html"
      }
    };
    var websit = {
        title:'tanyou blog',
        name:'123'
    };
    app.use("/bower_components",express.static(__dirname+"/bower_components"));
    app.use("/images",express.static(__dirname+"/images"));
    app.use("/common",express.static(__dirname+"/common"));
    app.use(express.static(__dirname+"/app"));
    app.get("/",function(req,res){
        res.render("index",{websit:websit});
    }).get("/blog",function(req,res){
        res.send("this is blog");
    }).get("/pages",function(req,res){
        res.send("this is pages");
    })
};