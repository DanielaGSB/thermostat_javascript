function Thermostat(temperature, minimum, powerSaving) {
  'use strict';
  this.DEFAULT_TEMPERATURE = 20;
  this.PSM_MAX_TEMPERATURE = 25;
  this.PSM_OFF_MAX_TEMPERATURE = 32;
  this.LOW_USAGE_TEMPERATURE = 18;
  this.HIGH_USAGE_TEMPERATURE = 25;
  this.temperature = temperature || this.DEFAULT_TEMPERATURE;
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
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.upButton = function () {
  if (this.temperature >= this.PSM_OFF_MAX_TEMPERATURE && this.isPowerSavingOn() === false) {throw 'Temperature at maximum for any mode';}
  if (this.temperature >= this.PSM_MAX_TEMPERATURE && this.isPowerSavingOn() === true) {throw 'Temperature at maximum for power saving mode';}
  return this.temperature++;
};

Thermostat.prototype.downButton = function () {
  if (this.temperature <= this.MINIMUM_TEMPERATURE) {throw 'Temperature at minimum';}
  return this.temperature--;
};

Thermostat.prototype.powerSavingSwitch = function () {
  if (this.isPowerSavingOn() === false) {this.powerSavingMode = true;}
  else if (this.isPowerSavingOn() === true) {this.powerSavingMode = false;}
};

Thermostat.prototype.displayColour = function () {
  if (this.temperature < this.LOW_USAGE_TEMPERATURE) {return 'low-usage';}
  if (this.temperature < this.HIGH_USAGE_TEMPERATURE) {return 'medium-usage';}
  if (this.temperature >= this.HIGH_USAGE_TEMPERATURE) {return 'high-usage';}
};
