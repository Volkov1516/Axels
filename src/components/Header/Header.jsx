import React from "react";
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Button } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  return (
    <Navbar expand="lg" bg="primary">
      <Container>
        <Link to="/" >
          <Navbar.Brand style={{color: '#fff'}}>Logo Text</Navbar.Brand>
        </Link>
        <Link to="/login">
          <StyledButton className="justify-content-end">Login</StyledButton>
        </Link>
      </Container>
    </Navbar>
  );
};

const StyledButton = styled(Button)`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

export default Header;
