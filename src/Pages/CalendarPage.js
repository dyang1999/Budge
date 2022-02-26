import React, { useEffect, useState } from "react";
import classes from "./CalendarPage.module.css";
import NavBar from "../Components/NavBar";
import CalendarItem from "../Components/CalendarItem";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
];
const change = 2;
export default function CalendarPage() {
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.textbody}>
          <h1>February 2022</h1>
          <div className={classes.inline}>
            <h2>${change}</h2> <h2 className={classes.textbody}>from target</h2>
          </div>
        </div>  

        <div className={classes.calendar}>
          {data.map((item) => (
            <CalendarItem data={item} key={item.key} />
          ))}
        </div>
      </div>
    </div>
  );
}
