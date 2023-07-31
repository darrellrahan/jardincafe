import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPencil, BsUpload } from "react-icons/bs";
import { reviewAspects, testimonials } from "../data/dry";
import Testimonial from "./Testimonial";

function Review() {
  return (
    <section id="review">
      <div className="px-32 py-16 flex gap-32">
        <div className="basis-[30%] space-y-4">
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
        <div className="basis-[70%] space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-green-950 text-2xl font-semibold">Reviews</h3>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-[#DDD] rounded-lg text-[#013300] py-2 px-3 hover:scale-[0.9] duration-300 ease-linear">
                <BsUpload />
                Upload photo
              </button>
              <button className="flex items-center gap-2 bg-[#013300] rounded-lg text-white py-2 px-3 hover:scale-[0.9] duration-300 ease-linear">
                <BsPencil />
                Write review
              </button>
            </div>
          </div>
          {testimonials.map((data) => (
            <Testimonial
              key={data.name}
              img={data.img}
              name={data.name}
              review={data.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
