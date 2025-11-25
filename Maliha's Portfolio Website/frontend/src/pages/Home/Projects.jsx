import React, { useState } from "react";
import SectionTitle from "../../components/sectionTitle";
import Masonry from "react-masonry-css";

export default function Projects() {
  const categories = [
    "All",
    "React",
    "Next",
    "MERN",
    "Web",
    "Bootstrap",
    "Wordpress",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      category: "React",
      title: "React Js Project",
      desc: "React.Js + Tailwind Css",
      img: "/projects/react.jpg",
    },
    {
      id: 2,
      category: "React",
      title: "React Js Project",
      desc: "React.Js + Bootstrap",
      img: "/projects/react1.jpg",
    },
    {
      id: 3,
      category: "React",
      title: "React Js Project",
      desc: "React.Js + Tailwind Css",
      img: "/projects/react2.jpg",
    },
    {
      id: 4,
      category: "React",
      title: "React Js Project",
      desc: "React.Js + Tailwind Css",
      img: "/projects/react3.jpg",
    },
    {
      id: 5,
      category: "React",
      title: "React Js Project",
      desc: "React.Js + Tailwind Css + EmailJs",
      img: "/projects/react4.jpg",
    },
    {
      id: 6,
      category: "Next",
      title: "Next Js Project",
      desc: "Next.Js + Tailwind Css",
      img: "/projects/next.png",
    },
    {
      id: 7,
      category: "MERN",
      title: "MERN Stack Project",
      desc: "MongoDB + Express.Js + React.Js + Node.Js",
      img: "/projects/mern.jpg",
    },
    {
      id: 8,
      category: "Web",
      title: "HTML/CSS Project",
      desc: "HTML + CSS",
      img: "/projects/web.png",
    },
    {
      id: 9,
      category: "Web",
      title: "HTML/CSS Project",
      desc: "HTML + CSS",
      img: "/projects/web1.png",
    },
    {
      id: 10,
      category: "Web",
      title: "HTML/CSS Project",
      desc: "HTML + CSS",
      img: "/projects/web2.png",
    },
    {
      id: 11,
      category: "Web",
      title: "HTML/CSS Project",
      desc: "HTML + CSS",
      img: "/projects/web3.png",
    },
    {
      id: 12,
      category: "Web",
      title: "HTML/CSS Project",
      desc: "HTML + CSS",
      img: "/projects/web4.png",
    },
    {
      id: 13,
      category: "Web",
      title: "HTML/CSS Project",
      desc: "HTML + CSS",
      img: "/projects/web5.png",
    },
    {
      id: 14,
      category: "Bootstrap",
      title: "Bootstrap Project",
      desc: "HTML + CSS + JS + Bootstrap",
      img: "/projects/bootstrap.png",
    },
    {
      id: 15,
      category: "Bootstrap",
      title: "Bootstrap Project",
      desc: "HTML + CSS + JS + Bootstrap",
      img: "/projects/bootstrap1.png",
    },
    {
      id: 16,
      category: "Bootstrap",
      title: "Bootstrap Project",
      desc: "HTML + CSS + JQuery + Bootstrap",
      img: "/projects/bootstrap2.png",
    },
    {
      id: 17,
      category: "Bootstrap",
      title: "Bootstrap Project",
      desc: "HTML + CSS + JS + Bootstrap",
      img: "/projects/bootstrap3.png",
    },
    {
      id: 18,
      category: "Bootstrap",
      title: "Bootstrap Project",
      desc: "HTML + CSS + JS + Bootstrap",
      img: "/projects/bootstrap4.png",
    },
    {
      id: 19,
      category: "Wordpress",
      title: "Wordpress Project",
      desc: "Wordpress",
      img: "/projects/wordpress.png",
    },
    {
      id: 20,
      category: "Wordpress",
      title: "Wordpress Project",
      desc: "Wordpress",
      img: "/projects/wordpress1.png",
    },
    {
      id: 21,
      category: "Wordpress",
      title: "Wordpress Project",
      desc: "Wordpress",
      img: "/projects/wordpress2.png",
    },
    {
      id: 22,
      category: "Wordpress",
      title: "Wordpress Project",
      desc: "Wordpress",
      img: "/projects/wordpress3.png",
    },
  ];

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

  return (
    <div id="projects" className="px-10 pt-4 pb-10">
      <SectionTitle title="My Projects" color="text-black" />

      <div className="sticky top-20 z-50">
        <div
          className="flex gap-4 overflow-x-auto justify-center mb-15"
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
