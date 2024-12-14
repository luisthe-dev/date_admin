import React from "react";

const Button = ({
  text,
  onClick,
  clip = false,
  disabled = false,
  full = false,
  half = false,
  isLoading = false,
  type = "button",
  extraClasses = "",
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-center my-4 w-9/12 self-center`}
    >
      <button
        className={`hover:bg-[#162617] bg-[#004202] text-white ${
          clip
            ? "w-auto"
            : full
            ? "w-10/12 self-center"
            : half
            ? "w-1/2 self-center"
            : "w-2/5"
        } rounded-md p-4 ${
          disabled ? "opacity-70" : isLoading ? "opacity-70" : "opacity-100"
        } ${extraClasses}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {text}{" "}
      </button>
    </div>
  );
};

export default Button;
