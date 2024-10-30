import axios from "axios";
import { url } from "../common/constant";

export const registerAction = async ({
  formData,
  captchaToken,
  setError,
  setSuccess,
  navigate,
}) => {
  if (!captchaToken) {
    setError("Please complete the reCAPTCHA.");
    return;
  }

  try {
    const response = await axios.post(
      `${url}auth/register?captchaToken=${captchaToken}`,
      formData
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
