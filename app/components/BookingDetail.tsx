"use client";

import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineTableBar } from "react-icons/md";
import { useInputValueContext } from "../context/inputValue";

function BookingDetail() {
  const { inputValue } = useInputValueContext();

  return (
    <>
      <h1 className="text-[#013300] text-3xl font-medium">
        Your Booking Detail
      </h1>
      <div className="border-2 border-[#7c7c7c] rounded-[0.625rem] p-6 grid grid-cols-2 w-full mt-10 mb-12">
        <div className="relative">
          <img
            src="/images/global/logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="absolute inset-1/2 -translate-x-[60%] -translate-y-1/2"
          />
        </div>
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <IoPersonOutline color="#013300" fontSize="1.75rem" />
            <p className="text-lg text-[#013300] font-medium">
              {inputValue.people} Person
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <AiOutlineCalendar color="#013300" fontSize="1.75rem" />
            <p className="text-lg text-[#013300] font-medium">
              {inputValue.date}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <AiOutlineClockCircle color="#013300" fontSize="1.75rem" />
            <p className="text-lg text-[#013300] font-medium">
              {inputValue.time}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <MdOutlineTableBar color="#013300" fontSize="1.75rem" />
            <p className="text-lg text-[#013300] font-medium">
              {inputValue.area}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-lg font-semibold text-[#013300]">Rp</span>
            <p className="text-lg text-[#013300] font-medium">50.000</p>
          </div>
        </div>
      </div>
      <a
        href="/"
        className="bg-[#013300] rounded-[0.625rem] text-white p-3 font-medium w-[21.875rem] border-2 border-[#013300] hover:text-[#013300] hover:bg-transparent duration-300 ease-linear"
      >
        Confirm
      </a>
    </>
  );
}

export default BookingDetail;
