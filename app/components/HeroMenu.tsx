import React from "react";

function HeroMenu() {
  return (
    <section id="hero-menu">
      <div className="h-[25rem] bg-[url('/images/menu/hero-bg.png')] bg-cover relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-white font-medium text-5xl z-10 text-center leading-[1.25] translate-y-10">
          What's On
          <br />
          Jardin
        </h1>
      </div>
    </section>
  );
}

export default HeroMenu;
