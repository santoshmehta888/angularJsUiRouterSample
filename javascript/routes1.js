(function() {

  var app = angular.module('myapp');

  app.controller('route1ctrl', ['$scope',
    function($scope) {

      $scope.items = ["A", "List", "Of", "Items"];
    }
  ]);
})();