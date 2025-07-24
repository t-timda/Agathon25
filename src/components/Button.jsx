const Button = ({
  onClick,
  text,
  className = "bg-[#0089E1] rounded-[50px] px-[20px] py-[5px] text-white font-bold w-[220px] h-[50px] hover:cursor-pointer hover:shadow-md ",
  disabled = false,
  variant = "",
}) => {
  const baseStyle = "flex items-center justify-center font-Inter ";

  const variantStyles = {
    findMyPo: "w-[200px] h-[60px] text-[20px] font-bold rounded-full",
    other: "bg-[#d4d4d4] text-black",
    room: "hover:",
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
