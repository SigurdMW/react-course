var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');

function Loading(props){
  return (
    <p>Loading</p>
  );
}


function StartOver(props){
  return (
    <Link to="/playerOne">
      <button>{props.buttonText}</button>
    </Link>
  );
}

StartOver.propTypes = {
  buttonText: PropTypes.string.isRequired
}

function Results(props){
  if(props.isLoading === true){
    return (
      <Loading />
    );
  }
  
  if(props.scores[0] === props.scores[1]){
    return (
      <div>
        <h1>It's a tie!</h1>
        <p>Both players scored {props.scores[0]} GitHub-points.</p>
        <StartOver buttonText="Try again!" />
      </div>
    );
  }
  
  console.log(props);
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losersIndex = winningIndex === 0 ? 1 : 0;
  return (
    <div>
      <h1>Results</h1>
        <div className="col-md-6">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} header="Winner" />
        </div>
      <div className="col-md-6">
        <UserDetails score={props.scores[losersIndex]} info={props.playersInfo[losersIndex]} header="Looser" />
      </div>
      <StartOver buttonText="Start over" />
    </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}


module.exports = Results;