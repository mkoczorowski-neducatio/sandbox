(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('resourcematerial', ResourceMaterial);

  /** @ngInject */
  function ResourceMaterial(ResourceMaterialModel) {
    return {
      restrict: 'E',
      templateUrl: 'app/main/directive/html/resource.material.html',
      link: function($scope) {
        //nowy obiekt typu ResourceMaterialModel
        var createNewModel = function() {
          var product = new ResourceMaterialModel();
          //podczepienie tego modelu pod property "product" w scopie dyrektywy (obiekt ten nie bylby widoczny z poziomu kontrolera)
          $scope.product = product;
          //ustawienie tego samego obiektu (dane sa wspoldzielone miedzy $scope.product i $scope.properties.product) do $scope.properties.product, by byl widoczny z poziomu kontrolera
          //zmienna properties jest nowym obiektem utowrzonym w kontrolerze, a z poziomu dyrektywy "doczepiamy" sie tylko do jej wewnetrznej property: product
          $scope.properties.product = product;
        };
        createNewModel();
        $scope.$on("reset", function() {
          createNewModel();
        });
      }
    };
  };
})();
