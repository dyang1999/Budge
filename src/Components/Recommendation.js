import React from "react";
import classes from "./Recommendation.module.css";

export default function Recommendation(props) {
  return (
    <div className={classes.root}>
      <a
        className={classes.link}
        href={`https://www.google.com/maps/place/?q=place_id:${props.data.locationID}`}
        target="_blank"
      >
        {props.data.location}  ↗️
      </a>
      <p>{props.data.info}</p>
    </div>
  );
}
