import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div
      id="contact"
      className="pt-4 pb-16"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <SectionTitle title="Contact Me" color="text-black" />

      <form className="bg-white border border-gray-200 mx-auto w-2/4 p-6 rounded-md shadow-lg">
        <div className="flex flex-col gap-6 py-4">
          <input
            className="w-full text-lg p-3 border border-gray-400 rounded-md outline-none"
            type="text"
            placeholder="Full Name"
          />

          <input
            className="w-full text-lg p-3 border border-gray-400 rounded-md outline-none"
            type="email"
            placeholder="Email"
          />

          <input
            className="w-full text-lg p-3 border border-gray-400 rounded-md outline-none"
            type="text"
            placeholder="Subject"
          />

          <textarea
            className="w-full text-lg p-3 border border-gray-400 rounded-md outline-none h-32 resize-none"
            placeholder="Message"
          ></textarea>

          <button
            className="text-black mx-auto border border-black text-lg font-semibold cursor-pointer w-[120px] px-2 py-1 rounded-md hover:bg-[#EE6C4D] hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
