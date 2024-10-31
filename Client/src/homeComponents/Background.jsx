import React from "react";
import Cart from "./Cart";

const Background = () => {
  return (
    <>
      <div className="relative ">
        <img
          src="/background.jpg"
          className="h-screen w-full object-cover rounded-lg"
          alt="Background"
        />
        <div className="absolute bottom-10  w-full">
          <div className="flex flex-col justify-center sm:justify-evenly sm:flex-row ">
            <Cart
              title={"Zirconia Fixed Bridge"}
              transparency={"bg-opacity-80"}
              description={"Zirconia Fixed Bridge is a durable. "}
            />
            <Cart
              title={"Single Dental Implants"}
              transparency={"bg-opacity-100"}
              description={
                "Single Dental Implants are a permanent solution for replacing missing teeth."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
