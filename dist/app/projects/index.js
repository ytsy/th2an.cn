require(["jquery","history"],function($,hs){
    $("#articleList a").bind("click",function(){
        var options = {
            url:"projects/article",
            title:"T's",
            replaceID:"replace-body",
            css:["app/projects/article.css.min"]
        };

        hs.ajaxLoad(options);
    })
});
