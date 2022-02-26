import React, {useState} from "react";

import classes from "./SearchResult.module.css";
import beer from "../Assets/beer.jpg";
import { useNavigate } from "react-router-dom";

export default function SearchResult(props) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);



  const redirectHandler = () => {
    navigate(`/${props.data.itemID}`);
  };

  const addToCart = () => {
    setClicked(true);
    try{
      const old = JSON.parse(localStorage.getItem("results"))
      old.push(props.data);
      localStorage.setItem("results", JSON.stringify(old));
    }catch{
      localStorage.setItem("results", JSON.stringify([props.data]))
    }
  }

  return (
    <div className={classes.root} >
      <img src={props.data.image} className={classes.image} onClick={redirectHandler}/>
      <div className={classes.text}>
        <h1 className={classes.name}>{props.data.name}</h1>
        <p className={classes.quantity}>{props.data.quantity}</p>

        <div className={classes.bottom}>
          <h3 className={classes.price}>$ {props.data.price}</h3>
          <div className={classes.icon}>
          <i class="fa fa-plus" onClick={addToCart} style={{color: clicked? "#e29f65" : "grey"}}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
