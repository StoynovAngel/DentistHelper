import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { url } from "../common/constant";

export const loginAction = async ({
  formData,
  captchaToken,
  setError,
  setSuccess,
  navigate,
  logIn,
}) => {
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
        logIn(token);
        setSuccess(true);
        setError(null);
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
