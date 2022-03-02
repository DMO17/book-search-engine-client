import React from "react";
import { BookCards } from "../components/BookCards";
import Container from "react-bootstrap/Container";
import { SearchForm } from "../components/SearchBar";
import { HomeProvider } from "../contexts/HomeProvider";

export const Home = () => {
  return (
    <HomeProvider>
      <Container>
        <SearchForm />
        <BookCards />
      </Container>
    </HomeProvider>
  );
};
