import React from "react";
import axios from "axios";
import { url } from "../common/constant";

export const sendSmsAction = async ({
  fromPhoneNumber,
  toPhoneNumber,
  body,
}) => {
  try {
    const response = await axios.post(url + "api/sms/send", {
      fromPhoneNumber,
      toPhoneNumber,
      body,
    });

    if (response.status === 200) {
      console.log("SMS sent successfully!");
    }
  } catch (error) {
    console.error("Error sending SMS:", error);
  }
};
