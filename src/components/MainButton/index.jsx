const Button = ({
  text,
  textColor,
  width,
  height,
  color,
  borderRadius,
  border,
  marginLeft,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        border: border,
        borderRadius: borderRadius,
        marginLeft: marginLeft,
        cursor: "pointer",
        color: textColor,
      }}
    >
      {text}
    </button>
  );
};
export default Button;
