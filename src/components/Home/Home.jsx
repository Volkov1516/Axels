import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs="3">
          <Card>
            <Card.Img
              style={{ height: "200px", width: "100%" }}
              variant="top"
              src="https://static.toiimg.com/photo/77120379.cms"
            />
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
