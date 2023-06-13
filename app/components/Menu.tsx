import React from "react";
import { menu } from "../data/dry";

function Menu() {
  return (
    <section id="menu">
      <div className="px-32 py-16 rounded-t-[2.5rem] -mt-16 z-20 relative bg-white">
        <h1 className="text-[#013300] text-4xl font-semibold">Our Menu</h1>
        <div className="mt-16 grid grid-cols-4 gap-8">
          {menu.map((data) => (
            <div
              key={data.name}
              className="border-[3.5px] border-[#013300] rounded p-6 flex flex-col justify-between gap-4"
            >
              <img
                src={data.img}
                alt={data.name}
                width={200}
                height={200}
                className="mx-auto"
              />
              <h1 className="text-center text-[#013300] font-semibold text-xl mt-2">
                {data.name}
              </h1>
              <p className="text-[#8e8e8e] text-sm">{data.desc}</p>
              <p className="text-[#013300] font-semibold text-center">
                {data.price}K
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <button className="w-10 h-10 flex justify-center items-center font-semibold rounded-[0.625rem] border-2 border-[#013300] bg-[#013300] text-white">
            1
          </button>
          <button className="w-10 h-10 flex justify-center items-center font-semibold rounded-[0.625rem] border-2 border-[#013300] bg-transparent text-[#013300] hover:bg-[#013300] hover:text-white duration-300 ease-linear">
            2
          </button>
          <button className="w-10 h-10 flex justify-center items-center font-semibold rounded-[0.625rem] border-2 border-[#013300] bg-transparent text-[#013300] hover:bg-[#013300] hover:text-white duration-300 ease-linear">
            All
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
