window.onload = function() {

  alert( "welcome" );

  $( document ).ready(function () {

    var thermostat = new Thermostat();

    $("#temperature").text( thermostat.getCurrentTemperature());

    $("#temperature_up").click( function () {
      thermostat.upButton();
      $("#temperature").text( thermostat.getCurrentTemperature());
    });

    $("#temperature_down").click( function () {
      thermostat.downButton();
      $("#temperature").text( thermostat.getCurrentTemperature());
    });

    $("#power_saving_status").text( thermostat.isPowerSavingOn());

    $("#power_saving_switch").click( function () {
      thermostat.powerSavingSwitch();
        $("#power_saving_status").text( thermostat.isPowerSavingOn());
    });

    $("#temperature_reset").click( function () {
      thermostat.resetButton();
      $("#temperature").text( thermostat.getCurrentTemperature());
    });









  });

};
