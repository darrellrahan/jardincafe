"use client";

import React, { useState } from "react";
import { heroCarousel } from "../data/dry";

function Hero() {
  const [carouselIndex, setCarouselIndex] = useState(0);

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
        <div className="absolute right-32 w-[21rem] h-[31rem] translate-y-8">
          <img
            src={heroCarousel[carouselIndex].img}
            alt={heroCarousel[carouselIndex].menu}
            className="rounded-t-[2.5rem] object-cover object-[50%] w-full h-96"
          />
          <div className="absolute inset-x-0 top-[14rem] bottom-0 rounded-b-[2.5rem] bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255)_50%)] flex items-center">
            <img
              src="/images/global/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="absolute bottom-7 right-3"
            />
            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
              <button
                onClick={() => setCarouselIndex(0)}
                className={`w-2 h-2 rounded-full ${
                  carouselIndex === 0 ? "bg-[#013300]" : "bg-[#d9d9d9]"
                }`}
              ></button>
              <button
                onClick={() => setCarouselIndex(1)}
                className={`w-2 h-2 rounded-full ${
                  carouselIndex === 1 ? "bg-[#013300]" : "bg-[#d9d9d9]"
                }`}
              ></button>
              <button
                onClick={() => setCarouselIndex(2)}
                className={`w-2 h-2 rounded-full ${
                  carouselIndex === 2 ? "bg-[#013300]" : "bg-[#d9d9d9]"
                }`}
              ></button>
            </div>
            <div className="translate-y-12 translate-x-7">
              <h1 className="font-bold text-2xl">
                {heroCarousel[carouselIndex].menu}
              </h1>
              <p className="text-[#013300] font-serif font-medium">
                {heroCarousel[carouselIndex].ingredients.join(", ")}
                <br />
                {heroCarousel[carouselIndex].price}K
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-baseline z-10">
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
      </div>
    </section>
  );
}

export default Hero;
