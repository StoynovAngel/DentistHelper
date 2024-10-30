import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useAuth } from "../AuthProvider";

const Login = () => {
  const {
    formData,
    loginAction,
    handleInputChange,
    onCaptchaChange,
    CAPTCHA_SITE_KEY,
    error,
  } = useAuth();

  return (
    <form onSubmit={loginAction} className="w-full max-w-md">
      <h1 className="text-5xl text-center mb-8">Login</h1>

      <input
        type="text"
        id="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
        className="w-full p-4 border rounded bg-gray-200 mb-4"
      />

      <input
        type="password"
        id="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        className="w-full p-4 border rounded bg-gray-200 mb-4"
      />

      <ReCAPTCHA
        sitekey={CAPTCHA_SITE_KEY}
        onChange={(token) => onCaptchaChange(token)}
        className="mb-4"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white rounded w-full p-4 mt-4"
      >
        Login
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default Login;
