import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function MenuCard({
  img,
  name,
  desc,
  price,
}: {
  img: string;
  name: string;
  desc: string;
  price: number;
}) {
  return (
    <div className="border-[3.5px] border-[#013300] rounded p-6 flex flex-col justify-between gap-4 relative">
      <button className="absolute top-4 right-4 text-[#013300] text-2xl">
        <AiOutlineHeart />
      </button>
      <img src={img} alt={name} width={200} height={200} className="mx-auto" />
      <h1 className="text-center text-[#013300] font-semibold text-xl mt-2">
        {name}
      </h1>
      <p className="text-[#8e8e8e] text-sm">{desc}</p>
      <p className="text-[#013300] font-semibold text-center">{price}K</p>
    </div>
  );
}

export default MenuCard;
