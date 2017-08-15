var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMess = require('WeatherMess');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
  getInitialState: function(){
    return{
      location: 'Miami',
      temp: 22
    }
  },
  handleSearch: function(location){
    var that = this;
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage){
      alert(errorMessage);
    });
  },
  render: function(){
    var{temp, location} = this.state;

    return (
      <div>
      <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMess temp={temp} location={location}/>
        </div>
    );
  }
});

module.exports = Weather;
