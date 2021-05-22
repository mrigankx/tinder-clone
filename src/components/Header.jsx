import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "../css/Header.css";
const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <KeyboardBackspaceIcon
            fontSize="large"
            className="header_backbutton"
          />
        </IconButton>
      ) : (
        <Link to="/profile">
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      )}

      <Link to="/">
        <IconButton>
          <WhatshotIcon
            className="header__icon"
            htmlColor="red"
            fontSize="large"
          />
        </IconButton>
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
