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
      //console.log(this.listOfProducts);

      // metoda iteruje po tablicy obiektów, które są przyjmowane z modelu listOfProducts i zapisywane do tablicy this.listOfProducts
      this.overAllPrice = function() {
        return this.listOfProducts.reduce(function(sum, product) {
          return sum+product.getPrice();
        }, 0);
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
        this.listOfProducts.push(product);
      };

      this.removeElement = function(id) {
        this.listOfProducts.splice(id, 1);
      }

    }
    return Cart;
  }
})();
