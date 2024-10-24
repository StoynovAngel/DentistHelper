import React from "react";

const Background = () => {
  return (
    <>
      <div className="relative">
        <img
          src="./src/assets/background.jpg"
          className="h-[700px] w-[500px]"
          alt="Background"
        />
      </div>
      <div className="absolute">
        <h1>hello</h1>
      </div>
    </>
  );
};

export default Background;
