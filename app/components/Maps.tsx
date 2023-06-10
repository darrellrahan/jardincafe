import React from "react";

function Maps() {
  return (
    <section id="maps">
      <div className="grid grid-cols-2">
        <div></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8760486483784!2d107.6152443786603!3d-6.905422575287133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e735987a6103%3A0x1b5eb768dcb08b22!2sJardin%20Cafe!5e0!3m2!1sen!2sid!4v1686135785887!5m2!1sen!2sid"
          className="border-0 w-full h-[40rem] p-8"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Maps;
