import PropTypes from "prop-types";
import playButtonOverlay from "/play-button-overlay.svg";
import "./VideoCard.scss";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const VideoCard = ({ onClick, thumbSrc, alt, duration, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    // xPct -.5 at left edge, 0 at center, .5 at right edge...
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      className={`video-tile ${className}`}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter") onClick();
      }}
      aria-label={`Watch video ${alt} - (${duration})`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img className="thumb" src={thumbSrc} />
      <img className="play-overlay" src={playButtonOverlay} />
      <div className="duration-shadow">{`(${duration})`}</div>
      <div className="duration">{`(${duration})`}</div>
    </motion.div>
  );
};

VideoCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  thumbSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default VideoCard;
