import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import classes from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

//assets
import trolley from "../Assets/trolley.png";

export default function LandingPage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/Results/${input}`);
  };

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <h1 className={classes.title}>Budge</h1>
        <div className={classes.search}>
          <p>What is your name</p>
          <form
            className={classes.form}
            id="filterForm"
            onSubmit={submitHandler}
          >
            <input
              className={classes.searchBar}
              value={input}
              onInput={(e) => setInput(e.target.value)}
              type="text"
            />
          </form>
        </div>
        <div className={classes.search}>
          <p>What is your income</p>
          <form
            className={classes.form}
            id="filterForm"
            onSubmit={submitHandler}
          >
            <input
              className={classes.searchBar}
              value={input}
              onInput={(e) => setInput(e.target.value)}
              type="text"
            />
          </form>
        </div>
        <img className={classes.image} src={trolley} />
      </div>
    </div>
  );
}
