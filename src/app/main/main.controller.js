(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, CartModel, ProductModel, HumanModel, NamesProvider, Timeline, EventEmitter, Population) {

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
          inteligence: 10,
          appearance: 6,
          health: 10
        }
      };

    Population.addHuman(new HumanModel(Eve, Adam, {gender: "f", name: "Aneta Johnson", age: 20}));
    Population.addHuman(new HumanModel(Eve, Adam, {gender: "m", name: "Bartosz Wilson", age: 20}));

    EventEmitter.on("birth", function(data) {
      console.log("born:", data.name);
    });

    EventEmitter.on("death", function(data) {
      console.log("died:", data.name);
    });

    $scope.toggleTimeline = function() {
      if (Timeline.isRunning()) {
        Timeline.stop();
      } else {
        Timeline.start();
      }
    };

    $scope.isTimelineRunning = function() {
      return Timeline.isRunning();
    };

    //var children = Halina.cross(Ferdynand);
    //console.log("Ich dzieci: ", children);

    //Population.addHuman(Halina);
    //Population.addHuman(Ferdynand);
    //Population.addPeople(children);

    $scope.people = Population.getPeople();
    console.log($scope.people);

    //start();

  }

})();
