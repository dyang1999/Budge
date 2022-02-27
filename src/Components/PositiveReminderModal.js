import React, { useState, useEffect } from "react";
import { Modal, Alert, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from "./PositiveReminderModal.module.css";
import tick from "../Assets/accept.png";
 

export default function PositiveReminderModal(props) {
    return (
      <Modal 
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable={true}
        className={classes.modal}
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <h3>Attention</h3>
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Alert variant={"success"} className={classes.text}>
            <img className={classes.image} src={tick} />
            <strong>Good job! You have spent less than your daily target!</strong> 
            </Alert>
            <p>Doing well at this rate! Keep up your good spending habits!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
}