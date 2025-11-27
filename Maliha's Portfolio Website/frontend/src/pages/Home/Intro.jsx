import React from "react";

export default function Intro() {
  return (
    <div
      className="relative h-[89vh] bg-cover bg-center pt-4 pb-10"
      style={{ backgroundImage: "url('/images/intro.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="px-4 md:px-40 flex flex-col items-start justify-center h-full gap-6">
          <h1 className="text-white">Hi, I am</h1>
          <h1 className="text-[#EE6C4D] text-2xl md:text-4xl font-semibold">
            Maliha Afroj Orna
          </h1>
          <h1 className="text-white text-xl md:text-3xl font-semibold">
            A Full Stack MERN Developer and AI Engineer.
          </h1>
          <p className="text-gray-200 pr-4 md:pr-120">
            I'm a Full-Stack MERN Developer and AI Engineer crafting smart,
            scalable, and modern digital solutions. I build intelligent apps
            that merge creativity with cutting-edge technology.
          </p>
          <div className="flex flex-row gap-6">
            <a
              className="text-white border border-2 border-white rounded px-4 py-2 font-semibold hover:text-black hover:bg-white cursor-pointer"
              href="#contact"
            >
              Hire Me
            </a>
            <a
              className="text-white border border-2 border-white rounded px-4 py-2 font-semibold hover:text-black hover:bg-white cursor-pointer"
              href="/cv/Maliha_Afroj_Orna_CV.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
