(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(
    $scope,
    CartModel,
    ProductModel,
    HumanModel,
    NamesProvider,
    Timeline,
    $interval,
    Population)
  {

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

    //definicja pierwszego i drugiego obiektu
    var Eve = {
      features: {
        inteligence: 1,
        appearance: 10,
        health: 5
      }
    };
    var Adam = {
      features: {
        inteligence: 1,
        appearance: 6,
        health: 10
      }
    };

    Population.addHuman(new HumanModel(Eve, Adam, {gender: "f", name: "Aneta Johnson", age: 20}));
    Population.addHuman(new HumanModel(Eve, Adam, {gender: "m", name: "Bartosz Wilson", age: 20}));

    Timeline.on("birth", function(data) {
      console.log("born:", data.name);
    });

    Timeline.on("death", function(data) {
      console.log("died:", data.name);
    });

    $scope.people = Population.getPeople();
    console.log($scope.people);

    var i = 0;

    var start = function() {
       $interval(function() {
        i++;
        Timeline.trigger("newYear");
        //if (i % 5 == 0) {
        Population.crossRandomly();
        //}
      }, 500);
    };

    //start();

  }

})();
