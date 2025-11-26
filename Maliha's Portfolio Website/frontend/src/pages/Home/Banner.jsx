import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div
      className="bg-[#EE6C4D] flex flex-col py-2 pt-4 pb-10"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="flex flex-row md:px-60 px-4">
        <div className="flex flex-col items-start justify-center md:w-2/3 w-full">
          <h2 className=" text-2xl md:text-3xl text-white pb-4 font-semibold">
            Have a project on your Mind?
          </h2>
          <p className="text-lg text-gray-200 pb-4">
            I bring your ideas to life with fast, scalable web apps powered by
            modern AI. Let’s work together to build something smart and
            impactful.
          </p>
          <a
            href="#contact"
            className="relative z-20 text-[#EE6C4D] text-center border border-2 border-black bg-white rounded px-2 py-2 font-semibold hover:text-white hover:bg-black w-[150px] cursor-pointer"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-end justify-end md:ml-20">
          <img
            className="relative z-10 w-55 h-70 rounded-full mt-[-80px] hidden md:block"
            src="/images/banner.png"
            alt="Maliha's Banner"
          />
        </div>
      </div>
    </div>
  );
}
