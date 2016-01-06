describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    'use strict';
    thermostat = new Thermostat();
  });

  describe('#getCurrentTemperature', function() {
    it('has default value of DEFAULT_TEMPERATURE', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe('#resetButton', function() {
    it('resets temperature', function() {
      thermostat.upButton();
      thermostat.resetButton();
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe('#upButton', function() {
    it('increases temperature', function() {
      thermostat.upButton();
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE + 1);
    });

    describe('when #isPowerSavingOn true', function () {
      describe ('temperature at 25 degrees', function () {
        it('raises error', function() {
          for (i=thermostat.DEFAULT_TEMPERATURE; i<thermostat.PSM_MAX_TEMPERATURE; i++) {
            thermostat.upButton();
          }
          expect( function() {thermostat.upButton();}).toThrow('Temperature at maximum for power saving mode');
        });
      });
    });

    describe('when #isPowerSavingOn false', function () {
      beforeEach(function() {
        thermostat.powerSavingMode = false;
      });

      describe ('temperature at 25 degrees', function () {
        it('increases temperature', function() {
          for (i=thermostat.DEFAULT_TEMPERATURE; i<thermostat.PSM_MAX_TEMPERATURE; i++) {
            thermostat.upButton();
          }
          thermostat.upButton();
          expect(thermostat.getCurrentTemperature()).toEqual(thermostat.PSM_MAX_TEMPERATURE + 1);
        });
      });

      describe ('temperature at 32 degrees', function () {
        it('raises error', function() {
          for (i=thermostat.DEFAULT_TEMPERATURE; i<thermostat.PSM_OFF_MAX_TEMPERATURE; i++) {
            thermostat.upButton();
          }
          expect( function() {thermostat.upButton();}).toThrow('Temperature at maximum for any mode');
        });
      });

    });
  });

  describe('#downButton', function() {

    it('decreases temperature', function() {
      thermostat.downButton();
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE - 1);
    });

    describe('when temperature at MINIMUM_TEMPERATURE', function () {

      it('raises error', function () {
        for (i=thermostat.DEFAULT_TEMPERATURE; i>thermostat.MINIMUM_TEMPERATURE; i--) {
          thermostat.downButton();
        }
        expect( function() {thermostat.downButton();}).toThrow('Temperature at minimum');
      });
    });
  });

  describe('#isPowerSavingOn', function () {
    it('returns true by default', function () {
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });
  });

  describe('#powerSavingSwitch', function () {

    it('switches #isPowerSavingOn return value to false', function () {
      thermostat.powerSavingSwitch();
      expect(thermostat.isPowerSavingOn()).toBe(false);
    });

    it('if called again switches #isPowerSavingOn return value to true', function () {
      thermostat.powerSavingSwitch();
      thermostat.powerSavingSwitch();
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });
  });

  describe('#displayColour', function() {

    it('returns green if temperature is below LOW_USAGE_TEMPERATURE', function () {
      for (i=thermostat.DEFAULT_TEMPERATURE; i>(thermostat.LOW_USAGE_TEMPERATURE - 1); i--) {
        thermostat.downButton();
      }
      expect(thermostat.displayColour()).toEqual('low-usage');
    });
    it ('returns yellow if temperature is below HIGH_USAGE_TEMPERATURE', function () {
      thermostat.temperature = thermostat.DEFAULT_TEMPERATURE;
      expect(thermostat.displayColour()).toEqual('medium-usage');
    });
    it ('returns red if temperature is above 25', function () {
      for (i=thermostat.DEFAULT_TEMPERATURE; i<thermostat.HIGH_USAGE_TEMPERATURE; i++) {
        thermostat.upButton();
      }
      expect(thermostat.displayColour()).toEqual('high-usage');
    });
  });
});
