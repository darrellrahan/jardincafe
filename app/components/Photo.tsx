"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { photoCarousel } from "../data/dry";

function Photo() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCarouselIndex(carouselIndex === 2 ? 0 : carouselIndex + 1);
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, [carouselIndex]);

  return (
    <section id="photo">
      <div className="bg-[#252525] px-32 h-[22rem] flex items-center relative overflow-hidden">
        {photoCarousel.map((data, index) => {
          let className = "translate-x-full opacity-0";

          if (index === carouselIndex) {
            className = "translate-x-0 opacity-100";
          }
          if (
            index === carouselIndex - 1 ||
            (index === 2 && carouselIndex === 0)
          ) {
            className = "-translate-x-full opacity-0";
          }

          return (
            <div
              key={data}
              className={`absolute inset-0 ${className} duration-300 ease-linear`}
            >
              <img
                src={data}
                alt="carousel"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-[#25252599] z-10"></div>
        <div className="flex justify-between items-center w-full z-20">
          <button
            onClick={() =>
              setCarouselIndex(carouselIndex === 0 ? 2 : carouselIndex - 1)
            }
            className="w-14 h-14 border-[2.5px] border-white flex items-center justify-center bg-transparent text-white hover:bg-white hover:text-[#252525] duration-200 ease-linear rounded-full"
          >
            <IoIosArrowBack fontSize="1.25rem" />
          </button>
          <button
            onClick={() =>
              setCarouselIndex(carouselIndex === 2 ? 0 : carouselIndex + 1)
            }
            className="w-14 h-14 border-[2.5px] border-white flex items-center justify-center bg-transparent text-white hover:bg-white hover:text-[#252525] duration-200 ease-linear rounded-full"
          >
            <IoIosArrowForward fontSize="1.25rem" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Photo;
