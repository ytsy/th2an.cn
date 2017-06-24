require.config({
    baseUrl: "node_modules/",
    paths:{
        "jquery":"jquery/dist/jquery.min",
        "angular":"angular/angular.min",
        "bootstrap":"bootstrap/dist/js/bootstrap.min"
    },
    shim:{
        "bootstrap":["jquery"]
    }
});
require(['../index'],function(){});