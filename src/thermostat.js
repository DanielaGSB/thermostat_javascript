function Thermostat(temperature, minimum, powerSaving) {
  'use strict';
  this.temperature = temperature || 20;
  this.MINIMUM_TEMPERATURE = minimum || 10;
  this.powerSavingMode = powerSaving || true;
}

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.resetButton = function () {
  this.temperature = 20;
};

Thermostat.prototype.upButton = function () {
  if (this.temperature >= 32 && this.isPowerSavingOn() === false) {throw 'Temperature at maximum for any mode';}
  if (this.temperature >= 25 && this.isPowerSavingOn() === true) {throw 'Temperature at maximum for power saving mode';}
  return this.temperature++;
};

Thermostat.prototype.downButton = function () {
  if (this.temperature <= 10) {throw 'Temperature at minimum';}
  return this.temperature--;
};

Thermostat.prototype.powerSavingSwitch = function () {
  if (this.isPowerSavingOn() === false) {this.powerSavingMode = true;}
  else if (this.isPowerSavingOn() === true) {this.powerSavingMode = false;}
};

Thermostat.prototype.displayColour = function () {
  if (this.temperature < 18) {return 'Green';}
  if (this.temperature < 25) {return 'Yellow';}
  if (this.temperature >= 25) {return 'Red';}
};
