import React from "react";
import AuthImage from "@/assets/svgs/auth.svg";
import Image from "next/image";

const layout = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-dvh max-h-dvh flex flex-row items-stretch justify-center">
        <div className="w-1/2 flex items-center justify-center bg-[#241359]">
          <Image
            src={AuthImage}
            alt="BlazyeUp Logo"
            className="w-full transition-all ease-in-out duration-200"
          />
        </div>
        <div className="w-1/2 p-5 flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
