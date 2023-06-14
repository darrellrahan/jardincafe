import React from "react";

function Maps() {
  return (
    <section id="maps">
      <div className="grid grid-cols-2 gap-24 items-center px-32 py-16">
        <div>
          <div className="flex items-center gap-4">
            <img
              src="/images/maps/location.png"
              alt="location"
              width={50}
              height={50}
            />
            <h1 className="text-4xl font-semibold">Find Our Cafe</h1>
          </div>
          <p className="text-[#8e8e8e] mt-8">
            Jl. Cimanuk No.1A, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa
            Barat 40115
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8760486483784!2d107.6152443786603!3d-6.905422575287133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e735987a6103%3A0x1b5eb768dcb08b22!2sJardin%20Cafe!5e0!3m2!1sen!2sid!4v1686135785887!5m2!1sen!2sid"
          className="border-0 w-full h-[40rem]"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Maps;
