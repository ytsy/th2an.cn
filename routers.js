/**
 * 路由文件
 */
module.exports = function(app,express) {
    var websit = {
        title:'tanyou blog',
        name:'123'
    };
    app.use(function(req,res,next){
        function getClientIp(req) {
            var ipAddress;
            var forwardedIpsStr = req.headers['X-Forwarded-For'];//判断是否有反向代理头信息
            if (forwardedIpsStr) {//如果有，则将头信息中第一个地址拿出，该地址就是真实的客户端IP；
                var forwardedIps = forwardedIpsStr.split(',');
                ipAddress = forwardedIps[0];
            }
            if (!ipAddress) {//如果没有直接获取IP；
                ipAddress = req.connection.remoteAddress;
            }
            return ipAddress;
        }
        var userIp = getClientIp(req);
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hours  = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        console.log(year+"年"+month+"月"+day+"日  "+hours+":"+minutes+":"+seconds);
        console.log("IP 地址:"+userIp);
        next();
    });
    app.use("/node_modules",express.static(__dirname+"/node_modules"));
    app.use("/images",express.static(__dirname+"/dist/images"));
    app.use("/common",express.static(__dirname+"/dist/common"));
    app.use("/app",express.static(__dirname+"/dist/app"));

    //拦截所有请求并添加判断
    app.get("*",function(req,res,next){
        if(req.xhr){
            next();//继续执行 这很重要,如果是xhr请求，只需要返回相应片段即可
        }else{
            //若不是xhr请求，那么将返回模板页面，模板页面根据url加载数据
            res.render("index",{websit:websit});
            //console.log("this is not xhr....");
        }
    }).get('/',function(req,res){
        res.render("index",{websit:websit});
    }).get('/index',function(req,res){
        res.render("index/index");
    }).get('/projects',function(req,res){
        //res.render("projects/index");
        res.render("404page",{title:"T's page not found!"});
    }).get('/study',function(req,res){
        res.render("404page",{title:"T's page not found!"});
        //res.render("study/index");
    });
    app.use(function(req,res){
        res.render("404page",{title:"T's page not found!"});
    });
};