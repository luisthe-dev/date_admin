import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-4">
        <form
          role="form"
          className="flex flex-col items-start justify-center gap-1 w-8/12"
        >
          <span className="my-4 text-4xl font-bold"> Log In </span>
          <span className="font-medium text-md"> Email Address </span>
          <input
            placeholder="Enter Your Email"
            type="email"
            className="w-10/12 text-md font-semibold p-3 bg-transparent rounded-md border border-solid border-[#E5E5E5] mb-5"
          />
          <span className="font-medium text-md"> Password </span>
          <input
            placeholder="Enter Password"
            type="password"
            className="w-10/12 text-md font-semibold p-3 bg-transparent rounded-md border border-solid border-[#E5E5E5] mb-5"
          />

          <button type="submit" className="bg-[#351C82] text-white font-semibold text-md w-10/12 rounded-md mt-4 py-3">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
