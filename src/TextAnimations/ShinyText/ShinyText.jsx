import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  const handleClick = () => {
    const scrollTarget = document.body.scrollHeight * 6; // 600%
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration, cursor: 'pointer' }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default ShinyText;
