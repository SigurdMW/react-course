var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function puke (object){
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

function ConfirmBattle(props){
  return props.isLoading === true
  ? <p> Loading! </p>
  : <div>Confirm battle! {puke(props)} </div>
}

module.exports = ConfirmBattle;