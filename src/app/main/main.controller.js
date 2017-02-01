(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, CartModel, ProductModel, HumanModel) {

    // ng-switch korzysta z tych wartosci i laduje dyrektywy, w zaleznosci od naszego wyboru
    $scope.productTypes = [
      {
        "key": "product",
        "value": "Product"
      },
      {
        "key": "resource_material",
        "value": "Resource"
      },
      {
        "key": "cars",
        "value": "Cars"
      }
    ];

    var Eve = {
        features: {
          inteligence: 2,
          appearance: 10,
          health: 5
        }
      }
    ;
    var Adam = {
        features: {
          inteligence: 10,
          appearance: 6,
          health: 10
        }
      };

    var firstHumanFemale = new HumanModel(Eve, Adam, "f");
    var firstHumanMale = new HumanModel(Eve, Adam, "m");

    var children = firstHumanFemale.cross(firstHumanMale);

    console.log(children);

    /* tworzy globalny obiekt, ktory bedzie nadpisany w wybranej w ng-switch dyrektywie. Domyslnie powinno nastapic przypisanie nazwy obiektu do $scope,
      jednak zasięg $scope ogranicza to, dlatego obiekt nadpisywany jest do globalnego obiektu, ktory obsluzy formularze, ktore zostana wyslane do cart.model.js */
    $scope.properties = {};

    $scope.selectedType = $scope.productTypes[0];

    var cart = new CartModel();
    $scope.cart = cart;

    $scope.displaySumOfPrice = function() {
      $scope.cart.overAllPrice();
      console.log($scope.cart.overAllPrice());
    }

    $scope.displaySumOfWeight = function() {
      $scope.cart.overAllWeight();
      console.log($scope.cart.overAllWeight());
    }

    $scope.add = function() {
      $scope.cart.addProduct($scope.properties.product);
      $scope.$broadcast("reset");
      console.log(JSON.stringify($scope.cart, null, 2));
      // console.log(JSON.stringify($scope.product, null, 2));

      //ten zapis tworzy nowy obiekt, bez niego bedziemy nadpisywali najnowszy obiekt
      //$scope.product = new ProductModel();
    }

    $scope.removeElement = function(id) {
      // $scope.product.getNumber(id);
      // console.log($scope.product.getNumber(id));
      // console.log(id);
      $scope.cart.removeElement(id);
    }

  }

})();
