import React from "react";
import { menuCategory } from "../data/dry";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function MenuCategory() {
  return (
    <section id="menu-category">
      <div className="px-32 py-16 grid grid-cols-2 gap-8">
        {menuCategory.map((data) => (
          <div
            key={data.category}
            className={`h-[20rem] ${data.bg} rounded-tr-[3.125rem] rounded-bl-[3.125rem] bg-cover relative text-white flex flex-col justify-between p-10`}
          >
            <div className="absolute inset-0 bg-black/50 rounded-tr-[3.125rem] rounded-bl-[3.125rem]" />
            <div className="z-10">
              <h1 className="font-medium text-[2.5rem]">{data.category}</h1>
              {data.desc && <p className="text-xl">{data.desc}</p>}
            </div>
            <button className="w-[10.5rem] bg-white text-[#013300] rounded-[0.625rem] px-4 py-3 text-lg flex justify-between items-center z-10 font-medium border-2 border-white hover:bg-transparent hover:text-white duration-200 ease-linear">
              <span>FIND MORE</span>
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuCategory;
