var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');

function puke (object){
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

function ConfirmBattle(props){
  return props.isLoading === true
  ? <p> Loading! </p>
  : <div className="container">
      <h1>Confirm players</h1>
      <div className="col-md-6">
        <UserDetails info={props.playersInfo[0]} />
      </div>
      <div className="col-md-6">
          <UserDetails info={props.playersInfo[1]} />  
      </div>
      <button onClick={props.onInitiateBattle}>Initiate battle</button>
      <Link to="/playerOne">
        <button>reselect players</button>
      </Link>
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
};  

module.exports = ConfirmBattle;