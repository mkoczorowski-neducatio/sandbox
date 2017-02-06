(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('Parents', ParentsService);

    function ParentsService() {
      return {
        setFathersName: function(fathersName) {
          this.fathersName = fathersName;
        },

        setMothersName: function(mothersName) {
          this.mothersName = mothersName;
        },

        getFathersName: function() {
          return this.fathersName;
        },

        getMothersName: function() {
          return this.mothersName;
        }
      }
    }
})();
