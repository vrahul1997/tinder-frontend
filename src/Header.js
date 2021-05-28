import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import "./Header.css";

function header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        src="https://styles.redditmedia.com/t5_2w7mz/styles/communityIcon_jmyuhs81jl211.png?width=256&s=a23d21debdfe842e1b4d9ce3c24f3ab8be5d0e18"
        className="header__logo"
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default header;
