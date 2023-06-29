import React from "react";
import { AiFillStar, AiOutlineLike } from "react-icons/ai";

function Testimonial({
  img,
  name,
  review,
}: {
  img: string;
  name: string;
  review: string;
}) {
  return (
    <div className="flex-none w-[22.5rem] rounded-[1.25rem] border border-[#7c7c7c50] shadow-[0px_4px_4px_0px_#0000004D] p-4 flex flex-col justify-between gap-4">
      <div className="flex items-center gap-4">
        <div>
          <img src={img} alt={name} className="mx-auto" />
          <h1 className="text-[#013300] font-semibold text-center mt-2">
            {name}
          </h1>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-3xl text-[#013300]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="text-[#7c7c7c] text-sm font-medium">6 days ago</p>
          <h3 className="text-[#013300] font-medium">{review}</h3>
        </div>
      </div>
      <div className="flex justify-end">
        <button>
          <AiOutlineLike color="#013300" fontSize="1.75rem" />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
