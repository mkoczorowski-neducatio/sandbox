//ten model oczekuje, ze otrzyma dane niezaleznie z ktorego modelu

(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('CartModel', CartModel);

  /** @ngInject */
  function CartModel() {

    var Cart = function() {

      // tablica odbiera obiekty dodawane dynamicznie, które sa przekazywane do metody overAllPrice
      this.listOfProducts = [];
      this.sumOfWeight = 0;
      this.sumOfPrice = 0;
      console.log(this.listOfProducts);

      // metoda iteruje po tablicy obiektów, które są przyjmowane z modelu listOfProducts i zapisywane do tablicy this.listOfProducts
      this.overAllPrice = function() {
        this.sumOfPrice = 0;
        this.sumOfWeight = 0;
        //aby uzyskać dostęp do zmiennych poza scope, musimy przed zamknięciem forEacha dodać frazę this, która odblokuje dostęp do globalnych zmiennych.
        this.listOfProducts.forEach(function(product) {
          this.sumOfPrice = this.sumOfPrice + product.getPrice();
        }, this);
        return this.sumOfPrice;
      };

      this.overAllWeight = function() {
        this.sumOfPrice = 0;
        this.sumOfWeight = 0;
        this.listOfProducts.forEach(function(product) {
          this.sumOfWeight = this.sumOfWeight + product.getWeight();
        }, this);
        return this.sumOfWeight;
      };

      this.addProduct = function(product) {
        console.log(product);
        this.listOfProducts.push(product);
      };

      this.removeElement = function(id) {
        this.listOfProducts.splice(id, 1);
      }

    }
    return Cart;
  }
})();
