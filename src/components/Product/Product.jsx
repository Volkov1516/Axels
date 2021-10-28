import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import {
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDescription,
  InputSectionLogin,
  InputSectionLoginText,
  InputSection,
  ReviewInput,
  ReviewButton,
  CommentsSection,
} from "./styledProduct.js";
import Comments from "./Comments/Comments";

const Product = ({ product, reviews, addReview, isAuth }) => {
  const [reviewText, setReviewText] = useState("");

  const [reviewRate, setReviewRate] = useState("");

  return (
    <Container>
      <ProductCard>
        <ProductImg src={product.img} alt="product img" />
        <ProductInfo>
          <h3>{product.title}</h3>
          <ProductDescription>{product.descriptionFull}</ProductDescription>
        </ProductInfo>
      </ProductCard>

      {isAuth ? (
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
      ) : (
        <InputSectionLogin>
          <InputSectionLoginText>
            Please, <Link to="/login"> <Button variant="outline-danger" size="sm">Login</Button></Link> to leave a comment!
          </InputSectionLoginText>
        </InputSectionLogin>
      )}

      <CommentsSection>
        {reviews &&
          reviews.map((review, index) => {
            if (review.productId === product.id)
              return <Comments key={index} review={review} />;
          })}
      </CommentsSection>
    </Container>
  );
};

export default Product;
