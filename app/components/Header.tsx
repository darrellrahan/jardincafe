"use client";

import React, { useEffect, useState } from "react";
import { navLink } from "../data/dry";

function Header() {
  const [top, setTop] = useState("top-8");

  useEffect(() => {
    const onPageScroll = () => {
      setTop(window.pageYOffset > 16 ? "top-0" : "top-8");
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="header">
      <header
        className={`fixed inset-x-32 ${top} bg-white flex justify-center items-center gap-12 text-[#013300] text-lg font-semibold p-4 rounded-[2.5rem] z-50 duration-300 ease-linear`}
      >
        <img
          src="/images/global/logo.png"
          alt="logo"
          width={90}
          height={90}
          className="absolute left-4 translate-y-1"
        />
        {navLink.map((data) => (
          <a
            href={data.url}
            key={data.link}
            className="relative after:absolute after:bottom-0 after:w-0 hover:after:w-full after:inset-x-0 after:h-[2px] after:bg-[#013300] after:duration-300 after:ease-linear"
          >
            {data.link}
          </a>
        ))}
      </header>
    </section>
  );
}

export default Header;
