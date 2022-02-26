import React, {useState, useEffect} from "react";
import NavBar from "../Components/NavBar";
import { InputGroup,FormControl, Button, Card, Nav } from 'react-bootstrap'
import { Slider } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css'

import classes from "./SettingsPage.module.css";

export default function SettingsPage() {

  const [income, setIncome] = useState(1000);
  const [dummyincome, setDummyIncome] = useState(1000)
  const [spend, setSpend] = useState(50);
  const [save, setSave] = useState(20);
  const [invest, setInvest] = useState(30);

  const value = (percent, income) => {
    return((percent/100) * parseInt(income))
  }

  const [spendVal, setSpendVal] = useState(value(spend,income));
  const [saveVal, setSaveVal] = useState(value(save,income));
  const [investVal, setInvestVal] = useState(value(invest,income));
  


  const changeIncome = (event, dummyincome) => {
    setDummyIncome(dummyincome);
  };

  useEffect(()=>{
    setSpendVal(value(spend,income));
    setSaveVal(value(save,income));
    setInvestVal(value(invest,income));

  }, [spend,save,invest,income]);

  const changeSpend = (event, spend) => {
    setSpend(spend);
    setSpendVal(value(spend,income));
  };

  const changeSave = (event, save) => {
    setSave(save);
    setSaveVal(value(save,income));

  };

  const changeInvest = (event, invest) => {
    setInvest(invest);
    setInvestVal(value(invest,income));
  };

  const clearChanges = () =>{
    setSpend(50);
    setSave(20);
    setInvest(30);
  }

  console.log(income);

  return (
    <div>
      <NavBar />
      <div className={classes.root}>

        <div className={classes.body}>
          <div className={classes.name}>
            <h2>Name</h2>
            <InputGroup className="mb-3">
              <FormControl placeholder="Username" aria-label="Username"/>
            </InputGroup>
          </div>

          <div className={classes.income}>
            <h2>Monthly Income</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl type="text" value={dummyincome} onChange={changeIncome} aria-label="Amount (to the nearest dollar)"/>
            </InputGroup>
          </div>
          
          <br/>
          <h3>Spend: ${spendVal}</h3>
          <Slider value={spend} onChange={changeSpend} aria-label="spend" valueLabelDisplay="auto" />          
          
          <h3>Save: ${saveVal}</h3>
          <Slider value={save} onChange={changeSave} aria-label="save" valueLabelDisplay="auto" />          
          
          <h3>Invest: ${investVal}</h3>
          <Slider value={invest} onChange={changeInvest} aria-label="invest" valueLabelDisplay="auto" />          

        </div>
        <br/>
        <div className={classes.btn}>
          <Button variant="outline-danger" className={classes.btnclr}
          onClick={clearChanges}
          >
            Clear Changes</Button>
          <Button variant="outline-primary" className={classes.btnsave}>Save</Button>
        </div>
      </div>
    </div>
  );
}
