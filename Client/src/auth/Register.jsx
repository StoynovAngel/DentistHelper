import React, { useState } from "react";
import AuthBackground from "./authComponents/AuthBackground";
import { Link } from "react-router-dom";
import InputComponent from "./authComponents/InputComponent";

const Register = () => {
  const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

  return (
    <div className="bg-gray-100 space-y-24 grid grid-cols-2 gap-4 h-screen">
      <div className="my-5 ml-5">
        <AuthBackground />
      </div>
      <div className="flex flex-col mt-5 font-mono items-center">
        <div className=" mt-5">
          <h1 className="text-5xl text-center">Create an account</h1>
          <h2 className="mt-2  mb-12 ">
            Already have an account?{" "}
            <Link to="/login" className="underline text-main">
              Login
            </Link>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <InputComponent
              type={"text"}
              id={"first_name"}
              placeholder={"Firstname:"}
            />
            <InputComponent
              type={"text"}
              id={"last_name"}
              placeholder={"LastName:"}
            />
          </div>
          <InputComponent
            type={"text"}
            id={"username"}
            placeholder={"Username:"}
          />
          <InputComponent type={"email"} id={"email"} placeholder={"Email:"} />
          <InputComponent
            type={"password"}
            id={"password"}
            placeholder={"Password:"}
          />
          <button
            data-sitekey={CAPTCHA_SITE_KEY}
            data-callback="onSubmit"
            data-action="submit"
            className="g-recaptcha bg-gray-200 text-gray-900 text-md rounded-lg w-full p-4 hover:bg-main hover:text-white transition delay-100"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
