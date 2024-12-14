import React from "react";
import BaseModal from "./BaseModal";
import { FaPlus } from "react-icons/fa6";

const CreateUserModal = () => {
  return (
    <BaseModal setActive={() => console.log("me")} title={"Create New User"}>
      <div className="flex flex-row flex-wrap items-center justify-between w-11/12 gap-y-2">
        <span className="w-full text-2xl font-semibold mt-7 mb-4 px-3">
          Personal Information
        </span>
        <div className="flex flex-col items-start justify-center gap-1 w-full lg:w-6/12 p-4">
          <span className="text-md font-normal"> First Name </span>
          <input
            placeholder="First Name"
            className="font-light text-md w-11/12 p-2 border-b border-solid border-black"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 w-full lg:w-6/12 p-4">
          <span className="text-md font-normal"> Last Name </span>
          <input
            placeholder="Last Name"
            className="font-light text-md w-11/12 p-2 border-b border-solid border-black"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 w-full lg:w-6/12 p-4">
          <span className="text-md font-normal"> Email Address </span>
          <input
            placeholder="Email Address"
            className="font-light text-md w-11/12 p-2 border-b border-solid border-black"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 w-full lg:w-6/12 p-4">
          <span className="text-md font-normal"> Phone Number </span>
          <input
            placeholder="Phone Number"
            className="font-light text-md w-11/12 p-2 border-b border-solid border-black"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-between w-11/12 gap-y-2">
        <span className="w-full text-2xl font-semibold mt-7 mb-4 px-3">
          Outlet Information
        </span>

        <div className="flex flex-row flex-wrap items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center gap-1 w-full lg:w-6/12 p-4">
            <span className="text-md font-normal"> Outlet Name </span>
            <input
              placeholder="Outlet Name"
              className="font-light text-md w-11/12 p-2 border-b border-solid border-black"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-1 w-full lg:w-6/12 p-4">
            <span className="text-md font-normal"> Outlet Type </span>
            <select className="font-light text-md w-11/12 p-2 border-b border-solid border-black">
              <option selected disabled>
                Select An Outlet Type
              </option>
              <option value={"product"}> Product </option>
              <option value={"service"}> Service </option>
            </select>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-full">
          <button
            type="button"
            className={`bg-teal-800 text-white font-bold text-md px-6 py-3 my-5 rounded-sm flex flex-row items-center justify-center gap-2`}
          >
            <FaPlus />
            Add Outlet
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default CreateUserModal;
