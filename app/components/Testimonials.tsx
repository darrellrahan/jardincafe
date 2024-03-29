import React from "react";
import { testimonials } from "../data/dry";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="px-32 py-16">
        <h1 className="text-[#013300] text-4xl font-semibold mb-16">
          What Our Customers Say
        </h1>
        <div className="flex gap-5 overflow-x-auto scroll-smooth p-4 -translate-x-4 -translate-y-4">
          {testimonials.map((data) => (
            <Testimonial
              key={data.name}
              img={data.img}
              name={data.name}
              review={data.review}
              homepage
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
