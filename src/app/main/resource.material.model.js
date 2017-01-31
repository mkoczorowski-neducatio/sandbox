(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('ResourceMaterialModel', ResourceMaterialFactory);

  /** @ngInject */ /* obiekt angularowy */
  function ResourceMaterialFactory() {

    var ResourceMaterialModel = function(unitPrice, name, unitWeight, count) {

    //  this.price = 0;
      this.name = name || "";
    //  this.weight = 0;
      this.unitPrice = unitPrice || 0;
      this.unitWeight = unitWeight || 0;
      this.count = count || 0;

      //dodanie do obiektu wartosci z widoku
      this.setName = function(name) {
        this.name = name;
      };

      this.setPrice = function(unitPrice) {
        this.price = price;
      };

      this.setWeight = function(unitWeight) {
        this.weight = weight;
      };

      //zwraca wartosc do innego modelu
      this.getName = function() {
        return this.name;
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
