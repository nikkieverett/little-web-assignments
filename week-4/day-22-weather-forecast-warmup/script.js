var weather = {

  day: 'Apr 19, 2017',
  hourlyForecast: [
    {
      hour: 0,
      chanceOfRain: 0,
      temp: 76
    },
    {
      hour: 1,
      chanceOfRain: 0,
      temp: 76
    },
    {
      hour: 2,
      chanceOfRain: 0,
      temp: 75
    },
    {
      hour: 3,
      chanceOfRain: 0,
      temp: 75
    },
    {
      hour: 4,
      chanceOfRain: 0,
      temp: 74
    },
    {
      hour: 5,
      chanceOfRain: 0,
      temp: 74
    },
    {
      hour: 6,
      chanceOfRain: 0,
      temp: 73
    },
    {
      hour: 7,
      chanceOfRain: 0,
      temp: 74
    },
    {
      hour: 8,
      chanceOfRain: 0,
      temp: 75
    },
    {
      hour: 9,
      chanceOfRain: 0,
      temp: 76
    },
    {
      hour: 10,
      chanceOfRain: 0.1,
      temp: 77
    },
    {
      hour: 11,
      chanceOfRain: 0.1,
      temp: 79
    },
    {
      hour: 12,
      chanceOfRain: 0.5,
      temp: 80
    },
    {
      hour: 13,
      chanceOfRain: 0.7,
      temp: 79
    },
    {
      hour: 14,
      chanceOfRain: 0.8,
      temp: 78
    },
    {
      hour: 15,
      chanceOfRain: 0.5,
      temp: 78
    },
    {
      hour: 16,
      chanceOfRain: 0.2,
      temp: 74
    },
    {
      hour: 17,
      chanceOfRain: 0,
      temp: 71
    },
    {
      hour: 18,
      chanceOfRain: 0,
      temp: 70
    },
    {
      hour: 19,
      chanceOfRain: 0,
      temp: 70
    },
    {
      hour: 20,
      chanceOfRain: 0,
      temp: 69
    },
    {
      hour: 21,
      chanceOfRain: 0,
      temp: 69
    },
    {
      hour: 22,
      chanceOfRain: 0,
      temp: 68
    },
    {
      hour: 23,
      chanceOfRain: 0,
      temp: 67
    }
  ]
};





function printWeather(w) {

  console.log('------------------------------');
  console.log('Weather for ' + w.day);
  console.log('------------------------------');
  // console.log(weather);

  for(var i = 0; i < w.hourlyForecast.length; i ++){
    if(w.hourlyForecast[i].hour === 0){
      console.log('12:00 Midnight');
        console.log('   Chance of rain: ' + (w.hourlyForecast[i].chanceOfRain * 100) + '%');
        console.log('   Temp: ' + w.hourlyForecast[i].temp);
    }
    else if(w.hourlyForecast[i].hour === 12){
      console.log(w.hourlyForecast[i].hour + ':00 Noon');
        console.log('   Chance of rain: ' + (w.hourlyForecast[i].chanceOfRain * 100) + '%');
        console.log('   Temp: ' + w.hourlyForecast[i].temp);

    }
    else if(w.hourlyForecast[i].hour > 12){
      console.log(w.hourlyForecast[i].hour - 12 + ':00 PM');
        console.log('   Chance of rain: ' + (w.hourlyForecast[i].chanceOfRain * 100) + '%');
        console.log('   Temp: ' + w.hourlyForecast[i].temp);

    }
    else {
      console.log(w.hourlyForecast[i].hour + ':00 AM');
        console.log('   Chance of rain: ' + (w.hourlyForecast[i].chanceOfRain * 100) + '%');
        console.log('   Temp: ' + w.hourlyForecast[i].temp);

    }
  }

}

printWeather(weather);
