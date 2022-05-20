import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function MyModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        More Info
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.character.image} />
        </Modal.Body>
        <Modal.Body>Gender: {props.character.gender}</Modal.Body>
        <Modal.Body>Location: {props.character.location.name}</Modal.Body>
        <Modal.Body>Species: {props.character.species}</Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
