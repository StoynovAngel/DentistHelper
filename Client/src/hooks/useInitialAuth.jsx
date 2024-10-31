import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { isTokenExpired } from "../utils/authUtils";

const useInitializeAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initializeAuth = () => {
      const token = localStorage.getItem("token");

      if (token && !isTokenExpired(token)) {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
        setIsLoggedIn(true);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        localStorage.removeItem("token");
        setUser(null);
        setIsLoggedIn(false);
      }
    };

    initializeAuth();
  }, []);

  return { user, isLoggedIn, setUser, setIsLoggedIn };
};

export default useInitializeAuth;
