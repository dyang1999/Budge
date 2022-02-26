import React, { useState, useEffect } from "react";
import { Modal, Alert, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from "./ReminderModal.module.css";
import warning from "../Assets/warning.png";
 

export default function ReminderModal(props) {
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
            <Alert variant={"danger"} className={classes.text}>
            <img className={classes.image} src={warning} />
            <strong>It seems like you have been over-spending the past 2 days!</strong> 
            </Alert>
            <p>Keep to your daily target or spend less. You can do it!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
}