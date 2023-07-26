import React from "react";

function HeroExp() {
  return (
    <section id="hero-exp">
      <div className="h-screen flex flex-col justify-between">
        <div></div>
        <div></div>
        <div></div>
        <h1 className="text-[#013300] text-4xl font-semibold text-center">
          Over 100+ Reviews
        </h1>
        <div className="h-[30rem] grid grid-cols-6 gap-1">
          <div className="bg-[url('/images/photo/carousel-3.jpg')] bg-no-repeat bg-cover w-full h-full col-span-2 row-span-3" />
          <div className="bg-[url('/images/photo/carousel-1.jpg')] bg-no-repeat bg-cover w-full h-full row-span-3" />
          <div className="bg-[url('/images/booking/bg.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/hero/carousel-1.webp')] bg-no-repeat bg-cover w-full h-full bg-[50%]" />
          <div className="bg-[url('/images/hero/carousel-2.webp')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/hero/carousel-3.jpeg')] bg-no-repeat bg-cover w-full h-full bg-[50%]" />
          <div className="bg-[url('/images/login/bg.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/menu/all-day-breakfast.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/menu/appetizer.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/menu/breakfast.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/menu/desert.png')] bg-no-repeat bg-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroExp;
