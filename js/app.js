(function() {
    var app = angular.module('beta', ['ngRoute']);

      app.config(function($routeProvider) {
        $routeProvider

      .when('/', {
        templateUrl: 'contents/home-page.php'
      })
      .when('/Home', {
        templateUrl: 'contents/home-page.php'
      });

    });        
      app.run(function ($rootScope, $location) {
    
        $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
      window.scrollTo(0, 0);
            });
        });
})();