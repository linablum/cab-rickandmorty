import React from "react";
import "./Cards.css";

function Card(props) {
  console.log(props);
  const name = props.character.name;
  const image = props.character.image;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Avatar" />
        </div>
        <div className="flip-card-back" key={props.character.id}>
          <h1>{name}</h1>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
