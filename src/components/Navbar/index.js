import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">BOOK.S.E</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-item active mx-4 text-center" href="/">
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-item active mx-4 text-center"
              href="/saved"
            >
              Saved Books
            </Nav.Link>
            <Nav.Link
              className="nav-item active mx-4 text-center"
              href="/contact-me"
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
