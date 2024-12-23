"use client";

import React, { useState } from "react";
import Image from "next/image";
import Avatar from "@/assets/images/avatar.png";
import { makeMonetaryNumber, makeReadableDate } from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";

const page = () => {

    const [transactions, setTransactions] = useState([
      {
        created_at: "2024-05-12T12:03:20",
        description: "Booking fee payment to @yourpleasuregiver",
        amount: "50000",
      },
      {
        created_at: "2024-05-12T12:03:20",
        description: "wallet funded through bank transfer",
        amount: "50000",
      },
      {
        created_at: "2024-05-12T12:03:20",
        description: "Booking fee payment to @yourpleasuregiver",
        amount: "50000",
      },
      {
        created_at: "2024-05-12T12:03:20",
        description: "Booking fee payment to @yourpleasuregiver",
        amount: "50000",
      },
      {
        created_at: "2024-05-12T12:03:20",
        description: "wallet funded through bank transfer",
        amount: "50000",
      },
      {
        created_at: "2024-05-12T12:03:20",
        description: "wallet funded through bank transfer",
        amount: "50000",
      },
    ]);

  return (
    <div className="flex flex-col gap-5 items-center justify-start w-full p-10">
      <div className="flex flex-col items-start justify-start w-full p-3 rounded-md gap-2 bg-white">
        <span className="font-semibold text-2xl border-b w-full my-4 pb-3 pl-4 border-solid border-[#EDE8FC]">
          Basic Information
        </span>
        <div className="flex flex-row items-center justify-stretch w-full p-5">
          <div className="flex flex-col items-center justify-center w-8/12">
            <div className="flex flex-row items-center justify-start w-full gap-1 my-2">
              <div className="flex flex-col items-start justify-center w-1/2">
                <span className="font-normal text-lg"> Name </span>
                <input
                  placeholder="John Doe"
                  className="font-semibold p-3 text-md w-10/12 border border-solid border-[#E5E5E5] rounded-md"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-1/2">
                <span className="font-normal text-lg"> Display Name </span>
                <input
                  placeholder="@yourpleasurelover24"
                  className="font-semibold p-3 text-md w-10/12 border border-solid border-[#E5E5E5] rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start w-full gap-1 my-2">
              <div className="flex flex-col items-start justify-center w-1/2">
                <span className="font-normal text-lg"> Email Address </span>
                <input
                  placeholder="jondoe@gmail.com"
                  className="font-semibold p-3 text-md w-10/12 border border-solid border-[#E5E5E5] rounded-md"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-1/2">
                <span className="font-normal text-lg"> Phone Number </span>
                <input
                  placeholder="09067889540"
                  className="font-semibold p-3 text-md w-10/12 border border-solid border-[#E5E5E5] rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start w-full gap-1 my-2">
              <div className="flex flex-col items-start justify-center w-1/2">
                <span className="font-normal text-lg"> Email Address </span>
                <input
                  placeholder="jondoe@gmail.com"
                  className="font-semibold p-3 text-md w-10/12 border border-solid border-[#E5E5E5] rounded-md"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-1/2">
                <span className="font-normal text-lg"> Phone Number </span>
                <input
                  placeholder="09067889540"
                  className="font-semibold p-3 text-md w-10/12 border border-solid border-[#E5E5E5] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch justify-self-stretch justify-center w-4/12">
            <Image src={Avatar} alt="Avatar" className="w-1/5 mb-5" />
            <span className="font-semibold text-5xl"> Jon Doe </span>
            <span className="font-medium text-md">@yourpleasurelover26</span>
            <span className="border-solid border border-[#D0D5DD] p-2 mt-3 rounded-md font-light text-md flex flex-row gap-1 items-center justify-start">
              <span className={`h-2.5 w-2.5 rounded-full bg-[#13AE47]`}></span>
              Verified
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start w-full p-3 rounded-md gap-1 bg-white">
        <span className="font-semibold text-2xl border-b w-full mt-4 pb-3 pl-4 border-solid border-[#EDE8FC]">
          Transaction History
        </span>
        <MyTable
          keepTableNumbering={false}
          data={transactions.map((transaction) => [
            makeReadableDate(transaction.created_at),
            makeReadableDate(transaction.created_at),
            transaction.description,
            makeMonetaryNumber(transaction.amount, 'NGN')
          ])}
          keys={[
            "Date",
            "Time",
            "Details",
            "Amount"
          ]}
          spacing={"w-1/4"}
        />
      </div>
    </div>
  );
};

export default page;
