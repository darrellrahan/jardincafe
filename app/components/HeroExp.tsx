import React from "react";

function HeroExp() {
  return (
    <section id="hero-exp">
      <div className="mt-36">
        <h1 className="text-[#013300] text-2xl font-semibold text-center mb-8">
          Over 100+ Reviews
        </h1>
        <div className="h-[28rem] grid grid-cols-5 gap-1">
          <div className="bg-[url('/images/photo/carousel-3.jpg')] bg-no-repeat bg-cover w-full h-full col-span-2 row-span-3" />
          <div className="bg-[url('/images/photo/carousel-1.jpg')] bg-no-repeat bg-cover w-full h-full row-span-3" />
          <div className="bg-[url('/images/menu/dori-ricebowl.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/photo/carousel-2.jpg')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/menu/chicken-mushroom.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/menu/chicken-quesadilla.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/menu/strawberry-creme.png')] bg-no-repeat bg-cover w-full h-full" />
          <div className="bg-[url('/images/menu/quinoa-salad.png')] bg-no-repeat bg-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroExp;
