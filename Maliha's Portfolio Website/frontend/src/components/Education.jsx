import React from "react";

export default function Education({ edu }) {
  return (
    <div>
      <div className="flex flex-row pb-6 mb-4">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-6 w-6 mr-4"
              src="/images/education.png"
              alt="Education"
            />
            <h2 className="text-lg font-semibold">{edu.title}</h2>
          </div>
          <p className="pl-10 text-base font-semibold text-gray-500">
            {edu.cgpa}
          </p>
          <p className="pl-10 text-base font-semibold text-gray-500">
            {edu.dean}
          </p>
          <p className="pl-10 text-base text-gray-400">{edu.versity}</p>
          <h2 className="pl-10 text-base text-gray-400">{edu.date}</h2>
        </div>
      </div>
    </div>
  );
}
