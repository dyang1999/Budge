import React from "react";
import classes from "./CalendarItem.module.css";
import EditModal from "./EditModal";
import { useState, useEffect } from "react";

export default function CalendarItem(props) {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal((prev) => !prev);
  };

  const [grey, setGrey] = useState(false);

  const itemColour = () => {
    if (grey) {
      return classes.root3;
    } else if (props.target <= props.budget) {
      return classes.root1;
    } else {
      return classes.root2;
    }
  };

  return (
    <div>
      {modal ? (
        <EditModal
          onClose={modalHandler}
          onGrey={setGrey}
          onEditHandler={props.onEditHandler}
          day={props.day}
          // setExpense={expenseHandler}
          change={props.onChange}
        />
      ) : (
        <></>
      )}
      <div
        onClick={modalHandler}
        className={itemColour()}
      >
        <p className={classes.text1}>{props.day + 1}</p>
        <p className={classes.text2}>${props.budget}</p>
      </div>
    </div>
  );
}
