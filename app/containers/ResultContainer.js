var React = require('react');

var Result = require('../components/Result');
var githubHelpers = require('../utils/githubHelpers');


var ResultContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function(){
    console.log(this.props);
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores){
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render: function(){
    return (
      <Result 
        isLoading={this.state.isLoading} 
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}
      />
    );
  }
});


module.exports = ResultContainer;