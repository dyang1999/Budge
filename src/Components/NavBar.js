import React from "react";
import classes from "./NavBar.module.css";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const profileHandler = () => {
    navigate("/cart");
  };

  const calendarHandler = () => {
    navigate("/calendar");
  };

  const settingsHandler = () => {
    navigate("/settings");
  };

  return (
    <div className={classes.root}>
      <h1 onClick={profileHandler} className={classes.link}>
        😊
      </h1>
      <h1>|</h1>
      <h1 className={classes.link} onClick={calendarHandler}>
        🗓
      </h1>
      <h1>|</h1>
      <h1 className={classes.link} onClick={settingsHandler}>
        ⚙️
      </h1>
    </div>
  );
}
