import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const BookCard = ({ id, title, imageUrl, description }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="i2ezo4dMMn0C">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Save</Button>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
