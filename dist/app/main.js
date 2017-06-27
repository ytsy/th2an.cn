require.config({
    baseUrl: "./",
    paths:{
        "jquery":"node_modules/jquery/dist/jquery.min",
        "angular":"node_modules/angular/angular.min",
        "bootstrap":"node_modules/bootstrap/dist/js/bootstrap.min"
    },
    shim:{
        "bootstrap":["jquery"]
    }
});
require(['app/index-controller']);