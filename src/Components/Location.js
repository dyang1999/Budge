import React from "react";

import classes from "./Location.module.css";

export default function Location(props) {
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <h1 className={classes.location}>{props.data.location}</h1>
        <h3 className={classes.distance}>{props.data.distance} km</h3>
      </div>

      <div className={classes.bottom}>
        <div>
          <p className={classes.text}>{props.data.openingHours}</p>
          <p className={classes.text}>In Stock: {props.data.stock}</p>
        </div>
        <div className={classes.bottomRight}>
        <h3 className={classes.distance}>{props.data.price}</h3>
        {props.data.promo && <p className={classes.onPromo}>On Promo!</p>}
        </div>
      </div>
    </div>
  );
}
