import Link from "next/link";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiSettings3Fill } from "react-icons/ri";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { PiNotepadLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { FiUser, FiUsers } from "react-icons/fi";
import Image from "next/image";
import Logo from "@/assets/svgs/logo.svg";

const Sidebar = ({ menuState }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <FiUser />,
      title: "Users",
      link: "/dashboard/users",
    },
    {
      icon: <FiUsers />,
      title: "Escorts",
      link: "/dashboard/escorts",
    },
    {
      icon: <PiNotepadLight />,
      title: "Booking Management",
      link: "/dashboard/bookings",
    },
    {
      icon: <HiMiniArrowsUpDown />,
      title: "Transaction History",
      link: "/dashboard/history",
    },
    {
      icon: <RiSettings3Fill />,
      title: "Settings",
      link: "/dashboard/settings",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-5 items-start justify-start bg-[#241359]">
      <div
        className={`w-full px-3 py-5 flex items-center transition-all ease-in-out duration-200 ${
          menuState ? "justify-start" : "justify-center"
        }`}
      >
        <Image
          src={Logo}
          alt="BlazyeUp Logo"
          className="w-8/12 transition-all ease-in-out duration-200"
        />
      </div>
      {menuItems.map((menuItem, menuKey) => (
        <Link
          href={menuItem.link}
          key={menuKey}
          className={`flex flex-row items-center text-[#FBFBFB] px-3 pl-6 ${
            menuState ? "justify-start" : "justify-center"
          } gap-2 my-1 py-6 w-full relative rounded-s-md ${
            pathname == menuItem.link ? "bg-[#493A75]" : "hover:bg-[#61509332]"
          } `}
        >
          <span className="text-2xl">{menuItem.icon}</span>
          <span
            className={`text-md text-nowrap transition-all ease-in-out duration-200 ${
              menuState
                ? "translate-x-0 relative opacity-100 visible"
                : "translate-x-full absolute opacity-0 invisible"
            }`}
          >
            {menuItem.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
