import React from "react";
import classes from "./Product.module.css";

import beer from "../Assets/beer.jpg";

export default function Product(props) {
  return (

    <div className={classes.root}>
      <img className={classes.beer} src={beer} />
      <div className={classes.text}>
        <h1 className={classes.title}>{props.data.name}</h1>
        <h3 className={classes.subtitle}>{props.data.country}</h3>
        <p className={classes.desc}>
          {props.data.description}
        </p>
      </div>
    </div>
  );
}
