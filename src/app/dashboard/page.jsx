"use client";

import { makeFormattedNumber } from "@/handlers/helperHandler";
import Link from "next/link";
import React, { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Chart from "chart.js/auto";

const page = () => {
  const stats = [
    {
      title: "Users",
      count: 56,
      link: "/dashboard/users",
    },
    {
      title: "Escorts",
      count: 56,
      link: "/dashboard/escorts",
    },
    {
      title: "Total Bookings",
      count: 56,
      link: "/dashboard/bookings",
    },
  ];

  useEffect(() => {
    const areaChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: "#F4EBFF",
          borderColor: "transparent",
          borderWidth: 1,
          fill: true,
        },
      ],
    };

    const areaConfig = {
      type: "line",
      data: areaChartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const areaCtx = document
      .getElementById("commission_chart")
      .getContext("2d");
    new Chart(areaCtx, areaConfig);

    const pieChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };

    const pieConfig = {
      type: "doughnut",
      data: pieChartData,
      options: {
        responsive: true,
        cutout: 0,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
    };

    const pieCtx = document.getElementById("activity_chart").getContext("2d");
    new Chart(pieCtx, pieConfig);

    const doughnuthartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };

    const doughnutConfig = {
      type: "doughnut",
      data: doughnuthartData,
      options: {
        responsive: true,
        aspectRatio: 2,
        cutout: "50%",
        plugins: {
          legend: {
            display: true,
            position: "right",
          },
        },
      },
    };

    const doughnutCtx = document
      .getElementById("location_chart")
      .getContext("2d");
    new Chart(doughnutCtx, doughnutConfig);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col lg:flex-row items-center justify-around w-full my-4">
        {stats.map((stat, statKey) => (
          <div
            className="flex flex-col w-1/3 items-center justify-center p-8"
            key={statKey}
          >
            <div className="flex flex-col w-full shadow-md rounded-md p-8 bg-white">
              <span className="font-bold text-xl"> {stat.title} </span>
              <span className="font-semibold text-5xl my-3 pl-1 text-[#351C82]">
                {makeFormattedNumber(stat.count)}
              </span>

              <Link
                href={stat.link}
                className="font-medium text-md self-end flex items-center justify-center gap-1"
              >
                Go To {stat.title} <HiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-stretch justify-around w-full">
        <div className="flex flex-col w-8/12 p-8">
          <div className="flex flex-col w-full shadow-md rounded-md p-8 bg-white">
            <span className="font-semibold text-2xl"> Booking Commission </span>
            <div className="w-full px-5 my-3">
              <canvas id="commission_chart" className="w-full"></canvas>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-4/12 p-8">
          <div className="flex flex-col w-full shadow-md rounded-md p-8 bg-white">
            <span className="font-semibold text-2xl"> Booking Activity </span>
            <div className="w-full px-5 my-3">
              <canvas id="activity_chart" className="w-full"></canvas>
            </div>
            <Link
              href={"/dashboard/bookings"}
              className="font-medium text-md self-end flex items-center justify-center gap-1 mt-5"
            >
              Booking Management <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-stretch justify-around w-full">
        <div className="flex flex-col w-8/12 p-8">
          <div className="flex flex-col w-full shadow-md rounded-md p-8 bg-white">
            <span className="font-semibold text-2xl">
              Registered Users & Escorts By Location
            </span>
            <div className="w-full px-5 my-3">
              <canvas id="location_chart" className="w-full"></canvas>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-4/12 p-8">
          <div className="flex flex-col w-full shadow-md rounded-md p-8 bg-white">
            <span className="font-semibold text-2xl">
              Top Locations this week
            </span>

            <span className="font-semibold text-5xl my-3 pl-1 text-[#351C82]">
              Lekki
            </span>

            <Link
              href={"/dashboard/bookings"}
              className="font-medium text-md self-end flex items-center justify-center gap-1 mt-5"
            >
              Booking Management <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
