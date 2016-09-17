var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playersInfo: []
    };
  },
  componentDidMount: function(){
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players){
      //console.log('players', players);
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      });
    }.bind(this));
    console.log(this.state);
  },
  handleInitiateBattle: function(){
    this.context.router.push({
      pathname: '/result',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
    console.log(this.state);
  },
  render: function(){
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;