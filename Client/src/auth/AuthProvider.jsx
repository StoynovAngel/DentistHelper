import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Corrected import
import { url } from "../common/constant";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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
          logOut();
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const logIn = (token) => {
    sessionStorage.setItem("token", token);
    localStorage.setItem("auth-event", "login");
    setUser(jwtDecode(token));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.removeItem("auth-event");
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
        error,
        setError,
        success,
        setSuccess,
        setUser,
        logIn,
        logOut,
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
