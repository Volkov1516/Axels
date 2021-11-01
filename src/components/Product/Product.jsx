import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ProductCard, ProductImg, ProductInfo, ProductDescription, InputSectionLogin,
  InputSectionLoginText, InputSection, ReviewInput, ReviewButton, CommentsSection } from "../../styled/Product/Product.js";
import Comments from "./Comments";

const Product = ({ product, reviews, addReview, isAuth }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviewRate, setReviewRate] = useState("");

  return (
    <Container>
      <ProductCard>
        <Row>
          <Col lg="5" md="4" sm="6">
        <ProductImg src={product.img} alt="product img" />
        </Col>
        <Col lg="7" md="12" sm="12" >
        <ProductInfo>
          <h3>{product.title}</h3>
          <ProductDescription>{product.descriptionFull}</ProductDescription>
        </ProductInfo>
        </Col>
        </Row>
      </ProductCard>

      {isAuth ? (
        <Row>
        <InputSection>
          <ReviewInput
            placeholder="Type your review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <Form.Select value={reviewRate} onChange={e => setReviewRate(e.target.value)} style={{width: '60px', marginBottom: '5px'}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <ReviewButton onClick={() => addReview(product.id, reviewText, reviewRate)}>
            Post
          </ReviewButton>
        </InputSection>
        </Row>
      ) : (
        <InputSectionLogin>
          <InputSectionLoginText>
            Please, <Link to="/login"> <Button variant="outline-danger" size="sm">Login</Button></Link> to leave a comment!
          </InputSectionLoginText>
        </InputSectionLogin>
      )}

      <CommentsSection>
        {reviews && reviews.map((review, index) => (review.productId === product.id) && <Comments key={index} review={review} />)}
      </CommentsSection>
    </Container>
  );
};

export default Product;
