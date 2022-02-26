import React from "react";
import classes from "./CartItem.module.css";
import { useState, useEffect } from "react";

export default function CartItem(props) {
  const [count, setCount] = useState(1);
  const plusOne = (e) => {
    e.preventDefault();
    if(count<props.data.stock)
    setCount(() => count + 1);
  };

  const minusOne = (e) => {
    e.preventDefault();
    if (count > 1) {
      setCount(() => count - 1);
    }
  };
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={props.data.image}
      />
      <h4 className={classes.header}>{props.data.name}</h4>
      <p className={classes.content}>12 x 350ml</p>
      <div className={classes.body}>
        <p className={classes.price}>${props.data.price}</p>
        <div className={classes.maxPax}>
          <button className={classes.minusButton} onClick={minusOne}>
            -
          </button>

          <p className={classes.count} type="number">
            {count}
          </p>
          <button className={classes.addButton} onClick={plusOne}>
            +
          </button>
        </div>
      </div>

      <p className={classes.subtext}>Available at 4 locations within 5km</p>
    </div>
  );
}
