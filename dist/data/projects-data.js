
//定义数据
function data(){
    var projects = [
        {
            title:"重庆市桥隧信息管理系统",
            startTime:new Date("2016-06-01"),
            endTime:new Date("2016-10-01"),
            content:"<p>SPA,前后端分离,前端使用FIS3自动化框架压缩、合并文件和图片,AMD规范加载模块,引用AngularJs框架生态系统。</p>",
            image:"<img src='images/qs.jpg'>"
        },
        {
            title:"BDIFE-2017（百度IFE前端学院课程）",
            startTime:new Date("2017-06-10"),
            endTime:new Date(),
            image:"<img src='images/ife.jpg'>",
            content:"<p>完成了<a target='_blank' href='https://ytsy.github.io/BDIFE-2017/'>百度IFE前端学院的部分课程</a>，这些课程的内容包括:</p><p>"+
            "css部分:1、根据原型精确实现页面。" +
            "2、手动实现bootstrap栅格化布局。" +
            "3、关于实现若干种水平垂直居中的方式。" +
            "4、关于几种页面布局的实现。" +
            "5、CSS3的新技术。" +
            "</p><p>" +
            "javaScript部分:1、原生实现数组的排序、遍历等方法。" +
            "2、掌握JS的语法规则，熟练使用原生API。" +
            "3、掌握原生js对DOM以及DOM属性的操作。" +
            "4、掌握树的数据结构，掌握遍历树的方法。" +
            "</p>"

        }

    ];
    return projects;
}
module.exports = data;