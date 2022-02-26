import React, { useState, useEffect } from "react";
import { Modal, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from "./TipsModal.module.css";


export default function TipsModal(props) {
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
          <h3>Useful Articles💡</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Card onClick={()=> window.open("https://blog.seedly.sg/beginner-series-tips-seedly-money-framework/", "_blank")}>
                <Card.Img variant="top" src="https://cdn-blog.seedly.sg/wp-content/uploads/2020/09/22094216/211220-Seedly-Money-Framework.png" />
                <Card.Body>
                <Card.Text>
                    <strong>The Seedly Money Framework: Your Complete Guide to Winning Your Personal Finance</strong>
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card onClick={()=> window.open("https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/ways-to-save-money", "_blank")}>
                <Card.Img variant="top" src="https://bettermoneyhabits.bankofamerica.com/content/dam/bmh/assets/hero-8simplewaystosavemoney.svg" />
                <Card.Body>
                <Card.Text>
                    <strong>8 Simple Ways to Save Money</strong>
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card onClick={()=> window.open("https://www.ramseysolutions.com/budgeting/money-habits-we-need-to-break", "_blank")}>
                <Card.Img variant="top" src="https://cdn2.ramseysolutions.net/dynamic-webp/media/blog/budgeting/spending/spending-habits.jpg/640w.webp" />
                <Card.Body>
                <Card.Text>
                    <strong>How to Change your Spending Habits</strong>
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card onClick={()=> window.open("https://www.experian.com/blogs/ask-experian/ways-to-spend-less-and-save-more/", "_blank")}>
                <Card.Img variant="top" src="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/Digital-Debt-Collection.jpg" />
                <Card.Body>
                <Card.Text>
                    <strong>9 Ways to Spend Less and Save More Money</strong>
                </Card.Text>
                </Card.Body>
            </Card>
        </Modal.Body>
      </Modal>
    );
}