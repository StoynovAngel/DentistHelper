import { useState } from "react";
import { sendSmsAction } from "../action/SmsAction";
import SmsForm from "../forms/SmsForm";

const Sms = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [recipientNumber, setRecipientNumber] = useState("+359890504411");
  const [fromNumber, setFromNumber] = useState("+18606984110");

  if (!isOpen) return null;

  const handleSubmitSms = async (e) => {
    e.preventDefault();

    sendSmsAction({
      fromPhoneNumber: fromNumber,
      toPhoneNumber: recipientNumber,
      body: message,
    });

    setMessage("");
    onClose();
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto font">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <SmsForm
              handleSubmitSms={handleSubmitSms}
              message={message}
              setMessage={setMessage}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sms;
