/**
 * Created by th on 2017/6/25.
 */
define(["jquery","history"],function($,h){
    $("nav ul").bind("click",function(event){
        event.preventDefault();//阻止默认事件
        if(event.target.nodeName === "A"){
            var url = window.location.pathname;
            var options = {
                url:event.target.pathname,
                title:"T's blog",
                replaceID:"replace-body"
            };
            options = loadResource(options);
            h.ajaxLoad(options);
        }
    });

    $(window).ready(function(){
        var options = {};
        if(window.location.pathname == "/"){
            options = loadResource({
                url:"/index",
                title:"T's blog",
                replaceID:"replace-body"
            });
            h.ajaxLoad(options);
        }
        else{
            options = loadResource({
                url:window.location.pathname,
                title:"T's blog",
                replaceID:"replace-body"
            });
            h.ajaxLoad(options);
        }
    });
    //为链接配置静态css与js资源路径
    var loadResource = function(options){
        switch(options.url){
            case "/index":{
                options.js=["app/index/index"];
                options.css=["app/index/index.min.css"];
                break;
            }case "/blog":{
                options.js=["app/blog/index"];
                options.css=["app/blog/index.min.css"];
                break;
            }case "/projects":{
                options.js=["app/projects/index"];
                options.css=["app/projects/index.min.css"];
                break;
            }case "/study":{
                options.js=["app/study/index"];
                options.css=["app/study/index.min.css"];
                break;
            }
        }
        return options;
    };
});