import React from "react";
import classes from "./EditModal.module.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditModal(props) {
  const [input, setInput] = useState(0);
  const expenseHandler = () => {
    props.setExpense(input);
  };
  return (
    <div className={classes.root}>
      <input
        className={classes.searchBar}
        value={input}
        onInput={(e) => setInput(e.target.value)}
        type="text"
      />
      <Button onClick={expenseHandler}>Edit</Button>
      <Button onClick={props.onClose}>Close</Button>
    </div>
  );
}
