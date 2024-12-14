import React, { useState } from "react";

const Input = ({
  text,
  placeholder = "",
  type = "text",
  secure = false,
  clip = false,
  value = "",
  onInput = () => {},
  extraClasses = "",
  minLength = 1,
  maxLength = 9999,
}) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className={`flex flex-col ${
        clip ? "p-0" : "p-3"
      } items-start justify-center w-10/12 my-2`}
    >
      <span> {text} </span>
      <input
        type={secure ? (showText ? "text" : "password") : type}
        placeholder={placeholder || text}
        value={value}
        onChange={onInput}
        className={`border-b-2 rounded-none w-full mt-1 p-3 ${extraClasses}`}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
};

export default Input;
