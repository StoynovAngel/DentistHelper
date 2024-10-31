import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  const expirationTime = new Date(decodedToken.exp * 1000);
  return expirationTime < new Date();
};
