import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg text-left h-full">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
        A modern day appoach to dentist appointments
      </h1>

      <div className="flex flex-col">
        <div className="flex gap-2 hover:font-semibold">
          <Link to="/about" className="flex">
            <button className="flex row">
              Get to know us
              <img src="/arrow.svg" className="h-8" alt="Arrow" />
            </button>
          </Link>
        </div>
        <Link to="/appointment">
          <button className="transition ease-in-out delay-150 bg-black  px-6 py-4 rounded-full hover:bg-main mt-5">
            <span className="text-white font-medium ">Get started</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
