import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Login = ({ isAuth, setIsAuth }) => {

  const handleAuth = () => {
    setIsAuth(!isAuth)
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>
        <Button onClick={handleAuth} > Submit </Button>
      </Form>
    </Container>
  )
}

export default Login
