import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills({ skills }) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div
      id="skills"
      className="overflow-hidden py-20"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="flex flex-row items-center justify-center gap-6 animate-scroll px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col gap-2 items-center border border-gray-300 rounded-full px-7 py-4 h-72 w-45 hover:bg-[#EE6C4D] cursor-pointer shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="h-32 w-20">
              <img
                src={skill.img}
                alt={skill.name}
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="text-3xl text-black">{skill.score}</h2>
            <p className="text-gray-500 text-xl">{skill.name}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
}
