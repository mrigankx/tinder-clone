import React, { useState } from "react";
import "../css/ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
const ChatScreen = () => {
  const [inputTxt, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Allen",
      image:
        "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/25/Pictures/_c135af80-3f62-11ea-8d17-9068169bb2f5.jpg",
      message: "What's Up",
    },
    {
      name: "Allen",
      image:
        "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/25/Pictures/_c135af80-3f62-11ea-8d17-9068169bb2f5.jpg",
      message: "How are you",
    },
    {
      message: "I am fine",
    },
  ]);
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSend = () => {
    setMessages([...messages, { message: inputTxt }]);
    setInput("");
  };

  return (
    <div className="chatscreen">
      <p className="chatscreen_timestamp">
        You Matched with allen on 10/20/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen_message">
            <Avatar
              className="chatscreen_img"
              alt={message.name}
              src={message.image}
            />
            <p className="chatscreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen_message">
            <p className="chatscreen_textuser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatscreen_input">
        <input
          type="text"
          className="chatscreen_inputfield"
          onChange={handleChange}
          placeholder="Type a message...."
          value={inputTxt}
        />
        <button type="button" onClick={handleSend} className="input_button">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
