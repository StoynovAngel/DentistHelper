import React from "react";

const RoundedButton = ({ path, onClick }) => {
  return (
    <button
      className="p-2 bg-white rounded-full hover:bg-gray-200"
      onClick={onClick}
    >
      <img src={path} className="h-6" alt="Arrows" />
    </button>
  );
};

export default RoundedButton;
