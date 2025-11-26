import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div
      className="bg-[#293241] pt-4"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className=" pb-4 grid grid-cols-1 md:grid-cols-8 gap-8 px-4 md:px-16">
        <div className="md:col-span-5 md:pr-16">
          <a href="#home">
            <img
              className="h-30 w-40 invert cursor-pointer"
              src="/images/maliha_logo.png"
              alt="Maliha's Logo"
            />
          </a>
          <p className="text-gray-300 pb-8 -mt-8">
            Building creative and functional digital experiences that showcase
            my skills, passion, and love for design and innovation. Always
            exploring new technologies and pushing the boundaries of creativity
            to deliver impactful projects.
          </p>
          <div className="flex flex-row">
            <a
              className="px-4"
              href="https://www.linkedin.com/in/maliha-afroj-orna/"
              target="_blank"
            >
              <img
                className="h-8 w-8 rounded-full hover:shadow-md hover:scale-120 hover:shadow-gray-400"
                src="/images/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a
              className="px-4"
              href="https://github.com/Maliha-Afroj-Orna"
              target="_blank"
            >
              <img
                className="h-8 w-8 rounded-full hover:shadow-md hover:scale-120 hover:shadow-gray-400"
                src="/images/github.png"
                alt="Github"
              />
            </a>
            <a
              className="px-4"
              href="https://www.fiverr.com/sellers/maliha_orna/edit"
              target="_blank"
            >
              <img
                className="h-8 w-8 rounded-full hover:shadow-md hover:scale-120 hover:shadow-gray-400"
                src="/images/fiverr.png"
                alt="Fiverr"
              />
            </a>
            <a
              className="px-4"
              href="https://www.hackerrank.com/profile/malihaafrozorna"
              target="_blank"
            >
              <img
                className="h-8 w-8 rounded-full hover:shadow-md hover:scale-120 hover:shadow-gray-400"
                src="/images/hackerrank.png"
                alt="Hackerrank"
              />
            </a>
          </div>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-white text-2xl font-semibold py-4">Links</h2>
          <ul>
            <li>
              <a
                className="text-lg text-gray-300 hover:text-[#EE6C4D]"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-lg text-gray-300 hover:text-[#EE6C4D]"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-lg text-gray-300 hover:text-[#EE6C4D]"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="text-lg text-gray-300 hover:text-[#EE6C4D]"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-lg text-gray-300 hover:text-[#EE6C4D]"
                href="#resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="text-lg text-gray-300 hover:text-[#EE6C4D]"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-semibold py-4">
            Have A Question?
          </h2>
          <div className="flex flex-col text-gray-300 items-start justify-center">
            <h2 className="text-lg">Address: Dhaka, Bangladesh</h2>
            <h2 className="text-lg">Email: malihaafrozorna@gmail.com</h2>
          </div>
        </div>
      </div>

      <div className="text-gray-400 text-center py-8">
        <h2>
          Copyright ©2025 All Rights Reserved | This Website is Developed by{" "}
          <span className="font-semibold text-[#EE6C4D]">
            "Maliha Afroj Orna"
          </span>
        </h2>
      </div>
    </div>
  );
}
