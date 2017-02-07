(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('cars', Cars);

  function Cars(CarsModel) {
    return {
      restrict: 'E',
      templateUrl: 'app/main/directive/html/cars.html',
      link: function($scope) {

        /* domyslnie przeskakujac pomiedzy roznymi dyrektywami, tworza sie osobne konstruktory, ktore dodaja obiekty do listy. Ale jesli stworzymy dwa obiekty w jednej kategorii,
        to dane nadpisuja sie do poprzednich. Aby temu zapobiec i nie musiec uzywac setterów, mozna wykorzystac $emit lub $broadcast */
        var createNewModel = function() {
          var product = new CarsModel();
          $scope.product = product;
          $scope.properties.product = product;
        }

        //funkcja wywoluje sie zaraz po wywolaniu dyrektywy oraz przy wywolaniu funkcji add()
        createNewModel();
        $scope.$on("reset", function() { // co oznacza "reset"??
          /* aby mozliwe bylo $emit w górę. $broadcast w dół */
          createNewModel();
        });
      }
    };
  };
})();
