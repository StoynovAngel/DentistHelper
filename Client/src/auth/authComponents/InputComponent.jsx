import React from "react";

const InputComponent = ({ type, id, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        className="bg-gray-200 border text-gray-900 text-sm rounded-lg hover:bg-gray-300 block w-full p-4 mb-5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputComponent;
