import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";

import { useNavigate } from "react-router-dom";
import progress from "../Assets/goal.png";
import calendar from "../Assets/calendar.png";
import settings from "../Assets/settings.png";

export default function NavBar() {
  const navigate = useNavigate();

  const profileHandler = () => {
    navigate("/profile");
  };

  const calendarHandler = () => {
    navigate("/calendar");
  };

  const settingsHandler = () => {
    navigate("/settings");
  };

  return (
    <div className={classes.root}>
      <div className={classes.link} onClick={profileHandler}>
          <img className={classes.logo} src={progress} />
          <p className={classes.text}>Progress</p>

      </div>

      <div className={classes.link} onClick={calendarHandler}>
        <img className={classes.logo} src={calendar} />
        <p className={classes.text}>Calendar</p>
      </div>
      
      <div className={classes.link} onClick={settingsHandler}>
        <img className={classes.logo} src={settings} />
        <p className={classes.text}>Settings</p>
      </div>
    </div>
  );
}
