window.onload = function() {

  alert( "welcome" );

  $( document ).ready(function () {

    var thermostat = new Thermostat();

    var response;

    $.get( "http://api.openweathermap.org/data/2.5/weather?q=Londonuk&units=metricappid=2de143494c0b295cca9337e1e96b00e0&units=metric", function( response ) {
    $('#temp_city').text( response.main.temp );
  });

      $("#temperature").text( thermostat.getCurrentTemperature());
      $("#temperature").css('color', 'orange');


    $("#temperature_up").click( function () {
      thermostat.upButton();
      color_generator();
      $("#temperature").text( thermostat.getCurrentTemperature());
    });

    $("#temperature_down").click( function () {
      thermostat.downButton();
      color_generator();
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

    color_generator = function () {
      if (thermostat.displayColour() == 'low-usage') {
        $("#temperature").css('color', 'green');
      }

      if (thermostat.displayColour() == 'medium-usage') {
        $("#temperature").css('color', 'orange');
      }

      if (thermostat.displayColour() == 'high-usage') {
        $("#temperature").css('color', 'red');
      }
    };
  });
};
