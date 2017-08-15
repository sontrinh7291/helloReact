var React = require('react');

var WeatherMess = React.createClass({
  render: function(){
    var {temp, location} = this.props;

    return (
      <div>
          <h2>It's is {temp} in {location}</h2>
      </div>
    );
  }
});

module.exports = WeatherMess;
