import React from "react";

const AuthBackground = () => {
  return (
    <div className="relative ">
      <img
        src="/background.jpg"
        className="h-screen w-full object-cover rounded-lg"
        alt="Background"
      />
      {/* <div className="absolute bottom-10  w-full">
        <div className="flex flex-col justify-center sm:justify-evenly sm:flex-row "></div>
      </div> */}
    </div>
  );
};

export default AuthBackground;
