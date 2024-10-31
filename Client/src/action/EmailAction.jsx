import React from "react";
import axios from "axios";
import { url } from "../common/constant";

export const sendEmailAction = async ({
  emailDetails,
  setError,
  setSuccess,
}) => {
  try {
    const response = await axios.post(`${url}api/email/send`, emailDetails);
    if (response.status === 200) {
      setSuccess("Email sent successfully!");
      setError(null);
    } else {
      setError("Failed to send the email.");
    }
  } catch (err) {
    console.error("Error during email sending:", err);
    setError(
      err.response?.data?.message ||
        "An error occurred while sending the email."
    );
  }
};
