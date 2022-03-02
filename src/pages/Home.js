import React from "react";
import { BookCards } from "../components/BookCards";
import Container from "react-bootstrap/Container";

export const Home = () => {
  return (
    <Container>
      <BookCards />
    </Container>
  );
};
