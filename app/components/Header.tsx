import React from "react";
import { navLink } from "../data/dry";

function Header() {
  return (
    <section id="header">
      <header className="absolute inset-x-32 top-8 bg-white flex justify-center items-center gap-12 text-[#013300] text-lg font-semibold p-4 rounded-[2.5rem] z-10">
        <img
          src="/images/global/logo.png"
          alt="logo"
          width={90}
          height={90}
          className="absolute left-4 translate-y-1"
        />
        {navLink.map((data) => (
          <a href={data.url} key={data.link}>
            {data.link}
          </a>
        ))}
      </header>
    </section>
  );
}

export default Header;
