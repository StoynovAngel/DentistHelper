import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const useLogin = (setUser, setIsLoggedIn) => {
  const navigate = useNavigate();

  const logIn = (token) => {
    localStorage.setItem("token", token);
    const decodedToken = jwtDecode(token);
    setUser(decodedToken);
    setIsLoggedIn(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    navigate("/");
  };

  return logIn;
};

export default useLogin;
