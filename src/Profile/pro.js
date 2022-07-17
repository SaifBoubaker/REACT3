import './pro.css'
import PropTypes from "prop-types";
function Profile(props) {
  return (
    <div>
      <p> <span>My name is</span>  {props.fullname} </p>
      <p> <span>Bio:</span> {props.bio} </p>
      <p> <span>Profession:</span> {props.profession} </p>
      <button onClick={props.fun}>ALERT</button>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  fun: PropTypes.func,
};

Profile.defaultProps = {
  fullname: "Unknown",
  profession: "Web Developper",
};
