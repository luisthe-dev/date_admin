import React from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const BaseModal = ({ children, setActive, title }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-40"
        onClick={() => setActive(false)}
      ></div>
      <div className="fixed inset-0 w-full lg:w-6/12 bg-transparent mx-auto z-50 flex items-start justify-center p-3 lg:p-10 overflow-y-scroll">
        <div className="bg-white w-full py-12 px-3 rounded-md flex flex-col items-center justify-center">
          <div className="flex flex-row items-end justify-between w-full lg:w-11/12 px-3 pb-3 border-b border-solid border-black">
            <span className="font-light text-3xl">{title}</span>
            <MdOutlineCloseFullscreen size={20} className="cursor-pointer" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default BaseModal;
