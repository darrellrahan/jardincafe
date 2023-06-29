import React from "react";
import { socials } from "../data/dry";

function Footer() {
  return (
    <section id="footer">
      <footer className="px-32 py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-2xl font-semibold text-[#013300]">
            Stay connected with us by subscribing to our email updates.
          </h1>
          <p className="text-xl font-semibold text-[#7c7c7c]">
            We'll send you a nice letter once per week with no spam.
          </p>
          <div className="flex h-[3.5rem] mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#ddd] h-full rounded-[0.625rem] flex items-center pl-4 pr-6 placeholder:text-black w-[17.5rem] focus:outline-none"
            />
            <button className="bg-[#013300] h-full rounded-[0.625rem] flex items-center px-8 text-white -translate-x-4">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <img
            src="/images/global/logo.svg"
            alt="logo"
            width={150}
            height={150}
            className="-translate-x-6 translate-y-10"
          />
          <p className="text-[#013300] font-semibold z-10 relative">
            Find your sanctuary in our coffee haven.
          </p>
          <div className="my-8 flex items-center gap-6 text-lg text-[#013300] font-semibold">
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/booking">Booking</a>
            <a href="/about">About Us</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <hr className="w-full border border-[#7c7c7c50]" />
          <div className="flex justify-between items-center mt-12">
            <p className="text-lg font-semibold text-[#7c7c7c]">
              © {new Date().getFullYear()} Jardin Cafe. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((data) => (
                <a key={data.url} href={data.url} target="_blank">
                  <data.icon
                    fontSize="1.75rem"
                    color="#013300"
                    className="hover:scale-[0.9] duration-300 ease-linear"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
