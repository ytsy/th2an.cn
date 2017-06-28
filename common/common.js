module.exports=function(date){
    var d = new Date();
    //传参并且传参格式为date对象
    if(date && date instanceof Date){ d = date;  }
    try{ d = new Date(date);  }catch(err){ throw err; }
    this.getDay = function(){
        var day = d.getDate();
        return day<10?"0"+day:day;
    };
    this.getMonth = function(){
        var month  = d.getMonth()+1;
        return month<10?"0"+month:month;
    };
    this.getYear = function(){
        return d.getFullYear();
    };
    this.getHours = function(){
        var hours  = d.getHours();
        return hours;
    };
    this.minutes = function(){
        var minutes = d.getMinutes();
        return minutes;
    };
    this.seconds = function(){
        var seconds = d.getSeconds();
        return seconds;
    };
};