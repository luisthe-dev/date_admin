import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import Avatar from "@/assets/images/avatar.png";

const Header = ({ menuHandler, menuState }) => {
  return (
    <div className="w-full flex items-center justify-between p-6 pr-12 border-b bg-white">
      {/* <RiMenu5Fill size={24} onClick={() => menuHandler(!menuState)} /> */}
      <div className="flex">
        <span className="font-semibold text-2xl"> Dashboard </span>
      </div>
      <div className="items-center justify-center flex flex-row gap-1">
        <Image src={Avatar} alt="Avatar" />
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold text-lg p-0 m-0"> Henry Smith </span>
          <span className="font-normal text-md p-0 m-0">
            System Administrator
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
