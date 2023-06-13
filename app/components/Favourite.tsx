import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { favourites } from "../data/dry";

function Favourite() {
  return (
    <section id="favourite">
      <div className="px-32 py-16 rounded-t-[2.5rem] -mt-16 z-20 relative bg-white">
        <h1 className="text-[#013300] text-4xl font-semibold">Favourites</h1>
        <div className="flex items-center justify-between gap-8 mt-16">
          <button>
            <IoIosArrowBack fontSize="2.5rem" color="#013300" />
          </button>
          <div className="flex gap-8">
            {favourites.map((data) => (
              <div key={data.img}>
                <div>
                  <img
                    src={data.img}
                    alt="jardin's favourite menu"
                    className="w-[13.5rem] h-44 rounded-t-lg object-cover"
                  />
                </div>
                <div className="h-28 rounded-b-lg bg-[#eaeaea]"></div>
              </div>
            ))}
          </div>
          <button>
            <IoIosArrowForward fontSize="2.5rem" color="#013300" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Favourite;
