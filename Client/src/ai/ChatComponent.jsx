import React, { useState } from "react";
import axios from "axios";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const fetchChatGPTResponse = async (message) => {
    try {
      const response = await axios.get("http://localhost:8080/api/chat", {
        params: { prompt: message },
      });
      console.log("Full API Response:", response);
      console.log("Data from API:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error);
      return "An error occurred. Please try again later.";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, user: true },
    ]);

    const botResponse = await fetchChatGPTResponse(input);
    console.log("Bot Response:", botResponse);

    if (botResponse) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, user: true },
        { text: botResponse, user: false },
      ]);
    } else {
      console.log("Bot response is null or empty");
    }

    setInput("");
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.user ? "user-message" : "bot-message"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
