var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails(user){
  return (
    <div>
      <ul>
        {!!user.score && <li><h3>Score: {user.score}</h3></li>}
        <li><img src={user.info.avatar_url} /></li>
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
    blog: PropTypes.string
  })
}

module.exports = UserDetails;