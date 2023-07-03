import React from "react";

function HeroMenu({ category, bg }: { category?: string; bg?: string }) {
  return (
    <section id="hero-menu">
      <div
        className={`h-[29rem] ${
          category ? bg : "bg-[url('/images/menu/hero-bg.png')]"
        } bg-cover relative flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-white font-medium text-5xl z-10 text-center leading-[1.25] translate-y-4">
          {category ? (
            <span className="capitalize">
              {category === "pasta-pizza"
                ? "Pasta & Pizza"
                : category.replace(/-/g, " ")}
            </span>
          ) : (
            <>
              What's On
              <br />
              Jardin
            </>
          )}
        </h1>
      </div>
    </section>
  );
}

export default HeroMenu;
