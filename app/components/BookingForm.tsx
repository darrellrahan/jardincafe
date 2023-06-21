"use client";

import React, { useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineTableBar } from "react-icons/md";
import { useInputValueContext } from "../context/inputValue";
import { useTogglerContext } from "../context/toggler";

function BookingForm() {
  const { inputValue, setInputValue } = useInputValueContext();
  const { setIsSnackbar, setBookingDetail } = useTogglerContext();

  const [timeInputType, setTimeInputType] = useState("text");

  return (
    <>
      <h1 className="text-[#013300] text-4xl font-medium">Book a Table</h1>
      <p className="text-[#7c7c7c] text-lg mt-4">
        Fill in the form below to request a reservation
      </p>
      <div className="grid grid-cols-1 gap-6 mt-6">
        <div className="flex gap-4">
          <div className="w-[3.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center justify-center">
            <IoPersonOutline color="#013300" fontSize="1.75rem" />
          </div>
          <div className="relative after:absolute after:right-5 after:font-light after:top-2.5 after:content-['>'] after:rotate-90 after:text-4xl after:text-[#013300]">
            <select
              onChange={(e) =>
                setInputValue({ ...inputValue, people: e.target.value })
              }
              className={`cursor-pointer appearance-none w-[18.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center px-4 font-medium text-lg ${
                inputValue.people === "" ? "text-[#a9a9a9]" : "text-[#013300]"
              } bg-transparent z-10 relative`}
            >
              <option value="" disabled selected>
                How many people?
              </option>
              <option className="text-[#013300]" value="1">
                1 Person
              </option>
              <option className="text-[#013300]" value="2">
                2 Person
              </option>
              <option className="text-[#013300]" value="3">
                3 Person
              </option>
              <option className="text-[#013300]" value="4">
                4 Person
              </option>
              <option className="text-[#013300]" value="More Than 4">
                More Than 4 Person
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[3.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center justify-center">
            <AiOutlineCalendar color="#013300" fontSize="1.75rem" />
          </div>
          <div className="relative">
            {timeInputType === "text" && (
              <span className="absolute right-4 top-4 text-2xl text-[#013300]">
                <AiOutlineCalendar />
              </span>
            )}
            <input
              type={timeInputType}
              onFocus={() => setTimeInputType("date")}
              onBlur={() => setTimeInputType("text")}
              onChange={(e) =>
                setInputValue({ ...inputValue, date: e.target.value })
              }
              placeholder="Pick a date"
              className="w-[18.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center px-4 font-medium text-lg text-[#013300] z-10 relative bg-transparent placeholder:text-[#a9a9a9]"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[3.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center justify-center">
            <AiOutlineClockCircle color="#013300" fontSize="1.75rem" />
          </div>
          <div className="relative after:absolute after:right-5 after:font-light after:top-2.5 after:content-['>'] after:rotate-90 after:text-4xl after:text-[#013300]">
            <select
              onChange={(e) =>
                setInputValue({ ...inputValue, time: e.target.value })
              }
              className={`cursor-pointer appearance-none w-[18.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center px-4 font-medium text-lg ${
                inputValue.time === "" ? "text-[#a9a9a9]" : "text-[#013300]"
              } bg-transparent z-10 relative`}
            >
              <option value="" disabled selected>
                Pick a time
              </option>
              <option className="text-[#013300]" value="07:30">
                07:30
              </option>
              <option className="text-[#013300]" value="08:00">
                08:00
              </option>
              <option className="text-[#013300]" value="08:30">
                08:30
              </option>
              <option className="text-[#013300]" value="09:00">
                09:00
              </option>
              <option className="text-[#013300]" value="09:30">
                09:30
              </option>
              <option className="text-[#013300]" value="10:00">
                10:00
              </option>
              <option className="text-[#013300]" value="10:30">
                10:30
              </option>
              <option className="text-[#013300]" value="11:00">
                11:00
              </option>
              <option className="text-[#013300]" value="11:30">
                11:30
              </option>
              <option className="text-[#013300]" value="12:00">
                12:00
              </option>
              <option className="text-[#013300]" value="12:30">
                12:30
              </option>
              <option className="text-[#013300]" value="13:00">
                13:00
              </option>
              <option className="text-[#013300]" value="13:30">
                13:30
              </option>
              <option className="text-[#013300]" value="14:00">
                14:00
              </option>
              <option className="text-[#013300]" value="14:30">
                14:30
              </option>
              <option className="text-[#013300]" value="15:00">
                15:00
              </option>
              <option className="text-[#013300]" value="15:30">
                15:30
              </option>
              <option className="text-[#013300]" value="16:00">
                16:00
              </option>
              <option className="text-[#013300]" value="16:30">
                16:30
              </option>
              <option className="text-[#013300]" value="17:00">
                17:00
              </option>
              <option className="text-[#013300]" value="17:30">
                17:30
              </option>
              <option className="text-[#013300]" value="18:00">
                18:00
              </option>
              <option className="text-[#013300]" value="18:30">
                18:30
              </option>
              <option className="text-[#013300]" value="19:00">
                19:00
              </option>
              <option className="text-[#013300]" value="19:30">
                19:30
              </option>
              <option className="text-[#013300]" value="20:00">
                20:00
              </option>
              <option className="text-[#013300]" value="20:30">
                20:30
              </option>
              <option className="text-[#013300]" value="21:00">
                21:00
              </option>
              <option className="text-[#013300]" value="21:30">
                21:30
              </option>
              <option className="text-[#013300]" value="22:00">
                22:00
              </option>
              <option className="text-[#013300]" value="22:30">
                22:30
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[3.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center justify-center">
            <MdOutlineTableBar color="#013300" fontSize="1.75rem" />
          </div>
          <div className="relative after:absolute after:right-5 after:font-light after:top-2.5 after:content-['>'] after:rotate-90 after:text-4xl after:text-[#013300]">
            <select
              onChange={(e) =>
                setInputValue({ ...inputValue, area: e.target.value })
              }
              className={`cursor-pointer appearance-none w-[18.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center px-4 font-medium text-lg ${
                inputValue.area === "" ? "text-[#a9a9a9]" : "text-[#013300]"
              } bg-transparent z-10 relative`}
            >
              <option value="" disabled selected>
                Pick an area
              </option>
              <option className="text-[#013300]" value="Indoor">
                Indoor
              </option>
              <option className="text-[#013300]" value="Outdoor">
                Outdoor
              </option>
            </select>
          </div>
        </div>
        <button
          onClick={() => {
            if (
              inputValue.area === "" ||
              inputValue.date === "" ||
              inputValue.people === "" ||
              inputValue.time === ""
            ) {
              setIsSnackbar(true);
            } else {
              setIsSnackbar(false);
              setBookingDetail(true);
            }
          }}
          className="text-lg font-medium h-[3.75rem] border-2 border-[#013300] bg-[#013300] rounded-[0.625rem] text-white hover:text-[#013300] hover:bg-transparent duration-300 ease-linear"
        >
          See Detail
        </button>
      </div>
    </>
  );
}

export default BookingForm;
