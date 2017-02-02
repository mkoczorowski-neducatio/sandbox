(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('HumanModel', HumanModelFactory);

    /** @ngInject */
    function HumanModelFactory(NamesProvider) {

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

      var HumanModel = function(mother, father) {
        this.mother = mother;
        this.father = father;
        this.name = null;
        this.alive = true;
        this.age = 0;
        this.luck = 0;
        this.features = {
          inteligence: 0,
          appearance: 0,
          health: 0
        };
        this.birth();
      };

      HumanModel.prototype = {
        _presetProperties: function(properties) {
          angular.extend(this, properties);
        },

        assignSingleFeature: function(featureName) {
          if (angular.isDefined(this.mother) && angular.isDefined(this.father)) {
            return randomizeFromParents(this.mother.features[featureName], this.father.features[featureName]);
          } else {
            return randomSpanFromTo(1, 10);
          }
        },

        assignFeatures: function() {
          this.features = {
            inteligence: this.assignSingleFeature("inteligence"),
            appearance: this.assignSingleFeature("appearance"),
            health: this.assignSingleFeature("health")
          };
        },

        birth: function() {
          this.gender = getRandomGender();
          this.assignFeatures();
          this.luck = Math.round(Math.random()*40 - 20);
          //-20, 20
        },

        setName: function(name) {
          this.name = name;
        },

        setGender: function(gender) {
          this.gender = gender;
        },

        getLastName: function() {
          return this.name.split(" ")[1];
        },

        //funkcja bierze z obiektu, ktory ma wygenerowane losowo propertiesy, losuje i dodaje
        determineMaxAge: function() {
          return Math.max(0, (this.features.health * 10) + this.luck);
        },

        //jeszcze nieuzywana funkcja
        /**
        live: function() {
          if (this.alive) {
            this.age++;
            this.alive = (this.age <= this.determineMaxAge());
          }
        },
        */

        //sprawdza, czy płeć jest różna od siebie
        canCross: function(human1, human2) {
          return human1.gender != human2.gender;
        },

        cross: function(mate) {
        //  console.log(this, partner);
          if (this.canCross(this, mate)) {
            var mother = whoIsMother(this, mate),
                father = whoIsFather(this, mate);
            var children = [];
            var maxChildrenCount = randomSpanFromTo(1, 3);
            for(var i=0; i<maxChildrenCount; i++) {
              var child = new HumanModel(mother, father);
              child.setName(NamesProvider.generateName(child.gender) + " " + father.getLastName());
              children.push(child);
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
