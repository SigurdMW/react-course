var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt (props) {
  return (
    <div style={transparentBg}>
        <h1>{props.header}</h1>
        <form onSubmit={props.onSubmitUser}>
          <input className="form-control" onChange={props.onUpdateUser} value={props.username} type="text" placeholder="Github Username" />
          <button className="btn btn-success">Check</button>
        </form>
      </div>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;