import React, { useEffect } from "react";
import SectionTitle from "../../components/sectionTitle";
import Skills from "../../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <div
        id="about"
        className="mb-10 pt-4 pb-10 "
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <SectionTitle title="About Me" color="text-black" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-100 mx-auto md:mx-50 p-10 rounded-md shadow-lg">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              className="h-60 w-40 md:h-100 md:w-80 rounded-full"
              src="/images/maliha.png"
              alt="Maliha Profile"
            />
          </div>

          <div className=" flex flex-col gap-4 w-full md:w-2/3">
            <h2 className="text-lg text-gray-500">
              I’m a MERN Stack Developer and AI Engineer who loves transforming
              ideas into interactive, intelligent products. Technology excites
              me, and I enjoy blending web development with AI to solve
              meaningful problems. Every project is a chance to learn, innovate,
              and create something smarter than before.
            </h2>
            <p className="md:flex md:gap-8 text-lg text-[#EE6C4D] font-semibold">
              <span className="font-bold text-xl text-black">Name:</span> Maliha
              Afroj Orna
            </p>
            <p className="md:flex md:gap-11 text-lg text-[#EE6C4D] font-semibold">
              <span className="font-bold text-xl text-black">DOB:</span>{" "}
              September 20, 2000
            </p>
            <p className="md:flex md:gap-2 text-lg text-[#EE6C4D] font-semibold">
              <span className="font-bold text-xl text-black">Address:</span>{" "}
              Dhaka, Bangladesh
            </p>
            <p className="md:flex md:gap-8 text-lg text-[#EE6C4D] font-semibold">
              <span className="font-bold text-xl text-black">Email:</span>{" "}
              malihaafrozorna@gmail.com
            </p>

            <div className="flex flex-row gap-6 py-2">
              <a
                href="#contact"
                className="text-black text-center border border-2 border-black rounded px-4 py-2 font-semibold hover:text-white hover:bg-black w-[150px] cursor-pointer"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="text-black text-center border border-2 border-black rounded px-4 py-2 font-semibold hover:text-white hover:bg-black w-[150px] cursor-pointer"
              >
                My Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </>
  );
}
