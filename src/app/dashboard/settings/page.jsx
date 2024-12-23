"use client";

import MyTable from "@/components/MyTable";
import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Switch from "react-switch";
import Image from "next/image";
import Avatar from "@/assets/images/avatar.png";
import { FiEdit2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { makeFirstCharUpper, makeReadableDate } from "@/handlers/helperHandler";

const page = () => {
  const [bookingRelated, setBookingRelated] = useState(false);

  const [settingTab, setSettingTab] = useState('general');

  const [userData, setUserData] = useState([
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      role: "admin",
      created_at: "2024-12-03T20:09:10",
      status: "pending",
    },
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      role: "admin",
      created_at: "2024-12-03T20:09:10",
      status: "approved",
    },
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      role: "super_admin",
      created_at: "2024-12-03T20:09:10",
      status: "approved",
    },
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      role: "admin",
      created_at: "2024-12-03T20:09:10",
      status: "pending",
    },
    {
      full_name: "Jon Doe",
      profile_image: "",
      display_name: "@Pleasurelover24",
      email: "jondoe@gmail.com",
      phone: "08144567890",
      role: "super_admin",
      created_at: "2024-12-03T20:09:10",
      status: "blocked",
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-start gap-5 p-10 w-full">
      <span className="flex flex-row items-center justify-start gap-5 w-full mx-auto bg-white p-8 rounded-md">
        <span
          className={`font-medium text-xl cursor-pointer ${
            settingTab == "general" &&
            "border-b-4 pb-1 border-solid border-[#351C82] text-[#351C82]"
          }`}
          onClick={() => setSettingTab("general")}
        >
          General
        </span>
        <span
          className={`font-medium text-xl cursor-pointer ${
            settingTab == "admin_settings" &&
            "border-b-4 pb-1 border-solid border-[#351C82] text-[#351C82]"
          }`}
          onClick={() => setSettingTab("admin_settings")}
        >
          Admin Settings
        </span>
      </span>

      {settingTab == "general" && (
        <>
          <div className="flex flex-col items-start gap-3 justify-start w-full bg-white p-8">
            <span className="flex flex-row items-center justify-start gap-2 p-4 border-b border-[#EDE8FC] border-solid w-full">
              <span> User Support Email Setup </span>
              <BsInfoCircleFill color="#351C82" />
            </span>

            <div className="flex flex-col items-start justify-center w-full p-2 gap-2">
              <span className="font-semibold p-2 text-sm">
                Contact Email Address
              </span>
              <input
                placeholder="Johndoe@gmail.com"
                className="p-4 rounded-md w-10/12 font-light text-md border border-solid border-[#EDE8FC]"
              />
            </div>

            <div className="flex flex-row items-center justify-end w-full p-2">
              <button className="bg-[#351C82] rounded-md p-4 px-8 font-semibold text-md text-white">
                Update Email
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 justify-start w-full bg-white p-8">
            <span className="flex flex-row items-center justify-start gap-2 p-4 border-b border-[#EDE8FC] border-solid w-full">
              <span> Push Notification Setup </span>
              <BsInfoCircleFill color="#351C82" />
            </span>
            <div className="flex flex-row items-center justify-between w-full my-1">
              <span className="text-xl font-semibold">
                Booking-related Notifications:
              </span>
              <div className="flex items-end">
                <Switch
                  onChange={() => setBookingRelated(!bookingRelated)}
                  checked={bookingRelated}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full my-1">
              <span className="text-xl font-semibold">
                Communication & Support:
              </span>
              <Switch
                onChange={() => setBookingRelated(!bookingRelated)}
                checked={bookingRelated}
              />
            </div>
            <div className="flex flex-row items-center justify-end w-full p-2">
              <button className="bg-[#351C82] rounded-md p-4 px-8 font-semibold text-md text-white">
                Update Preferences
              </button>
            </div>
          </div>
        </>
      )}

      {settingTab == "admin_settings" && (
        <>
          <div className="flex flex-col items-start gap-3 justify-start w-full bg-white p-8">
            <MyTable
              keepTableNumbering={false}
              data={userData.map((user) => [
                <span className="flex flex-row items-center justify-center w-100 gap-1">
                  <Image src={Avatar} alt="Avatar" />
                  <span> {user.full_name} </span>
                </span>,
                user.email,
                user.phone,
               makeFirstCharUpper(user.role),
                "9 minutes ago",
                <span className="flex flex-row items-center justify-start gap-1 text-xl">
                  <FiTrash2 />
                  <FiEdit2 />
                </span>,
              ])}
              keys={[
                "Full Name",
                "Email",
                "Phone Number",
                "Role",
                "Last Active",
                "Action",
              ]}
              spacing={"w-1/4 lg:w-1/6"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
