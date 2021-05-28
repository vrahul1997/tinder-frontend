import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ReplayIcon from "@material-ui/icons/Replay";
import StarRateIcon from "@material-ui/icons/StarRate";
import React from "react";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButton>
      <IconButton className="swipeButtons__flash">
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
