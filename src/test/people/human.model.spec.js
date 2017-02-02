'use strict';

describe('people.HumanModel', function () {

  // load the controller's module
  beforeEach(module('cartProject'));
  var _HumanModel,
      sut;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (HumanModel) {
    _HumanModel = HumanModel;
    sut = new _HumanModel();
  }));

  it('should assign parents', function () {
    expect(sut.mother).toBe(undefined);
    expect(sut.father).toBe(undefined);
  });

  it('should set alive value', function() {
    expect(sut.alive).toBe(true);
  });

  it('should generate random gender', function() {
    expect(sut.name).toBe(null);
  });

  it('should generate random gender', function() {
    expect(["f", "m"].indexOf(sut.gender)).toBeGreaterThan(-1);
  });

  it('should generate features between values', function() {
    expect(sut.features.inteligence).toBeWithinRange(1, 10);
    expect(sut.features.appearance).toBeWithinRange(1, 10);
    expect(sut.features.health).toBeWithinRange(1, 10);
  });

  it('should generate luck between values', function() {
    expect(sut.luck).toBeWithinRange(-20, 20);
  });

  it("should assign properties to object", function() {
    sut._presetProperties({name: "john williams", gender: "f", age: 12, features: {inteligence: 1, appearance: 2, health: 3}});
    expect(sut.name).toBe("john williams");
    expect(sut.gender).toBe("f");
    expect(sut.age).toBe(12);
    expect(sut.features.inteligence).toBe(1);
  });

});
