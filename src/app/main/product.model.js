(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('ProductModel', ProductModelFactory);

  /** @ngInject */ /* obiekt angularowy */
  function ProductModelFactory() {

    /*deklaracja klasy
    aby ta klasa mogła przyjmować dowolne wartości, należy zdefiniować każdą właściwość jako this oraz przekazać parametry */
    var ProductModel = function(price, name, weight) {

      /*zdefiniowane zmienne, które oczekują wartości z kontrolera. */
      this.price = price || 0;
      this.name = name || "";
      this.weight = weight || "";

      /*poniżej zostały zdefiniowane metody, które służą do podstawiania wartości
        w kontrolerze wywołujemy stworzone funkcje, ktore przekazują wartości z widoku do tych funkcji, a te komunikują się z modelem*/
      this.setPrice = function(price) {
        this.price = price;
      };

      this.setName = function(name) {
        this.name = name;
      };

      this.setWeight = function(weight) {
        this.weight = weight;
      };

      this.getName = function() {
        return this.name;
      };

      /* metoda odbiera od kontrolera bieżącą cenę, którą przekazuje do modelu cart, w której odbiera ją forEach */
      this.getPrice = function() {
        return this.price;
      };

      this.getWeight = function() {
        return this.weight;
      };


    }

    return ProductModel;
  }
})();
