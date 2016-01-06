function Thermostat(temperature) {
  this.temperature = temperature || 20;
}

Thermostat.prototype.upButton = function () {
  return this.temperature++;
};

Thermostat.prototype.downButton = function () {
  if (this.temperature <= 10) {throw 'Temperature at minimum';}
  return this.temperature--;
};
