import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useHomeContextValues } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const PrivateNavigationBar = () => {
  const { setIsLoggedIn, setUser } = useHomeContextValues();

  const navigate = useNavigate();

  const logOutBtn = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUser({});

    navigate("/", { replace: true });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">BOOK.S.E</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-item active mx-4 text-center" href="/">
              MyHome
            </Nav.Link>
            <Nav.Link
              className="nav-item active mx-4 text-center"
              href="/saved"
            >
              Saved Books
            </Nav.Link>
            <Nav.Link className="nav-item active mx-4 text-center">
              <Button variant="dark" onClick={logOutBtn}>
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
