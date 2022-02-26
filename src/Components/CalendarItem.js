import React from "react";
import classes from "./CalendarItem.module.css";
import EditModal from "./EditModal";
import { useState, useEffect } from "react";

export default function CalendarItem(props) {
  const totalBudget = 280;

  const [expense, setExpense] = useState(10);

  const expenseHandler = (test) => {
    setExpense(test);
  };

  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal((prev) => !prev);
  };

  const updateChange = () => {
    if (props.data > 16) {
      setExpense(expense-(props.expenseChange / 12));
    }
  };

  useEffect(()=>{
    updateChange()
  },[props.expenseChange])

  return (
    <div>
      {modal ? (
        <EditModal
          onClose={modalHandler}
          setExpense={expenseHandler}
          change={props.onChange}
        />
      ) : (
        <></>
      )}
      <div className={classes.root} onClick={modalHandler}>
        <p className={classes.text1}>{props.data}</p>
        <p className={classes.text2}>${expense}</p>
      </div>
    </div>
  );
}
