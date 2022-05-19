import React from "react";
import Button from "react-bootstrap/Button";
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
            <Button variant="outline-info">More Info</Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
