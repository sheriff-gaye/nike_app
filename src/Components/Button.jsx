const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth
}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg 
     ${backgroundColor ? `${textColor} ${borderColor} ${backgroundColor}`: "bg-coral-red text-white border-coral-red" }

    leading-none bg-coral-red text-white rounded-full  border-coral-red  ${fullWidth && 'w-full'}`}>
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5 " />
      )}
    </button>
  );
};

export default Button;
