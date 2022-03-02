import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const BookCard = ({ id, title, imageUrl }) => {
  return (
    <div className="m-3" style={{ position: "relative" }} id={id}>
      <Card style={{ width: "18rem", backgroundColor: "whitesmoke" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title className="title-overflow">{title}</Card.Title>
        </Card.Body>
      </Card>
      <div className="save-icon">
        <BsFillBookmarkStarFill size={40} color="yellow" />
      </div>
      <div className="info-icon">
        <BsFillInfoCircleFill size={40} color="lightBlue" />
      </div>
    </div>
  );
};
