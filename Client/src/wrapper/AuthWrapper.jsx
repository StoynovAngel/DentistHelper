import useInitializeAuth from "../hooks/useInitialAuth";
import useLogin from "../hooks/useLogin";
import useLogout from "../hooks/useLogout";
import { AuthProvider } from "../auth/AuthProvider";
import { useState } from "react";
import PropTypes from "prop-types";

const AuthProviderWrapper = ({ children }) => {
  const { user, isLoggedIn, setUser, setIsLoggedIn } = useInitializeAuth();
  const logIn = useLogin(setUser, setIsLoggedIn);
  const logOut = useLogout(setUser, setIsLoggedIn);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const authValues = {
    user,
    isLoggedIn,
    error,
    setError,
    success,
    setSuccess,
    logOut,
    logIn,
  };

  return <AuthProvider authValues={authValues}>{children}</AuthProvider>;
};

AuthProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProviderWrapper;
