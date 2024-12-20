import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { isLoggedIn, logOut } = useAuth();

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <div className="flex justify-between  mx-5 py-5 items-center overflow-x-auto">
        <div className="flex justify-center gap-5 items-center">
          {!isLoggedIn && (
            <Link to="/login">
              <h1 className="border-black hover:border-main border-4 rounded-full p-2 cursor-pointer">
                <img src="./login.svg" className="h-6" />
              </h1>
            </Link>
          )}

          <button
            className=" sm:text-lg font-semibold border-4 border-black px-2 py-1 sm:px-4 sm:py-2 rounded-full hover:border-main hover:text-main transition ease-in-out delay-150"
            onClick={handleToggle}
          >
            Menu
          </button>
          {show && (
            <div className="flex gap-2 sm:gap-4 text-sm sm:text-lg font-semibold align-middle transition ease-in-out delay-75">
              {location.pathname !== "/" && (
                <Link to="/">
                  <h1
                    className={`border-b-4 ${
                      isActiveLink("/") ? "border-main" : "border-transparent"
                    } hover:border-main cursor-pointer`}
                  >
                    Home
                  </h1>
                </Link>
              )}
              <Link to="/about">
                <h1
                  className={`border-b-4 ${
                    isActiveLink("/about")
                      ? "border-main"
                      : "border-transparent"
                  } hover:border-main cursor-pointer`}
                >
                  About
                </h1>
              </Link>
              <Link to="/appointment">
                <h1
                  className={`border-b-4 ${
                    isActiveLink("/appointment")
                      ? "border-main"
                      : "border-transparent"
                  } hover:border-main cursor-pointer`}
                >
                  Appointment
                </h1>
              </Link>
              {isLoggedIn && (
                <>
                  <Link to="/profile">
                    <h1
                      className={`border-b-4 ${
                        isActiveLink("/profile")
                          ? "border-main"
                          : "border-transparent"
                      } hover:border-main cursor-pointer`}
                    >
                      Profile
                    </h1>
                  </Link>
                  <h1
                    onClick={logOut}
                    className="hover:border-b-4 border-transparent border-b-4 hover:border-main cursor-pointer"
                  >
                    Logout
                  </h1>
                </>
              )}
            </div>
          )}
        </div>
        <h2 className="hidden sm:block text-xl text-center align-middle p-0 m-0">
          +359 89050####
        </h2>
      </div>
    </>
  );
};

export default Navigation;
