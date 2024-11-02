import { useState } from "react";

import { sendEmailAction } from "../../action/EmailAction";
import EmailForm from "../../forms/EmailForm";

const Email = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const gmailKey = import.meta.env.VITE_GMAIL_KEY;

  if (!isOpen) return null;

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    sendEmailAction({
      emailDetails: {
        sender: sender,
        subject,
        msgBody: message,
        recipient: gmailKey,
      },
      onClose,
    });
    setSender("");
    setSubject("");
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
            <EmailForm
              handleSubmitEmail={handleSubmitEmail}
              sender={sender}
              subject={subject}
              message={message}
              setSender={setSender}
              setSubject={setSubject}
              setMessage={setMessage}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
