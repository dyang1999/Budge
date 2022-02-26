import React from "react";
import classes from "./NavBar.module.css";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const cartHandler = () => {
    navigate("/cart");
  };

  const homeHandler = () => {
    navigate("/landing");
  };

  return (
    <div className={classes.root}>
      <h1 onClick={homeHandler} className={classes.logo}>TheSmartGrocer</h1>
      <h2 className={classes.link} onClick={cartHandler}>
        🛒
      </h2>
    </div>
  );
}
