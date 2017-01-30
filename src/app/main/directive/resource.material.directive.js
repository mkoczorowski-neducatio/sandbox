(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('resourcematerial', ResourceMaterial);

  /** @ngInject */
  function ResourceMaterial() {
    return {
      restrict: 'E',
      templateUrl: 'app/main/directive/resource.material.html',
      link: function(scope) {

      }
    };
  };
})();
