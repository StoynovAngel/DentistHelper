import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children, authValues }) => {
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  authValues: PropTypes.object.isRequired,
};
