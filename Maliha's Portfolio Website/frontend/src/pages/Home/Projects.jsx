import React, { useState, useEffect } from "react";
import SectionTitle from "../../components/sectionTitle";
import Masonry from "react-masonry-css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

export default function Projects() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const projectData = portfolioData?.project || {};
  const categories = projectData.categories || [];
  const projects = projectData.projects || [];

  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? showAll
        ? projects
        : projects.slice(0, 12)
      : projects.filter((project) => project.category === activeCategory);

  const masonryBreakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div
      id="projects"
      className="px-10 pt-4 pb-10"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <SectionTitle title="My Projects" color="text-black" />

      <div className="sticky top-20 z-50">
        <div
          className="flex gap-4 overflow-x-auto md:justify-center mb-15"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "manipulation",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`pb-1 ${
                activeCategory === category
                  ? "font-semibold border-b-2 border-black cursor-pointer"
                  : "text-gray-500 cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Masonry
        breakpointCols={masonryBreakpoints}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative mb-6 overflow-hidden border border-1 border-gray-200 rounded-md shadow-lg hover:shadow-2xl hover:shadow-black/40 cursor-pointer group"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full rounded-lg relative z-0"
            />

            <div className="absolute inset-0 -translate-x-full hover:bg-black/50 group-hover:translate-x-0 transition-transform duration-300 ease-out group-hover:bg-opacity-60 z-10"></div>

            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 z-20">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm">{project.desc}</p>
            </div>
          </div>
        ))}
      </Masonry>

      {activeCategory === "All" && !showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-400 cursor-pointer"
          >
            More Work
          </button>
        </div>
      )}

      {activeCategory === "All" && showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-gray-200 cursor-pointer"
          >
            Show Less
          </button>
        </div>
      )}

      <style>
        {`
            .masonry-grid {
                display: flex;
                gap: 20px;
            }

            .masonry-column {
                background-clip: padding-box;
            }`}
      </style>
    </div>
  );
}
