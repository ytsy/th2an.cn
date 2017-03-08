require.config({
    baseUrl: "bower_components/",
    paths:{
        "jquery":"jquery/dist/jquery.min",
        "angular":"angular/angular.min",
        "less":"less/dist/less.min",
        "bootstrap":"bootstrap/dist/js/bootstrap.min"
    },
    shim:{
        "bootstrap":["jquery"]
    }
});
require(['../index','less','bootstrap']);