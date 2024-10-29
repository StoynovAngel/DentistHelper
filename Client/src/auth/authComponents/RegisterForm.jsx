import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import InputComponent from "./InputComponent";
import useRegister from "../../hooks/useRegister";

const RegisterForm = () => {
  const {
    formData,
    error,
    success,
    CAPTCHA_SITE_KEY,
    handleInputChange,
    handleSubmit,
    onCaptchaChange,
  } = useRegister();

  return (
    <form id="demo-form" onSubmit={handleSubmit}>
      <h1 className="text-5xl text-center">Create an account</h1>
      <h2 className="mt-2 mb-12">
        Already have an account?{" "}
        <Link to="/login" className="underline text-main">
          Login
        </Link>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <InputComponent
          type="text"
          id="firstname"
          placeholder="Firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
        <InputComponent
          type="text"
          id="lastname"
          placeholder="Lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />
      </div>
      <InputComponent
        type="text"
        id="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <InputComponent
        type="email"
        id="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <InputComponent
        type="password"
        id="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <InputComponent
        type="text"
        id="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
      />

      <ReCAPTCHA sitekey={CAPTCHA_SITE_KEY} onChange={onCaptchaChange} />

      <button
        type="submit"
        className="bg-gray-200 text-gray-900 text-md rounded-lg w-full p-4 hover:bg-main hover:text-white transition delay-100 mt-4"
      >
        Create account
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && (
        <p className="text-green-500 mt-4">Registration successful!</p>
      )}
    </form>
  );
};

export default RegisterForm;
