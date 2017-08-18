var React = require('react');

var WeatherMess = React.createClass({
  render: function(){
    var {temp, location} = this.props;

    return (
      <div>
          <h3 className="text-center">It's is {temp} Celcius in {location}</h3>
      </div>
    );
  }
});

module.exports = WeatherMess;
