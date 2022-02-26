import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";

export function NoIncome(props) {
  const { switchToSignin } = useContext(AccountContext);
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/profile");
  };

  return (
    <BoxContainer>
      <p>What is your target monthly expenditure?</p>
      <FormContainer>
        <Input type="Number" placeholder="Monthly Expenditure" />
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
