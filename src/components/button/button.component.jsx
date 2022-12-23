import "./button.style.scss";
const Button = ({ children, onClick, className, style }) => {
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      {children}
    </button>
  );
};

// Default props...

Button.defaultProps = {
  onClick: () => {},
  className: "btn",
  style: {},
};

export default Button;
