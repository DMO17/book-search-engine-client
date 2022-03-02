import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const SavedBookCard = ({ imageUrl, title, id }) => {
  return (
    <div className="m-3" style={{ position: "relative" }}>
      <Card style={{ width: "18rem", backgroundColor: "whitesmoke" }}>
        <Card.Img
          variant="top"
          src={
            imageUrl ||
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
        />
        <Card.Body>
          <Card.Title className="title-overflow">{title}</Card.Title>
        </Card.Body>
      </Card>
      <div className="save-icon" id={id}>
        <BsFillBookmarkStarFill size={40} color="yellow" />
      </div>
      <div className="info-icon">
        <BsFillInfoCircleFill size={40} color="lightBlue" />
      </div>
    </div>
  );
};
