import React from "react";
import Modal from "./Modal";

import "./Cards.css";

function Card(props) {
  console.log(props);
  const name = props.character.name;
  const image = props.character.image;

  return (
    <div className="container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt="Avatar" />
          </div>
          <div className="flip-card-back" key={props.character.id}>
            <h1>{name}</h1>
            <Modal character={props} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
