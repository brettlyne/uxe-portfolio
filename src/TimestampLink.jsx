import PropTypes from "prop-types";
import "./TimestampLink.scss";

const TimestampLink = ({ time, onClick }) => {
  const [minutes, seconds] = time.split(":");
  const timeInSeconds = parseInt(minutes) * 60 + parseInt(seconds);

  const handleClick = () => {
    onClick();
    setTimeout(() => {
      document.getElementById("react-player").children[0].currentTime =
        timeInSeconds;
    }, 100);
  };

  return (
    <button className="timestamp-link" onClick={handleClick}>
      {`[${time}]`}
    </button>
  );
};

TimestampLink.propTypes = {
  time: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TimestampLink;
