var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <h2>This is the start page.</h2>
        <Link to="/playerOne">
          <button className="btn btn-primary btn-lg">Start Battle</button>
        </Link>
      </div>
    );
  }
});


module.exports = Home;