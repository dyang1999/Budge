import React, { useContext, Component, cloneElement } from "react";
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
  var save = 50;
  var invest = 20; 
  var spend = 30;
  var total = 0;
  const submitHandler = () => {
    navigate("/profile");
  };

  // const balancer = () =>{
  //   if(save>50){
  //     const difference = save-50
  //     invest = invest + difference/2
  //     spend = spend + difference/2
  //   }else{
  //     const difference = save-50
  //     invest = difference/2
  //     total = difference/2
  //   }
  // }

  const updateTotal = (monthlyInc) => {
    console.log(typeof(monthlyInc))
    console.log(monthlyInc)
    total = monthlyInc.target.value
    document.getElementById("total").innerHTML = "Your monthly budget is: $" + total;
  };

  const navAway = () => {
    navigate('/CalendarPage');
  };


  return (
    <BoxContainer>
      <FormContainer>
        <Questionaire>What is your monthly income?</Questionaire>
        <Input type="number" id="monthlyInc" onChange={updateTotal} placeholder="Monthly Income" />


        <Marginer direction="vertical" margin={20} />

        <Questionaire>Budgeting Mix</Questionaire>
        

        <namedSlider>Save</namedSlider> 
        <Slider defaultValue={save} aria-label="Default" valueLabelDisplay="auto" />
        <Marginer direction="vertical" margin={10} />

        <namedSlider>Spend</namedSlider> 
        <Slider defaultValue={spend} aria-label="Default" valueLabelDisplay="auto" /> 
        
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
