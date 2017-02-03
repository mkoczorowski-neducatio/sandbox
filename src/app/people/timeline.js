(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('Timeline', TimelineService);

    function TimelineService() {

      var eventsRegistry = {};

      return {
        trigger: function(eventName, properties) {
            if (angular.isDefined(eventsRegistry[eventName])) {
              eventsRegistry[eventName].forEach(function(listener) {
                listener.call(listener, properties);
              });
            }
         },
         on: function(eventName, listener) {
           if (!angular.isDefined(eventsRegistry[eventName])) {
             eventsRegistry[eventName] = [];
           }
           eventsRegistry[eventName].push(listener);
         },
         off: function(eventName, listener) {
           eventsRegistry[eventName].forEach(function(listnr, index, object){
             if (listnr === listener) {
               object.splice(index, 1);
             }
           });
         }
      }
    }
})();
