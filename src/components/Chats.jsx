import React from "react";
import "../css/Chats.css";
import Chat from "./Chat";
const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hello, this is mark here"
        timestamp="40secs ago"
        // profilepic="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/25/Pictures/_c135af80-3f62-11ea-8d17-9068169bb2f5.jpg"
      />
      <Chat
        name="Steve Rogers"
        message="Hello mrignaka"
        timestamp="1secs ago"
        profilepic="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/25/Pictures/_c135af80-3f62-11ea-8d17-9068169bb2f5.jpg"
      />
      <Chat
        name="Tony Stark"
        message="Your machine is done"
        timestamp="55minutes ago"
        profilepic="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/25/Pictures/_c135af80-3f62-11ea-8d17-9068169bb2f5.jpg"
      />
      <Chat
        name="Natasha"
        message="Hello, got the link"
        timestamp="5secs ago"
        profilepic="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/25/Pictures/_c135af80-3f62-11ea-8d17-9068169bb2f5.jpg"
      />
    </div>
  );
};

export default Chats;
