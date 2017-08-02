
// Create Message Component
var GreeterMess  = React.createClass({
      render: function() {
        var name = this.props.name;
        var message = this.props.message;

        return (
        <div>
          <h1>Hello {name}</h1>
          <p>{message}</p>
        </div>
      );
    }
});

//Create Form Component
var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    if(name.length>0){
      this.refs.name.value='';
      this.props.onNewName(name);
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});


//Create Main Component
var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
    name: 'React',
    message: 'Enter your name  to change',
    };
  },
  getInitialState: function(){
    return{
      name: this.props.name
    };
  },
  handleNewName: function(name){
    this.setState({
    name:name
  });
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
          <GreeterMess name={name} message={message}/>
          <GreeterForm onNewName ={this.handleNewName}/>
      </div>
    );
  }
});
var firstName = 'Thomas'


  ReactDOM.render(
    <Greeter name={firstName}/>,

    document.getElementById('app')
);
