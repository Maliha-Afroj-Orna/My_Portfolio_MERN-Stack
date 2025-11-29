import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import Education from "../../components/Education";
import Work from "../../components/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const { loading, portfolioData } = useSelector((state) => state.root);
  const resumeData = portfolioData?.resume || {};
  const { profileImg, eduDesc = [], workDesc = [] } = resumeData;

  return (
    <div
      id="resume"
      className="bg-gray-100 pt-4 pb-10"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <SectionTitle title="Resume" color="text-black" />

      <div className="flex flex-col md:flex-row items-start md:px-40 pt-4">
        <div className="bg-white rounded-md p-2 mb-12 shadow-xl">
          <img
            className="h-120 w-100 hidden md:block"
            src={profileImg}
            alt="Maliha's Resume"
          />
        </div>

        <div className="flex flex-col items-start justify-start ml-6 md:ml-28">
          <div className="flex flex-col">
            <h2 className="text-[#EE6C4D] font-semibold text-3xl pb-8">
              Education
            </h2>

            {eduDesc.map((edu, index) => (
              <Education key={index} edu={edu} />
            ))}
          </div>

          <div className="flex flex-col border-t border-gray-300 pt-8 items-start justify-start">
            <h2 className="text-[#EE6C4D] font-semibold text-3xl pb-8 ">
              Work Experience
            </h2>

            {workDesc.map((work, index) => (
              <Work key={index} work={work} />
            ))}
          </div>

          <a
            className="text-white bg-[#EE6C4D] border border-2 border-white rounded px-4 py-1 font-semibold hover:text-black hover:bg-white hover:border-black cursor-pointer"
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
