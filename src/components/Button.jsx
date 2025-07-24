const Button = ({
  onClick,
  text,
  className = "bg-[#0089E1] rounded-[50px] px-[20px] py-[5px] text-white font-bold w-[220px] h-[50px]",
  disabled = false,
  variant = "",
}) => {
  const baseStyle = "flex items-center justify-center font-Inter ";

  const variantStyles = {
    findMyPo: "w-[240px] h-[90px]",
    detaillook: "",
    check: "",
    other: "bg-[#d4d4d4] text-black",
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
