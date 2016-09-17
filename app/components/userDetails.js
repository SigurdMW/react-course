var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails(user){
  var imgStyle = {
    width: '100%',
    maxWidth: '320px'
  }
  return (
    <div>
    {user.header && <h2>{user.header}</h2>}
      <ul>
        {!!user.score && <li><h3>Score: {user.score}</h3></li>}
        <li><img src={user.info.avatar_url} style={imgStyle} /></li>
        <li>{user.info.login}</li>
        {user.info.name && <li>Name: {user.info.name}</li>}
      </ul>
    </div>
  );
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    header: PropTypes.string
  })
}

module.exports = UserDetails;