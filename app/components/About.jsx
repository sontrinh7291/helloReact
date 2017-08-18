var React = require('react');
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        My first application build on React.
      </p>
      <p>
        <a href="http://www.openweathermap.net">Data from Open Weather Map</a>
      </p>
    </div>

  )
};

module.exports = About;
