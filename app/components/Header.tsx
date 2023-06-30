"use client";

import React, { useEffect, useState } from "react";
import { navLink } from "../data/dry";
import { AiOutlineLogin } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../firebase";

function Header() {
  const [top, setTop] = useState("top-8");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const onPageScroll = () => {
      setTop(window.pageYOffset > 16 ? "top-0" : "top-8");
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => user && setUser(user));
  }, []);

  return (
    <section id="header">
      <header
        className={`fixed inset-x-32 ${top} bg-white flex justify-between items-center text-[#013300] text-lg font-semibold p-4 rounded-[2.5rem] z-50 duration-300 ease-linear`}
      >
        <a href="/" className="absolute left-4 translate-y-1">
          <img
            src="/images/global/logo.svg"
            alt="logo"
            width={90}
            height={90}
          />
        </a>
        <div></div>
        <div className="flex items-center gap-8">
          {navLink.map((data) => (
            <a
              href={data.url}
              key={data.link}
              className={`relative after:absolute after:bottom-0 ${
                usePathname() === data.url ? "after:w-full" : "after:w-0"
              } hover:after:w-full after:inset-x-0 after:h-[2px] after:bg-[#013300] after:duration-300 after:ease-linear`}
            >
              {data.link}
            </a>
          ))}
        </div>
        {user ? (
          <div className="flex gap-4 items-center">
            <span>{user.displayName}</span>
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    setUser(null);
                  })
                  .catch((e) => alert(e.message));
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <a href="/login" className="flex items-center gap-2 group">
            <span className="relative after:absolute after:bottom-0 after:w-0 group-hover:after:w-full after:inset-x-0 after:h-[2px] after:bg-[#013300] after:duration-300 after:ease-linear">
              Login
            </span>
            <span>
              <AiOutlineLogin fontSize="2rem" />
            </span>
          </a>
        )}
      </header>
    </section>
  );
}

export default Header;
