var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    var name = "SigurdMW";
    var friends = ['Sigurd','Moland', 'Wahl'];
    var friendsItems = friends.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
  
        <div>
          <h1>Name: {name}</h1>
          <TestComponent name={this.props.name} />
          <ul>
            {friendsItems}
          </ul>
        </div>
    )
  }
});

var TestComponent = React.createClass({
  render: function(){
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
});


ReactDOM.render(
  <HelloWorld name="Sigurd" />,
  document.getElementById('app')
);