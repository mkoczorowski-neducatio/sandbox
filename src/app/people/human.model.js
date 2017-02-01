(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('HumanModel', HumanModelFactory);

    function HumanModelFactory() {
      var genders = ["f", "m"];
      var getRandomGender = function() {
        return genders[Math.round(Math.random())];
      };
      var randomSpanFromTo = function(from, to) {
        return Math.round((Math.random() * (to-from)) + from);
      };

      var randomizeFromParents = function(motherFeature, fatherFeature) {
        return randomSpanFromTo(Math.min(motherFeature, fatherFeature), Math.max(motherFeature, fatherFeature));
      }

      var whoIsMother = function(human1, human2) {
        return human1.gender === "f" ? human1 : human2;
      };

      var whoIsFather = function(human1, human2) {
        return human1.gender === "m" ? human1 : human2;
      };

      var HumanModel = function(mother, father, gender) {
        this.mother = mother;
        this.father = father;
        this.gender = gender;
        this.name = null;
        this.alive = true;
        this.age = 0;
        this.birth();
      };

      HumanModel.prototype = {
        birth: function() {
          this.features = {
            "inteligence": randomizeFromParents(this.mother.features.inteligence, this.father.features.inteligence),
            "appearance": randomizeFromParents(this.mother.features.appearance, this.father.features.appearance),
            "health": randomizeFromParents(this.mother.features.health, this.father.features.health)
          };
          this.seed = Math.round(Math.random()*40 - 20);
        },
        setName: function(name) {
          this.name = name;
        },
        determineMaxAge: function() {
          return (this.features.health * 10) + this.seed;
        },
        live: function() {
          if (this.alive) {
            this.age++;
            this.alive = (this.age <= this.determineMaxAge());
          }
        },
        canCross: function(human1, human2) {
          return human1.gender != human2.gender;
        },
        cross: function(partner) {
          if (this.canCross(this, partner)) {
            var mother = whoIsMother(this, partner),
                father = whoIsFather(this, partner);
            var children = [];
            var maxChildrenCount = randomSpanFromTo(1, 3);
            for(var i=0; i<maxChildrenCount; i++) {
              children.push(new HumanModel(mother, father, getRandomGender()));
            }
            return children;
          }
          return null;
        }
      };

      return HumanModel;
    }
})();


/* w modelu carsModel definiuję sobie weight, ktora przechowuje weight i przekazuje jako parametr
weight, ktory zostaje przekazany do nowo utworzonego obiektu, wtedy w ng-model to co wpisze,
automatycznie trafia do modelu, skąd za pomocą getWeight może odwolywac sie do metod w cart.model
*/
