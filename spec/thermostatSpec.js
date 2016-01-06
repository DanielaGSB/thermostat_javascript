describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat(temperature=20,minimum=10,isPowerSavingOn=true);
  });

  describe('thermostat starts at 20 degrees', function() {
    it('sets start temperature', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('thermostat temperature allowed to be reset', function() {
    it('resets temperature', function() {
      thermostat.upButton();
      thermostat.resetButton();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#upButton', function() {
    it('increases temperature', function() {
      thermostat.upButton();
      expect(thermostat.temperature).toEqual(21);
    });

    describe('when #isPowerSavingOn true', function () {
      describe ('temperature at 25 degrees', function () {
        it('raises error', function() {
          thermostat.temperature = 25;
          expect( function() {thermostat.upButton();}).toThrow('Temperature at maximum for power saving mode');
        });
      });
    });

    describe('when #isPowerSavingOn false', function () {
      beforeEach(function() {
        thermostat.isPowerSavingOn = false;
      });

      describe ('temperature at 25 degrees', function () {
        it('increases temperature', function() {
          thermostat.temperature = 25;
          thermostat.upButton();
          expect(thermostat.temperature).toEqual(26);
        });
      });

      describe ('temperature at 32 degrees', function () {
        it('raises error', function() {
          thermostat.temperature = 32;
          expect( function() {thermostat.upButton();}).toThrow('Temperature at maximum for any mode');
        });
      });

    });
  });

  describe('#downButton', function() {

    it('decreases temperature', function() {
      thermostat.downButton();
      expect(thermostat.temperature).toEqual(19);
    });

    describe('when temperature at 10C', function () {

      it('raises error', function () {
        thermostat.temperature = 10;
        expect( function() {thermostat.downButton();}).toThrow('Temperature at minimum');
      });
    });
  });

  describe('#isPowerSavingOn', function () {
    it('returns true by default', function () {
      expect(thermostat.isPowerSavingOn).toBe(true);
    });
  });

  describe('#powerSavingSwitch', function () {

    it('switches #isPowerSavingOn return value to false', function () {
      thermostat.powerSavingSwitch();
      expect(thermostat.isPowerSavingOn).toBe(false);
    });

    it('if called again switches #isPowerSavingOn return value to true', function () {
      thermostat.powerSavingSwitch();
      thermostat.powerSavingSwitch();
      expect(thermostat.isPowerSavingOn).toBe(true);
    });

  });

  });
