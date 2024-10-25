import React from "react";
import Cart from "./Cart";

const Background = () => {
  return (
    <>
      <div className="relative ">
        <img
          src="./src/assets/background.jpg"
          className="h-screen w-full object-cover rounded-lg"
          alt="Background"
        />
        <div className="absolute bottom-10  w-full">
          <div className="flex justify-evenly ">
            <Cart
              title={"Single Dental Implants"}
              description={
                "Single Dental Implants are a permanent solution for replacing missing teeth."
              }
            />
            <Cart
              title={"Zirconia Fixed Bridge"}
              description={
                "Zirconia Fixed Bridge is a durable, aesthetically pleasing dental restoration used to replace multiple missing teeth. "
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
