import React, { useContext, useState, Component, cloneElement } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Questionaire,
  namedSlider
} from "./common";
import { Marginer } from "../marginer";
//import Slider from "../Components/slider";
import { AccountContext } from "./accountContext";
import { Slider } from '@mui/material';
import { useNavigate } from "react-router-dom";

export function SignupForm(props) {
  const navigate = useNavigate();

  const { switchToSignin } = useContext(AccountContext);
  // var spend = 50;
  var invest = 30; 
  var save = 20;
  const [total, setTotal] = useState(0);

  const submitHandler = () => {
    navigate("/calendar");
  };

  const updateTotal = (monthlyInc) => {
    // console.log(typeof(monthlyInc))
    // console.log(monthlyInc)
    setTotal(monthlyInc.target.value)
    document.getElementById("total").innerHTML = "Your monthly budget is: $" + total*(spend/100);
  };

  const [spend, setSpend] = useState(50);
  
  const changeSpend = (event, spend) => {
    setSpend(spend);
    console.log("spend: ", spend);
    console.log("total: ", total);

    document.getElementById("total").innerHTML = "Your monthly budget is: $" + total*(spend/100);
  };
  

  return (
    <BoxContainer>
      <FormContainer>
        <Questionaire>What is your monthly income?</Questionaire>
        <Input type="number" id="monthlyInc" onChange={updateTotal} placeholder="Monthly Income" />


        <Marginer direction="vertical" margin={20} />

        <Questionaire>Budgeting Mix</Questionaire>

        <namedSlider>Spend</namedSlider> 
        <Slider value={spend} onChange={changeSpend} aria-label="Default" valueLabelDisplay="auto" /> 
        
        <namedSlider>Save</namedSlider> 
        <Slider defaultValue={save} aria-label="Default" valueLabelDisplay="auto" />
        <Marginer direction="vertical" margin={10} />
        
        <namedSlider>Invest</namedSlider>       
        <Marginer direction="vertical" margin={10} />
        <Slider defaultValue={invest} aria-label="Default" valueLabelDisplay="auto" />

        

        <Marginer direction="vertical" margin={15} />
        <Questionaire id="total"></Questionaire>

      </FormContainer>
      <Marginer direction="vertical" margin={25} />
      <SubmitButton type="submit" onClick={submitHandler}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Clicked wrongly?
        <BoldLink href="#" onClick={switchToSignin}>
          Back
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
