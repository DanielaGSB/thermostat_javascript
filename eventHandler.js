window.onload = function() {

  alert( "welcome" );

  $( document ).ready(function () {

    var thermostat = new Thermostat();

    $("h1").css("color", "red");

    $("#temperature").text( thermostat.getCurrentTemperature());

    $("#temperature_up").click( function () {
      thermostat.upButton();
      $("#temperature").text( thermostat.getCurrentTemperature());
    });

    $("#temperature_down").click( function () {
      thermostat.downButton();
      $("#temperature").text( thermostat.getCurrentTemperature());
    });




  });

};
