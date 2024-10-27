import React from "react";

const Cart = ({ title, description, transparency }) => {
  return (
    <div
      className={`bg-gray-100 ${transparency} p-8 rounded-lg text-left mx-4 my-2 sm:w-2/6 md:w-1/2`}
    >
      <h1 className="text-lg sm:text-3xl font-bold">{title}</h1>
      <p className="text-md mt-2">{description}</p>
    </div>
  );
};

export default Cart;
