import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { url } from "../common/constant";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;
  const navigate = useNavigate();

  const [captchaToken, setCaptchaToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    age: 1,
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser(decodedToken);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
          logOut();
        }
      } catch (error) {
        console.error("Invalid token:", error);
        logOut();
      }
    }

    const handleStorageChange = (event) => {
      if (event.key === "auth-event") {
        if (event.newValue === "login") {
          const token = localStorage.getItem("token");
          if (token) {
            sessionStorage.setItem("token", token);
            setUser(jwtDecode(token));
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          }
        } else if (event.newValue === "logout") {
          sessionStorage.removeItem("token");
          setUser(null);
          delete axios.defaults.headers.common["Authorization"];
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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

  const loginAction = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await axios.post(
        `${url}auth/login?captchaToken=${captchaToken}`,
        {
          username: formData.username,
          password: formData.password,
          captchaToken,
        }
      );

      if (response.data && response.data.status === "success") {
        const token = response.data.data.token;
        if (typeof token === "string" && token.trim().length > 0) {
          sessionStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          setUser(jwtDecode(token));
          setSuccess(true);
          setError(null);

          localStorage.setItem("auth-event", "login");
          localStorage.removeItem("auth-event");
          navigate("/");
        } else {
          console.error("Invalid token format:", token);
          setError("Login failed: Invalid token format.");
        }
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  const registerAction = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/auth/register?captchaToken=${captchaToken}`,
        {
          ...formData,
          captchaToken,
        }
      );

      if (response.data.status === "success") {
        setSuccess(true);
        setError(null);
        navigate("/login");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  const logOut = () => {
    sessionStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    localStorage.setItem("auth-event", "logout");
    localStorage.removeItem("auth-event");

    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        CAPTCHA_SITE_KEY,
        user,
        captchaToken,
        success,
        error,
        formData,
        loginAction,
        registerAction,
        logOut,
        handleInputChange,
        onCaptchaChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
