"use client";

import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Switch from "react-switch";

const page = () => {
  const [bookingRelated, setBookingRelated] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start gap-5 p-10 w-full">
      <span className="flex flex-row items-center justify-start gap-5 w-10/12 mx-auto bg-white p-8 rounded-md">
        <span className="font-medium text-xl border-b border-solid border-[#351C82] text-[#351C82]">
          General
        </span>
        <span className="font-medium text-md"> Admin Settings </span>
      </span>

      <div className="flex flex-col items-start gap-3 justify-start w-10/12 bg-white p-8">
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

      <div className="flex flex-col items-start gap-3 justify-start w-10/12 bg-white p-8">
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
    </div>
  );
};

export default page;
