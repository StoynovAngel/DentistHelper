import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import InputComponent from "../auth/authComponents/InputComponent";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../action/RegisterAction";
import { CAPTCHA_SITE_KEY } from "../utils/keyUtils";
import { inputRegister } from "../inputs/inputs";

const RegisterForm = () => {
  const { error, success, setError, setSuccess } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    age: 1,
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerAction({
      formData,
      captchaToken,
      setError,
      setSuccess,
      navigate,
    });
  };
  return (
    <form id="demo-form" onSubmit={handleSubmit} className="w-full max-w-md">
      <h1 className="text-5xl text-center mb-12">Create an account</h1>
      {inputRegister(formData, error).map((field) => (
        <InputComponent
          key={field.id}
          type={field.type}
          id={field.id}
          placeholder={field.placeholder}
          value={field.value}
          onChange={handleInputChange}
          min={field.min}
          max={field.max}
          error={field.error}
          color={"bg-gray-200"}
        />
      ))}

      <ReCAPTCHA
        sitekey={CAPTCHA_SITE_KEY}
        onChange={onCaptchaChange}
        className="mb-4"
      />

      <button
        type="submit"
        className="bg-gray-200 text-gray-900 text-md rounded-lg w-full p-4 hover:bg-main hover:text-white transition delay-100 mt-4"
      >
        Create account
      </button>

      <h2 className="mt-2">
        Already have an account?{" "}
        <Link to="/login" className="underline text-main">
          Login
        </Link>
      </h2>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && (
        <p className="text-green-500 mt-4">Registration successful!</p>
      )}
    </form>
  );
};

export default RegisterForm;
