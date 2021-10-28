import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export const ProductCard = styled(Card)`
    margin-top: 24px;
    padding-bottom: 10px;
    &:hover {
      box-shadow: 0 20px 35px #E5E5E5;
    }
  `;

export  const ProductImg = styled(Card.Img)`
    height: 200px;
    width: 100%;
  `;

export  const ProductTitle = styled(Card.Title)`
    padding: 4px;
    margin: 0 auto;
  `;

export  const ProductDescription = styled(Card.Text)`
    padding: 0px 10px 0px 10px;
    color: gray;
  `;