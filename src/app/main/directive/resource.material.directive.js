(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('resourcematerial', ResourceMaterial);

  /** @ngInject */
  function ResourceMaterial(ResourceMaterialModel) {
    return {
      restrict: 'E',
      templateUrl: 'app/main/directive/resource.material.html',
      link: function($scope) {
        var product = new ResourceMaterialModel();
        $scope.product = product;
        $scope.properties.product = product;
      }
    };
  };
})();
