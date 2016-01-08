window.onload = function() {

  alert( "welcome" );
  $.get( 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric',
  function( response ) {
    $('#temp_city').text( response.main.temp );
  });

  $( document ).ready(function () {

    var thermostat = new Thermostat();

    var response;

    $('#select_city').submit(function( event ) {
      event.preventDefault();
      var city = $("#current_city").val();
    $.get( 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric',
    function( data ) {
    $('#temp_city').text( data.main.temp );
  });});


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
