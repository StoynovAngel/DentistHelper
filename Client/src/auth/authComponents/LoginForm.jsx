import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useAuth } from "../AuthProvider";
import { loginAction } from "../../action/LoginAction";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { CAPTCHA_SITE_KEY, error, setError, setSuccess, setUser, logIn } =
    useAuth();
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
        onChange={onCaptchaChange}
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
