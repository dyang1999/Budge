import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Questionaire
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToNoIncome } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
        <Questionaire>What is your name?</Questionaire>
        <Input type="text" placeholder="Name" />
        <Marginer direction="vertical" margin={30} />
        <label id="income">
        <Marginer direction="vertical" margin={25} />
        <input type="radio" id="income" onClick={switchToSignup} name="incomeQuery" value="Has Income" />
        ⠀I draw a monthly income</label>

        <Marginer direction="vertical" margin={10} />

        <label id="failure">
        <input type="radio" id="failure" onClick={switchToNoIncome} name="incomeQuery" value="Failure" />
        ⠀I do not monthly income</label>
      </FormContainer>
      
      {/* <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink> */}
    </BoxContainer>
  );
}
