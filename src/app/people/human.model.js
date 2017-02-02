(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('HumanModel', HumanModelFactory);

    function HumanModelFactory() {

      //funkcje pomocnicze
      var genders = ["f", "m"];

      //funkcja losuje pomiedzy kobietą z mężczyzną generując randomowo płeć nowego obiektu
      var getRandomGender = function() {
        return genders[Math.round(Math.random())];
      };

      var randomSpanFromTo = function(from, to) {
        return Math.round((Math.random() * (to-from)) + from);
      };

      //funkcja przechwytuje jako parametry inteligencję, wygląd i zdrowie z rodziców, ktorzy maja poczatkowe wartości
      var randomizeFromParents = function(motherFeature, fatherFeature) {
        return randomSpanFromTo(Math.min(motherFeature, fatherFeature), Math.max(motherFeature, fatherFeature));
      }

      //funkcja
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

        //funkcja bierze z obiektu, ktory ma wygenerowane losowo propertiesy, losuje i dodaje
        determineMaxAge: function() {
          return (this.features.health * 10) + this.seed;
        },

        //jeszcze nieuzywana funkcja
        live: function() {
          if (this.alive) {
            this.age++;
            this.alive = (this.age <= this.determineMaxAge());
          }
        },

        //sprawdza, czy płeć jest różna od siebie
        canCross: function(human1, human2) {
          return human1.gender != human2.gender;
        },
        cross: function(female, male) {
        //  console.log(this, partner);
          if (this.canCross(female, male)) {
            var mother = whoIsMother(female, male),
                father = whoIsFather(female, male);
            var children = [];
            var maxChildrenCount = randomSpanFromTo(1, 3);
            for(var i=0; i<maxChildrenCount; i++) {
              children.push(new HumanModel(mother, father, getRandomGender()));
              console.log("Ilosc dzieci: ",i+1, children);
            }
            return children;
          }
          return null;
        },
      };
      return HumanModel;
    }
})();


/* w modelu carsModel definiuję sobie weight, ktora przechowuje weight i przekazuje jako parametr
weight, ktory zostaje przekazany do nowo utworzonego obiektu, wtedy w ng-model to co wpisze,
automatycznie trafia do modelu, skąd za pomocą getWeight może odwolywac sie do metod w cart.model
*/
