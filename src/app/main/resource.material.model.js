(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('ResourceMaterialModel', ResourceMaterialFactory);

  /** @ngInject */ /* obiekt angularowy */
  function ResourceMaterialFactory() {

    var ResourceMaterialModel = function(unitPrice, name, unitWeight, count) {

      this.price = 0;
      this.name = name || "";
      this.weight = 0;
      this.unitPrice = unitPrice || 0;
      this.unitWeight = unitWeight || 0;
      this.count = count || 0;

      this.setName = function(name) {
        this.name = name;
      };

      this.getPrice = function() {
        return this.unitPrice * this.count;
      };

      this.getWeight = function() {
        return this.unitWeight * this.count;
      };
    };

    return ResourceMaterialModel;
  }
})();
