import React from "react";

const InputComponent = ({ type, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-gray-200 p-4 rounded-lg w-full mb-4"
    />
  );
};

export default InputComponent;
