(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('ResourceMaterialModel', ResourceMaterialFactory);

  /** @ngInject */ /* obiekt angularowy */
  function ResourceMaterialFactory() {

    var ResourceMaterialModel = function(price, name, weight, count) {

      //  this.price = 0;
      this.name = name || "";
      //  this.weight = 0;
      this.price = price || 0;
      this.weight = weight || 0;
      this.count = count || 0;

      //dodanie do obiektu wartosci z widoku
      this.setName = function(name) {
        this.name = name;
      };

      this.setPrice = function(price) {
        this.price = price;
      };

      this.setWeight = function(weight) {
        this.weight = weight;
      };

      //zwraca wartosc do innego modelu
      this.getName = function() {
        return this.name;
      };

      this.getPrice = function() {
        return this.price * this.count;
      };

      this.getWeight = function() {
        return this.weight * this.count;
      };
    };

    return ResourceMaterialModel;
  }
})();
