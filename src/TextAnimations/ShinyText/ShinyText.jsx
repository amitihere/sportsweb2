import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  const handleClick = () => {
    const scrollTarget = document.body.scrollHeight * 0.6;
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
      onClick={!disabled ? handleClick : undefined}
    >
      {text}
    </div>
  );
};

export default ShinyText;
