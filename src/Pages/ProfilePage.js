import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import TipsModal from "../Components/TipsModal";

import { Container, Row, Alert, ButtonGroup, Button, Card, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BarChart, Bar, XAxis, YAxis , Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

import classes from "./ProfilePage.module.css";
import piggybank from "../Assets/piggybank.png";


export default function ProfilePage() {
  // chart data HARDCODED

  const monthData = [
  {
    name: 'Jan',
    Expense: 500,
  },
  {
    name: 'Feb',
    Expense: 510,
  },
  {
    name: 'Mar',
    Expense: 525,
  },
  {
    name: 'Apr',
    Expense: 534,
  },
  {
    name: 'May',
    Expense: 594,
  },
  {
    name: 'Jun',
    Expense: 612,
  },
  {
    name: 'Jul',
    Expense: 533,
  },
  {
    name: 'Aug',
    Expense: 564,
  },
  {
    name: 'Sep',
    Expense: 512,
  },
  {
    name: 'Oct',
    Expense: 603,
  },
  {
    name: 'Nov',
    Expense: 489,
  },
  {
    name: 'Dec',
    Expense: 578,
  },
  ];
  const yearData = [
  {
    name: '2020',
    Expense: 6120,
  },
  {
    name: '2021',
    Expense: 6217,
  },
  {
    name: '2022',
    Expense: 6345,
  }
  ];
  const [data, setData] = useState([]);
  const [ref, setRef] = useState(true)

  // for modal
  const [modalShow, setModalShow] = useState(false);

  console.log("MODAL SHOW: ");
  console.log(modalShow);

  useEffect(() => {
    setData(monthData);
  }, []);

  return (
    <div>
      <NavBar/>

      <TipsModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
      <div className={classes.root}>
        <Container className={classes.container}>
          
          <Row className={classes.top}>
              <p className={classes.title}>Feb 2022</p>
              <p className={classes.text}>Target: $500 | Estimated Expense: $512</p>
          </Row>

          <Row>
               <img className={classes.image} src={piggybank} />
          </Row>

          <Row className={classes.top}>
            <Card className={classes.card}>
              <Card.Header as="h5">Expense Distribution</Card.Header>
              <Card.Body className={classes.cardbody}>
                <div class="text-center">
                  <ButtonGroup>
                    <Button variant="secondary" onClick={(event) => { setData(monthData); setRef(true);}}>Month</Button>
                    <Button variant="secondary" onClick={(event) => { setData(yearData); setRef(false);}}>Year</Button>
                  </ButtonGroup>
                </div>
                <div className={classes.chart}>
                  <ResponsiveContainer width={320} height="80%">
                    <BarChart width={600} height={100} data={data}>
                      <XAxis dataKey="name" type="category" interval={0} tick={{fontSize:"13px"}} tickSize={3}/>
                      <YAxis type="number" domain={[0, 'dataMax']} hide/>
                      <Tooltip content={data}></Tooltip>
                      <Bar dataKey="Expense" fill="#0D2054"/>
                      { ref ? <ReferenceLine y={500} stroke="#F2AA42" /> : null}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Row>
          <Row className={classes.top}>
            <Alert variant={"warning"} className={classes.text}>
              ⚠️ <strong>Oh no, you haven't been hitting your targets!</strong> 
              <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="/settings">Increase your budget</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1" onClick={() => setModalShow(true)}>Read some tips</Nav.Link>
                </Nav.Item>
              </Nav>
            </Alert>
          </Row>

        </Container>
      </div>
    </div>
  );
}
