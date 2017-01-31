(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('product', ProductDirective);

  function ProductDirective(ProductModel) {
    return {
      restrict: 'E',
      templateUrl: 'app/main/directive/html/product.html',
      link: function($scope) {
        var createNewModel = function() {
          var product = new ProductModel();
          $scope.product = product;
          $scope.properties.product = product;
        }
        createNewModel();
        $scope.$on("reset", function() {
          createNewModel();
        });
      }
    };
  };
})();
