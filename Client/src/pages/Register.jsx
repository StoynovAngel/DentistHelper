import React from "react";
import AuthBackground from "../components/authComponents/AuthBackground";
import RegisterForm from "../forms/RegisterForm";

const Register = () => {
  return (
    <div className="flex justify-between bg-gray-100 gap-4 m-5 p-5 rounded-lg">
      <div className="flex items-center justify-center  max-w-2xl h-auto">
        <AuthBackground />
      </div>
      <div className="flex flex-col items-center justify-center w-full font-mono">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
