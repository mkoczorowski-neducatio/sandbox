(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('Population', PopulationService);

    function PopulationService() {

      var perfectSpecimen = function(person, gender) {
        return (person.gender === gender) && person.alive && person.age > 15 && person.age < 40;
      };

      var pickPersonByGender = function(gender) {
        var oneGender = _people.filter(function(person) {
          return perfectSpecimen(person, gender);
        });
        return oneGender[Math.round(Math.random()*(oneGender.length-1))];
      }

      var _people = [];

      return {
        addHuman: function(human) {
          _people.push(human);
        },
        getPeople: function() {
          return _people;
        },
        addPeople: function(people) {
          people.forEach(function(person) {
            _people.push(person);
          });
        },
        crossRandomly: function() {
          var female = pickPersonByGender("f");
          var male = pickPersonByGender("m");
          if (female !== undefined && male !== undefined) {
            var children = female.cross(male);
            console.log("Crossing: " + female.name + " + "+male.name + "["+children.length+"]");
            this.addPeople(children);
          }
        }
      }
    }
})();


/* w modelu carsModel definiuję sobie weight, ktora przechowuje weight i przekazuje jako parametr
weight, ktory zostaje przekazany do nowo utworzonego obiektu, wtedy w ng-model to co wpisze,
automatycznie trafia do modelu, skąd za pomocą getWeight może odwolywac sie do metod w cart.model
*/
