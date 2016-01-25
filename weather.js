$(function() {
  var handleWeatherResponse = function(data) {
    // "data" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(data);

    // We also set a window-level variable so we can use it in the console,
    // by typing data
    window.data = data;
    
    // Put your code here. Don't change any other code in this file. You will be sad.

    var markup = "<div class='row'><div class='col-md-2 text-center'><p><strong>CURRENT WEATHER</strong>";
    markup += "<p>" + data.currently.summary + ". Current temperature: " + data.currently.temperature + ". Feels like: " + data.currently.apparentTemperature + "</p></div>";
    markup += "<div class='col-md-2 text-center'><p><strong>MONDAY</strong>";
    markup += "<p>" + data.daily.data[1].summary + " Temperatures: min " + data.daily.data[1].temperatureMin + " max " + data.daily.data[1].temperatureMax + "</p></div>";
    markup += "<div class='col-md-2 text-center'><p><strong>TUESDAY</strong>";
    markup += "<p>" + data.daily.data[2].summary + " Temperatures: min " + data.daily.data[2].temperatureMin + " max " + data.daily.data[2].temperatureMax + "</p></div>";
    markup += "<div class='col-md-2 text-center'><p><strong>WEDNESDAY</strong>";
    markup += "<p>" + data.daily.data[3].summary + " Temperatures: min " + data.daily.data[3].temperatureMin + " max " + data.daily.data[3].temperatureMax + "</p></div></div>";
   
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML) 
    // and write it out to the page.
    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});