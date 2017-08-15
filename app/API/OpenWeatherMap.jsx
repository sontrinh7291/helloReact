var axios =  require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?&appid=d24f6dd2cb2be791015982d47f784a92&units=metric';

//API key : d24f6dd2cb2be791015982d47f784a92

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
         return res.data.main.temp;
      }
    },function(res){
          throw new Error(res.data.message);
    });
  }
}
