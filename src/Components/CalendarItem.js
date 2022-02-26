import React from "react";
import classes from "./CalendarItem.module.css";
import EditModal from "./EditModal";
import { useState, useEffect } from "react";

export default function CalendarItem(props) {
  const [budget, setBudget] = useState(props.budget);
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <div>
      {modal ? <EditModal onClose={modalHandler}/> : <></>}
      <div className={classes.root} onClick={modalHandler}>
        <p className={classes.text1}>{props.data}</p>
        <p className={classes.text2}>${budget}</p>
      </div>
    </div>
  );
}
