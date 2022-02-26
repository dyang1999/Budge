import React from "react";
import classes from "./CalendarItem.module.css";
import EditModal from "./EditModal";
import { useState, useEffect } from "react";

export default function CalendarItem(props) {


  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <div>
      {modal ? (
        <EditModal
          onClose={modalHandler}
          onEditHandler = {props.onEditHandler}
          day = {props.day}
          // setExpense={expenseHandler}
          change={props.onChange}
        />
      ) : (
        <></>
      )}
      <div
        className={classes.root}
        onClick={modalHandler}
      >
        <p className={classes.text1}>{props.day+1}</p>
        <p className={classes.text2}>${props.budget}</p>
      </div>
    </div>
  );
}
