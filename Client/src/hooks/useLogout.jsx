import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogout = (setUser, setIsLoggedIn) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return logOut;
};

export default useLogout;
