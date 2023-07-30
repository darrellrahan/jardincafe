import React from "react";
import { AiFillStar } from "react-icons/ai";
import { reviewAspects } from "../data/dry";

function Review() {
  return (
    <section id="review">
      <div className="px-32 py-16 flex">
        <div className="space-y-4">
          <h3 className="text-[#013300] text-2xl font-semibold">
            Overall ratings and reviews
          </h3>
          <div className="flex items-end gap-2">
            <h2 className="text-[#013300] text-7xl font-semibold">5.0</h2>
            <div className="flex items-center text-3xl text-[#013300] -translate-y-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          {reviewAspects.map((data) => (
            <div key={data.name} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={data.icon} alt={data.name} width={20} height={20} />
                <p className="text-[#013300] text-lg font-medium">
                  {data.name}
                </p>
              </div>
              <div className="flex items-center text-xl text-[#013300]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
