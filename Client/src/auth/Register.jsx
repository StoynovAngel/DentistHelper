import React from "react";
import AuthBackground from "./authComponents/AuthBackground";

import RegisterForm from "./authComponents/RegisterForm";

const Register = () => {
  return (
    <div className="bg-gray-100 space-y-24 grid grid-cols-2 gap-4 h-screen">
      <div className="my-5 ml-5">
        <AuthBackground />
      </div>
      <div className="flex flex-col mt-5 font-mono items-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
