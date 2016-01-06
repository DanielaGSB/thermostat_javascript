function Thermostat(temperature, minimum, isPowerSavingOn) {
  this.temperature = temperature || 20;
  this.minimum = minimum || 10;
  this.isPowerSavingOn = isPowerSavingOn || true;
}

Thermostat.prototype.upButton = function () {
  return this.temperature++;
};

Thermostat.prototype.downButton = function () {
  if (this.temperature <= 10) {throw 'Temperature at minimum';}
  return this.temperature--;
};

Thermostat.prototype.powerSavingSwitch = function () {
  if (this.isPowerSavingOn === false) {this.isPowerSavingOn = true;}
  else if (this.isPowerSavingOn === true) {this.isPowerSavingOn = false;}
};
