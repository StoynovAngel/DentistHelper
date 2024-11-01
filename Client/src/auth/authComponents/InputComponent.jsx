import React from "react";

const InputComponent = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  color,
  multiline,
}) => {
  return multiline ? (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${color} p-3 rounded-lg w-full mb-4`}
      rows="4"
    />
  ) : (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${color} p-3 rounded-lg w-full mb-4`}
    />
  );
};

export default InputComponent;
