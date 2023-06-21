"use client";

import React, { useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useInputValueContext } from "../context/inputValue";
import { useTogglerContext } from "../context/toggler";
import BookingDetail from "./BookingDetail";
import BookingForm from "./BookingForm";

function Booking() {
  const { inputValue } = useInputValueContext();
  const { isSnackbar, bookingDetail, setIsSnackbar } = useTogglerContext();

  useEffect(() => {
    inputValue.area !== "" &&
      inputValue.date !== "" &&
      inputValue.people !== "" &&
      inputValue.time !== "" &&
      setIsSnackbar(false);
  }, [inputValue.area, inputValue.date, inputValue.people, inputValue.time]);

  return (
    <section id="booking">
      <div className="h-screen bg-[url('/images/booking/bg.png')] bg-no-repeat bg-cover relative flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="w-[46.875rem] mx-auto z-10">
          {isSnackbar && (
            <div className="w-full bg-[#CD1818]/70 rounded-[0.625rem] p-4 text-white flex items-center gap-3 mb-4">
              <AiOutlineInfoCircle fontSize="1.5rem" />
              <span>Please fill all the fields.</span>
            </div>
          )}
          <div className="shadow-[4px_4px_4px_rgba(255,255,255,0.4)] w-full bg-white rounded-[0.625rem] py-10 px-16 flex flex-col items-center text-center">
            {!bookingDetail ? <BookingForm /> : <BookingDetail />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
