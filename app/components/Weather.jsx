var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMess = require('WeatherMess');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
  getInitialState: function(){
    return{
       isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading:true});

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading:false
      });
    }, function (errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function(){
    var{isLoading, temp, location} = this.state;
    function renderMessage(){
      if(isLoading){
         return <h3>Fetching...</h3>;
      } else if(temp && location) {
        return <WeatherMess temp={temp} location={location}/>;
      }
    }

    return (
      <div>
      <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        </div>
    );
  }
});

module.exports = Weather;
