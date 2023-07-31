import React from "react";
import { AiFillStar, AiOutlineLike } from "react-icons/ai";

function Testimonial({
  img,
  name,
  review,
  homepage,
}: {
  img: string;
  name: string;
  review: string;
  homepage?: boolean;
}) {
  return (
    <div
      className={`${
        homepage ? "flex-none w-[22.5rem] h-[13.4375rem]" : ""
      } rounded-[1.25rem] border border-[#7c7c7c50] shadow-[0px_4px_4px_0px_#0000004D] p-4 flex flex-col justify-between gap-4 relative`}
    >
      <div className="flex items-center gap-4">
        <div className="basis-[15%]">
          <img src={img} alt={name} className="mx-auto" />
          <h1 className="text-[#013300] font-semibold text-center mt-2">
            {name}
          </h1>
        </div>
        <div className="space-y-2 basis-[85%]">
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
      <div className="absolute bottom-4 right-4 flex items-center gap-1">
        <button>
          <AiOutlineLike color="#013300" fontSize="1.75rem" />
        </button>
        {!homepage && <span className="font-medium text-sm">69</span>}
      </div>
    </div>
  );
}

export default Testimonial;
