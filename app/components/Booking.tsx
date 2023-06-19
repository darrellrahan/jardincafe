import React from "react";

function Booking() {
  return (
    <section id="booking">
      <div className="h-screen bg-[url('/images/booking/bg.png')] bg-no-repeat bg-cover relative flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="shadow-[4px_4px_4px_rgba(255,255,255,0.4)] w-[46.875rem] bg-white rounded-[0.625rem] py-10 mx-auto z-10 flex flex-col items-center gap-4 text-center">
          <h1 className="text-[#013300] text-4xl font-medium">Book a Table</h1>
          <p className="text-[#7c7c7c] text-lg">
            Fill in the form below to request a reservation
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-4">
              <div className="w-[3.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center justify-center">
                <img
                  src="/images/booking/profile.png"
                  alt="profile"
                  width={20}
                  height={20}
                />
              </div>
              <select className="w-[18.75rem] h-[3.75rem] border-2 border-[#013300] rounded-[0.625rem] flex items-center px-4 font-medium text-lg text-[#7c7c7c]">
                <option className="hover:bg-[#013300]" value="1">
                  1 Person
                </option>
                <option className="hover:bg-[#013300]" value="2">
                  2 Person
                </option>
                <option className="hover:bg-[#013300]" value="3">
                  3 Person
                </option>
              </select>
            </div>
            <button className="text-lg font-medium h-[3.75rem] bg-[#013300] rounded-[0.625rem] text-white">
              See Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
