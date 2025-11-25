import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Education from "../../components/Education";
import Work from "../../components/Work";

export default function Resume() {
  return (
    <div className="bg-gray-100 pt-4 pb-12">
      <SectionTitle title="Resume" color="text-black" />

      <div className="flex flex-row items-start px-40 pt-4">
        <div className="bg-white rounded-md p-2 mb-12 shadow-xl">
          <img
            className="h-100 w-80"
            src="/images/maliha.png"
            alt="Maliha's Resume"
          />
        </div>

        <div className="flex flex-col items-start justify-start ml-30">
          <div className="flex flex-col">
            <h2 className="text-[#EE6C4D] font-semibold text-3xl pb-8">
              Education
            </h2>

            <Education
              title="B.Sc in Computer Science and Engineering"
              cgpa="CGPA - 3.678"
              dean="Dean’s Merit List"
              versity="Patuakhali Science & Technology University"
              date="Jan 2019 - Feb 2025"
            />

            <Education
              title="M.Sc in Computer Science and Information Technology"
              versity="Patuakhali Science & Technology University"
              date="July 2025 - Present"
            />
          </div>

          <div className="flex flex-col items-start justify-start">
            <h2 className="text-[#EE6C4D] font-semibold text-3xl pb-8 ">
              Work Experience
            </h2>

            <Work
              title="Internship"
              position="Intern Developer"
              institution="Itransition Group (Software development company)"
              date="Sep 2025 - Nov 2025"
            />

            <Work
              title="OCR Generated Text Summarization using BART"
              position="First Author"
              institution="IEEE_Xplore,ResearchGate"
              date="Dec 2024"
            />
          </div>

          <a
            className="text-white bg-[#EE6C4D] mx-auto border border-2 border-white rounded px-4 py-2 font-semibold hover:text-black hover:bg-white hover:border-black cursor-pointer"
            href="/cv/Maliha_Afroj_Orna_CV.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
