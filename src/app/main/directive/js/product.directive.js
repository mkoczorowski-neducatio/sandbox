(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('product', ProductDirective);

  /** @ngInject */
  function ProductDirective(ProductModel) {
    return {
      restrict: 'E',
      templateUrl: 'app/main/directive/html/product.html',
      link: function($scope) {
        var product = new ProductModel();
        $scope.product = product;
        $scope.properties.product = product;
      }
    };
  };
})();
