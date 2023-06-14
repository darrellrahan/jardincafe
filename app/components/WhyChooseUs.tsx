import React from "react";
import { whyChooseUs } from "../data/dry";

function WhyChooseUs() {
  return (
    <section id="why-choose-us">
      <div className="bg-[#013300] px-32 py-16 grid grid-cols-2 items-center gap-12 text-white">
        <img
          src="/images/why-choose-us/main.png"
          alt="why choose us"
          className="w-full h-full object-cover"
        />
        <div>
          <h1 className="text-4xl font-medium">Why choose us?</h1>
          {whyChooseUs.map((data) => (
            <div key={data.desc} className="flex items-center gap-4 mt-8">
              <img src={data.icon} alt={data.title} width={50} height={50} />
              <div>
                <h1 className="font-medium text-lg">{data.title}</h1>
                <p className="text-[#8e8e8e] text-sm">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
