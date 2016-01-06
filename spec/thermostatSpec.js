describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat starts at 20 degrees', function() {
    it('sets start temperature', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  });
