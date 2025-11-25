import React from "react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white p-2 sticky border-b border-gray-200 top-0 z-50">
      <div className="flex items-center justify-between px-2 md:px-20">
        <div className="cursor-pointer h-14 w-24 z-50">
          <a href="#home">
            <img
              className="h-full w-full"
              src="/images/maliha_logo.png"
              alt="Maliha's Logo"
            />
          </a>
        </div>

        <div
          className="md:hidden text-2xl text-black cursor-pointer ml-auto relative z-50 top-0 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </div>

        <nav>
          <ul
            className={`flex flex-col md:flex-row gap-2 md:gap-8 text-black font-semibold absolute z-30 md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto p-4 md:p-0 transition-all duration-300 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 md:translate-y-0 md:opacity-100"
            }`}
          >
            <li>
              <a
                className="text-lg cursor-pointer px-4 py-2 rounded-md hover:text-white hover:bg-black transition-all"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-lg cursor-pointer px-4 py-2 rounded-md hover:text-white hover:bg-black transition-all"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-lg cursor-pointer px-4 py-2 rounded-md hover:text-white hover:bg-black transition-all"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="text-lg cursor-pointer px-4 py-2 rounded-md hover:text-white hover:bg-black transition-all"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-lg cursor-pointer px-4 py-2 rounded-md hover:text-white hover:bg-black transition-all"
                href="#resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="text-lg cursor-pointer px-4 py-2 rounded-md hover:text-white hover:bg-black transition-all"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
