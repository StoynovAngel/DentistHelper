import React from "react";
import { Link } from "react-router-dom";

const AboutContact = ({ path, header, description, text, link, onClick }) => {
  return (
    <div className="h-full bg-white border-2 shadow-sm p-8 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
      <img src={path} className="h-8 p-1 bg-gray-200 rounded-lg" alt="Icon" />
      <div className="mt-10">
        <h1 className="text-black text-xl font-semibold mb-5">{header}</h1>
        <h2 className="text-gray-700 text-md mb-5">{description}</h2>
      </div>
      {link ? (
        <Link to={link}>
          <button className="border-2 rounded-lg py-2 px-4 font-semibold text-gray-800 transition ease-linear delay-150 hover:text-white hover:bg-main hover:border-none">
            {text}
          </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="border-2 rounded-lg py-2 px-4 font-semibold text-gray-800 transition ease-linear delay-150 hover:text-white hover:bg-main hover:border-none "
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default AboutContact;
