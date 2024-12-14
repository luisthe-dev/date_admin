"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/AdminDashboard/Header";
import Sidebar from "../../components/AdminDashboard/Sidebar";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const pathName = usePathname();

  const trackPages = async () => {
    if (currentPage != pathName) {
      setCurrentPage(pathName);
      if (window.innerWidth < 1024) setOpenMenu(false);
    }
  };

  useEffect(() => {
    trackPages();
  }, [pathName]);

  useEffect(() => {
    if (window.innerWidth > 1024) setOpenMenu(true);
  }, []);

  return (
    <div className="max-h-screen h-screen overflow-hidden">
      <div className="flex flex-row h-full">
        <div
          className={`flex absolute z-10 lg:relative h-full border-e transition-all ease-in-out duration-700 items-center py-6 pl-3 justify-center  bg-[#241359] ${
            openMenu ? "w-64" : "w-30 -left-64 lg:left-0 pl-0"
          }`}
        >
          <Sidebar menuState={openMenu} />
        </div>
        <div className="flex flex-grow flex-col w-1/2 bg-[#F9FAFB]">
          <Header menuHandler={setOpenMenu} menuState={openMenu} />
          <div className="flex flex-grow-0 overflow-y-scroll w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
