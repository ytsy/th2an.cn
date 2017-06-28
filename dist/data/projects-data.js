
//定义数据
function data(){
    var projects = [
        {
            title:"重庆市桥隧信息管理系统",
            startTime:new Date("2016-06-01"),
            endTime:new Date("2016-10-01"),
            content:"重庆市桥隧信息管理系统",
            image:"<img src='images/qs.jpg'>"
        },
        {
            title:"BDIFE-2017（百度IFE前端学院课程）",
            startTime:new Date("2017-06-01"),
            endTime:new Date(),
            image:"<img src='images/ife.jpg'>",
            content:"百度IFE前端技术学院几乎涵盖了有关前端的所有知识，课程由浅入深，旨在通过自学掌握前端开发的基本甚至进阶技能。"
        }

    ];
    return projects;
}
module.exports = data;