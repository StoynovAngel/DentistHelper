import React from "react";

const Cart = ({ title, description }) => {
  return (
    <div className="bg-gray-100 bg-opacity-80 p-8 rounded-lg text-left w-2/6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-md mt-2">{description}</p>
    </div>
  );
};

export default Cart;
