import React from "react";
import classes from "./EditModal.module.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditModal(props) {
  return (
    <div className={classes.root}>
      <input></input>
      <Button onClick={props.onClose}>Close</Button>
    </div>
  );
}
