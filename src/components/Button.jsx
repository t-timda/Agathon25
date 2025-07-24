const Button = ({
  onClick,
  text,
  className = "",
  disabled = false,
  variant = "main",
}) => {
  const baseStyle = "flex items-center justify-center font-Inter ";

  const variantStyles = {
    main: "bg-[] w-[px] h-[px]",
    signIn: `${disabled ? "bg-[]" : "bg-[]"} w-full h-[px]`,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
