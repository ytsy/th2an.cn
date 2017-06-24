/**
 * 路由文件
 */
module.exports = function(app,express) {
    var options = {
      root:__dirname+"/dist/app/",
      headers:{
        "Content-type":"text/html"
      }
    };
    var websit = {
        title:'tanyou blog',
        name:'123'
    };
    app.use("/node_modules",express.static(__dirname+"/node_modules"));
    app.use("/images",express.static(__dirname+"/images"));
    app.use("/common",express.static(__dirname+"/dist/common"));
    app.use(express.static(__dirname+"/dist/app"));
    app.get("/",function(req,res){
        res.render("index",{websit:websit});
    }).get("/blog",function(req,res){
        res.send("this is blog");
    }).get("/pages",function(req,res){
        res.send("this is pages");
    })
};