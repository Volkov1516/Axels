import React, { useState } from 'react'
import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import Comments from "./Comments/Comments";

const Product = ({ product, reviews, addReview, isAuth }) => {
  const ProductCard = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px 0px 20px 0px;
    padding: 10px 40px 10px 40px;
    border: 1px solid gray;
    display: flex;
  `;

  const ProductImg = styled.img`
    width: 400px;
    height: 400px;
  `;

  const ProductInfo = styled.div`
    width: 100%;
    margin-left: 10px;
  `;

  const InputSection = styled.div`
    width: 802px;
    margin: 0 auto;
  `;

  const ReviewInput = styled.input`
    width: 700px;
    height: 60px;
    padding-left: 10px;
  `;

  const ReviewButton = styled(Button)`
    width: 100px;
    height: 60px;
    margin-bottom: 5px;
  `;

  const CommentsSection = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px 0px 20px 0px;
    padding: 10px 40px 10px 40px;
  `;

  const [reviewText, setReviewText] = useState('')

  return (
    <Container>
      <ProductCard>
        <ProductImg src={product.img} alt="product img" />
        <ProductInfo>
          <h3>{product.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            nihil harum quae eum obcaecati dolores non molestiae laborum
            mollitia? Nemo necessitatibus atque deleniti repellat aspernatur
            laboriosam id autem minima aperiam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            nihil harum quae eum obcaecati dolores non molestiae laborum
            mollitia? Nemo necessitatibus atque deleniti repellat aspernatur
            laboriosam id autem minima aperiam?
          </p>
        </ProductInfo>
      </ProductCard>

      {isAuth && <InputSection>
        <ReviewInput placeholder="Type your review" value={reviewText} onChange={e => setReviewText(e.target.value)} />
        <ReviewButton onClick={() => addReview(product.id, reviewText)} >Post</ReviewButton>
      </InputSection>}

      <CommentsSection>
        {reviews && reviews.map((review, index) => {
          if (review.productId === product.id)
            return <Comments key={index} review={review} />;
        })}
      </CommentsSection>
    </Container>
  );
};

export default Product;
