(function() {

  var app = angular.module('myapp');

  app.controller('route2ctrl', ['$scope',
    function($scope) {

      $scope.things = ["A", "Set", "Of", "Things"];
    }
  ]);
})();