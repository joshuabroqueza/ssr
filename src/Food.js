import React from "react";
import "./Food.css";

function Food(props) {
  return (
    <div className="food">
      <img src={props.img} className="card--images"></img>
      <div className="card--stats">
        <span>{props.rating} </span>
        <span className="gray"> ({props.reviewCount}) • </span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Food;
