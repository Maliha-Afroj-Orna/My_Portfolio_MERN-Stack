import React from "react";

export default function Work({ work }) {
  return (
    <div>
      <div className="flex flex-row pb-4 mb-4">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-6 w-6 mr-4"
              src="/images/work.png"
              alt="Education"
            />
            <h2 className="text-lg font-semibold">{work.title}</h2>
          </div>
          <p className="pl-10 text-base font-semibold text-gray-500">
            {work.position}
          </p>
          <p className="pl-10 text-gray-400">{work.company}</p>
          <h2 className="text-gray-400 ml-10">{work.date}</h2>
        </div>
      </div>
    </div>
  );
}
