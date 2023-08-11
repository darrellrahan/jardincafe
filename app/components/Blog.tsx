import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { blog } from "../data/dry";

function Blog() {
  return (
    <section id="blog">
      <div className="mx-32 mt-40 mb-16">
        <div className="grid grid-cols-2 gap-8 items-center mb-8">
          <img
            src="/images/blog/1.png"
            alt="blog"
            width={1000}
            height={1000}
            className="h-72 object-cover"
          />
          <div className="space-y-4">
            <p className="text-neutral-500 text-lg font-medium">
              11 Agustus 2023
            </p>
            <div className="flex justify-between">
              <h2 className="text-[#013300] text-2xl font-semibold leading-[1.5]">
                Peluncuran Menu Musim Panas di Jardin Cafe
              </h2>
              <button className="text-[#013300] text-3xl">
                <FiExternalLink />
              </button>
            </div>
            <p className="text-justify text-neutral-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              fermentum nibh vel felis tempor, vitae eleifend leo tempor.
              Suspendisse potenti. Nullam scelerisque mauris sit amet facilisis
              pulvinar. Quisque dictum, metus sed efficitur condimentum, urna
              est aliquet ipsum, in pharetra lectus urna id mi.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {blog.map((data) => (
            <div key={data.title}>
              <img
                src={data.thumbnail}
                alt={data.title}
                width={1000}
                height={1000}
                className="h-72 object-cover"
              />
              <div className="space-y-4 mt-6">
                <p className="text-neutral-500 text-lg font-medium">
                  {data.date}
                </p>
                <div className="flex justify-between gap-8">
                  <h2 className="text-[#013300] text-2xl font-semibold leading-[1.5]">
                    {data.title}
                  </h2>
                  <button className="text-[#013300] text-3xl">
                    <FiExternalLink />
                  </button>
                </div>
                <p className="text-justify text-neutral-400 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  fermentum nibh vel felis tempor, vitae eleifend leo tempor.
                  Suspendisse potenti. Nullam scelerisque mauris sit amet
                  facilisis pulvinar. Quisque dictum, metus sed efficitur
                  condimentum, urna est aliquet ipsum, in pharetra lectus urna
                  id mi.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
