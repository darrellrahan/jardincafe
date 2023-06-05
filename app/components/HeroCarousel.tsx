import React from "react";

function HeroCarousel({
  className,
  img,
  menu,
  ingredients,
  price,
}: {
  className: string;
  img: string;
  menu: string;
  ingredients: string[];
  price: number;
}) {
  return (
    <div
      className={`${className} duration-300 ease-linear opacity-0 w-full h-full`}
    >
      <img
        src={img}
        alt={menu}
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

        <div className="translate-y-12 translate-x-7">
          <h1 className="font-bold text-2xl">{menu}</h1>
          <p className="text-[#013300] font-serif font-medium">
            {ingredients.join(", ")}
            <br />
            {price}K
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
