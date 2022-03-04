import React from "react";
import { BookCards } from "../components/BookCards";
import Container from "react-bootstrap/Container";
import { SearchForm } from "../components/SearchBar";

export const Home = () => {
  return (
    <Container>
      <SearchForm />
      <BookCards />
    </Container>
  );
};
