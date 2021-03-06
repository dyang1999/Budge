import React from "react";
import classes from "./EditModal.module.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import piggy from "../Assets/full bank.png"

export default function EditModal(props) {
  const [input, setInput] = useState(0);

  const onEditHandler = () => {
    props.onEditHandler(props.day, input);
    props.onClose();
    props.onGrey(true);
  };

  return (
    <div className={classes.root}>
      <img src={piggy} className={classes.img}/>
      <div className={classes.inline}>
        <h1 className={classes.text}>$</h1>
        <input
          className={classes.searchBar}
          value={input}
          onInput={(e) => setInput(e.target.value)}
          type="text"
        />
      </div>
      <div className={classes.inline1}>
        <Button
          variant="outline-primary"
          onClick={onEditHandler}
          className={classes.btn}
          style={{marginRight: "15px"}}
        >
          Save
        </Button>
        <Button
          variant="outline-danger"
          onClick={props.onClose}
          className={classes.btn}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
