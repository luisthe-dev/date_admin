"use client";

import MyTable from "@/components/MyTable";
import {
  makeFirstCharUpper,
  makeMonetaryNumber,
  makeReadableDate,
} from "@/handlers/helperHandler";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { PiTrashLight } from "react-icons/pi";
import { GrSearch } from "react-icons/gr";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import Image from "next/image";
import Avatar from "@/assets/images/avatar.png";

const page = () => {
  const [userData, setUserData] = useState([
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      created_at: "2024-12-03T20:09:10",
      status: "pending_confirmation",
    },
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      created_at: "2024-12-03T20:09:10",
      status: "awaiting_meet_up",
    },
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      created_at: "2024-12-03T20:09:10",
      status: "awaiting_meet_up",
    },
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      created_at: "2024-12-03T20:09:10",
      status: "pending_confirmation",
    },
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      created_at: "2024-12-03T20:09:10",
      status: "pending_confirmation",
    },
  ]);

  return (
    <div className="flex flex-col items-start justify-start w-full p-8">
      <div className="flex flex-row items-center justify-between w-full">
        <select className="flex items-center flex-row-reverse text-xl font-semibold bg-transparent border border-gray-500/35 px-5 py-3 rounded-md">
          <option> All </option>
          <option> Long Option Check </option>
        </select>

        <div className="flex flex-row items-center justify-center rounded-md border border-gray-300/55 px-5 py-3 gap-2 w-3/12">
          <GrSearch className="text-xl" />
          <input
            type="search"
            placeholder="Search"
            className="flex-grow text-xl font-normal bg-transparent"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-10 rounded-lg p-4 w-full border border-gray-400/45">
        <div className="flex flex-row items-center justify-start gap-3 w-full">
          <span className="font-semibold text-xl"> Ongoing Bookings </span>
          <span className="p-2 px-5 rounded-full border-2 border-[#351C82] bg-[#DED6F6] font-semibold text-sm">
            54 Bookings
          </span>
        </div>
        <MyTable
          keepTableNumbering={false}
          data={userData.map((user) => [
            <span className="flex flex-row items-center justify-center w-100 gap-1">
              <Image src={Avatar} alt="Avatar" />
              <span> {user.display_name} </span>
            </span>,
            <span className="flex flex-row items-center justify-center w-100 gap-1">
              <Image src={Avatar} alt="Avatar" />
              <span> {user.display_name} </span>
            </span>,
            makeReadableDate(user.created_at),
            `${makeMonetaryNumber(134900, "NGN")}`,
            <span className="border-solid border border-[#D0D5DD] p-2 px-4 rounded-md font-light flex flex-row gap-1 items-center justify-start">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  user.status == "awaiting_meet_up"
                    ? "bg-[#13AE47]"
                    : user.status == "pending_confirmation"
                    ? "bg-[#F1940A]"
                    : "bg-gray-500"
                }`}
              ></span>
              {makeFirstCharUpper(user.status)}
            </span>,
            <span className="flex flex-row items-center justify-start gap-1 text-xl">
              <PiTrashLight />
              <FiEdit2 />
            </span>,
          ])}
          keys={[
            "User Display Name",
            "Escort Display Name",
            "Time Of Booking",
            "Booking Fee",
            "Status",
            "Action",
          ]}
          spacing={"w-1/4 lg:w-[16.5%]"}
        />
      </div>

      <div className="flex flex-row items-center justify-between w-full border-t border-gray-300/40 py-10">
        <button className="flex flex-row items-center justify-center font-semibold text-md px-4 py-2 rounded-md border border-gray-500">
          <HiOutlineArrowSmLeft /> Previous
        </button>
        <div className="flex flex-row items-center justify-center flex-grow gap-3 text-xl font-medium">
          <span className="bg-gray-400/55 rounded-full px-4 py-2 flex items-center justify-center">
            1
          </span>
          <span> 2 </span>
          <span> 3 </span>
          <span> ... </span>
          <span> 8 </span>
          <span> 9 </span>
          <span> 10 </span>
        </div>
        <button className="flex flex-row items-center justify-center font-semibold text-md px-4 py-2 rounded-md border border-gray-500">
          Next <HiOutlineArrowSmRight />
        </button>
      </div>
    </div>
  );
};

export default page;
