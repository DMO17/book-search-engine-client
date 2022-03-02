import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const BookCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="i2ezo4dMMn0C">
        <Card.Img
          variant="top"
          src="http://books.google.com/books/content?id=i2ezo4dMMn0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        />
        <Card.Body>
          <Card.Title>The Recruit</Card.Title>
          <Card.Text>
            When James is recently orphaned, he is recruited by a secret agency
            for his math skills and must undergo one hundred days of grueling
            training.
          </Card.Text>
          <Button variant="primary">Save</Button>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
