import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import classes from "./LandingPage.module.css";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { NoIncome } from "./noIncome";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

const BoxContainer = styled.div`
  width: 390px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 390px;
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 7em;
`;

const BackDrop = styled(motion.div)`
  width: 120%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(2,0,36);
`;

const HeaderContainer = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 35px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`; 

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
`;

const backdropVariants = {
  expanded: {
    width: "210%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export default function LandingPage() {
  const [input, setInput] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToNoIncome = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("noIncome");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };


  
  const contextValue = { switchToSignup, switchToSignin, switchToNoIncome };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>to BUDGE.IT</HeaderText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Budgeting</HeaderText>
              <HeaderText>Goals</HeaderText>
            </HeaderContainer>
          )}
          {active === "noIncome" && (
            <HeaderContainer>
              <HeaderText>Expenditure</HeaderText>
              <HeaderText>Goals</HeaderText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "noIncome" && <NoIncome />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
