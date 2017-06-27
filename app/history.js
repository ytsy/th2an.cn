//定义浏览器ajax刷新页面
/*
* options{
*   title:''
*   url:
*   replaceID:
*   css:
*   js:
* }
* */
define(['jquery'],function($){
    var dop={
        replaceID:"replace-body",
        url:window.location.href,
        title:document.title
    };//默认配置对象

    var ajaxLoad = function(options){
        var op={};
        if((typeof  options).toLowerCase() === "object"){
           op = options;
        }else{
           op = dop;
        }
        $.ajax({
            url:op.url,
            success:function(result){
                //设置本页面state
                var state = {
                    replaceID:dop.replaceID,
                    url:dop.url,
                    content:document.getElementById(dop.replaceID).innerHTML,
                    title:dop.title,
                    js:"",
                    css:""
                };
                //将本页面URL存入history
                window.history.pushState(state,state.title,state.url);
                //切换页面
                document.title=options.title;
                document.getElementById(op.replaceID).innerHTML = result;
                //去除各个模块的私有CSS与JS资源然后加载另外的私有资源
                $("link[name='privateSrc']").remove();
                $("script[name='privateSrc']").remove();
                if(op.css.length>0){
                    op.css.forEach(function(url){
                        $("head").append("<link name='privateSrc' rel='stylesheet' type='text/css' href='"+url+"'>");
                    });
                }

                $(window).ready(function(){
                    //dom树构建完毕后加载js
                    if(op.js.length>0){
                        op.js.forEach(function(src){
                            $("body").append("<script name='privateSrc' type='text/javascript' src='"+src+".js'></script>");
                        });
                    }
                    //require(options.js); require js 并不会去除已有的js 而且不会重复执行已有js
                });
                state = {
                    replaceID:"replace-body",
                    url:op.url,
                    content:result,
                    title:op.title,
                    js:op.js,
                    css:op.css
                };
                //替换history
                window.history.replaceState(state,state.title,state.url);
            },
            complete:function(){

            }
        });
    };

    $(window).on("popstate",function(){
        var state = history.state;
        if(state == undefined ||state != undefined && state.content == undefined){
            return;// 第一次访问页面的时候，content不存在，不用执行动作
        }
        $("#"+state.replaceID).html(state.content);
        document.title = state.title;
        $("link[name='privateSrc']").remove();
        $("script[name='privateSrc']").remove();
        if(state.css.length>0){
            state.css.forEach(function(url){
                $("head").append("<link name='privateSrc' rel='stylesheet' type='text/css' href='"+url+"'>");
            });
        }
        $(window).ready(function(){
            //dom树构建完毕后加载js
            if(state.js.length>0){
                state.js.forEach(function(src){
                    $("body").append("<script name='privateSrc' type='text/javascript' src='"+src+".js'></script>");
                });
            }
            //require(options.js); require js 并不会去除已有的js 而且不会重复执行已有js
        });
        window.history.replaceState(state,state.title,state.url);
    });
    return {
        ajaxLoad:ajaxLoad
    };
});
