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
      this.weight = weight || 0;

      /*poniżej zostały zdefiniowane metody, które służą do podstawiania wartości
        w kontrolerze wywołujemy stworzone funkcje, ktore przekazują wartości z widoku do tych funkcji, a te komunikują się z modelem*/
    }
    //zamiast przypisywac jak na gorze do konkretnego obiektu za kazdym razem nowe metody
    //dodajemy je w prototypie, dzieki czemu sa wspolne dla kazdego obiektu stworzonego na bazie ProductModel

    //dodatkowo mozemu uzyc angular.extend by nie pisac za kazdym razem Obiekt.prototyp.funkcja czy Obiekt.prototyp.property, tylko
    //uzywac notacji json'owej
    angular.extend(ProductModel.prototype, {

      setPrice: function(price) {
        this.price = price;
      },
      getPrice: function() {
        return this.price;
      },
      setName: function(name) {
        this.name = name;
      },
      setWeight: function(weight) {
        this.weight = weight;
      },
      getName: function() {
        return this.name;
      },
      getWeight: function() {
        return this.weight;
      }
    })

    //console.log(ProductModel.prototype);
    return ProductModel;
  }
})();
