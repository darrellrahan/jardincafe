import React from "react";

function Hero() {
  return (
    <section id="hero">
      <div className="h-screen bg-[#013300] relative flex items-center px-32">
        <img
          src="/images/hero/coffee-seeds.png"
          alt="Coffee Seeds"
          width={400}
          height={400}
          className="absolute top-0 left-0"
        />
        <div className="flex w-full z-20">
          <div className="flex flex-col gap-8 items-baseline basis-[80%]">
            <div>
              <h1 className="text-6xl leading-[1.15] text-white">
                Thousands Of Flavours
                <br />
                In One Place
              </h1>
              <h3 className="text-xl text-white mt-4">
                Order your perfect food or drinks here
              </h3>
            </div>
            <a
              href="/booking"
              className="px-5 py-2 rounded-[2.5rem] bg-white text-[#013300] font-semibold"
            >
              Book Table
            </a>
          </div>
          <div className="basis-[20%]"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
