import React from "react";
import classes from "./CalendarItem.module.css";
import { useState, useEffect } from "react";

export default function CalendarItem(props) {

  return (
    <div className={classes.root}>
        <p>{props.data}</p>
    </div>
  );
}
