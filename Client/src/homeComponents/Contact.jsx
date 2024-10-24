import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg text-left">
      <h1 className="text-4xl font-bold">
        A modern day appoach to dentist appointments
      </h1>

      <div className="flex justify-between">
        <div className="flex justify-center gap-2">
          <button className="">Get to know us</button>
          <button>
            <img src="./src/assets/arrow.svg" className="h-8" alt="Arrow" />
          </button>
        </div>
        <button className="transition ease-in-out delay-150 bg-black text-white hover:bg-main px-6 py-4 rounded-full font-medium ">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Contact;
