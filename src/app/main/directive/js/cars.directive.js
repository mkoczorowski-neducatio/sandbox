(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('cars', Cars);

  function Cars(CarsModel) {
    return {
      restrict: 'E',
      templateUrl: 'app/main/directive/html/cars.html',
      link: function($scope) {
        var product = new CarsModel();
        $scope.product = product;
        $scope.properties.product = product;
      }
    }
  }

})();
