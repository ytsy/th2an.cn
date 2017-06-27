require(["jquery"],function($){
    var csFunction = function (taga){
        var aname = taga.name;
        var sectionlis = document.getElementsByTagName("li");
        var currentSection = document.getElementById(aname);
        var currentSectionIndex = currentSection.getAttribute("data-index");
        var lisUl = document.querySelector("#scroll-ul");
        /**设置其它标签为透明背景，选中的为白色**/
        var tagas = document.getElementById("lists").getElementsByTagName("a");
        for(var i=0;i<tagas.length;i++){
            tagas[i].style.cssText="background-color:transparent;opacity:.5;";
        }
        taga.style.cssText="background-color:#fff;opacity:1;";
        switch(aname){
            case "intro":lisUl.className="showIntroBox";break;
            case "blog":lisUl.className="showBlogBox";break;
            case "inspiration":lisUl.className="showInsBox";break;
        }

        /******切换背景图******/
        for(var i=0;i<sectionlis.length;i++){
            var section = sectionlis[i];
            var dataIndex = sectionlis[i].getAttribute("data-index");
            section.classList.remove("active");
            section.classList.remove("atTop");
            if(dataIndex>currentSectionIndex){
                section.classList.add("atTop");
            }
        }
        currentSection.classList.add("active");

    };
    //添加样式
    var addClass = function(tag,className){
        if(tag.className == null){
            tag.className = className;
        }else{
            newClassName = tag.className+" "+className;
            tag.className = newClassName;
        }
    };
    //删除样式
    var removeClass = function(tag,className){
        tag.className = tag.className.replace(className,"");
    };
    var addEvent = (function(window){
        var handelEvent = function(event){
            //ie11支持preventDefault但不支持returnValue，edge、ie9-10支持returnValue但不支持preventDefault
            //firefox不支持window.event 需要传参
            //结论，IE11是个奇葩
            var type = event.type;
            if(type=="DOMMouseScroll"||type=="mousewheel"){
                event.delta = (event.wheelDelta)?event.wheelDelta/120:-(event.detail||0)/3;
            }
            if(event.srcElement&&!event.target){
                event.target = event.srcElement;
            }
            if(!event.preventDefault&&event.returnValue!==undefined){
                event.preventDefault = function(){
                    event.returnValue = false;
                }
            }//IE9
            return event;
        };
        if(window.addEventListener){
            return function(element,type,fn,capture){
                if(type==="mousewheel"&&document.mozHidden!=undefined){
                    type="DOMMouseScroll";
                }
                element.addEventListener(type,function(event){
                    fn.call(this,handelEvent(event));
                },capture||false);
            }
        }else if(window.attachEvent){
            return function(element,type,fn,capture){
                element.attachEvent("on"+type,function(event){
                    event = event||window.event;
                    fn.call(element,handelEvent(event));
                })
            }
        }
    })(window);
    //初始化事件
    var onloadF = function(){
        //$("#scroll-ul li").removeClass("test");
        //初始化数据

        var lists = document.getElementsByClassName('lists');
        var lisUl = document.querySelector("#scroll-ul");
        setTimeout(function(){lisUl.className="showIntroBox";},1500);
        addEvent(lists[0],"click",function(event){
            event.preventDefault();
            if(event.target.tagName=="A"){
                csFunction(event.target);
            }
        });
        addEvent(lisUl,"mousewheel",function(event){
            event.preventDefault();
            if(event.delta<0){
                //鼠标向下滚动
                var nextEle = event.target.nextElementSibling;
                var nextEleId;
                if(nextEle&&event.target.tagName.toLowerCase()=="li"){
                    nextEleId = nextEle.id;
                    if(nextEleId==="blog"){
                        lisUl.className="showBlogBox";
                    }else if(nextEleId==="inspiration"){
                        lisUl.className="showInsBox";
                    }
                    if(event.target.classList){
                        event.target.classList.remove("active");
                        event.target.classList.add("atTop");
                        nextEle.classList.add("active");
                    }else{
                        removeClass(event.target,"active");
                        addClass(event.target,"atTop");
                        addClass(nextEle,"active");
                    }
                    document.querySelector("a[name="+event.target.id+"]").style.cssText="background-color:transparent;opacity:.5;";
                    document.querySelector("a[name="+nextEleId+"]").style.cssText="background-color:#fff;opacity:1;";
                }
            }else if(event.delta>0){
                //鼠标向上滚动事件
                var previousEle = event.target.previousElementSibling;
                var previousEleId;
                if(previousEle&&event.target.tagName.toLowerCase()=="li"){
                    previousEleId = previousEle.id;
                    if(previousEleId==="intro"){
                        lisUl.className="showIntroBox";
                    }else if(previousEleId==="blog"){
                        lisUl.className="showBlogBox";
                    }
                    if(event.target.classList){
                        event.target.classList.remove("active");
                        previousEle.classList.remove("atTop");
                        previousEle.classList.add("active");
                    }else{
                        removeClass(event.target,"active");
                        removeClass(previousEle,"atTop");
                        addClass(previousEle,"active");
                    }
                    document.querySelector("a[name="+event.target.id+"]").style.cssText="background-color:transparent;opacity:.5;";
                    document.querySelector("a[name="+previousEleId+"]").style.cssText="background-color:#fff;opacity:1;";
                }
            }
        });
    };
    onloadF();
});

