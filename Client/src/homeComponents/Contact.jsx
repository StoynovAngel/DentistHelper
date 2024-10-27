import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg text-left h-full">
      <h1 className="text-4xl font-bold">
        A modern day appoach to dentist appointments
      </h1>

      <div className="flex justify-between">
        <div className="flex justify-center gap-2 hover:font-semibold">
          <Link to="/about" className="flex">
            <button>Get to know us</button>
            <button>
              <img src="/arrow.svg" className="h-8" alt="Arrow" />
            </button>
          </Link>
        </div>
        <Link to="/appointment">
          <button className="transition ease-in-out delay-150 bg-black text-white hover:bg-main px-6 py-4 rounded-full font-medium ">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
