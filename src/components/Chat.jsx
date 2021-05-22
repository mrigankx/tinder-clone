import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../css/Chat.css";
import { Link } from "react-router-dom";
const Chat = (props) => {
  return (
    <Link to={`/chat/${props.name}`}>
      <div className="chat">
        <Avatar
          className="chat_image"
          alt={props.name}
          src={props.profilepic}
        />
        <div className="chat_details">
          <h2>{props.name}</h2>
          <p>{props.message}</p>
        </div>
        <p className="chat_timestamp">{props.timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
