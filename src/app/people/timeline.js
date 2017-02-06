(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('Timeline', TimelineService);

    /* @ngInject */
    function TimelineService($interval, EventEmitter, Population) {
      var intervalHandle = null;
      var INTERVAL_TIME = 500;

      var _onTimeChange = function() {
        EventEmitter.trigger("newYear");
        Population.crossRandomly();
      }

      return {
        start: function() {
          intervalHandle = $interval(_onTimeChange, INTERVAL_TIME);
        },
        stop: function() {
          $interval.cancel(intervalHandle);
          intervalHandle = null;
        },
        isRunning: function() {
          return intervalHandle !== null;
        }
      }
    }
})();


/* w modelu carsModel definiuję sobie weight, ktora przechowuje weight i przekazuje jako parametr
weight, ktory zostaje przekazany do nowo utworzonego obiektu, wtedy w ng-model to co wpisze,
automatycznie trafia do modelu, skąd za pomocą getWeight może odwolywac sie do metod w cart.model
*/
