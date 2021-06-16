import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "../css/SwipeButtons.css";

const SwipeButtons = (props) => {
  const onSwipe = (dir) => {
    console.log("You swiped in " + dir + " direction.");
  };
  return (
    <div className="swipe_buttons">
      <IconButton className="swipe_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
