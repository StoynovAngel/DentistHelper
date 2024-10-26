import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RoundedButton from "../homeComponents/RoundedButton";
import Home from "../pages/Home";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between  mx-5 py-5 items-center">
        <div className="flex justify-center gap-5 items-center">
          <img src="./src/assets/nurse.svg" className="h-12" alt="Nurse" />
          <div className="text-3xl">Dentist Bro</div>
          <button
            className="text-lg font-semibold border-4 border-black px-4 py-2 rounded-full hover:border-main hover:text-main transition ease-in-out delay-150"
            onClick={handleToggle}
          >
            Menu
          </button>
          {show && (
            <div className="flex gap-4 text-lg font-semibold align-middle transition ease-in-out delay-75">
              {location.pathname !== "/" && (
                <Link to="/">
                  <h1 className="hover:border-b-4 border-transparent border-b-4  hover:border-main  cursor-pointer">
                    Home
                  </h1>
                </Link>
              )}
              <Link to="/about">
                <h1 className="border-transparent border-b-4  hover:border-b-4 hover:border-main  cursor-pointer">
                  About
                </h1>
              </Link>
              <Link to="/appointment">
                <h1 className="hover:border-b-4 border-transparent border-b-4  hover:border-main  cursor-pointer">
                  Appointment
                </h1>
              </Link>
              <Link to="/profile">
                <h1 className="hover:border-b-4 border-transparent border-b-4  hover:border-main  cursor-pointer">
                  Profile
                </h1>
              </Link>
            </div>
          )}
        </div>
        <h2 className="text-xl text-center align-middle p-0 m-0">
          +359 89050####
        </h2>
      </div>
    </>
  );
};

export default Navigation;
