(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('CarsModel', CarsFactory);

    function CarsFactory() {
      var CarsModel = function(price, weight, name) {
        this.name = name || "";
        this.weight = weight || 0;
        this.price = price || 0;

        this.setName = function(name) {
          this.name = name;
        };

        this.setWeight = function(weight) {
          this.weight = weight;
        };

        this.setPrice = function(price) {
          this.price = price;
        };

        this.getName = function() {
          return this.name;
        };

        this.getWeight = function() {
          return this.weight;
        };

        this.getPrice = function() {
          return this.price;
        };
      };
      return CarsModel;
    }
})();


/* w modelu carsModel definiuję sobie weight, ktora przechowuje weight i przekazuje jako parametr
weight, ktory zostaje przekazany do nowo utworzonego obiektu, wtedy w ng-model to co wpisze,
automatycznie trafia do modelu, skąd za pomocą getWeight może odwolywac sie do metod w cart.model
*/
