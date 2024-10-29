import React, { useState } from "react";
import axios from "axios";

const useRegister = () => {
  const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;
  const [captchaToken, setCaptchaToken] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    age: 1,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        ...formData,
        captchaToken,
      });

      if (response.data.status === "success") {
        setSuccess(true);
        setError(null);
        alert("Registration successful!");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return {
    formData,
    error,
    success,
    CAPTCHA_SITE_KEY,
    handleInputChange,
    handleSubmit,
    onCaptchaChange,
  };
};

export default useRegister;
