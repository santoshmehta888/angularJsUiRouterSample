(function(){
  
  var myapp = angular.module('myapp', ["ui.router"]);
  
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1")
      
      $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "template/route1.html"
        })
          .state('route1.list', {
              url: "/list",
              templateUrl: "template/route1.list.html",
              controller: "route1ctrl"
          })
          
        .state('route2', {
            url: "/route2",
            templateUrl: "template/route2.html"
        })
          .state('route2.list', {
              url: "/list",
              templateUrl: "template/route2.list.html",
              controller: "route2ctrl"
          })
    });
  
  
  
  })();
  
