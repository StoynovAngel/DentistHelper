import React from "react";
import InputComponent from "../auth/authComponents/InputComponent";

const EmailForm = ({
  handleSubmitEmail,
  sender,
  setSender,
  subject,
  setSubject,
  message,
  setMessage,
  onClose,
}) => {
  return (
    <form
      onSubmit={handleSubmitEmail}
      className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
    >
      <div className="grid">
        <div className="mt-3 text-center sm:mx-4 sm:mt-0 sm:text-left">
          <h3
            className="text-xl font-semibold text-gray-900 mb-8"
            id="modal-title"
          >
            Send us an Email
          </h3>
          <div className="mt-2">
            <InputComponent
              type="text"
              placeholder="Sender"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              color={"bg-gray-100"}
              required
            />
            <InputComponent
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              color={"bg-gray-100"}
              required
            />
            <InputComponent
              type="text"
              placeholder="Content"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              color={"bg-gray-100"}
              required
              multiline
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-3 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-main sm:ml-3 sm:w-auto"
        >
          Send
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
