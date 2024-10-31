import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children, authValues }) => {
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
