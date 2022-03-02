import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { useHomeContextValues } from "../../hooks";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Card from "react-bootstrap/Card";

export const SearchForm = () => {
  const { dispatch, ACTIONS } = useHomeContextValues();
  const [searchedBook, setSearchedBook] = useState("");

  const SEARCH_BOOKS = gql`
    query Query($searchTerm: String!) {
      searchBooks(searchTerm: $searchTerm) {
        id
        title
        imageUrl
        rating
        description
      }
    }
  `;

  const onSubmit = async (e) => {
    e.preventDefault();
    await executeSearch();
    if (!!data.searchBooks) {
      console.log(data);
      await dispatch({
        type: ACTIONS.BOOK_API_CALL,
        payload: { bookData: data.searchBooks },
      });
    }
  };

  const [executeSearch, { called, loading, data }] = useLazyQuery(
    SEARCH_BOOKS,
    {
      variables: { searchTerm: searchedBook },
    }
  );

  return (
    <Container className="mt-5 text-center">
      <Card>
        <Card.Header>BOOK SEARCH ENGINE</Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: "30px" }}>
            Search for Books!
          </Card.Title>
          <Card.Text>
            Find used books, rare books, textbooks, new and out-of-print books
          </Card.Text>
          <div className="d-flex justify-content-center flex-column px-5">
            <Form onSubmit={onSubmit}>
              <Form.Control
                name="searchInput"
                value={searchedBook}
                onChange={(e) => setSearchedBook(e.target.value)}
                type="text"
                size="lg"
                placeholder="Search for a book"
              />

              <Button
                className="mt-4"
                type="submit"
                variant="success"
                size="md"
              >
                Submit Search
              </Button>
            </Form>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          About {data?.searchBooks?.length || 0} results
        </Card.Footer>
      </Card>
    </Container>
  );
};
