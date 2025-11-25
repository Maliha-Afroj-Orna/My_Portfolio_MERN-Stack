import React from "react";

export default function Skills() {
  const skills = [
    { name: "React.js", score: "80%", img: "/images/react.png" },
    { name: "Node.js", score: "80%", img: "/images/node.png" },
    { name: "MongoDB", score: "85%", img: "/images/mongodb.png" },
    { name: "HTML", score: "98%", img: "/images/html.png" },
    { name: "CSS", score: "95%", img: "/images/css.png" },
    { name: "Sass", score: "90%", img: "/images/sass.png" },
    { name: "Bootstrap", score: "95%", img: "/images/bootstrap.png" },
    { name: "Tailwind Css", score: "90%", img: "/images/tailwind.png" },
    { name: "JavaScript", score: "95%", img: "/images/js.png" },
    { name: "JQuery", score: "90%", img: "/images/jquery.png" },
    { name: "Wordpress", score: "97%", img: "/images/wordpress.png" },
    { name: "Next.js", score: "80%", img: "/images/next.png" },
    { name: "ES6", score: "95%", img: "/images/js.png" },
    { name: "DaisyUi", score: "80%", img: "/images/daisyui.png" },
    { name: "Express.js", score: "82%", img: "/images/express.png" },
    { name: "REST API", score: "80%", img: "/images/restapi.png" },
    { name: "MySQL", score: "90%", img: "/images/mysql.png" },
    { name: "SQLite", score: "75%", img: "/images/sqlite.png" },
    { name: "Figma", score: "70%", img: "/images/figma.png" },
    { name: "Photoshop", score: "80%", img: "/images/photoshop.png" },
    { name: "Illustrator ", score: "75%", img: "/images/illustrator.png" },
    { name: "Python", score: "85%", img: "/images/python.png" },
    { name: "Machine Learning", score: "80%", img: "/images/ml.png" },
    { name: "Transformers", score: "80%", img: "/images/transformers.png" },
  ];

  return (
    <div id="skills" className="overflow-hidden py-20">
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
