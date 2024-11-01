import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useAuth from "../hooks/useAuth";
import { loginAction } from "../action/LoginAction";
import { Link, useNavigate } from "react-router-dom";
import { CAPTCHA_SITE_KEY } from "../utils/keyUtils";
import InputComponent from "../auth/authComponents/InputComponent";
import { inputLogin } from "../inputs/inputs";

const LoginForm = () => {
  const { error, setError, setSuccess, setUser, logIn } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

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
    if (!captchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    await loginAction({
      formData,
      captchaToken,
      setUser,
      setError,
      setSuccess,
      navigate,
      logIn,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h1 className="text-5xl text-center mb-8">Login</h1>
      {inputLogin(formData).map((field) => (
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
        Login
      </button>

      <h2 className="mt-2">
        Don't have an account?{" "}
        <Link to="/register" className="underline text-main">
          Sign in
        </Link>
      </h2>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default LoginForm;
