import React from "react";

export default function Work({ title, position, institution, date }) {
  return (
    <div>
      <div className="flex flex-row pb-6 mb-4">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-6 w-6 mr-4"
              src="/images/work.png"
              alt="Education"
            />
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <p className="pl-10 text-base font-semibold text-gray-500">
            {position}
          </p>
          <p className="pl-10 text-gray-400">{institution}</p>
          <h2 className="text-gray-400 ml-10">{date}</h2>
        </div>
      </div>
    </div>
  );
}
