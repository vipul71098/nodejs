

  var myapp =angular.module("app",[ "ngRoute","checklist-model"]);
  myapp.config(function($routeProvider){
    $routeProvider
     .when('/', {
        templateUrl : 'channels.html',
        controller  : 'mainctrl'
      })
      .when('/downloadcsv', {
        templateUrl : 'downloadcsv.html',
        controller  : 'downloadctrl'
      })
  });
